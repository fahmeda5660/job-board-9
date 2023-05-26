import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import "./ShowAppliedJobs.css"


const ShowAppliedJobs = ({ job }) => {
  return (
      <div className="mt-36 md:mt-5">
        {job.map((singleJob) => (
          <div key={singleJob.id} className='md:flex border-2 rounded-[8px] p-8 gap-2 justify-between items-center'>
            <div className='md:flex gap-8 justify-center items-center'>
            <img className="h-[200px] w-[200px] bg-[#F4F4F4] p-16 rounded-[8px]" src={singleJob.company_logo} alt="Company logo" />
            <div>
              <h1 className='job-title-style'>{singleJob.job_title}</h1>
              <h2 className='mb-2 company-style'>{singleJob.company_name}</h2>
              <div className="md:flex gap-2">
                <p className='text-[#7E90FE] border-2 border-[#7E90FE] py-1 px-2 mb-2'>{singleJob.remote_onsite}</p>
                <p className='text-[#7E90FE] border-2 border-[#7E90FE] py-1 px-2 mb-2'> {singleJob.fulltime_parttime}</p>
              </div>
              <div className='md:flex gap-4 my-3'>
                <div className='flex gap-2 ' >
                  <div><MapPinIcon className="h-6 w-6 text-[#757575]" />
                  </div>
                  <div className='location-style'>{singleJob.location}</div>
                </div>
                <div className='flex gap-2'>
                  <div><CurrencyDollarIcon className="h-6 w-6 text-[#757575]" />
                  </div>
                  <div className='location-style'>{singleJob.salary_range}</div>
                </div>
              </div>
            </div>
            </div>
            <div className="">
          {job.map((jb) => (
            <div key={jb.id}>
              <Link to={`/ViewDetails/${jb.id}`}>
                <p className='text-right'>
                  <button className='btn-apply-now mt-8 mb-8 text:[10px] md:text-[20px]'>
                    View Details
                  </button>
                </p>
              </Link>
            </div>
          ))}
        </div>
          </div>
        ))}
        {/* <div className="">
          {job.map((jb) => (
            <div key={jb.id}>
              <Link to={`/ViewDetails/${jb.id}`}>
                <p className='text-right'>
                  <button className='btn-apply-now mt-8 mb-8 text:[10px] md:text-[20px]'>
                    View Details
                  </button>
                </p>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
  );
};


export default ShowAppliedJobs;