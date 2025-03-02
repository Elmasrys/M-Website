import React from 'react';
import { Cpu, Workflow, Database, Shield, Zap, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-6 w-6 text-green-600" />,
    title: 'AI-Powered Automation',
    description: 'Deploy intelligent agents that learn from your organization\'s data and automate complex workflows.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-green-600" />,
    title: 'Workflow Orchestration',
    description: 'Design, deploy, and monitor end-to-end business processes with our intuitive workflow builder.'
  },
  {
    icon: <Database className="h-6 w-6 text-green-600" />,
    title: 'Knowledge Integration',
    description: 'Connect your existing knowledge bases, documents, and systems to create a unified intelligence layer.'
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, role-based access controls, and comprehensive audit logs for all operations.'
  },
  {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months, with pre-built templates and no-code configuration options.'
  },
  {
    icon: <BarChart className="h-6 w-6 text-green-600" />,
    title: 'Performance Analytics',
    description: 'Track EVE performance, identify optimization opportunities, and measure ROI with detailed analytics.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
            Enterprise-Grade AI Capabilities
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Maverika provides a comprehensive suite of tools to deploy, manage, and optimize your Enterprise Virtual Employees.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-indigo-100 bg-white shadow-md hover:shadow-lg hover:border-indigo-200 transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;