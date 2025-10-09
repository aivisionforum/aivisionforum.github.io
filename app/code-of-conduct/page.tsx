"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold">Code of Conduct</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-8">Version 1.0 - October 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Pledge</h2>
              <p className="text-gray-300 mb-4">
                We, as members, contributors, and leaders of the AI Vision Forum, pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
              </p>
              <p className="text-gray-300 mb-4">
                We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community focused on advancing human-centric AI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Standards</h2>
              <p className="text-gray-300 mb-4">Examples of behavior that contributes to a positive environment include:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Demonstrating empathy and kindness toward other people</li>
                <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                <li>Giving and gracefully accepting constructive feedback</li>
                <li>Accepting responsibility and apologizing to those affected by our mistakes</li>
                <li>Focusing on what is best for the overall community</li>
                <li>Showing respect for the ethical implications of AI development</li>
              </ul>
              
              <p className="text-gray-300 mb-4">Examples of unacceptable behavior include:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                <li>Public or private harassment</li>
                <li>Publishing others' private information without explicit permission</li>
                <li>Conduct which could reasonably be considered inappropriate in a professional setting</li>
                <li>Advocating for or encouraging unethical use of AI technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Enforcement Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
              </p>
              <p className="text-gray-300 mb-4">
                Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
              <p className="text-gray-300 mb-4">
                This Code of Conduct applies within all community spaces, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>GitHub repositories and discussions</li>
                <li>Mailing lists and forums</li>
                <li>Virtual and in-person events</li>
                <li>Working group meetings</li>
                <li>Social media representing AI Vision Forum</li>
              </ul>
              <p className="text-gray-300 mb-4">
                It also applies when an individual is officially representing the community in public spaces.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Enforcement</h2>
              <p className="text-gray-300 mb-4">
                Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at:
              </p>
              <p className="text-cyan-400 mb-4">contact@visionforum.ai</p>
              <p className="text-gray-300 mb-4">
                All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Enforcement Guidelines</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">1. Correction</h3>
                <p className="text-gray-300">
                  Community Impact: Use of inappropriate language or other behavior deemed unprofessional.
                </p>
                <p className="text-gray-300">
                  Consequence: A private, written warning providing clarity around the violation and an explanation of why the behavior was inappropriate.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">2. Warning</h3>
                <p className="text-gray-300">
                  Community Impact: A violation through a single incident or series of actions.
                </p>
                <p className="text-gray-300">
                  Consequence: A warning with consequences for continued behavior. No interaction with the people involved for a specified period.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">3. Temporary Ban</h3>
                <p className="text-gray-300">
                  Community Impact: A serious violation of community standards.
                </p>
                <p className="text-gray-300">
                  Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">4. Permanent Ban</h3>
                <p className="text-gray-300">
                  Community Impact: Demonstrating a pattern of violation or severe breach of community standards.
                </p>
                <p className="text-gray-300">
                  Consequence: A permanent ban from any sort of public interaction within the community.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Attribution</h2>
              <p className="text-gray-300 mb-4">
                This Code of Conduct is adapted from the Contributor Covenant, version 2.1, and customized for the unique needs of the AI Vision Forum community with emphasis on ethical AI development and human-centric values.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 mb-4">
                For questions about this Code of Conduct, please contact:
              </p>
              <p className="text-cyan-400">contact@visionforum.ai</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}