import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import {counterActions } from "../store/index"

const Counter = () => {
  const dispatchActions = useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatchActions(counterActions.toggle())
  };

  function incrementHandler(){
    dispatchActions(counterActions.increament())
  }
  function increaseHandler(){
    dispatchActions(counterActions.increase(5))
  }
  function decrementHandler(){
    dispatchActions(counterActions.decreament())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increase</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{

//   incrementHandler(){
//     this.props.increase()
//   }
//   decrementHandler(){
//     this.props.decrease()
//   }
//   toggleCounterHandler(){

//   }



//   render(){
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>increase</button>
//         <button onClick={this.decrementHandler.bind(this)}>decrease</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }


// function mapStateToProps(state){
//   return {
//     counter:state.counter
//   }
// }

// function mapDispatchToProps(dispatch){
//   return{
//     increase:()=>dispatch({type:"INCREASE"}),
//     decrease:()=>dispatch({type:"DECREASE"})
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
