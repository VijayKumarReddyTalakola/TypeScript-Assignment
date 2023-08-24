import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import FirstPageComponent from './components/HomePage'
import SecondPageComponent1 from './components/SecondPage'
import {Navigate} from 'react-router-dom'
// import Alert from '@mui/material/Alert';

const ProtectedRoute = ({children}) =>{
  
  const user = localStorage.getItem("userDetails")
  if(!user){
      // <Alert severity="error">Fill All Details to access this Page!</Alert>
      return <Navigate to ='/'/>
    }
    return children
  }

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path ="/" >
            <Route index element={<FirstPageComponent/>}/>
            <Route path='second' element={
              <ProtectedRoute>
                <SecondPageComponent1/>
              </ProtectedRoute>}/>
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
