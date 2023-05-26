import React from 'react';
import './CategoryList.css'
const CategoryList = (props) => {
    const { icon, type, avaiable_job } = props.singleList;
    return (
        <div className="w-full md:w-96 card-style mt-8">
            <img src={icon} className='w-[55px] h-[55px] img-style' alt="" />
            <div className="">
                <h2 className="type-style">{type}</h2>
                <p className='avaiable-job-style'>{avaiable_job} Jobs Avaiable</p>
            </div>
        </div>
    );
};

export default CategoryList;