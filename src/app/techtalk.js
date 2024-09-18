import React from 'react';
import Header from './components/header';
import Conferences from './components/conferences';
import Intro from './hero';
import FeatureSummaries from './components/FeatureSummaries';
import Trending from './Trending';

const TechTalkCentral = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <Header/> */}
      {/* Hero Section */}
      <Intro/>
      {/* Recent Conferences Section */}
      <Conferences/>
      {/* Featured Summaries Section */}
      <FeatureSummaries/>
      {/* Trending Topics */}
      <Trending/> 
      {/* Community Insights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Latest Discussions</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">The impact of AI on software development</a>
                  <p className="text-gray-600 text-sm">23 comments • 2 hours ago</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Quantum computing: hype or reality?</a>
                  <p className="text-gray-600 text-sm">17 comments • 5 hours ago</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {[1, 2].map((index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img src={`/api/placeholder/50/50`} alt={`Contributor ${index}`} className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-gray-600 text-sm">AI Researcher • 120 contributions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead in Tech</h2>
          <p className="mb-8">Get weekly digests of top tech conferences and trending topics</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-l-full text-gray-800 focus:outline-none"
              />
              <button className="bg-indigo-700 hover:bg-indigo-800 px-6 py-3 rounded-r-full transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">TechTalk Central</h4>
            <p>Empowering the tech community with knowledge and connections.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Conferences</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Summaries</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Trending Topics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Connect</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition">Twitter</a>
              <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
              <a href="#" className="hover:text-blue-400 transition">GitHub</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 TechTalk Central. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechTalkCentral;