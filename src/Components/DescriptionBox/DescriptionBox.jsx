import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is an online platform where businesses and individuals 
        can buy and sell products or services. It enables transactions over the 
        internet, offering features like product catalogs, shopping carts, payment gateways, 
        and order tracking. Customers can browse, select, and purchase items from anywhere, 
        anytime. Businesses use e-commerce sites to reach wider audiences and streamline 
        operations.
        </p>
        <p>E-commerce website is a digital storefront for buying and selling goods 
        or services online. It provides a seamless shopping experience with features like 
        product listings, secure payments, and delivery options. These platforms connect 
        businesses with global customers, making shopping more convenient and efficient.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
