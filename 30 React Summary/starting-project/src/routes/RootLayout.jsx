import MainHeader from "../compopnents/MainHeader"
import { Outlet, useNavigation } from "react-router-dom"

export default function RootLayout(){
    const navigation = useNavigation()
    return(
        <>
        <MainHeader/>
        <main>
            {navigation.state==="loading" && <p style={{textAlign:"center"}}>Loading...</p>}
            <Outlet/>
        </main>
        </>
    )
}