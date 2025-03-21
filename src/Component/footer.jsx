// App.js
import React from 'react';
import amazonlogo from '../../src/Asset/shopspere.jpg';
import './footer.css'
function Footer() {
  return (
    <div className="footer">
        <div className="footercontent">
            <div className="footercon1">
                <div className="footertitle">Get to Know us</div>
                <div className="footersubtilte">
                    <div className="subtitle">About us</div>
                    <div className="subtitle">Careers</div>
                    <div className="subtitle">Press Releases</div>
                    <div className="subtitle">Amazon Science</div>
                </div>

            </div>
            <div className="footercon1">
                <div className="footertitle">Connect with us</div>
                <div className="footersubtilte">
                    <div className="subtitle">Instagram</div>
                    <div className="subtitle">Facebook</div>
                    <div className="subtitle">Twitter</div>
                    <div className="subtitle"></div>
                </div>

            </div>
            <div className="footercon1">
                <div className="footertitle">Make Money with Us</div>
                <div className="footersubtilte">
                    <div className="subtitle">Sell on Amazon</div>
                    <div className="subtitle">Sell under Amazon Accelerator</div>
                    <div className="subtitle">Protect and Build Your Brand</div>
                    <div className="subtitle">Amazon Global Selling</div>
                    <div className="subtitle">Supply to Amazon</div>
                    <div className="subtitle">Fulfilment by Amazon</div>
                    <div className="subtitle">Amazon Pay on Merchants</div>

                </div>

            </div>
            <div className="footercon1">
                <div className="footertitle">	
                Let Us Help You</div>
                <div className="footersubtilte">
                    <div className="subtitle">Your Account</div>
                    <div className="subtitle">Returns Centre</div>
                    <div className="subtitle">Recalls and Product Safety Alerts</div>
                    <div className="subtitle">100% Purchase Protection</div>
                    <div className="subtitle">Help</div>
                    
                </div>

            </div>
        </div>











        <div className="amazonimg">
            <img className='amazonimgfooter' src={amazonlogo}></img>
        </div>

    </div>
  );
}

export default Footer;
