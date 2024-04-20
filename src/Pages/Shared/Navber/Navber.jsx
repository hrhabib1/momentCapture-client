import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navber = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)
  const handleSignOut = () => {
      logOut()
      .then(result => {
          console.log('Sign-out successful....', result)
         
      })
      .catch(e => console.error(e))
  }
    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-sky-200 p-5 rounded-xl text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/buySell">My Reviews</a></li>
            <li><a href="/addServices">Add Services</a></li>
            </ul>
          </div>
          <a className="text-decoration-none text-2xl font-extrabold italic"> <span className="ml-8">Moment </span><span className="text-white">Capture</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/buySell">My Reviews</a></li>
            <li><a href="/addServices">Add Services</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        { 
              user?.email ?
              <> 
               <button onClick={handleSignOut} className="btn btn-active btn-warning">Sign out</button>
              </>
             
                :
                <a className="btn bg-primary text-black" href="/signUp">SignIn/SignUp</a>}
        </div>
      </div>
    );
};

export default Navber;