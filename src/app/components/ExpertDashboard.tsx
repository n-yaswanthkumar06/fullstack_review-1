import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Users, Award, FileText, Video, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function ExpertDashboard() {
  const stats = [
    { label: "Content Created", value: "32", icon: FileText },
    { label: "Farmers Helped", value: "156", icon: Users },
    { label: "Consultations", value: "48", icon: Calendar },
    { label: "Achievements", value: "8", icon: Award },
  ];

  const myContent = [
    {
      id: 1,
      title: "Sustainable Irrigation Techniques",
      type: "Guide",
      views: 2847,
      status: "Published",
      date: "Feb 15, 2026",
    },
    {
      id: 2,
      title: "Organic Pest Control Methods",
      type: "Video",
      views: 1923,
      status: "Published",
      date: "Feb 10, 2026",
    },
    {
      id: 3,
      title: "Soil Health Assessment",
      type: "Article",
      views: 0,
      status: "Draft",
      date: "Feb 22, 2026",
    },
  ];

  const upcomingConsultations = [
    {
      id: 1,
      farmer: "John Smith",
      topic: "Crop Rotation Planning",
      date: "Feb 25, 2026",
      time: "10:00 AM",
    },
    {
      id: 2,
      farmer: "Emily Brown",
      topic: "Water Management",
      date: "Feb 26, 2026",
      time: "2:00 PM",
    },
    {
      id: 3,
      farmer: "Robert Wilson",
      topic: "Organic Certification",
      date: "Feb 27, 2026",
      time: "11:00 AM",
    },
  ];

  const contentTemplates = [
    {
      title: "Best Practices Guide",
      description: "Create a comprehensive guide on agricultural best practices",
      icon: BookOpen,
    },
    {
      title: "Video Tutorial",
      description: "Record a step-by-step video tutorial for farmers",
      icon: Video,
    },
    {
      title: "Research Article",
      description: "Share your research findings with the community",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Dashboard</h1>
          <p className="text-gray-600">Share your knowledge and support the farming community</p>
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

        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="content">My Content</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Published & Draft Content</CardTitle>
                <CardDescription>Manage your educational materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myContent.map((item) => (
                  <Card key={item.id} className="border-green-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <Badge 
                              variant={item.status === "Published" ? "default" : "secondary"}
                              className={item.status === "Published" ? "bg-green-100 text-green-800" : ""}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <CardDescription>
                            {item.type} • {item.date} • {item.views.toLocaleString()} views
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          {item.status === "Published" && (
                            <Button size="sm" variant="ghost">View</Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                <Button className="bg-green-600 hover:bg-green-700">
                  Create New Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Consultations</CardTitle>
                  <CardDescription>Your scheduled farmer sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingConsultations.map((consultation) => (
                    <Card key={consultation.id} className="bg-green-50 border-green-200">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-base">{consultation.farmer}</CardTitle>
                            <CardDescription className="mt-1">
                              {consultation.topic}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            <span>{consultation.date}</span>
                          </div>
                          <span>{consultation.time}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Join Session</Button>
                          <Button size="sm" variant="outline">Reschedule</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Consultations
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consultation Stats</CardTitle>
                  <CardDescription>Your impact on the farming community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">48</div>
                    <div className="text-sm text-gray-600">Total Consultations</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">96%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Set Availability
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Content</CardTitle>
                <CardDescription>Choose a format to share your expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contentTemplates.map((template, index) => (
                    <Card 
                      key={index} 
                      className="hover:shadow-lg transition-shadow cursor-pointer border-green-200"
                    >
                      <CardHeader>
                        <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                          <template.icon className="size-6 text-green-600" />
                        </div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Start Creating
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Content Guidelines
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ensure all content is accurate and based on verified information</li>
                    <li>• Use clear, simple language that farmers can easily understand</li>
                    <li>• Include practical examples and actionable steps</li>
                    <li>• Add images or diagrams when possible to illustrate concepts</li>
                    <li>• Cite sources for research-based content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
