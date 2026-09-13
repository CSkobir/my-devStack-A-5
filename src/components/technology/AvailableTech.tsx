import React from "react";
import type { Itech } from "../../types/techType";
import TechCard from "./TechCard";

interface AvailableTechProps {
  techs: Itech[];
  selectedTechs: Itech[];
  onSelectTech: (tech: Itech) => void;
}

const AvailableTech: React.FC<AvailableTechProps> = ({
  techs,
  selectedTechs,
  onSelectTech,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {techs.map((tech) => {
        const isAdded = selectedTechs.some((item) => item.id === tech.id);
        return (
          <TechCard
            key={tech.id}
            tech={tech}
            isAdded={isAdded}
            onSelectTech={onSelectTech}
          />
        );
      })}
    </div>
  );
};

export default AvailableTech;

