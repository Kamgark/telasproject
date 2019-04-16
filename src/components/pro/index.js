import React ,{Component} from 'react';
class profile extends Component{
    state = {
        showContent: true,
        otherContent: false,
    }
    buttonClicked(ev){
        let dataShow = this.state.showContent;
        if(ev == 'clickedone'){
           this.setState({
               showContent: true,
               otherContent: false,
           })
        }
        if(ev == 'clickedtwo'){
            this.setState({
                showContent: false,
                otherContent: true,
            })
        }
    }
    render(){
        return(
            <div>
                <div className="profile-setting">
                    <div className="row bb-wrapper">
                    <div className="col-6">
                        <div className="profile-heading">
                            <div className="pro-img">
                                <img src={require('../../images/thumb.png')}/>
                            </div>
                            <div>
                                <h4>Fulano Beutrano</h4>
                                <h4>21.9999.888</h4>
                            </div>
                        </div>
                       </div>
                       <div className="col-6">
                         <div className="stars-wrp">
                         <div>
                           <h5>CRMV: 12345</h5>
                        </div>
                       <div class="star-rating">
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <sup>4,5</sup></div>
                       </div>
                         </div>
                    </div>
                </div>
                <div className="content-profile">
                    <div className="button-pro">
                        <div>
                            <div className="button-container">
                                <button class={this.state.showContent ?  'btn without-shadow btn-blue' : 'btn without-shadow'} onClick={() => this.buttonClicked('clickedone')}>Profil</button>
                                <button class={this.state.otherContent ?  'btn without-shadow btn-blue' : 'btn without-shadow'} onClick={() => this.buttonClicked('clickedtwo')}>Avaliacoes</button>
                            </div>
                        </div>
                    </div>
                    { this.state.showContent && 
                     <div>
                         <div className="input-select">
                        <div>
                            <h4>Valor da Consulta:</h4>
                            <input type="text" placeholder="R$ 80,000"/>
                        </div>
                        <div className="container-input">
                            <h4>Tempo medo da Consulta:</h4>
                            <select>
                                <option>30 min</option>
                            </select>
                        </div>
                    </div>
                    <div className="name-wrapper">
                        <div>
                            <h4>Nome de Apresentacao:</h4>
                            <input type="text" placeholder="R$ 80,000"/>
                        </div>
                        <div>
                            <h4>Apresentacao profissional:</h4>
                            <textarea/>
                        </div>
                    </div>
                     </div>
                    }
                    {
                        this.state.otherContent && 
                        <div>
                            <div className="content-wrp-container">
                            <div className="star-wrp">
                                <div className="dummy-text">
                                    <div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eisumos 20/11/2017</p> 
                                        </div>
                                    </div>
                                    <div>
                                        <div class="star-rating stars-ex">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="star-wrp">
                                <div className="dummy-text">
                                    <div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eisumos 20/11/2017</p> 
                                        </div>
                                    </div>
                                    <div>
                                        <div class="star-rating stars-ex">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="star-wrp">
                                <div className="dummy-text">
                                    <div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eisumos 20/11/2017</p> 
                                        </div>
                                    </div>
                                    <div>
                                        <div class="star-rating stars-ex">
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                           <div className="btn-manu-btm">
                           <button class="btn btn-mais">Mais</button>
                           </div>
                        </div>
                       
                    }
                </div>
            </div>
        )
    }
}
export default profile;