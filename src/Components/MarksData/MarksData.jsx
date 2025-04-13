import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksData = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    
    const marksChartsData = marksData.map(studentData => {
        const student ={
            id : studentData.student_id,
            name: studentData.name,
            math: studentData.marks.math,
            science: studentData.marks.science,
            english: studentData.marks.english
        }
        const avg = (student.math + student.science + student.english) / 3;
        student.avg = avg
        return student;
    })
   
    return (
        <div>
            <BarChart width={1000} height={500} data={marksChartsData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="math" fill='red'></Bar>
                <Bar dataKey="science" fill='green'></Bar>
                <Bar dataKey="english" fill='gray'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksData;