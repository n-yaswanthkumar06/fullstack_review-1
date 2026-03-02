import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, MessageSquare, Heart, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function PublicDashboard() {
  const featuredContent = [
    {
      id: 1,
      title: "The Importance of Sustainable Farming",
      description: "Learn how sustainable practices benefit our environment and food security",
      image: "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwY3JvcHN8ZW58MXx8fHwxNzcxOTU4Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Environment",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "From Farm to Table: Understanding Our Food Journey",
      description: "Discover the incredible journey your food takes before reaching your plate",
      image: "https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MTg1MjY0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Education",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Modern Technology Transforming Agriculture",
      description: "See how innovation is helping farmers grow more food efficiently",
      image: "https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE4OTkzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Technology",
      readTime: "6 min read",
    },
  ];

  const popularDiscussions = [
    {
      id: 1,
      title: "Why Supporting Local Farmers Matters",
      author: "Sarah Johnson",
      replies: 24,
      likes: 156,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Climate Change Impact on Agriculture",
      author: "Mark Davis",
      replies: 18,
      likes: 98,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      title: "Understanding Organic vs. Conventional Farming",
      author: "Lisa Chen",
      replies: 31,
      likes: 203,
      timestamp: "1 day ago",
    },
  ];

  const stats = [
    { label: "Active Farmers", value: "1,234" },
    { label: "Resources Available", value: "456" },
    { label: "Community Members", value: "2,847" },
    { label: "Success Stories", value: "89" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore & Learn</h1>
          <p className="text-gray-600">Discover the world of farming and its importance to our society</p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-green-50 border-green-200">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-green-700">{stat.value}</div>
                <CardDescription className="text-gray-700">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="learn" className="space-y-4">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="learn">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Featured Content</CardTitle>
                  <CardDescription>
                    Explore educational content about farming and agriculture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredContent.map((content) => (
                      <Card 
                        key={content.id} 
                        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <div className="h-48 overflow-hidden">
                          <ImageWithFallback
                            src={content.image}
                            alt={content.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{content.category}</Badge>
                            <span className="text-xs text-gray-500">{content.readTime}</span>
                          </div>
                          <CardTitle className="text-base">{content.title}</CardTitle>
                          <CardDescription>{content.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" className="w-full">Read More</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Farming Matters</CardTitle>
                  <CardDescription>Understanding agriculture's role in society</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Food Security</h3>
                      <p className="text-sm text-gray-600">
                        Farmers ensure we have reliable access to safe, nutritious food for everyone
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Economic Impact</h3>
                      <p className="text-sm text-gray-600">
                        Agriculture drives economic growth and provides millions of jobs worldwide
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Environmental Care</h3>
                      <p className="text-sm text-gray-600">
                        Sustainable farming protects our natural resources and biodiversity
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Rural Communities</h3>
                      <p className="text-sm text-gray-600">
                        Farming supports vibrant rural communities and preserves cultural heritage
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Community Discussions</CardTitle>
                <CardDescription>Join conversations about farming and agriculture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="border-green-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">{discussion.title}</CardTitle>
                      <CardDescription>
                        by {discussion.author} • {discussion.timestamp}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="size-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="size-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                        <Button size="sm" variant="ghost" className="ml-auto">
                          <Share2 className="size-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View All Discussions
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stories">
            <Card>
              <CardHeader>
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>
                  Inspiring stories of farmers making a difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card className="border-green-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="size-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">👨‍🌾</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle>From Struggling to Thriving</CardTitle>
                          <CardDescription className="mt-2">
                            How John Smith transformed his small farm into a profitable organic operation 
                            using modern techniques and sector connections from AgriConnect.
                          </CardDescription>
                          <div className="mt-4">
                            <Button variant="outline">Read Full Story</Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="size-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">👩‍🌾</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle>Empowering Women in Agriculture</CardTitle>
                          <CardDescription className="mt-2">
                            Maria Garcia shares how she built a successful farming cooperative 
                            that empowers women farmers in her community.
                          </CardDescription>
                          <div className="mt-4">
                            <Button variant="outline">Read Full Story</Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="size-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🌱</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle>Technology Meets Tradition</CardTitle>
                          <CardDescription className="mt-2">
                            Learn how one farming family combined traditional knowledge with 
                            modern technology to triple their yields sustainably.
                          </CardDescription>
                          <div className="mt-4">
                            <Button variant="outline">Read Full Story</Button>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-8 bg-green-600 text-white border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Want to Make a Difference?</CardTitle>
            <CardDescription className="text-green-100">
              Join our community and support farmers in your area
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Support Local Farmers
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-green-700">
              Learn More About Farming
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
