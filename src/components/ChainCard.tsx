
import React from "react";
import { cn } from "@/lib/utils";

interface ChainCardProps {
  chain: {
    id: string;
    name: string;
    icon: string;
    color: string;
  };
  selected: boolean;
  onClick: () => void;
}

const ChainCard: React.FC<ChainCardProps> = ({ chain, selected, onClick }) => {
  return (
    <div
      className={cn(
        "glass-card p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3",
        selected
          ? "border-forge-purple shadow-md scale-[1.02]"
          : "border-white/10 hover:border-white/20"
      )}
      onClick={onClick}
    >
      <div 
        className="h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"
        style={{ backgroundColor: chain.color }}
      >
        {chain.icon}
      </div>
      <span className="font-medium">{chain.name}</span>
      {selected && (
        <div className="ml-auto h-2 w-2 rounded-full bg-forge-purple"></div>
      )}
    </div>
  );
};

export default ChainCard;
