import Navbar from '../components/community/Navbar'
import { MdAccountBalanceWallet } from "react-icons/md";
import Link from 'next/link'

export default function ReselleHome() {
  const menu = [
    {title: 'Home', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Owner', link: '/owner'},
    {title: 'Reseller', link: '/reseller'},
    {title: 'Event', link: '#'},
    {title: 'About', link: '#'},
  ]

  return (
    <>
      <Navbar menu={menu} />
      <div class="container max-w-none px-14 flex flex-col py-4 mx-auto space-y-6 lg:h-[42rem] py-16 md:flex-row md:items-center bg-gray-800">
        <div class="flex items-center mt-10 justify-center w-full h-full lg:w-1/2">
            <img class="object-cover object-right w-full h-full max-w-2xl rounded-md" 
            src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
        </div>
        <div class="flex flex-col mt-10 md:items-center w-full md:flex-row md:w-1/2">
          <div class="max-w-lg md:mx-14 md:order-2">
            <h1 class="text-xl font-bold tracking-wide text-gray-300 lg:text-3xl">
              JADILAH SEORANG
            </h1>
            <h1 class="text-3xl font-bold tracking-wide text-gray-300 lg:text-6xl underline">
              RESELLER 
            </h1>
          </div>
        </div>
      </div>

      <div className='container max-w-none py-14 mx-auto bg-gradient-to-b from-gray-200 to-white'>
        <p className='text-gray-700 md:text-4xl md:mx-14 px-14 text-3xl px-5 font-bold text-center my-6 py-6'>
          Mengapa Anda Harus Menjadi Reseller
          <span className='block text-gray-800 uppercase underline font-extrabold'>MetaFranchise</span>
        </p>
        <div className='flex flex-wrap justify-center my-10 pb-10'>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto overflow-hidden bg-gray-100 rounded-3xl shadow-xl mx-4 my-3 w-64">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full p-5 h-56 fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            <div className="pb-5 px-5 text-center">
              <span className="block text-gray-900 md:text-3xl text-sm font-bold">Pendapatan</span>
              <p className="md:text-base text-sm text-gray-900 my-5">Cepat menghasilkan (harian / mingguan) dan jangka panjang</p>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font bg-gradient-to-b from-white to-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-gray-700 md:text-4xl md:mx-14 px-14 text-3xl px-5 font-bold text-center pb-6">Yang Anda Dapatkan Saat Menjadi Reseller</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div class="flex flex-wrap -m-4 mb-20 mx-20">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Member Area</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Produk Pilihan</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Coaching Class</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"/>
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">Komunitas</h2>
                  <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                </div>
              </div>
            </div>
          </div>

          <section class="bg-white dark:bg-gray-800 mt-14 rounded-3xl">
            <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Let's work together
              </h2>
              <p class="block max-w-2xl mt-4 text-xl text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae
              </p>
              <div class="mt-6 sm:-mx-2">
                <div class="inline-flex w-full sm:w-auto sm:mx-2">
                  <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-500">
                    Bergabung Sekarang
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <footer class="bg-white dark:bg-gray-800 pt-10">
          <div class="container px-6 py-4 mx-auto">
              <div class="lg:flex">
                  <div class="w-full -mx-6 lg:w-2/5">
                      <div class="px-6">
                          <div>
                              <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                          </div>
                          
                          <p class="max-w-md mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
                          
                          <div class="flex mt-4 -mx-2">
                              <a href="#" class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Linkden">
                                  <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
                                  </svg>
                              </a>

                              <a href="#" class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                                  <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                                  </svg>
                              </a>

                              <a href="#" class="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                                  <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
                                      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>

                  <div class="mt-6 lg:mt-0 lg:flex-1">
                      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                          <div>
                              <h3 class="text-gray-700 uppercase dark:text-white">About</h3>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                          </div>

                          <div>
                              <h3 class="text-gray-700 uppercase dark:text-white">Blog</h3>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                          </div>

                          <div>
                              <h3 class="text-gray-700 uppercase dark:text-white">Products</h3>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                              <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                          </div>

                          <div>
                              <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                              <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                              <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                          </div>
                      </div>
                  </div>
              </div>

              <hr class="h-px my-6 bg-gray-300 border-none dark:bg-gray-700"/>

              <div>
                  <p class="text-center text-gray-800 dark:text-white">© Brand 2020 - All rights reserved</p>
              </div>
          </div>
      </footer>
    </>
  )
}