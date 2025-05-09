
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDown, ArrowRight, ArrowUp, ChevronsUpDown, Info, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import ChainCard from "@/components/ChainCard";

// Mock data
const chains = [
  { id: "solana", name: "Solana", icon: "S", color: "#14F195" },
  { id: "ethereum", name: "Ethereum", icon: "E", color: "#627EEA" },
  { id: "binance", name: "BNB Chain", icon: "B", color: "#F0B90B" },
  { id: "avalanche", name: "Avalanche", icon: "A", color: "#E84142" },
  { id: "polygon", name: "Polygon", icon: "P", color: "#8247E5" },
  { id: "arbitrum", name: "Arbitrum", icon: "AR", color: "#28A0F0" },
];

const tokens = [
  { id: "sol", name: "SOL", balance: "54.32" },
  { id: "eth", name: "ETH", balance: "1.25" },
  { id: "bnb", name: "BNB", balance: "12.5" },
  { id: "avax", name: "AVAX", balance: "78.1" },
  { id: "matic", name: "MATIC", balance: "342.6" },
  { id: "usdc", name: "USDC", balance: "512.34" },
];

const nfts = [
  { id: "nft1", name: "CryptoMonkey #234", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-1_nhbupf.png" },
  { id: "nft2", name: "PixelWizard", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-2_ci0fyj.png" },
  { id: "nft3", name: "SpaceRacer #12", image: "https://res.cloudinary.com/djr5msopf/image/upload/v1720639419/nft-placeholder-3_ugngfq.png" },
];

const Bridge = () => {
  const [selectedSourceChain, setSelectedSourceChain] = useState("solana");
  const [selectedDestChain, setSelectedDestChain] = useState("ethereum");
  const [selectedToken, setSelectedToken] = useState("sol");
  const [selectedNft, setSelectedNft] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSwapChains = () => {
    const temp = selectedSourceChain;
    setSelectedSourceChain(selectedDestChain);
    setSelectedDestChain(temp);
  };

  const handleSubmit = () => {
    setLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      toast.success("Bridge transaction initiated", {
        description: "Your assets are being transferred. This may take a few minutes.",
      });
      setLoading(false);
      // Reset form
      setAmount("");
    }, 2000);
  };

  const sourceChain = chains.find(chain => chain.id === selectedSourceChain);
  const destChain = chains.find(chain => chain.id === selectedDestChain);
  const selectedTokenDetails = tokens.find(token => token.id === selectedToken);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">Cross-Chain Bridge</h1>
          <p className="text-gray-400">
            Transfer tokens, NFTs, and messages across multiple blockchains powered by LayerZero V2.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="tokens" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            
            {/* Tokens Tab */}
            <TabsContent value="tokens">
              <Card className="glass-card border-forge-purple/20">
                <CardHeader>
                  <CardTitle>Bridge Tokens</CardTitle>
                  <CardDescription>
                    Transfer tokens between different blockchains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Source Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">From</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Swap Direction Button */}
                  <div className="flex justify-center my-6">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-10 w-10 border-forge-purple/50 text-forge-purple hover:bg-forge-purple/10"
                      onClick={handleSwapChains}
                    >
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Destination Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">To</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Token and Amount */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="token">Token</Label>
                      <Select 
                        value={selectedToken} 
                        onValueChange={setSelectedToken}
                      >
                        <SelectTrigger id="token" className="bg-card/50 border-white/10">
                          <SelectValue placeholder="Select token" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Tokens</SelectLabel>
                            {tokens.map((token) => (
                              <SelectItem key={token.id} value={token.id}>
                                <div className="flex items-center">
                                  <div className="h-5 w-5 rounded-full bg-forge-purple/20 flex items-center justify-center mr-2">
                                    <span className="text-xs text-forge-purple">{token.name.charAt(0)}</span>
                                  </div>
                                  <span>{token.name}</span>
                                  <span className="text-gray-400 ml-2">({token.balance})</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <Label htmlFor="amount">Amount</Label>
                        {selectedTokenDetails && (
                          <span className="text-sm text-gray-400">
                            Balance: {selectedTokenDetails.balance} {selectedTokenDetails.name}
                          </span>
                        )}
                      </div>
                      <div className="relative mt-1">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-card/50 border-white/10"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-forge-purple h-auto py-1"
                          onClick={() => setAmount(selectedTokenDetails?.balance || "")}
                        >
                          MAX
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-4 border-t border-white/10 pt-6">
                  <div className="w-full bg-card/50 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Bridge Fee</span>
                      <span>≈ 0.005 {selectedTokenDetails?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Gas Cost (estimated)</span>
                      <span>≈ 0.002 {selectedTokenDetails?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-white/5 mt-2">
                      <span className="font-medium">You will receive</span>
                      <span className="font-medium">
                        {amount ? parseFloat(amount) - 0.007 : '0.00'} {selectedTokenDetails?.name}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="glow-button w-full py-6 text-lg"
                    disabled={!amount || loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Bridge Tokens <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* NFTs Tab */}
            <TabsContent value="nfts">
              <Card className="glass-card border-forge-purple/20">
                <CardHeader>
                  <CardTitle>Bridge NFTs</CardTitle>
                  <CardDescription>
                    Transfer NFTs between different blockchains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Source Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">From</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Swap Direction Button */}
                  <div className="flex justify-center my-6">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-10 w-10 border-forge-purple/50 text-forge-purple hover:bg-forge-purple/10"
                      onClick={handleSwapChains}
                    >
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Destination Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">To</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* NFT Selection */}
                  <div>
                    <Label className="mb-3 block">Select NFT</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {nfts.map((nft) => (
                        <div 
                          key={nft.id}
                          className={`glass-card rounded-lg overflow-hidden cursor-pointer transition-all ${selectedNft === nft.id ? 'ring-2 ring-forge-purple scale-[1.02]' : 'hover:scale-[1.02]'}`}
                          onClick={() => setSelectedNft(nft.id)}
                        >
                          <div className="aspect-square w-full">
                            <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-3">
                            <div className="font-medium text-sm truncate">{nft.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-4 border-t border-white/10 pt-6">
                  <div className="w-full bg-card/50 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Bridge Fee</span>
                      <span>≈ 0.01 SOL</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Gas Cost (estimated)</span>
                      <span>≈ 0.005 SOL</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="glow-button w-full py-6 text-lg"
                    disabled={!selectedNft || loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Bridge NFT <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Messages Tab */}
            <TabsContent value="messages">
              <Card className="glass-card border-forge-purple/20">
                <CardHeader>
                  <CardTitle>Send Cross-Chain Messages</CardTitle>
                  <CardDescription>
                    Transfer arbitrary messages between smart contracts on different chains
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Source Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">From</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedSourceChain === chain.id}
                          onClick={() => setSelectedSourceChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Swap Direction Button */}
                  <div className="flex justify-center my-6">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-10 w-10 border-forge-purple/50 text-forge-purple hover:bg-forge-purple/10"
                      onClick={handleSwapChains}
                    >
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Destination Chain */}
                  <div className="mb-6">
                    <Label className="mb-2 block">To</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chains.slice(0, 3).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {chains.slice(3, 6).map((chain) => (
                        <ChainCard
                          key={chain.id}
                          chain={chain}
                          selected={selectedDestChain === chain.id}
                          onClick={() => setSelectedDestChain(chain.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Contract Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="sourceContract">Source Contract Address</Label>
                      <Input
                        id="sourceContract"
                        placeholder="0x..."
                        className="bg-card/50 border-white/10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="destContract">Destination Contract Address</Label>
                      <Input
                        id="destContract"
                        placeholder="0x..."
                        className="bg-card/50 border-white/10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="payload">Message Payload (Hex)</Label>
                      <Input
                        id="payload"
                        placeholder="0x..."
                        className="bg-card/50 border-white/10"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-4 border-t border-white/10 pt-6">
                  <div className="w-full bg-card/50 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Message Size</span>
                      <span>32 bytes</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Gas Cost (estimated)</span>
                      <span>≈ 0.008 SOL</span>
                    </div>
                    <div className="flex items-center text-sm text-amber-400 mt-2">
                      <Info className="h-4 w-4 mr-2" />
                      <span>Make sure the destination contract can handle this message</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="glow-button w-full py-6 text-lg"
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
