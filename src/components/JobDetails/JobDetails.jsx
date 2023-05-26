import React from 'react';
import "./JobDetails.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from 'react-router-dom';
import { BeakerIcon, BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const featureJobs = useLoaderData();
    // console.log(featureJobs.jobs);
    const jobs = featureJobs.jobs;

    const { id } = useParams();
    const idNumber = parseInt(id)
    const output = jobs.find(job => job.id === idNumber);

    const { company_logo, job_title, company_name, location, salary_range, remote_onsite, fulltime_parttime, job_description, job_responsibilities, educational_requirement, experiences, contact_information } = output;

    const applyNowBtn = (id)=>{
        addToDb(id);
        toast("Congratulations, You have Applied");
    }

    return (
        <div className='padding-container'>
            <div>
                <h2 className='text-center title-style mt-4'>Job Details</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='my-3'><span className='font-extrabold'>Job Description: <br /></span>{job_description}</p>
                    <p><span className='font-extrabold'>Job Responsibility: <br /></span>{job_responsibilities}</p>
                    <p className='my-3'><span className='font-extrabold'>Educational Requirements: <br /></span>{educational_requirement}</p>
                    <p><span className='font-extrabold'>Experiences: <br /></span>{experiences}</p>
                </div>
                <div className='col-span-1 '>
                    <div className='job-details-right'>
                    <h2 className='title-style-1'>Job Details</h2>
                    <hr className='my-3' />
                    <div className='flex gap-2 mb-2'>
                        <div><CurrencyDollarIcon className="h-6 w-6 text-[#474747]" /></div>
                        <div>Salary: {salary_range}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div><BriefcaseIcon className="h-6 w-6 text-[#474747]" /></div>
                        <div>Job Title: {job_title}</div>
                    </div>
                    <hr className='my-3' />
                    <div className='flex gap-2'>
                        <div><PhoneIcon className="h-6 w-6 text-[#474747]" /></div>
                        <div>Phone: {contact_information.phone}</div>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <div><EnvelopeIcon className="h-6 w-6 text-[#474747]" /></div>
                        <div>Email: {contact_information.email}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div><MapIcon className="h-6 w-6 text-[#474747]" /></div>
                        <div>Address: {contact_information.address}</div>
                    </div>
                    </div>
                    <p>
                    <button onClick={()=>applyNowBtn(id)} className='btn-apply-now mt-8 mb-8 text:[10px] md:text-[20px]'>
                        Apply Now
                    </button>
                </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;