import React, {Component} from 'react';
class atendimento extends Component{
    state ={
        show: true,
        cancel: false,
        btn: true,
    }
    handleClick () {
        this.setState({
            show: true,
            btn: false,
        });
    }
    handleCancel() {
        this.setState({
            show: false,
            cancel: true,
        })
    }
    render(){
        return(
            <div>
               <div className="atendimento">
                <div className="atendimento-primary">
                            <div>
                                <div className="head-text">
                                   <h4>Atendimento #1234</h4>
                                </div>
                                <div className="profile-container">
                                    <div className="profile-main">
                                        <div className="circle-container">
                                            <img src={require("../../images/pro.jpg")} alt="" />
                                        </div> 
                                        <div className="text-container">
                                            <h6>Tulano Beutrano</h6>
                                            <h6>19999.888</h6>    
                                        </div>
                                        <div>
                                            <button className="btn btn-black-border btn-profile">Ver Perfil</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="image-container">
                                    <img src={require('../../images/chat.png')} alt=""/>
                                </div>
                            </div>
                        </div>  
                        <div className="content-container">
                              <div className="tab-head">
                                <h6>Ficha do atendimento</h6>
                              </div>
                              <div className="content-primary">
                                  <h4>Atendimento #1234</h4>
                                  <h4>Hoje, 20/12/2018 13:00</h4>
                              </div>
                              <hr/>
                              <div className="table-content">
                               <div className="row">
                                 <div className="col-sm-9">
                                 <table id="customers">
                                        <tr>
                                            <th>Panqueca</th>
                                            <th>Raca</th>
                                            <th>Idade</th>
                                        </tr>
                                        <tr>
                                            <td>Felino</td>
                                            <td>SRD</td>
                                            <td>2 anos</td>
                                        </tr>
                                        </table>
                                        <div className="image-and-list">
                                            <div className="list-table">
                                                <ul>
                                                    <li>Servico</li>
                                                    <li>Consulta</li>
                                                </ul>
                                            </div>
                                            <div>
                                                 <div className="img-wrp">
                                                      <img src={require('../../images/download.png')} alt="" data-toggle="modal" data-target="#myModal"/>
                                                 </div>
                                                 
                                                    <div class="modal fade atendimento-model" id="myModal" role="dialog">
                                                        <div class="modal-dialog">
                                                        <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h4 class="modal-title">Atendimento #1234</h4>
                                                                    <button type="button" class="close btn-btn-cancel" data-dismiss="modal">&times;</button>
                                                                </div>
                                                            <div class="modal-body">
                                                                 {
                                                                     this.state.show && 
                                                                     <div className="content-section">
                                                                    <h6>Informacoes do Cliente</h6>
                                                                    <div className="profile-wrp">
                                                                        <div className="image-content">
                                                                            <div className="popup-img">
                                                                               <img src={require('../../images/dog.jpg')} alt=""/>
                                                                            </div>
                                                                            <div className="content-block">
                                                                                <p>Fulano Beutrano</p>
                                                                                <p>21.9999.888</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-content">
                                                                            <p>Animal:</p>
                                                                            <p>Goto de 4 anos</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="container-when">
                                                                        <h6>Quando</h6>
                                                                        <h6>Hoje, 15 de janeiro de 2018 as 13:00h</h6>
                                                                    </div>
                                                                    <div className="profile-wrp">
                                                                        <div className="image-content">
                                                                            <div className="content-block pl-0">
                                                                                <p>Valor da consulta:</p>
                                                                                <p>R$ 100:000</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="right-content content-below">
                                                                            <p>Status de pagamento:</p>
                                                                            <p>Pago via aplicativo</p>
                                                                        </div>
                                                                    </div>
                                                                 </div>
                                                                 }
                                                                 {
                                                                     this.state.cancel &&
                                                                     <div className="cancel-content">
                                                                         <h4>Tem certeza que deseja Cancelar?</h4>
                                                            
                                                                         <form action="/action_page.php">
                                                                            <input type="radio" name="gender" value="male"/> Cliente desistiu<br/>
                                                                            <input type="radio" name="gender" value="female"/> Outro motivo<br/>
                                                                        </form>
                                                                        <div className="feekback">
                                                                            <h4>Outro motivo</h4>
                                                                            <input type="text"/>
                                                                        </div>
                                                                    </div>
                                                                 }

                                                                 <hr className="model-line"/>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <div className="model-btn">
                                                                  {
                                                                      this.state.cancel &&
                                                                      <button class="btn btn-black-border button-model color-red" data-dismiss="modal">Confirmar Cancelar</button>
                                                                  }
                                                                   {
                                                                       this.state.show ? 
                                                                       <div className="btn-wrapper">
                                                                           <button class="btn btn-black-border button-model" onClick={() => this.handleCancel()}>Cancelar consulta</button>
                                                                           <button class="btn btn-black-border button-model color-yellow">Reagendar</button>
                                                                           {
                                                                               this.state.btn &&
                                                                               <button class="btn btn-black-border button-model color-green" onClick={() => this.handleClick()}>Consulta Concluida</button> 
                                                                           }
                                                                       </div>:
                                                                       ''
                                                                   }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                 </div>
                                 <div className="col-sm-3">
                                     <div className="container-img">
                                          <img src={require('../../images/dog.jpg')} alt="" />
                                     </div>
                                 </div>
                                 <hr className="line-two"/>
                               </div>
                                  <div className="secondry-wrp">
                                     <div>
                                         <p>Status do atendimento</p>
                                         <select>
                                             <option>pagamento confirmado</option>
                                             <option>items demo</option>
                                             <option>items demo</option>
                                         </select>
                                     </div>
                                     <div>
                                     <h4>Valor da consulta</h4>
                                     <p>R$ 100,00</p>
                                     </div>
                                  </div>
                               </div>
                        </div>
                        <div className="button-wrp">
                            <button className="btn btn-black-border btn-foot">Cancelar consulta</button>
                            <button className="btn btn-black-border btn-foot">Reagendar</button>
                        </div>
                </div>
            </div>
        )
    }
}
export default atendimento;