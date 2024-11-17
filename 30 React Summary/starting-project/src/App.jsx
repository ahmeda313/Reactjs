import PostList from "./compopnents/PostList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Outlet/>
    <main>
      <PostList/>
    </main>
    </>
  )
}

export default App;



