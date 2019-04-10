import React,{Component} from 'react';
class Sidebar extends Component{
    render(){
        return(
            <div className="col-sm-3">
                <div className="row">
                    <div className="logo">
                        <img src={require("../../images/logo.PNG")} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="left-content">
                        <div className="user-details">
                            <div className="user-img">
                                <i className="fa fa-user-alt" />
                            </div>
                            <div>
                                <h1>Fulano Beutrano</h1>
                                <h4>fulano@gmail.com</h4>
                            </div>
                        </div>
                        <div>
                            <div className="navigations-div">
                                <div>
                                    <i className="fa fa-tachometer-alt"/>
                                    <h1>Visao Geral</h1>
                                </div>
                                <div>
                                    <i className="fa fa-users" />
                                    <h1>Clientes</h1>
                                </div>
                                <div>
                                    <i className="fa fa-user-md"/>
                                    <h1>Veterinarios</h1>
                                </div>
                                <div>
                                    <i className="fa fa-calendar-alt"/>
                                    <h1>Agendamentos</h1>
                                </div>

                            </div>
                        </div>
                        <div className="support-div">
                                <h1>Suporte</h1>
                                <h1>Sair de Sistema</h1>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;