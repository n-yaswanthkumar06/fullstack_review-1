import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleRoleSelect = (role: string) => {
    setCurrentRole(role);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="size-8 text-green-600" />
              <span className="text-xl font-semibold text-gray-900">AgriConnect</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/resources" 
                className={`text-sm ${isActive('/resources') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Resources
              </Link>
              <Link 
                to="/sectors" 
                className={`text-sm ${isActive('/sectors') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Sectors
              </Link>
              <Link 
                to="/discussions" 
                className={`text-sm ${isActive('/discussions') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Discussions
              </Link>
              <Link 
                to="/initiatives" 
                className={`text-sm ${isActive('/initiatives') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Initiatives
              </Link>
            </nav>

            {/* Role Selection */}
            <div className="hidden md:flex items-center gap-2">
              {!currentRole ? (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRoleSelect('public')}
                    asChild
                  >
                    <Link to="/public">Public</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRoleSelect('farmer')}
                    asChild
                  >
                    <Link to="/farmer">Farmer</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRoleSelect('expert')}
                    asChild
                  >
                    <Link to="/expert">Expert</Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRoleSelect('admin')}
                    asChild
                  >
                    <Link to="/admin">Admin</Link>
                  </Button>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-600 capitalize">{currentRole}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setCurrentRole(null)}
                  >
                    Switch Role
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-6 text-gray-700" />
              ) : (
                <Menu className="size-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <Link 
                  to="/resources" 
                  className="text-sm text-gray-700 hover:text-green-600 px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link 
                  to="/sectors" 
                  className="text-sm text-gray-700 hover:text-green-600 px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sectors
                </Link>
                <Link 
                  to="/discussions" 
                  className="text-sm text-gray-700 hover:text-green-600 px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Discussions
                </Link>
                <Link 
                  to="/initiatives" 
                  className="text-sm text-gray-700 hover:text-green-600 px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Initiatives
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <div className="text-xs text-gray-500 px-2 mb-2">Select Role</div>
                  <Link to="/public" onClick={() => handleRoleSelect('public')} className="block px-2 py-1 text-sm text-gray-700">Public</Link>
                  <Link to="/farmer" onClick={() => handleRoleSelect('farmer')} className="block px-2 py-1 text-sm text-gray-700">Farmer</Link>
                  <Link to="/expert" onClick={() => handleRoleSelect('expert')} className="block px-2 py-1 text-sm text-gray-700">Expert</Link>
                  <Link to="/admin" onClick={() => handleRoleSelect('admin')} className="block px-2 py-1 text-sm text-gray-700">Admin</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="size-6 text-green-500" />
                <span className="text-lg font-semibold">AgriConnect</span>
              </div>
              <p className="text-sm text-gray-400">
                Empowering farmers and raising awareness about the importance of agriculture in our society.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link to="/resources" className="text-sm text-gray-400 hover:text-white">Resources</Link>
                <Link to="/sectors" className="text-sm text-gray-400 hover:text-white">Sector Connections</Link>
                <Link to="/discussions" className="text-sm text-gray-400 hover:text-white">Discussions</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">support@agriconnect.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2026 AgriConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
