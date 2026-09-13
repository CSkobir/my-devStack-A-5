import React from "react";
import { FaTimes } from "react-icons/fa";
import type { Itech } from "../../types/techType";

interface SelectedTechProps {
  selectedTechs: Itech[];
  onRemoveTech: (id: string) => void;
  onRemoveAll: () => void;
}

const SelectedTech: React.FC<SelectedTechProps> = ({
  selectedTechs,
  onRemoveTech,
  onRemoveAll,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md w-80 sm:w-96">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-sm font-medium text-slate-400 mt-1">
          {selectedTechs.length} Technology Selected
        </p>
      </div>

      {selectedTechs.length === 0 ? (
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-400 font-medium my-6">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3 my-6 max-h-[380px] overflow-y-auto pr-1">
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-xs text-slate-400 capitalize">
                    {tech.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemoveTech(tech.id)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-100"
                title={`Remove ${tech.name}`}
                aria-label={`Remove ${tech.name}`}
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTechs.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-2 py-3 px-4 rounded-2xl border border-red-300 text-red-500 hover:bg-red-50 font-bold transition-all shadow-2xs text-base active:scale-[0.99]"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedTech;