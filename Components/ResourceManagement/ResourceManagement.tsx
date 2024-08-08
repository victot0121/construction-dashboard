'use client'

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import PureComponent from "@/Components/PureComponent/PureComponent"
import { useResource } from "@/context/ResourceContext";

// const data = [
//     { name: 'Labor', value: 400 },
//     { name: 'Materials', value: 300 },
//     { name: 'Equipment', value: 300 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ResourceManagement: React.FC = () => {

    const { data } = useResource();

    return (
        <div className="p-4 bg-white shadow rounded-lg flex flex-col md:flex-row gap-8">
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Resource Management</h2>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
            <div className="flex-1">
                <PureComponent />
            </div>
        </div>
    );
};

export default ResourceManagement;
