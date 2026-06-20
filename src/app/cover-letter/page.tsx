"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Loader2, Copy, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CoverLetterPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setResult("Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Engineer position at your company. With my background in full-stack development using Next.js and a passion for creating intuitive user experiences, I am confident in my ability to make an immediate impact on your team.\n\nThroughout my career, I have consistently demonstrated a strong ability to solve complex technical challenges while keeping the end-user in mind. My recent project, an AI-powered career hub, allowed me to dive deep into modern web technologies and AI integrations.\n\nI am particularly drawn to your company's innovative approach and commitment to excellence. I would welcome the opportunity to discuss how my skills and experiences align with your needs.\n\nSincerely,\n[Your Name]");
      setIsGenerating(false);
    }, 2500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen p-6 sm:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold mb-4">Generate Cover Letter</h1>
          <p className="text-slate-400">Fill in the details below, and let our AI craft the perfect cover letter for you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 sm:p-8 rounded-2xl"
          >
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Job Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Frontend Engineer"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Company Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Acme Corp"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Your Key Skills / Resume Highlight</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="e.g. 5 years of React experience, led a team of 3, passionate about UX..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Job Description (Optional)</label>
                <textarea 
                  rows={4}
                  placeholder="Paste the job description here for a more tailored letter..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isGenerating}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Generate with AI
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="h-full"
          >
            <div className="glass h-full p-6 sm:p-8 rounded-2xl flex flex-col relative min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Generated Result</h2>
                {result && (
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                )}
              </div>

              {result ? (
                <div className="flex-1 bg-slate-900/30 rounded-xl p-6 overflow-y-auto border border-slate-700/50 whitespace-pre-wrap text-slate-300 leading-relaxed font-serif">
                  {result}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700/50 rounded-xl p-8 text-center">
                  <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  <p>Your AI-generated cover letter will appear here.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
