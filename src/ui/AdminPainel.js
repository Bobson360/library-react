import React, { Component } from 'react'
import NavBar from './NavBar';
import ListUsers from './ListUsers';

class AdminPainel extends Component {


    
    render() {
        const props = {
            user: 'Biblioteca - Admin',
            listUser: 'Listagem de Usuários',
            listBooks: 'Listagem de Livros',
            newUser: 'Cadastro de Novo Usuário',
            newBook: 'Cadastro de novo Livro'
            
        }
        return (
            
            <div>
                <NavBar  { ...props }/>
                <ListUsers {...props}/>
                
            </div>
        )
    }
}
export default AdminPainel