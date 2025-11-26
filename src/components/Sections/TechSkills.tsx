'use client';

import {Code2, Database, FileCode2, LayoutDashboard, Shield, Stethoscope} from 'lucide-react';
import React, {FC, memo, useEffect, useState} from 'react';

import {useScrollAnimation} from '@/hooks/useScrollAnimation';

// Rising counter hook for terminal stats
const useRisingCounter = (startValue: number, ratePerMinute: number, maxValue: number) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    const ratePerMs = ratePerMinute / 60000;
    const intervalMs = 100;
    const incrementPerInterval = ratePerMs * intervalMs;

    const interval = setInterval(() => {
      setCount(prev => {
        const newValue = prev + incrementPerInterval;
        if (newValue >= maxValue) return startValue;
        return newValue;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [startValue, ratePerMinute, maxValue]);

  return Math.floor(count).toLocaleString();
};

// Terminal typing animation
const TerminalLine: FC<{text: string; delay: number; isCommand?: boolean}> = memo(({text, delay, isCommand = false}) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className="font-mono text-sm leading-relaxed">
      {isCommand && <span className="text-nhs-teal">$ </span>}
      <span className={isCommand ? 'text-dash-text' : 'text-dash-muted'}>{displayText}</span>
      {!isComplete && <span className="animate-blink text-dash-accent">▋</span>}
    </div>
  );
});
TerminalLine.displayName = 'TerminalLine';

