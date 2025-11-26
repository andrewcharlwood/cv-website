'use client';

import {motion} from 'framer-motion';
import {Database, LineChart, Users, Wallet} from 'lucide-react';
import Image from 'next/image';
import React, {FC, memo, useEffect, useState} from 'react';

import profilePic from '@/images/profilepic.jpg';

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, prefix: string = '', suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, hasAnimated]);

  return `${prefix}${count.toLocaleString()}${suffix}`;
};

// Slowly rising counter hook (for patients impacted)
const useRisingCounter = (startValue: number, ratePerMinute: number, maxValue: number) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    // Rate per millisecond
    const ratePerMs = ratePerMinute / 60000;
    const intervalMs = 100; // Update every 100ms for smooth animation
    const incrementPerInterval = ratePerMs * intervalMs;

    const interval = setInterval(() => {
      setCount(prev => {
        const newValue = prev + incrementPerInterval;
        if (newValue >= maxValue) {
          return startValue; // Reset to start
        }
        return newValue;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [startValue, ratePerMinute, maxValue]);

  return Math.floor(count).toLocaleString();
};

// Metric Card Component
const MetricCard: FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
  color: 'blue' | 'teal' | 'green' | 'amber';
}> = memo(({icon, value, label, delay = 0, color}) => {
  const colorClasses = {
    blue: 'from-nhs-blue/20 to-nhs-dark-blue/20 border-nhs-blue/30 text-nhs-light-blue',
    teal: 'from-nhs-teal/20 to-nhs-teal/10 border-nhs-teal/30 text-nhs-teal',
    green: 'from-dash-success/20 to-dash-success/10 border-dash-success/30 text-dash-success',
    amber: 'from-dash-warning/20 to-dash-warning/10 border-dash-warning/30 text-dash-warning',
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay}}
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-br ${colorClasses[color]}
                  backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-300`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-10">
        {icon}
      </div>
      <div className="inline-flex p-2 rounded-lg bg-dash-card mb-3">
        {React.cloneElement(icon as React.ReactElement, {className: `w-5 h-5 ${colorClasses[color].split(' ').pop()}`})}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-dash-muted">{label}</div>
    </motion.div>
  );
});
MetricCard.displayName = 'MetricCard';

// Typing animation component
const TypeWriter: FC<{text: string; className?: string}> = memo(({text, className}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
});
TypeWriter.displayName = 'TypeWriter';

const DashboardHero: FC = memo(() => {
  const budgetValue = useCounter(220, 2000, '£', 'M');
  const savingsValue = useCounter(14.6, 2000, '£', 'M');
  const populationValue = useCounter(1.1, 2000, '', 'M');
  // Rising counter: starts at 10k, increases 5k per minute, resets at 99,999
  const patientsValue = useRisingCounter(10000, 5000, 99999);

  return (
    <section className="relative bg-dash-bg overflow-hidden" id="about">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dash-bg via-dash-dark to-nhs-dark-blue/30 opacity-80" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-nhs-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-nhs-teal/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Profile & Info */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            {/* Status badge */}
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dash-card/80 border border-dash-border mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dash-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dash-success" />
              </span>
              <span className="text-sm text-dash-muted">Open to the right conversation</span>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{scale: 0.8, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{delay: 0.3, duration: 0.5}}
              className="relative w-32 h-32 mb-6"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-nhs-blue to-nhs-teal animate-pulse-slow" />
              <Image
                src={profilePic}
                alt="Andy Charlwood"
                className="relative rounded-full border-4 border-dash-bg object-cover w-full h-full"
              />
            </motion.div>

            {/* Name & Title */}
            <h1 className="text-display-lg font-bold text-white mb-4">
              Andy Charlwood
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl text-nhs-light-blue font-mono">
                <TypeWriter text="Healthcare Data Analytics Leader" />
              </span>
            </div>

            {/* Brief description */}
            <p className="text-lg text-dash-muted leading-relaxed mb-8 max-w-xl">
              MPharm, GPhC Registered Pharmacist combining clinical expertise with advanced
              Python, SQL, and data analytics to transform healthcare delivery at scale.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="./A Charlwood - CV.pdf"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="inline-flex items-center gap-2 px-6 py-3 bg-nhs-blue hover:bg-nhs-bright-blue
                         text-white font-semibold rounded-lg transition-colors shadow-nhs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/andrewcharlwood/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="inline-flex items-center gap-2 px-6 py-3 bg-dash-card hover:bg-dash-card-hover
                         text-white font-semibold rounded-lg border border-dash-border transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://outlook.office.com/bookwithme/user/3eddc371355640369e548efa616777b8@nhs.net/meetingtype/540mDOOnJkqyivaaACmZUQ2?bookingcode=e4540d8c-17fa-4732-bfc7-efb9fe1e1e97&anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="inline-flex items-center gap-2 px-6 py-3 bg-nhs-teal hover:bg-nhs-teal/80
                         text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Chat
              </motion.a>
            </div>
          </motion.div>

          {/* Right column - Metrics Dashboard */}
          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              icon={<Wallet className="w-full h-full" />}
              value={budgetValue}
              label="Prescribing Budget Managed"
              delay={0.4}
              color="blue"
            />
            <MetricCard
              icon={<LineChart className="w-full h-full" />}
              value={savingsValue}
              label="Efficiency Savings Delivered"
              delay={0.5}
              color="green"
            />
            <MetricCard
              icon={<Users className="w-full h-full" />}
              value={populationValue}
              label="Patient Population Served"
              delay={0.6}
              color="teal"
            />
            <MetricCard
              icon={<Database className="w-full h-full" />}
              value={patientsValue}
              label="Patients Impacted by Analytics"
              delay={0.7}
              color="amber"
            />
          </div>
        </div>

      </div>
    </section>
  );
});

DashboardHero.displayName = 'DashboardHero';
export default DashboardHero;
