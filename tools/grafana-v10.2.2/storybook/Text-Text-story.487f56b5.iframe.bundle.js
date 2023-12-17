"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1223],{"./src/components/Text/Text.story.tsx":function(I,x,a){a.r(x),a.d(x,{Basic:function(){return d},Example:function(){return h},default:function(){return F}});var s=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),p=a("./src/utils/storybook/StoryExample.tsx"),k=a("./src/components/Layout/Layout.tsx"),r=a("./src/components/Text/Text.tsx"),e=a("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),u=a("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),c=a("../../.yarn/__virtual__/@storybook-addon-docs-virtual-1d1ae45bc6/2/yarn/cache/@storybook-addon-docs-npm-7.4.5-56a02b64b9-8110acf52b.zip/node_modules/@storybook/addon-docs/dist/blocks.mjs"),E=a("./src/components/Link/TextLink.tsx"),A=a("./src/components/Tooltip/Tooltip.tsx");function m(t){const n=Object.assign({h1:"h1",p:"p",hr:"hr",ol:"ol",li:"li",a:"a",h2:"h2",h3:"h3",strong:"strong",ul:"ul",code:"code",pre:"pre",em:"em"},(0,u.ah)(),t.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.h_,{title:"MDX|Text",component:r.x}),`
`,(0,e.jsx)(n.h1,{id:"text",children:"Text"}),`
`,(0,e.jsx)(n.p,{children:"The Text component can be used to apply typography styles in a simple way, without the need of extra css."}),`
`,(0,e.jsx)(n.hr,{}),`
`,(0,e.jsx)(n.p,{children:"In this documentation you can find:"}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#usage",children:"Usage"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#content",children:"Content"})}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"#formating",children:"Formating"}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#anatomy",children:"Anatomy"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#behaviour",children:"Behaviour"})}),`
`]}),`
`]}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`,(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"#propstable",children:"Props table"})}),`
`]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsxs)(n.h2,{id:"-usage",children:[(0,e.jsx)("a",{name:"usage"})," Usage"]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)(n.h3,{id:"when-to-use",children:(0,e.jsx)(n.strong,{children:"When to use"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"To display text, with styles applied consistently across the product, and to provide structure to each page."}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"when-not-to-use",children:(0,e.jsx)(n.strong,{children:"When not to use"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"If there is any straightforward interaction between the text and the user there should be a better component to use: Button, TextLink, Menu\u2026"}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"dos",children:(0,e.jsx)(n.strong,{children:"Do's"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsx)(n.li,{children:"Heading should be organized in hierarchy."}),`
`,(0,e.jsxs)(n.li,{children:["When a heading needs to have the appearance of another heading rank but it will affect the page heading hierarchy, use ",(0,e.jsx)(n.code,{children:"variant"})," prop to modify its style instead."]}),`
`,(0,e.jsx)(n.li,{children:"Use weight or italic for emphasis."}),`
`]}),`
`,(0,e.jsx)(n.h3,{id:"donts",children:(0,e.jsx)(n.strong,{children:"Don'ts"})}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsxs)(n.p,{children:["Do not use the ",(0,e.jsx)(n.code,{children:"element"})," prop because of its appearance, use it to organize the structure of the page."]}),`
`]}),`
`,(0,e.jsxs)(n.li,{children:[`
`,(0,e.jsxs)(n.p,{children:["Do not use color for emphasis as colors are related to states such as ",(0,e.jsx)(n.code,{children:"error"}),", ",(0,e.jsx)(n.code,{children:"success"}),", ",(0,e.jsx)(n.code,{children:"disabled"})," and so on."]}),`
`,(0,e.jsx)("br",{}),`
`,(0,e.jsx)("br",{}),`
`]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"-content",children:[(0,e.jsx)("a",{name:"content"})," Content"]}),`
`,(0,e.jsxs)(n.p,{children:["The content of the text should be written according to the ",(0,e.jsx)(n.a,{href:"https://grafana.com/docs/writers-toolkit/write/style-guide/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Grafana writing style guide"}),"."]}),`
`,(0,e.jsxs)(n.h2,{id:"-formating",children:[(0,e.jsx)("a",{name:"formating"})," Formating"]}),`
`,(0,e.jsx)(n.p,{children:"The following is the default behaviour and so, it will be applied according to its type."}),`
`,(0,e.jsxs)(n.h3,{id:"anatomy",children:[(0,e.jsx)("a",{name:"anatomy"}),(0,e.jsx)(n.strong,{children:"Anatomy"}),":",(0,e.jsx)("br",{})]}),`
`,(0,e.jsx)(n.p,{children:"The Text component is mainly comprised by itself. In occasions, the Text component can have another Text or TextLink component as a child."}),`
`,(0,e.jsx)(c.MB,{children:(0,e.jsxs)(r.x,{color:"primary",element:"p",children:["If you need more help of how to write in Grafana you can go to our ",(0,e.jsx)(E.h,{href:"https://grafana.com/docs/writers-toolkit/",external:!0,children:"Writer\u2019s Toolkit"})]})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Text color="primary" element="p">
  If you need more help of how to write in Grafana you can go to our
  <TextLink href="https://grafana.com/docs/writers-toolkit/" external>
    Writer\u2019s Toolkit
  </TextLink>
</Text>
`})}),`
`,(0,e.jsx)(c.MB,{children:(0,e.jsxs)(r.x,{color:"primary",element:"p",children:["And Forrest Gump said: ",(0,e.jsx)(r.x,{italic:!0,children:"Life is like a box of chocolates. You never know what you're gonna get."})]})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Text color="primary" element="p">
  And Forrest Gump said:
  <Text italic>Life is like a box of chocolates. You never know what you're gonna get.</Text>
</Text>
`})}),`
`,(0,e.jsxs)(n.h3,{id:"behaviour",children:[(0,e.jsx)("a",{name:"behaviour"}),(0,e.jsx)(n.strong,{children:"Behaviour"}),":"]}),`
`,(0,e.jsxs)(n.p,{children:["The Text component can be truncated. However, the Text component element rendered by default (no value set in element prop) is a ",(0,e.jsx)(n.code,{children:"<span>"}),". As this is an inline container that must have a parent, which can be another Text component or not, the truncation must be applied to this parent element."]}),`
`,(0,e.jsxs)(n.ol,{children:[`
`,(0,e.jsx)(n.li,{children:`The parent element is a Text component: the user just has to set the element prop to another value and the truncate prop to true.
As a result, the Text will be truncated but when the user hovers over it the full text will be seen on a tooltip.`}),`
`]}),`
`,(0,e.jsx)(c.MB,{children:(0,e.jsxs)(r.x,{color:"primary",element:"p",truncate:!0,children:["And Forrest Gump said: ",(0,e.jsx)(r.x,{italic:!0,children:"Life is like a box of chocolates. You never know what you are gonna get."})]})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Text color="primary" element="p" truncate>
  And Forrest Gump said:
  <Text italic>{'Life is like a box of chocolates. You never know what you are gonna get.'}</Text>
</Text>
`})}),`
`,(0,e.jsxs)(n.ol,{start:"2",children:[`
`,(0,e.jsxs)(n.li,{children:["The parent element is not a Text component: the user has to add ",(0,e.jsx)(n.code,{children:"overflow: hidden"}),", ",(0,e.jsx)(n.code,{children:"text-overflow: ellipsis"})," and ",(0,e.jsx)(n.code,{children:"whiteSpace: 'nowrap'"})," to it. In this case, the user should wrap up this container with a Tooltip, so when the text is truncated its content can still be seen hovering on the text."]}),`
`]}),`
`,(0,e.jsx)(c.MB,{children:(0,e.jsx)(A.u,{content:"This is a example of a span element truncated by its parent container",children:(0,e.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,e.jsx)(r.x,{color:"primary",variant:"body",children:"This is a example of a span element truncated by its parent container."})})})}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-jsx",children:`<Tooltip content="This is a example of a span element truncated by its parent container">
  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
    <Text color="primary" variant="body">
      {'This is a example of a span element truncated by its parent container.'}
    </Text>
  </div>
</Tooltip>
`})}),`
`,(0,e.jsxs)(n.h3,{id:"accessibility",children:[(0,e.jsx)("a",{name:"accessibility"}),(0,e.jsx)(n.strong,{children:"Accessibility"}),":"]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:["There should be just a ",(0,e.jsx)(n.code,{children:"h1"})," heading per page."]}),`
`,(0,e.jsxs)(n.li,{children:["The headings should be organized regarding its importance: ",(0,e.jsx)(n.code,{children:"h1"})," has the ",(0,e.jsx)(n.em,{children:"rank 1"})," while ",(0,e.jsx)(n.code,{children:"h6"})," heading has the ",(0,e.jsx)(n.em,{children:"rank 6"}),". For example, ",(0,e.jsx)(n.code,{children:"h1"})," can be used in the page heading, ",(0,e.jsx)(n.code,{children:"h2"})," for the titles of the sections and ",(0,e.jsx)(n.code,{children:"h3"})," for the subsections."]}),`
`,(0,e.jsxs)(n.li,{children:["The ranking of headings should be continuous. An ",(0,e.jsx)(n.code,{children:"h2"})," should not be followed by an ",(0,e.jsx)(n.code,{children:"h5"})," but an ",(0,e.jsx)(n.code,{children:"h2"})," can follow an ",(0,e.jsx)(n.code,{children:"h5"})," if this is closing the previous section. Skipping heading ranks should be avoided where possible as it can be confusing."]}),`
`]}),`
`,(0,e.jsxs)(n.h2,{id:"props-table",children:[(0,e.jsx)("a",{name:"propstable"}),"Props table"]}),`
`,(0,e.jsx)(c.$4,{of:r.x})]})}function O(t={}){const{wrapper:n}=Object.assign({},(0,u.ah)(),t.components);return n?(0,e.jsx)(n,Object.assign({},t,{children:(0,e.jsx)(m,t)})):m(t)}var P=O,L=Object.defineProperty,S=Object.defineProperties,G=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,g=(t,n,i)=>n in t?L(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(t,n)=>{for(var i in n||(n={}))B.call(n,i)&&g(t,i,n[i]);if(j)for(var i of j(n))D.call(n,i)&&g(t,i,n[i]);return t},l=(t,n)=>S(t,G(n)),f,y,b,T,v,w;const M={title:"General/Text",component:r.x,parameters:{docs:{page:P}},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body","bodySmall",void 0]},weight:{control:"select",options:["bold","medium","light","regular",void 0]},color:{control:"select",options:["error","success","warning","info","primary","secondary","disabled","link","maxContrast",void 0]},truncate:{control:"boolean"},italic:{control:"boolean"},textAlignment:{control:"select",options:["inherit","initial","left","right","center","justify",void 0]}},args:{element:"h1",variant:void 0,weight:"light",textAlignment:"left",truncate:!1,italic:!1,color:"primary",children:"This is an example of a Text component"}},h=t=>s.createElement(k.wc,null,s.createElement(p.E,{name:"Header, paragraph and span"},s.createElement(r.x,l(o({},t),{element:"h1"}),"This is a header"),s.createElement(r.x,l(o({},t),{element:"p"}),"This is a paragraph that contains",s.createElement(r.x,{color:"success",italic:!0}," ","a span element with different color and style"," "),"but is comprised within the same block text")),s.createElement(p.E,{name:"Paragraph with truncate set to true and wrapping up a span element"},s.createElement(r.x,l(o({},t),{element:"p",truncate:!0}),"This is a paragraph that contains",s.createElement(r.x,{color:"warning",italic:!0}," ","a span element"," "),"but has truncate set to true")));h.parameters={controls:{exclude:["element","variant","weight","textAlignment","truncate","italic","color","children"]}};const d=t=>s.createElement("div",{style:{width:"300px"}},s.createElement(r.x,o({element:t.element,variant:t.variant,weight:t.weight,textAlignment:t.textAlignment},t),t.children));var F=M;h.parameters=l(o({},h.parameters),{docs:l(o({},(f=h.parameters)==null?void 0:f.docs),{source:o({originalSource:`args => {
  return <VerticalGroup>
      <StoryExample name="Header, paragraph and span">
        <Text {...args} element="h1">
          This is a header
        </Text>
        <Text {...args} element="p">
          This is a paragraph that contains
          <Text color="success" italic>
            {' '}
            a span element with different color and style{' '}
          </Text>
          but is comprised within the same block text
        </Text>
      </StoryExample>
      <StoryExample name="Paragraph with truncate set to true and wrapping up a span element">
        <Text {...args} element="p" truncate>
          This is a paragraph that contains
          <Text color="warning" italic>
            {' '}
            a span element{' '}
          </Text>
          but has truncate set to true
        </Text>
      </StoryExample>
    </VerticalGroup>;
}`},(b=(y=h.parameters)==null?void 0:y.docs)==null?void 0:b.source)})}),d.parameters=l(o({},d.parameters),{docs:l(o({},(T=d.parameters)==null?void 0:T.docs),{source:o({originalSource:`args => {
  return <div style={{
    width: '300px'
  }}>
      <Text element={args.element} variant={args.variant} weight={args.weight} textAlignment={args.textAlignment} {...args}>
        {args.children}
      </Text>
    </div>;
}`},(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source)})})}}]);
