import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const ConnectionRequests = () => {
  const requests = [
    { id: 1, name: "Sarah Chen", role: "Investment Director", avatar: "/members/armen-kherlopian.webp", status: "pending" },
    { id: 2, name: "Marcus Rodriguez", role: "Fund Manager", avatar: "/members/henrique-roloff.webp", status: "connected" },
    { id: 3, name: "Emily Watson", role: "LP Investor", avatar: "/members/renato-chiodaro.webp", status: "pending" },
    { id: 4, name: "David Kim", role: "Family Office", avatar: "/members/richard-lark.webp", status: "connected" },
  ];

  return (
    <Card className="w-96 bg-white/15 backdrop-blur-xl border-white/25 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold text-xl mb-1">Connection Requests</h3>
            <p className="text-white/70 text-sm">New opportunities waiting</p>
          </div>
          <div className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
            4 new
          </div>
        </div>
        
        <div className="space-y-5">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between group hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 ring-2 ring-white/20">
                  <AvatarImage src={request.avatar} alt={request.name} />
                  <AvatarFallback className="bg-white/20 text-white text-sm font-medium">
                    {request.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium text-sm">{request.name}</p>
                  <p className="text-white/70 text-xs">{request.role}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                {request.status === "connected" ? (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 text-xs font-medium">Connected</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 text-xs font-medium">Pending</span>
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
          className="block w-full mt-8 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-white/20 text-center"
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