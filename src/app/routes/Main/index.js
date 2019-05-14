import React from "react";
import './styles.scss';
import { UserComponent } from "./UserComponent";
import { Container, Alert, Button, Col} from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import {getUsersSuccessAction, getUsersErrorAction} from '../../store/actions/users';
import { Accordion} from "../../components/Accordion"

class MainComponent extends React.Component {
  state = {
    sort: null,
    error: null,
    isOpen: false
  };
  constructor(props){
    super(props);
    this.butRef = React.createRef();
  }
  async componentDidMount() {
    try{
      const { data } = await axios.get("https://api.github.com/users");
      this.props.getUsersSuccess(data);
    } catch (e){
      this.props.getUsersErr(e);
    }
  }
  sortItems = () => {
      const { usersData } = this.props;
      const {sort} = this.state;
      let sortedUsers = [...usersData];
      let sortDirection = sort;
      if (!sortDirection){
        sortedUsers = usersData.sort((a, b) =>{
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
      this.setState({ sort: sortDirection});
      this.props.getUsersSuccess(sortedUsers);
  }

  render() {
    const { history, usersData, error } = this.props;
    const errorComponent = error ? (
      <Alert color="danger">Something went wrong</Alert>
    ) : null;

    return (
      <main className="main" onClick={this.onClickHandler}>
        {errorComponent}
        <Container>
          <Accordion
            title="Section 1"
            list={["list 1.1", "list 1.2"]}
            
            onClick={this.onClickAccordion}
          />
          <Col className="sort-controls">
            <Button color='primary' onClick={this.sortItems}>
            Sort
            </Button>
          </Col>
          <Col className="user-box">
            {usersData.map((user, id) => {
              return <UserComponent user={user} key={id} history={history} />;
            })}
          </Col>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = state => ({
   usersData: state.users.data,
   error: state.users.err
});

const mapDispatchToProps = dispatch => ({
  getUsersSuccess: data => dispatch(getUsersSuccessAction(data)),
  getUsersError: err => dispatch(getUsersErrorAction(err))
});

export const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);