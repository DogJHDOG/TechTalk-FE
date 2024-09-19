'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ThumbsUp, MessageSquare, Share2, Clock, Users } from 'lucide-react';
import ImageCarousel from '../components/imageCarousel';

const TechTalksMainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hotTopics = [
    { id: 1, title: "AI in Web Development", participants: 1234, proRatio: 65 },
    { id: 2, title: "Future of React", participants: 987, proRatio: 72 },
    { id: 3, title: "Blockchain in FinTech", participants: 756, proRatio: 58 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotTopics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotTopics.length) % hotTopics.length);
  };

  const myDiscussions = [
    { id: 1, title: "GraphQL vs REST", date: "2023-09-10" },
    { id: 2, title: "Micro Frontends", date: "2023-09-05" },
    { id: 3, title: "Serverless Architecture", date: "2023-08-28" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-grow">
        <div className="mb-32 mx-auto">
          {/* Hot Topics Section */}
          <ImageCarousel/>
          <section className="relative -mt-32 mb-16 m-4 p-8 rounded-xl bg-white z-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Hot Topics</h2>
            <div className="relative">
              {/* <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-100">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button> */}
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${hotTopics.length * 100}%` }}>
                  {hotTopics.map((topic) => (
                    <div key={topic.id} className="w-full flex-shrink-0 p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white" style={{ width: `${100 / hotTopics.length}%` }}>
                      <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>
                      <p className="mb-4 flex items-center"><Users className="w-5 h-5 mr-2" /> {topic.participants} participants</p>
                      <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-2">
                        <div className="bg-white h-3 rounded-full" style={{ width: `${topic.proRatio}%` }}></div>
                      </div>
                      <p className="text-sm">Pro: {topic.proRatio}% / Con: {100 - topic.proRatio}%</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-100">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button> */}
            </div>
            <div className="flex flex-wrap justify-center mt-6">
              {['#AI', '#WebDev', '#React', '#Blockchain', '#Cloud'].map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300 transition duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Live Discussions Section */}
          <section className="mb-16 m-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Live Discussions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-xl">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">LIVE</span>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Serverless Architecture: Pros and Cons</h3>
                  <p className="text-gray-600 mb-3 flex items-center"><Users className="w-4 h-4 mr-2" /> 56 participants</p>
                  <p className="text-sm text-gray-500 flex items-center"><Clock className="w-4 h-4 mr-2" /> 45 minutes</p>
                </div>
              ))}
            </div>
          </section>

          {/* Discussion Detail Section */}
          <section className="mb-16 m-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Discussion: The Future of JavaScript</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">The Future of JavaScript</h3>
                  <p className="text-sm text-gray-500 mt-1">Started 2 hours ago</p>
                </div>
                <div className="w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">60% Pro</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="bg-gray-100 p-6 rounded-xl h-64 overflow-y-auto mb-4">
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800">User123:</p>
                      <p className="bg-white p-3 rounded-lg shadow mt-1">I think TypeScript will become the standard in the next few years.</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800">DevGuru:</p>
                      <p className="bg-white p-3 rounded-lg shadow mt-1">While TypeScript is great, pure JavaScript is evolving rapidly too!</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input type="text" placeholder="Type your message..." className="flex-grow p-3 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-r-xl hover:bg-blue-600 transition duration-300">Send</button>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="bg-gray-100 p-6 rounded-xl mb-6">
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Vote</h4>
                    <div className="flex justify-between">
                      <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">Pro</button>
                      <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">Con</button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Related Resources</h4>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">JavaScript 2023 and Beyond</a></li>
                      <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">The Rise of TypeScript</a></li>
                      <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">Web Assembly: A Game Changer?</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Banner */}
          <section className="mb-16 m-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Live Event: Tech Talks Conference 2023</h2>
              <p className="mb-6 text-lg">Join us for three days of cutting-edge tech discussions and networking!</p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
                Join Now
              </button>
            </div>
          </section>

          {/* Archive Section */}
          <section className='m-4'>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Discussion Archive</h2>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                View All
              </button>
            </div>
            <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">The Impact of AI on Software Testing</h3>
                  <p className="text-sm text-gray-600 mb-3">Date: August 15, 2023</p>
                  <p className="text-sm text-gray-500 mb-4">Participants: 1,234</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center"><ThumbsUp className="w-4 h-4 mr-1" /> 256</span>
                    <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1" /> 89</span>
                    <span className="flex items-center"><Share2 className="w-4 h-4 mr-1" /> 45</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* My Discussions Archive (Sticky Sidebar) */}
      <div className="w-80 bg-white p-6 shadow-lg sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">My Discussions</h2>
        {myDiscussions.map((discussion) => (
          <div key={discussion.id} className="mb-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{discussion.title}</h3>
            <p className="text-sm text-gray-600">{discussion.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTalksMainPage;