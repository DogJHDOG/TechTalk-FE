
const Header = () =>{
    return(
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/telktalks-final3.png" alt="TechTalk Central Logo" className="h-16" />
          <div className="flex-grow mx-8 hidden md:block">
            <input
              type="text"
              placeholder="Search conferences, speakers, topics..."
              className="w-full p-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Conferences</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Trends</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Community</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Sign In</button>
          </nav>
        </div>
      </header>
    )
}

export default Header;