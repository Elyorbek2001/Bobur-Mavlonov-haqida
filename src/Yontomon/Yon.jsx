import React from 'react'
import "./Yon.css"
import Icon from "./iconkalar/twitter-logo-4 1.png";
import Icon1 from "./iconkalar/Vector.png";
import Icon2 from "./iconkalar/explore.png";
import Icon3 from "./iconkalar/notification.png";
import Icon4 from "./iconkalar/messages.png";
import Icon5 from "./iconkalar/bookmarks.png";
import Icon6 from "./iconkalar/lists.png";
import Icon7 from "./iconkalar/profile fill.png";
import Icon8 from "./iconkalar/more.png";


const yon = () => {
    return (
        <div className='katta'>
            <div className='yon'>


                <ul className='ul'>
                    <img className='img' src={Icon} alt="" />
                    <li> <img src={Icon1} alt="" /> Home</li>
                    <li> <img src={Icon2} alt="" /> Explore</li>
                    <li> <img src={Icon3} alt="" /> Notifications</li>
                    <li> <img src={Icon4} alt="" /> Messages</li>
                    <li> <img src={Icon5} alt="" /> Bookmarks</li>
                    <li> <img src={Icon6} alt="" /> Lists</li>
                    <li> <img src={Icon7} alt="" /> Profile</li>
                    <li><img src={Icon8} alt="" /> More</li>
                    <button>Twett</button>
                </ul>


            </div>
        </div>

    )
}

export default yon
