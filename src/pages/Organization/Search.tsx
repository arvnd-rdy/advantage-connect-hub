
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import SearchFilters from '@/components/SearchFilters';
import ConsultantCard from '@/components/ConsultantCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConsultantSearch = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    expertise: [],
    location: '',
    rateRange: [50, 200],
    availability: '',
  });

  // Mock consultant data
  const [consultants] = useState([
    {
      id: "1",
      name: "John Mitchell",
      title: "Strategy Consultant",
      location: "Boston, MA",
      hourlyRate: "$180",
      availability: "Full-time",
      expertise: ["Strategy", "Business Development", "Market Research"],
    },
    {
      id: "2",
      name: "Lisa Chen",
      title: "Digital Marketing Specialist",
      location: "San Francisco, CA",
      hourlyRate: "$150",
      availability: "Part-time",
      expertise: ["SEO", "Social Media", "Content Strategy"],
    },
    {
      id: "3",
      name: "Marcus Johnson",
      title: "Finance Consultant",
      location: "New York, NY",
      hourlyRate: "$200",
      availability: "Contract",
      expertise: ["Financial Analysis", "Forecasting", "Investment Strategy"],
    },
    {
      id: "4",
      name: "Sarah Williams",
      title: "HR Consultant",
      location: "Chicago, IL",
      hourlyRate: "$120",
      availability: "Full-time",
      expertise: ["Recruitment", "Training", "Organizational Development"],
    },
    {
      id: "5",
      name: "David Kim",
      title: "Technology Consultant",
      location: "Austin, TX",
      hourlyRate: "$165",
      availability: "Part-time",
      expertise: ["Cloud Migration", "IT Strategy", "System Architecture"],
    },
    {
      id: "6",
      name: "Rachel Thompson",
      title: "Operations Consultant",
      location: "Seattle, WA",
      hourlyRate: "$140",
      availability: "Contract",
      expertise: ["Process Improvement", "Supply Chain", "Lean Six Sigma"],
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: `Found ${filteredConsultants.length} consultants matching your criteria.`,
    });
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    toast({
      title: "Filters Applied",
      description: "Search results have been updated based on your filters.",
    });
  };

  // Filter the consultants based on search and filters
  const filteredConsultants = consultants.filter((consultant) => {
    // Search query filter
    if (searchQuery && 
        !consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !consultant.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !consultant.expertise.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )) {
      return false;
    }
    
    // Expertise filter
    if (filters.expertise.length > 0 && 
        !filters.expertise.some(skill => 
          consultant.expertise.some(exp => 
            exp.toLowerCase().includes(skill.toLowerCase())
          )
        )) {
      return false;
    }
    
    // Location filter
    if (filters.location && 
        !consultant.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Rate filter
    const rate = parseInt(consultant.hourlyRate.replace(/\D/g, ''));
    if (rate < filters.rateRange[0] || rate > filters.rateRange[1]) {
      return false;
    }
    
    // Availability filter
    if (filters.availability && 
        !consultant.availability.toLowerCase().includes(filters.availability.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar role="organization" />
        
        <div className="flex-1">
          <DashboardHeader 
            userName="Emma Rodriguez"
            userRole="organization"
          />
          
          <main className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Find Consultants</h2>
              <p className="text-gray-600">
                Search for consultants based on expertise, location, and availability.
              </p>
            </div>
            
            <div className="mb-8">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text"
                    placeholder="Search by name, expertise, or keywords..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <SearchFilters 
                  onFilterChange={handleFilterChange}
                  className="sticky top-6"
                />
              </div>
              
              <div className="lg:w-3/4">
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-gray-600">
                    {filteredConsultants.length} consultants found
                  </p>
                  <div>
                    {/* Sort options could go here */}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredConsultants.map((consultant) => (
                    <ConsultantCard 
                      key={consultant.id}
                      id={consultant.id}
                      name={consultant.name}
                      title={consultant.title}
                      location={consultant.location}
                      hourlyRate={consultant.hourlyRate}
                      availability={consultant.availability}
                      expertise={consultant.expertise}
                    />
                  ))}
                  
                  {filteredConsultants.length === 0 && (
                    <div className="col-span-2 py-12 text-center">
                      <p className="text-gray-500 mb-2">No consultants found matching your criteria.</p>
                      <p className="text-gray-500">Try adjusting your search or filters.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ConsultantSearch;
