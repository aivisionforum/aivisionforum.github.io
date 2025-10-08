"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Globe, Clock, Users, Zap } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: "AI VISION SUMMIT PARIS",
      subtitle: "Open Source AI Strategy Forum",
      date: "MAY 2025",
      location: "Paris, France",
      attendees: "200+",
      description: "Strategic discussions on collaborative frameworks for next-generation AI development.",
      link: "https://paris2025.gosim.org/os-ai-strategy-forum/",
      status: "REGISTRATION OPEN",
      upcoming: true,
      featured: true
    },
    {
      id: 2,
      title: "GLOBAL AI COOPERATION SUMMIT",
      subtitle: "Annual Forum Hangzhou",
      date: "SEPTEMBER 2025",
      location: "Hangzhou, China",
      attendees: "300+",
      description: "Convergence of global AI leaders, researchers, and policymakers from 20+ nations.",
      link: "https://forum.gosim.org",
      status: "EARLY BIRD",
      upcoming: true,
      featured: true
    },
    {
      id: 3,
      title: "GOSIM AI VISION FORUM 2024",
      subtitle: "Inaugural Summit",
      date: "OCTOBER 2024",
      location: "Virtual & Hybrid",
      attendees: "500+",
      description: "Foundation summit establishing five strategic working groups for human-centered AI.",
      link: null,
      status: "COMPLETED",
      upcoming: false,
      featured: false
    }
  ];

  const upcomingEvents = events.filter(e => e.upcoming);
  const pastEvents = events.filter(e => !e.upcoming);
  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="section bg-gradient-to-b from-black via-gray-950 to-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-futuristic opacity-10" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-dark rounded-full mb-8"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Global Convergence</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">STRATEGIC</span>{" "}
            <span className="gradient-text">SUMMITS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-level forums shaping the trajectory of artificial intelligence governance
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass-dark rounded-full p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-bold tracking-wider ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              UPCOMING
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-bold tracking-wider ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ARCHIVE
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {displayEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className={`card-executive h-full p-8 ${event.featured ? 'border-cyan-400/50' : ''}`}>
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                      event.status === 'REGISTRATION OPEN' ? 'bg-green-400/20 text-green-400' :
                      event.status === 'EARLY BIRD' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-gray-600/20 text-gray-400'
                    }`}>
                      {event.status}
                    </span>
                    {event.featured && (
                      <Zap className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-cyan-400 mb-6 font-medium">{event.subtitle}</p>
                  
                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-5 h-5 mr-3 text-cyan-400/60" />
                      <span className="font-bold">{event.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-5 h-5 mr-3 text-purple-400/60" />
                      <span>{event.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      <Users className="w-5 h-5 mr-3 text-green-400/60" />
                      <span>{event.attendees} Delegates</span>
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-500 mb-8">{event.description}</p>
                  
                  {/* Action Button */}
                  {event.link && (
                    <motion.a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 font-bold group"
                      whileHover={{ x: 5 }}
                    >
                      ACCESS PORTAL
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Local Meetups Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass-dark rounded-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">REGIONAL NETWORKS</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Establishing local AI Vision Forum chapters worldwide for continuous 
              engagement and regional innovation initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 border border-cyan-400/20 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500 uppercase">Active Forums</div>
              </div>
              <div className="p-4 border border-purple-400/20 rounded-lg">
                <Globe className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">45+</div>
                <div className="text-xs text-gray-500 uppercase">Cities</div>
              </div>
              <div className="p-4 border border-green-400/20 rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">5K+</div>
                <div className="text-xs text-gray-500 uppercase">Members</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://aivisionforum.groups.io/g/meetups"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-strategic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FIND LOCAL CHAPTER
              </motion.a>
              <motion.a
                href="mailto:events@visionforum.ai"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ESTABLISH CHAPTER
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;