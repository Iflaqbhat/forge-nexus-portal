
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="glass-card rounded-2xl max-w-md w-full text-center p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-forge-purple to-forge-neon-pink"></div>
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-forge-purple to-forge-dark-purple flex items-center justify-center mx-auto mb-8">
          <span className="text-3xl font-bold text-white">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        <Button className="glow-button px-6 py-5" asChild>
          <Link to="/">
            Return Home <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
