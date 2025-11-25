import React from 'react';
import { Heart, Brain, Baby, Bone, Eye, Stethoscope, Pill, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { id: '1', title: 'Cardiology', description: 'Comprehensive cardiac care including diagnostics, interventional cardiology, and rehabilitation.', icon: Heart },
    { id: '2', title: 'Neurology', description: 'Advanced diagnosis and treatment for disorders of the brain, spinal cord, and nervous system.', icon: Brain },
    { id: '3', title: 'Pediatrics', description: 'Dedicated healthcare for infants, children, and adolescents in a child-friendly environment.', icon: Baby },
    { id: '4', title: 'Orthopedics', description: 'Expert care for bones, joints, ligaments, tendons, and muscles including joint replacement.', icon: Bone },
    { id: '5', title: 'Ophthalmology', description: 'Complete eye care services ranging from routine exams to complex surgical procedures.', icon: Eye },
    { id: '6', title: 'General Medicine', description: 'Primary care services for the prevention, diagnosis, and treatment of adult diseases.', icon: Stethoscope },
    { id: '7', title: 'Pharmacy', description: '24/7 in-house pharmacy providing prescription medications and expert pharmaceutical advice.', icon: Pill },
    { id: '8', title: 'Emergency', description: 'Round-the-clock emergency services equipped to handle all medical crises.', icon: Activity },
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Medical Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Macaane Hospital offers a wide range of specialized medical services, 
            supported by cutting-edge technology and a team of dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-200 group">
              <div className="p-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <a href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Learn more &rarr;</a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Specialized Care?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our team of specialists is ready to help you on your path to recovery. 
            Contact us today to schedule a consultation.
          </p>
          <a href="/#/contact" className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;