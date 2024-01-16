'use client'
import {useState} from 'react'
import CustomCard from "../../../../components/CustomCard";
import CustomPlusButton from "../../../../components/CustomPlusButton";
import { BsDownload } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { MdArrowBack } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TbCreditCardFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import OrderLIst from "../../../../components/orderMgt/OrderList";
import { FaLocationDot } from "react-icons/fa6";
import { TbShoppingCartCheck } from "react-icons/tb";
import { BsClockFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaFileLines } from "react-icons/fa6";
import { RiSuitcase2Fill } from "react-icons/ri";
import Modal from "../../../../components/Modal";
import CreateInvoice from "../../../../components/orderMgt/CreateInvoiceForm";






export default function page() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <div className="">

       <div className="flex justify-between items-center h-20 w-full bg-white border-t ps-6">
              <MdArrowBack className="text-2xl text-[#4F4F4F] "/>
                <div className="flex gap-4 pe-6">
                    <button className='flex gap-2 rounded-md px-5 py-3 text-[#828282] bg-[#E0E0E0]'>
                        <BsDownload/>
                        <span className="text-[12px]">Export</span>
                    </button>                
                    <CustomPlusButton onClick={()=>setShowModal(true)} href={'#'} icon={<GoPlus/>} label={"Create Invoice"} bgColor={'[#0170E3]'} textColor="white"/>
                </div>
       </div>
       <div className="m-6">

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-1 xl:gap-5">
        <CustomCard height="full" width="full" alignItems="start">
          <div className="w-full p-0 xl:p-2">
            <div className="flex justify-between items-center w-full pb-5">
              <div className="flex font-semibold gap-3 justify-center items-center">
                <p className="text-[#1D1F2C] text-lg ">Order #302011</p>
                <p className="bg-[#FFF0EA] h-8 xl:h-12 text-sm text-[#F86624] rounded-lg  py-1 px-[10px] flex justify-center  items-center">Processing</p>
              </div>
              <MdEdit className="text-[#A3A9B6] text-2xl ms-2"/>
            </div>
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <TbCreditCardFilled className="text-lg text-[#667085]"/>
                </div>
                <p>Added</p>
              </div>
              <p>12 Dec 2022</p>
            </div>
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <TbCreditCardFilled className="text-lg text-[#667085]"/>
                </div>
                <p>Payment Method</p>
              </div>
              <p>Visa</p>
            </div>
          </div>
        </CustomCard>
        <CustomCard height="full" width="full">
          <div className="w-full p-0 xl:p-2">                        
            <p className="text-[#1D1F2C] text-lg pb-5 font-semibold">Customer</p>                            
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <FaUser className="text-lg text-[#667085]"/>
                </div>
                <p>Customer</p>
              </div>
              <p>Josh Adam</p>
            </div>
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <MdEmail className="text-lg text-[#667085]"/>
                </div>
                <p className="block md:hidden xl:block">Email</p>
              </div>
              <p>joshadam@mail.com</p>
            </div>
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center ">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <IoPhonePortrait className="text-lg text-[#667085]"/>
                </div>
                <p>Phone</p>
              </div>
              <p>+2348098745763</p>
            </div>
          </div>
        </CustomCard>
        <div className="md:mt-4 lg:mt-0">
          
        <CustomCard height="full" width="full" alignItems="start">
          <div className="w-full p-0 xl:p-2">                        
            <p className="text-[#1D1F2C] text-lg pb-5 font-semibold">Document</p>                            
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <FaUser className="text-lg text-[#667085]"/>
                </div>
                <p>Invoice</p>
              </div>
              <p>INV-32011</p>
            </div>
            <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                  <TbCreditCardFilled className="text-lg text-[#667085]"/>
                </div>
                <p>Payment Status</p>
              </div>
              <p>Fully Paid</p>
            </div>
            
          </div>
        </CustomCard>
        </div>
       </div>
       <div className="my-6 w-full flex flex-col lg:flex-row  gap-2 xl:gap-6">
        <div className="w-full lg:w-2/3">
        <OrderLIst/>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="mt-4  lg:mt-0 ">
            <CustomCard height="full" width="full" alignItems="start">
              <div className="w-full p-0 xl:p-2">                        
                <p className="text-[#1D1F2C] text-lg pb-5 font-semibold">Address</p>                            
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <FaLocationDot className="text-lg text-[#667085]"/>
                    </div>
                    <div>
                      <p className="text-[#667085]">Billing Address</p>
                      <p>1833 Bel Meadow Drive, Fontana, </p>
                      <p>California 92335, USA </p>

                    </div>
                    
                  </div>
                 
                </div>
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between i pb-[14px]">
                <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <FaLocationDot className="text-lg text-[#667085]"/>
                    </div>
                    <div>
                      <p className="text-[#667085]">Billing Address</p>
                      <p>1833 Bel Meadow Drive, Fontana, </p>
                      <p>California 92335, USA </p>

                    </div>
                    
                  </div>
                  <MdEdit className="text-lg text-[#A3A9B6]"/>
                </div>
                
              </div>
            </CustomCard>
          </div>
          <div >
            <CustomCard height="full" width="full" alignItems="start">
              <div className="w-full p-0 xl:p-2">                        
                <p className="text-[#1D1F2C] text-lg pb-5 font-semibold">Order Status</p>                            
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-6">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <TbShoppingCartCheck className="text-lg text-[#0170E3]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#1D1F2C] text-base">Order Placed</p>
                      <p className="text-[#4A4C56] font-normal">An order has been placed. </p>
                      <p className="text-[#858D9D] text-xs">12/12/2022, 03:00</p>
                    </div>                   
                  </div>
                 
                </div>
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <BsClockFill className="text-lg text-[#0170E3]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#1D1F2C] text-base">Processing</p>
                      <p className="text-[#4A4C56] font-normal">Seller has proccessed your order. </p>
                      <p className="text-[#858D9D] text-xs">12/12/2022, 03:15</p>
                    </div>                   
                  </div>
                 
                </div>
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <RiSuitcase2Fill className="text-lg text-[#667085]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#1D1F2C] text-base">Parked</p>
                      <p className="text-[#858D9D] text-xs">DD/MM/YY, 00:00 </p>
                    </div>                   
                  </div>
                 
                </div>
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <CiDeliveryTruck className="text-lg text-[#667085]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#1D1F2C] text-base">Shipped</p>
                      <p className="text-[#858D9D] text-xs">DD/MM/YY, 00:00 </p>
                    </div>                   
                  </div>
                 
                </div>
                <div className="text-[#1D1F2C] font-medium text-sm flex justify-between items-center pb-[14px]">
                  <div className="flex gap-2  ">
                    <div className="bg-[#F0F1F3] rounded-full h-10 w-10 flex justify-center items-center">
                      <FaFileLines className="text-lg text-[#667085]"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#1D1F2C] text-base">Delivered</p>
                      <p className="text-[#858D9D] text-xs">DD/MM/YY, 00:00 </p>
                    </div>                   
                  </div>
                 
                </div>
                
                
              </div>
            </CustomCard>
          </div>
          
        </div>
       </div>

       </div>

       <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
        <CreateInvoice onClose={()=> setShowModal(false)}/>
        


       </Modal>
    </div>

    
    </>
  )
}
