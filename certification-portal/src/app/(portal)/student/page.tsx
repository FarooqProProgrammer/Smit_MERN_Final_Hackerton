"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import DataTable from 'react-data-table-component';
import React from 'react'
import Link from 'next/link';
const Student = () => {


  const columns = [
    {
      name: 'Id',
      selector: row => row.title,
    },
    {
      name: 'Student Name',
      selector: row => row.year,
    },
    {
      name: 'Attendance',
      selector: row => row.year,
    },
    {
      name: 'Attendance Month',
      selector: row => row.year,
    },
    {
      name: 'Assignments',
      selector: row => row.year,
    },
    {
      name: 'Certification',
      selector: row => row.year,
    },

  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]


  return (
    <DefaultLayout>
      <div className="bg-white p-2">
        <div className="mb-2 mt-3">
          {/* <button onClick={()=>window.location.href = "/student/add-students"} className='bg-[#1C2434] text-white p-2 rounded-md cursor-pointer'>Add Students</button> */}
          <Link href={'/student/add-students'} className='bg-[#1C2434]  text-white p-2 rounded-md cursor-pointer'>Add Students</Link>
        </div>
        <DataTable
          columns={columns}
          data={data}
        />
      </div>
    </DefaultLayout>
  )
}

export default Student
