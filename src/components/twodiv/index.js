import React , {Component} from 'react';

class twoComponent extends Component{
    render(){
        return(
            <div className="main-wrapper">
               <div className="btn-header btn-head">
                   <button className="btn btn-profile" data-toggle="modal" data-target="#myModal">Adicionar Veterinaro</button>
                   <div class="modal fade atendimento" id="myModal" role="dialog">
                        <div class="modal-dialog">
                        <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Atendimento #1234</h4>
                                    <button type="button" class="close btn-btn-cancel" data-dismiss="modal">&times;</button>
                                </div>
                            <div class="modal-body">
                                <div className="cancel-content pro-input">
                                    <form action="/action_page.php">
                                        <input type="radio" name="gender" value="female"/>profissional vai receber um email de convite<br/>
                                    </form>
                                    <div className="feekback">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                </div>                            
                            </div>
                            <div class="modal-footer border-foot">
                                <div class="model-btn">
                                    <div class="btn-wrapper">
                                        <button class="btn btn-black-border button-model color-green">Consulta Concluida</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                           
                </div>
                                                    
               </div>
               <div className="two-container">
                    <div className="flex-container">
                        <div>
                            <div className="content-wrp">
                                <div className="prof-img img-one">
                                    <img src={require('../../images/pro.jpg')}/>
                                </div>
                               <div className="profile-div">
                                   <div>
                                       <div className="prof-img">
                                          <img src={require('../../images/images.png')}/>
                                       </div>
                                   </div>
                                   <div>
                                       <p>Fulano Beutrano</p>
                                       <p>21999.8888</p>
                                   </div>
                               </div>
                               <div>
                                  <div class="btn-header">
                                    <button class="btn btn-profile">Ver perfil</button>
                                  </div>
                               </div>
                            </div>
                            <div className="below-content">
                                <p>CRMV: 12345</p>
                                <p>Tempo medio da consulta 30 min</p>
                                <p>Volar da consulta R$ 80,00</p>
                            </div>
                        </div>
                        <div>
                            <div className="content-wrp">
                                <div className="prof-img img-one">
                                    <img src={require('../../images/pro.jpg')}/>
                                </div>
                               <div className="profile-div">
                                   <div>
                                       <div className="prof-img">
                                          <img src={require('../../images/images.png')}/>
                                       </div>
                                   </div>
                                   <div>
                                       <p>Fulano Beutrano</p>
                                       <p>21999.8888</p>
                                   </div>
                               </div>
                               <div>
                                  <div class="btn-header">
                                    <button class="btn btn-profile">Ver perfil</button>
                                  </div>
                               </div>
                            </div>
                            <div className="below-content">
                                <p>CRMV: 12345</p>
                                <p>Tempo medio da consulta 30 min</p>
                                <p>Volar da consulta R$ 80,00</p>
                            </div>
                        </div>

                    </div>
               </div>
            </div>
        )
    }
}
export default twoComponent;