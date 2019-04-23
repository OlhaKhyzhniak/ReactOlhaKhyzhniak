import React from "react";
import './styles.scss';
import { Col } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

export class UserComponent extends React.Component {
  render() {
    const { user } = this.props;
    return (
            <Col sm="4" className="user-info">
                <Link to={`user/${user.login}`}>
                  <img src={user.avatar_url} alt="github user" />
                  <p>{`User login - ${user.login}`}</p>
                </Link>
            </Col>
    );
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.user.login !== this.props.user.login){
      return true;
    }
    return false;
  }
}

UserComponent.propTypes = {
  user: PropTypes.object
};

