import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss'

export class UserComponent extends React.Component {
    render (){
        const { user } = this.props;
        return (
            <Link to={`user/${user.login}`}></Link>
        )
    }
}

UserComponent.propTypes = {
    user: PropTypes.object
};
