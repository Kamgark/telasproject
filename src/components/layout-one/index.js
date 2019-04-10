import React from 'react';
import Header from '../header';
const LayoutOne = (props) => {
    return (
            <div className="col-sm-9">
                <Header/>
                {props.children}
            </div>
    )
};
export default LayoutOne;