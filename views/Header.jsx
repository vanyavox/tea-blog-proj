const React = require('react');

module.exports = function Header({ name }) {
  return (
    ( name ? (
    <div className="header">
      <div className="logo">
        <strong>
          Logo
        </strong>
      </div>
      <div className="headerMenu">
        <div className="headLinks">
          
          <div className='profile'>
            <p>Добро пожаловать, {name}!</p>
            <div className='profileLinks'>
           [<a href="/profile">Профиль</a>]
          [<a href="/logout">Выход из учетной записи</a>]
            </div>

            </div>
        </div>
      </div>
    </div>) : (
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
    )
    )
  );
}