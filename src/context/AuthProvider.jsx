import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()  
//  localStorage.clear()
const AuthProvider = ({children}) => {

const [userData, setuserData] = useState(null)
setlocalStorage()
useEffect(() => {
const {employees} = getlocalStorage()
setuserData (employees)


}, [])


  return (
<div>
<AuthContext.Provider value={[userData,setuserData]}>
  {children}
</AuthContext.Provider>
</div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider