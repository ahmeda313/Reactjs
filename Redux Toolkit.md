1. creating the store
```
import { createSlice, configureStore } from "@redux/toolkit"

const initialState = {counter:1}

const exampleSlice = createSlice({
	name:"example",
	initialState:initialState,
	reducers:{
		incrementFn(state){
			state.counter++ // directly manipulation of state, this is replaced                                // under the hood
		},
		decrementFn(state, action){
			state.counter--
			// action.payload 
		}
	}
})


const initialState2 = {counter:10}

const exampleSlice2 = createSlice({
	name:"example2",
	initialState:initialState2,
	reducers:{
		incrementFn(state){
			state.counter++ 
		},
	}
})

export default const store = configureStore({
	reducer:{ example1:exampleSlice.reducer, example2:exampleSlice2.reducer }
})

export const exampleActions = exampleSlice.actions

export const exampleActions2 = exampleSlice2.actions

```

2. using the state
```
import { exampleActions, exampleActions2 } from "./store"

... inside component

const counter = useSelector(state=>state.example1.counter)
const counter2 = useSelector(state=>state.example2.counter)

const dispatch = useDispatch()

function increamentCounter2(){
	dispatch(exampleActions2.incrementFn()) 
}

function decrementCounter(val){
	dispatch(exampleActions.decrementFn(val))
	// this is set to --   { type:SOME_UNIQUE_IDENTIFIER, payload: val }
}
```

reducers should not have async code \
3. Thunks - (action creators)  functions which returns a action function to which dispatch is passed
```
export function exampleThunk( itemId ){

	return async (dispatch)=>{
		const data = await fetch(URL+itemId)
		if(data){
			dispatch(exampleAction.found())
		}
	}

}
// using a action creator

...inside component
dispatch(exampleThunk(12))
```

