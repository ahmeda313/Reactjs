import Header from "./Header/Header.jsx"
import CoreComponents from "./CoreComponents/CoreComponents.jsx";
import Examples from "./Examples/Examples.jsx"

// fragments
// splitting components
// wrapper components
// passing inBuilt props (id, className) from custom tag to html tag ---> eg: <button {...props}>
// setting and passing components dynamically through props ----> eg:  Examples.jsx, Tab.jsx


function App() {


  return (
    <div>
      <Header/>
      <main>
        <CoreComponents/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
