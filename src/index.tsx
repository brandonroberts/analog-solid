/* @refresh reload */
import { hydrate } from "solid-js/web";

import './index.css';
import App from './App';

hydrate(() => <App />, document);