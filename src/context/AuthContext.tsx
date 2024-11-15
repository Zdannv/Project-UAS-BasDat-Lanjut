// src/context/AuthContext.tsx
"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
    role: 'fisioterapis' | 'patient';
    setRole: (role: 'fisioterapis' | 'patient') => void;
}

export const AuthContext = createContext<AuthContextType>({
    role: 'patient',
    setRole: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [role, setRole] = useState<'fisioterapis' | 'patient'>('patient');

    return (
        <AuthContext.Provider value={{ role, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};
