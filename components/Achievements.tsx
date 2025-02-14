import React from "react";
import Image from "next/image";
import Coursera1 from '../public/Coursera1-img.png'
import Coursera2 from '../public/Coursera2-img.png'
import Coursera3 from '../public/Coursera3-img.png'
import Coursera4 from '../public/Coursera4-img.png'
import Coursera5 from '../public/Coursera5-img.png'
import Coursera6 from '../public/Coursera6-img.png'
import Coursera7 from '../public/Coursera7-img.png'

const Achievements = () => {
    return (
        <section>
          <div>
            <h3 className="text-4xl py-2 mt-14 mb-5 text-black dark:text-white font-serif font-semibold">
              Some Other Achievements
            </h3>
          </div>
          <div className="carousel">
            <div className="carousel-track">
              <Image src={Coursera1} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera2} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera3} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera5} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera4} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera7} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera6} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera1} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera2} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera3} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera5} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera4} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera7} alt="" className="carousel-item rounded-lg"/>
              <Image src={Coursera6} alt="" className="carousel-item rounded-lg"/>
            </div>
          </div>
        </section>
    );
};

export default Achievements