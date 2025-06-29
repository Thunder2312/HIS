import React, { useState, type FormEvent } from 'react';
import './index.css'
const Login: React.FC = () => {

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [facility, setFacility] = useState('');
  const [role, setRole] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in with:', id, password);
    alert(`ID is ${id}`)
    setId('')
    setPassword('')
    // You can call your login API or validation logic here
  };

  return (
    <div className="container">
  <form onSubmit={handleSubmit} className="form">
    <div className="grid">
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        value={facility}
        onChange={(e) => setFacility(e.target.value)}
      >
        <option value="">Select facility</option>
        <option value="Hospital A">Hospital A</option>
        <option value="Clinic B">Clinic B</option>
      </select>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select role</option>
        <option value="Admin">Admin</option>
        <option value="Doctor">Doctor</option>
        <option value="Nurse">Nurse</option>
      </select>
    </div>

    <div className="button-wrapper">
      <button type="submit">Login</button>
    </div>
  </form>
</div>

  )
}

export default Login
