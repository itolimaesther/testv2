'use client'
import { useState } from 'react';
import SalesRecords from "../../../components/orderMgt/SalesRecords";
import { BsDownload } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import CustomPlusButton from "../../../components/CustomPlusButton";
import CustomCard from "../../../components/CustomCard";
import Image from 'next/image';
import AddSalesForm from '../../../components/orderMgt/AddSalesForm';
import Modal from '../../../components/Modal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const data = [
	{ label: 'Customers' },
	{  label: 'Total Products' },
	{  label: 'Stock Products' },
	{  label: 'Out of Stock' },
	{  label: 'Revenue' },
  ];

function page() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div>
         <div className='w-full bg-white h-[80px] border-t mb-8'>
                <div className="flex justify-end items-center h-full">
                    <div className="flex gap-4 pe-6">
                        <button className='flex gap-2 rounded-md px-5 py-3 text-[#828282] bg-[#E0E0E0]'>
                            <BsDownload/>
                            <span className="text-[12px]">Export</span>
                        </button>                
                        <CustomPlusButton onClick={()=>setShowModal(true)} href={'#'} icon={<GoPlus/>} label={"Add Sales/Order Records"} bgColor={'[#0170E3]'} textColor="white"/>
                    </div>
                </div>
         </div>

            <div className="m-2 lg:m-6">
                
                <CustomCard>
                    <div className="w-full ">
                        <div className='flex justify-between items-center'>

                            <div>
                                <p className="text-[#36B3A5] font-semibold pt-6 ps-2 md:ps-4 pb-0">Record Sales/Orders</p>
                                <p className="text-[#828282] text-sm ps-2 md:ps-4 pt-[10px] pb-4">All transaction details are here</p>
                            </div>
                        <div className='flex gap-4 items-center'> 
                            <ul
                                    className="flex flex-wrap border-b border-[#C4C4C4]  font-medium text-center text-gray-500 "
                                    id="default-tab"
                                    data-tabs-toggle="#default-tab-content"
                                    role="tablist"
                                >
                                    <li className="">
                                        <button
                                            className="inline-flex items-center justify-center pe-4 border-b rounded-t-lg active group"
                                            id="all-tab"
                                            data-tabs-target="#all"
                                            type="button"
                                            role="tab"
                                            aria-controls="all"
                                            aria-selected="false"
                                        >
                                            
                                            All
                                        </button>
                                    </li>
                                    <li className="">
                                        <button
                                            className="inline-flex items-center justify-center pe-4 border-b  rounded-t-lg   "
                                            id="processing-tab"
                                            data-tabs-target="#processing"
                                            type="button"
                                            role="tab"
                                            aria-controls="processing"
                                            aria-selected="false"
                                            // aria-current="page"
                                        >
                                            
                                            Processing
                                        </button>
                                    </li>
                                    <li className="">
                                        <button
                                            className="inline-flex items-center justify-center  pe-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                                            id="shipped-tab"
                                            data-tabs-target="#shipped"
                                            type="button"
                                            role="tab"
                                            aria-controls="shipped"
                                            aria-selected="false"
                                        >
                                            
                                            Shipped
                                        </button>
                                    </li>
                                    <li className="">
                                        <button
                                            className="inline-flex items-center justify-center pe-4 border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"
                                            id="delivered-tab"
                                            data-tabs-target="#delivered"
                                            aria-controls="delivered"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            
                                           Delivered
                                        </button>
                                    </li>
                                    <li className="">
                                        <button
                                            className="inline-flex items-center justify-center  border-b border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group"
                                            id="cancelled-tab"
                                            data-tabs-target="#cancelled"
                                            aria-controls="cancelled"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            
                                            Cancelled
                                        </button>
                                    </li>
                            </ul>
                            <button className='flex gap-2 justify-center items-center px-4 py-3 rounded-lg border'>
                                <Image src={'/filter.svg'} height={16} width={16} alt='Filter Icon'/>
                                <span className='text-[#667085] text-sm font-medium'>Filters</span>
                            </button>
                       </div> 
                        </div>
                        <div id="default-tab-content" className="">
                            <div
                                className="hidden"
                                id="all"
                                role="tabpanel"
                                aria-labelledby="all-tab"
                            >
                                <SalesRecords/>

                                
                            </div>
                            <div
                                className="hidden "
                                id="processing"
                                role="tabpanel"
                                aria-labelledby="processing-tab"
                            >
                                <p>Processing</p>
                            </div>
                            <div
                                className="hidden "
                                id="shipped"
                                role="tabpanel"
                                aria-labelledby="shipped-tab"
                            >
                                <p>Shipped</p>
                            </div>
                            <div
                                className="hidden  "
                                id="delivered"
                                role="tabpanel"
                                aria-labelledby="delivered-tab"
                            >
                                <p>Delivered</p>
                            </div>
                            <div
                                className="hidden  "
                                id="cancelled"
                                role="tabpanel"
                                aria-labelledby="cancelled-tab"
                            >
                                <p>Cancelled</p>
                            </div>
                    </div>

                    </div>
                    

                </CustomCard>
               
            </div>

            <div className='flex mb-8 justify-between'>
                <div className='flex items-center gap-2 px-4 text-[#8B909A] text-[15px]'>
                    <p>Showing</p>

                {/* This part of the code will be updated when the pagination is to be implemented */}
                    
                    <p>of 50</p>

                </div>
                <div className='flex gap-1 justify-center items-center text-sm'>
                    <span className='w-7, h-7 px-2 py-1 rounded bg-white text-[#8B909A] flex justify-center items-center'><IoIosArrowBack/></span>
                    <span className='w-7, h-7 px-2 py-1 rounded  bg-[#36B3A5] text-white'>1</span>
                    <span className='w-7, h-7 px-2 py-1 rounded  bg-white text-[#8B909A]'>2</span>
                    <span className='w-7, h-7 px-2 py-1 rounded  bg-white text-[#8B909A]'>3</span>
                    <span className='w-7, h-7 px-2 py-1 rounded  bg-white text-[#8B909A]'>4</span>
                    <span className='w-7, h-7 px-2 py-1 rounded  bg-white text-[#8B909A]'>5</span>
                    <span className='w-7, h-7 px-2 py-1 rounded bg-white text-[#8B909A] flex justify-center items-center'><IoIosArrowForward/></span>
                </div>


            </div>
           
       
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>           
            <AddSalesForm onClose={()=> setShowModal(false)}/>                          
        </Modal>
        
    </div>
    </>
  )
}

export default page