"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">Last updated: October 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                AI Vision Forum (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Personal Data: Name, email address, and organization affiliation when you register for events or join mailing lists</li>
                <li>Usage Data: Information about how you interact with our website</li>
                <li>Contributions: Content you provide through GitHub repositories or forum discussions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Facilitate participation in AI Vision Forum activities and events</li>
                <li>Send updates about our initiatives, research, and community activities</li>
                <li>Improve our website and services</li>
                <li>Foster collaboration within the AI community</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Partner organizations for collaborative initiatives</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-cyan-400">contact@visionforum.ai</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}