import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        setError('');

        axios.post('http://127.0.0.1:8000/api/login/', { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.access);
                navigate('/homepage');
            })
            .catch(error => {
                setError('Login failed! Please check your credentials and try again.');
            });
    };

    return (
        <>
            <form id="loginForm" onSubmit={handleLogin} className="max-w-lg mt-36 mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="youremail@gmail.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="•••••••••"
                        required
                    />
                </div>
                {error && <div className="mb-6 text-red-500">{error}</div>}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Login</button>
                <div className="flex items-center mt-4 mb-6">
                    <label className="text-sm font-medium text-gray-900">New User? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>.</label>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
