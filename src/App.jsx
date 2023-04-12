import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
