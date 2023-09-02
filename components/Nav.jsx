'use client'
import Link from "next/link";
import React, {useState, useEffect} from "react"




export default function Nav() {


  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

    //  Funkcja do obsługi zmiany aktywnej sekcji
    const handleSectionChange = (section) => {
    setActiveSection(section)}

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    
    
    
    
    return (
      <header className={`header ${scrolling ? 'scroling' : ''}`} id="top">

        <Link href='/' className={`logo ${activeSection === '' ? '' : ''}`} onClick={() => handleSectionChange('')} >Danbo86</Link>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleClick} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

        <nav className={`navbar ${menuOpen ? 'active-mb-menu' : ''}`} >
           
            <Link 
              href='omnie' 
              className={activeSection === 'omnie' ? 'active' : ''} 
              // onClick={() => handleSectionChange('omnie')}
              onClick={handleClick}
              >O mnie
            </Link>
            <Link 
              href='blog'
              className={activeSection === 'blog' ? 'active' : ''}
              onClick={handleClick}
              >Blog</Link>
            <Link
              href='wyniki'
              className={activeSection === 'wyniki' ? 'active' : ''}
              onClick={handleClick}
              >Wyniki</Link>
            <Link 
              href='kontakt'
              className={activeSection === 'kontakt' ? 'active' : ''}
              onClick={handleClick}
              >Kontakt</Link>
        </nav>
        
   </header>
  )
}
