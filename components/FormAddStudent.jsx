const React = require('react');

function FormAddStudent() {
  return (
    <div>
    <form action='/students' method='POST' id='formAdd'>
  <div className="mb-3">
    <label for="name" className="form-label">Имя студента</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name'/>
  </div>
  <div className="mb-3">
    <label for="img" className="form-label">Фото</label>
    <input type="text" className="form-control" id="img" name='img'/>
  </div>
  <button type="submit" className="btn btn-primary">СОХРАНИ СТУДЕНТА</button>
</form>
    </div>
  )
}

module.exports = FormAddStudent