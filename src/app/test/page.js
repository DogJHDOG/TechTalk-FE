// pages/index.js
import Head from 'next/head'
import DeveloperDebates from './components/DeveloperDebates'
import TrendAnalysis from './components/TrendAnalysis'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Dev Trends & Debates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 pr-20 pl-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Dev Trends & Debates</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:h-1/3 lg:pr-8">
            <TrendAnalysis />
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <DeveloperDebates />
          </div>
        </div>
      </main>
    </div>
  )
}
