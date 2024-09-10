import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import TechTrendMasonry from './trenddash';

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
  
const Curtations = () => {
    return (
        <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Trend Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8">

            {/* Trend Comparison */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Trend Comparison</h3>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={trendData.trendComparison.trends}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Market Share" dataKey="marketShare" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Radar name="Growth Rate" dataKey="growthRate" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                      <Radar name="Adoption Rate" dataKey="adoptionRate" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            {/* Market Growth */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-6">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Market Growth</h3>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trendData.trendEvolution.marketGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Market Size (Billion $)" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            {/* Trend Evolution */}
            {/* <Card className="col-span-1 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Trend Evolution</h3>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData.trendEvolution.adoptionRate}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" name="Adoption Rate (%)" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card> */}
          {/* Future Predictions */}
          <Card className="col-span-1 md:col-span-1 lg:col-span-6">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Future Predictions</h3>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData.trendComparison.growthPredictions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="AI" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Cloud" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="IoT" stroke="#ffc658" />
                      <Line type="monotone" dataKey="Blockchain" stroke="#ff7300" />
                      <Line type="monotone" dataKey="FiveG" stroke="#a4de6c" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Industry Impact Analysis */}
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Industry Impact</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendData.industryImpact.industries.map((industry, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold">{industry.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{industry.impact}</p>
                      <p className="text-sm"><span className="font-semibold">{industry.keyCase.company}:</span> {industry.keyCase.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            {/* Key Statistics */}
            {/* <Card className="col-span-1 md:col-span-1 lg:col-span-1">
              <CardHeader>
                <h3 className="text-2xl font-semibold">Key Statistics</h3>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {trendData.industryImpact.statistics.map((stat, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{stat.label}</TableCell>
                        <TableCell className="text-right">{stat.value || `${stat.before} → ${stat.after}`}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card> */}

          </div>
        </div>
        <TechTrendMasonry/>
      </section>
    );
    };

export default Curtations;