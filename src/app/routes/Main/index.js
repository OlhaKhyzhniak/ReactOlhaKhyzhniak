import React from "react";
import './styles.scss';
import { UserComponent } from "./UserComponent";
import { Container, Alert, Button, Col } from "reactstrap";
import axios from "axios";

export class Main extends React.Component {
  state = {
    users: [],
    error: null
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then(response => {
        const { data } = response;
        this.setState({ users: data });
      })
      .catch(err => this.setState({ error: err }));
  }
  sortItems = () => {
      const {users, sort} = this.state;
      let sortedUsers = [...users];
      let sortDirection = sort;
      if (!sortDirection){
        sortedUsers = this.state.users.sort((a, b) =>{
            const firstLogin = a.login.toLowerCase();
            const secondLogin = b.login.toLowerCase();

            if(firstLogin > secondLogin){
                return 1;
            }
            if(firstLogin < secondLogin){
                return -1;
            }
            return 0;
        });
        sortDirection = 'ASC';
      } else {
        sortedUsers = sortedUsers.reverse();
        sortDirection = 'DESC'
      }
      this.setState({ users: sortedUsers, sort: sortDirection});
      }
  render() {
    const { users, error } = this.state;
    const { history } = this.props;
    const errorComponent = error ? (
      <Alert color="danger">Something went wrong</Alert>
    ) : null;

    return (
      <main className="main" onClick={this.onClickHandler}>
        {errorComponent}
        <Container>
          <Col className="sort-controls">
            <Button color='primary' onClick={this.sortItems}>
            Sort
            </Button>
          </Col>
          <Col className="user-box">
            {users.map((user, id) => {
              return <UserComponent user={user} key={id} history={history} />;
            })}
          </Col>
        </Container>
      </main>
    );
  }
}
