const React = require('react');

const Navbar = ({user}) => {
  return (
    <div className=" bg-dark navDiv">
    <div >
      <div >
        <ul className=" me-auto mb-2 mb-lg-0 navUl">
          <li className="nav-item">
            <a className="nav-link active  " aria-current="page" href="/">Home</a>
          </li>
       { user ?  
  <>   <li className="nav-item">
        <h2 className='name'>{user.name}</h2>
       </li>
       <li className="nav-item">
            <a className="nav-link  " href="/students">Students</a>
          </li>
        <li className="nav-item">
        <a className="nav-link  " href="/auth/logout">Logout</a>
      </li></>  
       :
       <>
       <li className="nav-item">
            <a className="nav-link  " href="/auth/reg">Rega</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="/auth/login">Loga</a>
          </li></>}
        </ul>
      </div>
    </div>
  </div>
  )
}

module.exports = Navbar