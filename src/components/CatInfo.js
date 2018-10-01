import React from 'react';
import '../App.css';

class CatInfo extends React.Component {
    constructor(props){
        super(props);
    };
    
    render() {
        return (
            <div className="catInfo">
                <img src={this.props.imgAdress} alt={this.props.title} />
                <div className="catDescription">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default CatInfo;