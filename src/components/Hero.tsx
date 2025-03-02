import React from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-indigo-50 to-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-100 to-transparent"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNFOEVBRjYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            <span className="block">Enterprise Virtual Employees</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-purple-700">
              Powered by AI
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Maverika is an AI-first platform that enables organizations to employ Enterprise Virtual Employees (EVEs)—AI agents capable of automating complex workflows with minimal human oversight.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium shadow-md"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-3 bg-white text-green-600 rounded-md border border-green-200 hover:border-green-300 transition-colors flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              How It Works
            </a>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="mt-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur opacity-75"></div>
          <div className="relative bg-white rounded-lg overflow-hidden border border-green-100 shadow-xl">
            <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Sparkles className="absolute -top-6 -right-6 h-8 w-8 text-green-500 animate-pulse" />
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Bot className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-xl font-semibold text-gray-900">Meet Your Enterprise Virtual Employee</div>
                  <div className="mt-2 text-gray-600">Automating complex workflows with minimal oversight</div>
                </div>
                <div className="mt-6 flex space-x-2">
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">AI-Powered</div>
                  <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">Autonomous</div>
                  <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">Adaptive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;