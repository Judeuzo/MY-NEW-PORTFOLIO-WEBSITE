import React, { useState,useRef  } from 'react'
import Portfolio from "../components/Portfolio";
import { portfolioCards } from '../../public/assets';
import { portfolio } from '../../public/assets';
import ContactMe from '../components/ContactMe';

const MainPage = () => {

  const [selected,setSelected]=useState(null)
  const portfolioRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className=" max-w-400">

      {/* NAV BAR */}


    <nav className="bg-primary text-white sticky top-0 z-50 flex justify-between items-center px-8 py-4">
  <h1 className="font-bold">J.U</h1>

  <details className="relative">
    <summary className="list-none cursor-pointer">
      <span className="material-icons text-3xl">
        menu
      </span>
    </summary>

    <ul className="absolute right-0 mt-3 w-40 bg-black border-b-10 divide-y-1 divide-accent text-sm text-center overflow-hidden">
      <li
        onClick={() =>
          portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-4 py-2 hover:bg-green-700 cursor-pointer"
      >
        Portfolio
      </li>
      <li
        onClick={() =>
          educationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-4 py-2 hover:bg-green-700 cursor-pointer"
      >
        Education
      </li>
      <li
        onClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-4 py-2 hover:bg-green-700 cursor-pointer"
      >
        Contact Me
      </li>
    </ul>
  </details>
</nav>


    {/* HERO SECTION */}

    <section className="bg-primary text-white flex flex-col md:flex-row items-center px-10 py-16 lg:h-170">
      <div className="md:w-1/2 flex flex-col items-center ">
        <h1 className="md:text-5xl lg:text-7xl text-4xl mb-4">
          Hello...I am <br />
          <span className="font-bold text-center">Jude Uzo</span>
        </h1>
        <p className="text-sm text-center max-w-md">
          Welcome to my portfolio website. I am a fullstack and mobile
          developer with experience in building scalable applications.
        </p>
                <button
          onClick={() =>
            portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-4 border-3 text-white border-white hover:bg-secondary cursor-pointer max-w-50 text-black px-6 py-2 rounded"
        >
          Explore portfolio...
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src='HERO PICTURE.png'
          alt="Jude Uzo"
          className="w-60 rounded-2xl bg-accent"
        />
      </div>
    </section>

    {/* CARDS SECTION */}

    <section ref={portfolioRef} className="bg-green-700 py-16">
      <h2 className="text-center text-white text-xl mb-10">
        Portfolio
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
        {portfolioCards.map((i) => (
          <div
            onClick={()=>portfolio.map((e)=>{e.title==i.title?setSelected(e):null})}
            key={i}
            className={`bg-primary text-white hover:-translate-y-1 cursor-pointer w-64 p-6 min-h-50 flex flex-col justify-center rounded-xl text-center ${selected?.title==i.title && 'border-5'}`}
          >
            <span className="material-icons text-6xl text-white mb-3">
              {i.icon}
            </span>
            <h3 className="text-sm mb-4">
              {i.title}
            </h3>
          </div>
        ))}
      </div>
    </section>


    {/* PORTFOLIO SECTION */}


    {selected ? (
  <Portfolio selected={selected} />
) : (
  <div className="h-100 flex flex-col justify-center items-center text-primary">
    <img
      src="SVG.svg"
      className="w-50 animate-bounce"
      alt=""
    />
    <div className="flex items-center gap-3 p-5 border-b-4 border-accent">
      <p>please select a portfolio above...</p>
    </div>
  </div>
)}


    
        
     {/* EDUCATION SECTION */}


      <section ref={educationRef} className="bg-gray-100 py-20 px-6">
      {/* Outer white container */}
      <div className="max-w-6xl mx-auto bg-white p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left green block */}
        <div className="bg-primary w-full md:w-[320px] h-[320px] flex items-center justify-center relative">
          {/* Yellow accent bar */}
          <span className="absolute left-10 w-2 h-16 bg-accent "></span>

          <h2 className="text-white text-2xl tracking-wide">
            education
          </h2>
        </div>

        {/* Right content */}
        <div className="flex-1 space-y-10">
          
          {/* Education item */}
          <div className="flex gap-4 items-start">
            <span className="w-2 h-14 bg-accent "></span>

            <div>
              <p className="text-gray-800 font-medium">
                WAEC
              </p>
              <p className="text-gray-600 text-sm">
                Bright Stars Model Secondary School , Nigeria 2011
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200"></div>

          {/* Education item (duplicate as shown in image) */}
          <div className="flex gap-4 items-start">
            <span className="w-2 h-14 bg-accent "></span>

            <div>
              <p className="text-gray-800 font-medium">
                Bachelor of Science in Geoinformatics & Surveying
              </p>
              <p className="text-gray-600 text-sm">
                University of Uyo Uyo, Akwa Ibom state, Nigeria 2019
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


     {/* CONTACTS SECTION */}

    <section ref={contactRef}>
      <ContactMe />
    </section>
      

    </div>
  )
}

export default MainPage