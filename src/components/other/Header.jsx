import PropTypes from 'prop-types';

const Header = (props) => {

const logoutUser = ()=>{
  localStorage.setItem('loggedInUserData','')
  props.changeUser('')


  
}
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white text-4xl" >Hello <br /> <span className="font-bold">username</span> 👋🏻</h1>
      <button onClick={logoutUser} className="px-6 py-2 rounded-full bg-orange-600 text-xl text-white text-center">Log Out</button>
    </div>
  )
}
Header.propTypes = {
  data: PropTypes.any,
  changeUser: PropTypes.func.isRequired
};

export default Header