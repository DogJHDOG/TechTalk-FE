// // pages/index.js
// import Head from 'next/head'
// import DeveloperDebates from './components/DeveloperDebates'
// import TrendAnalysis from './components/TrendAnalysis'

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <main className="p-20">
//         <div className="flex flex-col lg:flex-row gap-4">
//           <div className="lg:w-2/3">  
//             <div className="lg:w-full lg:h-80 bg-gray-100">
//                 <TrendAnalysis />
//                 <div className='mt-5 lg:w-full lg:h-16 bg-gray-100 rounded-xl'></div>            
//             </div>

//           </div>
//           <div className="lg:w-1/3 lg:mb-0 mb-8 bg-gray-100">
//             <DeveloperDebates />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

import React from 'react';
import { TrendingUp, Calendar, Code, Users } from 'lucide-react';
import TrendAnalysis from '../components/TrendAnalysis';
import Conferences from '../components/conferences';
import DeveloperDebates from '../components/DeveloperDebates';
import Header from '../components/header';

// const Header = () => (
//   <header className="bg-purple-600 text-white p-4">
//     <h1 className="text-2xl font-bold">DevInsights</h1>
//   </header>
// );

const Slogan = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
    <div className="flex-1">
      <h2 className="text-3xl font-bold mb-2">Discover Tomorrow’s Technology, Today</h2>
      <p className="text-gray-600">Explore Trends, Share Insights, Drive Innovation</p>
      <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">Get Started</button>
    </div>
    <div className="hidden md:block">
      {/* <img src="/api/placeholder/300/300" alt="AI Time Management" className="rounded-full" /> */}
    </div>
  </div>
);


const DebateCard = ({ title, votes }) => {
  return(
    <div className="bg-white p-4 rounded-lg shadow">
        <h4 className="font-bold mb-2">{title}</h4>
        <div className="flex justify-between text-sm">
        <span>For: {votes.for}</span>
        <span>Against: {votes.against}</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
            className="h-full bg-purple-600" 
            style={{width: `${(votes.for / (votes.for + votes.against)) * 100}%`}}
        ></div>
        </div>
    </div>
  )
};

const Debates = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4 flex items-center"><Code className="mr-2" /> Hot Debates</h3>
    <div className="space-y-4">
      <DebateCard title="Tabs vs Spaces" votes={{for: 120, against: 80}} />
      <DebateCard title="OOP vs Functional" votes={{for: 90, against: 110}} />
      <DebateCard title="OOP vs Functional" votes={{for: 90, against: 110}} />
    </div>
  </div>
);

const ConferenceCard = ({ name, date, attendees }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center">
    <Calendar className="mr-4 text-purple-600" />
    <div>
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-sm text-gray-600">{attendees} attendees</p>
    </div>
  </div>
);

const UpcomingConferences = () => (
  <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-4 flex items-center"><Users className="mr-2" /> Upcoming Conferences</h3>
    <div className="space-y-4">
      <ConferenceCard name="ReactCon 2024" date="May 15-17, 2024" attendees="5000+" />
      <ConferenceCard name="PyCon 2024" date="June 10-12, 2024" attendees="3000+" />
    </div>
  </div>
);

const DeveloperInsightsDashboard = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container grid gap-6 mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="md:col-span-2 grid gap-5">
          <Slogan />
          <TrendAnalysis/>
        </div>
        
        <div className="md:col-span-1 grid gap-5">
            <DeveloperDebates />
            <UpcomingConferences />
        </div>
      
      </div>
      <Conferences/>
    </main>
  </div>
);

export default DeveloperInsightsDashboard;