const FeaatueSummaries = () => {
    return(
    <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Conference Summaries</h2>
        <div className="grid md:grid-cols-2 gap-8">
            {[
            { type: "Video Summary", icon: "🎥" },
            { type: "Presentation Recap", icon: "📊" },
            ].map((summary) => (
            <div key={summary.type} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{summary.icon}</span>
                <h3 className="text-xl font-semibold">{summary.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">Get quick insights from the latest tech conferences.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Watch Now →</a>
            </div>
            ))}
        </div>
        </div>
    </section>
    )
}
export default FeaatueSummaries;