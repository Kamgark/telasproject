import React ,{Component} from 'react';
class horarius extends Component{
    state ={
        menu1: true,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
    }
    handleReturn (ev){ 
        switch(ev) {
            case 'menu1':
               this.setState({
                   menu1: true,
                   menu2: false,
                   menu3: false,
                   menu4: false,
                   menu5: false,
                   
               })
              break;
              case 'menu2':
               this.setState({
                    menu1: false,
                    menu2: true,
                    menu3: false,
                    menu4: false,
                    menu5: false,
               })
              break;
              case 'menu3':
               this.setState({
                menu1: false,
                menu2: false,
                menu3: true,
                menu4: false,
                menu5: false,
               })
              break;
              case 'menu4':
               this.setState({
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: true,
                menu5: false,
               })
              break;
              case 'menu5':
               this.setState({
                menu1: false,
                menu2: false,
                menu3: false,
                menu4: false,
                menu5: true,
               })
              break;
        
          }
    }
    render(){
        return(
            <div className="primary-tabs">
                <div className="tabs-horarius">
                     <div className="tab-container" onClick={() => this.handleReturn('menu1')}>
                         <h6>Meu profil</h6>
                     </div>
                     <div className="tab-container" onClick={() => this.handleReturn('menu2')}>
                         <h6>Enderecos</h6>
                     </div>
                     <div className="tab-container" onClick={() => this.handleReturn('menu3')}>
                         <h6>Horarios</h6>
                     </div>
                     <div className="tab-container" onClick={() => this.handleReturn('menu4')}>
                         <h6>Meu Palano</h6>
                     </div>
                     <div className="tab-container" onClick={() => this.handleReturn('menu5')}>
                         <h6>Conta Bancara</h6>
                     </div>
                </div>
               
                     {
                        this.state.menu1 &&
                        <div>
                             <div className="tabs-wrp tabs-haroris">
                            <div className="row">
                                 <div className="col-sm-8">
                                   <div className="content-section">
                                      <div>
                                          <h4>Name the clinica</h4>
                                          <h3>Clinica 4 Patinhas</h3>
                                      </div>
                                      <div>
                                          <div className="star-rating">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <sup>4,5</sup>
                                          </div>
                                      </div>
                                   </div>
                                   <div className="text-container">
                                       <h4>Sobre a clinica</h4>
                                       <textarea></textarea>
                                           <h4>Slogan</h4>
                                            <input type="text"/>
                                       <div className="two-inputs">
                                          <div>
                                            <h4>Telefone</h4>
                                            <input type="text"/>
                                          </div>
                                          <div>
                                            <h4>Whatsapp</h4>
                                            <input type="text"/>
                                          </div>
                                       </div>
                                   </div>
                                 </div>
                                 <div className="col-sm-4">
                                     <div class="image-upload">
                                         <img src={require('../../images/thumb.png')}/>
                                        <label for="file-input">
                                            <span>nava foto</span>
                                        </label>
                                        <input id="file-input" type="file" />
                                        </div>

                                 </div>
                            </div>
                        </div>
                        <div className="button-wrapper">
                           <button class="btn btn-black-border">SALVAR</button>
                        </div>
                        </div>
                     }
                      {
                        this.state.menu2 &&
                        <div>
                             <div className="tabs-wrp tabs-haroris">
                            <div className="row">
                                 <div className="col-sm-8">
                                   <div className="content-section">
                                      <div>
                                          <h3>Clinica 4 Patinhas</h3>
                                      </div>
                                   </div>
                                   <div className="text-container">
                                       <div className="two-inputs search-input">
                                          <div>
                                            <h4>CEP</h4>
                                            <input type="text"/>
                                          </div>
                                          <div className="tab-two-button">
                                             <button class="btn btn-black-border">buscar</button>
                                          </div>
                                       </div>
                                       <div className="two-inputs tabs-three below-input">
                                          <div>
                                            <h4>Tipo:</h4>
                                            <select>
                                                <option>Rua</option>
                                                <option>demo</option>
                                            </select>
                                          </div>
                                          <div className="middle-input">
                                            <h4>Logradouro</h4>
                                            <input type="text"/>
                                          </div>
                                          <div>
                                            <h4>Numero</h4>
                                            <input type="text"/>
                                          </div>
                                        </div>
                                        <div className="two-inputs tabs-three below-input">
                                          <div className="input-one">
                                            <h4>Bairro</h4>
                                            <input type="text"/>
                                          </div>
                                          <div className="input-two">
                                            <h4>Complemento</h4>
                                            <input type="text"/>
                                          </div>
                                          
                                        </div>
                                        <div className="two-inputs tabs-three below-input">
                                          <div className="input-one">
                                            <h4>Cidade:</h4>
                                            <input type="text"/>
                                          </div>
                                          <div className="input-two input-small">
                                            <h4>Estado</h4>
                                            <input type="text"/>
                                          </div>
                                        </div>
                                        <div className="button-address">
                                             <button class="btn btn-black-border">Adicionar outro endereco</button>
                                          </div>
                                   </div>
                                 </div>
                                 <div className="col-sm-4">
                                     <div class="image-upload map-image">
                                            <img src={require('../../images/thumb.png')}/>
                                      </div>      
                                 </div>
                            </div>
                        </div>
                        <div className="button-wrapper">
                           <button class="btn btn-black-border">SALVAR</button>
                        </div>
                        </div>
                     }
                      {
                        this.state.menu3 &&
                        <div>
                            <div className="tabs-wrp tabs-haroris">
                            <div className="cont-wrp">
                                <div className="content-section">
                                      <div>
                                          <h3>Dias de funcionamento</h3>
                                      </div>
                                </div>
                                    <div className="flex-content">
                                        <p>Horario de almoco</p>
                                        <p>Horario de almoco</p>
                                    </div>
                                    <hr/>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Segunda
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>as</h4>
                                                <select>
                                                    <option>13:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Terca
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>as</h4>
                                                <select>
                                                    <option>13:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Quarta
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>as</h4>
                                                <select>
                                                    <option>13:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Quanta
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>as</h4>
                                                <select>
                                                    <option>13:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Sexto
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>12:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>as</h4>
                                                <select>
                                                    <option>13:00</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <div>
                                            <label class="container-check">Sabado
                                                <input type="checkbox"/>
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="time-input">
                                            <div>
                                            <h4>Abertura</h4>
                                                <select>
                                                    <option>08:00</option>
                                                </select>
                                            </div>
                                            <div>
                                            <h4>Fechamento</h4>
                                                <select>
                                                    <option>18:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-input time-last">
                                            <div>
                                            <h4>Almoco</h4>
                                                <select>
                                                    <option>Sem pausa no almoco</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="last-input">
                                            <div>
                                                <label class="container-check">Domingo
                                                    <input type="checkbox"/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                       
                                        <div>
                                            <h4>Sem funcionamento</h4>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="flex-content">
                                        <div>
                                           <p>Disponivel para agendamentos</p>
                                           <select>
                                               <option>SIM</option>
                                           </select>
                                        </div>
                                        <div>
                                          <p>Tempo media da consulta</p>
                                          <select>
                                               <option>#0 min</option>
                                           </select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrapper">
                            <button class="btn btn-black-border btn-diss">Desabilitar agendamentos</button>
                           <button class="btn btn-black-border">SALVAR</button>
                        </div>
                        </div>
                     }
                      {
                        this.state.menu4 &&
                        <div>
                            <div className="tabs-wrp tabs-haroris">
                                 <div className="flex-x">
                                     <div>
                                         <h4>Meu Palano</h4>
                                         <div className="flex-wrper">
                                              <div>
                                                  <p>Palano Free</p>
                                                  <p>R$ 0,00</p>
                                              </div>
                                              <div>
                                                <button class="btn btn-black-border btn-palano">Upgrade  para palano Premium</button>
                                              </div>
                                         </div>
                                     </div>
                                     <div>
                                       <h4>Informacao de pogamento</h4>
                                        <div className="icon-flex">
                                            <div className="icon-txt">
                                            <i class="fa fa-shopping-bag"></i><span>Final 4444</span>
                                            </div>
                                            <div>
                                                <h5>Principal</h5>
                                            </div>
                                            <div className="basket">
                                             <i class="fa fa-trash"></i>
                                            </div>
                                        </div>  
                                     </div>
                                     
                                 </div>   
                                      <div className="table-content">
                                         <h4>Pagamentos anteriores</h4>
                                        <table>
                                            <tr>
                                                <th>Volar</th>
                                                <th>Data</th>
                                                <th>Condigo</th>
                                                <th>Meio de pgamento</th>
                                                <th>Status</th>
                                            </tr>
                                            <tr>
                                                <td>R$ 300,00</td>
                                                <td>01/02/2018</td>
                                                <td>ABC1234</td>
                                                <td>Cartoa de credito</td>
                                                <td>Pago</td>
                                            </tr>
                                            <tr>
                                                <td>R$ 300,00</td>
                                                <td>01/02/2018</td>
                                                <td>ABC1234</td>
                                                <td>Cartoa de credito</td>
                                                <td>Pago</td>
                                            </tr>
                                        </table>
                                     </div>
                            </div>
                            <div className="button-wrapper">
                                <button class="btn btn-black-border">SALVAR</button>
                            </div>
                        </div>
                     }
                      {
                        this.state.menu5 &&
                        <div>
                            <div className="tabs-wrp palno-head">
                                <div className="row">
                                    <div className="col-6">
                                      <h4>Meu Plano</h4>
                                      <div className="plano-input">
                                          <h5>Nome do Favorecido</h5>
                                          <input type="text" placeholder="Fulano Beutrano"/>
                                      </div>
                                      <div className="plano-input">
                                          <h5>Banco</h5>
                                          <select>
                                              <option>Itau</option>
                                          </select>
                                      </div>
                                      <div className="plano-input">
                                          <div className="plano-two-inputs">
                                          <div>
                                              <h5>Agencia</h5>
                                              <input type="text" placeholder="1234"/>
                                          </div>
                                          <div className="input-primary">
                                              <h5>Conta</h5>
                                              <input type="text" placeholder="123456-8"/>
                                          </div>
                                          </div>
                                          <div className="plano-input">
                                          <h5>CPF ou CNPJ</h5>
                                          <input type="text"/>
                                      </div>
                                      <div className="button-wrapper-two">
                                        <button class="btn btn-black-border">Editor</button>
                                     </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="button-wrapper-two button-wrapper">
                                        <button class="btn btn-black-border">Adicionar outra contra</button>
                                     </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <button class="btn btn-black-border">SALVAR</button>
                            </div>
                        </div>
                     }
                </div>
        )
    }
}
export default horarius;