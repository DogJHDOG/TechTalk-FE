'use client';
import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Curtations from '../components/curations';

const trendData = {
  title: "Artificial Intelligence",
  summary: "Revolutionizing industries through smart automation and data analysis",
  overview: "Artificial Intelligence (AI) is rapidly transforming various sectors, from healthcare to finance. It encompasses machine learning, natural language processing, and robotics, offering unprecedented opportunities for innovation and efficiency.",
  stats: [
    {
      title: "Market Size",
      value: "$62.35B",
      description: "Global AI market size in 2020"
    },
    {
      title: "Growth Rate",
      value: "40.2%",
      description: "Expected CAGR from 2021 to 2028"
    },
    {
      title: "Job Creation",
      value: "97M",
      description: "New jobs expected by 2025 due to AI"
    }
  ],
  deepDive: [
    {
      title: "Impact on Industries",
      content: "AI is reshaping industries like healthcare, finance, and manufacturing. In healthcare, AI assists in diagnosis and drug discovery. In finance, it's used for fraud detection and algorithmic trading. Manufacturing benefits from predictive maintenance and quality control.",
      image: {
        width: 800,
        height: 600
      }
    },
    {
      title: "Ethical Considerations",
      content: "As AI becomes more prevalent, ethical concerns such as privacy, bias in algorithms, and job displacement are gaining attention. Addressing these issues is crucial for the responsible development and deployment of AI technologies.",
      image: {
        width: 800,
        height: 600
      }
    },
    {
      title: "Future Prospects",
      content: "The future of AI looks promising with advancements in areas like autonomous vehicles, personalized medicine, and smart cities. Quantum computing and AI integration could lead to breakthroughs in solving complex problems.",
      image: {
        width: 800,
        height: 600
      }
    }
  ],
  trendEvolution: {
    adoptionRate: [
      { year: 2015, value: 10 },
      { year: 2016, value: 15 },
      { year: 2017, value: 22 },
      { year: 2018, value: 35 },
      { year: 2019, value: 48 },
      { year: 2020, value: 63 },
      { year: 2021, value: 79 },
      { year: 2022, value: 92 }
    ],
    marketGrowth: [
      { year: 2015, value: 5 },
      { year: 2016, value: 8 },
      { year: 2017, value: 12 },
      { year: 2018, value: 18 },
      { year: 2019, value: 25 },
      { year: 2020, value: 35 },
      { year: 2021, value: 48 },
      { year: 2022, value: 62 }
    ],
    keyStats: [
      { label: "Global AI market size (2022)", value: "$136.6B" },
      { label: "Projected CAGR (2023-2030)", value: "37.3%" },
      { label: "AI patent applications (2022)", value: "175,000+" }
    ],
    significantEvents: [
      { year: 2016, event: "AlphaGo defeats world champion in Go" },
      { year: 2018, event: "GDPR implementation affects AI data usage" },
      { year: 2020, event: "GPT-3 released, advancing NLP capabilities" }
    ],
    futurePredictions: [
      { year: 2025, prediction: "50% of enterprises using AI in their core business" },
      { year: 2030, prediction: "AI contributes $15.7 trillion to global economy" }
    ]
  },
  conferences: [
    {
      title: "AI World Conference & Expo",
      date: "October 15-17, 2024",
      location: "Boston, MA",
      image: {
        width: 400,
        height: 300
      }
    },
    {
      title: "International Conference on Machine Learning",
      date: "July 8-14, 2024",
      location: "Vienna, Austria",
      image: {
        width: 400,
        height: 300
      }
    },
    {
      title: "AI & Big Data Expo",
      date: "November 29-30, 2024",
      location: "Silicon Valley, CA",
      image: {
        width: 400,
        height: 300
      }
    }
  ],
  relatedTrends: [
    {
      title: "Machine Learning",
      description: "A subset of AI focusing on the development of algorithms that improve automatically through experience."
    },
    {
      title: "Natural Language Processing",
      description: "AI technology that enables computers to understand, interpret, and generate human language."
    },
    {
      title: "Robotics",
      description: "The intersection of AI and physical machines, leading to the development of intelligent robots."
    },
    {
      title: "Computer Vision",
      description: "AI field that trains computers to interpret and understand the visual world."
    }
  ],
  industryImpact: {
    industries: [
      {
        name: "Healthcare",
        impact: "AI is revolutionizing diagnostics, drug discovery, and personalized medicine.",
        keyCase: {
          company: "DeepMind Health",
          description: "Developed AI for early detection of acute kidney injury."
        },
        futureOutlook: "AI will enable more precise and early disease detection, improving patient outcomes."
      },
      {
        name: "Finance",
        impact: "AI is enhancing fraud detection, algorithmic trading, and customer service.",
        keyCase: {
          company: "JPMorgan Chase",
          description: "Implemented AI for contract intelligence, saving 360,000 hours of work annually."
        },
        futureOutlook: "AI will lead to more personalized financial products and improved risk assessment."
      },
      {
        name: "Manufacturing",
        impact: "AI is optimizing supply chains, predictive maintenance, and quality control.",
        keyCase: {
          company: "Siemens",
          description: "Uses AI for predictive maintenance, reducing downtime by up to 20%."
        },
        futureOutlook: "AI will enable fully autonomous factories and highly efficient supply chains."
      }
    ],
    statistics: [
      { label: "Companies using AI", before: "15%", after: "35%" },
      { label: "Average productivity increase", value: "40%" },
      { label: "Cost reduction", value: "20-30%" }
    ]
  },
  trendComparison: {
    trends: [
      { name: "Artificial Intelligence", marketShare: 25, growthRate: 40, adoptionRate: 35 },
      { name: "Cloud Computing", marketShare: 35, growthRate: 25, adoptionRate: 60 },
      { name: "Internet of Things", marketShare: 20, growthRate: 30, adoptionRate: 45 },
      { name: "Blockchain", marketShare: 10, growthRate: 35, adoptionRate: 20 },
      { name: "5G", marketShare: 10, growthRate: 45, adoptionRate: 15 }
    ],
    growthPredictions: [
      { year: 2025, AI: 60, Cloud: 75, IoT: 65, Blockchain: 40, FiveG: 55 },
      { year: 2030, AI: 85, Cloud: 90, IoT: 80, Blockchain: 60, FiveG: 80 }
    ]
  }
};


const TrendAnalysisPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data for the trend evolution graph
  const mockTrendData = [
    { year: 2015, value: 30 },
    { year: 2016, value: 45 },
    { year: 2017, value: 60 },
    { year: 2018, value: 80 },
    { year: 2019, value: 100 },
    { year: 2020, value: 130 },
  ];

  return (
    <div className="md:mx-10 flex flex-col gap-8 min-h-screen">
      <div className='flex flex-col md:flex-row gap-4'>
        {/* 1. Hero Section */}
        <section className="relative h-96 w-full md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white max-w-7xl">
          <div className="absolute inset-0 overflow-hidden">
            <img src="ai-image.jpeg" alt="Trend background" className="object-cover w-full h-full opacity-30" />
          </div>
          <div className="relative z-10 flex flex-col items-left justify-center h-full px-4 text-left">
            <p className="text-5xl font-bold mb-4">{trendData.title}</p>
            <p className="text-xl mb-8">{trendData.summary}</p>
            {/* <Button size="lg">Learn More</Button> */}
          </div>
        </section>
        {/* 2. Trend Overview & Stats */}
        <section className="w-full md:w-1/2 h-96 px-4 bg-gray-100">
          <div className="h-96 mx-auto">
            <div className='max-h-2/3'>
              <h2 className="text-3xl font-bold mb-8">Trend Overview</h2>
              <p className="text-lg">{trendData.overview}</p>
            </div>
            <div className="max-h-1/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendData.stats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader>{stat.title}</CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>


      {/* 3. Deep Dive Section */}
      <Curtations/>
      
      {/* 5. Related Conferences & Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Conferences & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendData.conferences.map((conference, index) => (
              <Card key={index} className="flex flex-col">
                <img src={`/api/placeholder/400/200`} alt={conference.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>{conference.title}</CardHeader>
                <CardContent className="flex-grow">
                  <p className="flex items-center mb-2"><Calendar className="mr-2" size={16} /> {conference.date}</p>
                  <p className="flex items-center mb-4"><MapPin className="mr-2" size={16} /> {conference.location}</p>
                  <Button className="w-full">
                    Register <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Personalized Recommendations */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Personalized Recommendations</h2>
          {/* Personalized content would be dynamically generated based on user data */}
          <p className="text-lg mb-8">Based on your interests, we recommend exploring these related trends:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendData.relatedTrends.map((trend, index) => (
              <Card key={index}>
                <CardHeader>{trend.title}</CardHeader>
                <CardContent>{trend.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer Section */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Site Map</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Trends</a></li>
              <li><a href="#" className="hover:text-gray-300">Conferences</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with the latest trends</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-grow p-2 rounded-l-lg" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrendAnalysisPage;