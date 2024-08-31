import { Outlet, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getAuthToken, getTokenDuration } from '../utils/authToken';

function RootLayout() {
  // const navigation = useNavigation();
  const token = getAuthToken()
  const submit = useSubmit()

  useEffect(()=>{
    if(!token){
      return
    }

    if(token==="EXPIRED"){
      submit(null,{action:"/logout",method:"POST"})
      return
    }

    const timeForExpiration = getTokenDuration()
    console.log(timeForExpiration)

    setTimeout(()=>{

      submit(null,{action:"/logout",method:"POST"})

    },timeForExpiration)

  },[token,submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
