import React from 'react'
import { useParams } from 'react-router'
import { selectCategory } from '../../redux/features/Products/productSlice'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product'

function OneCategory() {
    const params=useParams()
    const {categoryName}=params
    const selectOneCategory=useSelector(selectCategory)
    const findCategory=selectOneCategory.find(item=>item.category === categoryName)
    console.log(findCategory);
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:px-24 px-12 my-20'>
            <Product selectOnecategory={findCategory.relatedProducts} />
        </div>
    )
}

export default OneCategory