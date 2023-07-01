import { generateHydrationScript, renderToString } from "solid-js/web";
import App from "./App";

const app = renderToString(() => <App />);

export default async function render(url: string, template: string) {
  const html = template
    .replace('<!-- app -->', app)
    .replace('<!-- hydrate -->', generateHydrationScript());

  return html;
}