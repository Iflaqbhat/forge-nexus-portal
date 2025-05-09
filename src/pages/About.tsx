
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-forge-purple/20 text-forge-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
            About ForgeNexus
          </span>
          <h1 className="text-4xl font-bold mb-6">Powering the Cross-Chain Future</h1>
          <p className="text-lg text-gray-300">
            ForgeNexus is built on LayerZero V2, the most advanced omnichain interoperability protocol, enabling seamless transfers across multiple blockchains.
          </p>
        </div>
        
        {/* Vision Section */}
        <section className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forge-dark-purple/20 to-forge-neon-pink/10 opacity-30"></div>
            <div className="p-10 md:p-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
                  <p className="text-gray-300 mb-4">
                    We believe in a blockchain ecosystem where barriers between chains simply don't exist. ForgeNexus is designed to make cross-chain operations as simple as using a single chain.
                  </p>
                  <p className="text-gray-300">
                    By leveraging the power of LayerZero V2, we provide a seamless bridge between different blockchain networks, allowing users to transfer tokens, NFTs, and messages with unparalleled security and reliability.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-square max-w-xs mx-auto md:ml-auto relative">
                    <div className="absolute inset-0 bg-forge-purple/30 rounded-full blur-[80px]"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="h-40 w-40 rounded-full bg-gradient-to-br from-forge-purple to-forge-neon-pink p-1 animate-pulse-glow">
                        <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-4xl font-bold text-forge-purple">FN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ForgeNexus leverages LayerZero V2's advanced omnichain interoperability protocol to ensure secure and reliable cross-chain operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-forge-purple/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-forge-purple to-forge-neon-pink"></div>
              <div className="h-14 w-14 rounded-full bg-forge-purple/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-forge-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
              <p className="text-gray-400">
                Start by connecting your preferred wallet. ForgeNexus supports Phantom, Metamask, and many other popular wallets across different blockchain ecosystems.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-forge-purple/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-forge-purple to-forge-cyber-blue"></div>
              <div className="h-14 w-14 rounded-full bg-forge-purple/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-forge-purple">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Source & Destination</h3>
              <p className="text-gray-400">
                Choose the source chain where your assets are currently located and the destination chain where you want to send them. Our intuitive interface makes this process simple.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-forge-purple/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-forge-cyber-blue to-forge-neon-pink"></div>
              <div className="h-14 w-14 rounded-full bg-forge-purple/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-forge-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Confirm & Send</h3>
              <p className="text-gray-400">
                Review the transaction details, including bridge fees and estimated gas costs. Confirm the transaction, and LayerZero V2 takes care of the rest, ensuring secure delivery to the destination chain.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="glow-button px-8 py-6 text-lg" asChild>
              <Link to="/bridge">
                Start Bridging Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* LayerZero Technology */}
        <section className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forge-dark-purple/20 to-forge-neon-pink/10 opacity-30"></div>
            <div className="p-10 md:p-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">LayerZero V2 Technology</h2>
                  <p className="text-gray-300 mb-4">
                    LayerZero V2 represents a significant advancement in cross-chain communication, offering enhanced security, efficiency, and flexibility compared to previous interoperability solutions.
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-forge-purple/20 flex items-center justify-center mt-1 mr-3">
                        <span className="text-xs font-bold text-forge-purple">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ultra Light Nodes (ULNs)</h4>
                        <p className="text-sm text-gray-400">
                          Verifies cross-chain messages with minimal computational overhead while maintaining security.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-forge-purple/20 flex items-center justify-center mt-1 mr-3">
                        <span className="text-xs font-bold text-forge-purple">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Trustless Verification</h4>
                        <p className="text-sm text-gray-400">
                          No reliance on third-party trust assumptions, enhancing the security of cross-chain operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-forge-purple/20 flex items-center justify-center mt-1 mr-3">
                        <span className="text-xs font-bold text-forge-purple">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">DVN Network</h4>
                        <p className="text-sm text-gray-400">
                          Decentralized Verifier Network provides additional security layers for cross-chain transactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-forge-purple/20 flex items-center justify-center mt-1 mr-3">
                        <span className="text-xs font-bold text-forge-purple">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Executor Network</h4>
                        <p className="text-sm text-gray-400">
                          Handles gas fees on destination chains, enabling seamless user experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-forge-purple/30 rounded-full blur-[100px]"></div>
                    <div className="relative z-10">
                      <img 
                        src="https://res.cloudinary.com/djr5msopf/image/upload/v1720639418/layerzero-diagram_gjfjz8.png" 
                        alt="LayerZero V2 Architecture" 
                        className="max-w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose ForgeNexus</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We've built ForgeNexus with a focus on security, user experience, and flexibility to meet the needs of both casual users and power users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forge-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Enterprise-Grade Security</h3>
              <p className="text-sm text-gray-400">
                Built on LayerZero V2's proven security model with additional safeguards to protect your assets.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forge-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400">
                Optimized for speed with most cross-chain transfers completing in under 5 minutes.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forge-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Multi-Chain Support</h3>
              <p className="text-sm text-gray-400">
                Connect with all major blockchains including Solana, Ethereum, BNB Chain, Avalanche, and more.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:bg-card/70 transition-colors">
              <div className="h-12 w-12 rounded-full bg-forge-purple/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forge-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Cost Efficient</h3>
              <p className="text-sm text-gray-400">
                Optimized fee structure to minimize costs while ensuring reliable delivery of your assets.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="glass-card rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forge-dark-purple/20 to-forge-neon-pink/10 opacity-30"></div>
            
            <div className="p-10 md:p-16 relative z-10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Experience The Future of Cross-Chain Transfers?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect your wallet and start transferring tokens, NFTs, and messages across chains in minutes.
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
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
