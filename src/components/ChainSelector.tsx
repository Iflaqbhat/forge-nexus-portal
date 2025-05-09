
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const chains = [
  {
    value: "all",
    label: "All Chains",
  },
  {
    value: "solana",
    label: "Solana",
    color: "#14F195",
  },
  {
    value: "ethereum",
    label: "Ethereum",
    color: "#627EEA",
  },
  {
    value: "binance",
    label: "BNB Chain",
    color: "#F0B90B",
  },
  {
    value: "avalanche",
    label: "Avalanche",
    color: "#E84142",
  },
  {
    value: "polygon",
    label: "Polygon",
    color: "#8247E5",
  },
];

interface ChainSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const ChainSelector: React.FC<ChainSelectorProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  
  const selectedChain = chains.find(chain => chain.value === value) || chains[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-white/10 bg-card/50"
        >
          <div className="flex items-center">
            {selectedChain.color && (
              <div 
                className="h-4 w-4 rounded-full mr-2"
                style={{ backgroundColor: selectedChain.color }}
              />
            )}
            {selectedChain.label}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search chains..." />
          <CommandEmpty>No chain found.</CommandEmpty>
          <CommandGroup>
            {chains.map((chain) => (
              <CommandItem
                key={chain.value}
                value={chain.value}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex items-center">
                  {chain.color && (
                    <div 
                      className="h-4 w-4 rounded-full mr-2"
                      style={{ backgroundColor: chain.color }}
                    />
                  )}
                  {chain.label}
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === chain.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ChainSelector;
