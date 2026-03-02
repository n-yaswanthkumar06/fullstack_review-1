import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MessageSquare, Heart, Reply, TrendingUp, Clock, Users } from "lucide-react";

export function Discussions() {
  const categories = [
    { id: "all", name: "All Discussions", count: 892 },
    { id: "techniques", name: "Farming Techniques", count: 234 },
    { id: "market", name: "Market & Pricing", count: 156 },
    { id: "technology", name: "Technology", count: 189 },
    { id: "sustainability", name: "Sustainability", count: 143 },
    { id: "support", name: "Support & Advice", count: 170 },
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for drought-resistant crop varieties",
      author: "John Smith",
      role: "Farmer",
      category: "Farming Techniques",
      content: "With climate change affecting rainfall patterns, I'm looking for advice on drought-resistant crops suitable for my region...",
      replies: 24,
      likes: 89,
      views: 456,
      timestamp: "2 hours ago",
      isHot: true,
    },
    {
      id: 2,
      title: "Navigating organic certification process",
      author: "Emily Brown",
      role: "Farmer",
      category: "Support & Advice",
      content: "I'm interested in transitioning to organic farming. Can anyone share their experience with the certification process?",
      replies: 18,
      likes: 67,
      views: 324,
      timestamp: "5 hours ago",
      isHot: false,
    },
    {
      id: 3,
      title: "Smart irrigation systems: Worth the investment?",
      author: "Dr. Sarah Johnson",
      role: "Expert",
      category: "Technology",
      content: "I've been researching smart irrigation systems. Let's discuss the ROI and practical benefits for different farm sizes...",
      replies: 31,
      likes: 142,
      views: 678,
      timestamp: "1 day ago",
      isHot: true,
    },
    {
      id: 4,
      title: "Current market prices for organic vegetables",
      author: "Mark Davis",
      role: "Farmer",
      category: "Market & Pricing",
      content: "Looking to benchmark my pricing. What are others getting for organic vegetables in their local markets?",
      replies: 15,
      likes: 45,
      views: 289,
      timestamp: "1 day ago",
      isHot: false,
    },
    {
      id: 5,
      title: "Implementing regenerative agriculture practices",
      author: "Lisa Chen",
      role: "Expert",
      category: "Sustainability",
      content: "Sharing insights on regenerative agriculture and its long-term benefits for soil health and farm sustainability...",
      replies: 27,
      likes: 156,
      views: 534,
      timestamp: "2 days ago",
      isHot: true,
    },
  ];

  const trendingTopics = [
    "Drought Management",
    "Organic Certification",
    "Smart Farming",
    "Soil Health",
    "Market Access",
    "Water Conservation",
    "Pest Control",
    "Climate Adaptation",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Discussions</h1>
          <p className="text-gray-600">
            Connect with farmers, experts, and supporters to share knowledge and experiences
          </p>
        </div>

        {/* Create Discussion Button */}
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Input placeholder="Start a new discussion..." className="bg-white" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Create Discussion
              </Button>
            </div>
          </CardContent>
        </Card>

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

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
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

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-base">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-gray-600 space-y-2">
                <p>• Be respectful and supportive</p>
                <p>• Share accurate information</p>
                <p>• Stay on topic</p>
                <p>• No spam or self-promotion</p>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  View Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="recent" className="space-y-4">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="hot">Hot</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {discussion.isHot && (
                              <Badge className="bg-orange-100 text-orange-800">
                                <TrendingUp className="size-3 mr-1" />
                                Hot
                              </Badge>
                            )}
                            <Badge variant="outline">{discussion.category}</Badge>
                          </div>
                          <CardTitle className="text-lg mb-2 hover:text-green-600">
                            {discussion.title}
                          </CardTitle>
                          <CardDescription className="text-base mb-3">
                            {discussion.content}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <div className="size-6 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-xs">{discussion.author.charAt(0)}</span>
                              </div>
                              <span>{discussion.author}</span>
                              <Badge variant="secondary" className="text-xs ml-1">
                                {discussion.role}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="size-4" />
                              <span>{discussion.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <button className="flex items-center gap-2 hover:text-green-600">
                          <MessageSquare className="size-4" />
                          <span>{discussion.replies} replies</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-600">
                          <Heart className="size-4" />
                          <span>{discussion.likes} likes</span>
                        </button>
                        <div className="flex items-center gap-2">
                          <Users className="size-4" />
                          <span>{discussion.views} views</span>
                        </div>
                        <Button size="sm" variant="ghost" className="ml-auto">
                          <Reply className="size-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="hot">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Hot discussions would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="unanswered">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Unanswered discussions would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="following">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-center text-gray-500">
                      Discussions you're following would be displayed here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Create Discussion Modal Trigger */}
            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Have a question or topic to discuss?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Start a new discussion and get help from the community
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Start a Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
