
import logo from '../../assets/images/logo-removebg-preview (3).png';

const Footer = () => {
    return (
        <footer className="pb-16 pt-10 pr-10 pl-10">
            <div className="container">
                <div className="flex flex-col justify-between md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="Logo" />
                        <p className="text-[16px] mt-4 leading-7 font-[400] text-textColor">
                            ©️ Copyright 2024, All rights reserved <br /> 
                            Made with ❤️ by <a className="hover:bg-irisBlueColor hover:p-1 hover:text-white hover:rounded-md text-primaryColor" href="" target="_blank" rel="noreferrer">Shivam , Risshab , Vijval , Devansh</a>
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <a className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none" href="https://tazheeb.com">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="group-hover:text-white w-4 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                                </svg>
                            </a>
                            {/* Add the other social media icons similarly */}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
                        <ul>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/home">Home</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">About Us</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/services">Services</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Want To</h2>
                        <ul>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/doctors">Find a Doctor</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">Request Appointment</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">Find a Location</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">Get an opinion</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
                        <ul>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">Donate</a></li>
                            <li className="mb-4"><a className="text-[16px] leading-7 font-[400] text-textColor" href="/">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;