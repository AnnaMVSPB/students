
const React = require('react');


const StudentCard = ({student, user}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={student.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{student.name}</h5>
      <a href={`/students/${student.id}`} className="button">Go </a>
    </div>
{   user.id === student.userId && 
    <i className="bi bi-trash icons" data-id={student.id} />}
   
  </div>
  )
}

module.exports = StudentCard