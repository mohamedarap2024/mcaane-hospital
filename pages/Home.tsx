import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Activity, Users, Clock, ShieldCheck, Microscope } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', patients: 400 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 550 },
  { name: 'Apr', patients: 450 },
  { name: 'May', patients: 600 },
  { name: 'Jun', patients: 700 },
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Advanced Care for <br/>
              <span className="text-emerald-400">Better Living</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Macaane Hospital combines state-of-the-art technology with compassionate care. 
              Our world-class specialists are dedicated to your health and well-being every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/20">
                Book an Appointment
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border-2 border-slate-700 hover:bg-slate-800 transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-10 -mt-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-600 p-8 rounded-xl shadow-xl text-white transform hover:-translate-y-1 transition">
              <Clock className="mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-emerald-100 mb-4">We are here when you need us.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sat - Sun</span> <span>9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between font-bold mt-2"><span>Emergency</span> <span>24/7 Open</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl text-slate-800 transform hover:-translate-y-1 transition">
              <Users className="mb-4 text-emerald-600" size={32} />
              <h3 className="text-xl font-bold mb-2">Find a Doctor</h3>
              <p className="text-slate-600 mb-6">Browse our directory of specialist doctors to find the right care for you.</p>
              <Link to="/doctors" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                View Team <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl shadow-xl text-white transform hover:-translate-y-1 transition">
              <Activity className="mb-4 text-emerald-400" size={32} />
              <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
              <p className="text-slate-300 mb-6">Immediate medical attention for critical conditions. Call us now.</p>
              <a href="tel:911" className="text-emerald-400 font-semibold hover:text-emerald-300 text-lg">
                Call (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Recharts) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving Our Community with Excellence</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We take pride in our ability to serve a growing number of patients each month with consistent high-quality care.
                Our commitment to continuous improvement ensures that every patient receives the best possible outcome.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">15k+</h4>
                  <p className="text-slate-500">Happy Patients</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">150+</h4>
                  <p className="text-slate-500">Expert Doctors</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">24/7</h4>
                  <p className="text-slate-500">Emergency Support</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-slate-900 mb-1">50+</h4>
                  <p className="text-slate-500">Specialties</p>
                </div>
              </div>
            </div>
            <div className="h-80 w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner">
               <h3 className="text-lg font-semibold text-slate-700 mb-4">Monthly Patient Admissions</h3>
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}} 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="patients" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Medical Departments</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive healthcare services designed to meet the diverse needs of our patients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Cardiology', desc: 'Expert heart care and surgery.' },
              { icon: Microscope, title: 'Laboratory', desc: 'Advanced diagnostic testing.' },
              { icon: ShieldCheck, title: 'Surgery', desc: 'Minimally invasive procedures.' },
              { icon: Users, title: 'Pediatrics', desc: 'Compassionate care for kids.' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition group">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-emerald-600 font-semibold hover:text-emerald-700">View All Departments &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white" id="book">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Visit?</h2>
            <p className="text-slate-600">Schedule your appointment online and skip the waiting line.</p>
          </div>
          <AppointmentForm />
        </div>
      </section>

    </div>
  );
};

export default Home;