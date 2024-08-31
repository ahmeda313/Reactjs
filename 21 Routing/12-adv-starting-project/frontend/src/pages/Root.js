import MainNavigation from "../components/MainNavigation"
import {Outlet, useNavigation} from "react-router-dom"

const Root = () => {
  const navigate = useNavigation()
  
  return (
    <>
    <MainNavigation/>
    <main>
      {navigate.state==="loading" && <p>Loading...</p>}
        <Outlet/>
    </main>
    </>
  )
}

export default Root