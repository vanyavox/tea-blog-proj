const React = require('react');

module.exports = function Footer({}) {
  return (
    <div className="footer">
      <div className="footerLinks">
        <a href="/">Home</a>
      </div>
      <div className="footerText">
        &copy; Copyright 2022
      </div>
    </div>
  );
}