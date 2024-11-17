```
import {createBrowseRouter, RouterProvider} from "react-router-dom"

const routes = createBrowseRouter([
	{
	path:"/",
	element:<Root/>, // this is like layout
	errorElement:<errorElement>,
	children:[
		{index:true,element:<Homepage/>},
		{path:"/product", element:<Product/>},
		{path:"/product/:id", element:<ProductDetails/>}
	]
	
	}
])

...inside Root component
<RouterProvider router={router}/>

```
## OR
```
import {createRoutesFromElements, Route} from "react-router-dom"

const routeDefination = createRoutesFromElements(
   <Route>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/product" element={<Product/>}/>
   </Route>
)

const router = createBrowserRouter(routeDefination)

```


***
For navigation
```
const navigate = useNavigate()

...inside Fn
navigate("/product")
```
For params or route in the url
```
const params = useParams()

params.id // access the 
```
