import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Site Map</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Trends</a></li>
              <li><a href="#" className="hover:text-gray-300">Conferences</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with the latest trends</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-grow p-2 rounded-l-lg" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;