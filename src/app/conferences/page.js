'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, MapPin, Moon, Sun, Mic, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

// Assume we have these imports from a UI library like shadcn/ui

// Mock data for conferences
const conferences = [
  {
    id: 1,
    title: 'AI Summit 2024',
    date: '2024-10-15',
    location: 'San Francisco, USA',
    summary: 'Exploring the latest advancements in artificial intelligence and machine learning.',
    image: '/api/placeholder/300/200'
  },
  // ... more conference objects
];

const ConferenceListPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedConference, setSelectedConference] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openPopup = (conference) => {
    setSelectedConference(conference);
  };

  const closePopup = () => {
    setSelectedConference(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`container mx-auto p-4 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6">
        <Button onClick={toggleDarkMode} variant="ghost">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Search Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search conferences..."
            className="w-full p-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </motion.div>

      {/* Filter and Category Area */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6 flex flex-wrap gap-4"
      >
        <select className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <option>All Regions</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia</option>
        </select>
        <select className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <option>All Topics</option>
          <option>AI</option>
          <option>Cloud</option>
          <option>Database</option>
        </select>
        <input type="date" className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white" />
        <select className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white">
          <option>Sort by</option>
          <option>Date</option>
          <option>Popularity</option>
        </select>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 flex space-x-4 border-b dark:border-gray-700"
      >
        <Button variant="link" className="py-2 px-4 border-b-2 border-blue-500">All</Button>
        <Button variant="link" className="py-2 px-4">AI</Button>
        <Button variant="link" className="py-2 px-4">Cloud</Button>
        <Button variant="link" className="py-2 px-4">Database</Button>
      </motion.div>

      {/* Conference List */}
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-64"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Mic className="h-12 w-12 text-blue-500" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {conferences.map((conference) => (
              <motion.div
                key={conference.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="overflow-hidden">
                  <img src={conference.image} alt={conference.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <CardTitle>{conference.title}</CardTitle>
                    <CardDescription className="flex items-center mt-2">
                      <Calendar size={16} className="mr-2" />
                      {conference.date}
                    </CardDescription>
                    <CardDescription className="flex items-center mt-2">
                      <MapPin size={16} className="mr-2" />
                      {conference.location}
                    </CardDescription>
                    <p className="text-sm mt-2">{conference.summary}</p>
                    <Button
                      onClick={() => openPopup(conference)}
                      className="mt-4 w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {selectedConference && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            >
              <h2 className="text-2xl font-bold mb-4">{selectedConference.title}</h2>
              <img src={selectedConference.image} alt={selectedConference.title} className="w-full h-64 object-cover mb-4 rounded" />
              <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center">
                <Calendar size={16} className="mr-2" />
                {selectedConference.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                <MapPin size={16} className="mr-2" />
                {selectedConference.location}
              </p>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{selectedConference.summary}</p>
              <div className="flex justify-between">
                <Button variant="default">Register Now</Button>
                <Button variant="outline" onClick={closePopup}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ConferenceListPage;