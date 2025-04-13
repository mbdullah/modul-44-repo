import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navbarItems = [
    { id: 1, 
      name: "Home", 
      path: "/" 
    },
    { id: 2, 
      name: "About", 
      path: "/about" 
    },
    { id: 3, 
      name: "Services", 
      path: "/services" 
    },
    { id: 4, 
      name: "Blog", 
      path: "/blog"
    },
    { id: 5, 
      name: "Contact", 
      path: "/contact" 
    }
  ];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navbarItems.map(route => <Link key={route.id} route={route}></Link>)
    
      
    return (
        <nav className='flex justify-between mx-10 my-5'>

            <span className='flex'>
                <span  onClick={()=>setOpen(!open)}>
                {
                open ? 
                <X className='lg:hidden cursor-pointer'></X> : 
                <Menu className='lg:hidden cursor-pointer'></Menu>
                }
                </span>

                <ul className={`lg:hidden absolute duration-1000
                     ${open ? 'top-14' : '-top-40'}
                      bg-amber-100`}>
                    {
                        links
                    }
                </ul>
            <h3 className='ml-5'>My Navbar</h3>
            </span>

           <ul className='lg:flex hidden'>
           {
                links
            }
           </ul>

        {/* <ul className='flex'>
            {
                navbarItems.map(item => <li className='mr-10'><a href={item.path}>{item.name}</a></li>)
            }
        </ul>
       
            <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/blogs">Blogs</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
            </ul> */}

            <button className='btn'>Sign In</button>

        </nav>
        
        
    );
};

export default Navbar;