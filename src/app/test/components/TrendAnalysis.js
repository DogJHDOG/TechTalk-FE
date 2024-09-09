'use client'
// components/TrendAnalysis.js
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const trendData = [
  { name: 'React', value: 60 },
  { name: 'Vue', value: 40 },
  { name: 'Angular', value: 30 },
  { name: 'Svelte', value: 20 },
]

const TrendCard = ({ title, content, color, size }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`p-4 rounded-lg transition-all duration-300 ease-in-out ${
        size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
      }`}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className={`transition-all duration-300 ease-in-out ${isHovered ? 'scale-105' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default function TrendAnalysis() {
  return (
    <section>
      {/* <h2 className="text-3xl font-bold mb-6">Trend Analysis</h2> */}
      <div className="grid grid-cols-3 gap-4">
        <TrendCard 
          title="Framework Popularity" 
          content={
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          }
          color="#e3f2fd"
          size="large"
        />
        <TrendCard 
          title="TypeScript Adoption" 
          content="75% of developers now use TypeScript" 
          color="#fff9c4"
        />
        <TrendCard 
          title="AI in Development" 
          content="30% increase in AI-assisted coding tools" 
          color="#ffccbc"
        />
        <TrendCard 
          title="Cloud Native" 
          content="90% of new projects are cloud-native" 
          color="#c8e6c9"
        />
        <TrendCard 
          title="WebAssembly" 
          content="Growing adoption in web performance optimization" 
          color="#e1bee7"
        />
      </div>
    </section>
  )
}
