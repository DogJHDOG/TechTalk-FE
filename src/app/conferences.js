
const Conferences = () => {
    return(
    <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-3xl font-bold text-center mb-12">Recent Tech Conferences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "SLASH - 24", date: "June 15-17, 2024", location: "San Francisco, CA",imageURL : '/toss-slash24.jpg' },
              { name: "WOOWACON - 2023", date: "July 22-24, 2024", location: "London, UK", imageURL : '/wowacon2023.png' },
              { name: "WOOWACON - 2022", date: "August 5-7, 2024", location: "Tokyo, Japan" },
            ].map((conf) => (
              <div key={conf.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={conf.imageURL ? conf.imageURL : '/wowacon2022.png' } alt={conf.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-gray-800 text-xl font-semibold mb-2">{conf.name}</h3>
                  <p className="text-gray-600 mb-4">{conf.date}</p>
                  <p className="text-gray-600 mb-4">{conf.location}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">View Details →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              View All Conferences
            </button>
          </div>
        </div>
    </section>
    )
}

export default Conferences;