// Terminal stats with rising counters
const TerminalStats: FC<{delay: number}> = memo(({delay}) => {
  const [showStats, setShowStats] = useState(false);

  // Rows analyzed: rapid increase up to 9,999,999,999 (very fast - 500M per minute)
  const rowsAnalyzed = useRisingCounter(1000000, 500000000, 9999999999);
  // Cost optimizations: same speed as Patients Impacted (5k per minute), resets at 99,999
  const costOptimizations = useRisingCounter(10000, 5000, 99999);
  // Quality optimisations: same speed as cost
  const qualityOptimizations = useRisingCounter(8000, 5000, 99999);
  // Cost & Quality: faster (10k per minute)
  const costQualityOptimizations = useRisingCounter(5000, 10000, 99999);

  useEffect(() => {
    setShowStats(false);

    const timer = setTimeout(() => {
      setShowStats(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!showStats) {
    return (
      <div className="font-mono text-sm leading-relaxed">
        <span className="animate-blink text-dash-accent">▋</span>
      </div>
    );
  }

  return (
    <div className="font-mono text-sm leading-relaxed space-y-1">
      <div className="text-dash-muted">
        Rows analyzed: <span className="text-nhs-light-blue">{rowsAnalyzed}</span>
      </div>
      <div className="text-dash-muted">
        Cost optimizations found: <span className="text-dash-success">{costOptimizations}</span>
      </div>
      <div className="text-dash-muted">
        Quality optimisations found: <span className="text-dash-warning">{qualityOptimizations}</span>
      </div>
      <div className="text-dash-muted">
        Cost & Quality optimizations: <span className="text-purple-400">{costQualityOptimizations}</span>
      </div>
    </div>
  );
});
TerminalStats.displayName = 'TerminalStats';

// Code snippet component
const CodeSnippet: FC<{isVisible: boolean}> = memo(({isVisible}) => {
  const codeLines = [
    {code: 'import pandas as pd', color: 'text-purple-400'},
    {code: 'from sqlalchemy import create_engine', color: 'text-purple-400'},
    {code: '', color: ''},
    {code: '# NHS Prescribing Data Analysis', color: 'text-dash-muted'},
    {code: 'def calculate_savings(df):', color: 'text-nhs-light-blue'},
    {code: '    """Identify cost optimisation opportunities"""', color: 'text-dash-success'},
    {code: '    savings = df.groupby("practice_id").agg({', color: 'text-dash-text'},
    {code: '        "cost": "sum",', color: 'text-dash-warning'},
    {code: '        "patients": "count"', color: 'text-dash-warning'},
    {code: '    })', color: 'text-dash-text'},
    {code: '    return savings[savings.cost > threshold]', color: 'text-dash-text'},
  ];

  return (
    <div
      className={`bg-dash-dark rounded-lg border border-dash-border overflow-hidden transition-all duration-500
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{transitionDelay: '200ms'}}
    >
      {/* Window header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-dash-card border-b border-dash-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-sm text-dash-muted ml-2 font-mono">savings_analysis.py</span>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          {codeLines.map((line, idx) => (
            <div
              key={idx}
              className={`leading-6 transition-all duration-300
                         ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
              style={{transitionDelay: `${300 + idx * 50}ms`}}
            >
              <span className="text-dash-muted opacity-50 mr-4 select-none">{(idx + 1).toString().padStart(2, '0')}</span>
              <span className={line.color}>{line.code}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
});
CodeSnippet.displayName = 'CodeSnippet';

// Skill category component
const SkillCategory: FC<{
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
  accentColor: string;
  isVisible: boolean;
}> = memo(({icon, title, skills, delay, accentColor, isVisible}) => {
  return (
    <div
      className={`group relative bg-dash-card/50 backdrop-blur-sm rounded-xl border border-dash-border
                 p-6 hover:border-nhs-blue/50 transition-all duration-500
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{transitionDelay: `${delay * 1000}ms`}}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gradient-to-br ${accentColor} blur-xl -z-10`} />

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-dash-dark border border-dash-border">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-sm bg-dash-dark text-dash-text rounded-lg border border-dash-border
                     hover:border-nhs-light-blue/50 hover:text-nhs-light-blue transition-all duration-300
                     ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{transitionDelay: `${delay * 1000 + idx * 50}ms`}}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});
SkillCategory.displayName = 'SkillCategory';

const TechSkills: FC = memo(() => {
  const {ref: headerRef, isVisible: headerVisible} = useScrollAnimation('skills-header');
  const {ref: terminalRef, isVisible: terminalVisible} = useScrollAnimation('skills-terminal');
  const {ref: categoriesRef, isVisible: categoriesVisible} = useScrollAnimation('skills-categories');

  const skillCategories = [
    {
      icon: <Code2 className="w-5 h-5 text-nhs-light-blue" />,
      title: 'Programming',
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
      accentColor: 'from-nhs-blue/10 to-transparent',
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-nhs-teal" />,
      title: 'Data & Analytics',
      skills: ['Power BI', 'Excel (Advanced)', 'pandas', 'NumPy', 'Data Modeling', 'Statistical Analysis'],
      accentColor: 'from-nhs-teal/10 to-transparent',
    },
    {
      icon: <Database className="w-5 h-5 text-dash-warning" />,
      title: 'Healthcare Systems',
      skills: ['NHS Data Systems', 'dm+d', 'EPACT', 'Blueteq', 'SystmOne'],
      accentColor: 'from-dash-warning/10 to-transparent',
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-dash-success" />,
      title: 'Clinical Informatics',
      skills: ['Population Health', 'Patient-Level Data', 'EHR Integration', 'Clinical Decision Support', 'Prescribing Analytics'],
      accentColor: 'from-dash-success/10 to-transparent',
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-400" />,
      title: 'Regulatory & Governance',
      skills: ['NICE Guidance', 'MHRA', 'NHS Digital', 'GDPR', 'Information Governance'],
      accentColor: 'from-purple-500/10 to-transparent',
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-pink-400" />,
      title: 'Development Tools',
      skills: ['Git', 'VS Code', 'Jupyter', 'Docker'],
      accentColor: 'from-pink-500/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-24 bg-dash-bg overflow-hidden" id="skills">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-500
                     ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <span className="inline-block px-4 py-1.5 bg-nhs-blue/10 border border-nhs-blue/20 rounded-full
                         text-nhs-light-blue text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-display-sm font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-dash-muted max-w-2xl mx-auto">
            Combining healthcare domain expertise with modern data engineering and analytics capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Terminal / Code Demo */}
          <div ref={terminalRef} className="space-y-6">
            {/* Terminal window */}
            <div
              className={`bg-dash-dark rounded-lg border border-dash-border overflow-hidden transition-all duration-500
                         ${terminalVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dash-card border-b border-dash-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-dash-muted ml-2 font-mono">andy@nhs-analytics ~ </span>
              </div>

              {/* Terminal content */}
              <div className="p-4 space-y-2">
                <TerminalLine delay={0} isCommand text="python --version" />
                <TerminalLine delay={800} text="Python 3.11.5" />
                <TerminalLine delay={1600} isCommand text="sql --database prescribing_data" />
                <TerminalLine delay={2400} text="Connected to NHS Norfolk & Waveney ICB database" />
                <TerminalStats delay={3200} />
              </div>
            </div>

            {/* Code snippet */}
            <CodeSnippet isVisible={terminalVisible} />
          </div>

          {/* Right: Skill categories */}
          <div ref={categoriesRef} className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => (
              <SkillCategory
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                delay={idx * 0.1}
                accentColor={category.accentColor}
                isVisible={categoriesVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

TechSkills.displayName = 'TechSkills';
export default TechSkills;
