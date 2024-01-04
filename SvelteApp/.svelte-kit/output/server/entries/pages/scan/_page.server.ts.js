const actions = {
  scan: async (event) => {
    const form_data = await event.request.formData();
    const url = form_data.get("url");
    const model = form_data.get("model");
    {
      const response = await fetch("http://flask_api:5000/scan", {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ url, model })
      });
      const json = await response.json();
      const model_result = json.response.map((res) => {
        return { model: res[0], result: res[1] };
      });
      return model_result;
    }
  }
};
export {
  actions
};
