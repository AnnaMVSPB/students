
const React = require('react');
const Layout = require('./Layout');


const StudentCard = ({student, user,likes}) => {
  let likesArr =[]
  if(likes){
   likesArr = likes.filter(like => like.studentId === student.id)
  }
  
  return (
    <div className="card">
    <img src={student.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{student.name}</h5>
      <a href={`/students/${student.id}`} className="button">Go star</a>
    </div>
    <div className='dinIcons'>
{   user.id === student.userId && 
    <i className="bi bi-trash icons i" data-id={student.id} />}
   
   <div className='divLikes'>
    <p className={`like quantityLikes${student.id}`}>{likesArr.length}</p>
    {likesArr.length > 0 
    ?
    <i class="bi bi-heart-fill i-like like" data-id={student.id}></i>
    :
    <i class="bi bi-heart i-like like" data-id={student.id}></i>
  }
   </div>
   </div>
  </div>
  
  )
}

module.exports = StudentCard