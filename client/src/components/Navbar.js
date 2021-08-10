import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './../actions/userActions';


export default function Navbar() {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
   
        const [scrolled,setScrolled]=React.useState(false);
     
        const handleScroll=() => {
          const offset=window.scrollY;
          if(offset > 200 ){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
      
        useEffect(() => {
          window.addEventListener('scroll',handleScroll)
        })
      let navbarClasses=['navbar'];
        if(scrolled){
          navbarClasses.push('scrolled');
        }
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
                <a className="navbar-brand  " href="/"><strong><i><h2>E.GraphiC Cards</h2></i></strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i style={{color:'black'}} class="fas fa-align-justify"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        {currentUser ? (
                        <div className="dropdown mt-1">
                        <a style={{color:'black'}} className=" dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         {currentUser.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="/orders">Orders</a>
                          <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>logout</li></a>
                        </div>
                      </div>
                        ) : (<li className="nav-item">
                            <a className="nav-link" href="/login" style={{ color: 'black' }}>Login</a>
                        </li>)}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart" style={{ color: 'black' }}>
                                Cart {cartstate.cartItems.length}</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
