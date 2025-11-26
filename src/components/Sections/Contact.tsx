'use client';

import {motion} from 'framer-motion';
import {AlertCircle, CheckCircle, Loader2, Mail, Send} from 'lucide-react';
import React, {FC, memo, useState} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: FC = memo(() => {
  const {ref: formRef, isVisible: formVisible} = useScrollAnimation('contact-form');

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState({status: 'loading', message: ''});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitState({status: 'success', message: data.message});
        setForm({name: '', email: '', subject: '', message: ''});
      } else {
        setSubmitState({status: 'error', message: data.message});
      }
    } catch {
      setSubmitState({status: 'error', message: 'Something went wrong. Please try again.'});
    }
  };

  const inputClasses = `w-full px-4 py-3 bg-dash-dark border border-dash-border text-dash-text rounded-lg
                        placeholder:text-dash-muted/60 focus:outline-none focus:ring-2 focus:ring-nhs-blue
                        focus:border-transparent transition-all duration-300`;

  return (
    <section className="relative py-24 overflow-hidden bg-dash-bg" id="contact-form">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nhs-dark-blue/20 via-dash-dark to-nhs-teal/10" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" height="40" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect fill="url(#contact-grid)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Floating shapes */}
      <motion.div
        animate={{scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1]}}
        className="absolute top-20 right-20 w-72 h-72 bg-nhs-blue/20 rounded-full blur-3xl"
        transition={{duration: 8, repeat: Infinity}}
      />
      <motion.div
        animate={{scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1]}}
        className="absolute bottom-20 left-20 w-56 h-56 bg-nhs-teal/20 rounded-full blur-3xl"
        transition={{duration: 10, repeat: Infinity}}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-600
                     ${formVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-dash-card backdrop-blur-sm
                         border border-dash-border rounded-full text-dash-accent text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get in Touch
          </span>

          <h2 className="text-display-sm font-bold text-white mb-4">
            Let's Start a Conversation
          </h2>

          <p className="text-dash-muted max-w-2xl mx-auto">
            Whether you're interested in collaboration, have questions about my work,
            or just want to connect—I'd love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={formRef}
          className={`bg-dash-card rounded-2xl border border-dash-border p-8 backdrop-blur-sm shadow-glass
                     transition-all duration-600 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {submitState.status === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dash-success/20 mb-6">
                <CheckCircle className="w-8 h-8 text-dash-success" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-dash-muted mb-6">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitState({status: 'idle', message: ''})}
                className="text-nhs-light-blue hover:text-white transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dash-muted mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dash-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dash-muted mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dash-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              {submitState.status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{submitState.message}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={submitState.status === 'loading'}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3
                         bg-nhs-blue hover:bg-nhs-bright-blue text-white font-semibold rounded-lg
                         transition-colors shadow-nhs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitState.status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
