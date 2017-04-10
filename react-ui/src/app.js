import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron'
export default class App extends React.Component{
    render(){
        return  <Jumbotron className="-fluid" style={{textAlign: "center"}}>
                    <h1>Building React.js User Interfaces</h1>
                    <p>with Bootstrap and SASS.</p>
                    <p><Button className="-primary" href="https://github.com/amritg"/></p>
                    <Button className="-danger" disabled/>  
                </Jumbotron>;
    }
}