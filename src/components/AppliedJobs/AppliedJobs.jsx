import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import { Select, Option } from "@material-tailwind/react";


const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        fetch("feature.json")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data.jobs);
                setFilteredJobs(data.jobs);
            });
    }, []);
    const localStoragefakeDBid = getShoppingCart();

    const appliedJobes = Object.keys(localStoragefakeDBid).map((key) => {
        const idAsNumber = parseInt(key);
        const showAppliedJobs = filteredJobs.filter((job) => job.id === idAsNumber);
        return showAppliedJobs;
    });

    const remoteOption = () => {
        const filtered = jobs.filter((job) => job.remote_onsite === "Remote");
        setFilteredJobs(filtered);
    };

    const onSiteOption = () => {
        const filtered = jobs.filter((job) => job.remote_onsite == "Onsite");
        setFilteredJobs(filtered);
    };
    return (
        <div className='padding-container'>
            <div className="w-50 absolute top-32 right-24 ">
                <Select className="" label="Filter By">
                    <Option onClick={() => remoteOption()}>remote</Option>

                    <Option onClick={() => onSiteOption()}>on-site</Option>
                </Select>
            </div>
            <div className="md:mt-36 mb-10 ">
                {appliedJobes.map((job, idx) => (
                    <ShowAppliedJobs job={job} key={idx}></ShowAppliedJobs>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;