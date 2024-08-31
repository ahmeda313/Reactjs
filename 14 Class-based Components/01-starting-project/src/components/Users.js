import { Component } from 'react';
import User from './User';


import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component{
  constructor(){
    super()
    this.state={
      showUsers:false
    }
  }

  componentDidUpdate(prevProp,prevState){
    if(this.props.users.length===0){
      throw new Error("something wet wrong")
    }
  }

  toggleUsersHandler(){
    // this.state.showUsers = false --- should not do this
    // this.setState({showUsers:true}) --- this can be done
  this.setState((prevState)=>{
    return {  // this object is merged not overrided
      showUsers:!prevState.showUsers
    }
  })

  }

  render(){

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

   return(<div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
  </div>)
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
