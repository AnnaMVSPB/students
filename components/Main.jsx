const React = require('react');
const Layout = require('./Layout');

const Main = ({title,user}) => {
  return (
    <Layout title={title} user={user}>
    <div className=" divMain">
      <h1 className='title'>Крутые бобры</h1>
    <img className='imgMain' src='https://irecommend.ru/sites/default/files/product-images/2195368/BxfzcB8GIo582Ah9xD5eQ.jpeg'/>
    </div>
    </Layout>
  )
}

module.exports = Main