"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import DataTable from 'react-data-table-component';
import React from 'react';
import Link from 'next/link';

const Batch = () => {
    const columns = [
        {
            name: 'Batch ID',
            selector: row => row.batchId,
        },
        {
            name: 'Batch Name',
            selector: row => row.batchName,
        },
        {
            name: 'Course',
            selector: row => row.course,
        },
        {
            name: 'Total Students',
            selector: row => row.totalStudents,
        },
    ];

    const data = [
        {
            id: 1,
            batchId: '1',
            batchName: 'Batch A',
            course: 'Computer Science',
            totalStudents: '25',
        },
        {
            id: 2,
            batchId: '2',
            batchName: 'Batch B',
            course: 'Electrical Engineering',
            totalStudents: '20',
        },
    ];

    const handleAddBatch = () => {
        // Handle logic to add a new batch
        console.log('Add Batch clicked');
    };

    return (
        <DefaultLayout>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Batch List</h2>
                    <Link
                    href={'/batch/add-batch'}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                       
                    >
                        Add Batch
                    </Link>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </DefaultLayout>
    );
};

export default Batch;
