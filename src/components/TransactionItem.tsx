
import React from "react";
import { ArrowRight, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionItemProps {
  transaction: {
    id: string;
    type: "bridge" | "nft-transfer" | "message";
    sourceChain: string;
    destinationChain: string;
    asset?: string;
    amount?: string;
    status: "completed" | "pending" | "failed";
    timestamp: string;
  };
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const getStatusIcon = () => {
    switch (transaction.status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-amber-500 animate-pulse" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getTypeTitle = () => {
    switch (transaction.type) {
      case "bridge":
        return "Token Bridge";
      case "nft-transfer":
        return "NFT Transfer";
      case "message":
        return "Cross-Chain Message";
    }
  };

  const getTransactionDetails = () => {
    if (transaction.type === "bridge" && transaction.asset && transaction.amount) {
      return `${transaction.amount} ${transaction.asset}`;
    } else if (transaction.type === "nft-transfer" && transaction.asset) {
      return transaction.asset;
    } else {
      return "Message Data";
    }
  };

  return (
    <div className="glass-card p-4 rounded-lg hover:bg-card/70 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center mr-3",
            transaction.status === "completed" ? "bg-green-500/20" :
            transaction.status === "pending" ? "bg-amber-500/20" : "bg-red-500/20"
          )}>
            {getStatusIcon()}
          </div>
          <div>
            <div className="font-medium">{getTypeTitle()}</div>
            <div className="text-sm text-gray-400">{getTransactionDetails()}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center text-sm">
            <span className="text-gray-400 mr-1">{transaction.sourceChain}</span>
            <ArrowRight className="h-3 w-3 mx-1 text-forge-purple" />
            <span className="text-gray-400">{transaction.destinationChain}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {transaction.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
