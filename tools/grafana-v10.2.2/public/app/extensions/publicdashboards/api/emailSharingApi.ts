import { notifyApp } from 'app/core/actions';
import { createSuccessNotification } from 'app/core/copy/appNotification';
import { publicDashboardApi } from 'app/features/dashboard/api/publicDashboardApi';
import {
  SessionDashboard,
  SessionUser,
} from 'app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils';

const emailSharingApi = publicDashboardApi.injectEndpoints({
  endpoints: (builder) => ({
    requestAccess: builder.mutation<void, { email: string; accessToken: string }>({
      query: (params) => ({
        url: '/public/dashboards/share/request-access',
        method: 'POST',
        data: params,
      }),
    }),
    addRecipient: builder.mutation<void, { recipient: string; dashboardUid: string; uid: string }>({
      query: ({ recipient, uid }) => ({
        url: `/public-dashboards/${uid}/share/recipients`,
        method: 'POST',
        data: { recipient },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('Invite sent!')));
      },
      invalidatesTags: (result, error, { dashboardUid }) => [{ type: 'PublicDashboard', id: dashboardUid }],
    }),
    deleteRecipient: builder.mutation<void, { recipientUid: string; dashboardUid: string; uid: string }>({
      query: ({ uid, recipientUid }) => ({
        url: `/public-dashboards/${uid}/share/recipients/${recipientUid}`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('User revoked')));
      },
      invalidatesTags: (result, error, { dashboardUid }) => [
        { type: 'PublicDashboard', id: dashboardUid },
        'UsersWithActiveSessions',
        'ActiveUserDashboards',
      ],
    }),
    reshareAccessToRecipient: builder.mutation<void, { recipientUid: string; uid: string }>({
      query: ({ uid, recipientUid }) => ({
        url: `/public-dashboards/${uid}/share/recipients/${recipientUid}`,
        method: 'PATCH',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(notifyApp(createSuccessNotification('Invite resent!')));
      },
    }),
    getActiveUsers: builder.query<SessionUser[], void>({
      query: () => ({
        url: '/public-dashboards/share/users?status=active',
      }),
      providesTags: ['UsersWithActiveSessions'],
    }),
    getActiveUserDashboards: builder.query<SessionDashboard[], string>({
      query: (email) => ({
        url: `/public-dashboards/share/users/${email}/dashboards?status=active`,
      }),
      providesTags: (result, _, email) => [{ type: 'ActiveUserDashboards', id: email }],
    }),
  }),
  overrideExisting: true,
});

export const { useRequestAccessMutation, useGetActiveUserDashboardsQuery, useGetActiveUsersQuery } = emailSharingApi;
export default emailSharingApi;
