'use client'
// components/DeveloperDebates.js
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const DebateCard = ({ title, description, votes, emoji }) => {
  const [localVotes, setLocalVotes] = useState(votes)
  const [gradient, setGradient] = useState('')

  useEffect(() => {
    const total = localVotes.for + localVotes.against
    const forPercentage = (localVotes.for / total) * 100
    setGradient(`linear-gradient(90deg, #4CAF50 ${forPercentage}%, #F44336 ${forPercentage}%)`)
  }, [localVotes])

  const handleVote = (type) => {
    setLocalVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }))
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{emoji}</span>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-between items-center">
          <button 
            className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition duration-300"
            onClick={() => handleVote('for')}
          >
            👍 {localVotes.for}
          </button>
          <button 
            className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition duration-300"
            onClick={() => handleVote('against')}
          >
            👎 {localVotes.against}
          </button>
        </div>
      </div>
      <div className="h-2" style={{ background: gradient }}></div>
    </motion.div>
  )
}

export default function DeveloperDebates() {
  const debates = [
    // {
    //   title: "Tabs vs Spaces",
    //   description: "The age-old debate continues. Which do you prefer for indentation?",
    //   votes: { for: 120, against: 80 },
    //   emoji: "🔣"
    // },
    {
      title: "Monolith vs Microservices",
      description: "Which architecture is better for scaling applications?",
      votes: { for: 50, against: 70 },
      emoji: "🏗️"
    },
    {
      title: "OOP vs Functional",
      description: "Which programming paradigm leads to better code?",
      votes: { for: 90, against: 110 },
      emoji: "🧠"
    },
    {
      title: "REST vs GraphQL",
      description: "Which API design approach is more efficient for modern apps?",
      votes: { for: 75, against: 85 },
      emoji: "🌐"
    }
  ]

  return (
    <section className="bg-gray-100 rounded-xl">
      <div className="text-4xl font-bold mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Hot Dev Debates 🔥</div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {debates.map((debate, index) => (
          <DebateCard key={index} {...debate} />
        ))}
      </div>
    </section>
  )
}