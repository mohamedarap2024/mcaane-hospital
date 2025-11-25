import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import { AppointmentType } from '../types';

const AppointmentForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    type: AppointmentType.Consultation,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Appointment Data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="text-emerald-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Booking Request Received!</h3>
        <p className="text-slate-600 mb-6">
          Thank you, {formData.name}. We have received your appointment request. <br/>
          Our team will contact you at {formData.phone} shortly to confirm.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', date: '', department: '', type: AppointmentType.Consultation, message: '' }); }}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Calendar className="text-emerald-600" />
        Book an Appointment
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-slate-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
          <select
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-slate-600"
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="General">General Medicine</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Appointment Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition text-slate-600"
          >
            {Object.values(AppointmentType).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-1">Additional Message</label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 text-slate-400" size={18} />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition resize-none"
            placeholder="Briefly describe your symptoms or reason for visit..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default AppointmentForm;