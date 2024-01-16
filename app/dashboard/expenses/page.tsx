'use client'
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import CustomPlusButton from "../../../components/CustomPlusButton";
import ExpensList from "../../../components/expenseMgt/ExpenseList";
import CustomCard from "../../../components/CustomCard";
import Image from "next/image";
import Modal from "../../../components/Modal";
import AddExpenseForm from "../../../components/expenseMgt/AddExpenseForm";



function page() {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
        <div className="w-full">
        <div className='w-full bg-white h-[80px] border-t border-l'>
                <div className="flex justify-end items-center h-full">
                    <div className="flex gap-4 pe-6">
                        <button className='flex gap-2 rounded-md px-5 py-3 text-[#828282] bg-[#E0E0E0]'>
                            <BsDownload/>
                            <span className="text-[12px]">Export</span>
                        </button>                
                        <CustomPlusButton onClick={()=>setShowModal(true)} href={'#'} icon={<GoPlus/>} label={"Add Expenses"} bgColor={'[#0170E3]'} textColor="white"/>
                    </div>
                </div>
            </div>

            <div className="m-6 ">
                 
                <CustomCard>
                    <div className="w-full pb-20">

                   <div className='flex justify-between items-center'>

                        <div>
                            <p className="text-[#36B3A5] font-semibold pt-6 ps-2 md:ps-4 pb-0">Expense List</p>
                            <p className="text-[#828282] text-sm ps-2 md:ps-4 pt-[10px] pb-4">All transaction details are here</p>
                       </div>
                       
                        
                        <button className='flex gap-2 justify-center items-center px-4 py-3 rounded-lg border'>
                            <Image src={'/filter.svg'} height={16} width={16} alt='Filter Icon'/>
                            <span className='text-[#667085] text-sm font-medium'>Filters</span>
                        </button>
                       </div>
                       
                    <ExpensList/>
                    </div>
                </CustomCard>
            </div>

            <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
                <AddExpenseForm onClose={()=> setShowModal(false)}/>

            </Modal>
            </div>   
    </>
  )
}

export default page