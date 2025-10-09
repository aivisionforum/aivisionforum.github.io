"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">Effective Date: October 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the AI Vision Forum website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-gray-300 mb-4">
                AI Vision Forum provides resources, research, and collaboration opportunities for the advancement of human-centric artificial intelligence, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Access to open-source AI projects and repositories</li>
                <li>Participation in working groups and forums</li>
                <li>Educational resources and research publications</li>
                <li>Event registration and participation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">As a user of the services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use the services in compliance with all applicable laws and regulations</li>
                <li>Respect intellectual property rights of others</li>
                <li>Contribute constructively to the community</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                Content provided through AI Vision Forum is licensed under various open-source licenses as specified in individual projects. Users retain ownership of their contributions while granting AI Vision Forum a license to use, modify, and distribute such contributions in accordance with the forum&apos;s mission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Conduct</h2>
              <p className="text-gray-300 mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Use the services for any unlawful purpose</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Distribute malware or engage in harmful activities</li>
                <li>Misrepresent your affiliation with AI Vision Forum</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-300 mb-4">
                The services are provided &quot;as is&quot; without warranties of any kind, either express or implied. AI Vision Forum does not guarantee the accuracy, completeness, or usefulness of any information provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                AI Vision Forum shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Modifications</h2>
              <p className="text-gray-300 mb-4">
                AI Vision Forum reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting to the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <p className="text-cyan-400">contact@visionforum.ai</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}