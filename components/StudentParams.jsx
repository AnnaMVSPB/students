const React = require('react');
const Layout = require('./Layout');

const StudentParams = ({student,title,user,star}) => {
  console.log(star)
  return (
    <Layout title={title} user={user}>
    <div className='cardStudent'>
    <div className="divInfa">
    <img src={student.img} className="img" alt="..."/>
      <h1 className="card-title">{student.name}</h1>
    </div>
    <div className='starDiv'>
      {user.id === 1 && 
      <>
      <i className="bi bi-dash-square-dotted star" data-id={student.id}></i>
      <i className="bi bi-plus-square-dotted star" data-id={student.id}></i>
      </>}
    <p className='star quantityStar'>{star.length && star[0].count}</p>
      {star.length
      ?
    <i className="bi bi-star-fill star i-star" ></i>
       :
     <i className="bi bi-star star i-star" ></i>}
    </div>
  </div>
  </Layout>
  )
}

module.exports = StudentParams