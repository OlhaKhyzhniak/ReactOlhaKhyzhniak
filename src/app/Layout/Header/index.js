import React from 'react';
import './styles.scss';
import logo from '../../utils/images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';
    const links = [
        'Home',
        'Services',
        'Clients',
        'Team',
        'Contact'
    ];
export class Header extends React.Component{
    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render(){
        return <header className='header'>
                <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/"><img src={logo} alt=''/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {links.map(item=><NavItem key={item}>
                            <NavLink href="">{item}</NavLink>
                        </NavItem>)}
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    }
}