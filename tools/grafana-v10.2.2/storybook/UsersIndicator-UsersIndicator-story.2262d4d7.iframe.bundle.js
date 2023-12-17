"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3016],{"./src/components/UsersIndicator/UsersIndicator.story.tsx":function(R,m,s){s.r(m),s.d(m,{Basic:function(){return c},WithManyUsers:function(){return l},default:function(){return N}});var d=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),u=s("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),w=s("./src/themes/ThemeContext.tsx"),p=s("./src/components/UsersIndicator/UserIcon.tsx");const r=({users:n,onClick:e,limit:t=4})=>{const V=(0,w.wW)(J);if(!n.length)return null;t=t>0?t:4;const S=n.length>t,D=n.length-t,L=D>99;return d.createElement("div",{className:V.container,"aria-label":"Users indicator container"},S&&d.createElement(p.t,{onClick:e,userView:{user:{name:"Extra users"},lastActiveAt:""},showTooltip:!1},L?"...":`+${D}`),n.slice(0,S?t:t+1).reverse().map(_=>d.createElement(p.t,{key:_.user.name,userView:_})))},J=n=>({container:(0,u.iv)({display:"flex",justifyContent:"center",flexDirection:"row-reverse",marginLeft:n.spacing(1),"& > button":{marginLeft:n.spacing(-1)}}),dots:(0,u.iv)({marginBottom:"3px"})});try{r.displayName="UsersIndicator",r.__docgenInfo={description:"",displayName:"UsersIndicator",props:{users:{defaultValue:null,description:"An object that contains the user's details and 'lastActiveAt' status",name:"users",required:!0,type:{name:"UserView[]"}},limit:{defaultValue:{value:"4"},description:"A limit of how many user icons to show before collapsing them and showing a number of users instead",name:"limit",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"onClick handler for the user number indicator",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UsersIndicator/UsersIndicator.tsx#UsersIndicator"]={docgenInfo:r.__docgenInfo,name:"UsersIndicator",path:"src/components/UsersIndicator/UsersIndicator.tsx#UsersIndicator"})}catch{}var a=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),h=s("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),v=s("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function f(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,h.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.h_,{title:"MDX|UsersIndicator",component:r}),`
`,(0,a.jsx)(e.h1,{id:"usersindicator",children:"UsersIndicator"}),`
`,(0,a.jsx)(e.p,{children:"A component that displays a set of user icons indicating which users are currently active. If there are too many users to display all the icons, it will collapse the icons into a single icon with a number indicating the number of additional users."}),`
`,(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),`
`,(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:`import { UsersIndicator } from '@grafana/ui';

const users = [
  {
    user: {
      name: 'John Smith',
      avatarUrl: 'https://example.com/avatar.png',
    },
    lastActiveAt: '2023-04-18T15:00:00.000Z',
  },
  {
    user: {
      name: 'Jane Doe',
      avatarUrl: 'https://example.com/avatar.png',
    },
    lastActiveAt: '2023-04-17T10:00:00.000Z',
  },
  {
    user: {
      name: 'Bob Johnson',
      avatarUrl: 'https://example.com/avatar.png',
    },
    lastActiveAt: '2023-04-16T08:00:00.000Z',
  },
];

const ExampleComponent = () => {
  return (
    <div>
      <UsersIndicator users={users} limit={2} />
    </div>
  );
};
`})}),`
`,(0,a.jsx)(v.Ed,{of:r}),`
`,(0,a.jsx)(e.h2,{id:"userview-type",children:"UserView type"}),`
`,(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:`import { DateTimeInput } from '@grafana/data';

export interface UserView {
  user: {
    /** User's name, containing first + last name */
    name: string;
    /** URL to the user's avatar */
    avatarUrl?: string;
  };
  /** Datetime string when the user was last active */
  lastActiveAt: DateTimeInput;
}
`})})]})}function O(n={}){const{wrapper:e}=Object.assign({},(0,h.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(f,n)})):f(n)}var C=O,E=Object.defineProperty,T=Object.defineProperties,P=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,U=(n,e,t)=>e in n?E(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,o=(n,e)=>{for(var t in e||(e={}))B.call(e,t)&&U(n,t,e[t]);if(g)for(var t of g(e))k.call(e,t)&&U(n,t,e[t]);return n},i=(n,e)=>T(n,P(e)),y,x,I,j,b,A;const M={title:"General/UsersIndicator",component:r,argTypes:{limit:{control:{type:"number",min:1}}},parameters:{docs:{page:C},knobs:{disabled:!0},controls:{exclude:["className","onClick"]},actions:{disabled:!0}},args:{onClick:void 0}},c=n=>{const e=[{name:"John Doe",avatarUrl:"https://picsum.photos/id/1/200/200"},{name:"Jane Smith",avatarUrl:""},{name:"Bob Johnson",avatarUrl:"https://picsum.photos/id/3/200/200"}];return d.createElement(r,i(o({},n),{users:e.map(t=>({user:t,lastActiveAt:new Date().toDateString()}))}))};c.args={limit:4};const l=n=>{const e=[{name:"John Doe",avatarUrl:"https://picsum.photos/id/1/200/200"},{name:"Jane Smith",avatarUrl:""},{name:"Bob Johnson",avatarUrl:"https://picsum.photos/id/3/200/200"},{name:"John Smith",avatarUrl:"https://picsum.photos/id/1/200/200"},{name:"Jane Johnson",avatarUrl:""}];return d.createElement(r,i(o({},n),{users:e.map(t=>({user:t,lastActiveAt:new Date().toDateString()}))}))};l.args={limit:4};var N=M;c.parameters=i(o({},c.parameters),{docs:i(o({},(y=c.parameters)==null?void 0:y.docs),{source:o({originalSource:`args => {
  const users = [{
    name: 'John Doe',
    avatarUrl: 'https://picsum.photos/id/1/200/200'
  }, {
    name: 'Jane Smith',
    avatarUrl: ''
  }, {
    name: 'Bob Johnson',
    avatarUrl: 'https://picsum.photos/id/3/200/200'
  }];
  return <UsersIndicator {...args} users={users.map(user => ({
    user,
    lastActiveAt: new Date().toDateString()
  }))} />;
}`},(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source)})}),l.parameters=i(o({},l.parameters),{docs:i(o({},(j=l.parameters)==null?void 0:j.docs),{source:o({originalSource:`args => {
  const users = [{
    name: 'John Doe',
    avatarUrl: 'https://picsum.photos/id/1/200/200'
  }, {
    name: 'Jane Smith',
    avatarUrl: ''
  }, {
    name: 'Bob Johnson',
    avatarUrl: 'https://picsum.photos/id/3/200/200'
  }, {
    name: 'John Smith',
    avatarUrl: 'https://picsum.photos/id/1/200/200'
  }, {
    name: 'Jane Johnson',
    avatarUrl: ''
  }];
  return <UsersIndicator {...args} users={users.map(user => ({
    user,
    lastActiveAt: new Date().toDateString()
  }))} />;
}`},(A=(b=l.parameters)==null?void 0:b.docs)==null?void 0:A.source)})})}}]);
