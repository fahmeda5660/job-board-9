import React, { useEffect, useState } from 'react';
import './Category.css'
import CategoryList from '../CategoryList/CategoryList';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Category = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setLists(data.categories))
    }, []);
    return (
        <div>
            <div className='banner-section padding-container bg-[#F4F4F4] flex flex-col md:flex-row md:justify-between '>
                <div className='banner-text flex flex-col justify-center '>
                    <p className='font-extrabold text-[45px] md:text-[65px] leading-[55px] md:leading-[72px] text-[#1A1919] mt-24 md:mt-0'>More jobs <br /> equal a better <br /> world</p>
                    <p className='banner-description'>It's the era of the Great Resignation- so how do you get a job they love? We found out how. HR and corporate leaders share their inside scoop on finding the perfect job.</p>
                    <a className="btn-design text:[10px] md:text-[20px]">Get started</a>
                </div>
                <div className='banner-img'>
                    <img src="/banner.png" alt="" />
                </div>
            </div>
           <div>
            <div className='text-center mt-16'>
            <h2 className='category-title padding-container'>Job Category List</h2>
            <p className='category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
                <div className='md:flex items-center justify-center gap-4 padding-container'>
                    {
                        lists.map((singleList,idx) => <CategoryList key={idx} singleList={singleList}></CategoryList>)
                    }
                </div>
           </div>
           <div className='text-center mt-16'>
            <h2 className='category-title'>Featured Jobs</h2>
            <p className='category-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <FeatureJobs></FeatureJobs>
            </div>
           
        </div>
    );
};

export default Category;