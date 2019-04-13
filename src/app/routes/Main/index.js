import React from 'react';
import { UserComponent } from './UserComponent';
import { Container, Alert } from 'reactstrap';
import axios from 'axios';


export class Main extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        users: []
    };
    componentDidMount(){
        axios.get('https://api.github.com/users')
        .then(response =>{
            const { data } = response;
            this.setState({users: data });
        })
        .catch((err)=>console.log('somethinh went wrong'));
    }
    render (){
        const { users, error } = this.state;
        const errorComponent = error ? (
            <Alert color="danger"> Somesing went wrong</Alert>
        ) : null;
        return <main className='main' onClick={this.onCklickHendler}>
        </main>
    }
}