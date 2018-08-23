import React from 'react'
import ListUsers from './ListUsers';

const NavBar = (props) => (
    
 //<ListUsers />
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">{props.user}</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Serviços
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#listUser" data-whatever="@mdo">Listar Usuarios</a>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#authenticatedModal" data-whatever="@mdo">Listar Livros</a>
          <div className="dropdown-divider" ></div>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#authenticatedModal" data-whatever="@mdo">Novo Usuário</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#authenticatedModal" data-whatever="@mdo">Novo Livro</a>
        </div>
      </li>
      
    </ul>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sair</button>
    </div>
    </nav>
  
  

            
        )

export default NavBar
