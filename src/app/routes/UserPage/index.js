import React from "react";
import { Col, Container, Spinner } from "reactstrap";
import axios from "axios";

export class UserPage extends React.Component {
  state = {
    user: null
  };

  async componentDidMount() {
    try {
      const { login } = this.props.match.params;
      if (login) {
        const userResponse = await axios.get(`https://api.github.com/users/${login}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${login}/repos`);
        this.setState({ user: userResponse.data, repos: reposResponse.data });
      }
    } catch(e){
      this.props.history.push("/404");
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <Spinner color="secondary" />;
    }

    return (
      <Container>
        <Col>{user.name}</Col>
        <Col>
          <img src={user.avatar_url} alt=''/>
        </Col>
      </Container>
    );
  }
}
