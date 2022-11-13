const React = require('react');
// const Head = require('./Header');
// const Foot = require('./Footer');

function Layout({ children, user, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <link href="/css/style.css" rel="stylesheet" /> */}
        {/* <script defer src="/js/client.js" /> */}
        <title>{title}</title>
      </head>
      <body>
        {/* <Head user={user} /> */}
        {children}
        {/* <Foot /> */}
      </body>
    </html>
  );
}

module.exports = Layout;