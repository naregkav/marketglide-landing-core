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
    <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-white font-semibold text-lg mb-1">Connection Requests</h3>
          <p className="text-white/70 text-sm">New opportunities waiting</p>
        </div>
        
        <div className="space-y-3">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={request.avatar} alt={request.name} />
                  <AvatarFallback className="bg-accent text-white">
                    {request.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium text-sm">{request.name}</p>
                  <p className="text-white/60 text-xs">{request.role}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                {request.status === "connected" ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-400" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
            View All Requests →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionRequests;