import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';

const Nabvar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActionSection] = useState("")
//Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 50); //window.scrollY → number of pixels scrolled vertically > 50 → checks if user scrolled more than 50px Result is true or false setIsScrolled(true/false) updates state
    };

    window.addEventListener("scroll", handleScroll); //“Every time the user scrolls, call handleScroll”
    return () => window.removeEventListener("scroll",handleScroll);
  },[]) //why [] :Runs only once when component mounts Removes listener on unmount Best performance

  //smoth scroll function
  //handleMenuItemClick : Clicking a navbar / menu item Navigating to a section on the same page Closing a mobile menu
  const handleMenuItemClick =(sectionId) =>{
    setActionSection(sectionId); //Updates React state Marks the clicked menu item as active Used for: Highlighting active nav link Styling (text-purple-500, underline, etc.)
    setIsOpen(false); //Closes a hamburger / mobile menu Common in responsive navigation Improves UX on small screens

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  const menuItems =[
    {id:"about", label:'About'},
    {id:"skills", label:'Skills'},
    {id:"work", label:'Work'},
    {id:"edu", label:'Education'},
    {id:"contact", label:'Contact'},
  ]
  return (
    <nav className={` fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] ${isScrolled ? "bg-[#D5D6CF]/50" : "bg-transparent"}`}>
      <div className='py-5 flex justify-between items-center'>
        {/* Logo*/}
        <div className='text-lg font-semibold cursor-pointer tracking-[-1px] select-none'>
          <span className='text-[#0D1F23]'>Abhijit</span>
          <span> </span>
          <span className='text-[#0D1F23]'>Lohar</span>
        </div>
        {/* Desktop Menu*/}
        <ul className='hidden md:flex space-x-8 text-[#0D1F23]'>
          {menuItems.map((item)=>(
            <li
            key={item.id}
            className={`cursor-pointer hover:text-[#2E5C7E] ${activeSection === item.id ? "text-[#2E5C7E] " : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/*social Media Icons*/}
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/Gogeta22"
          target='_blank'
          rel="noopener noreferrer"
          className='text-[#0D1F23] hover:text-[#2E5C7E]'
          >
            <FiGithub size={24}/>
          </a>
          <a 
          href="https:www.linkedin.com/in/abhijeet-lohar-3a1209303/"
          target='_blank'
          rel="noopener noreferrer"
          className='text-[#0D1F23] hover:text-[#2E5C7E]'
          >
            <FaLinkedin size={24}/>
          </a>
        </div>
        {/*Mobile Menu  Icons */}
        <div className='md:hidden'>
          {isOpen ? (
        <FiX
        className='text-3xl text-[#2E5C7E] cursor-pointer'
        onClick={() => setIsOpen(false)}
        />
       ) : (
        <FiMenu
        className='text-3xl text-[#2E5C7E] cursor-pointer'
        onClick={() => setIsOpen(true)}
        />
       )}
        </div>
      </div>
       {/*Moblie Menu Items */}
       {isOpen && (
        <div className='absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#0D1F23]/50 backdrop-blur-lg z-50 rundedlg shadow-lg md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-[#0D1F23]'>
            {menuItems.map((item) => (
              <li key={item.id}
              className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#2E5C7E]" : "" }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a href="https://github.com/Gogeta22"
          target='_blank'
          rel="noopener noreferrer"
          className='text-[#0D1F23] hover:text-[#2E5C7E]'
          >
            <FiGithub size={24}/>
          </a>
          <a 
          href="https:www.linkedin.com/in/abhijeet-lohar-3a1209303"
          target='_blank'
          rel="noopener noreferrer"
          className='text-[#0D1F23] hover:text-[#2E5C7E]'
          >
            <FaLinkedin size={24}/>
          </a>
            </div>
          </ul>
        </div>
       )}
    </nav>
  )
}

export default Nabvar