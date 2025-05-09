
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-forge-darkest-purple to-transparent opacity-50" />
          <div className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full bg-forge-purple/10 blur-[100px] animate-pulse-glow" 
               style={{ top: '-25vw', left: '-25vw' }}/>
          <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-full bg-forge-neon-pink/10 blur-[80px] animate-pulse-glow"
               style={{ bottom: '-15vw', right: '-15vw' }} />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={fadeIn}>
              <span className="inline-block bg-forge-purple/20 text-forge-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
                Powered by LayerZero V2
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-forge-light-purple to-forge-purple bg-clip-text text-transparent"
              variants={fadeIn}
            >
              The Ultimate Cross-Chain Experience
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Seamlessly bridge assets, NFTs, and messages across multiple blockchains with ForgeNexus, the next generation omnichain portal.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center pt-6"
              variants={fadeIn}
            >
              <Button className="glow-button px-8 py-6 text-lg" asChild>
                <Link to="/bridge">
                  Start Bridging <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="border-forge-purple text-forge-purple hover:bg-forge-purple/10 px-8 py-6 text-lg" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 relative z-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-forge-dark-purple/20 to-forge-neon-pink/10 opacity-30"></div>
              <img 
                src="https://res.cloudinary.com/djr5msopf/image/upload/v1720639418/dashboard-mockup_e9bujs.png" 
                alt="ForgeNexus Dashboard" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-forge-purple to-forge-neon-pink p-1 rounded-full animate-bounce">
                <div className="bg-card rounded-full p-2">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-forge-purple font-semibold tracking-wider">FEATURES</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Everything You Need For Cross-Chain Operations</h2>
            <p className="text-gray-400">
              ForgeNexus provides all the tools you need to navigate the multi-chain ecosystem with ease and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Token Bridging"
              description="Transfer tokens between chains with minimal fees and maximum security. Support for all major tokens and chains."
              icon="wallet"
            />
            <FeatureCard 
              title="NFT Transfers"
              description="Move your NFTs across chains while preserving metadata and provenance information."
              icon="view"
            />
            <FeatureCard 
              title="Cross-Chain Messaging"
              description="Send arbitrary messages between smart contracts on different blockchains securely."
              icon="bridge"
            />
            <FeatureCard 
              title="Multi-Chain Portfolio"
              description="View and manage your assets across all supported chains in one unified interface."
              icon="view"
            />
            <FeatureCard 
              title="Gasless Transactions"
              description="Execute cross-chain operations without the need to hold gas tokens on destination chains."
              icon="wallet"
            />
            <FeatureCard 
              title="Secure Connections"
              description="Enterprise-grade security with LayerZero V2 providing trustless verification across chains."
              icon="connect"
            />
          </div>
        </div>
      </section>
      
      {/* Supported Chains */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-forge-purple font-semibold tracking-wider">ECOSYSTEM</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Supported Chains</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ForgeNexus connects all major blockchains through LayerZero's secure omnichain communication protocol.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {['Solana', 'Ethereum', 'Binance', 'Avalanche', 'Polygon', 'Arbitrum', 'Optimism', 'Base', 'Aptos', 'Sui', 'Near', 'Cosmos'].map((chain) => (
              <div 
                key={chain} 
                className="glass-card p-4 w-full aspect-square rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-forge-purple/20 to-forge-neon-pink/20 flex items-center justify-center mb-3">
                  {/* This would be the chain logo */}
                  <span className="text-xl font-bold text-forge-purple">{chain.charAt(0)}</span>
                </div>
                <span className="font-medium text-sm">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forge-dark-purple/20 to-forge-neon-pink/10 opacity-30"></div>
            
            <div className="p-12 md:p-16 relative z-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Your Cross-Chain Journey?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect your wallet now and experience the future of blockchain interoperability with ForgeNexus.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="glow-button px-8 py-6 text-lg" asChild>
                    <Link to="/bridge">
                      Launch App <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-forge-purple text-forge-purple hover:bg-forge-purple/10 px-8 py-6 text-lg"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Read Docs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
