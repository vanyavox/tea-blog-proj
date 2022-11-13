const React = require('react');
const Layout = require('./Layout');

function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <span>Тут должен быть текст</span>
    </Layout>
  );
}

module.exports = Main;