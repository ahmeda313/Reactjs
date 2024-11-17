1. Wrap root component with `Provider` from `react-redux` and provide `store` prop
```
import { Provider } from "react-redux"
...
	<Provider store={store}>
		<App/>
	</Provider>
```
2. Creating a store
```
import { createStore } from "redux"

export store = createStore(reducerFn)
```
3. Reducer function 
```
function reducerFn(state=1, action){
	if(action.type==="INC"){
		return state+1
	}
	if(action.type==="DEC"){
		return state-1
	}
}
```
***
### Using State
```
import { useSelector, useDispatch } from 'react-redux';

// inside component
const curIndex = useSelector(state=>state)
const dispatch = useDispatch()

function incrementIndex(){
	dispatch({type:"INC"})
}
```

