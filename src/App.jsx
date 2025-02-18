import { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Admin from "./components/dashbord/Admin"
import EmployeDashboard from "./components/dashbord/EmployeDashboard"
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [logedInUserData, setlogedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUserData')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
 setUser(userData.role)
 setlogedInUserData(userData.data)
  }
  },[])

  const handelLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setUser('Admin')
      localStorage.setItem('loggedInUserData', JSON.stringify({ role: 'Admin' }))
    } else if (userData) {
      const employee =userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setlogedInUserData(employee)
        localStorage.setItem('loggedInUserData', JSON.stringify({ role: 'Employee',data:employee }))
      }
    } else {
      alert("invalid")
    }
  }

  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ''}
      {user == 'Admin' ? <Admin changeUser ={setUser} /> : (user == 'employee' ? <EmployeDashboard changeUser ={setUser} data={logedInUserData} /> : null)}
    </>
  )
}

export default App
