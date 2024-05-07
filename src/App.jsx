

import PageHome from "./routes/PageHome/pageHome"

import Layout from "./routes/layout/layout"
import ListPage from "./routes/listPage/listPage"
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom"


function App() {

  const router  = createBrowserRouter([
    {
      path:"/",
      element:
        <Layout/>,
        children:[
          {
            path:"/",
            element:<PageHome/>
          },
          {
            path:"/list",
            element:<ListPage/>
          }
        ]
      
    },
  
  ])
  return (

    <RouterProvider router={router}/>
  )
}

export default App