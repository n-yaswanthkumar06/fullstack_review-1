import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Award, Calendar, DollarSign, Users, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Initiatives() {
  const categories = [
    { id: "all", name: "All Initiatives", count: 48 },
    { id: "grants", name: "Grants & Funding", count: 15 },
    { id: "training", name: "Training Programs", count: 12 },
    { id: "partnerships", name: "Partnerships", count: 9 },
    { id: "competitions", name: "Competitions", count: 7 },
    { id: "support", name: "Support Programs", count: 5 },
  ];

  const initiatives = [
    {
      id: 1,
      title: "Sustainable Farming Innovation Grant",
      organization: "Agricultural Development Fund",
      type: "Grant",
      funding: "$50,000",
      deadline: "March 31, 2026",
      participants: 234,
      image: "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwY3JvcHN8ZW58MXx8fHwxNzcxOTU4Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Financial support for farmers implementing sustainable and innovative farming practices",
      requirements: ["Active farmer for 2+ years", "Sustainable farming plan", "Environmental impact assessment"],
      status: "Open",
    },
    {
      id: 2,
      title: "Modern Agriculture Technology Training",
      organization: "TechFarm Institute",
      type: "Training",
      funding: "Fully Subsidized",
      deadline: "Ongoing Enrollment",
      participants: 456,
      image: "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4OTkzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive training program on modern farming technologies including IoT, drones, and precision agriculture",
      requirements: ["Basic computer literacy", "Active farming operations", "Commitment to 6-week program"],
      status: "Open",
    },
    {
      id: 3,
      title: "Organic Certification Support Program",
      organization: "Organic Farming Alliance",
      type: "Support",
      funding: "70% Subsidy",
      deadline: "April 15, 2026",
      participants: 189,
      image: "https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTg1MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Get subsidized support for organic certification process including consultation and documentation",
      requirements: ["Organic farming practices for 1+ year", "Farm size 5-50 acres", "Documentation of practices"],
      status: "Open",
    },
    {
      id: 4,
      title: "Young Farmers Leadership Program",
      organization: "National Farmers Association",
      type: "Training",
      funding: "Free",
      deadline: "March 20, 2026",
      participants: 312,
      image: "https://images.unsplash.com/photo-1562672767-51120ccfdfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBleHBlcnQlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NzE5NTg2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Leadership and business management training for next-generation farmers under 35 years old",
      requirements: ["Age 18-35", "Involved in farming", "Commitment to agriculture career"],
      status: "Open",
    },
    {
      id: 5,
      title: "Climate-Smart Agriculture Competition",
      organization: "Green Future Foundation",
      type: "Competition",
      funding: "$100,000 Prize Pool",
      deadline: "May 1, 2026",
      participants: 167,
      image: "https://images.unsplash.com/photo-1717702576954-c07131c54169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjBzdW5yaXNlfGVufDF8fHx8MTc3MTk1ODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Competition for innovative climate adaptation and mitigation strategies in farming",
      requirements: ["Innovative climate solution", "Scalable approach", "Impact measurement plan"],
      status: "Open",
    },
  ];

  const myInitiatives = [
    {
      id: 1,
      title: "Organic Certification Support Program",
      status: "In Progress",
      progress: 65,
      nextStep: "Submit final documentation",
      dueDate: "March 10, 2026",
    },
    {
      id: 2,
      title: "Modern Agriculture Technology Training",
      status: "Completed",
      progress: 100,
      completedDate: "February 15, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farming Initiatives</h1>
          <p className="text-gray-600">
            Discover programs, grants, and opportunities to enhance your farming operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-green-50 text-left transition-colors"
                  >
                    <span className="text-sm text-gray-700">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-base">My Initiatives</CardTitle>
                <CardDescription>Programs you're participating in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {myInitiatives.map((initiative) => (
                  <div key={initiative.id} className="p-3 bg-white rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant={initiative.status === "Completed" ? "default" : "secondary"}
                        className={initiative.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                      >
                        {initiative.status}
                      </Badge>
                      {initiative.status !== "Completed" && (
                        <span className="text-xs text-gray-600">{initiative.progress}%</span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-gray-900 mb-1">{initiative.title}</p>
                    {initiative.status === "In Progress" && (
                      <p className="text-xs text-gray-600">Next: {initiative.nextStep}</p>
                    )}
                  </div>
                ))}
                <Button size="sm" variant="outline" className="w-full">
                  View All
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all">All Initiatives</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="closing">Closing Soon</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {initiatives.map((initiative) => (
                  <Card key={initiative.id} className="hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                        <ImageWithFallback
                          src={initiative.image}
                          alt={initiative.title}
                          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                        />
                      </div>
                      <div className="flex-1">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge className="bg-green-100 text-green-800">
                                  {initiative.type}
                                </Badge>
                                <Badge variant="outline">{initiative.status}</Badge>
                              </div>
                              <CardTitle className="text-xl mb-2">{initiative.title}</CardTitle>
                              <CardDescription className="text-sm text-gray-600 mb-3">
                                by {initiative.organization}
                              </CardDescription>
                              <p className="text-sm text-gray-700 mb-4">
                                {initiative.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <DollarSign className="size-4 text-gray-500" />
                              <div>
                                <div className="text-xs text-gray-500">Funding</div>
                                <div className="font-medium text-gray-900">{initiative.funding}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="size-4 text-gray-500" />
                              <div>
                                <div className="text-xs text-gray-500">Deadline</div>
                                <div className="font-medium text-gray-900">{initiative.deadline}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="size-4 text-gray-500" />
                              <div>
                                <div className="text-xs text-gray-500">Participants</div>
                                <div className="font-medium text-gray-900">{initiative.participants}</div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs font-medium text-gray-900 mb-2">Requirements:</p>
                            <ul className="space-y-1">
                              {initiative.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                  <CheckCircle2 className="size-3 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-green-600 hover:bg-green-700">
                              Apply Now
                            </Button>
                            <Button variant="outline">
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="featured">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Featured initiatives would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="closing">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Initiatives closing soon would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* CTA Card */}
            <Card className="mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white border-none">
              <CardHeader className="text-center">
                <div className="size-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="size-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  Can't Find What You're Looking For?
                </CardTitle>
                <CardDescription className="text-green-100 text-base">
                  Subscribe to get notified when new initiatives are added
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Subscribe to Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
