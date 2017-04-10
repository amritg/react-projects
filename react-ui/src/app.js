import React from 'react';
import Button from './bootstrap/button'
export default class App extends React.Component{
    render(){
        return  <div className="jumbotron jumbotron-fluid" style={{textAlign: "center"}}>
                    <div className="container">
                        <h1>Building React.js User Interfaces</h1>
                        <p>with Bootstrap and SASS.</p>
                        <p><Button className="-primary" href="https://github.com/amritg"/></p>
                        <Button className="-danger" disabled/>
                    </div>
                </div>;
    }
}