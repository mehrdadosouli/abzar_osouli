import React from 'react'
import Wallet from '../../../public/photo/Wallet'
import Phone from '../../../public/photo/Phone'
import Garanty from '../../../public/photo/Garanty'
import FastSend from '../../../public/photo/FastSend'

function FooterTop() {
    return (
        <div className='grid grid-cols-4 mt-20 p-6 bg-primaryColor [&>*]:text-white md:text-lg text-sm'>
            <span className='border-l-2 flex items-center justify-center md:gap-5 gap-2 px-1'><Wallet /> امکان پرداخت در محل</span>
            <span className='border-l-2 flex items-center justify-center md:gap-5 gap-2 px-1'><Phone /> پشتیبانی ۲۴ ساعته</span>
            <span className='border-l-2 flex items-center justify-center md:gap-5 gap-2 px-1'><Garanty /> ضمانت اصلالت کالا</span>
            <span className='flex items-center justify-center md:gap-5 gap-2' ><FastSend /> ارسال سریع</span>
        </div>
    )
}

export default FooterTop