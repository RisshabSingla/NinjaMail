import { useEffect, useRef } from "react";
import logo from '../../assets/images/logo-removebg-preview (3).png';
import userImg from '../../assets/images/avatar-icon.png';
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";

const navLinks = [
    {
        to: 'home',
        display: 'Home'
    },
    {
        to: 'mailing',
        display: 'Find a Doctor'
    },
    {
        to: 'services',
        display: 'Services'
    },
    {
        to: 'contact',
        display: 'Contact'
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () =>
            window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} className="h-16 w-auto" alt="" />
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                                        activeClass="active"
                                    >
                                        {link.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to='/' smooth={true} duration={500}>
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img src={userImg} className="w-full rounded-full" alt="" />
                                </figure>
                            </Link>
                        </div>
                        <Link to='/login' smooth={true} duration={500}>
                            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
                        </Link>
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
