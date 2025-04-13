import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
    { "student_id": 1, "name": "Alice", "math": 85, "science": 78, "english": 92 },
    { "student_id": 2, "name": "Bob", "math": 67, "science": 72, "english": 70 },
    { "student_id": 3, "name": "Charlie", "math": 90, "science": 88, "english": 95 },
    { "student_id": 4, "name": "David", "math": 76, "science": 85, "english": 80 },
    { "student_id": 5, "name": "Ella", "math": 92, "science": 91, "english": 89 },
    { "student_id": 6, "name": "Frank", "math": 55, "science": 60, "english": 65 },
    { "student_id": 7, "name": "Grace", "math": 88, "science": 84, "english": 87 },
    { "student_id": 8, "name": "Hannah", "math": 73, "science": 77, "english": 79 },
    { "student_id": 9, "name": "Ian", "math": 81, "science": 80, "english": 85 },
    { "student_id": 10, "name": "Julia", "math": 95, "science": 93, "english": 97 }
  ]
  

const StudentResult = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={data}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={'english'}></Line>
                <Line dataKey={'science'} stroke='red'></Line>
                <Line dataKey={'math'} stroke='green'></Line>
            </LineChart>

            <BarChart width={1000} height={500} data={data}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'english'} barSize={20} fill='#8884d8'></Bar>
                <Bar dataKey={'science'} barSize={20} fill='green'></Bar>
                <Bar dataKey={'math'} barSize={20} fill='gray'></Bar>
            </BarChart>

        </div>
    );
};

export default StudentResult;