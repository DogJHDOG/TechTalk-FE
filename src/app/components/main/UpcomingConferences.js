
// import { Calendar } from '@/components/ui/calendar';
import { CalendarCheck, Users } from 'lucide-react';
import React from 'react';

const ConferenceCard = ({ name, date, attendees }) => (
    <div className="bg-white rounded-lg shadow flex items-top overflow-hidden">
      <CalendarCheck className="mt-4 ml-4 text-purple-600" />
      <div className='py-4 pl-2'>
        <h4 className="font-bold text-black">{name}</h4>
        <p className="text-sm text-gray-600">{date}</p>
        <p className="text-sm text-gray-600">{attendees} attendees</p>
      </div>
      <img src='/toss-slash24.jpg' className='items-right w-1/2'></img>
    </div>
  );
  
const UpcomingConferences = () => {

    return(
    <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center"><Users className="mr-2" /> Upcoming Conferences</h3>
      <div className="space-y-4">
        <ConferenceCard name="ReactCon 2024" date="May 15-17, 2024" attendees="5000+" />
        <ConferenceCard name="PyCon 2024" date="June 10-12, 2024" attendees="3000+" />
      </div>
    </div>
    );

}

export default UpcomingConferences;