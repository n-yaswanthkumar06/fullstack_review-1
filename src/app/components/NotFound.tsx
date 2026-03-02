import { Link } from "react-router";
import { Button } from "./ui/button";
import { Sprout } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Sprout className="size-24 text-green-600 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/resources">Browse Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
