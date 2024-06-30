"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import DataTable from 'react-data-table-component';

const Page = () => {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.Name,
        },
        {
            name: 'Attendance Month',
            selector: row => row.month,
        }, 
        {
            name: 'Attendance Day',
            selector: row => row.day,
        },
        {
            name: 'Action',
            cell: row => <button className="bg-blue-600 text-white p-2 rounded-md">Submit</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const data = [
        {
            id: 1,
            Name: 'Farooq',
            month: 'January',
            day: 'Tuesday',
        },
    ];

    return (
        <DefaultLayout>
            <div className="py-3 bg-white mb-3 px-3 flex flex-col justify-center items-start gap-2">
                <div className="w-full border rounded-md">
                    <input type="text" className='py-3 rounded-md w-full outline-none pl-2 placeholder:pl-2' placeholder='Enter Student Roll No Id:' />
                </div>
                <button className='bg-blue-600 p-2 text-white rounded-md'>Search</button>
            </div>
            <DataTable
                columns={columns}
                data={data}
            />
        </DefaultLayout>
    );
};

export default Page;
