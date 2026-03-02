import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Building2, TrendingUp, DollarSign, Users, Lightbulb, Package } from "lucide-react";

export function SectorConnections() {
  const sectors = [
    {
      id: 1,
      name: "Agribusiness",
      icon: Building2,
      description: "Connect with agricultural businesses for partnerships and supply chain opportunities",
      connections: 234,
      opportunities: 18,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      name: "Technology",
      icon: Lightbulb,
      description: "Access modern farming technology and digital solutions to improve efficiency",
      connections: 156,
      opportunities: 24,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      name: "Finance",
      icon: DollarSign,
      description: "Find funding, loans, and investment opportunities for your farming operations",
      connections: 189,
      opportunities: 15,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      name: "Supply Chain & Logistics",
      icon: Package,
      description: "Streamline distribution and connect with buyers, wholesalers, and retailers",
      connections: 298,
      opportunities: 31,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      name: "Research & Development",
      icon: TrendingUp,
      description: "Collaborate with research institutions for innovative farming solutions",
      connections: 87,
      opportunities: 12,
      color: "bg-teal-100 text-teal-600",
    },
    {
      id: 6,
      name: "Consumer Markets",
      icon: Users,
      description: "Direct access to consumers through farmers markets and e-commerce platforms",
      connections: 412,
      opportunities: 27,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const activeConnections = [
    {
      id: 1,
      company: "GreenTech Solutions",
      sector: "Technology",
      type: "Partnership",
      description: "Smart irrigation system provider offering 30% discount to AgriConnect farmers",
      status: "Active",
    },
    {
      id: 2,
      company: "FarmFinance Co.",
      sector: "Finance",
      type: "Funding",
      description: "Agricultural loans with competitive rates and flexible repayment terms",
      status: "Active",
    },
    {
      id: 3,
      company: "Organic Market Network",
      sector: "Consumer Markets",
      type: "Distribution",
      description: "Direct-to-consumer platform for organic produce with guaranteed pricing",
      status: "New",
    },
    {
      id: 4,
      company: "AgriLogistics Inc.",
      sector: "Supply Chain",
      type: "Service",
      description: "Cold chain logistics and distribution services for fresh produce",
      status: "Active",
    },
  ];

  const benefits = [
    {
      title: "Increased Market Access",
      description: "Connect with buyers and expand your market reach beyond local areas",
    },
    {
      title: "Technology Integration",
      description: "Access cutting-edge tools and technologies to improve productivity",
    },
    {
      title: "Financial Support",
      description: "Find funding opportunities and financial services tailored to farmers",
    },
    {
      title: "Knowledge Sharing",
      description: "Learn from industry experts and share best practices",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sector Connections</h1>
          <p className="text-gray-600">
            Connect with different industries to grow your farming business and access new opportunities
          </p>
        </div>

        {/* Benefits Section */}
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle>Why Connect with Different Sectors?</CardTitle>
            <CardDescription className="text-gray-700">
              Discover the benefits of multi-sector collaboration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sectors Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`size-12 ${sector.color} rounded-lg flex items-center justify-center mb-4`}>
                    <sector.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg">{sector.name}</CardTitle>
                  <CardDescription className="min-h-[60px]">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div>
                      <div className="font-medium text-gray-900">{sector.connections}</div>
                      <div className="text-xs">Active Connections</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{sector.opportunities}</div>
                      <div className="text-xs">Opportunities</div>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Explore Sector
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Connections */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Active Connections</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="space-y-4">
            {activeConnections.map((connection) => (
              <Card key={connection.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg">{connection.company}</CardTitle>
                        <Badge 
                          variant={connection.status === "New" ? "default" : "outline"}
                          className={connection.status === "New" ? "bg-green-100 text-green-800" : ""}
                        >
                          {connection.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{connection.sector}</Badge>
                        <Badge variant="secondary">{connection.type}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {connection.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-8 bg-gradient-to-r from-green-600 to-green-700 text-white border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-2">
              Ready to Expand Your Network?
            </CardTitle>
            <CardDescription className="text-green-100 text-base">
              Join thousands of farmers connecting with industries to grow their business
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Start Connecting
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
