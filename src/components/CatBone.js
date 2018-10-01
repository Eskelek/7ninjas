import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../App.css';


class CatBone extends React.Component {
    constructor(props){
        super(props);  
    };
render() {
    return (
        <div className="catBoner">
            <div className="column">
                <Skeleton count={5} width={120}/>
            </div>
            <div className="column">
                <Skeleton count={1} width={100}/>
                <Skeleton count={4} width={400}/>
            </div>
            <div className="column price">
                <div className="column">
                    <Skeleton count={3} width={35}/>
                </div>
                <div className="column">
                    <Skeleton count={1} width={40}/>
                </div>
            </div>
        </div>
    )}
}
    
export default CatBone;