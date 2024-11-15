// src/app/login/page.tsx
"use client";

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
    const { setRole } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (role: 'fisioterapis' | 'patient') => {
        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }
        setError('');
        setRole(role);

        if (role === 'fisioterapis') {
            window.location.href = '/jadwal';
        } else if (role === 'patient') {
            window.location.href = '/patient-dashboard';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login to FisioGo</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <button
                            onClick={() => handleLogin('fisioterapis')}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                        >
                            Login as Fisioterapis
                        </button>
                        <button
                            onClick={() => handleLogin('patient')}
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
                        >
                            Login as Pasien
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
