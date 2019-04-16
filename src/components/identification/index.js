import React , {Component} from 'react';
class identification extends Component{
    state = {
        indentification: false,
        phone: false,
        chooseprofile: false,
        forminputs: false,
        newPass: true,
        services: false,
        configure: false,
    }
    phoneNumber () {
        console.log('working')
        this.setState({
            indentification: false,
            phone:true,
        })
    }
    render(){
        return(
            <div>
                <div className="identity-header">
                    <div className="image-wrp">
                            <img src={require('../../images/thumb.png')}/>
                    </div>
                </div>
                 <div className="login-primary">
                    <div className="login-search">
                        {
                            this.state.indentification && 
                            <div>
                                <div className="head-text">
                            <div className="image-search">
                                    <img src={require('../../images/thumb.png')}/>
                                    <h4>identificao</h4>
                            </div>
                        </div>
                        <div className="content-login">
                            <div className="p-txt">
                                <h4>Informe seu e clique em proximo</h4>
                                <div className="phone-btn">
                                    <p>Seu telefone</p>
                                    <button className="btn btn-phone" onClick={() => this.phoneNumber()}><i className="fab fa-facebook-f"></i>Sign in with phone</button>
                                </div>
                            </div>
                            <div>
                                <div className="right-image">
                                     <img src={require('../../images/thumb.png')}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="footer-login">
                            <button className="btn  btn-black-border btn-next">Proximo</button>        
                        </div>
                        </div>
                        }
                        {
                            this.state.phone &&
                            <div>
                                <div className="head-text">
                            <div className="image-search">
                                    <img src={require('../../images/thumb.png')}/>
                                    <h4>identificao</h4>
                            </div>
                        </div>
                            <div className="content-login">
                            <div className="p-txt">
                                <h4>Informe o codigo enviado par SMS</h4>
                                <div className="phone-btn internumber">
                                    <p>Codigo</p>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div>
                                <div className="right-image">
                                     <img src={require('../../images/thumb.png')}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="footer-login">
                            <button className="btn  btn-black-border btn-next">Proximo</button>        
                        </div>
                       </div>
                        }
                        {
                            this.state.chooseprofile &&
                            <div>
                                <div className="head-text">
                            <div className="image-search">
                                    <img src={require('../../images/thumb.png')}/>
                                    <h4>identificao</h4>
                            </div>
                        </div>
                            <div className="content-login">
                            <div className="p-txt">
                                <h4>Qual e Seu Perfil</h4>
                                <div className="phone-btn radio-inputs">
                                <form>
                                    <input type="radio" name="gender" value="male"/>  Sou Veterinario<br/>
                                    <input type="radio" name="gender" value="female"/>  Tenho um Petshop ou Clinica<br/>
                                    <input type="radio" name="gender" value="other"/>  Outrod Perfil<br/>  
                                </form>
 
                                </div>
                            </div>
                            <div>
                                <div className="right-image">
                                     <img src={require('../../images/thumb.png')}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="footer-login">
                            <button className="btn  btn-black-border btn-next">Proximo</button>        
                        </div>
                        </div>
                        }
                        {
                            this.state.forminputs &&
                            <div>
                                <div className="head-text">
                            <div className="image-search">
                                    <img src={require('../../images/thumb.png')}/>
                                    <h4>identificao</h4>
                            </div>
                        </div>
                            <div className="content-login">
                            <div className="p-txt form-txt">
                                <div className="phone-btn input-from form-primary">
                                <form>
                                    <div className="first-inputs">
                                        <div>
                                            <label>Nome</label><br/>
                                            <input type="text"/>
                                        </div>
                                        <div>
                                            <label>Sobrenome</label><br/>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="first-inputs ">
                                        <div>
                                            <label>E-mail</label><br/>
                                            <input type="text"/>
                                        </div>
                                        <div className="second-input">
                                            <label>CPF</label><br/>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="first-inputs date-container">
                                        <div>
                                            <label>Data de nascimento</label><br/>
                                            <input type="date"/><i class="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="first-inputs inputs-radio">
                                        <div>
                                            <label>sexo</label><br/>
                                            <input type="radio" name="gender" value="male"/> Masculino
                                            <div className="finput">
                                               <input  type="radio" name="gender" value="female"/> Feminino
                                            </div>
                                        </div>
                                    </div>
                                </form>
 
                                </div>
                            </div>
                            <div>
                                <div className="right-image">
                                     <img src={require('../../images/thumb.png')}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="footer-login">
                            <button className="btn  btn-black-border btn-next">Proximo</button>        
                        </div>
                        </div>
                        }
                        {
                            this.state.newPass &&
                            <div>
                                <div className="head-text">
                                    <div className="image-search">
                                            <img src={require('../../images/thumb.png')}/>
                                            <h4>identificao</h4>
                                    </div>
                                </div>
                                    
                                <div className="content-login">
                                <div className="p-txt">
                                    <h4>Informe uma senha para acessor o sistema</h4>
                                    <div className="phone-btn internumber last-input-container">
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="right-image">
                                        <img src={require('../../images/thumb.png')}/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        <div className="footer-login">
                            <button className="btn  btn-black-border btn-next">Proximo</button>        
                        </div>
                        </div>
                        }
                        {
                            this.state.services &&
                            <div>
                                <div className="head-text service-wrp">
                                    <div className="image-search">
                                            <img src={require('../../images/thumb.png')}/>
                                            <h4>identificao</h4>
                                    </div>
                                    <div className="image-search">
                                            <img src={require('../../images/thumb.png')}/>
                                            <h4>Servicos</h4>
                                    </div>
                                </div>
                                    
                                <div className="content-login">
                                <div className="p-txt">
                                    <h4>Informe uma senha para acessor o sistema</h4>
                                    <div className="phone-btn internumber services-input">
                                       <div>
                                            <div className="inputs-select">
                                                <label>Abertura</label><br/>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div className="inputs-select">
                                                <label>Fechamento</label><br/>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div className="inputs-select">
                                                <label>Intervalas</label><br/>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                       </div>
                                       <div className="check-boxes-main">
                                           <label>Dias de funcionamento</label><br/>
                                           <div className="check-boxes">
                                                <label className="containerr">Segunda
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Teca
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Quarta
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Quinta
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Sexta
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Sabado
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="containerr">Domingo
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="right-image">
                                        <img src={require('../../images/thumb.png')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="services-foot">
                                <div className="flex-wrp">
                                    <div class="image-foot">  
                                       <img src={require('../../images/thumb.png')}/>
                                    </div>
                                    <div className="check-boxes">
                                        <label className="containerr">Atendimento 24h?
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-wrp">
                                    <div class="image-foot">  
                                       <img src={require('../../images/thumb.png')}/>
                                    </div>
                                    <div className="check-boxes">
                                        <label className="containerr">Atendimento a domicilio
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="footer-login">
                                <button className="btn  btn-black-border btn-next">Proximo</button>        
                            </div>
                        </div>
                        }
                        {
                            this.state.configure &&
                            <div>
                                <div className="head-text service-wrp">
                                    <div className="image-search">
                                            <img src={require('../../images/thumb.png')}/>
                                            <h4>identificao</h4>
                                    </div>
                                    <div className="image-search">
                                            <img src={require('../../images/thumb.png')}/>
                                            <h4>Servicos</h4>
                                    </div>
                                </div>
                                    
                                <div className="content-login">
                                <div className="p-txt contgiure-ex">
                                    <h4>Configure a sua disponibilidade</h4>
                                    <div className="configure">
                                        <div>
                                            <div className="configure-input">
                                                <div>
                                                    <label>Tempo de atendimento</label><br/>
                                                    <select>
                                                        <option>1 hora</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label>Cliente por horario</label><br/>
                                                    <select>
                                                        <option>1</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div>
                                            <button className="btn btn-black-border btn-config">Configurar intervalo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-wrapper">
                                <table>
                                    <tr>
                                        <th>Segunda</th>
                                        <th>Terca</th>
                                        <th>Quarta</th>
                                        <th>Quinta</th>
                                        <th>Sexta</th>
                                        <th>Sexta</th>
                                        <th>Sexta</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="add-content">
                                                <p>08:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>09:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>10:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>14:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>15:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>16:00</p>
                                            </div>
                                            <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        <td>
                                        <div className="add-content">
                                                <p>08:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>09:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>10:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>14:00</p>
                                            </div>
                                            <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>

                                        <td>
                                             <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        <td>
                                        <div className="add-content">
                                                <p>08:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>09:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>10:00</p>
                                            </div>
                                            <div className="add-content">
                                                <p>14:00</p>
                                            </div>
                                            <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        <td>
                                        <div>
                                                <button class="btn btn-black-border btn-table">Add</button>
                                            </div>
                                        </td>
                                        
                                        
                                    </tr>
                                </table>    
                                </div>
                            <hr/>
                            <div className="footer-login">
                                <button className="btn  btn-black-border btn-next">Proximo</button>        
                            </div>
                        </div>
                        }
                        
                    </div>
                    
                 </div>
            </div>
            
        )
    }
}
export default identification;