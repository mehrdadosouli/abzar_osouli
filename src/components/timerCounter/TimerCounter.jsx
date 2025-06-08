import React, { useState, useEffect } from 'react';

const TimerCounter = ({ initialTime }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    setRemainingTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime(prevTime => Math.max(0, prevTime - 1));
    }, 1000); // کاهش هر ثانیه  

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400); // تعداد روزها  
    const hours = Math.floor((time % 86400) / 3600); // تعداد ساعت‌ها  
    const minutes = Math.floor((time % 3600) / 60); // تعداد دقیقه‌ها  
    const seconds = time % 60; // تعداد ثانیه‌ها  

    return { days, hours, minutes, seconds }
  };

  return (
    <div className='flex gap-2 absolute top-10 left-1/2 transform -translate-x-1/2'>
      <div className='flex flex-col [&>*]:min-w-10 md:[&>*]:text-base [&>*]:text-sm [&>*]:p-1'>
        <span className='bg-white rounded-t-lg text-center'>{formatTime(remainingTime).seconds}</span>
        <span className='bg-box_darken_primary text-center rounded-b-lg'>ثانیه</span>
      </div>
      <div className='flex flex-col [&>*]:min-w-10 md:[&>*]:text-base [&>*]:text-sm [&>*]:p-1'>
        <span className='bg-white rounded-t-lg text-center'>{formatTime(remainingTime).minutes}</span>
        <span className='bg-box_darken_primary text-center rounded-b-lg'>دقیقه</span>
      </div>
      <div className='flex flex-col [&>*]:min-w-10 md:[&>*]:text-base [&>*]:text-sm [&>*]:p-1'>
        <span className='bg-white rounded-t-lg text-center'>{formatTime(remainingTime).hours}</span>
        <span className='bg-box_darken_primary text-center rounded-b-lg'>ساعت</span>
      </div>
      <div className='flex flex-col [&>*]:min-w-10 md:[&>*]:text-base [&>*]:text-sm [&>*]:p-1'>
        <span className='bg-white rounded-t-lg text-center'>{formatTime(remainingTime).days}</span>
        <span className='bg-box_darken_primary text-center rounded-b-lg'>روز</span>
      </div>
    </div>
  );
};

export default TimerCounter;