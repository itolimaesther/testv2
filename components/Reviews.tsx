import React from 'react'
import CustomCard from './CustomCard'
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiStar } from "react-icons/bi";


function Reviews() {
  return (
    <>
         <div className="w-full shadow-lg rounded-lg">
            <CustomCard justifyContent='start' width='full'>
                <div className='w-full px-4 pb-6'>

             <p className="text-[#36B3A5] font-semibold pt-6 pb-0">Customer Reviews</p>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm text-[#4F4F4F]'>Ryan Reynolds</p>
                        <div className='text-[#F2C94C] flex gap-1'>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStar/>
                            <BiSolidStarHalf/>
                            <BiStar/>
                        </div>
                    </div>
                    <p className='text-xs text-[#828282] '>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                    <p className='self-end italic text-[#828282] text-xs'>8 Sep, 2020</p>
                </div>

             </div>
                </div>
            </CustomCard>
         </div>
 
    </>
  )
}

export default Reviews