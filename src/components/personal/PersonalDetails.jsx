import React from 'react'
import Input from '../Input';

const Personal = ({onChange, email, fullName, phoneNumber, address}) => {
  return (
    <form className='personal-details'>
      <h2>Personal Details</h2>
      <Input
        type='text'
        id="full-name"
        labelText="Full Name"
        placeholder="First and last name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <Input
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        value={email}
        onChange={onChange}
        data-key="email"
        recommended
      />
      <Input
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
        recommended
      />
      <Input
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={address}
        onChange={onChange}
        data-key="address"
        recommended
      />
     </form>
  )
}

export default Personal