```
import {Component} from "react"

class Xyz extends Component{
static contextType = Context
	constructor(){
		super()
		this.state={
			obj:{}
		}
	}

	render(){
		return <> jsx code </>
	}

	componentDidMount(){ // executes when component is rendered
		this.setState((prevState)={}) // updating state
		this.props // to get props
		this.context // to use context, providing context is same
		
	
	}

	componentWillUnmount(){
	
	}

	componentDidUpdate(){ // executes when component is updated
	
	}

	componentDidCatch(error){ // excutes on error
	
	}

	otherMethods(){
	
	}
}
```
