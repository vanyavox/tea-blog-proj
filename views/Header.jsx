const React = require('react');

module.exports = function Header({ user }) {
  return (
    <div className="header">
      <div className="logo">
        <strong>
          Logo
        </strong>
      </div>
      <div className="headerMenu">
        <div className="headLinks">
          <a href="/auth">Вход</a>
          <a href="/reg">Регистрация</a>
        </div>
      </div>
    </div>
  );
}