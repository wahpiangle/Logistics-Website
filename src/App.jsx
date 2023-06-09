import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Service from './components/Service'
import Project from './components/Project'
import Error from './components/Error'
import ProjectLayout from './components/ProjectLayout'
import ProjectItem from './components/ProjectItem'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="service" element={<Service />} />
        <Route path="project" element={<ProjectLayout />}>
          <Route index element={<Project />} />
          <Route path=":id" element={<ProjectItem />} />
        </Route>
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
