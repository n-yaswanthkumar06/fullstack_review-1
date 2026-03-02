import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Video, FileText, Download, Search, Star } from "lucide-react";

export function Resources() {
  const categories = [
    { id: "all", name: "All Resources", count: 456 },
    { id: "guides", name: "Guides", count: 124 },
    { id: "articles", name: "Articles", count: 189 },
    { id: "videos", name: "Videos", count: 87 },
    { id: "reports", name: "Reports", count: 56 },
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Guide to Sustainable Irrigation",
      description: "Learn about water-efficient irrigation methods to reduce costs and improve crop yields",
      type: "Guide",
      author: "Dr. Sarah Johnson",
      rating: 4.8,
      downloads: 2847,
      image: "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwY3JvcHN8ZW58MXx8fHwxNzcxOTU4Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Water Management", "Sustainability", "Cost Reduction"],
    },
    {
      id: 2,
      title: "Organic Pest Control Methods",
      description: "Natural and effective ways to protect your crops without harmful chemicals",
      type: "Video",
      author: "Mark Davis",
      rating: 4.9,
      downloads: 3219,
      image: "https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTg1MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Pest Control", "Organic Farming", "Crop Protection"],
    },
    {
      id: 3,
      title: "Soil Health Assessment & Improvement",
      description: "Understanding soil composition and techniques to enhance fertility naturally",
      type: "Article",
      author: "Lisa Chen",
      rating: 4.7,
      downloads: 1923,
      image: "https://images.unsplash.com/photo-1717702576954-c07131c54169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjBzdW5yaXNlfGVufDF8fHx8MTc3MTk1ODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Soil Health", "Fertility", "Testing"],
    },
    {
      id: 4,
      title: "Modern Farming Technology Guide",
      description: "Overview of cutting-edge technologies transforming agriculture",
      type: "Report",
      author: "Tech Agriculture Institute",
      rating: 4.6,
      downloads: 1567,
      image: "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4OTkzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Technology", "Innovation", "Automation"],
    },
    {
      id: 5,
      title: "Crop Rotation Best Practices",
      description: "Strategic crop rotation plans to maximize yield and soil health",
      type: "Guide",
      author: "Dr. Robert Wilson",
      rating: 4.9,
      downloads: 2634,
      image: "https://images.unsplash.com/photo-1568584182785-4b4067773447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nJTIwbWFya2V0fGVufDF8fHx8MTc3MTk1ODY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Crop Management", "Planning", "Yield Optimization"],
    },
    {
      id: 6,
      title: "Market Analysis & Pricing Strategies",
      description: "Understanding market trends and pricing your produce competitively",
      type: "Report",
      author: "Agricultural Economics Team",
      rating: 4.5,
      downloads: 1845,
      image: "https://images.unsplash.com/photo-1562672767-51120ccfdfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBleHBlcnQlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NzE5NTg2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      topics: ["Marketing", "Economics", "Business"],
    },
  ];

  const featuredTopics = [
    "Water Management",
    "Pest Control",
    "Soil Health",
    "Technology",
    "Organic Farming",
    "Crop Management",
    "Marketing",
    "Sustainability",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Educational Resources</h1>
          <p className="text-gray-600">
            Access comprehensive guides, articles, and materials to enhance your farming knowledge
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10"
                />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories & Featured Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
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

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-base">Popular Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {featuredTopics.map((topic) => (
                    <Badge 
                      key={topic} 
                      variant="outline"
                      className="cursor-pointer hover:bg-green-50"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="recent">Recently Added</TabsTrigger>
                <TabsTrigger value="rated">Top Rated</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {resources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex gap-4">
                        <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                          <ImageWithFallback
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-green-100 text-green-800">
                                  {resource.type}
                                </Badge>
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                                  <span>{resource.rating}</span>
                                </div>
                              </div>
                              <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                              <CardDescription className="mb-3">
                                {resource.description}
                              </CardDescription>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {resource.topics.map((topic) => (
                                  <Badge key={topic} variant="outline" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>By {resource.author}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Download className="size-4" />
                                  {resource.downloads.toLocaleString()} downloads
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button className="bg-green-600 hover:bg-green-700">
                            View Resource
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="size-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="popular">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Most popular resources would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recent">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Recently added resources would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rated">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Top rated resources would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
