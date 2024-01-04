import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { C as Container } from "../../chunks/Container.js";
const Main_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Main.svelte-fiqfg5{margin-top:100px;display:flex;flex-direction:column;min-height:100vh}h1.svelte-fiqfg5{color:var(--primary)}h2.svelte-fiqfg5{color:var(--primary)}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="Main svelte-fiqfg5">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="svelte-fiqfg5" data-svelte-h="svelte-apdl53">Malicious URL detection using Machine Learning and Deep Learning
      techniques.</h1> <h3 data-svelte-h="svelte-1xqwecg">The rapid increase in malicious activities on the internet has
      necessitated the development of effective methods to identify and classify
      malicious URLs. In this project, stating from a URLs dataset we extract
      string-based features (such as number of dots, number of subdomains, etc.)
      to detect malicious URLS using different models widely used in machine
      learning and in subsequent experiments we compare the performances of
      those models to choose the best one and the best parameters setting. We
      also propose an original and innovative approach, inspired by
      vectorization techniques typical of Natural Language Processing and
      applied to url&#39;s dataset. The peculiarity of this work is that it is based
      only on intrinsic characteristics that can only be deduced from the URL
      itself without taking into account either characteristics of the
      associated website or characteristics relating to network traffic, such
      features are not always available and are time-dependent and, so, they may
      bring to inconsistent results</h3> <h2 class="svelte-fiqfg5" data-svelte-h="svelte-1hcu372">Random Forest</h2> <h3 data-svelte-h="svelte-u8gk8o">Random Forest is an ensemble learning algorithm that combines multiple
      decision trees to create a robust and accurate classifier. Given a
      training dataset (x_1, y_1),(x_2, y_2), . . . ,(x_n, y_n) where x_i
      represents the feature vector of the i-th sample and y_i is its
      corresponding labell, Random Forest constructs an ensemble of decision
      trees. Each tree is trained on a random subset of the data and features.
      The final prediction is determined by aggregating the predictions of all
      trees through majority voting or averaging. Mathematically, the Random
      Forest prediction is given where yˆ is the predicted label, h_t(x) is the
      prediction of the t-th decision tree and mode returns the most frequent
      label. Random Forest reduces overfitting by introducing randomness through
      data and feature subsampling. It also provides measures of feature
      importance based on the average depth or decrease in impurity caused by
      splitting on a particular feature. Random Forest is widely used for
      classification and regression tasks due to its robustness, accuracy, and
      ability to handle high-dimensional data.</h3>`;
    }
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
