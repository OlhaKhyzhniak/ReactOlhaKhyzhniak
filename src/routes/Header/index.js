import React from 'react';
import './styles.scss';
import {MenuItem} from './MenuItem';
import logo from '../../utils/images/logo.png';
var links = [
    'Home',
    'Services',
    'Clients',
    'Team',
    'Contact'
];
export class Header extends React.Component{
    render(){
        return <header>
            <div className='header-wrap'>
                <div className='container'>
                    <div className='logo'>
                    <img src={logo} alt=''/>
                    </div>
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