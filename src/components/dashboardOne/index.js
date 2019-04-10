import React,{Component} from 'react';
class DashboardOne extends Component{
    render(){
        return(
            <div id="dashboardOne" className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="row button-div">
                            <button type="button" data-toggle="modal" data-target="#myModal">Adicionar Servico</button>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left">
                                <p>Consulta veterinario</p>
                                <p>valor: R$ 80,00</p>
                            </div>
                            <div className="col-sm-6 card-right">
                                <button type="button" >Editar</button>
                                <button type="button" >Remover</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left">
                                <p>Consulta veterinario</p>
                                <p>valor: R$ 80,00</p>
                            </div>
                            <div className="col-sm-6 card-right">
                                <button type="button" >Editar</button>
                                <button type="button" >Remover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">Adicionar Servico</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Categoria</p>
                        <select>
                            <option>Name da categoria</option>
                            <option>hello</option>
                        </select>
                        <p>Name do servico</p>
                        <input type="input" placeholder="servico"/>
                        <div className="modal-body-bottom">
                            <div>
                                <p>valor</p>
                                <input type="input" value="100,00" />
                            </div>
                            <div>
                                <p>Disponivel para agendamento?</p>
                                <select>
                                    <option>SIM</option>
                                    <option>hello</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        )
    }
}
export default DashboardOne;