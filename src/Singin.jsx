import React, { useState } from 'react'
import Navbar from './Navbar'
import './style-place.css'
const Singin = (() => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    number: "",
    codemeli: "",
    address: "",
    city: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "لطفا مقادیر را تکمیل کنید";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // You can write your own code here to submit the form data
      console.log(formData);
    }
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
    <Navbar></Navbar>
      <form onSubmit={handleSubmit} className='form-singin'>
      <div>
        <label htmlFor="name">نام:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="lastname">نام خانوادگی:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        {errors.lastname && <span>{errors.lastname}</span>}
      </div>
      <div>
        <label htmlFor="number">شماره تماس:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        {errors.number && <span>{errors.number}</span>}
      </div>
      <div>
        <label htmlFor="codemeli">کد ملی:</label>
        <input
          type="text"
          id="codemeli"
          name="codemeli"
          value={formData.codemeli}
          onChange={handleChange}
        />
        {errors.codemeli && <span>{errors.codemeli}</span>}
      </div>
      <div>
        <label htmlFor="address">آدرس:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label htmlFor="city">شهر:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label htmlFor="age">سن:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label htmlFor="gender">جنسیت:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">انتخاب جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <button type="submit">ثبت</button>
    </form>
    </>
  )
})

export default Singin;