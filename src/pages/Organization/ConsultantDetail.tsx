
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle, 
  MessageSquare, 
  Heart, 
  Share2,
  ArrowLeft,
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConsultantDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState('basic');

  // Mock detailed consultant data
  const consultant = {
    id: "1",
    name: "John Mitchell",
    username: "johnmitchell",
    title: "I will create strategic business plans that drive growth and success",
    location: "Boston, MA",
    avatar: "",
    rating: 5.0,
    reviewCount: 119,
    level: "Top Rated",
    memberSince: "Mar 2022",
    lastDelivery: "about 2 hours",
    responseTime: "1 hour",
    languages: ["English", "Spanish"],
    skills: ["Strategic Planning", "Business Development", "Market Research", "Financial Modeling", "Competitive Analysis"],
    description: "I'm a senior strategy consultant with over 8 years of experience helping businesses scale and grow. I've worked with Fortune 500 companies and startups alike, developing comprehensive business strategies that drive results. My approach combines data-driven insights with creative problem-solving to deliver actionable plans that your team can implement immediately.",
    education: [
      { degree: "MBA in Strategy", school: "Harvard Business School", year: "2018" },
      { degree: "BS in Economics", school: "MIT", year: "2014" }
    ],
    certifications: ["Certified Management Consultant (CMC)", "Six Sigma Black Belt"],
    packages: [
      {
        name: "Basic",
        price: "136.67",
        originalPrice: "160.76",
        delivery: "4 days",
        revisions: "1",
        description: "Strategic business plan with market analysis",
        features: [
          "Market research and analysis",
          "Business model canvas",
          "Financial projections (1 year)",
          "Executive summary",
          "1 revision included"
        ]
      },
      {
        name: "Standard",
        price: "273.34",
        originalPrice: "321.52",
        delivery: "7 days",
        revisions: "2",
        description: "Comprehensive strategy with implementation roadmap",
        features: [
          "Everything in Basic",
          "3-year financial projections",
          "Go-to-market strategy",
          "Risk assessment",
          "Implementation timeline",
          "2 revisions included",
          "1-hour strategy call"
        ]
      },
      {
        name: "Premium",
        price: "546.68",
        originalPrice: "643.04",
        delivery: "10 days",
        revisions: "Unlimited",
        description: "Complete strategic transformation package",
        features: [
          "Everything in Standard",
          "5-year strategic roadmap",
          "Organizational design",
          "Change management plan",
          "KPI framework",
          "Unlimited revisions",
          "Weekly check-ins (4 weeks)",
          "Team training session"
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah K.",
        rating: 5,
        date: "1 week ago",
        comment: "Exceptional work! John delivered a comprehensive business strategy that exceeded our expectations. The market analysis was thorough and the financial projections were spot-on. Highly recommended!",
        helpful: 12
      },
      {
        id: 2,
        author: "Mike R.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Working with John was a game-changer for our startup. His strategic insights helped us pivot our business model and secure funding. Professional, timely, and incredibly knowledgeable.",
        helpful: 8
      },
      {
        id: 3,
        author: "Lisa M.",
        rating: 4,
        date: "1 month ago",
        comment: "Great strategic thinking and clear communication throughout the process. The deliverables were well-structured and actionable. Would definitely work with John again.",
        helpful: 5
      }
    ],
    portfolio: [
      {
        id: 1,
        title: "Tech Startup Growth Strategy",
        description: "Helped a SaaS startup develop a go-to-market strategy that resulted in 300% user growth",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "E-commerce Expansion Plan",
        description: "Created international expansion strategy for e-commerce company entering European markets",
        image: "/placeholder.svg"
      }
    ],
    faq: [
      {
        question: "What information do you need to get started?",
        answer: "I'll need basic information about your business, current challenges, target market, and financial goals. I'll send you a detailed questionnaire once you place your order."
      },
      {
        question: "Do you provide ongoing support after delivery?",
        answer: "Yes! All packages include post-delivery support. Premium packages include 4 weeks of weekly check-ins to help with implementation."
      },
      {
        question: "Can you work with startups and established businesses?",
        answer: "Absolutely! I have experience with both early-stage startups and Fortune 500 companies. My approach adapts to your business size and stage."
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const handleContact = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to John Mitchell. They typically respond within 1 hour.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Consultant Saved",
      description: "John Mitchell has been added to your saved consultants.",
    });
  };

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
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link to="/organization/search" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to search results
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Service Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={consultant.avatar} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {consultant.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{consultant.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          {renderStars(Math.floor(consultant.rating))}
                          <span className="font-medium">{consultant.rating}</span>
                          <span>({consultant.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {consultant.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-4">{consultant.title}</h1>
                  
                  {/* Service Images */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="col-span-2 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                    <div className="space-y-2">
                      <div className="h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg"></div>
                      <div className="h-30 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews ({consultant.reviewCount})</TabsTrigger>
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>About this service</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{consultant.description}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Skills & Expertise</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {consultant.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="space-y-4">
                    {consultant.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">{review.author}</span>
                                <div className="flex items-center gap-1">
                                  {renderStars(review.rating)}
                                </div>
                              </div>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <p className="text-xs text-gray-500">Helpful ({review.helpful})</p>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="portfolio" className="space-y-4">
                    {consultant.portfolio.map((item) => (
                      <Card key={item.id}>
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium mb-2">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="faq" className="space-y-4">
                    {consultant.faq.map((item, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">{item.question}</h4>
                          <p className="text-gray-600">{item.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Package Selection */}
                <Card className="sticky top-6">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Choose a package</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={handleSave}>
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={selectedPackage} onValueChange={setSelectedPackage}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="basic" className="text-xs">Basic</TabsTrigger>
                        <TabsTrigger value="standard" className="text-xs">Standard</TabsTrigger>
                        <TabsTrigger value="premium" className="text-xs">Premium</TabsTrigger>
                      </TabsList>
                      
                      {consultant.packages.map((pkg) => (
                        <TabsContent key={pkg.name.toLowerCase()} value={pkg.name.toLowerCase()}>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-3xl font-bold">CA${pkg.price}</span>
                                <span className="text-sm text-gray-500 line-through">CA${pkg.originalPrice}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <span>{pkg.delivery} delivery</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="h-4 w-4 text-gray-500" />
                                  <span>{pkg.revisions} revision{pkg.revisions !== "1" ? "s" : ""}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                {pkg.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <Button className="w-full" size="lg">
                              Continue (CA${pkg.price})
                            </Button>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                    
                    <Button variant="outline" className="w-full mt-4" onClick={handleContact}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact me
                    </Button>
                  </CardContent>
                </Card>

                {/* Consultant Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">About the consultant</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={consultant.avatar} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                          {consultant.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold">{consultant.name}</h3>
                        <p className="text-sm text-gray-600">@{consultant.username}</p>
                        <Badge className="mt-1">{consultant.level}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">From</span>
                        <span className="font-medium">{consultant.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Member since</span>
                        <span className="font-medium">{consultant.memberSince}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Avg. response time</span>
                        <span className="font-medium">{consultant.responseTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Last delivery</span>
                        <span className="font-medium">{consultant.lastDelivery}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Languages</span>
                        <span className="font-medium">{consultant.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Education</h4>
                      <div className="space-y-2">
                        {consultant.education.map((edu, index) => (
                          <div key={index} className="text-sm">
                            <p className="font-medium">{edu.degree}</p>
                            <p className="text-gray-600">{edu.school}, {edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Certifications</h4>
                      <div className="space-y-1">
                        {consultant.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ConsultantDetail;
