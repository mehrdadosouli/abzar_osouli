import { Link } from 'react-router'
import CarouselOneCategory from '../carouselOneCategory/CarouselOneCategory'
import { useSelector } from 'react-redux'
import { selectAllProductsCategory } from '../../redux/features/Products/productSlice'
import BannerNewProducts from '../bannerNewProducts/BannerNewProducts'
function NewProducts() {
    const selectCategoryItems = useSelector(selectAllProductsCategory)

  return (
    <div className='flex flex-col gap-1 mb-10 md:px-24 px-5 font-bold'>
        <div className='flex justify-between items-center text-primaryColor'>
            <Link to="/">جدیدترین محصولات</Link >
            <span>مشاهده همه</span>
        </div>
        <CarouselOneCategory bg='light' arrow={false} slides='4' selectOnecategory={selectCategoryItems} />
        <BannerNewProducts />
    </div>
  )
}

export default NewProducts