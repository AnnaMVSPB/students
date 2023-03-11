const React = require('react');
const Layout = require('./Layout')

 const Login = ({title}) => {
  return (
    <Layout title={title}>
    <div className='divForm'>
      <h1>ВОЙТИ</h1>
    <form action='/auth/login' method='POST' id='formLogin' className='form'>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Почта</label>
    <input type="email" className="form-control" id="email" name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="password" name='password'/>
  </div>
  <button type="submit" className="btn btn-primary but">ВОЙТИ</button>
</form>
<h2 className='errorLogin'></h2>
    </div>
    </Layout>
  )
}
module.exports = Login