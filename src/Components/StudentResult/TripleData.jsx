import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data01 = [
    { name: 'Alice', value: 100 },
    { name: 'Bob', value: 120 },
    { name: 'Charlie', value: 170 },
    { name: 'David', value: 140 },
    { name: 'Ella', value: 150 },
    { name: 'Frank', value: 110 },
  ];
  
  const data02 = [
    { name: 'Alice', value: 200 },
    { name: 'Bob', value: 220 },
    { name: 'Charlie', value: 190 },
    { name: 'David', value: 180 },
    { name: 'Ella', value: 200 },
    { name: 'Frank', value: 210 },
  ];
  
  const data03 = [
    { name: 'Alice', value: 150 },
    { name: 'Bob', value: 170 },
    { name: 'Charlie', value: 160 },
    { name: 'David', value: 180 },
    { name: 'Ella', value: 190 },
    { name: 'Frank', value: 140 },
  ];
  

const TripleData = () => {
    return (
        <ResponsiveContainer width='100%' height={400}>
            <BarChart data={data01} margin={{top:20, right:20, left:20, bottom:20}}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey="value" name="group-A" fill="#8884d8"></Bar>
            <Bar dataKey="value" name="group-B" data={data02} fill='#82ca9d'></Bar>
            <Bar dataKey="value" name="group-C" data={data03} fill='#ff7300'></Bar>

        </BarChart>
        </ResponsiveContainer>
    );
};

export default TripleData;