import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

export class UserComponent extends React.Component {
    render (){
        const { user } = this.props;
        return (
            <div className='user-info'> 
                <img src={user.avatar_url}/>
                <h2>{`User login - ${user.avatar_url}`}</h2>
            </div>
        )
    }
}

UserComponent.propTypes = {
    user: PropTypes.object
};
