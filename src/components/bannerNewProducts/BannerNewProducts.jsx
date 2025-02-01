import CarouselOneCategory from "../carouselOneCategory/CarouselOneCategory"
import { selectCategory } from '../../redux/features/Products/productSlice'
import { useSelector } from "react-redux"
import { Link } from "react-router"


function BannerNewProducts() {
    const selectCategoryItems = useSelector(selectCategory)
    return (
        <div className="flex gap-5">
            <div className="w-1/5 bg-[#FF9A2a] rounded-lg z-50">
            <div className="w-[22vw] h-[43rem] lg:transform translate-x-10  bg-cover bg-no-repeat"  style={{ backgroundPosition: '-9vw', backgroundSize: '150%', backgroundImage: `url("photo/abzar (11).png")` }}>         
            </div>
            </div>
            <div className="w-4/5 p-10 flex flex-col gap-10 bg-[#FF9A2a] rounded-lg">
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