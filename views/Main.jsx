const React = require('react');
const Layout = require('./Layout');

function Main({ title, name }) {
  return (
    <Layout title={title} name={name}>
      {/* <div className="content">
        <div className="block">
          <p className="title">
            Title
          </p>
          <p className="description">
            <img src="./img/1.jpg" alt="pic" />
            <br />
            Description
          </p>
        </div>

        <div className="block">
          <p className="title">
            Title
          </p>
          <p className="description">
            <img src="./img/2.jpg" alt="pic" />
            <br />
            Description
          </p>
        </div>

        <div className="block">
          <p className="title">
            Title
          </p>
          <p className="description">
            <img src="./img/3.jpg" alt="pic" />
            <br />
            Description
          </p>
        </div>
      </div> */}

    </Layout>
  );
}

module.exports = Main;