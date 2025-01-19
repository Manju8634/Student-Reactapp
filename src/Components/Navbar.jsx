import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    
    

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><h2>Students CRUD App</h2></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link" to="/">HOME </Link>      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/add">ADD STUDENT </Link>
      </li>
     
    </ul>
   
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
