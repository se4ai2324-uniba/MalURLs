import type { ApiGetFeatureResponse } from "$lib/types.js";
import { API_URL } from "$env/static/private";

export const actions = {
  getFeatures: async (event) => {
    const form_data = await event.request.formData();
    const url = form_data.get("url") as string;

    const response = await fetch(`${API_URL}/get_features`, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ url }),
    });

    const json = await response.json();
    const { url_features } = json;

    console.log(url_features);

    const keys = Object.keys(url_features);
    const values = Object.values(url_features);

    const feature_response: ApiGetFeatureResponse[] = [];

    for (let index = 0; index < keys.length; index++) {
      const feature_obj: ApiGetFeatureResponse = {
        feature: keys[index],
        value: values[index],
      } as ApiGetFeatureResponse;

      feature_response.push(feature_obj);
    }
    return feature_response;
  },
};
