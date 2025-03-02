"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Copy, Trash2, Plus, LogOut, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/lib/auth';
import { getDummyEmail, listAllEmails, deleteDummyEmail } from '@/lib/api';
import { motion } from 'framer-motion';

type DummyEmail = {
  _id: string;
  dummyEmail: string;
  originalEmail: string;
};

export default function Dashboard() {
  const [emails, setEmails] = useState<DummyEmail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();
  const { token, email, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    fetchEmails();
  }, [isAuthenticated, router]);

  const fetchEmails = async () => {
    if (!token) return;
    
    try {
      const data = await listAllEmails(token);
      setEmails(data);
    } catch (error) {
      toast({
        title: "Failed to fetch emails",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateEmail = async () => {
    if (!token) return;
    
    setIsGenerating(true);
    try {
      const data = await getDummyEmail(token);
      toast({
        title: "Email alias created",
        description: data.dummyEmail,
      });
      fetchEmails();
    } catch (error) {
      toast({
        title: "Failed to generate email",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDeleteEmail = async (dummyEmail: string) => {
    if (!token) return;
    
    setIsDeleting(dummyEmail);
    try {
      await deleteDummyEmail(token, dummyEmail);
      toast({
        title: "Email alias deleted",
        description: dummyEmail,
      });
      setEmails(emails.filter(email => email.dummyEmail !== dummyEmail));
    } catch (error) {
      toast({
        title: "Failed to delete email",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(null);
    }
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Copied to clipboard",
      description: email,
    });
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-indigo-600">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-white" />
            <h1 className="text-2xl font-bold text-white">Ghstmail.me</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-white/80">{email}</p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 text-white hover:bg-white/20 border-white/20"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        <main className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">Your Email Aliases</h2>
            <Button 
              onClick={handleGenerateEmail} 
              disabled={isGenerating}
              className="bg-white text-indigo-600 hover:bg-white/90"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Generate New Alias
                </>
              )}
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            </div>
          ) : emails.length === 0 ? (
            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white">
              <CardHeader>
                <CardTitle>No email aliases yet</CardTitle>
                <CardDescription className="text-white/70">
                  Generate your first email alias to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleGenerateEmail} 
                  disabled={isGenerating}
                  className="bg-white text-indigo-600 hover:bg-white/90"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Generate New Alias
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emails.map((email, index) => (
                <motion.div
                  key={email._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium truncate">{email.dummyEmail}</CardTitle>
                      <CardDescription className="text-white/70">
                        Forwards to {email.originalEmail}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/10 text-white hover:bg-white/20 border-white/20"
                          onClick={() => handleCopyEmail(email.dummyEmail)}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/10 text-white hover:bg-red-500/20 border-white/20"
                          onClick={() => handleDeleteEmail(email.dummyEmail)}
                          disabled={isDeleting === email.dummyEmail}
                        >
                          {isDeleting === email.dummyEmail ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}