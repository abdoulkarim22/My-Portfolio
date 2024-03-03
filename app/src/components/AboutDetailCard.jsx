import React from "react";

import Footer from "./Footer";

function AboutDetailCard() {
  return (
    <section>
      <div className="bg-white dark:bg-black shadow-sm    rounded-2xl text-[#828282] ">
        <div className="px-4 md:px-14 pt-14  ">
          <div className="flex md:space-x-4 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">About</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg" />
            </div>
          </div>
          <p className="my-5 ">
          Je suis un développeur passionné par la création d'applications web et mobiles innovantes.
          J'ai une solide expérience dans le développement front-end et back-end, ainsi que dans la conception
          et la gestion de bases de données. Je suis constamment à la recherche de nouveaux défis et de
          nouvelles technologies à explorer.
          </p>
          <p>
          {/* Actuellement, je suis plongé dans le développement mobile, explorant les subtilités de la création d'applications pour iOS et Android 
          en utilisant des technologies React Native et Flutter. J'ai déjà réalisé plusieurs projets dans le
           domaine du développement mobile et je suis constamment à la recherche de nouvelles opportunités pour acquérir plus d'expérience 
           et pour contribuer à des projets concrets dans le monde de l'application mobile. */}
          </p>
        </div>
        {/* for what i do section  */}
        <div className="px-4 md:px-14 py-5  ">
          <h1 className="text-2xl text-black dark:text-white font-semibold">Ce que je fais!</h1>
          {/* for what do box  */}
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* first box  */}
            <div className="bg-pink-50 dark:bg-slate-900  rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="2.6em" height="2.6em" viewBox="0 0 24 24"><path fill="currentColor" d="m.586 12l4.95-4.95L6.95 8.464L3.414 12l3.536 3.536l-1.414 1.414zm8.201 8.728l4.486-17.94l1.94.485l-4.485 17.94zm8.263-5.192L20.586 12L17.05 8.464l1.415-1.414l4.95 4.95l-4.95 4.95z"/></svg>
              </div>
              {/* for text  */}
              <div className=" space-y-2">
                <h1 className="text-lg  font-semibold">
                Front-End Development
                </h1>
                <p className="text-md"> 
                Je suis un développeur Front-End passionné qui excelle dans la création d'expériences utilisateur 
                exceptionnelles grâce à une combinaison experte.

                </p>
              </div>
            </div>

            {/* second box  */}
            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="text-lime-600">
              <svg  xmlns="http://www.w3.org/2000/svg" width="2.6em" height="2.6em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32M288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40M160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40M160 640h704V384H160zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"/></svg>
              </div>
              {/* for text  */}
              <div className="space-y-2">
                <h1 className="text-lg  font-semibold">
                Backend Development
                </h1>
                <p className="text-md">
                j'ai déjà commencé à explorer les concepts fondamentaux de la création d'applications robustes
                 et évolutives côté serveur. Je suis passionné par l'apprentissage continu et 
                je suis prêt à relever de nouveaux défis pour perfectionner mes compétences en développement backend.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-900 rounded-lg mr-4 my-4 p-3 sm:flex sm:space-x-2 space-y-2 sm:space-y-0 ">
              {/* for icon  */}
              <div className="text-lime-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8m2 8l2-2l-2-2m-3 0l-2 2l2 2M11 4h2m-1 13v.01"/></svg>
              </div>
              {/* for text  */}
              <div className="space-y-2">
                <h1 className="text-lg  font-semibold">
                Mobile Apps
                </h1>
                <p className="text-md">
                j'ai déjà commencé à explorer les concepts fondamentaux de la création d'applications robustes
                 et évolutives côté serveur. Je suis passionné par l'apprentissage continu et 
                je suis prêt à relever de nouveaux défis pour perfectionner mes compétences en développement backend.
                </p>
              </div>
            </div>

           
           
            
          </div>
          {/* third box  */}


          
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default AboutDetailCard;
