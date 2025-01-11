import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Landing from './Landing.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />,
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/landing' element={<Landing/>}>
    
    </Route>

    </Routes>
    </BrowserRouter>
)
