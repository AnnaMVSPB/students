const React = require('react');
const Layout = require('./Layout')

 const Login = ({title}) => {
  return (
    <Layout title={title}>
    <div>
    <form action='/auth/login' method='POST' id='formLogin'>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Почта</label>
    <input type="email" className="form-control" id="email" name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="password" name='password'/>
  </div>
  <button type="submit" className="btn btn-primary">ВОЙТИ</button>
</form>
<h2 className='errorLogin'></h2>
    </div>
    </Layout>
  )
}
module.exports = Login