import React from 'react';
import "./FeatureJob.css"
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
const FeatureJob = (props) => {
    const { id, company_logo, job_title, company_name, location, salary_range, remote_onsite, fulltime_parttime } = props.singleJob;
    return (
        <div className="w-full md:w-full feature-card-style mt-8">
            <img src={company_logo} className='w-[116px] h-[40px] ' alt="" />
            <div className='text-left'>
                <h2 className='job-title mt-3'>{job_title}</h2>
                <h3 className='company-name my-2'>{company_name}</h3>
                <div className='md:flex gap-4'>
                    <div className='mb-2'>                    
                        <div className='text-[#7E90FE] border-2 border-[#7E90FE] py-1 px-2'>{remote_onsite}</div>
                    </div>
                    <div>
                        <div className='text-[#7E90FE] border-2 border-[#7E90FE] py-1 px-2'>{fulltime_parttime}</div>
                    </div>
                </div>
                <div className='md:flex gap-4 my-3'>
                    <div className='flex gap-2 ' >
                        <div><MapPinIcon className="h-6 w-6 text-[#757575]" />
                        </div>
                        <div className='location-style'>{location}</div>
                    </div>
                    <div className='flex gap-2'>
                        <div><CurrencyDollarIcon className="h-6 w-6 text-[#757575]" />
                        </div>
                        <div className='location-style'>{salary_range}</div>
                    </div>
                </div>
                <Link to={`/viewDetails/${id}`}><button className='btn-viewDetails text:[10px] md:text-[20px] w-full md:w-[190px]'>View Deatils</button></Link>

            </div>
        </div>
    );
};

export default FeatureJob;