import { useRef, useState } from 'react';

import classes from './Checkout.module.css';



















  let validDiscount = 'BOOTCAMP2021';
  const handleDiscount=(event)=>{
    let value=event.target.value;
    console.log(value);
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'/>
        
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
 
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
    
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
       
      </div>
       <div className={classes.control}>
         <label htmlFor='name'>Enter Coupon Code</label>
         <input type ='text'  onChange = {(e) => handleDiscount(e)} id='city'/>
         </div>
      <div className={classes.control}>
      <label htmlFor='name'>Debit Card</label>
      <input type='text' id='city'/>  <input type='text' id='city'/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;