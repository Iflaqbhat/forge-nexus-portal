
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowUp, ArrowDown, ExternalLink, AlertCircle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChainSelector from "../components/ChainSelector";
import TransactionItem from "../components/TransactionItem";

// Mock data
const balanceHistory = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 380 },
  { name: "Wed", value: 800 },
  { name: "Thu", value: 650 },
  { name: "Fri", value: 900 },
  { name: "Sat", value: 750 },
  { name: "Sun", value: 1200 },
];

const tokenBalances = [
  { name: "SOL", amount: "54.32", value: "$4,321", change: "+5.2%", isPositive: true, logo: "S" },
  { name: "ETH", amount: "1.25", value: "$2,680", change: "-2.1%", isPositive: false, logo: "E" },
  { name: "BNB", amount: "12.5", value: "$1,860", change: "+1.8%", isPositive: true, logo: "B" },
  { name: "AVAX", amount: "78.1", value: "$1,250", change: "+3.7%", isPositive: true, logo: "A" },
];

const nftBalances = [
  { name: "CryptoMonkey #234", collection: "CryptoMonkeys", chain: "Solana", value: "$340", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-1_nhbupf.png" },
  { name: "PixelWizard", collection: "PixelMages", chain: "Ethereum", value: "$220", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-2_ci0fyj.png" },
  { name: "SpaceRacer #12", collection: "SpaceRacers", chain: "Solana", value: "$180", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-3_ugngfq.png" },
];

const transactions = [
  {
    id: "tx1",
    type: "bridge",
    sourceChain: "Solana",
    destinationChain: "Ethereum",
    asset: "SOL",
    amount: "5.2",
    status: "completed",
    timestamp: "2h ago",
  },
  {
    id: "tx2",
    type: "bridge",
    sourceChain: "Ethereum",
    destinationChain: "Solana",
    asset: "ETH",
    amount: "0.15",
    status: "pending",
    timestamp: "6h ago",
  },
  {
    id: "tx3",
    type: "nft-transfer",
    sourceChain: "Solana",
    destinationChain: "Polygon",
    asset: "CryptoMonkey #234",
    status: "completed",
    timestamp: "1d ago",
  },
  {
    id: "tx4",
    type: "message",
    sourceChain: "Arbitrum",
    destinationChain: "Optimism",
    status: "failed",
    timestamp: "2d ago",
  },
  {
    id: "tx5",
    type: "bridge",
    sourceChain: "Avalanche",
    destinationChain: "BNB Chain",
    asset: "AVAX",
    amount: "12.5",
    status: "completed",
    timestamp: "3d ago",
  },
];

const Dashboard = () => {
  const [selectedChain, setSelectedChain] = useState("All Chains");

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Manage your cross-chain assets and activities</p>
          </div>
          <div className="mt-4 lg:mt-0 flex items-center">
            <ChainSelector value={selectedChain} onChange={setSelectedChain} />
            <Button className="glow-button ml-4" asChild>
              <Link to="/bridge">
                Bridge Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,256.32</div>
              <div className="flex items-center mt-1 text-sm">
                <span className="flex items-center text-green-400 mr-2">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  2.5%
                </span>
                <span className="text-gray-400">Last 24h</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">132</div>
              <div className="flex items-center mt-1 text-sm">
                <span className="flex items-center text-green-400 mr-2">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12.5%
                </span>
                <span className="text-gray-400">Last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Gas Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$342.51</div>
              <div className="flex items-center mt-1 text-sm">
                <span className="flex items-center text-green-400 mr-2">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  8.3%
                </span>
                <span className="text-gray-400">vs. Traditional Methods</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Chains Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <div className="flex items-center mt-1 text-sm">
                <span className="flex items-center text-purple-400 mr-2">
                  <span className="h-2 w-2 bg-forge-purple rounded-full inline-block mr-1"></span>
                  3 Active
                </span>
                <span className="text-gray-400">Currently</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart and Assets */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card xl:col-span-2">
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
              <CardDescription>Your asset value over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={balanceHistory}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 30, 40, 0.8)',
                        borderColor: '#9b87f5',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#9b87f5" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Token Balances</CardTitle>
              <CardDescription>Your tokens across chains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tokenBalances.map((token, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-forge-purple/20 flex items-center justify-center mr-3">
                        <span className="text-forge-purple font-semibold">{token.logo}</span>
                      </div>
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-sm text-gray-400">{token.amount} {token.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div>{token.value}</div>
                      <div className={`text-sm ${token.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {token.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button variant="ghost" className="w-full text-forge-purple" asChild>
                  <Link to="/bridge">
                    Bridge tokens <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NFTs */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle>NFT Collection</CardTitle>
            <CardDescription>Your NFTs across chains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {nftBalances.map((nft, i) => (
                <div key={i} className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <div className="aspect-square w-full">
                    <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-medium">{nft.name}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-gray-400">{nft.collection}</span>
                      <span className="text-sm font-semibold">{nft.value}</span>
                    </div>
                    <div className="mt-2 inline-flex items-center text-xs text-forge-purple bg-forge-purple/10 px-2 py-1 rounded-full">
                      <span className="h-1.5 w-1.5 bg-forge-purple rounded-full mr-1"></span>
                      {nft.chain}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center justify-center border-2 border-dashed border-white/10 rounded-xl aspect-square hover:border-forge-purple/50 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-forge-purple/10 flex items-center justify-center mx-auto mb-2">
                    <ArrowRight className="h-6 w-6 text-forge-purple" />
                  </div>
                  <p className="text-sm font-medium text-gray-400">Bridge an NFT</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest cross-chain activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <TransactionItem key={tx.id} transaction={tx} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/10 pt-4">
            <Button variant="outline" className="border-forge-purple/50 text-forge-purple w-full">
              View all transactions <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
