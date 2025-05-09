
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Send, File, Clock, CheckCircle } from 'lucide-react';

const OrganizationMessages = () => {
  // Mock data for messages
  const conversations = [
    {
      id: '1',
      name: 'Alex Johnson',
      title: 'Strategy Consultant',
      avatar: '',
      lastMessage: 'I'd be interested in discussing your project needs further. When would be a good time to talk?',
      timestamp: '11:45 AM',
      unread: true,
    },
    {
      id: '2',
      name: 'Sarah Williams',
      title: 'Digital Marketing Specialist',
      avatar: '',
      lastMessage: 'Thank you for considering my application. I've attached my portfolio for your review.',
      timestamp: 'Yesterday',
      unread: false,
    },
    {
      id: '3',
      name: 'Michael Chen',
      title: 'IT Security Consultant',
      avatar: '',
      lastMessage: 'I have extensive experience with similar projects in your industry.',
      timestamp: 'Mar 15',
      unread: false,
    },
  ];

  const activeConversation = {
    id: '1',
    name: 'Alex Johnson',
    title: 'Strategy Consultant',
    avatar: '',
    messages: [
      {
        id: '1',
        sender: 'me',
        content: 'Hi Alex, we're looking for a strategy consultant for our upcoming market expansion project. Would you be available for a discussion?',
        timestamp: 'Mar 16, 9:30 AM',
        read: true,
      },
      {
        id: '2',
        sender: 'them',
        content: 'Hello! Thank you for reaching out. Yes, I'd be very interested in discussing your market expansion project. Could you provide more details about the scope and timeline?',
        timestamp: 'Mar 16, 10:15 AM',
        read: true,
      },
      {
        id: '3',
        sender: 'me',
        content: 'We're looking to expand into the European market in Q3 this year. The project would involve market research, strategic recommendations, and implementation planning over approximately 3 months.',
        timestamp: 'Mar 16, 10:25 AM',
        read: true,
      },
      {
        id: '4',
        sender: 'them',
        content: 'That sounds like a great opportunity. I have experience with similar expansion projects in Europe, particularly in the UK, Germany, and France. Would you like to schedule a call to discuss specifics?',
        timestamp: 'Mar 16, 10:45 AM',
        read: true,
      },
      {
        id: '5',
        sender: 'them',
        content: 'I'd be interested in discussing your project needs further. When would be a good time to talk?',
        timestamp: 'Today, 11:45 AM',
        read: false,
      },
    ]
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar role="organization" />
        
        <div className="flex-1">
          <DashboardHeader 
            userName="Tech Solutions Inc."
            userRole="organization"
          />
          
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Messages</h2>
              <p className="text-gray-600">
                Communicate with consultants about potential opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1 border overflow-hidden">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input 
                      placeholder="Search conversations..." 
                      className="pl-9"
                    />
                  </div>
                </div>
                
                <div className="divide-y max-h-[600px] overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id} 
                      className={`flex items-start p-4 gap-3 cursor-pointer hover:bg-gray-50 ${
                        conversation.id === activeConversation.id ? 'bg-gray-50' : ''
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback className="bg-brand-blue text-white">
                          {conversation.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{conversation.title}</p>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                      </div>
                      {conversation.unread && (
                        <span className="w-2 h-2 bg-brand-blue rounded-full flex-shrink-0 mt-2"></span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="lg:col-span-2 flex flex-col border overflow-hidden">
                <div className="p-4 border-b flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={activeConversation.avatar} />
                    <AvatarFallback className="bg-brand-blue text-white">
                      {activeConversation.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{activeConversation.name}</h3>
                    <p className="text-sm text-gray-500">{activeConversation.title}</p>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline" size="sm" className="gap-2">
                      <File className="h-4 w-4" />
                      View Profile
                    </Button>
                  </div>
                </div>
                
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]">
                  {activeConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'me' 
                            ? 'bg-brand-blue text-white rounded-br-none' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div 
                          className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                            message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          <span>{message.timestamp}</span>
                          {message.sender === 'me' && (
                            message.read 
                              ? <CheckCircle className="h-3 w-3" /> 
                              : <Clock className="h-3 w-3" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Type a message..." 
                      className="flex-1"
                    />
                    <Button>
                      <Send className="h-4 w-4 mr-1" /> Send
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default OrganizationMessages;
