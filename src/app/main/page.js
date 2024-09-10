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
import Slogan from '../components/main/Slogan';
import UpcomingConferences from '../components/main/UpcomingConferences';

// const Header = () => (
//   <header className="bg-purple-600 text-white p-4">
//     <h1 className="text-2xl font-bold">DevInsights</h1>
//   </header>
// );


const DeveloperInsightsDashboard = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container grid gap-6 mx-auto pb-10 px-4">
    <Conferences/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="md:col-span-2 grid gap-5">
          <Slogan />
          <TrendAnalysis/>
        </div>
        
        <div className="md:col-span-1 grid gap-5">
            <DeveloperDebates />
            <UpcomingConferences/>
        </div>
      
      </div>
    </main>
  </div>
);

export default DeveloperInsightsDashboard;