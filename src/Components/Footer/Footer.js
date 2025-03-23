import React from 'react';
import "./Footer.css";
import copyright from "../../Assets/Images/copyright-symbol-flat-style.png";

function Footer () {
    return (
        <div className="footer">
            <div clasName="footerImg">
                    <img src={copyright} alt="Copyright Symbol"></img> Copyright
                </div>
                <div class="footerTxt">
                    Phone: 1234 5678 <br />
                    Email: melbournepoodles@basketball.com
                </div>

        </div>
    )
}

export default Footer;