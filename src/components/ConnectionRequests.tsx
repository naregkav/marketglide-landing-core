import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const ConnectionRequests = () => {
  const requests = [
    { 
      id: 1, 
      title: "Startup 7 - Vertical SaaS - USA", 
      type: "startup",
      avatar: "/members/armen-kherlopian.webp", 
      status: "pending" 
    },
    { 
      id: 2, 
      title: "Startup 5 - Impact Startup in UK", 
      type: "startup",
      avatar: "/members/henrique-roloff.webp", 
      status: "connected" 
    },
    { 
      id: 3, 
      title: "Emerging Fund Manager 1", 
      type: "fund",
      avatar: "/members/renato-chiodaro.webp", 
      status: "pending" 
    },
    { 
      id: 4, 
      title: "LP 1 - Family Office Principal", 
      type: "lp",
      avatar: "/members/richard-lark.webp", 
      status: "connected" 
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'startup':
        return '🚀';
      case 'fund':
        return '💼';
      case 'lp':
        return '🏛️';
      default:
        return '👤';
    }
  };

  return (
    <Card className="w-[480px] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-5 text-gray-600">
            👥
          </div>
          <h3 className="text-gray-800 font-semibold text-lg">Connection Requests</h3>
        </div>
        
        <div className="space-y-3">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center text-lg">
                  {getIcon(request.type)}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 font-medium text-sm leading-tight">{request.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                
                <div className="w-6 h-6 flex items-center justify-center">
                  {request.status === "connected" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-amber-500" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionRequests;