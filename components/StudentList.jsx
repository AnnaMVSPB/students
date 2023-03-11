const React = require('react');
const FormAddStudent = require('./FormAddStudent');
const Layout = require('./Layout');
const StudentCard = require('./StudentCard');

const StudentList = ({title,students,user, likes}) => {
  return (
    <Layout title={title} user={user}>
     <div className='bannerDiv'>
     <img className='banner' src='https://2x2tv.ru/upload/iblock/dc0/dc0b1edfabbdef29a8ec2be12f40149a.jpg'/>
     <FormAddStudent/>
     <h2 className='errorAdd'></h2>
     </div>
   <div className="d-flex flex-wrap justify-content-between" id='divStudents'>
    {students.length > 0  ? students.map(student=> <StudentCard key={student.id} user={user} student={student} likes={likes}/>) : <p>идет загрузка</p>}
   </div>
    </Layout>
  )
}

module.exports = StudentList