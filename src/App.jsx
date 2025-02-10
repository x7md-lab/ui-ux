/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import Page1 from './pages/page1';
import Page2 from './pages/page2';
function App() {
  const [isPage, setPage] = useState(0);
  return (
    <>
    <main>
       {/* <Drawer open={isOpen} /> */}
    <header>
      <nav className="border-gray-200 px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img className="h-16" src="/logo.png" />
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeiinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a onClick={()=> {window.open("https://uqu.edu.sa/Sso/Login")}} className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700" aria-current="page">
                  تسجيل دخول
                </a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">
                  قائمة المساقات
                 </a>
              </li>
              <li>
                <a href="https://blog.x7md.net/about" target='_blank' className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">
                  عني
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    {
      isPage === 0 ? <div onClick={()=>{setPage(1)}}><Page1 /></div> : <Page2 />
    }
    </main>
    </>
  )
}

export default App
