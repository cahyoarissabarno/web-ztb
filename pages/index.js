import Navbar from '../components/community/Navbar'
import { MdAccountBalanceWallet } from "react-icons/md";
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '#'},
    {title: 'About', link: '#'},
  ]

  const features1 = [
    {title: "Pendapatan", desc: "Cepat menghasilkan (harian / mingguan) dan jangka panjang" }
  ]

  return (
    <>
      <Navbar menu={menu} />
      <div className="container max-w-none px-14 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center bg-gray-800">
        <div className="flex items-center mt-10 justify-center w-full h-full lg:w-1/2">
          <div className='object-cover object-right w-full h-full max-w-2xl static z-0'>
            <Image layout='intrinsic' width={550} height={550} objectFit='cover' className="rounded-md z-10" 
              src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-14 md:order-2">
            <h1 className="text-3xl font-bold tracking-wide text-gray-300 lg:text-6xl underline">
              MetaFranchise
            </h1>
            <h1 className="text-xl font-bold tracking-wide text-gray-300 lg:text-3xl">
              Sebuah Platform Bisnis
            </h1>
          </div>
        </div>
      </div>
      
      <div className='container my-14 mx-auto'>
        <p className='text-gray-700 md:text-4xl md:mx-14 px-14 text-3xl px-5 font-bold text-center my-6 py-6'>
          Kenapa Anda Harus Bergabung Dengan
          <span className='block text-gray-800 uppercase underline font-extrabold'>MetaFranchise</span>
        </p>
        <div className='flex flex-wrap justify-center my-10 pb-10'>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container py-14 mx-auto bg-gray-200 max-w-none">
        <p className='text-gray-800 md:text-5xl text-4xl font-bold text-center md:mx-14 md:px-14 my-6 py-6 underline'>
          Tentukan Pilihan Mu
        </p>
        <div className="flex flex-wrap justify-center px-4 pb-14 mx-auto">
          <div className="flex flex-wrap justify-center max-w-lg mx-6 my-6 bg-gray-700 text-center shadow-xl p-10 rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-56 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-200 dark:text-white">
              Jadi Owner
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-300 px-10">
              Bila Anda tertarik untuk menjadi pemilik bisnis Meta Franchise dengan modal terjangkau dan tanpa resiko, silakan pelajari lebih lanjut di sini
            </p>
            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-800 hover:text-gray-200 font-bold rounded-lg sm:w-auto bg-gray-200 hover:bg-gray-700 outline outline-gray-300">
              Bergabung
            </a>
          </div>

          <div className="flex flex-wrap justify-center max-w-lg mx-6 my-6 bg-gray-700 text-center shadow-xl p-10 rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-56 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-200 dark:text-white">
              Jadi Reseller
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-300 px-10">
              Bila Anda tertarik hanya untuk menjadi Reseller atau dropshipper tanpa perlu modal awal, silahkan pelajari lebih lanjut di sini
            </p>
            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-800 hover:text-gray-200 font-bold rounded-lg sm:w-auto bg-gray-200 hover:bg-gray-700 outline outline-gray-300">
              Bergabung
            </a>
          </div>
        </div>
      </div>

      
      <footer className="bg-white dark:bg-gray-800 pt-10">
          <div className="container px-6 py-4 mx-auto">
              <div className="lg:flex">
                  <div className="w-full -mx-6 lg:w-2/5">
                      <div className="px-6">
                          <div>
                              <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                          </div>
                          
                          <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
                          
                          <div className="flex mt-4 -mx-2">
                              <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Linkden">
                                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                                  </svg>
                              </a>

                              <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                                  </svg>
                              </a>

                              <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:flex-1">
                      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                          <div>
                              <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                          </div>

                          <div>
                              <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                          </div>

                          <div>
                              <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                          </div>

                          <div>
                              <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                          </div>
                      </div>
                  </div>
              </div>

              <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700"/>

              <div>
                  <p className="text-center text-gray-800 dark:text-white">© Brand 2020 - All rights reserved</p>
              </div>
          </div>
      </footer>
    </>
  )
}