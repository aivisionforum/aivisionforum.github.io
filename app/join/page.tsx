"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, ArrowRight, Sparkles, Globe, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function JoinMailingList() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // Generate QR code for the Groups.io join link
    const groupsIoUrl = 'https://aivisionforum.groups.io/g/members/join';
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(groupsIoUrl)}`;
    setQrCodeUrl(qrApiUrl);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-10" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation Header */}
      <div className="container max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Form and Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Join Our Community</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">CONNECT WITH</span>{" "}
              <span className="gradient-text">AI VISION FORUM</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8">
              Join our global network of AI researchers, developers, and thought leaders shaping the future of human-centric artificial intelligence.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Globe className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Global Network Access</h3>
                  <p className="text-gray-500 text-sm">Connect with leading AI researchers worldwide</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Zap className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Early Access</h3>
                  <p className="text-gray-500 text-sm">Priority registration for summits and events</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Users className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Working Group Updates</h3>
                  <p className="text-gray-500 text-sm">Latest research and initiative progress</p>
                </div>
              </motion.div>
            </div>

            {/* Subscription Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-dark rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                Subscribe to Our Mailing List
              </h2>
              
              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Click the button below to join our mailing list and connect with the global AI Vision Forum community.
                </p>
                
                <motion.a
                  href="https://aivisionforum.groups.io/g/members/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 btn-strategic px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Join Our Mailing List
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-800">
                  <p className="text-sm text-gray-500">
                    You will be redirected to Groups.io to complete your subscription
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </motion.div>
          </div>

          {/* Right Column - QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="glass-dark rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quick Access via QR Code
              </h3>
              <p className="text-gray-400 mb-6">
                Scan this code to instantly access the subscription page
              </p>
              
              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-xl inline-block mb-6">
                {qrCodeUrl && (
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code for joining AI Vision Forum mailing list"
                    className="w-64 h-64"
                  />
                )}
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-cyan-400 font-mono break-all">
                  aivisionforum.groups.io/g/members/join
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-2xl font-bold text-cyan-400">5K+</div>
                <div className="text-xs text-gray-500 uppercase">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-xs text-gray-500 uppercase">Working Groups</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">20+</div>
                <div className="text-xs text-gray-500 uppercase">Partners</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}