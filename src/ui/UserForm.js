import React, { Component } from 'react'

class UserForm extends Component {

    constructor(){
        super()
        this.handleEvaluate = this.handleEvaluate.bind(this)
        this.email = localStorage.getItem('EMAIL_USER')
        
        
    }

    handleEvaluate(e){
        e.preventDefault()
        let dataToSend = {
        userEvaluation : {            
            book: this.refs.book.value,
            conservation: this.refs.conservation.value,
            content: this.refs.content.value,
            user: this.email
            }
        }
        console.log(JSON.stringify(dataToSend))

        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type":"application/json"
            }
                        
        })
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.success){
                this.setState({
                    ...this.state,
                    registered:{
                        success: true,
                        message: responseJson.message
                    }
                })
            }else{
                this.setState({
                    ...this.state,
                    registered:{
                        success: false,
                        message: responseJson.message
                    }
                })
            }    
        }).catch(err => console.log('Error', err))
    
        this.refs.book.value = ''
        this.refs.conservation.value = ''
        this.refs.content.value = ''
    
        
    }

    render() {
        return (
    <div className="container">
    {/* Begin Modal Register Form */}
    <div className="modal fade" id="signupModel" tabIndex="-1" role="dialog" aria-labelledby="signupModelLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signupModelLabel">Registration Form</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                {/*
                        this.state.registered.success !== undefined ? (
                            this.state.registered.success === true ?
                                <div className="alert alert-success" role="alert">
                                    {this.state.registered.message}
                                </div>
                                :
                                <div className="alert alert-danger" role="alert">
                                    {this.state.registered.message}
                                </div>
                        ) : ''
                    */ }
                    <form onSubmit={this.handleEvaluate}>
                   
                        <div className="form-group">
                            <label htmlFor="book">Livros</label>
                            <select className="form-control" id="book" ref="book">
                            <option disabled selected >Livros</option>
                            <option>O poder da Ação</option>
                            <option>O pequeno Principe</option>
                            <option>Comer, rezar e Amar</option>
                            <option>PHP para iniciantes</option>
                            <option>Biblia sagrada</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="conservation">Livros</label>
                            <select className="form-control" id="conservation" ref="conservation">
                            <option disabled selected >nota</option>
                            <option>Ótimo</option>
                            <option>Bom</option>
                            <option>Ruim</option>
                            <option>Regular</option>
                            
                            </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="content">De uma nota</label>
                        <select multiple className="form-control" id="content" ref="content">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sair</button>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>  
                
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* End Modal Register Form */}
    


    {/* Begin Login Form */}
    
    <div className="row" style={{ paddingTop: '50px' }}>
        <div className="col">
        </div>
        <small id="emailHelp" className="form-text text-muted">Click aqui para <a href="" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Avaliar</a></small>
        <div className="col">
        </div>
    </div>
    {/* End Login Form */}
</div>        
        )}
    }

export default UserForm