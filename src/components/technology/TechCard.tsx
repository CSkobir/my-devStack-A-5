import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Itech } from '../../types/techType';

interface TechCardProps {
  tech: Itech;
  isAdded: boolean;
  onSelectTech: (tech: Itech) => void;
}

const TechCard: React.FC<TechCardProps> = ({ tech, isAdded, onSelectTech }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center pt-6 px-6">
        <div>
          <img
            className="w-8 h-8 object-contain"
            src={tech.icon}
            alt={tech.name}
          />
        </div>
        {tech.badge && (
          <div className="badge badge-secondary badge-outline text-xs px-2.5 py-1">
            {tech.badge}
          </div>
        )}
      </div>
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold text-slate-800">{tech.name}</h2>
        <p className="text-slate-600 text-sm mb-2">{tech.description}</p>
        <div className="flex justify-between items-center text-xs text-slate-500 my-2">
          <span className="font-semibold px-2 py-0.5 bg-slate-100 rounded-md capitalize">{tech.category}</span>
          <span className="font-medium">{tech.difficulty}</span>
          <div className="flex items-center">
            <FaStar className="mr-1 text-amber-400" />
            <span className="font-semibold text-slate-700">{tech.rating}</span>
          </div>
        </div>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={() => !isAdded && onSelectTech(tech)}
            disabled={isAdded}
            className={`btn rounded-2xl w-full transition-all ${
              isAdded
                ? 'btn-disabled bg-slate-200 text-slate-400 border-0 cursor-not-allowed shadow-none'
                : 'btn-primary bg-black hover:bg-black-600 border-0 text-white shadow-sm active:scale-[0.98]'
            }`}
          >
            {isAdded ? 'Added to Stack' : 'Add to Stack'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
