import React from 'react';
import { BrainCircuit, Workflow, Bot, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-green-600" />,
    title: 'Train Your EVEs',
    description: 'Upload your organization\'s data, processes, and knowledge base to train your Enterprise Virtual Employees.'
  },
  {
    icon: <Workflow className="h-8 w-8 text-green-600" />,
    title: 'Design Workflows',
    description: 'Use our intuitive workflow builder to create complex business processes for your EVEs to execute.'
  },
  {
    icon: <Bot className="h-8 w-8 text-green-600" />,
    title: 'Deploy & Monitor',
    description: 'Deploy your EVEs to production and monitor their performance with real-time analytics and insights.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-700">
            How Maverika Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Maverika is simple. Follow these steps to deploy your first Enterprise Virtual Employee.
          </p>
        </div>
        
        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-8 rounded-lg border border-green-100 bg-white shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center border border-green-200 z-10 shadow-md">
                      {step.icon}
                    </div>
                    <div className="ml-4 lg:hidden">
                      <span className="text-2xl font-bold text-green-600">Step {index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block mb-4">
                    <span className="text-2xl font-bold text-green-600">Step {index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex justify-end mt-4">
                      <ArrowRight className="h-6 w-6 text-green-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity gap-2 font-medium shadow-md"
          >
            Start Building Your EVE <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;