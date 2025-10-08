import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const ConnectionRequests = () => {
  const requests = [
    { id: 1, name: "Sarah Chen", role: "Investment Director", avatar: "/members/sarah-chen.jpg", status: "pending" },
    { id: 2, name: "Marcus Rodriguez", role: "Fund Manager", avatar: "/members/marcus-rodriguez.jpg", status: "connected" },
    { id: 3, name: "Emily Watson", role: "LP Investor", avatar: "/members/emily-watson.jpg", status: "pending" },
    { id: 4, name: "David Kim", role: "Family Office", avatar: "/members/david-kim.jpg", status: "connected" },
  ];

  return (
    <Card className="w-full max-w-sm lg:w-96 bg-white/15 backdrop-blur-xl border-white/25 shadow-2xl">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-1">Connection Requests</h3>
            <p className="text-white/70 text-xs sm:text-sm">New opportunities waiting</p>
          </div>
          <div className="bg-white/20 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
            4 new
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-5">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between group hover:bg-white/10 p-2 sm:p-3 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 ring-2 ring-white/20">
                  <AvatarImage src={request.avatar} alt={request.name} />
                  <AvatarFallback className="bg-white/20 text-white text-xs sm:text-sm font-medium">
                    {request.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium text-xs sm:text-sm">{request.name}</p>
                  <p className="text-white/70 text-[10px] sm:text-xs">{request.role}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                {request.status === "connected" ? (
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    <span className="text-green-400 text-[10px] sm:text-xs font-medium hidden sm:inline">Connected</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                    <span className="text-yellow-400 text-[10px] sm:text-xs font-medium hidden sm:inline">Pending</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.a
          href="https://stage.marketglide.io/app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mt-6 sm:mt-8 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 border border-white/20 text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Requests →
        </motion.a>
      </CardContent>
    </Card>
  );
};

export default ConnectionRequests;