'use client'
import React from 'react';
import { TrendingUp, ArrowUp, Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const marketSizeData = [
  { region: 'North America', size: 450 },
  { region: 'Europe', size: 350 },
  { region: 'Asia', size: 550 },
  { region: 'Rest of World', size: 200 },
];

const growthData = [
  { name: 'AI', growth: 35 },
  { name: 'IoT', growth: 28 },
  { name: '5G', growth: 42 },
  { name: 'App', growth: 22 },
];

const techAdoptions = [
  { company: 'Google', tech: 'New AI Tool Launch' },
  { company: 'Tesla', tech: 'Autonomous Driving Update' },
  { company: 'Amazon', tech: 'Quantum Computing Initiative' },
  { company: 'Microsoft', tech: 'Advanced Cloud Services' },
];

const TrendAnalysis = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 rounded-xl">
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <TrendingUp className="mr-2" /> Tech Trends Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">Market size and growth rate analysis of major technology trends</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Market Size by Region (Billion Dollars)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={marketSizeData}>
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="size" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Growth Rate by Technology (%)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={growthData} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="growth" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <Building className="mr-2" /> Industry Leader Technology Adoption Cases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {techAdoptions.map((item, index) => (
            <li key={index} className="flex items-center">
              <ArrowUp className="mr-2 text-green-500" />
              <span className="font-semibold">{item.company}:</span>
              <span className="ml-2 text-gray-600">{item.tech}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Weekly Trend Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">49<span className="text-2xl">hrs</span></div>
        <p className="text-sm mt-2">Average coding time this week</p>
        <div className="mt-4 flex items-center">
          <span className="text-green-300 font-bold">+22%</span>
          <div className="ml-2 w-24 h-8 bg-white bg-opacity-20 rounded-full overflow-hidden">
            <div className="h-full bg-green-300" style={{ width: '22%' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default TrendAnalysis;