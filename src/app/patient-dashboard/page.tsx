// src/app/patient-dashboard/page.tsx
"use client";

import React, { useContext } from 'react';
import ScheduleTable from '../components/ScheduleTable';
import { AuthContext } from '../../context/AuthContext';
import { dummyData } from '../../data/dummyData';

const PatientDashboard = () => {
    const { role } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Patient Dashboard</h1>
            {role === 'patient' && (
                <ScheduleTable
                    schedule={dummyData}
                    onEdit={() => {}}
                    onDelete={() => {}}
                />
            )}
        </div>
    );
};

export default PatientDashboard;
