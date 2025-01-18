import React, { useEffect, useMemo, useState } from 'react'
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Navbar from '../../components/navbar/Navbar';
import Categories from '../../components/Filters/Categories';

const categories =content?.categories;


const ProductListPage = ({categoryType}) => {

 const categoryContent=useMemo(()=>{
  return categories?.find((category)=>category.code===categoryType);

 },[categoryType]) ;
  

  return (
    <div>
    
        <div className='flex'>
            <div className='w-[20%] p-[10px] border rounded-lg m-[20px]'>
                {/* Filters */}
                <div className='flex justify-between '>
                <p className='text-[16px] text-gray-600'>Filter</p>
                <FilterIcon />
                </div>
                <div>
                  {/* Product types */}
                <p className='text-[16px] text-black mt-5'>Categories</p>
                <Categories types={categoryContent?.types}/>
                <hr></hr>
                </div>
               

            </div>

        </div>
    </div>
  )
}

export default ProductListPage