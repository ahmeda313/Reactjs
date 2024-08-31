import PageContent from "../components/PageContent"
import {useRouteError} from "react-router-dom"
import MainNavigation from "../components/MainNavigation"


const Error = () => {
    const error = useRouteError()

    let message = "Something went wrong"
    let title = "Error"

    if(error.status===404){
        message = "Could not find resources"
        title = "Not found"
    }
    if(error.status===500){
        message = error.data.message
        title = "Error occurred"
    }
    

  return (
    <>
    <MainNavigation/>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
    </>
  )
}

export default Error