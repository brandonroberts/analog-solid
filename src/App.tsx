import type { Component } from 'solid-js';
import { HydrationScript } from 'solid-js/web';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <html lang="en">
      <head>
        <title>Solid App</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" type="image/ico" href="/src/assets/favicon.ico" />
        <link rel="stylesheet" href="/src/index.css" />
        <HydrationScript />
      </head>
      <body>
        <div class={styles.App}>
          <header class={styles.header}>
            <img src={logo} class={styles.logo} alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reloads.
            </p>
            <a
              class={styles.link}
              href="https://github.com/solidjs/solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Solid
            </a>
          </header>
        </div>        
    
        <script src="/src/index.tsx" type="module"></script>
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </body>
    </html>
  );
};

export default App;
