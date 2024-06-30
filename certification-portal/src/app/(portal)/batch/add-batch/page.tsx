"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React, { useState } from 'react';

const AddBatch = () => {
    const [batchId, setBatchId] = useState('');
    const [batchName, setBatchName] = useState('');
    const [course, setCourse] = useState('');
    const [totalStudents, setTotalStudents] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the submission logic (e.g., send data to API, etc.)
        console.log('Form submitted with:', { batchId, batchName, course, totalStudents });
        // Reset form fields after submission if needed
        setBatchId('');
        setBatchName('');
        setCourse('');
        setTotalStudents('');
    };

    return (
        <DefaultLayout>
            
        </DefaultLayout>
    );
};

export default AddBatch;
