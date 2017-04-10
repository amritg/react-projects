import React from 'react';
import {classify} from './utility';
import Container from './container';

export default class Jumbotron extends React.Component{
    render(){
        return  <div {...this.props} className={classify('jumbotron', this.props.className)}>
                    <Container fluid>
                        {this.props.children}
                    </Container>
                </div>;
    }
}