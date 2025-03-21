// App.js
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './product.css'
import productDetail from './product.json'
import { colors } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { addtocart } from '../redux/actions.js/action';
import {toast,ToastContainer} from 'react-toastify';

function Products() {


const cartitems=useSelector((state)=>state.cart.items);
const dispatch=useDispatch();

const handleaddtocart=(item)=>{
  toast.success("Sucessfully add in cart",{position: "top-left", 
    autoClose: 2100})
  dispatch(addtocart(item));
}

  return (
    <div className="productpage">
      <div className="topbanner">
        <div className="topbanneritems">
          Electronics
        </div>
        <div className="ItemsMenu">Mobiles and Accessories</div>
        <div className="ItemsMenu">Laptops and Accessories</div>
        <div className="ItemsMenu">Audio</div>
        <div className="ItemsMenu">Cameras</div>
        <div className="ItemsMenu">TV & Home Entertainment</div>
        <div className="ItemsMenu">Office & Stationary</div>
        <div className="ItemsMenu">Computer Peripherals</div>
        <div className="ItemsMenu">Musical Instuments</div>
      </div>

      <div className="promainpage">
        <div className="pagemainleft">
          <div className="leftcattitle">Category</div>
          <div className="catcontent">Computer and Accessories</div>
          <div className="subcatcontent">Macbooks</div>
          <div className="subcatcontent">ShopSphere</div>
          <div className="subcatcontent">Average Customer reviews</div>
          <div className="ratingleftbox">
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <div className="andup">& up</div>
          </div>
          <div className="ratingleftbox">
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <div className="andup">& up</div>
          </div>
          <div className="ratingleftbox">
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <div className="andup">& up</div>
          </div>
          <div className="ratingleftbox">
            <StarIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <StarBorderIcon sx={{ fontSize: "20px", color: "#febd69", marginTop: "15px" }} />
            <div className="andup">& up</div>
          </div>

          <div className="subcatcontent">Amazon Prime</div>
          <div className="subcatcontent">Average Customer reviews</div>
          <div className="subcatcontent">Amazon Prime</div>
          <div className="subcatcontent">Average Customer reviews</div>
          <div className="subcatcontent">Amazon Prime</div>
          <div className="subcatcontent">Average Customer reviews</div>
          <div className="subcatcontent">Amazon Prime</div>
          <div className="subcatcontent">Average Customer reviews</div>

        </div>

        <div className="pagemainright">
          <div className="righttopbanner">
            1-5 of 5 results for <span className='topspan'>Gaming Products</span>
          </div>

          <div className="imgpropage">
            {productDetail.product.map((item, index) => (
              <div className="propageone" key={item.id}>
                <div className="imgpropage1">
                  <img src={item.imageUrl} className="proimage" alt={item.name} />
                </div>
                <div className="proname">
                  <div>{item.name}</div>
                  <div className="prorating">
                    <StarIcon sx={{ fontSize: "17px", color: "#febd69", marginTop: "5px" }} />
                    <StarIcon sx={{ fontSize: "17px", color: "#febd69", marginTop: "5px" }} />
                    <StarIcon sx={{ fontSize: "17px", color: "#febd69", marginTop: "5px" }} />
                    <StarIcon sx={{ fontSize: "17px", color: "#febd69", marginTop: "5px" }} />
                    <StarBorderIcon sx={{ fontSize: "17px", color: "#febd69", marginTop: "5px" }} />
                  </div>
                  <div className="pricepage">
                    <div className="currency">₹</div>
                    <div className="ratedetail">{item.price}</div>
                    <div className="addtobasket" onClick={()=>{handleaddtocart(item)}}>Add to Cart</div>
                  </div>
                  <div className="offpropage">Upto 10% off by ShopSphere</div>
                  <div className="freedelivery">Free Delivery By ShopSphere</div>
                </div>
              </div>
            ))}






          </div>



        </div>



      </div>





            <ToastContainer/>
    </div>
  );
}

export default Products;
