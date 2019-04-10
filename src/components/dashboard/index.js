import React,{Component} from 'react';
class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <div className="row dash-padd">
                    <div className="col-sm-3 custom-card">
                        <div className="card-left">
                            <p>Atendimentos</p>
                            <h1>Hoje</h1>
                        </div>
                        <div className="card-right">
                            <h1>4</h1>
                        </div>
                    </div>
                    <div className="col-sm-3 custom-card">
                        <div className="card-left">
                            <p>Atendimentos</p>
                            <h1>Amanha</h1>
                        </div>
                        <div className="card-right">
                            <h1>10</h1>
                        </div>
                    </div>
                    <div className="col-sm-3 custom-card">
                        <div className="card-left">
                            <p>Atendimentos</p>
                            <h1>Essa semana</h1>
                        </div>
                        <div className="card-right">
                            <h1>45</h1>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-12">
                    <h1 className="table-head">Proximos atendimentos</h1>
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <td>Client</td>
                                    <td>Animal</td>
                                    <td>Data e Hora</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fulano Beutrano</td>
                                    <td>Fofinho<br/>Cao de 4 anos castrado</td>
                                    <td>hoje as 14:00h</td>
                                    <td>confirmado</td>
                                </tr>
                                <tr>
                                    <td>Fulano Beutrano</td>
                                    <td>Fofinho<br/>Cao de 4 anos castrado</td>
                                    <td>hoje as 14:00h</td>
                                    <td>confirmado</td>
                                </tr>
                                <tr>
                                    <td>Fulano Beutrano</td>
                                    <td>Fofinho<br/>Cao de 4 anos castrado</td>
                                    <td>hoje as 14:00h</td>
                                    <td>confirmado</td>
                                </tr>
                                <tr>
                                    <td>Fulano Beutrano</td>
                                    <td>Fofinho<br/>Cao de 4 anos castrado</td>
                                    <td>hoje as 14:00h</td>
                                    <td>confirmado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row buttons-row">
                <button type="button">Novo agendamento</button>
                <button type="button">ver mais</button>
                </div>
            </div>
        )
    }
}
export default Dashboard;