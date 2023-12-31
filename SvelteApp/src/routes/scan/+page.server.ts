import type { ApiScanResponse } from "$lib/types.js";

type FlaskResponse = {
  response: string[][];
  timestamp: string;
};

export const actions = {
  scan: async (event) => {
    const form_data = await event.request.formData();
    const url = form_data.get("url") as string;
    const model = form_data.get("model") as string;

    const response = await fetch("https://malurls-api.azurewebsites.net/scan", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ url, model }),
    });

    const json: FlaskResponse = await response.json();

    const model_result: ApiScanResponse[] = json.response.map((res) => {
      return { model: res[0], result: res[1] };
    });

    return model_result;
  },
};
