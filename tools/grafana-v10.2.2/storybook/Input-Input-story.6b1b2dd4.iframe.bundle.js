"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3194],{"./src/components/Input/Input.story.tsx":function(L,f,o){o.r(f),o.d(f,{Simple:function(){return d},WithFieldValidation:function(){return c},default:function(){return U}});var a=o("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),i=o("./src/components/Input/Input.tsx"),P=o("./src/components/Button/Button.tsx"),x=o("./src/components/Forms/Field.tsx"),S=o("./src/types/icon.ts"),t=o("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),m=o("../../.yarn/__virtual__/@mdx-js-react-virtual-4792127d00/2/yarn/cache/@mdx-js-react-npm-2.3.0-d5582a450b-f45fe77955.zip/node_modules/@mdx-js/react/lib/index.js"),u=o("../../.yarn/__virtual__/@storybook-blocks-virtual-5605a2f23e/2/yarn/cache/@storybook-blocks-patch-37aea2d782-9f0957019b.zip/node_modules/@storybook/blocks/dist/index.mjs"),E=o("./src/components/Icon/Icon.tsx");function h(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,m.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"input",children:"Input"}),`
`,(0,t.jsxs)(e.p,{children:["Used for regular text input. For an array of data or tree-structured data, consider using ",(0,t.jsx)(e.code,{children:"Select"})," or ",(0,t.jsx)(e.code,{children:"Cascader"})," respectively."]}),`
`,(0,t.jsx)(e.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,(0,t.jsxs)(e.p,{children:["To add more context to the input you can add either text or an icon before or after the input. You can use the ",(0,t.jsx)(e.code,{children:"prefix"})," and ",(0,t.jsx)(e.code,{children:"suffix"})," props for this. Try some examples in the canvas!"]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:`<Input prefix={<Icon name="search" />} />
`})}),`
`,(0,t.jsx)(u.MB,{children:(0,t.jsx)(i.I,{prefix:(0,t.jsx)(E.J,{name:"search"})})}),`
`,(0,t.jsx)(e.h2,{id:"usage-in-forms-with-field",children:"Usage in forms with Field"}),`
`,(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Input"})," should be used with the ",(0,t.jsx)(e.code,{children:"Field"})," component to get labels and descriptions. It can also be used for validation by using the ",(0,t.jsx)(e.code,{children:"required"})," attribute. See the ",(0,t.jsx)(e.code,{children:"Field"})," component for more information."]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:`<Field label="Important information" description="This information is very important, so you really need to fill it in">
  <Input name="importantInput" required />
</Field>
`})}),`
`,(0,t.jsx)(u.MB,{children:(0,t.jsx)(x.g,{label:"Important information",description:"This information is very important, so you really need to fill it in",children:(0,t.jsx)(i.I,{name:"importantInput",required:!0})})}),`
`,(0,t.jsx)(u.Ed,{of:i.I})]})}function T(n={}){const{wrapper:e}=Object.assign({},(0,m.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(h,n)})):h(n)}var w=T,v=o("./src/components/Input/storyUtils.tsx"),A=Object.defineProperty,C=Object.defineProperties,z=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,g=(n,e,r)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,s=(n,e)=>{for(var r in e||(e={}))M.call(e,r)&&g(n,r,e[r]);if(y)for(var r of y(e))D.call(e,r)&&g(n,r,e[r]);return n},l=(n,e)=>C(n,z(e)),j,I,b,O,F,B;const V=s({None:null,Text:"$"},(0,S.BI)().reduce((n,e)=>l(s({},n),{[`Icon: ${e}`]:`icon-${e}`}),{})),N={title:"Forms/Input",component:i.I,parameters:{docs:{page:w},controls:{exclude:["prefix","suffix","addonBefore","addonAfter"]}},args:{type:"text",width:40,prefixVisible:"",suffixVisible:"",invalid:!1,loading:!1},argTypes:{prefixVisible:{control:{type:"select",options:V}},suffixVisible:{control:{type:"select",options:V}},type:{control:{type:"select",options:["text","number","password"]}},width:{control:{type:"range",min:10,max:200,step:10}}}},d=n=>{const e=a.createElement(P.zx,{variant:"secondary"},"Load"),r=a.createElement("div",{style:{display:"flex",alignItems:"center",padding:"5px"}},"Input"),p=(0,v.J)(n.prefixVisible),J=(0,v.J)(n.suffixVisible);return a.createElement(i.I,{disabled:n.disabled,width:n.width,prefix:p,invalid:n.invalid,suffix:J,loading:n.loading,addonBefore:n.before&&r,addonAfter:n.after&&e,type:n.type,placeholder:n.placeholder})};d.args={disabled:!1,before:!1,after:!1,placeholder:"Enter your name here..."};const c=n=>{const[e,r]=(0,a.useState)("");return a.createElement("div",null,a.createElement(x.g,{invalid:e==="",error:e===""?"This input is required":""},a.createElement(i.I,s({value:e,onChange:p=>r(p.currentTarget.value)},n))))};var U=N;d.parameters=l(s({},d.parameters),{docs:l(s({},(j=d.parameters)==null?void 0:j.docs),{source:s({originalSource:`args => {
  const addonAfter = <Button variant="secondary">Load</Button>;
  const addonBefore = <div style={{
    display: 'flex',
    alignItems: 'center',
    padding: '5px'
  }}>Input</div>;
  const prefix = parseAccessory(args.prefixVisible);
  const suffix = parseAccessory(args.suffixVisible);
  return <Input disabled={args.disabled} width={args.width} prefix={prefix} invalid={args.invalid} suffix={suffix} loading={args.loading} addonBefore={args.before && addonBefore} addonAfter={args.after && addonAfter} type={args.type} placeholder={args.placeholder} />;
}`},(b=(I=d.parameters)==null?void 0:I.docs)==null?void 0:b.source)})}),c.parameters=l(s({},c.parameters),{docs:l(s({},(O=c.parameters)==null?void 0:O.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState('');
  return <div>
      <Field invalid={value === ''} error={value === '' ? 'This input is required' : ''}>
        <Input value={value} onChange={e => setValue(e.currentTarget.value)} {...args} />
      </Field>
    </div>;
}`},(B=(F=c.parameters)==null?void 0:F.docs)==null?void 0:B.source)})})}}]);
