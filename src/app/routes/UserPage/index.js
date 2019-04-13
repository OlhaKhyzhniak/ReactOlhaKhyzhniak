import React from 'react';
import {Spinner} from 'reactstrap';
import axios from 'axios';

export class UserPage extends React.Component {
    state = {
        user: null,
        error: null
    };

    componentDidMount(){
        const { login } = this.props.match.params;
        if(login){
            axios.get(`https://api.github.com/users/${login}`)
            .then(response =>{
                const { data } = response;
                this.setState({users: data });
            })
            .catch(err=>this.props.history.push(`/404`));
        }
    }

    render (){
        const { user } = this.state;

        if(!user){
            return <Spinner color="secondary" />;
        }
        return {}
    }
}