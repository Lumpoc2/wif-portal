

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sidebar from './Component/Sidebar'
import Dashboard from './pages/Dashboard';
import Analytic from './pages/Analytic';
import Userview from './pages/Userview';
import Userlist from './pages/Userlist';
import About from './pages/About';
import Comment from './pages/comment';
function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/'element={<Dashboard/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/comment'element={<Comment/>}/>
      <Route path='/analytic'element={<Analytic/>}/>
      <Route path='/userview'element={<Userview/>}/>
      <Route path='/userlist'element={<Userlist/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App
