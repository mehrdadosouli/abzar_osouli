import CarouselOneCategory from "../carouselOneCategory/CarouselOneCategory"
import { selectAllProductsCategory } from '../../redux/features/Products/productSlice'
import { useSelector } from "react-redux"
import { Link } from "react-router"


function BannerNewProducts() {
    const selectCategoryItems = useSelector(selectAllProductsCategory)
    return (
        <div className="flex lg:flex-row flex-col gap-5 ">
            <div className="lg:w-1/5 w-full h-60 lg:h-auto lg:block flex lg:justify-start justify-center bg-[#FF9A2a] rounded-lg z-30">
                {/* <div className="w-full h-[43rem] lg:transform translate-x-10 bg-cover bg-no-repeat" style={{ backgroundPosition: '-9vw', backgroundSize: '150%', backgroundImage: `url("photo/abzar (11).png")` }}></div> */}
                <img className="w-1/2 object-contain lg:w-full lg:transform lg:scale-[200%] lg:-translate-x-10 lg:translate-y-[20vh]" src="photo/abzar (11).png" alt="" />
            </div>
            <div className="lg:w-4/5 w-full p-5 flex flex-col gap-10 bg-[#FF9A2a] rounded-lg">
                <CarouselOneCategory bg='light' arrow={false} slides='3' selectOnecategory={selectCategoryItems} />
                <div className="flex flex-col items-start gap-10">
                    <span className="text-white text-3xl font-bold">جدیدترین دریل های شرکت AEG</span>
                    <span className="text-white">شرکت AEG توسط امیل راتناو در سال 1883 ابتدا در شهر برلین در کشور آلمان تاسیس شد نخستین نام این شرکت ( شرکت آلمانی برق ادیسون ) بود و امیل راتناو در همان سال ها با خرید امتیاز ثبت ...</span>
                    <Link to="/" className="w-[10rem] h-[3rem] bg-[#D8D8D8] text-[#FF9A2A] rounded-md flex items-center justify-center">
                        مشاهده همه محصولات
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerNewProducts