import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../redux/features/Products/productSlice'
import BannerBestSellingProducts from '../bannerBestSellingProducts/BannerBestSellingProducts'

function BestSellingProducts() {
    const selectCategoryItems = useSelector(selectCategory)
    
  return (
    <div className='flex flex-col gap-10 md:px-24 px-12 '>
        <div className='flex justify-between items-center text-primaryColor font-bold'>
            <Link to="/">پرفروش ترین محصولات</Link >
            <span>مشاهده همه</span>
        </div>
        <BannerBestSellingProducts selectCategoryItems={selectCategoryItems} />
    </div>
  )
}

export default BestSellingProducts