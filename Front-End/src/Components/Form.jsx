import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from '../Assests/test forms.png';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    contactNumber: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/forms');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/forms', formData);
      setSubmittedData([...submittedData, response.data]);
      setFormData({
        name: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
        contactNumber: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className='bg-gray-700 overflow-x-hidden'>
      <div className=''>
        <div className="container mx-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className='mt-10'>
            <h1 className="text-4xl font-bold text-white flex justify-center mb-6">Fill the Form</h1>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="mr-2 bg-white"
                  />
                  <label htmlFor="male" className="mr-4 text-white">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="mr-2 bg-white"
                  />
                  <label htmlFor="female" className="mr-4 text-white">Female</label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="mr-2 bg-white"
                  />
                  <label htmlFor="other" className='text-white'>Other</label>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder='Address'
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder='Contact Number'
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder='Additional Infomation'
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
          <div className='mr-10 ml-32 mt-10'>
            <img src={img} alt='img' className=''/>
          </div>
        </div>

        {submittedData.length > 0 && (
          <div className="mt-8 p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Submitted Details</h2>
            {submittedData.map((data, index) => (
              <div key={index} className="mb-4 p-4 border-b">
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Date of Birth:</strong> {data.dob}</p>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Address:</strong> {data.address}</p>
                <p><strong>Contact Number:</strong> {data.contactNumber}</p>
                <p><strong>Message:</strong> {data.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
