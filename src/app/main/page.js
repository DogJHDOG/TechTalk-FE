import React from 'react';
import { TrendingUp, Calendar, Code, Users } from 'lucide-react';
import TrendAnalysis from '../components/TrendAnalysis';
import Conferences from '../components/conferences';
import DeveloperDebates from '../components/DeveloperDebates';
import Header from '../components/header';
import Slogan from '../components/main/Slogan';
import UpcomingConferences from '../components/main/UpcomingConferences';
    
const DeveloperInsightsDashboard = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container grid gap-6 mx-auto pb-10 py-2 px-4">
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