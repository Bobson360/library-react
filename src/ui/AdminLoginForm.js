import React, { Component } from 'react'
import Home from './Home'
import AdminPainel from './AdminPainel';
class AdminLoginForm extends Component {


    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
        this.state = {
            email: undefined,
            password: undefined,
            logged:false,
            users:undefined,
            error:undefined
        }

        
    }

    static displayName = 'ui-LoginForm'

    componentDidMount(){
        this.verifytoken()
    }

    verifytoken(){
        let token = localStorage.getItem('DD101_TOKEN')
        if(!token){
            this.setState({
                error: 'No token defined. Please login'
            })
            return
        }
        fetch('http://localhost:3001/auth/verifytoken', {
        method: 'GET',
        body: undefined,
        headers: {
            "Content-Type":"application/json",
            "authorization": `Bearer ${token}`
        }
                    
    })
    .then(response => response.json())
    .then(responseJson => {
        if(responseJson.success){
            this.setState({
                logged:responseJson.success,
                error: undefined
            })  
            this.loadUsers()
        }else{
            this.setState({
                error: 'usuario não logado'
            })
        }
    }).catch(err => this.setState({error:err}))
    }

    loadUsers(){
        let token = localStorage.getItem('DD101_TOKEN')
        if(!token){
            this.setState({
                error: 'No token defined. Please login'
            })
            return
        }
        fetch('http://localhost:3001/users/listusers', {
        method: 'POST',
        body: undefined,
        headers: {
            "Content-Type":"application/json",
            "authorization": `Bearer ${token}`
        }
                    
    })
    .then(response => response.json())
    .then(responseJson => {
       this.setState({
           users:responseJson.data,
           error: undefined
       })  
    }).catch(err => this.setState({error: err}))
    }

    showAuthorizationArea(){
        if(this.state.logged){ // Se a Sessão for valida via direto para o painel adm
            return( 
               <div>
                   <AdminPainel />
                </div>
            )
        }else{
            return(
                <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <img className="card-img-top" src="http://www.abm.org.br/wp-content/uploads/2018/08/bibliotecas-1.jpg" alt="" />
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email </label>
                                    <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"ref="email" />
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Senha</label>
                                    <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Senha"  />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                                
                                <br />
                              
                            </form>


                        </div>
                    </div>

                </div>
                <div className="col">
                </div>
            </div>
            )
        }
    }



    handleSubmit(e){
        e.preventDefault()
        let dataToSend = {
            userData : {
                email: this.state.email,
                password: this.state.password
            }
        }
        const email = this.refs.email.value
        console.log(email)

        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type":"application/json"
            }
                        
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.name)
            if(responseJson.success){
                localStorage.setItem('DD101_TOKEN', responseJson.token)
                localStorage.setItem('EMAIL_USER', email)
                this.setState({
                    logged: true,
                    error: undefined,
                    //email: this.handleEmailChange
                })
                console.log(this.email)
                this.loadUsers()
            }         
        }).catch(err => this.setState({error:err}))
        e.target.reset()
    }

    handleEmailChange(e){
        this.setState({
            email:e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            password:e.target.value
        })
    }

    render() {
        return (
          this.showAuthorizationArea()
                      
        )
    }
}
export default AdminLoginForm