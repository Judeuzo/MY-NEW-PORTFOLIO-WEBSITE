import React from 'react'
import { portfolio } from '../../public/assets';

export default function Portfolio(selected) {

  const currentPortfolio=selected.selected

  console.log(selected)

  return (
    <section className="bg-gray-100">

      {/* ===== TITLE CARD ===== */}
      <div className="py-16 flex justify-center">
        <div className="bg-white max-w-4xl flex items-center px-8 py-10">
          <div className="w-3 h-20 bg-primary mr-6"></div>
          <div>
            <h2 className="text-2xl font-medium mb-2">
              {currentPortfolio?.title}
            </h2>
            <div className="w-48 h-[2px] bg-accent"></div>
          </div>
        </div>
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="px-10 max-w-5xl bg-white p-5 mx-auto">
        <h3 className="text-primary text-xl mb-4">Summary</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {currentPortfolio?.summary}
        </p>

        <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 w-fit text-sm">
          <span className="bg-primary text-white px-2 py-1 text-xs">
            skills
          </span>
          {currentPortfolio?.skills}
        </div>
      </div>

      {
  currentPortfolio?.title === "FULL STACK & MOBILE DEVELOPER" ? (
    <>
      {/* ===== PROJECTS TITLE ===== */}
      <div className="py-10 flex justify-center">
        <div className="bg-white px-24 py-10 text-center">
          <h2 className="text-2xl mb-3">Projects</h2>
          <div className="w-40 h-[3px] bg-accent mx-auto"></div>
        </div>
      </div>

      <div className="flex border-b-1 p-2 justify-between w-[80%] border-primary mx-auto mb-10">
        <p className='md:text-2xl'>Web Projects</p>
      </div>

      {/* ===== PROJECT LIST ===== */}

      {/* ===== WEB PROJECTS ===== */}


      <div className="max-w-5xl mx-auto space-y-8 px-10">
        {currentPortfolio.projects?.map((project, index) => (
          <div
            key={index}
            className="flex bg-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-2 bg-accent" />

            <div className="md:flex w-full">
              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-center p-4">
                <h3 className="text-primary text-2xl font-medium mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs mb-5">
                  {project.subtitle}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary w-fit text-white px-6 py-1 text-xs hover:bg-green-300 transition"
                >
                  Explore
                </a>
              </div>

              {/* Iframe Preview */}
              <iframe
                src={project.iframe}
                title={project.title}
                className="w-full md:w-[40%] h-28 md:h-[300px] bg-gray-300 overflow-hidden"
                scrolling="no"
              />
            </div>
          </div>
        ))}

        {/* ===== MOBILE PROJECTS ===== */}

      </div>
      <div className="flex border-b-1 p-2 justify-between w-[80%] border-primary mt-10 mx-auto mb-10">
        <p className='md:text-2xl'>Mobile App Projects</p>
        </div>

        <div className="max-w-5xl mx-auto mb-10 space-y-8 px-10">
        {currentPortfolio.mobileProjects?.map((project, index) => (
          <div
            key={index}
            className="flex bg-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-2 bg-accent" />

            <div className="md:flex w-full">
              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-center p-4">
                <h3 className="text-primary text-2xl font-medium mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs mb-5">
                  {project.subtitle}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary w-fit text-white px-6 py-1 text-xs hover:bg-green-300 transition"
                >
                  Explore
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </>
  ) : (<>

    {/* ===== PROJECT GRID PLACEHOLDERS ===== */}

    {/* ===== PROJECTS TITLE ===== */}
      <div className="py-10 flex justify-center">
        <div className="bg-white px-24 py-10 text-center">
          <h2 className="text-2xl mb-3">Projects</h2>
          <div className="w-40 h-[3px] bg-accent mx-auto"></div>
        </div>
      </div>

      <div className=" flex p-2 justify-center flex-wrap gap-5 max-w-5xl mx-auto h-auto ">
        {currentPortfolio?.projects?.map((project) => (
          <div
            key={project}
            className="bg-gray-200"
          >
            <iframe  scrolling="no" src={project.iframe} className='h-100' allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          
        ))}
      </div>

      {/* ===== SEE MORE BUTTON ===== */}
      <div className="flex justify-center pb-20 ">
        <a href='https://www.behance.net/judeuzo' className="bg-primary text-white px-8 py-2 cursor-pointer hover:bg-yellow-200">
          See more...
        </a>
      </div>

  </>)
}


      {/* ===== EXPERIENCE ===== */}
      
      <div className="bg-secondary py-20 px-10">
        <h2 className="text-white text-center text-2xl mb-10">
          Eperience
        </h2>


        <div className="max-w-4xl mx-auto space-y-4">


        {currentPortfolio?.experience?.map((xp)=>{

          return <div
              key={xp}
              className="bg-primary flex items-center p-4"
            >
              <div className="w-2 h-12 bg-accent mr-4"></div>
              <div>
                <p className="text-white font-medium">
                  {xp.job}
                </p>
                <p className="text-white text-xs opacity-80">
                  {xp.place}
                </p>
              </div>
            </div>
        
      })}

          
        </div>
      </div>

    </section>
  );
}

