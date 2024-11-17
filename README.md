### useState
used to create state
### useRef
 used to link to a DOM element.
### forwardRef
```
// wrap across existing component

const xyz = forwardRef(function xyzComponent({props}, ref){

})
```
### useImperativeHandle
used to link two refs
```
const xyz = forwardRef(function xyzComponent({props}, ref){

const xyvRef = useRef()

useImperativeHandle(ref,()=>({
// add methods or var to xyzRef which will be linked to ref in the param
	open:()=>{
	xyzRef.current.showModal()
	}
// now component which passed ref can use ref.open()
}))

})
```
### createPortal
used to return jsx code to the element provided
```
import { createPortal } from "react-dom"

const xyz = function(){
	return createPortal(<p>this should be in header</p>,document.getElementById("header"))
}
```
***
### contextAPI
A way to overcome prop drilling and manage advance state
1. create a store file
```
import { createContext } from "react"

export const CreatedContext = createContext({
// no need to write actual values here 
	arr:[],
	obj:{},
	func:()=>{}
})
```
2. wrap your App component
```
import { CreatedContext } from "store.js"

export default function App(){

const ctxVal = { // here goes the actual state value
	arr:[1,2,3,4],
	obj:{hello:"world"},
	func:()=>{console.log(":)")}
}

	return(
	<CreatedContext.Provider value={ctxVal}>
		<Header/>
		<Body/>
		<Footer/>
	</CreatedContext.Provider>
)
}
```
3. use context in any component
```
import { CreatedContext } from "store.js"
import { useContext } from "react"

export default function Header(){
	const {arr,obj,func} = useContext(CreatedContext)

return <>...</>
}
```
another way 
```
import { CreatedContext } from "store.js"

export default function Header(){

return <CreatedContext.Consumer>{(ctxVal)=><>...</>}</CreatedContext.Consumer>
}
```

### useReducer
Generally used with contextAPI
(below example is another way of using contextAPI)
```
import { createContext } from "react"

export const CreatedContext = createContext({
	state:[],
	stateManipulator1:()=>{},
	stateManipulator2:()=>{}
})

// export a component that is wrapper of context provider

function reducerFn(state, action){
	if(action.type==="increase"){
		state[action.payload.id]++
		return [...state]
	}
	if(action.type==="decrease"){
		state[action.payload.id]--
		return [...state]
	}
	return state
}

export function ContextProvider({children}){
	const [ctxState, dispatcherFn] = useReducer(reducerFn,{state:[]})
	
	function increaseState(id){
		dispatcherFn({type:"increase"},payload:{id:id})
	}
	function decreaseState(id){
		dispatcherFn({type:"decrease"},payload:{id:id})
	}
	
const ctxValue = {
	state:ctxState.state,
	stateManipulator1:increaseState,
	stateManipulator2:decreaseState
}
	return(
	<CreatedContext.Provider value={ctxValue}>
		{children}
	</CreatedContext.Provider>
	)
}

```

### useEffect
1. useEffect runs after the component is rendered and every time the dependencies array change
2. useEffect callback function can return a function(clean up function) which executes before (everytime the useEffect callback function is executed or everytime component is removed from the dom)
```
useEffect(()=>{
	...
	return ()=>{} // this executes everytime before parent fn executes and before
component is dismount
},[])
```

### useCallback
1. useCallback is used so that function value remains same (memoized) even after component re execution, therefore can be useful in dependencies in useEffect
```
const xyz = useCallback(function xyz(){
	...
},[])
```
### useMemo
1. useMemo will only recompute the memoized value when one of the deps has changed.
```
const val = useMemo(()=>{
	return isPrime(inpVal)
},[inpVal])
```

### memo
1. Lets you skip re-rendering a component when its props are unchanged.
```
const component = memo(function component({prop1}){
	return <></>
})
```
