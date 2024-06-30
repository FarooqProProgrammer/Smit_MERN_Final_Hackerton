"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useCss } from 'react-use';
import { CiImageOn } from 'react-icons/ci';

const AddStudents = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null); // State to store uploaded image
    const [studentName, setStudentName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [currentEducation, setCurrentEducation] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setUploadedImage(reader.result); // Store image data in state
        };

        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const avatarStudent = useCss({
        '& .avatar': {
            width: '150px',
            height: '150px',
            border: '1px solid #000',
            backgroundImage: `url(${uploadedImage})`, // Set background image
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const formData = {
            studentName,
            fatherName,
            currentEducation,
            dateOfBirth,
            address,
            selectedOption // Batch selection
            // Add more fields as needed
        };
        console.log(formData); // For testing purposes
        // Reset form fields or perform further actions
    };

    return (
        <DefaultLayout>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2 bg-white p-5 rounded-xl">
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Student Name
                    </label>
                    <input
                        type="text"
                        placeholder="Student Name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Father Name
                    </label>
                    <input
                        type="text"
                        placeholder="Father Name"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Current Education
                    </label>
                    <input
                        type="text"
                        placeholder="Current Education"
                        value={currentEducation}
                        onChange={(e) => setCurrentEducation(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Address
                    </label>
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>

                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Batch
                    </label>
                    <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    >
                        <option value="" disabled className="text-body dark:text-bodydark">
                            Select Country
                        </option>
                        <option value="USA" className="text-body dark:text-bodydark">
                            USA
                        </option>
                        <option value="UK" className="text-body dark:text-bodydark">
                            UK
                        </option>
                        <option value="Canada" className="text-body dark:text-bodydark">
                            Canada
                        </option>
                    </select>
                </div>

                <div className={clsx(avatarStudent, 'mt-4')}>
                    <div className="avatar rounded-full relative" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className="absolute w-[30px] h-[30px] border border-black right-[15px] bottom-0 rounded-full flex justify-center items-center">
                            <CiImageOn />
                        </div>
                    </div>
                    <p>Add Profile Image</p>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
            >
                Add Students
            </button>
        </DefaultLayout>
    );
};

export default AddStudents;
