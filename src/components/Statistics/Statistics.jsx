import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

const Statistics = () => {
    const marksArray = [
        {
            id: "ab",
            no: "Assignment-1",
            name: "New Year",
            assignment_marks:60,
            quiz_marks: 10
        },
        {
            id: "bc",
            no: "Assignment-2",
            name: "Money Master",
            assignment_marks:60,
            quiz_marks: 8
        },
        {
            id: "cd",
            no: "Assignment-3",
            name: "Gear-influencer",
            assignment_marks:55,
            quiz_marks: 7
        },
        {
            id: "de",
            no: "Assignment-4",
            name: "Penguin-fashion",
            assignment_marks:60,
            quiz_marks: 9
        },
        {
            id: "ef",
            no: "Assignment-5",
            name: "Geometry Genious",
            assignment_marks:60,
            quiz_marks: 7
        },
        {
            id: "fg",
            no: "Assignment-6",
            name: "AI Universe",
            assignment_marks:60,
            quiz_marks: 10
        },
        {
            id: "gh",
            no: "Assignment-7",
            name: "Quiz Hero",
            assignment_marks:60,
            quiz_marks: 8
        }
      ];
    return (
        <AreaChart className='mt-8'
        width={1200}
        height={400}
        data={marksArray}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="no" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="assignment_marks" stroke="#8884d8" fill="#e8dd09" />
        <Area type="monotone" dataKey="quiz_marks" stroke="#8884d8" fill="#09e809" />
      </AreaChart>
    );
};

export default Statistics;