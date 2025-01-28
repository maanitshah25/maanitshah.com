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
import FOMO from '../public/Fomo1.jpg'
import Coursera1 from '../public/Coursera1-img.png'
import Coursera2 from '../public/Coursera2-img.png'
import Coursera3 from '../public/Coursera3-img.png'
import Coursera4 from '../public/Coursera4-img.png'
import Coursera5 from '../public/Coursera5-img.png'
import Coursera6 from '../public/Coursera6-img.png'
import Coursera7 from '../public/Coursera7-img.png'
import AiSummit from '../public/AiSummit-img.jpeg'
import Icarus from '../public/Icarus-img.jpeg'
import ThreeDShape from "@/components/ThreeDShape";

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
            <h1>
              <a href="#" className="text-2xl font-semibold text-white ml-8 font-serif">
                Maanit Himanshu Shah.
              </a>
            </h1>
            <ul className="flex space-x-10 items-center pr-20">
              <li><a href="#about" className="text-white text-lg">About</a></li>
              <li><a href="#Projects" className="text-white text-lg">Projects</a></li>
              <li><a href="#Experience" className="text-white text-lg">Experience</a></li>
              <li><a href="#Contact" className="text-white text-lg">Contact</a></li>
            </ul>
            <div className="mr-8 mt-1">
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full">
                <a href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing">View Resume →</a>
              </button>
            </div>
          </nav>
          
          <div className="text-center p-10 mt-4">
            <div className="relative mx-auto w-64 h-64 mt-16 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <Image src={Myself} alt="" className="rounded-full" />
            </div>
            <h2 className="text-4xl py-2 text-white font-semibold font-serif">
              Hello, I am Maanit
            </h2>
            <h3 className="text-xl text-orange-500 font-medium font-serif">
              Developer and Designer
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-300 max-w-3xl mx-auto font-serif">
              A Computer Science and Technology Management student at University of California, Davis, looking 
              for an opportunity in a dynamic organization to gain a better insight into the real-world 
              applications of Computer Science, Business, and Marketing.
            </p>
          </div>
        </section>

        <section id="Three" className="py-6">
          <div className="relative mx-auto w-full h-64">
            <ThreeDShape />
          </div>
        </section>
        
        <section id="about" className="py-6">
        <div className="bg-gray-950 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-4xl mb-4 font-bold text-white font-serif">
              About Me
            </h3>
            <p className="text-lg mb-6 leading-8 text-white font-serif">
            I am a sophomore Computer Science student at the University of California, Davis, with a minor in 
            Tech Management. Passionate about leveraging technology to solve real-world problems, I have 
            developed a versatile skill set that includes proficiency in Python, C++, JavaScript, and frameworks
            such as React Native and Node.js.
            </p>
            <p className="text-lg mb-6 leading-8 text-white font-serif">
            My journey in tech began with UC Davis coding clubs and hands-on projects, where I gained valuable experience 
            in software development and database management. As the Technical Lead for the Google Developer 
            Student Club, I have honed my leadership skills while collaborating on innovative solutions. I am 
            eager to continue expanding my expertise and contribute to impactful projects.
            </p>
            <p className="text-lg mb-6 leading-8 text-white font-serif">
            Outside of work, you can often find me playing sports such as; Soccer, Cricket, Squash or Volleyball. 
            I&apos;m a massive music fanatic and have songs playing on my headphones throughout the day. 
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

        <section id="Projects" className="py-6">
          <h3 className="text-4xl mb-4 font-bold font-serif text-white">
            Projects
          </h3>
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
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
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
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
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
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
            <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
              <a href="http://www.linkedin.com/in/maanit-shah">LinkedIn →</a>
            </button>
            <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
              <a href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing">View Resume →</a>
            </button>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={Icarus} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Icarus Development</h3>
                <p className="text-xl text-orange-500">Software Developer</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Developed a lecture summarization web application utilizing Python, JavaScript, Node.js, 
              TypeScript, and Amazon Web Services to streamline access to educational content and improve user 
              efficiency. Additionally, I created immersive audio for the game &quot;The Come Up&quot; using FL Studio, 
              enhancing the overall auditory experience. Through collaboration with a team of over 30 members, 
              I strengthened my multitasking abilities and teamwork skills by fostering effective communication 
              and project management.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Internship</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Davis, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">August 2024 - Present</span>
              </div>
            </div>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={AiSummit} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Ai Summit</h3>
                <p className="text-xl text-orange-500">Tech Outreach Analyst</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Enhanced speaker outreach for the AI Summit by implementing a Custom GPT Model, significantly 
              improving communication efficiency. Additionally, I automated data consolidation using Google 
              Apps Script, which increased data accuracy and reduced processing time. My research into over 100 
              emerging AI and robotics companies helped identify potential speakers, ensuring a seamless 
              execution of the summit. I also optimized CRM workflows and refined targeted email strategies, 
              leading to improved speaker engagement and response rates.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Internship</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Mountain View, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">July 2024 - November 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
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
                <span className="ml-2">September 2022 - June 2024</span>
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
          <h3 className="text-4xl py-2 mt-14 text-white font-serif font-semibold">Contact Info</h3>
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