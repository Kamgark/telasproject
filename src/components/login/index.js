import React , {Component} from 'react';

class login extends Component{
    
    render(){
        return(
            <div>
                <div className="login-wrapper">
                    <div>
                        <div className="data-login">
                             <div className="img-container">
                                 <img src={require('../../images/thumb.png')}/>
                             </div>
                             <div className="login-text">
                                 <h4>Welcome to Qualvet</h4>
                                 <h4>Bem Vindo ao Qualvet</h4>
                             </div>
                             <div className="login-input">
                                 <form>
                                     <input type="text" placeholder="Email:"/><br/>
                                     <input type="text" placeholder="senha:"/>
                                 </form>
                                 <div className="login-button">
                                    <a>Esqueci a senha</a> <button class="btn btn-black-border login-btn">Entrar</button>
                                 </div>
                                 <div className="social-btn">
                                    <button class="btn s-btn blue-login"><i class="fab fa-facebook-f"></i>Continue with Facebook</button>
                                    <button class="btn s-btn pink-login">Cadastre-se</button>
                                 </div>
                             </div>
                             
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}
export default login;