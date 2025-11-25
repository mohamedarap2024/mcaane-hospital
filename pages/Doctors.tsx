import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Doctor } from '../types';

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', image: 'https://picsum.photos/400/400?random=1', availability: 'Mon, Wed, Fri' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'Neurologist', image: 'https://picsum.photos/400/400?random=2', availability: 'Tue, Thu, Sat' },
  { id: '3', name: 'Dr. Emily Williams', specialty: 'Pediatrician', image: 'https://picsum.photos/400/400?random=3', availability: 'Mon - Fri' },
  { id: '4', name: 'Dr. Robert Davis', specialty: 'Orthopedic Surgeon', image: 'https://picsum.photos/400/400?random=4', availability: 'Mon, Thu' },
  { id: '5', name: 'Dr. Jessica Brown', specialty: 'Dermatologist', image: 'https://picsum.photos/400/400?random=5', availability: 'Wed, Fri' },
  { id: '6', name: 'Dr. David Wilson', specialty: 'General Practitioner', image: 'https://picsum.photos/400/400?random=6', availability: 'Mon - Sat' },
];

const Doctors: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Specialists</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We have assembled a team of highly skilled and experienced medical professionals 
            to provide you with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col">
              <div className="aspect-w-1 aspect-h-1 w-full relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider bg-emerald-600 px-2 py-1 rounded-sm">
                    {doctor.specialty}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-yellow-700 text-xs font-bold">
                    <Star size={12} className="fill-current mr-1" />
                    4.9
                  </div>
                </div>
                
                <div className="space-y-3 mt-4 flex-1">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin size={16} className="mr-2 text-emerald-500" />
                    <span>Macaane Main Branch</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-800">Available:</span> {doctor.availability}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <button className="w-full py-2 bg-white border border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;