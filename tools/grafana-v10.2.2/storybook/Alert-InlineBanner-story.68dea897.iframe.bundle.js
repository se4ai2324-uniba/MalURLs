"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2272],{"./src/components/Alert/InlineBanner.story.tsx":function(W,m,o){o.r(m),o.d(m,{Basic:function(){return i},Examples:function(){return d},WithActions:function(){return c}});var v=o("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),t=o("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),l=o("./src/components/Alert/Alert.tsx"),u=o("./src/components/Layout/Layout.tsx"),p=o("./src/utils/storybook/StoryExample.tsx"),S=o("./src/components/Alert/Alert.mdx"),D=Object.defineProperty,R=Object.defineProperties,w=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,_=(e,r,n)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,a=(e,r)=>{for(var n in r||(r={}))M.call(r,n)&&_(e,n,r[n]);if(y)for(var n of y(r))k.call(r,n)&&_(e,n,r[n]);return e},s=(e,r)=>R(e,w(r)),E,h,f,b,O,A,C,P,g;const x=["error","warning","info","success"],B={title:"Overlays/Alert/InlineBanner",component:l.b,parameters:{docs:{page:S.Z},controls:{exclude:["onRemove"]}},argTypes:{severity:{control:{type:"select",options:x}}}},i=e=>t.createElement("div",null,t.createElement(l.b,a({},e),t.createElement(u.wc,null,t.createElement("div",null,"Child content that includes some alert details, like maybe what actually happened."))));i.args={severity:"error",title:"Basic"};const c=e=>t.createElement(l.b,a({},e),t.createElement(u.wc,null,t.createElement("div",null,"Child content that includes some alert details, like maybe what actually happened.")));c.args={title:"With action",severity:"error",onRemove:(0,v.aD)("Remove button clicked"),buttonContent:"Close"};const d=()=>t.createElement(u.wc,null,t.createElement(p.E,{name:"With buttonContent and children"},t.createElement(l.b,{title:"The title of the alert",severity:"error",buttonContent:t.createElement("span",null,"Close"),onRemove:(0,v.aD)("Remove button clicked")},"Child content that includes some alert details, like maybe what actually happened")),t.createElement(p.E,{name:"No dismiss"},t.createElement(l.b,{title:"No dismiss",severity:"success"})),t.createElement(p.E,{name:"Severities"},t.createElement(u.wc,null,x.map(e=>t.createElement(l.b,{title:`Severity: ${e}`,severity:e,key:e},"Child content")))));m.default=B,i.parameters=s(a({},i.parameters),{docs:s(a({},(E=i.parameters)==null?void 0:E.docs),{source:a({originalSource:`args => {
  return <div>
      <Alert {...args}>
        <VerticalGroup>
          <div>Child content that includes some alert details, like maybe what actually happened.</div>
        </VerticalGroup>
      </Alert>
    </div>;
}`},(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source)})}),c.parameters=s(a({},c.parameters),{docs:s(a({},(b=c.parameters)==null?void 0:b.docs),{source:a({originalSource:`args => {
  return <Alert {...args}>
      <VerticalGroup>
        <div>Child content that includes some alert details, like maybe what actually happened.</div>
      </VerticalGroup>
    </Alert>;
}`},(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source)})}),d.parameters=s(a({},d.parameters),{docs:s(a({},(C=d.parameters)==null?void 0:C.docs),{source:a({originalSource:`() => {
  return <VerticalGroup>
      <StoryExample name="With buttonContent and children">
        <Alert title={'The title of the alert'} severity={'error'} buttonContent={<span>Close</span>} onRemove={action('Remove button clicked')}>
          Child content that includes some alert details, like maybe what actually happened
        </Alert>
      </StoryExample>
      <StoryExample name="No dismiss">
        <Alert title={'No dismiss'} severity={'success'} />
      </StoryExample>
      <StoryExample name="Severities">
        <VerticalGroup>
          {severities.map(severity => <Alert title={\`Severity: \${severity}\`} severity={severity} key={severity}>
              Child content
            </Alert>)}
        </VerticalGroup>
      </StoryExample>
    </VerticalGroup>;
}`},(g=(P=d.parameters)==null?void 0:P.docs)==null?void 0:g.source)})})}}]);
