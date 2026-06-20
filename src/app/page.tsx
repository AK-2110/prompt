"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-5xl w-full text-center space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>The Future of Career Advancement</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          Land Your Dream Job <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            Powered by AI
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stand out from the crowd with hyper-personalized cover letters and AI-optimized resumes tailored for every application.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/cover-letter" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto">
            Generate Cover Letter
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#features" className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 glass rounded-xl hover:bg-white/10 w-full sm:w-auto">
            Explore Features
          </Link>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-20 text-left">
          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <FileText className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Generation</h3>
            <p className="text-slate-400 text-sm">Instantly generate cover letters that match your tone and the job description perfectly.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <Sparkles className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Optimization</h3>
            <p className="text-slate-400 text-sm">Our AI analyzes your resume and suggests improvements to beat ATS systems.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <Briefcase className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interview Prep</h3>
            <p className="text-slate-400 text-sm">Practice with AI mock interviews tailored to the specific role you applied for.</p>
          </motion.div>
        </motion.div>

      </motion.div>
    </main>
  );
}
