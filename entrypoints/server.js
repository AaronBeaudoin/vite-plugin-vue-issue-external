import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import App from "./App.vue";

export const pages = {
  "/": "home"
};

async function render(name) {
  const app = createSSRApp(App);
  return await renderToString(app);
}

export async function renderPage(pageContext) {
  const path = new URL("http://localhost" + pageContext.url).pathname;
  const html = _ => `<html><body><div id="page">${_}</div></body></html>`;

  if (path in pages) {
    return {
      httpResponse: {
        statusCode: 200,
        contentType: "text/html",
        body: html(await render(pages[path]))
      }
    };
  } else {
    return {
      httpResponse: null
    };
  }
}
