import { useState, useEffect } from 'react';
import style from '../style/Navbar.module.css'


export const Navbar =() => {

    const [ showMenu , setShowMenu ] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    }

    // Handle screen resizing to update `isMobile`
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



  return (
    <>
    <div className={style.Navbar}>
        <div className={style.logoContainer}>
            <img className={style.logo} src="/images/logo1.png" alt="logo"/>
            <span className={style.hamburger} onClick={toggleMenu}> &#9776; </span>
        </div>
        
        <div>
            <ul style={{ display: isMobile ? (showMenu ? 'block' : 'none') : 'flex' }}
                className={style.nav}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Exercise</li>
                <li>Fees</li>
                <li>Branch</li>
            </ul>
        </div>
    </div>
    </>
  );
}
