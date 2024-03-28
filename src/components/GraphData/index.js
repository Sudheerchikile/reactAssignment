import React from 'react';
import { LineChart, Line, XAxis, YAxis,Legend, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const GraphData = ({ data }) => {
    console.log(data)
  return (
    <ResponsiveContainer width="85%" margin={{top:20}} height={300}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid  color="#888" strokeDasharray="3 3" />
        <XAxis dataKey="Year" axisLine={{ stroke: '#000' }} label={{ value: 'Year',fontSize:"20px",fontWeight:"bold", fill:"darkblue", position: 'insideBottomRight', offset: -10 }} />
        <YAxis tickSize={5} 
          tick={{ fontSize: 14}} 
          padding={{ top: 30, botom: 30 }}
          margin={{top:35,bottom:35}}
          axisLine={{ stroke: '#000' }}
          label={{ value: 'count', angle: 360, fontSize:"20px",fontWeight:"bold", position: 'center', fill:"darkblue", offset: -15 }} />
        <Tooltip />
        <Legend verticalAlign="top"  height={36} />
        <Line type="monotone" dataKey="Population" activeDot={{ r: 8 }} name="Population" stroke="darkgreen" />
        <text x="58%" y={15} fill="black" fontWeight="bold" fontSize={20} magin={{bottom:20,top:20}} textAnchor="middle">
          Population Trends by Year
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphData;
