// src/app/jadwal/page.tsx
"use client";

import React, { useContext, useState } from 'react';
import ScheduleTable from '../components/ScheduleTable';
import { AuthContext } from '../../context/AuthContext';
import { dummyData } from '../../data/dummyData';
import { Schedule } from '../../types';

const JadwalPage = () => {
    const { role } = useContext(AuthContext);
    const [schedule, setSchedule] = useState<Schedule[]>(dummyData);

    const handleEdit = (id: number) => {
        console.log('Edit item with id:', id);
    };

    const handleDelete = (id: number) => {
        setSchedule(schedule.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">FisioGo</h1>
            {role === 'fisioterapis' && (
                <button className="text-white bg-blue-500 p-2 rounded mt-4">Add New Schedule</button>
            )}
            <ScheduleTable
                schedule={schedule}
                onEdit={handleEdit}
                onDelete={role === 'fisioterapis' ? handleDelete : () => {}}
            />
        </div>
    );
};

export default JadwalPage;
