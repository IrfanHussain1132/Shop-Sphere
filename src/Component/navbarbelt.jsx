import React from 'react';
import './navbarbelt.css';
import amazonlogo from '../../src/Asset/shopsperecpy.jpg';
import indiaflag from '../../src/Asset/Flag_of_India.svg.webp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';



const Navbarbelt = () => {


    const cartitems=useSelector((state)=>state.cart.items);
  return (
    <>
      <div className="navbarbelt">
        <div className="leftbox">
            <Link to={'/products'}className="leftlogo">
                <img className='amazonlogo' src={amazonlogo}/>
                <span className='inlogo'>.in</span>
            </Link>
            <div className="location">
                <div className="locimg">
                <LocationOnIcon  className='loclogo' sx={{fontSize:"22px"}}/>
                </div>
                <div className="locplace">
                    <div className="locplacetop">Delivery to Guntur 522501</div>
                    <div className="locplacebottom">Update location</div>
                </div>
            </div>
        </div>



        <div className="serchbox">
            <div className="serchdiv">
                <div className="searchboxall">
                    <div className="searchboxalltext">All</div>
                    <ArrowDropDownIcon sx={{fontSize:"20px"}}/>

                </div>
                <input type='text' className='inputbox' placeholder='Search Amazon.in'></input>
                
                <div className="searchicon">
                <SearchIcon sx={{fontSize:"27px"}}/>
                </div>
            </div>
        </div>

        <div className="rightbox">
              <div className="indianflag">
                <img src={indiaflag} className='india'></img>
                <div className="indiabelt"> EN<ArrowDropDownIcon sx={{fontSize:"20px"}}/></div>
               
              </div>
              
          <div className="signin">
              <div className="hellotop">Hello, User</div>
              <div className="acclist">Accounts & List</div>
          </div>
          <div className="signin">
              <div className="hellotop">Returns</div>
              <div className="acclist">& Orders</div>
          </div>



          <Link to={'/cart'} className="signin">
              <span className='cartnum'>{cartitems.length}</span>
              <div className="hellotop"><ShoppingCartOutlinedIcon/><span className='carttile'>Cart</span></div>
          </Link>


        </div>
      </div>
    </>
  );
};

export default Navbarbelt;
