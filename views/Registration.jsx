const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className='login'>
        <form id='regForm' action='/reg' method='post'>
          <p className='auth'>
            Login:
          </p>
          <input name='login' type='text' placeholder='Enter login' />
          <p className='auth'>
            E-mail:
          </p>
          <input name='email' type='email' placeholder='Enter your email' />
          <p className='auth'>
            Address:
          </p>
          <input name='address' type='text' placeholder='Enter your addres' />
          <p className='auth'>
            Password:
          </p>
          <input name='password1' type='password' minLength='5' placeholder='Enter your password' />
          <p className='auth'>
            Repeat your password:
          </p>
          <input name='password2' type='password' minLength='5' placeholder='Repeat your password' />
          <br />
          <p className='auth'>
            <button type='submit'>OK</button>
          </p>
        </form>
        <div className='errorBlock'></div>
      </div>
    </Layout>
  )
}