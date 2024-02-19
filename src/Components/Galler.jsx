import React from 'react'
import gallery1  from '../Assets/images/gallery-1.png'
import gallery2 from '../Assets/images/gallery-2.png'
import gallery3 from '../Assets/images/gallery-3.png'
import gallery6 from '../Assets/images/gallery-6.jpg'
import gallery7 from '../Assets/images/gallery-7.jpg'
import gallery8 from '../Assets/images/gallery-8.jpg'
import gallery19 from '../Assets/images/gallery-19.jpg'
import gallery16 from '../Assets/images/gallery-16.jpg'
import gallery4 from '../Assets/images/gallery-4.png'
import gallery9 from '../Assets/images/gallery-9.jpg'
import gallery11 from '../Assets/images/gallery-11.jpg'





import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'



function Gallery() {

    AOS.init({
        // Add your AOS options here
    });

    return (
        < section className='mt-5'>
            <nav className="navbar navbar-expand-lg nav-banner  p-0 z-3" id='home' style={{ backgroundColor: '#060525' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-3 p-2 mb-lg-0 text-center">

                            <li className="nav-item heading7">
                                <a className="nav-link active px-3 text1" aria-current="page" id='name-nav' href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='buy-now rounded-2'>
        <a href="" className='heading12 buy-now-bt'>BuyNow</a>
      </div>
            <section className='container-fluid'>

                <div className='gallery-bg mt-4'>
                    <div className='text-center'>
                        <h1 className='pt-3 heading11'>Every Special Moments</h1>
                    </div>
                </div>
                <div className='gallery-st-bg'>
                    <div className='row d-flex justify-content-center py-4 my-4'>
                        <div className='col-md-5 text-center'>
                            <div className='mb-3' >
                                <div className='' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <img src={gallery1} alt="" className='img-fluid w-75 border border-secondary p-2' />
                                </div>
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div className='' data-aos="flip-up" data-aos-duration = "1200">
                                <img src={gallery2} alt="" className='img-fluid w-75 border border-secondary p-2' />

                            </div>
                            <h3 className='pt-2 text-center heading4' >Sweet Memories</h3>
                            <div className=' text-end' >
                                <div className='' data-aos="flip-left" data-aos-duration = "1000">
                                    <img src={gallery3} alt="" className='img-fluid w-75 border border-secondary p-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='gallery-md-bg'>
                    <div className='row d-flex justify-content-center py-4 my-4'>
                        <div className='col-md-5'>
                            <div className=' ' data-aos="fade-down-left" data-aos-duration = "1000">
                                <img src={gallery6} alt="" className='img-fluid w-50 border border-secondary p-2' />
                            </div>
                            <div className='text-end pt-2' >
                                <div className='' data-aos="fade-right" data-aos-duration = "1000">
                                    <img src={gallery7} alt="" className='img-fluid w-50 border border-secondary p-2' />
                                </div>

                            </div>
                            <div className='pt-2'>
                                <div className='' data-aos="fade-left" data-aos-duration = "1000">
                                    <img src={gallery8} alt="" className='img-fluid w-50 border border-secondary p-2' />
                                </div>
                            </div>
                            <div className='text-end pt-2'>
                                <div className='' data-aos="fade-right" data-aos-duration = "1000">
                                    <img src={gallery19} alt="" className='img-fluid w-50 border border-secondary p-2' />
                                </div>
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div className=''>
                                <h1 className='heading10 pb-2 pt-1'>Pre-Wedding Shoot</h1>
                            </div>
                            <div className='' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery16} alt="" className='img-fluid border border-secondary p-2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery-end-bg'>
                    <div className='row d-flex justify-content-center pt-4'>
                        <div className='col-md-5'>
                            <div className='text-end'>
                               <div className='' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">  
                               <img src={gallery4} alt="" className='img-fluid w-75 border border-5 p-1' />
                               </div>
                            </div>
                            <div className='pt-3 mb-3'>
                                <div className='' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery9} alt="" className='img-fluid w-75 border border-5 p-1' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='text-end'>
                               <div className='' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                               {/* <img src={marriage1} alt="" className='img-fluid w-75 border border-5 p-1' /> */}
                               </div>
                            </div>
                            <div className='pt-3'>
                               <div className='' data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                               <img src={gallery11} alt="" className='img-fluid w-75 border border-5 p-1' />
                               </div>
                            </div>
                            <h1 className='heading10 text-light'>Best Moments</h1>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Gallery