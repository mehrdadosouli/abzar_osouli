import React from 'react'

function FooterMain() {
    return (
        <div className='grid grid-cols-4 bg-[#F0F0F0] py-10 px-20'>
            <div className='grid col-span-1'>
                <ul className='flex flex-col gap-4'>
                    <li className='font-semibold'>راهنمای مشتریان</li>
                    <li className='text-txt_color_footer_l'>پاسخ به پرسش های متداول</li>
                    <li className='text-txt_color_footer_l'>روش های ارسال کالا</li>
                    <li className='text-txt_color_footer_l'>روش های پرداخت</li>
                    <li className='text-txt_color_footer_l'>قوانین و مقررات</li>
                </ul>
            </div>
            <div className='grid col-span-1'>
                <ul className='flex flex-col gap-4'>
                    <li className='font-semibold'>راهنمای مشتریان</li>
                    <li className='text-txt_color_footer_l'>پاسخ به پرسش های متداول</li>
                    <li className='text-txt_color_footer_l'>روش های ارسال کالا</li>
                    <li className='text-txt_color_footer_l'>روش های پرداخت</li>
                    <li className='text-txt_color_footer_l'>قوانین و مقررات</li>
                </ul>
            </div>
            <div className='grid col-span-2 justify-end gap-5'>
                <div className='flex justify-between'>
                    <img src="/photo/zarinpall.png" alt="" />
                    <img src="/photo/enamad.png" alt="" />
                </div>
                <div className='flex flex-wrap gap-4'>
                    <img src="/photo/Group 69.png" alt="" />
                    <img src="/photo/Group 70.png" alt="" />
                    <img src="/photo/Group 71.png" alt="" />
                    <img src="/photo/Group 72.png" alt="" />
                    <img src="/photo/Group 73.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default FooterMain