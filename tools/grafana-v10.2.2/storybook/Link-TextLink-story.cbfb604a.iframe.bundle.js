"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9227],{"./src/components/Link/TextLink.story.tsx":function(W,x,s){s.r(x),s.d(x,{Basic:function(){return d},Example:function(){return h},default:function(){return M}});var a=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),u=s("./src/utils/storybook/StoryExample.tsx"),L=s("./src/components/Layout/Layout.tsx"),p=s("./src/components/Text/Text.tsx"),r=s("./src/components/Link/TextLink.tsx"),e=s("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),j=s("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),l=s("../../.yarn/__virtual__/@storybook-addon-docs-virtual-1d1ae45bc6/2/yarn/cache/@storybook-addon-docs-npm-7.4.5-56a02b64b9-8110acf52b.zip/node_modules/@storybook/addon-docs/dist/blocks.mjs");function m(t){const n=Object.assign({h1:"h1",p:"p",code:"code",hr:"hr",ol:"ol",li:"li",a:"a",h2:"h2",h3:"h3",strong:"strong",ul:"ul",em:"em",pre:"pre"},(0,j.ah)(),t.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.h_,{title:"MDX|TextLink",component:r.h}),`
`,(0,e.jsx)(n.h1,{id:"textlink",children:"TextLink"}),`
`,(0,e.jsxs)(n.p,{children:["The TextLink component renders an anchor tag ",(0,e.jsx)(n.code,{children:"<a>"})," that takes users to another page, external or internal to Grafana."]}),`
`,(0,e.jsx)(n.hr,{}),`
`,(0,e.jsx)(n.p,{children:"In this documentation you can find:"}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#usage",children:"Usage"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#types",children:"Types"})}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"#behaviour",children:"Behaviour"}),`
`,(0,e.jsx)("br",{}),`
`,"4.1. ",(0,e.jsx)(n.a,{href:"#inline-behaviour",children:"Inline"}),`
`,(0,e.jsx)("br",{}),`
`,"4.2. ",(0,e.jsx)(n.a,{href:"#standalone-behaviour",children:"Standalone"}),`
`,(0,e.jsx)("br",{}),`
`,"4.3. ",(0,e.jsx)(n.a,{href:"#icons-behaviour",children:"Icons"})]}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#propstable",children:"Props table"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#related",children:"Related"})}),`
`]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsxs)(n.h2,{id:"-usage",children:[(0,e.jsx)("a",{name:"usage"})," Usage"]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)(n.h3,{id:"when-to-use",children:(0,e.jsx)(n.strong,{children:"When to use"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To redirect the user to another page, external or internal"}),`
`,(0,e.jsx)(n.li,{children:"When redirecting the user through a link in a word or phrase within a paragraph."}),`
`,(0,e.jsx)(n.li,{children:"When redirecting the user through a link in a word or phrase, not within a paragraph but surrounded by other blocks of text."}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"when-not-to-use",children:(0,e.jsx)(n.strong,{children:"When not to use"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"When its purpose is to trigger an action, please use a Button or IconButton component"}),`
`,(0,e.jsx)(n.li,{children:"When it still redirects the user but it should have the same appearance as a button, please use the LinkButton component."}),`
`,(0,e.jsx)(n.li,{children:"When the link is just comprised by an icon use IconButton component."}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"dos",children:(0,e.jsx)(n.strong,{children:"Do\u2019s"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Use the default styles as the first and main option as they are though to be accessible and consistent."}),`
`,(0,e.jsx)(n.li,{children:"Use the external icon (the default one) when the TextLink goes to an external page as its meaning is broadly known."}),`
`,(0,e.jsxs)(n.li,{children:["In case the default icon does not fit, please use one of the icons of our ",(0,e.jsx)(n.a,{href:"https://developers.grafana.com/ui/latest/index.html?path=/story/docs-overview-icon--icons-overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"library"}),"."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"donts",children:(0,e.jsx)(n.strong,{children:"Don\u2019ts"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Do not use \u2018primary\u2019 color in a standalone link unless it is a special use case such as the \u2018Dashboard list\u2019, menu items or similar."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Do not override any styles in any way. Instead, ask the Design System team for an improvement of this component."}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsx)(n.p,{children:"Do not attempt to add a new icon. You should fulfil a contribution path to first add the icon to our Design System and then use it in this component."}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"-types",children:[(0,e.jsx)("a",{name:"types"})," Types"]}),`
`,(0,e.jsxs)(n.p,{children:["Within Grafana, there are two different types of ",(0,e.jsx)(n.em,{children:"text links"}),", 'inline' or 'standalone', whether they are wrapped by text or being a standalone element."]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Inline"}),": It is part of a broader text. It will be surrounded by text, before, after or in both directions. Although it can show an icon at its end, we advise not to do that."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.strong,{children:"Standalone"}),": It is a block not surrounded immediately by more text."]}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"subtypes",children:(0,e.jsx)(n.strong,{children:"Subtypes"})}),`
`,(0,e.jsx)(n.p,{children:"Both inline or standalone text links will redirect the user to a specific page, therefore, depending on this they can be internal or external."}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"Internal"}),": Redirect the user to a page inside Grafana."]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"External"}),": Redirect the user to a page outside Grafana. The page will open on a new window. By default, an external text link will show the \u2018external-link-alt\u2019 icon."]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"-behaviour",children:[(0,e.jsx)("a",{name:"behaviour"})," Behaviour"]}),`
`,(0,e.jsx)(n.p,{children:"The following is the default behaviour and so, it will be applied according to its type."}),`
`,(0,e.jsxs)(n.h3,{id:"inline",children:[(0,e.jsx)("a",{name:"inline-behaviour"}),(0,e.jsx)(n.strong,{children:"Inline"}),":",(0,e.jsx)("br",{})]}),`
`,(0,e.jsx)(l.MB,{children:(0,e.jsx)(r.h,{href:"https://google.es",external:!0,inline:!0,children:"This an inline link example"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.em,{children:"Initial appearence"}),": Blue and underlined at first. - ",(0,e.jsx)(n.em,{children:"On hover"}),": blue and not underlined"]}),`
`]}),`
`,(0,e.jsxs)(n.h3,{id:"standalone",children:[(0,e.jsx)("a",{name:"standalone-behaviour"}),(0,e.jsx)(n.strong,{children:"Standalone"}),":"]}),`
`,(0,e.jsx)(l.MB,{children:(0,e.jsx)(r.h,{href:"https://google.es",inline:!1,external:!0,children:"This an standalone link example"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.em,{children:"Initial appearence"}),": Blue and not underlined at first. - ",(0,e.jsx)(n.em,{children:"On hover"}),": blue and underlined."]}),`
`]}),`
`,(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.em,{children:"Example"}),`: We should take into account that through the color prop the user will be able to change this value,
but the rest will be kept. So, in this example, if the user renders an external and standalone `,(0,e.jsx)(n.em,{children:"text link"})," setting the color value to 'primary' the result will be a text link 'white' in dark theme or 'black' in light theme, as set by the user, and not underlined at first while blue and underlined when onhover, as it inherits from the standalone default behaviour."]}),`
`,(0,e.jsx)(l.MB,{children:(0,e.jsx)(r.h,{href:"https://google.es",color:"primary",inline:!1,external:!0,children:"This an external standalone link example"})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<TextLink href="https://google.es" color="primary" inline={false} external>
  This an external standalone link example
</TextLink>
`})}),`
`,(0,e.jsxs)(n.h3,{id:"icons",children:[(0,e.jsx)("a",{name:"icons-behaviour"}),(0,e.jsx)(n.strong,{children:"Icons"}),":"]}),`
`,(0,e.jsxs)(n.p,{children:["By default, ",(0,e.jsxs)(n.strong,{children:["external ",(0,e.jsx)(n.em,{children:"text links"})]})," will show an ",(0,e.jsx)(n.code,{children:"external-alt-icon"}),". If by design reasons, the user needs to set another icon it can be done through the correspondent prop."]}),`
`,(0,e.jsx)(l.MB,{children:(0,e.jsx)(r.h,{href:"https://google.es",external:!0,children:"This an external with the default icon"})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<TextLink href="https://google.es" external>
  This an external with the default icon
</TextLink>
`})}),`
`,(0,e.jsxs)(n.p,{children:["Both, ",(0,e.jsx)(n.strong,{children:"external"})," and ",(0,e.jsx)(n.strong,{children:"internal"})," links can show a specific icon using the ",(0,e.jsx)(n.code,{children:"icon"})," prop."]}),`
`,(0,e.jsx)(l.MB,{children:(0,e.jsx)(r.h,{href:"https://google.es",icon:"google",external:!0,children:"This an external with a specific icon"})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<TextLink href="https://google.es" icon="google" external>
  This an external with a specific icon
</TextLink>
`})}),`
`,(0,e.jsxs)(n.h2,{id:"props-table",children:[(0,e.jsx)("a",{name:"propstable"}),"Props table"]}),`
`,(0,e.jsx)(l.$4,{of:r.h}),`
`,(0,e.jsxs)(n.h2,{id:"related",children:[(0,e.jsx)("a",{name:"related"}),"Related"]}),`
`,(0,e.jsx)(n.p,{children:"Links to related components:"}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs/buttons-button--docs",children:"Button"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs/buttons-button--docs#links",children:"LinkButton"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs/buttons-iconbutton--docs",children:"IconButton"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs-overview-icon--docs",children:"Icon"})}),`
`]})]})}function E(t={}){const{wrapper:n}=Object.assign({},(0,j.ah)(),t.components);return n?(0,e.jsx)(n,Object.assign({},t,{children:(0,e.jsx)(m,t)})):m(t)}var B=E,I=Object.defineProperty,S=Object.defineProperties,O=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,g=(t,n,i)=>n in t?I(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(t,n)=>{for(var i in n||(n={}))P.call(n,i)&&g(t,i,n[i]);if(f)for(var i of f(n))D.call(n,i)&&g(t,i,n[i]);return t},c=(t,n)=>S(t,O(n)),b,v,y,k,w,T;const G={title:"General/TextLink",component:r.h,parameters:{docs:{page:B},controls:{exclude:["href","external"]}},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body","bodySmall",void 0]},weight:{control:"select",options:["bold","medium","light","regular",void 0]},color:{control:"select",options:["primary","secondary","disabled","link","maxContrast",void 0]},inline:{control:"boolean"}},args:{variant:"body",weight:"light",color:void 0,inline:!1,href:"https://www.google.com",external:!0,icon:"external-link-alt"}},h=t=>a.createElement(L.wc,null,a.createElement(u.E,{name:"This is a 'inline + external' link with the default behaviour"},a.createElement(p.x,{element:"p"},"To get started with a forever free Grafana Cloud account, sign up at \xA0",a.createElement(r.h,c(o({href:"https://grafana.com/"},t),{inline:!0}),"grafana.com"),".")),a.createElement(u.E,{name:"This is a 'standalone + external' link with the default behaviour"},a.createElement(r.h,o({href:"https://grafana.com/docs/grafana/latest/"},t),"Learn how in the docs")),a.createElement("hr",null),a.createElement(p.x,{element:"p"},"*The examples cannot contemplate an internal link due to conflicts between Storybook and React Router"));h.parameters={controls:{exclude:["href","external","variant","weight","color","inline","icon"]}};const d=t=>a.createElement("div",null,a.createElement(r.h,o({href:t.href},t),"Go to Google"));var M=G;h.parameters=c(o({},h.parameters),{docs:c(o({},(b=h.parameters)==null?void 0:b.docs),{source:o({originalSource:`args => {
  return <VerticalGroup>
      <StoryExample name="This is a 'inline + external' link with the default behaviour">
        <Text element="p">
          To get started with a forever free Grafana Cloud account, sign up at &#160;
          <TextLink href="https://grafana.com/" {...args} inline>
            grafana.com
          </TextLink>
          .
        </Text>
      </StoryExample>
      <StoryExample name="This is a 'standalone + external' link with the default behaviour">
        <TextLink href="https://grafana.com/docs/grafana/latest/" {...args}>
          Learn how in the docs
        </TextLink>
      </StoryExample>
      <hr />
      <Text element="p">
        *The examples cannot contemplate an internal link due to conflicts between Storybook and React Router
      </Text>
    </VerticalGroup>;
}`},(y=(v=h.parameters)==null?void 0:v.docs)==null?void 0:y.source)})}),d.parameters=c(o({},d.parameters),{docs:c(o({},(k=d.parameters)==null?void 0:k.docs),{source:o({originalSource:`args => {
  return <div>
      <TextLink href={args.href} {...args}>
        Go to Google
      </TextLink>
    </div>;
}`},(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source)})})}}]);
