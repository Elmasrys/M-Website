import React from 'react';
import { FileText, MessageSquare, ClipboardCheck, Users, Briefcase, HeadphonesIcon } from 'lucide-react';

const useCases = [
  {
    icon: <FileText className="h-6 w-6 text-green-600" />,
    title: 'Document Processing',
    description: 'Automate document review, extraction, and processing across contracts, invoices, and reports.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-green-600" />,
    title: 'Customer Support',
    description: 'Deploy EVEs to handle customer inquiries, troubleshoot issues, and escalate complex problems.'
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-green-600" />,
    title: 'Compliance Monitoring',
    description: 'Continuously monitor operations for compliance with regulations and internal policies.'
  },
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: 'HR Operations',
    description: 'Streamline employee onboarding, benefits administration, and internal knowledge management.'
  },
  {
    icon: <Briefcase className="h-6 w-6 text-green-600" />,
    title: 'Sales Operations',
    description: 'Qualify leads, schedule meetings, and maintain CRM data with minimal human intervention.'
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6 text-green-600" />,
    title: 'IT Service Desk',
    description: 'Resolve common IT issues, reset passwords, and manage access requests automatically.'
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700">
            Enterprise Use Cases
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Maverika's Enterprise Virtual Employees can be deployed across various departments to automate complex workflows.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-green-100 bg-white shadow-md hover:shadow-lg hover:border-green-200 transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-green-100 flex items-center justify-center mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-green-100 bg-gradient-to-r from-green-50 to-green-100 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Use Case Development</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't see your specific use case? Our team of AI experts can work with you to develop custom EVEs tailored to your organization's unique needs and workflows.
            </p>
            <a 
              href="#contact" 
              className="mt-6 inline-flex items-center px-6 py-2 bg-white text-green-600 rounded-md border border-green-200 hover:border-green-300 transition-colors shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;