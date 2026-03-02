import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sprout, Users, BookOpen, Handshake, TrendingUp, Award } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717702576954-c07131c54169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjBzdW5yaXNlfGVufDF8fHx8MTc3MTk1ODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Farmer working in field at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Farmers, Inspiring Society
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Connecting agriculture with opportunity through knowledge, resources, and community
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/farmer">Join as Farmer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link to="/public">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To raise awareness about the vital importance of farming while providing farmers with the resources, 
              connections, and support they need to thrive in the modern economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="size-6 text-green-600" />
                </div>
                <CardTitle>Connect Farmers</CardTitle>
                <CardDescription>
                  Bridge the gap between farmers and various economic sectors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="size-6 text-green-600" />
                </div>
                <CardTitle>Educate Society</CardTitle>
                <CardDescription>
                  Raise awareness about agriculture's crucial role in our lives
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="size-6 text-green-600" />
                </div>
                <CardTitle>Empower Growth</CardTitle>
                <CardDescription>
                  Provide resources and opportunities for sustainable development
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to connect, learn, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="size-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Sprout className="size-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Educational Resources
                </h3>
                <p className="text-gray-600">
                  Access comprehensive guides, tutorials, and best practices for modern farming techniques
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="size-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Handshake className="size-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sector Connections
                </h3>
                <p className="text-gray-600">
                  Connect with agribusiness, technology, finance, and other sectors for growth opportunities
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="size-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="size-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Discussions
                </h3>
                <p className="text-gray-600">
                  Engage with fellow farmers, experts, and supporters in meaningful conversations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="size-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Award className="size-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Farming Initiatives
                </h3>
                <p className="text-gray-600">
                  Participate in programs, grants, and initiatives designed to support farmers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600">
              Choose your role and start making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Farmer</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Access resources, connect with sectors, and grow your farming business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/farmer">Enter Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Agricultural Expert</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Share your knowledge and provide guidance to the farming community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/expert">Enter Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Public</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Learn about farming and engage with the agricultural community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/public">Explore Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Administrator</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Manage platform content and oversee community interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link to="/admin">Manage Platform</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers, experts, and supporters building a better future for agriculture
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100">
              <Link to="/farmer">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-green-700">
              <Link to="/resources">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
