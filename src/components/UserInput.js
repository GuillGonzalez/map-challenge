import React, { useState, useEffect } from 'react';
import AddressValidator from './AddressValidator';

const UserInput = () => {
  const [pickupIcon, setpickupIconSource] = useState("assets/pickUpBadgeBlank.svg")
  const [dropoffIcon, setdropoffIconSource] = useState("assets/dropOffBadgeBlank.svg")
  useEffect(()=>{
    // AddressValidator(fieldValue).then((value)=>{
    //   console.log('Address:' + value)
    // })
    console.log(AddressValidator(fieldValue))
  })
  const [fieldValue, setFieldValue] = React.useState('');
  const handle_blur = (e) => setFieldValue(e.target.value);

  return (
    <div className="user_input">
      <div className="pickup input_group">
        <div className="pickup__icon icon">
          <img src={pickupIcon} alt="icon" />
        </div>
        <input type="text"
               className="user_input_text"
               onBlur={handle_blur} />
      </div>
      <div className="dropoff input_group">
        <div className="dropoff_icon icon">
          <img src={dropoffIcon} alt="icon" />
        </div>
        <input type="text" className="user_input_text"/>
      </div>
      <input className="user_input__btn" 
             type="button"
             className="user_input_btn"
             value="Create Job"
             />
    </div>
  )
}

export default UserInput