"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Copy, Trash2, Plus, LogOut, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/lib/auth';
import { getDummyEmail, listAllEmails, deleteDummyEmail } from '@/lib/api';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [emailToDelete, setEmailToDelete] = useState<string | null>(null);
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

  const confirmDeleteEmail = (dummyEmail: string) => {
    setEmailToDelete(dummyEmail);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteEmail = async () => {
    if (!token || !emailToDelete) return;
    
    setIsDeleting(emailToDelete);
    setDeleteConfirmOpen(false);
    
    try {
      await deleteDummyEmail(token, emailToDelete);
      toast({
        title: "Email alias deleted",
        description: emailToDelete,
      });
      setEmails(emails.filter(email => email.dummyEmail !== emailToDelete));
    } catch (error) {
      toast({
        title: "Failed to delete email",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(null);
      setEmailToDelete(null);
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
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-white" />
            <h1 className="text-2xl font-bold text-white">Ghstmail.me</h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white/80 text-center sm:text-left">{email}</p>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Your Email Aliases</h2>
            <Button 
              onClick={handleGenerateEmail} 
              disabled={isGenerating}
              className="bg-white text-indigo-600 hover:bg-white/90 w-full sm:w-auto"
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
                          onClick={() => confirmDeleteEmail(email.dummyEmail)}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this email alias? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm font-medium">Email alias to delete:</p>
            <p className="text-sm font-mono bg-muted p-2 rounded mt-1">{emailToDelete}</p>
          </div>
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteEmail}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}