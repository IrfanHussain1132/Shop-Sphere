import './navbarbanner.css';
import React from 'react';
import { Link } from 'react-router-dom';
import sideofer from '../../src/Asset/sideofer.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
  { name: "Fresh" },
  { name: "MX Player" },
  { name: "Sell" },
  { name: "Best Sellers" },
  { name: "Mobiles" },
  { name: "Today's Deals" },
  { name: "Prime" },
  { name: "Customer Service" },
  { name: "Electronics" },
  { name: "Home & Kitchen" },
  { name: "ShopSphere Pay" },
];

const Navbarbanner = () => {
  return (
    <>
      <div className="navbarbanner">
        <div className="optionleft">
          <MenuIcon sx={{ fontSize: "32px" }} />
          <div className="menubar">All</div>
        </div>

        {options.map((item, idx) => (
          <Link to={'/products'} className="optionleft" key={idx}>
            <div className="menubar">{item.name}</div>
          </Link>
        ))}

        <div className="optionright">
          <img src={sideofer} className="sideoffer" alt="Side Offer" />
        </div>
      </div>
    </>
  );
};

export default Navbarbanner;
