const Trending = () => {

    return(
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Tech Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["#ArtificialIntelligence", "#Blockchain", "#CloudComputing", "#Cybersecurity", "#5G", "#IoT"].map((topic) => (
              <a key={topic} href="#" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 transition">
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>
    )

}
export default Trending;