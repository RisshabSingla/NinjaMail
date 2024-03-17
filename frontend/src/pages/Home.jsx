import home_page from '../assets/images/home_page.png';
import design_temp from '../assets/images/design_temp.png';
import drag_drop from '../assets/images/drag_drop.png';
import automate from '../assets/images/automate.png';
import first from '../assets/images/first.png';
import second from '../assets/images/second.png';
import third from '../assets/images/third.png';
import fourth from '../assets/images/fourth.png';
import fifth from '../assets/images/fifth.png';
import sixth from '../assets/images/sixth.png';


export const Home = () => {
  return (
    <>
      {/* ============hero section========== */}
      <>
        <section id='home' className='hero__section pt-[60px] 2xl:h-[800px] '>
          <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
              {/* ============hero content============== */}
              <div>
                <div className='lg:w-[570px] '>
                  <h1 className='text-[40px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>Email Marketing Made Easy: We Do the Tech, You Do the Magic.</h1>
             {    /* <p className="text__para">
                  For 30 years in a row, Indian News & World Report has recognized us as one of the best public hospitals in the nation and #1 in Bangalore. We are serving our best and maintaining our current standards.we are constantly striving to improve our facilities and services to meet the ever-changing needs of our patients and community.
                  </p>*/}
                  <button className='btn'>Get started</button>
                </div>
              </div>

              <div className='flex gap-[30px] justify-end'>
                <div>
                  {/* <img className='w-full' src={heroImg01} alt='' /> */}
                </div>

                <div className='mt-[30px]'>
                  <img src={home_page} alt='' className='w-full mb-[30px]' />
                  {/* <img src={heroImg03} alt='' className='w-full ' /> */}

                </div>
              </div>



            </div>






          </div>
        </section>


<section id='mailing'>
  <div className='container'>
    <div className='lg:w-[470px] mx-auto'>
      <h2 className='heading text-center'>
        Providing the best mailing services 
      </h2>
    <p className='text__para text-center'>Smarter Email Marketing: Take control, automate campaigns, track results.</p>
    </div>

    <div className='flex flex-wrap justify-center'>
  <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
      <img src={drag_drop} width="75px" height="90px" alt=''/>
    </div>
    <div className='mt-[55px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Drag and Drop</h2>
      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results. </p>
     
    </div>
  </div>
  <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
      <img src={design_temp} alt=''/>
    </div>
    <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Design your own Templates</h2>
      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results. </p>
      
    </div>
  </div>
  <div className='py-[30px] px-5'>
    <div className='flex items-center justify-center'>
      <img src={automate} alt=''/>
    </div>
    <div className='mt-[30px]'>
      <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Automate your mails</h2>
      <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'> The Drag-and-Drop Clinic: Build Unmatched Emails. Expert Results. </p>
      {/* <Link to='/doctors' class='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
        <BsArrowRight class='group-hover:text-white w-6 h-5' />
      </Link> */}
    </div>
  </div>
</div>



  </div>
</section>


{/* ======about section start ===== */}




        {/* ===========services section=========== */}
        <section id='Templates'>
          <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>Make Your Own Templates</h2>
              <p className='text__para text-center'>
        World-class care for everyone. Our health System offers unmatched, expert health care.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-8">
      <div>
        <img src={first} alt="First Template" className="w-full" />
      </div>
      <div>
        <img src={second} alt="Second Template" className="w-full" />
      </div>
      <div>
        <img src={third} alt="Third Template" className="w-full" />
      </div>
      <div>
        <img src={fourth} alt="Fourth Template" className="w-full" />
      </div>
      <div>
        <img src={fifth} alt="Fifth Template" className="w-full" />
      </div>
      <div>
        <img src={sixth} alt="Sixth Template" className="w-full" />
      </div>
            </div>
          
          </div>
        </section>
        
      <section>
        <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>What our clients say</h2>
              <p className='text__para text-center'>
                World-class service for everyone. Our robust System offers unmatched,expert service.
              </p>
            </div>
            {/* <Testimonial/> */}
        </div>
      </section>
    

      </>
    </>
  )
}

export default Home;