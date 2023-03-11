const React = require('react');

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent " >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
          </li>
       
       { user ?  

  <>   <li className="nav-item">
        <h2 className='name'>{user.name}</h2>
       </li>
       <li className="nav-item">
            <a className="nav-link text-light" href="/students">Students</a>
          </li>
        <li className="nav-item">
        <a className="nav-link text-light" href="/auth/logout">Logout</a>
      </li></>  
       :
       <>
       <li className="nav-item">
            <a className="nav-link text-light" href="/auth/reg">Rega</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/auth/login">Loga</a>
          </li></>}
        </ul>
      </div>
    </div>
  </nav>
  )
}

module.exports = Navbar