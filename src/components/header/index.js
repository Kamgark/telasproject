import React,{Component} from 'react';
class Header extends Component{
    render(){
        return(
                <div className="row header">
                    <div className="col-sm-6 display">
                        <i className="fa fa-bars bars"/>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="col-sm-6 display">
                        <input type="input" placeholder="Busque um cliente"/>
                        <i className="fa fa-search search" />
                    </div>
                </div>
        )
    }
}
export default Header;