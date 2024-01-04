import{s as $,n as w}from"../chunks/scheduler.5f08d8ec.js";import{S as C,i as R,g as f,r as q,h as m,j as H,u as L,f as r,k as b,a as c,v as k,d as F,t as M,w as U,s as _,A as g,c as v}from"../chunks/index.81516ee7.js";import{C as j}from"../chunks/Container.669c2866.js";function I(h){let e,s=`Malicious URL detection using Machine Learning and Deep Learning\r
      techniques.`,n,t,i=`The rapid increase in malicious activities on the internet has\r
      necessitated the development of effective methods to identify and classify\r
      malicious URLs. In this project, stating from a URLs dataset we extract\r
      string-based features (such as number of dots, number of subdomains, etc.)\r
      to detect malicious URLS using different models widely used in machine\r
      learning and in subsequent experiments we compare the performances of\r
      those models to choose the best one and the best parameters setting. We\r
      also propose an original and innovative approach, inspired by\r
      vectorization techniques typical of Natural Language Processing and\r
      applied to url's dataset. The peculiarity of this work is that it is based\r
      only on intrinsic characteristics that can only be deduced from the URL\r
      itself without taking into account either characteristics of the\r
      associated website or characteristics relating to network traffic, such\r
      features are not always available and are time-dependent and, so, they may\r
      bring to inconsistent results`,l,o,y="Random Forest",p,d,x=`Random Forest is an ensemble learning algorithm that combines multiple\r
      decision trees to create a robust and accurate classifier. Given a\r
      training dataset (x_1, y_1),(x_2, y_2), . . . ,(x_n, y_n) where x_i\r
      represents the feature vector of the i-th sample and y_i is its\r
      corresponding labell, Random Forest constructs an ensemble of decision\r
      trees. Each tree is trained on a random subset of the data and features.\r
      The final prediction is determined by aggregating the predictions of all\r
      trees through majority voting or averaging. Mathematically, the Random\r
      Forest prediction is given where yˆ is the predicted label, h_t(x) is the\r
      prediction of the t-th decision tree and mode returns the most frequent\r
      label. Random Forest reduces overfitting by introducing randomness through\r
      data and feature subsampling. It also provides measures of feature\r
      importance based on the average depth or decrease in impurity caused by\r
      splitting on a particular feature. Random Forest is widely used for\r
      classification and regression tasks due to its robustness, accuracy, and\r
      ability to handle high-dimensional data.`;return{c(){e=f("h1"),e.textContent=s,n=_(),t=f("h3"),t.textContent=i,l=_(),o=f("h2"),o.textContent=y,p=_(),d=f("h3"),d.textContent=x,this.h()},l(a){e=m(a,"H1",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-apdl53"&&(e.textContent=s),n=v(a),t=m(a,"H3",{"data-svelte-h":!0}),g(t)!=="svelte-1xqwecg"&&(t.textContent=i),l=v(a),o=m(a,"H2",{class:!0,"data-svelte-h":!0}),g(o)!=="svelte-1hcu372"&&(o.textContent=y),p=v(a),d=m(a,"H3",{"data-svelte-h":!0}),g(d)!=="svelte-u8gk8o"&&(d.textContent=x),this.h()},h(){b(e,"class","svelte-fiqfg5"),b(o,"class","svelte-fiqfg5")},m(a,u){c(a,e,u),c(a,n,u),c(a,t,u),c(a,l,u),c(a,o,u),c(a,p,u),c(a,d,u)},p:w,d(a){a&&(r(e),r(n),r(t),r(l),r(o),r(p),r(d))}}}function S(h){let e,s,n;return s=new j({props:{$$slots:{default:[I]},$$scope:{ctx:h}}}),{c(){e=f("div"),q(s.$$.fragment),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=H(e);L(s.$$.fragment,i),i.forEach(r),this.h()},h(){b(e,"class","Main svelte-fiqfg5")},m(t,i){c(t,e,i),k(s,e,null),n=!0},p(t,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:t}),s.$set(l)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){M(s.$$.fragment,t),n=!1},d(t){t&&r(e),U(s)}}}class T extends C{constructor(e){super(),R(this,e,null,S,$,{})}}function D(h){let e,s;return e=new T({}),{c(){q(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,t){k(e,n,t),s=!0},p:w,i(n){s||(F(e.$$.fragment,n),s=!0)},o(n){M(e.$$.fragment,n),s=!1},d(n){U(e,n)}}}class A extends C{constructor(e){super(),R(this,e,null,D,$,{})}}export{A as component};
