"use client";
import React from "react";
import Link from "next/link";

import { useEffect, useRef } from "react";

import { Link as SLink } from "react-scroll";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    to: "home",
    display: "Home",
  },
  {
    to: "mailing",
    display: "Our Services",
  },
  {
    to: "Templates",
    display: "Templates",
  },
  {
    to: "contact",
    display: "Contact",
  },
];

function Home() {
  return (
    <>
      <>
        <section id="home" className="hero__section pt-[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              <div>
                <div className="lg:w-[570px] ">
                  <h1 className="text-[40px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Email Marketing Made Easy: We Do the Tech, You Do the Magic.
                  </h1>
                  <div className="p-2 m-2">
                    <Link className="p-3 bg-blue-300 rounded-xl" href="/second">
                      Get started
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex gap-[30px] justify-end">
                <div className="mt-[30px]">
                  <img src="./home_page.png" alt="" className="w-full mb-[30px]" />
                  {/* <img src={heroImg03} alt='' className='w-full ' /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mailing" className="p-2">
          <div className="container">
            <div className="lg:w-[470px] mx-auto p-3">
              <h2 className="text-3xl font-bold	 text-center p-2">Providing the best mailing services</h2>
              <p className="text-2xl text-center">
                Smarter Email Marketing: Take control, automate campaigns, track results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src="./drag_drop.png" width="75px" height="90px" alt="" />
                </div>
                <div className="mt-[55px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center text-3xl">
                    Drag and Drop
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results.{" "}
                  </p>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src="./design_temp.png" alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Design your own Templates
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results.{" "}
                  </p>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src="./automate.png" alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Automate your mails
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    {" "}
                    The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Templates">
          <div className="container">
            <div className="xl:w-[470px] p-8 mx-auto">
              <h2 className="text-3xl text-center p-2 font-bold	">Make Your Own Templates</h2>
              <p className="text-2xl text-center">
                World-class care for everyone. Our health System offers unmatched, expert service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-8">
              <div>
                <img src="./first.png" alt="First Template" className="w-full" />
              </div>
              <div>
                <img src="./second.png" alt="Second Template" className="w-full" />
              </div>
              <div>
                <img src="./third.png" alt="Third Template" className="w-full" />
              </div>
              <div>
                <img src="./fourth.png" alt="Fourth Template" className="w-full" />
              </div>
              <div>
                <img src="./fifth.png" alt="Fifth Template" className="w-full" />
              </div>
              <div>
                <img src="./sixth.png" alt="Sixth Template" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4">
          <div className="container">
            <div className="xl:w-[470px] mx-auto p-16">
              <h2 className="text-3xl font-bold text-center">What our clients say</h2>
              <p className="text-2xl text-center">
                World-class service for everyone. Our robust System offers unmatched,expert service.
              </p>
            </div>
            {/* <Testimonial/> */}
          </div>
        </section>
      </>
    </>
  );
}

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src="./logo-removebg-preview (3).png" className="h-16 w-auto" alt="" />
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks?.map((link, index) => (
                <li key={index}>
                  {/* <p className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor">
                    {link.display}
                  </p> */}
                  <SLink
                    href={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    activeClass="active"
                  >
                    {link.display}
                  </SLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link href="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src="./avatar-icon.png" className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            <Link href="/second">
              <button className="bg-primaryColor hover:bg-sky-400 py-2 px-6 text-black font-[600] h-[44px] flex items-center justify-center rounded-[50px] bg-blue-100">
                Get Started
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="pb-16 pt-10 pr-10 pl-10">
      <div className="container">
        <div className="flex flex-col justify-between md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src="./logo-removebg-preview (3).png" alt="Logo" />
            <p className="text-[16px] mt-4 leading-7 font-[400] text-textColor">
              ©️ Copyright 2024, All rights reserved <br />
              Made with ❤️ by{" "}
              <a
                className="hover:bg-irisBlueColor hover:p-1 hover:text-blue-800 hover:rounded-md text-primaryColor"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                Shivam , Risshab , Vijval , Devansh
              </a>
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                href="https://tazheeb.com"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="group-hover:text-white w-4 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                </svg>
              </a>
              {/* Add the other social media icons similarly */}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/home">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/services">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Want To</h2>
            <ul>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/doctors">
                  Find a Doctor
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  Request Appointment
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  Find a Location
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  Get an opinion
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
            <ul>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  Donate
                </a>
              </li>
              <li className="mb-4">
                <a className="text-[16px] leading-7 font-[400] text-textColor" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function page() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
