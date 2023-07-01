import { renderToStringAsync } from "solid-js/web";
import App from "./App";

// Asynchronous string rendering
export default async function render() {
  const html = await renderToStringAsync(() => <App />);
  return html;
}