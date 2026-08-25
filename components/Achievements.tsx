import React from "react";
import Image from "next/image";
import Coursera1 from "../public/Coursera1-img.png";
import Coursera2 from "../public/Coursera2-img.png";
import Coursera3 from "../public/Coursera3-img.png";
import Coursera4 from "../public/Coursera4-img.png";
import Coursera5 from "../public/Coursera5-img.png";
import Coursera6 from "../public/Coursera6-img.png";
import Coursera7 from "../public/Coursera7-img.png";

const Achievements = () => {
  return (
    <section className="py-12 md:py-8">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        More
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-6">
        Other Achievements
      </h3>
      <div className="carousel">
        <div className="carousel-track">
          <Image src={Coursera1} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera2} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera3} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera5} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera4} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera7} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera6} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera1} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera2} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera3} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera5} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera4} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera7} alt="" className="carousel-item rounded-lg" />
          <Image src={Coursera6} alt="" className="carousel-item rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
