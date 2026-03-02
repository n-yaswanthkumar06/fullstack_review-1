import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Building2, MessageSquare, Award, TrendingUp, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function FarmerDashboard() {
  const stats = [
    { label: "Resources Accessed", value: "24", icon: BookOpen },
    { label: "Sector Connections", value: "8", icon: Building2 },
    { label: "Active Discussions", value: "12", icon: MessageSquare },
    { label: "Initiatives Joined", value: "3", icon: Award },
  ];

  const opportunities = [
    {
      id: 1,
      title: "Agricultural Technology Grant",
      sector: "Technology",
      funding: "$50,000",
      deadline: "March 15, 2026",
      description: "Support for implementing modern farming technology",
    },
    {
      id: 2,
      title: "Organic Certification Program",
      sector: "Certification",
      funding: "Subsidized",
      deadline: "March 30, 2026",
      description: "Get certified in organic farming practices",
    },
    {
      id: 3,
      title: "Export Market Connection",
      sector: "Commerce",
      funding: "N/A",
      deadline: "Ongoing",
      description: "Connect with international buyers for your produce",
    },
  ];

  const recentResources = [
    {
      id: 1,
      title: "Sustainable Irrigation Methods",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwY3JvcHN8ZW58MXx8fHwxNzcxOTU4Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Crop Disease Prevention",
      type: "Article",
      image: "https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTg1MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Market Price Analysis",
      type: "Report",
      image: "https://images.unsplash.com/photo-1568584182785-4b4067773447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nJTIwbWFya2V0fGVufDF8fHx8MTc3MTk1ODY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farmer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your farming journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                <stat.icon className="size-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="opportunities" className="space-y-4">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="resources">My Resources</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
          </TabsList>

          <TabsContent value="opportunities">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Available Opportunities</CardTitle>
                  <CardDescription>Explore funding, programs, and partnerships</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {opportunities.map((opp) => (
                    <Card key={opp.id} className="border-green-200">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{opp.title}</CardTitle>
                            <CardDescription>{opp.description}</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800">{opp.sector}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <DollarSign className="size-4 text-gray-500" />
                              <span className="text-gray-600">Funding: {opp.funding}</span>
                            </div>
                            <div className="text-sm text-gray-600">Deadline: {opp.deadline}</div>
                          </div>
                          <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Recently Accessed Resources</CardTitle>
                <CardDescription>Your learning materials and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentResources.map((resource) => (
                    <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Badge variant="outline" className="w-fit">{resource.type}</Badge>
                        <CardTitle className="text-base mt-2">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">Continue Reading</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline">Browse All Resources</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Sector Connections</CardTitle>
                  <CardDescription>Industries you're connected with</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Agribusiness", "Technology", "Finance", "Supply Chain"].map((sector) => (
                    <div key={sector} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Building2 className="size-5 text-green-600" />
                        <span className="font-medium">{sector}</span>
                      </div>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Explore More Sectors
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expert Consultations</CardTitle>
                  <CardDescription>Get guidance from agricultural experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-gray-900 mb-2">Schedule a Consultation</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Connect with experts for personalized advice on your farming practices
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Book Session
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-900">Recent Consultations</h4>
                    <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span>Dr. Sarah Johnson - Soil Health</span>
                        <span className="text-xs">Feb 18</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span>Mark Davis - Pest Management</span>
                        <span className="text-xs">Feb 10</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
