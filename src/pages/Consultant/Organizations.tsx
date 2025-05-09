
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Building, MapPin, Users, Heart, Clock, CheckCircle, XCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultantOrganizations = () => {
  // Mock data for organizations
  const favoriteOrganizations = [
    {
      id: '1',
      name: 'Tech Solutions Inc.',
      logo: '',
      industry: 'Technology',
      location: 'San Francisco, CA',
      size: '50-250 employees',
      description: 'Specialized in developing custom software solutions for businesses across various industries.',
      matching: 95,
      status: 'connected',
    },
    {
      id: '2',
      name: 'Global Finance',
      logo: '',
      industry: 'Finance',
      location: 'New York, NY',
      size: '1000+ employees',
      description: 'Leading financial services company providing banking, investment, and advisory solutions.',
      matching: 87,
      status: 'applied',
    },
    {
      id: '3',
      name: 'Healthcare Innovations',
      logo: '',
      industry: 'Healthcare',
      location: 'Boston, MA',
      size: '250-1000 employees',
      description: 'Developing cutting-edge technologies and solutions for the healthcare industry.',
      matching: 82,
      status: 'favorited',
    },
  ];

  const recommendedOrganizations = [
    {
      id: '4',
      name: 'Creative Solutions',
      logo: '',
      industry: 'Marketing',
      location: 'Los Angeles, CA',
      size: '50-250 employees',
      description: 'Full-service marketing agency specializing in brand strategy and digital marketing.',
      matching: 78,
    },
    {
      id: '5',
      name: 'EduTech Platforms',
      logo: '',
      industry: 'Education',
      location: 'Austin, TX',
      size: '50-250 employees',
      description: 'Building innovative learning platforms and tools for modern education.',
      matching: 72,
    },
  ];

  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Connected</Badge>;
      case 'applied':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Applied</Badge>;
      case 'favorited':
        return <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100">Favorited</Badge>;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar role="consultant" />
        
        <div className="flex-1">
          <DashboardHeader 
            userName="Alex Johnson"
            userRole="consultant"
          />
          
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Organizations</h2>
              <p className="text-gray-600">
                Explore and connect with organizations looking for consultants.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="relative max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input 
                  placeholder="Search organizations by name, industry, or location..." 
                  className="pl-10"
                />
              </div>
            </div>
            
            <Tabs defaultValue="favorite" className="space-y-6">
              <TabsList>
                <TabsTrigger value="favorite">My Organizations</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="browse">Browse All</TabsTrigger>
              </TabsList>
              
              <TabsContent value="favorite" className="space-y-6">
                {favoriteOrganizations.map((org) => (
                  <Card key={org.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-gray-50 flex items-center justify-center p-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <Building className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                      
                      <CardContent className="md:w-3/4 p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold">{org.name}</h3>
                              {renderStatusBadge(org.status)}
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600 text-sm">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {org.location}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {org.size}
                              </div>
                              <Badge variant="outline">{org.industry}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full">
                              {org.matching}% Match
                            </div>
                          </div>
                        </div>
                        
                        <p className="mt-4 text-gray-600">
                          {org.description}
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-3">
                          {org.status === 'connected' && (
                            <Button>
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Send Message
                            </Button>
                          )}
                          
                          {org.status === 'applied' && (
                            <div className="flex items-center text-blue-600">
                              <Clock className="h-4 w-4 mr-2" />
                              Application Pending
                            </div>
                          )}
                          
                          {org.status === 'favorited' && (
                            <Button>
                              Apply for Projects
                            </Button>
                          )}
                          
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          
                          {org.status === 'favorited' ? (
                            <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                              <Heart className="h-4 w-4 mr-2 fill-pink-600" />
                              Favorited
                            </Button>
                          ) : (
                            <Button variant="outline">
                              <Heart className="h-4 w-4 mr-2" />
                              Favorite
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="recommended" className="space-y-6">
                {recommendedOrganizations.map((org) => (
                  <Card key={org.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-gray-50 flex items-center justify-center p-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                          <Building className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                      
                      <CardContent className="md:w-3/4 p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{org.name}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-gray-600 text-sm">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {org.location}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {org.size}
                              </div>
                              <Badge variant="outline">{org.industry}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full">
                              {org.matching}% Match
                            </div>
                          </div>
                        </div>
                        
                        <p className="mt-4 text-gray-600">
                          {org.description}
                        </p>
                        
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button>
                            Apply for Projects
                          </Button>
                          
                          <Button variant="outline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          
                          <Button variant="outline">
                            <Heart className="h-4 w-4 mr-2" />
                            Favorite
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="browse">
                <Card className="p-8 text-center">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Browse Organizations</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Search and filter through all available organizations in the InsightAdvantage network.
                  </p>
                  <div className="max-w-md mx-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <Input 
                        placeholder="Search by industry, location, company size..." 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ConsultantOrganizations;
