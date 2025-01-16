import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirt.jpg'
import Tshirt from '../../assets/img/tshirt.jpg'
import dresses from '../../assets/img/dresses.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Shoes from '../../assets/img/shoes.jpg'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants'
import './NewArrivals.css'
const items = [{
    'title':'Jeans',
    imagePath:Jeans
},{
    'title':'Shirts',
    imagePath:Shirts
},{
    'title':'T-Shirts',
    imagePath:Tshirt
},{
    'title':'Dresses',
    imagePath:dresses
},
{
    'title':'Joggers',
    imagePath:Joggers
},
{
    'title':'Shoes',
    imagePath:Shoes
}
];
const NewArrivals = () => {
  return (
    <>
     <SectionHeading title={'New Arrivals'}></SectionHeading>
      
      <Carousel   responsive={responsive}
     autoPlay={false}
     swipeable={true}
     draggable={false}
     showDots={false}
     infinite={false}
     partialVisible={false}
     itemClass={'react-slider-custom-item'}
     className='px-8'>
    {items && items?.map((item,index) =><Card key={item?.title + index} title={item.title} imagePath={item.imagePath}></Card>)}
    </Carousel>
    </>
  )
}

export default NewArrivals