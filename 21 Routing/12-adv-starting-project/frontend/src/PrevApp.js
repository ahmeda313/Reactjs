import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import EventsPage, { loader as eventLoader } from "./pages/EventsPage"
import EventDetailPage, {loader as eventDetailsLoader, action as deleteEventAction} from "./pages/EventDetailPage"
import NewEventPage from "./pages/NewEventPage"
import EditEventPage from "./pages/EditEventPage"
import Root from "./pages/Root"
import EventRoot from "./pages/EventRoot"
import Error from "./pages/Error"
import {action as updateEventAction} from "./components/EventForm"

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components


const routes = createBrowserRouter([
  {path:"/",element:<Root/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<HomePage/>},
      {path:"events",element:<EventRoot/>,
        children:[
        {index:true,element:<EventsPage/>,loader:eventLoader},
        {path:":eventId",id:"event-details", loader:eventDetailsLoader,
          children:[
            {index:true,element:<EventDetailPage/>, action:deleteEventAction},
            {path:"edit",element:<EditEventPage/>,action:updateEventAction},
          ]},
        {path:"new",element:<NewEventPage/>,action:updateEventAction},
      ]}

    ]
  },

])


function App() {
  return <RouterProvider router={routes} />;
}

export default App;
