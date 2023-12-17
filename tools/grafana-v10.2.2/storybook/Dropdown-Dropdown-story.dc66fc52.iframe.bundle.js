"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8618],{"./src/utils/storybook/StoryExample.tsx":function(O,u,t){t.d(u,{E:function(){return s}});var o=t("../../../yarn/cache/@emotion-css-npm-11.11.2-dbfa42cf83-1edea109df.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),y=t("./src/themes/ThemeContext.tsx");const s=({name:p,children:c})=>{const l=(0,y.l4)(),r=(0,o.iv)({width:"100%",padding:"16px"}),i=(0,o.iv)({color:l.colors.text.secondary,marginBottom:"16px"});return d.createElement("div",{className:r},d.createElement("h5",{className:i},p),c)};s.displayName="StoryExample";try{s.displayName="StoryExample",s.__docgenInfo={description:"",displayName:"StoryExample",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/StoryExample.tsx#StoryExample"]={docgenInfo:s.__docgenInfo,name:"StoryExample",path:"src/utils/storybook/StoryExample.tsx#StoryExample"})}catch{}},"./src/components/Dropdown/Dropdown.story.tsx":function(O,u,t){t.r(u),t.d(u,{Examples:function(){return m},default:function(){return L}});var o=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),d=t("./src/utils/storybook/StoryExample.tsx"),y=t("./src/components/Button/Button.tsx"),s=t("./src/components/IconButton/IconButton.tsx"),p=t("./src/components/Layout/Layout.tsx"),c=t("./src/components/Menu/Menu.tsx"),l=t("./src/components/Dropdown/Dropdown.tsx"),r=t("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),i=t("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),h=t("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs");function v(n){const e=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.h_,{title:"MDX|Dropdown",component:l.L}),`
`,(0,r.jsx)(e.h1,{id:"dropdown",children:"Dropdown"}),`
`,(0,r.jsx)(e.p,{children:"Hook up a menu or other overlay to any trigger."}),`
`,(0,r.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,r.jsx)(e.p,{children:`When you want a button, link or icon button to open a Menu or Popover. By default the trigger is click but it can be changed to show on hover using the
trigger property.`}),`
`,(0,r.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`import { Dropdown, Menu, Button } from '@grafana/ui';

const menu = (
  <Menu>
    <Menu.Item label="Google" />
    <Menu.Item label="Filter" />
  </Menu>
);

return (
  <Dropdown overlay={menu}>
    <Button icon="bars" />
  </Dropdown>
);
`})}),`
`,(0,r.jsx)(h.Ed,{of:l.L})]})}function S(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(v,n)})):v(n)}var M=S,I=Object.defineProperty,w=Object.defineProperties,B=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,f=(n,e,a)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,x=(n,e)=>{for(var a in e||(e={}))P.call(e,a)&&f(n,a,e[a]);if(E)for(var a of E(e))_.call(e,a)&&f(n,a,e[a]);return n},g=(n,e)=>w(n,B(e)),b,D,j;const C={title:"Overlays/Dropdown",component:l.L,parameters:{docs:{page:M},controls:{exclude:["className"]}}};function m(){const n=o.createElement(c.v,null,o.createElement(c.v.Item,{label:"View settings"}),o.createElement(c.v.Item,{label:"Edit actions"}),o.createElement(c.v.Item,{label:"Share"}),o.createElement(c.v.Item,{label:"Delete"}));return o.createElement(p.wc,null,o.createElement(d.E,{name:"Button + defaults"},o.createElement(l.L,{overlay:n},o.createElement(y.zx,{variant:"secondary"},"Button"))),o.createElement(d.E,{name:"Icon button, placement=bottom-start"},o.createElement(l.L,{overlay:n,placement:"bottom-start"},o.createElement(s.h,{tooltip:"Open menu",variant:"secondary",name:"bars"}))))}m.parameters={controls:{hideNoControlsWarning:!0,include:[]}};var L=C;m.parameters=g(x({},m.parameters),{docs:g(x({},(b=m.parameters)==null?void 0:b.docs),{source:x({originalSource:`function Examples() {
  const menu = <Menu>
      <Menu.Item label="View settings" />
      <Menu.Item label="Edit actions" />
      <Menu.Item label="Share" />
      <Menu.Item label="Delete" />
    </Menu>;
  return <VerticalGroup>
      <StoryExample name="Button + defaults">
        <Dropdown overlay={menu}>
          <Button variant="secondary">Button</Button>
        </Dropdown>
      </StoryExample>

      <StoryExample name="Icon button, placement=bottom-start">
        <Dropdown overlay={menu} placement="bottom-start">
          <IconButton tooltip="Open menu" variant="secondary" name="bars" />
        </Dropdown>
      </StoryExample>
    </VerticalGroup>;
}`},(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source)})})}}]);
