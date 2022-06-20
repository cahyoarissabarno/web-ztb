import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../../../components/admin/Sidebar'
// import Table from '../../components/admin/Table'
// import ProductModal from '../../components/admin/ProductModal'

export default function Event() {
    const [toggleModal, setToggleModal] = useState(false)
    const menu = [
        {title: 'Product', link: '/admin/administrator'},
        {title: 'Order', link: '/admin/administrator/order'},
        {title: 'Modul', link: '/admin/administrator/modul'},
        {title: 'Event', link: '/admin/administrator/event'},
      ]
    
    return (
            <div className="flex">
                <div>
                    <Sidebar menu={menu} />
                </div>
                <div className='w-full'>
                    {/* <Table toggle={setToggleModal} tg={toggleModal}/> */}
                    <div className="px-6 sm:px-8">
                        <div className="py-8">
                            <div className="grid md:grid-cols-2 auto-rows-auto md:w-full">
                                <div className="grid grid-cols-2 auto-rows-auto justify-self-start">
                                    <h2 className="text-3xl leading-tight font-bold">
                                        Event
                                    </h2>
                                    <button onClick={()=>setToggleModal(true)} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                        + Add Event
                                    </button>
                                </div>
                                <div className="text-end justify-self-end md:mt-0 mt-7">
                                    <form className="grid grid-cols-2 auto-rows-auto md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                        <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name"/>
                                        
                                        <button className=" px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                            Filter
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                    Nama Event
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                    Kategori
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                    Tanggal Event
                                                </th>
                                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-blueLogo  text-left text-sm uppercase font-normal">
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="#" className="block relative">
                                                                <div className="mx-auto object-cover h-20 w-20 relative">
                                                                    <Image layout='fill' objectFit='cover' className='' src="https://images.unsplash.com/photo-1573633509389-0e3075dea01b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872"/>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                Event Workshop Wirausaha 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Umum
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        12/09/2020
                                                    </p>
                                                </td>
                                                <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900 px-1">
                                                        Edit
                                                    </a>
                                                    <a href="#" className="text-red-600 hover:text-red-900 px-1">
                                                        Delete
                                                    </a>
                                                    <a href="#" className="text-green-600 hover:text-green-900 px-1">
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                        <div className="flex items-center">
                                            <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                                1
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                2
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                                3
                                            </button>
                                            <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                                4
                                            </button>
                                            <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${toggleModal ? 'flex' : 'hidden'} absolute z-10 w-full`}>
                    {/* <ProductModal toggle={setToggleModal} tg={toggleModal}></ProductModal> */}
                    <div className='grid content-center h-screen bg-blueLogo/50 z-10 w-full'>
                        <div className="sm:w-3/4 w-full mx-auto p-6 bg-white rounded-md shadow-md overflow-auto my-6 sm:my-0">
                            <h2 className="text-2xl font-semibold text-gray-700 capitalize">TAMBAH EVENT</h2>
                            
                            <form>
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
                                    <div>
                                        <div className='my-3'>
                                            <label className="text-gray-700" >Nama Event</label>
                                            <input id="username" type="text" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                        </div>
                                        <div className='my-3'>
                                            <label className="text-gray-700" >Kategori Event</label>
                                            
                                            <select  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                                <option value="volvo">Umum</option>
                                                <option value="saab">Reseller</option>
                                                <option value="mercedes">Owner</option>
                                            </select>
                                        </div>
                                        <div className='my-3'>
                                            <label className="text-gray-700" >Gambar Event</label>
                                            <input id="passwordConfirmation" type="file" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                        </div>
                                        <div className='my-3'>
                                            <label className="text-gray-700" >Tanggal Event</label>
                                            <input id="password" type="password" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                        </div>
                                        <div className='my-3'>
                                            <label className="text-gray-700" >Lokasi Event</label>
                                            <input id="password" type="password" className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <label className="text-gray-700" >Deskripsi Event</label>
                                        <textarea className="w-full h-3/4 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" rows="5" cols="40" />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <a onClick={()=>setToggleModal(false)} className="px-6 py-2 mx-2 leading-5 text-gray-700 transition-colors duration-200 transform bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200" >Close</a>
                                    <button className="px-6 py-2 mx-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
  }