const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children ,name,perem,user}) {
 return (                    
   <html lang="en">                       
     <head>
       <title>{title}</title>
       <link rel="stylesheet" href="/styles/style.css" />
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
       <script defer src="/scripts/studentScript.js" />
       <script defer src="/scripts/authScript.js" />
       <script defer src="/scripts/starScript.js" />
       <script defer src="/scripts/likeScript.js" />
     </head>
     <body>
      <Navbar user={user}/>
      {children}
      </body>
   </html>
 );
};
