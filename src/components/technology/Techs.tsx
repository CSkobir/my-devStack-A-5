import { use, useState, useEffect } from "react";
import type { Itech } from "../../types/techType";
import AvailableTech from "./AvailableTech";
import SelectedTech from "./SelectedTech";
import { FaCheckCircle, FaInfoCircle, FaTrashAlt } from "react-icons/fa";

interface TechsProps {
  techsPromise: Promise<Itech[]>;
}

interface ToastState {
  message: string;
  type: "add" | "remove" | "clear";
}

const Techs = ({ techsPromise }: TechsProps) => {
  const techs = use(techsPromise);
  const [selectedTechs, setSelectedTechs] = useState<Itech[]>([]);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSelectTech = (tech: Itech) => {
    if (selectedTechs.some((t) => t.id === tech.id)) return;
    setSelectedTechs((prev) => [...prev, tech]);
    setToast({
      message: `${tech.name} added to your stack!`,
      type: "add",
    });
  };

  const handleRemoveTech = (id: string) => {
    const techToRemove = selectedTechs.find((t) => t.id === id);
    setSelectedTechs((prev) => prev.filter((t) => t.id !== id));
    if (techToRemove) {
      setToast({
        message: `${techToRemove.name} removed from your stack.`,
        type: "remove",
      });
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    setToast({
      message: "All technologies removed from your stack.",
      type: "clear",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in transition-all">
          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-medium text-white ${
              toast.type === "add"
                ? "bg-slate-900 border-slate-700"
                : toast.type === "remove"
                ? "bg-slate-900 border-amber-600/50"
                : "bg-slate-900 border-red-600/50"
            }`}
          >
            {toast.type === "add" && (
              <FaCheckCircle className="text-emerald-400 w-5 h-5 flex-shrink-0" />
            )}
            {toast.type === "remove" && (
              <FaInfoCircle className="text-amber-400 w-5 h-5 flex-shrink-0" />
            )}
            {toast.type === "clear" && (
              <FaTrashAlt className="text-red-400 w-5 h-5 flex-shrink-0" />
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-slate-400 mt-1">
          Pick technologies to build your ideal custom stack.
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 items-start justify-between">
        <div className="flex-1 w-full">
          <AvailableTech
            techs={techs}
            selectedTechs={selectedTechs}
            onSelectTech={handleSelectTech}
          />
        </div>
        <div className="sticky top-6 flex-shrink-0 w-full lg:w-auto flex justify-center">
          <SelectedTech
            selectedTechs={selectedTechs}
            onRemoveTech={handleRemoveTech}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>
    </div>
  );
};

export default Techs;

