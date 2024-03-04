import React from "react";

function Address() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 mb-30 py-5 px-1 rounded-xl space-y-2 my-5">
      {/* icon   first address*/}
      <div className="flex space-x-2   border-b pb-2 border-slate-300 pt-2">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto text-lime-600">
        <svg className="text-2xl mx-auto fill-green-500" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Phone</span>
          <a href="#">
            <p>(+227) 80077079</p>
          </a>
        </div>
      </div>

      {/* icon  second address*/}
      <div className="flex space-x-2   border-b pb-2 border-slate-300">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
          <div className="text-lime-600">
          <svg  className="text-2xl mx-auto fill-green-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
          </div>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Email</span>
          <a href="mailto:abdoulkarimsoumana62@gmail.com">
            <p>abdoulkarimsoumana62@<br/>gmail.com</p>
          </a>
        </div>
      </div>

      {/* icon  third address*/}
      <div className="flex space-x-2   border-b pb-2 border-slate-300">
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto ">
        <svg className="text-2xl mx-auto fill-green-500 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Location </span>
          <a href="#">
            <p>Niamey Niger</p>
          </a>
        </div>
      </div>

      <div className="flex space-x-2   ">
        {/* icon fourth address */}
        <div className="rounded-lg ml-2 bg-white dark:bg-slate-600 shadow-lg w-10 h-10 p-2 my-auto">
        <svg className="text-2xl mx-auto fill-green-500 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M17 25h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM17 33h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 11a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h28c.55 0 1-.449 1-1.002V12.002c0-.554-.45-1.002-1-1.002h-3V9h3c1.658 0 3 1.347 3 3.002v26.996A3.002 3.002 0 0 1 38 42H10a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h5v2zm21 0H19V9h12z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M39 20H9v-2h30z" clip-rule="evenodd"/><path d="M15 7a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0zm16 0a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0z"/></g></svg>
        </div>
        {/* for text  */}
        <div className="text-start">
          <span className="text-sm text-slate-500">Birthday</span>
          <a href="#">
            <p>Juin 12</p>
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Address;
