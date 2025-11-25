import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries, appointments, or emergency assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Hospital Location</h4>
                    <p className="text-slate-600 text-sm mt-1">123 Health Avenue<br/>Wellness City, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone Support</h4>
                    <p className="text-slate-600 text-sm mt-1">General: +1 (555) 012-3456</p>
                    <p className="text-red-500 font-semibold text-sm">Emergency: 911</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email Us</h4>
                    <p className="text-slate-600 text-sm mt-1">info@macaanehospital.com</p>
                    <p className="text-slate-600 text-sm">appointments@macaanehospital.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Working Hours</h4>
                    <p className="text-slate-600 text-sm mt-1">Mon - Fri: 8:00 AM - 9:00 PM</p>
                    <p className="text-slate-600 text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="bg-slate-200 h-64 rounded-2xl flex items-center justify-center text-slate-500 overflow-hidden relative">
              <img 
                src="https://picsum.photos/800/400?blur=2" 
                alt="Map Placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 bg-white/80 p-4 rounded-lg backdrop-blur-sm">
                <MapPin className="mx-auto mb-2 text-emerald-600" size={32} />
                <span className="font-bold text-slate-800">Interactive Map Integration</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                   <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                   <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                 <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                 <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-slate-600">
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                    <option>Billing Question</option>
                    <option>Careers</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                 <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition resize-none"></textarea>
               </div>

               <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-emerald-600 transition">
                 Send Message
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;