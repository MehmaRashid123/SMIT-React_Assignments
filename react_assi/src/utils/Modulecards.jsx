import React from 'react';
import Button from './Button';

const Modulecards = ({ title, subtitle, description, topics, totalTopics }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl max-w-sm overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      
      {/* Top gradient strip */}
      <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"></div>
      
      {/* Card content */}
      <div className="flex flex-col gap-4 p-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <h3 className="text-lg font-semibold text-white/90">{subtitle}</h3>
        <p className="text-white/70 text-sm">{description}</p>

        <ul className=" text-white/70 space-y-1 mt-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-sm">{topic}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-4">
          <span className="font-custom text-sm w-16 bg-white/30 rounded-lg text-white/90">{totalTopics} Topics</span>
          <Button value='Get start' />
        </div>
      </div>
    </div>
  );
};

export default Modulecards;
