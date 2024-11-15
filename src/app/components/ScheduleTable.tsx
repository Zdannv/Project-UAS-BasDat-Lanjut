// src/app/components/ScheduleTable.tsx

import React from 'react';

export interface Schedule {
    id: number;
    name: string;
    date: string;
    time: string;
}

interface ScheduleTableProps {
    schedule: Schedule[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule, onEdit, onDelete }) => {
    return (
        <div className="flex flex-col items-center w-full p-4">
            <h1 className="text-3xl font-bold mb-6">Jadwal Terapi</h1>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Nama Pasien</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Tanggal</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Waktu</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6 text-gray-800">{item.name}</td>
                            <td className="py-4 px-6 text-gray-800">{item.date}</td>
                            <td className="py-4 px-6 text-gray-800">{item.time}</td>
                            <td className="py-4 px-6">
                                <button
                                    onClick={() => onEdit(item.id)}
                                    className="text-blue-500 hover:text-blue-700 font-semibold mr-4 transition-colors"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
