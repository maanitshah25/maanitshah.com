import Head from "next/head";
import Image from "next/image";
import { BsFillPinFill, BsBagFill, BsCalendar2} from "react-icons/bs";
import { AiFillMail, AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillDiscord, AiFillTwitterCircle} from "react-icons/ai";
import Myself from '../public/myself1-img.jpg'
import Baby from '../public/baby-img.jpg'
import Family from '../public/family-img.jpg'
import Friends from '../public/friends-img.jpg'
import Myself4 from '../public/myself4-img.jpg'
import Certificate from '../public/certificate-img.jpg'
import Myself5 from '../public/myself5-img.jpg'
import Certificate1 from '../public/certificate1-img.jpg'
import StudySpace from '../public/StudySpace4.png'
import Marketplace from '../public/Marketplace.png'
import GDSC from '../public/GDSC-img.jpeg'
import DC from '../public/DC-img.jpeg'
import FOMO from '../public/Fomo1.jpg'
import Cognizant from '../public/Cognizant-img.jpeg'
import Coursera1 from '../public/Coursera1-img.png'
import Coursera2 from '../public/Coursera2-img.png'
import Coursera3 from '../public/Coursera3-img.png'
import Coursera4 from '../public/Coursera4-img.png'
import Coursera5 from '../public/Coursera5-img.png'
import Coursera6 from '../public/Coursera6-img.png'
import Coursera7 from '../public/Coursera7-img.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maanit Shah Portfolio</title>
        <meta name="description" content="Welcome to Maanit Shah's personal portfolio." />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className=" bg-black px-10">
        <section className="min-h-screen">
          <nav className="fixed top-0 left-0 w-full py-4 flex justify-between bg-black z-10 shadow-md">
            <h1><a href="#" className="text-2xl font-serif ml-8">Maanit Himanshu Shah.</a></h1>
            <ul className="flex space-x-16 items-center pr-28">
              <li><a href="#about" className="text-white text-lg">About</a></li>
              <li><a href="#Projects" className="text-white text-lg">Projects</a></li>
              <li><a href="#Experience" className="text-white text-lg">Experience</a></li>
              <li><a href="#Contact" className="text-white text-lg">Contact</a></li>
            </ul>
            <div className="mr-8 mt-1">
              <a className="bg-gradient-to-r from-slate-900 to-black text-white px-4 py-2 rounded-md" href="https://drive.google.com/file/d/16mz9IDCP5v0SJBKCfkcf7NQWqDhV6MT7/view?usp=sharing">Resume -{">"}</a>
            </div>
          </nav>
          <div className="text-center p-10">
            <div className="relative mx-auto w-80 h-80 mt-16">
              <Image src={Myself} alt={""} className="rounded-full"/>
            </div>
            <h2 className="text-5xl py-2 text-white font-serif">Hello, I am Maanit</h2>
            <h3 className="text-2xl py-0 text-white font-serif">Developer and Designer</h3>
            <p className="text-lg py-4 pl-80 pr-80 leading-8 text-white font-serif">
            A Computer Science and Technology Management student at University of California, Davis, looking for an opportunity in 
            a dynamic organization to gain a better insight into the real-world applications of Computer Science, Business, and 
            Marketing.
            </p>
          </div>
        </section>

        <section id="about">
          <div className="bg-gradient-to-r from-slate-950 to-black p-6 rounded-lg shadow-lg mb-6 font-serif">
            <h3 className="text-4xl py-2 text-white font-serif font-semibold">About Me</h3>
            <p className="text-lg py-3 leading-8 text-white font-serif">
            I am a sophomore Computer Science student at the University of California, Davis, with a minor in 
            Tech Management. Passionate about leveraging technology to solve real-world problems, I have 
            developed a versatile skill set that includes proficiency in Python, C++, JavaScript, and frameworks
            such as React Native and Node.js.
            </p>
            <p className="text-lg py-3 leading-8 text-white font-serif">
            My journey in tech began with UC Davis coding clubs and hands-on projects, where I gained valuable experience 
            in software development and database management. As the Technical Lead for the Google Developer 
            Student Club, I have honed my leadership skills while collaborating on innovative solutions. I am 
            eager to continue expanding my expertise and contribute to impactful projects.
            </p>
            <p className="text-lg py-3 leading-8 text-white font-serif">
            Outside of work, you can often find me playing sports such as; Soccer, Cricket, Squash or Volleyball. 
            I&apos;m a massive music fanatic and have songs palying on my headphones throughtout the day. 
            I love going to the gym and hanging out with friends, 
            enjoying the simple pleasures of life. Whether it&apos;s an intense game or a relaxing afternoon, these 
            activities keep me balanced and inspired. I believe in capturing such unplanned moments by
            finding joy in both the excitement of sports and the tranquility of leisure.
            </p>
          
            <div className="flex justify-center space-x-6 mt-2">
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Baby} alt="Image 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Family} alt="Image 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Friends} alt="Image 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Myself4} alt="Image 4" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Myself5} alt="Image 5" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Certificate} alt="Image 6" className="w-full h-full object-cover" />
              </div>
              <div className="w-52 h-52 rounded-lg overflow-hidden">
                <Image src={Certificate1} alt="Image 8" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="Projects">
          <div>
            <h3 className="text-4xl py-2 mt-14 text-white font-serif font-semibold">Projects</h3>
          </div>
          <div className="bg-gradient-to-r from-slate-950 to-black flex items-center p-6 rounded-lg shadow-lg mb-6">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-serif font-semibold mb-2">StudySpace</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">Web Development</h3>
              <p className="text-lg mb-6 mr-10 font-serif">
              StudySpace aims to enhance the effectiveness of study sessions by providing rewards and integrating 
              all the essential tools needed for productive learning, including a Pomodoro Timer, a To-Do List, 
              and a Study Playlist.
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/studyspace">View Project →</a>
              </button>
            </div>
            <div className="flex-col">
              <Image src={StudySpace} alt="" className="w-full max-h-96 flex object-cover rounded-xl" />
            </div>
          </div>
          <br></br>
          <div className="bg-gradient-to-r from-black to-slate-950 flex items-center p-6 rounded-lg shadow-lg mb-6">
            <div className="flex-col w-auto">
              <Image src={FOMO} alt="" className="w-full max-h-96 object-cover rounded-xl" />
            </div>            
            <div className="w-1/2 pl-8">
              <h2 className="text-3xl font-serif font-semibold mb-2">FOMO</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">App Development</h3>
              <p className="text-lg mb-6 font-serif">
              FOMO is an app designed to help UC Davis students easily browse and add events happening in the 
              city of Davis, CA. Additionally, users can navigate through daily news and events, keeping them 
              informed and engaged with the latest happenings around them.
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/Fomo">View Project →</a>
              </button>
            </div>
          </div>
          <br></br>
          <div className="bg-gradient-to-r from-slate-950 to-black flex items-center p-6 rounded-lg shadow-lg mb-6">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-serif font-semibold mb-2">Aggie Marketplace</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">App Development</h3>
              <p className="text-lg mb-6 mr-10 font-serif">
              A marketplace designed to facilitate the buying and selling of items among UC Davis students, 
              providing them with an easy and efficient platform to conduct their transactions.  
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/marketplace">View Project →</a>
              </button>
            </div>
            <div className="flex-col">
              <Image src={Marketplace} alt="" className="w-full max-h-96 object-cover rounded-xl" />
            </div>
          </div>
        </section>

        <section id="Experience">
          <div>
            <h3 className="text-4xl py-2 mt-14 text-white font-serif font-semibold">Experience</h3>
          </div>
          <p className="text-lg mb-2 font-serif">
            Always eager to find new opportunities and explore different areas. Connect with me on LinkedIn to 
            keep up with my career journey!
          </p>
          <div className="flex mb-8 space-x-4">
            <a className="bg-gradient-to-r from-slate-900 to-black text-white px-4 py-2 rounded-md" href="http://www.linkedin.com/in/maanit-shah">LinkedIn -{">"}</a>
            <a className="bg-gradient-to-r from-slate-900 to-black text-white px-4 py-2 rounded-md" href="https://drive.google.com/file/d/16mz9IDCP5v0SJBKCfkcf7NQWqDhV6MT7/view?usp=sharing">View Resume -{">"}</a>
          </div>
          <div className="bg-gradient-to-r from-slate-950 to-black p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={GDSC} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Google Developer Student Club</h3>
                <p className="text-xl text-orange-500">Technical Lead</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Developed multiple unique Web-Development and App-Development projects. Came up with solutions, including
              a working progress bar and linking Spotify API. Acquired multiple awards for Best product pitch and Best 
              User Experience.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Part-time</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Davis, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">September 2022 - Present</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black to-slate-950 p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={DC} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">UC Davis Student Housing and Dining Services</h3>
                <p className="text-xl text-orange-500">Student Assistant 2</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              As a Student Assistant, I represent UC Davis with alot of pride. 
              Managing tasks such as cashiering and provided assistance with other financial tasks as required. 
              Carried out a variety of food service tasks such as food preparation.
              Working alongside the shift-leads in charge and providing the best service possible.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Part-time</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Davis, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">March 2023 - June 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-950 to-black p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={Cognizant} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Cognizant Technology</h3>
                <p className="text-xl text-orange-500">Summer Intern</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Developed a working database with SQL and JavaScript for the financial department. Implemented 
              advanced Java solutions while working on the software, resulting in better efficiency.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Part-time</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">July 2021 - September 2021</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-4xl py-2 mt-14 mb-5 text-white font-serif font-semibold">Some Other Achievements</h3>
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

        <section id="Contact">
        <div>
          <h3 className="text-4xl py-2 mt-5 text-white font-serif font-semibold">Contact Info</h3>
        </div>
        <div className="text-4xl flex justify-center gap-16 py-3 text-white">
            <a href="maanithshah1@gmail.com"><AiFillMail/></a>
            <a href="http://www.linkedin.com/in/maanit-shah"><AiFillLinkedin/></a>
            <a href="https://github.com/maanitshah25"><AiFillGithub/></a>
            <a href="https://www.instagram.com/_maanitshah?igsh=MXU2bjNjankwMTR5OQ%3D%3D&utm_source=qr"><AiFillInstagram/></a>
            <a href="https://discord.com/channels/maanitshah25"><AiFillDiscord/></a>
          </div>
        </section>
      </main>
    </div>
  );
}
