import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { selectAllProductsCategory } from '../../redux/features/Products/productSlice'
import BannerBestSellingProducts from '../bannerBestSellingProducts/BannerBestSellingProducts'

function BestSellingProducts() {
    const selectCategoryItems = useSelector(selectAllProductsCategory)
    const bestProductSells=selectCategoryItems.sort((a,b)=> a.price - b.price)
  return (
    <div className='flex flex-col gap-10 md:px-24 px-12 '>
        <div className='flex justify-between items-center text-primaryColor font-bold'>
            <Link to="/">پرفروش ترین محصولات</Link >
            <span>مشاهده همه</span>
        </div>
        <BannerBestSellingProducts selectCategoryItems={bestProductSells} />
    </div>
  )
}

export default BestSellingProducts