import React, { useEffect, useState } from 'react';
import FeatureJob from '../FeatureJob/FeatureJob';
import "./FeatureJobs.css"



const FeatureJobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setJobs(data.jobs.slice(0,4)));
    }, []);

    const seeAllJobs = ()=>{
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setJobs(data.jobs));
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-4 padding-container'>
                    {
                        jobs.map((singleJob) => <FeatureJob  key={singleJob.id} singleJob={singleJob}></FeatureJob>)
                    }
                </div>
                <p>
                    <button onClick={()=>seeAllJobs()} className='btn-design mt-8 mb-8 text:[10px] md:text-[20px]'>
                        See All Jobs
                    </button>
                </p>
        </div>
    );
};

export default FeatureJobs;