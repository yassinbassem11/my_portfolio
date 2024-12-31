import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionSection = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-none w-full">
    <button
      onClick={onClick}
      className="w-full py-5 px-6 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
    >
      <span className="font-semibold text-gray-800">{title}</span>
      <ChevronDown
        className={`transform transition-transform duration-300 text-gray-500 ${
          isOpen ? 'rotate-180' : ''
        }`}
        size={20}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="px-6 pb-6 text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

const ArchivePage = () => {
  const papers = [
    {
      title: "Machine Learning in Healthcare: A Systematic Review",
      year: "2024",
      sections: [
        {
          title: "Context",
          content: "Healthcare systems worldwide are facing increasing pressure to improve patient outcomes while reducing costs. Machine learning offers promising solutions to these challenges by enabling more accurate diagnosis, personalized treatment plans, and efficient resource allocation."
        },
        {
          title: "What is the paper about",
          content: "This paper provides a comprehensive review of machine learning applications in healthcare settings, analyzing over 500 studies from the past decade. It examines the effectiveness of various ML algorithms across different medical domains, including diagnosis, prognosis, and treatment planning."
        },
        {
          title: "Key Findings",
          content: "The review identified deep learning and random forests as the most commonly used algorithms, with particularly strong performance in medical imaging and electronic health record analysis. Success rates varied significantly based on data quality and quantity."
        }
      ]
    },
    {
      title: "Quantum Computing: Breaking Through Classical Limitations",
      year: "2023",
      sections: [
        {
          title: "Context",
          content: "As classical computing approaches its physical limits, quantum computing emerges as a revolutionary paradigm that could solve previously intractable problems in optimization, cryptography, and molecular simulation."
        },
        {
          title: "What is the paper about",
          content: "This research explores recent breakthroughs in quantum computing architecture, focusing on error correction methods and scalability challenges. It presents novel approaches to qubit stability and proposes solutions for quantum decoherence."
        },
        {
          title: "Methodology",
          content: "The study employed a combination of theoretical analysis and experimental validation using IBM's quantum computers. Multiple quantum algorithms were tested across different problem domains to assess performance and error rates."
        }
      ]
    }
  ];

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (paperIndex, sectionIndex) => {
    setOpenSections(prev => {
      const key = `${paperIndex}-${sectionIndex}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/api/placeholder/1200/400"
            alt="Archive Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-white">Research Archive</h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto px-4">
                Explore our collection of cutting-edge research papers in technology and healthcare
              </p>
            </div>
          </div>
        </div>

        {/* Papers Section */}
        <div className="space-y-8">
          {papers.map((paper, paperIndex) => (
            <div
              key={paperIndex}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-2px]"
            >
              <div className="p-8 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{paper.title}</h2>
                  <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {paper.year}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {paper.sections.map((section, sectionIndex) => (
                  <AccordionSection
                    key={sectionIndex}
                    title={section.title}
                    content={section.content}
                    isOpen={openSections[`${paperIndex}-${sectionIndex}`]}
                    onClick={() => toggleSection(paperIndex, sectionIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;