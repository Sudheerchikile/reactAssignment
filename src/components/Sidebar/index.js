import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  
} from 'react-icons/fa';
import './index.css';

const Sidebar = () => {
    const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <FaTh />,
    },
    {
      path: '/task4',
      name: 'Task4',
      icon: <FaCommentAlt />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />,
    },
   
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />,
    }
   
  ];

  return (
    <div className="container">
    <div className="sidebar">
        <div className="top_section">
            <img src="https://res.cloudinary.com/dmgwybgud/image/upload/v1711612499/carboncelllogo-removebg-preview_cwvfeo.png" alt="logo" className="logo"/>
            <div  className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        
        {
           

            menuItem.map((item, index)=>(
            <Link to={item.path} key={item.name} className={`link ${location.pathname === item.path ? 'activee' : ''}`}>
                    <div className="icon">{item.icon}</div>
                    <div  className="link_text">{item.name}</div>
                </Link>
            ))
            
        }
        
    </div>
    </div>
  );
};

export default Sidebar;
