const React = require('react');
const Layout = require('./Layout')

 const Reg = ({title}) => {
  return (
    <Layout title={title}>
    <div className='divForm'>
      <h1>ЗАРЕГИСТРИРУЙСЯ</h1>
    <form action='/auth/reg' method='POST' id='formReg' className='form'>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Имя </label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name'/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Почта</label>
    <input type="email" className="form-control" id="email" name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="password" name='password'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password2" className="form-label">повтори Пароль</label>
    <input type="password" className="form-control" id="password2" name='password2'/>
  </div>
  <button type="submit" className="btn btn-primary but">СОХРАНИ</button>
</form>
<h2 className='errorReg'></h2>
    </div>
    </Layout>
  )
}
module.exports = Reg