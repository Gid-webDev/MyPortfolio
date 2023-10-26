import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import App from "../App"
import { Iframe } from "./Iframe"
import About from "./About"
import { DataContext } from "../Contexts/DataContext"
import { useContext } from "react"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
      <Route path="" element={<App/>} />

      <Route path="project">
        <Route path="" element={<Iframe/>}/>
        <Route path=":id" element={<Iframe/>}/>
     </Route>

     <Route path="about">
      <Route path="" element={<About/>}/>
      <Route path=":id" element={<About/>}/>
     </Route>
    
  </Route>
))


export const Provider = <RouterProvider router={router}/>