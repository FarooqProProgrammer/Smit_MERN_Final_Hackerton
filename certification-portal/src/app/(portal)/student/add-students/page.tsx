"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import React, { useState } from 'react'

const AddStudents = () => {

    const [selectedOption,setSelectedOption] = useState();

    return (
        <DefaultLayout>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2 bg-white p-3">
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Student Name
                    </label>
                    <input
                        type="text"
                        placeholder="Student Name"
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
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>

                <div className="">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Batche
                    </label>
                    <select
                        value={selectedOption}
                        onChange={(e) => {
                            setSelectedOption(e.target.value);
                            
                        }}
                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input `}
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
            </div>
        </DefaultLayout>
    )
}

export default AddStudents
