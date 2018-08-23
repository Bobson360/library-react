import React, { Component } from 'react'
import NavBar from './NavBar'
import UserForm from './UserForm';
//import { hashHistory } from 'react-router'


class Home extends Component {
    /*
    userForm = {
        form:false,
        title:'Releases',
        text:'Manage Releases',
        action: () => alert('teste')
    }
    */

    render() {
        const logo = 'Biblioteca'
        return (
        <div>
            <NavBar logo = { logo }/>
            <div className="container" style={{padding: '20px'}}>
          
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Bem Vindo!</strong><br/><br/>
                Você acaba de logar no sistema<br/><br/>
                        Você pode avaliar os livros que ja tenha lido<br/><br/>
                        &bull; Estado de Conservação Ótimo, Bom, Ruim e Regular<br/>
                        &bull; Avaliar o conteudo do livro de 0 a 10, sendo, 0 péssimo e 10 exelente.<br/>
                        &bull; Fazer observações

  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  
</div>
<UserForm />
</div>
</div>

        
        )
    }
}
export default Home