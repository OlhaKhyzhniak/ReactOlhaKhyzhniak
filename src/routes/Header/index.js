import React from 'react';
import './styles.scss';
import {MenuItem} from './MenuItem';
import logo from '../../utils/images/logo.png';
import {Col} from 'reactstrap';
import axios from 'axios';
var links = [
    'Home',
    'Services',
    'Clients',
    'Team',
    'Contact'
];
export class Header extends React.Component{
    componentDidMount(){
        axios.get('https://api.github.com/users')
        .then(response =>{
            const { data } = response;
            this.setState({users: data });
        })
        .catch((err)=>console.log('somethinh went wrong'));
    }
    render(){
        return <header>
            <div className='header-wrap'>
                <div className='container'>
                    <Col xs='4' className='logo'>
                        <img src={logo} alt=''/>
                 </Col>
                <div className='nav'>
                        <ul>
                            {links.map(
                                function(item, id){
                                    return <MenuItem name={item} key={item}/>
                                }
                            )}
                        </ul>
                </div>
                </div>
            </div>
        </header>
    }
}