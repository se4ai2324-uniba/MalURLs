export const actions = {
  scan: async (event) => {
    const form_data = await event.request.formData();
    const url = form_data.get("url");
    const model = form_data.get("model");

    if (model === "all") {
      const response = await fetch("http://127.0.0.1:5000/scan_all", {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ url }),
      });
      const json = await response.json();
      console.log(json);
      return json;
    }

    const response = await fetch("http://127.0.0.1:5000/scan", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ url, model }),
    });
    const json = await response.json();
    return json;
  },
};
