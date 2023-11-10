import React from 'react'
import { Parallax } from 'react-parallax'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
function SectionCard(props) {
    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className={`w-11/12 flex justify-between items-center ${props.flex_direction} gap-10`}>
                <div className="w-6/12 flex flex-col justify-center items-start gap-4 h-fit">
                    <h4 className="text-lg">{props.tagline}</h4>
                    <h2 className="text-black text-start text-6xl ">
                        {props.heading}
                    </h2>
                    <p className='text-md text-start'>{props.description}</p>

                    <div className="flex flex-row gap-3">
                        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-10 py-2.5 text-center mr-2 mb-2 ">Learn More</button>
                        <button type="button" className="text-gray-900 hover:text-white border  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Sign Up *</button>
                    </div>
                </div>
                <div className={`w-5/12 h-75vh flex parallax-img`} style={{ backgroundImage: `url(${props.img})` }}>

                </div>
            </div>
        </div>
    )
}

export default SectionCard