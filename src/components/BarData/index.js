import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, Legend } from 'recharts'

const BarData = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer width="50%"  margin={{ top: 20 }} height={400}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }} />
          <YAxis 
            tick={{ fontSize: 14 }}
            padding={{ top: 25, bottom: 25 }}
            margin={{ top: 20, bottom: 20 }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="Population" fill="black" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarData
