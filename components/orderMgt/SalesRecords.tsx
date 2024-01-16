'use client'
import { useState } from "react";
import { salesData } from "@/constants"
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "../Modal";
import Link from "next/link";



export default function SalesRecords() {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
    const [orderDetailsModal, setOrderDetailsModal] = useState(false)
    const [showDetails, setShowDetails] = useState(false)


    const handleDropdownToggle = (index: number) => {
        if (selectedProduct === index) {
          setSelectedProduct(null);
        } else {
          setSelectedProduct(index);
        }
      };
    
      const handleOptionClick = (option: string, productId: string) => {
        // Handle the click event for each option
        console.log(`Clicked "${option}" for product ID ${productId}`);
        // Add your specific logic here
      };
    
      const renderDropdown = (index: number, productId: string) => {
        if (selectedProduct === index) {
          return (
            <div className="absolute right-0 mt-2 bg-white border rounded p-3 z-10 shadow-lg flex flex-col gap-2">
             <Link href={`/dashboard/order/${index}`}>
                <div className="cursor-pointer" >View Order Details</div>
             </Link> 
              <div className="cursor-pointer" onClick={() => handleOptionClick("Show on site", productId)}>Edit Details</div>
              <div className="cursor-pointer" onClick={() => handleOptionClick("Show on site", productId)}>Update Status</div>
              <div className="cursor-pointer" onClick={() => handleOptionClick("Show on site", productId)}>Cancle Order</div>
              <div className="cursor-pointer" onClick={() => handleOptionClick("Show on site", productId)}>Share Order</div>
            </div>
          );
        }
        return null;
      };
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col ">
        <div className="w-full z-10">
        
                <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-start  text-gray-500 border-spacing-y-5  border-separate pb-[261px]">
                    <thead className="text-xs text-gray-700 uppercase bg-[#F2F2F2] ">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="py-3  text-start  min-w-[80px]">
                                Order ID
                            </th>
                            <th scope="col" className=" py-3 text-start min-w-[100px]">
                                Customer
                            </th>
                            <th scope="col" className=" py-3 text-start  min-w-[80px]">
                                Created
                            </th>
                            <th scope="col" className=" py-3 text-start  min-w-[80px]">
                                Quantity
                            </th>
                            <th scope="col" className=" py-3 text-start  min-w-[120px]">
                                Total Amt.
                            </th>
                            <th scope="col" className=" py-3 text-start  min-w-[120px]">
                                Amt. Recieved
                            </th>
                            <th scope="col" className=" py-3 text-start  min-w-[100px]">
                                Payment
                            </th>
                            <th scope="col" className=" py-3 text-start">
                                Status
                            </th>
                            <th scope="col" className=" py-3 ps-4 text-start">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((order, index) => (
                            <tr key={index} className=" h-2 border">
                                <td className="w-4 ps-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "/>
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                                </td>
                                <td className="text-sm  ps-2  whitespace-nowrap">{order.orderId}</td>
                                <td className="text-sm    whitespace-nowrap flex items-center gap-1">
                                    <div className="h-6 w-6 rounded-full bg-[#E0E0E0]"></div>
                                    <span>{order.customer}</span>
                                </td>
                                <td className="text-sm  ">{order.created}</td>
                                <td className="text-sm  ps-4">{order.qty}</td>
                                <td className="text-sm  whitespace-nowrap">₦{order.totalAmount}</td>
                                <td className="text-sm  whitespace-nowrap">₦{order.amountRecieved}</td>
                                <td className="text-sm  whitespace-nowrap">{order.payment}</td>
                                <td className={`text-[10px] me-4 text-center rounded w-[67px] ${
                                order.status === 'Pending' ? 'text-[#FE3653] bg-[#FFD8DD]' :
                                order.status === 'Processing' ? 'text-[#FFAE42] bg-[#FFF6D9]' :
                                order.status === 'Shiped' ? 'text-[#0170E3] bg-[#D9EBFF]' : ''
                                }`}>
                                <span>{order.status}</span> 
                                </td>
                                <td className="text-sm ps-8 whitespace-nowrap ">
                                <span className="relative inline-block  text-start">
                                <BsThreeDotsVertical
                                    className="text-xl cursor-pointer "
                                    onClick={() => handleDropdownToggle(index)}
                                />
                                {renderDropdown(index, order.orderId)}
                                </span>
                                </td>
                                
                            
                            </tr>
                            ))}
                    </tbody>
                        
                        
                        
                
                </table>
        
            </div> 
        </div>
        
    </div>

    </>
  )
}



