import { Link } from 'react-router';  
import CarouselOneCategory from '../carouselOneCategory/CarouselOneCategory';  

function BannerBestSellingProducts({ selectCategoryItems }) {  
    return (  
        <div className='p-10 bg-primaryColor rounded-xl'>  
            <div className='flex flex-col md:flex-row md:h-[12rem]'>  
                <div className='w-full md:w-1/3 flex flex-col gap-10'>  
                    <span className='text-white font-bold text-3xl'>پرفروش ترین اره برقی ها</span>  
                    <Link to="/" className="w-[10rem] h-[3rem] bg-button_light text-primaryColor rounded-md flex items-center justify-center">  
                        مشاهده همه محصولات  
                    </Link>  
                </div>  
                <div className='w-full md:min-h-[32rem] md:w-2/3 relative md:-translate-y-16'>  
                    <div  
                        className='size-full bg-contain bg-no-repeat md:block hidden'
                        style={{  
                            backgroundPositionY: '-5vw',  
                            backgroundSize: '45vw',  
                            backgroundImage: "url('photo/abzar (16).png')",  
                            zIndex: 1 
                        }}  
                    ></div>  
                </div>  
            </div>  
            <div className='mt-5'>
                <CarouselOneCategory bg='light' arrow={false} slides='4' selectOnecategory={selectCategoryItems} />  
            </div>  
        </div>  
    );  
}  

export default BannerBestSellingProducts;