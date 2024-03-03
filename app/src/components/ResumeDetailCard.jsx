import React from "react";
import Footer from "./Footer";

function ResumeDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black  rounded-2xl ">
        <div className="px-4 md:px-14 pt-6 lg:pt-14  space-y-4">
          {/* route title  */}

          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Resume</h2>
            <div className=" relative ">
              {/* route line  */}
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>

          {/* description education  */}
          <div className=" py-5 space-y-2">
            <div className="flex space-x-3">
              <span className="text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.6em" height="2.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .807L23.835 8.5L22 9.693V16h-2v-5.007l-1 .65V17.5c0 1.47-1.014 2.615-2.253 3.339c-1.265.737-2.945 1.16-4.747 1.16s-3.483-.423-4.747-1.16C6.013 20.115 5 18.969 5 17.499v-5.856L.165 8.5zM7 12.943V17.5c0 .463.33 1.067 1.261 1.61c.908.53 2.227.89 3.739.89s2.831-.36 3.739-.89c.932-.543 1.26-1.147 1.26-1.61v-4.557l-5 3.25zM20.165 8.5L12 3.193L3.835 8.5L12 13.807z"/></svg>
              </span>
              <span className="text-2xl font-semibold text-black dark:text-white">
                Education
              </span>
            </div>
            <div className="dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 text-gray-500 text-sm ">
              {/* first education  */}
              <div className="bg-pink-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1">
                <p className="mb-2">2020-2024</p>
                <p className="text-black dark:text-white text-lg font-normal">
                 
                </p>
                <p>CGPA : 8.36/10</p>
                <p className="text-black dark:text-white text-base">
                 
                </p>
                <p></p>
              </div>

              {/* second education  */}
              <div className="bg-purple-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2018-2020</p>
                <p className="text-black dark:text-white text-lg font-normal">
                
                </p>
                <p>Percentage : 84%</p>
                <p className="text-gray-900 dark:text-white text-base">
                
                </p>
                <p></p>
              </div>

              {/* third education  */}
              <div className="bg-yellow-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2017-2018</p>
                <p className="text-black dark:text-white text-lg font-normal"> </p>
                <p></p>
                <p className="text-gray-700 dark:text-white text-base">
                 
                </p>
                <p></p>
              </div>
            </div>
          </div>

          {/* Experiences */}

          <div className=" py-5 space-y-2">
            <div className="flex space-x-3">
              <span className="text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 512 512"><rect width="448" height="320" x="32" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24"/></svg>
              </span>
              <span className="text-2xl font-semibold text-black dark:text-white">
               Experiences
              </span>
            </div>
            <div className="dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 text-gray-500 text-sm ">
              {/* first education  */}
              <div className="bg-pink-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1">
                <p className="mb-2">2023 - Now</p>
                <p className="text-black dark:text-white text-lg font-normal">
                Full-Stack Developer (Codeloccol)
                </p>
                <p>Avec mon parcours de développeur  depuis 2023, j'ai appris beaucoup de choses. J'ai réalisé 
                   des projets, exploré les arcanes du code et résolu des problèmes. Chaque expérience a enrichi 
                   ma compréhension du développement . Je me suis également familiarisé avec de nouvelles 
                   technologies, perfectionnant ainsi mes compétences et élargissant mes horizons professionnels.</p>
              </div>

              {/* second education  */}
              <div className="bg-purple-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2018-2020</p>
                <p className="text-black dark:text-white text-lg font-normal">
                  Coursera(cours en ligne)
                </p>
                <p>Introduction to Front-End Development 
                un cours en ligne sans crédit, autorisé par Meta et proposé par l'intermédiaire de cousera</p>
              </div>

              {/* third education  */}
              <div className="bg-yellow-100 dark:bg-slate-800 rounded-lg mr-4 my-4 p-3 space-y-1 ">
                <p className="mb-2">2017-2018</p>
                <p className="text-black dark:text-white text-lg font-normal">Simplilearn (cours en ligne)</p>
                <p>JavaScript for Beginners </p>
                <p>Getting Started with ReactJS Components </p>
              </div>
            </div>
          </div>

          {/* description skills  */}
          <div className="  space-y-2">
            <div className="flex space-x-3">
              <span className="">
                <svg
                  className="fill-red-500 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
                </svg>
              </span>
              <span className="text-2xl font-semibold text-black dark:text-white">Skills</span>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 text-gray-500 text-md ">
              {/* first education  */}
              <div className="bg-red-100 dark:text-[white] dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                Front-End
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    HTML
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                   CSS
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    React js 
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    JavaScript
                  </span>
                </div>
              </div>

              {/* second skill  */}
              <div className="bg-orange-100 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                Back-End
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                     MongoDB
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Express.js
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Node.js
                  </span>
                </div>
              </div>

              {/* third skill  */}
              <div className="bg-cyan-100 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  Frameworks I use
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                   Bootstrap
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                   tailwind css
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Next js
                  </span>
                </div>
              </div>

              {/* forth skill  */}
              <div className="bg-gray-200 dark:text-white dark:bg-slate-800 rounded-lg mr-4 my-4 p-3  space-y-1 ">
                <p className="text-black dark:text-white text-lg font-semibold border-b-2 border-blue-400 mb-5">
                  Tools
                </p>
                <div className="flex flex-wrap dark:text-[#a6a6a6]">
                  <span className="bg-white dark:bg-black  p-2 rounded-md mr-2 mb-2">
                  Git
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                   Canva
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    VS Code
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    Render
                  </span>
                  <span className="bg-white dark:bg-black p-2 rounded-md mr-2 mb-2">
                    GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default ResumeDetailCard;
