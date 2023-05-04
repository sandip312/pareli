import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/users/add', {
        name,
        email,
        phoneNumber,
        country,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setName('');
    setEmail('');
    setPhoneNumber('');
    setCountry('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </div>
      <div>
        <label>Country</label>
        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
