import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import App from "../App"
import { Iframe } from "./Iframe"
import Resume from "./Resume"
import Projects from "./Projects"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
      <Route path="" element={<App/>} />

      <Route path="projects">
        <Route path="" element={<Projects/>}/>
        <Route path=":id" element={<Projects/>}/>
     </Route>

     <Route path="Resume">
      <Route path="" element={<Resume/>}/>
      <Route path=":id" element={<Resume/>}/>
     </Route>
    
  </Route>
))


export const Provider = <RouterProvider router={router}/>