"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4066],{"./src/components/DateTimePickers/TimeRangePicker.story.tsx":function(k,i,r){r.r(i),r.d(i,{Basic:function(){return t}});var e=r("../../.yarn/__virtual__/@storybook-addon-actions-virtual-f27b09044a/2/yarn/cache/@storybook-addon-actions-npm-7.4.5-73cd7d7430-c6b2603d31.zip/node_modules/@storybook/addon-actions/dist/index.mjs"),d=r("@storybook/client-api"),B=r.n(d),P=r("../../../yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),f=r("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/datetime/moment_wrapper.ts"),y=r("../../.yarn/__virtual__/@grafana-data-virtual-0996183232/1/packages/grafana-data/src/types/time.ts"),_=r("./src/components/DateTimePickers/TimeRangePicker.tsx"),h=Object.defineProperty,O=Object.defineProperties,E=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,u=(n,o,a)=>o in n?h(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,s=(n,o)=>{for(var a in o||(o={}))M.call(o,a)&&u(n,a,o[a]);if(m)for(var a of m(o))D.call(o,a)&&u(n,a,o[a]);return n},c=(n,o)=>O(n,E(o)),l,g,v;const p=(0,f.CQ)(),C=p.subtract(6,"h"),T={title:"Pickers and Editors/TimePickers/TimeRangePicker",component:_.Xc,args:{value:{from:C,to:p,raw:{from:"now-6h",to:"now"}},timeZone:y.Ys,history:[]},parameters:{controls:{exclude:["onChange","onChangeTimeZone","onChangeFiscalYearStartMonth","onMoveBackward","onMoveForward","onZoom","timeSyncButton"]}}},t=n=>{const[,o]=(0,d.useArgs)();return P.createElement(_.Xc,c(s({},n),{onChange:a=>{(0,e.aD)("onChange")(a),o({value:a,history:n.history?[...n.history,a]:[a]})},onChangeTimeZone:a=>{(0,e.aD)("onChangeTimeZone")(a),o({timeZone:a})},onMoveBackward:(0,e.aD)("onMoveBackward"),onMoveForward:(0,e.aD)("onMoveForward"),onZoom:(0,e.aD)("onZoom")}))};i.default=T,t.parameters=c(s({},t.parameters),{docs:c(s({},(l=t.parameters)==null?void 0:l.docs),{source:s({originalSource:`args => {
  const [, updateArgs] = useArgs();
  return <TimeRangePicker {...args} onChange={value => {
    action('onChange')(value);
    updateArgs({
      value,
      history: args.history ? [...args.history, value] : [value]
    });
  }} onChangeTimeZone={timeZone => {
    action('onChangeTimeZone')(timeZone);
    updateArgs({
      timeZone
    });
  }} onMoveBackward={action('onMoveBackward')} onMoveForward={action('onMoveForward')} onZoom={action('onZoom')} />;
}`},(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source)})})}}]);
