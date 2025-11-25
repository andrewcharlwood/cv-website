import {PhoneIcon} from '@heroicons/react/20/solid';
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  MapIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hero.webm';
import porfolioImage3 from '../images/portfolio/blueteq.jpg';
import porfolioImage2 from '../images/portfolio/nms.jpg';
import porfolioImage4 from '../images/portfolio/pharmetrics.jpg';
import porfolioImage1 from '../images/portfolio/ppa2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillCategory,
  SkillGroup,
  Social,
  Summary,
  TestimonialSection,
  TimelineItem,
  FooterContactLinkItem,
} from './dataDef';

// eslint-disable-next-line react-memo/require-memo
const Line = () => (
  <object
    style={{
      color: 'rgba(52, 52, 52, 0.1)',
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
      height: 2,
    }}
  />
);

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Andy Charlwood CV',
  description: 'React webapp CV',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'about',
  Portfolio: 'projects',
  Summary: 'summary',
  Resume: 'experience',
  Education: 'education',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Carousel: 'projects',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  profileImageSrc: profilepic,
  name: `Andy Charlwood`,
  description: (
    <>
      <p className="prose-sm text-stone-100 sm:prose-base lg:prose-lg">
        Strategic healthcare leader combining pharmacy expertise with advanced technical capabilities. Currently serving
        as Deputy Head of Population Health & Data Analysis at NHS Norfolk and Waveney ICB, managing a £220M prescribing
        budget and delivering £14.6M+ in efficiency savings across a 1.1 million patient population.
      </p>
      <p className="prose-sm text-stone-100 sm:prose-base lg:prose-lg">
        Proven track record developing automated solutions using Python, SQL, and Power BI that transform healthcare
        delivery at scale. In my free time, I'm a father, an avid video/photographer and a tech enthusiast.
      </p>
    </>
  ),
  actions: [
    {
      href: './A Charlwood - CV.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: 'https://www.linkedin.com/in/andrewcharlwood/',
      primary: false,
      Icon: LinkedInIcon,
    },
    {
      primary: false,
      href: 'mailto:andy@charlwood.xyz',
      Icon: EnvelopeIcon,
    },
    {
      primary: false,
      Icon: PhoneIcon,
      href: 'tel:07795553088',
    },
  ],
  aboutItems: [
    {
      id: 1,
      label: 'Location',
      text: 'Norwich, Norfolk',
      Icon: MapIcon,
    },
    {
      id: 2,
      label: 'Registration number',
      text: '2211810',
      Icon: FingerPrintIcon,
    },
    {
      id: 3,
      label: 'Interests',
      text: 'Technology, Photography, Rugby',
      Icon: SparklesIcon,
    },
    {
      id: 4,
      label: 'Education',
      text: 'Master of Pharmacy, University of East Anglia',
      Icon: AcademicCapIcon,
    },
    {
      id: 5,
      label: 'Employment',
      text: 'NHS Norfolk & Waveney Integrated Care Board',
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * About section
 */

export const summaryData: Summary = {
  description: (
    <>
      <p className="prose-base mb-4 mt-4">
        <strong>My career as a registered pharmacist started in Tesco pharmacy, Great Yarmouth.</strong> It was here
        where I first became curious about automating workflows through coding. I created a system that automatically
        checked prescription requests against dispensed items to identify unfilled requests, saving ~6 hours of staff
        time weekly.
      </p>
      <p className="prose-base mb-4">
        That first software solution sparked a passion that led me to become proficient in Python and SQL. These skills
        now enable me to deliver significant value in my current role, where I've developed algorithms identifying £2.8M
        in annual savings and automated processes that reduced months of manual work to just 3 days.
      </p>
      <p className="prose-base mb-4">
        I've initiated projects that have improved efficiencies for colleagues and clinicians across the integrated care
        system. See the{' '}
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="#projects">
          projects section
        </a>{' '}
        for examples.
      </p>
      <p className="prose-base mb-4">
        My motivation has always been to facilitate excellent healthcare. Pivoting from community pharmacy to health
        commissioning was driven by a desire to positively impact patient outcomes at a regional level—I realised I
        don't need to be patient-facing to achieve that goal.
      </p>
    </>
  ),
};

/**
 * Skills section (badge style)
 */
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Data & Analytics',
    skills: ['Power BI', 'Excel', 'pandas', 'Data Modeling'],
  },
  {
    name: 'Healthcare Systems',
    skills: ['NHS Data Systems', 'dm+d', 'Blueteq', 'EPACT', 'SystmOne'],
  },
  {
    name: 'Clinical Informatics',
    skills: ['EHR Integration', 'Population Health Management', 'Clinical Decision Support'],
  },
  {
    name: 'Regulatory',
    skills: ['NICE Guidance', 'MHRA', 'NHS Digital', 'GDPR'],
  },
];

/**
 * Skills section (legacy - keeping for reference)
 */
export const skills: SkillGroup[] = [];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PharMetrics',
    description: 'PharMetrics is an interactive platform for exploring key aspects of health economics and drug development. Discover how healthcare systems evaluate whether new drugs offer value for money. See how research study design can influence outcomes, and step into the role of big pharma navigating the complex testing and approval process in the Trials Tycoon strategy game.',
    url: 'https://medicines.charlwood.xyz/',
    image: porfolioImage4,
  },
  {
    title: 'Patient pathway analysis',
    description:
      'An interactive chart displaying patient care pathways for high-cost drugs (example provided has randomised cost/patient numbers). This graph enables an intuitive way to explore patient journeys by trust/directorate, and provides a detailed breakdown of figures such as total patients, cost, frequency of dosing, average cost per patient. Data can be filtered by date/directorate to identify trends of medicine used easily. ',
    url: './patient_pathway_analysis.html',
    image: porfolioImage1,
  },
  {
    title: 'Blueteq generator',
    description:
      'As part of my project to automate work flow relating to Blueteq forms, I created a program which automatically scrapes information from NICE technology appraisals, and generates forms for clinical review before going live. This enables minimal admin work to generate the forms in the future, but more importantly enabled us to standardise and recreate all current live forms with minimal effort.',
    url: 'https://github.com/andrewcharlwood/blueteqforms?search=1',
    image: porfolioImage3,
  },
  {
    title: 'NMS video',
    description:
      'Whilst working at Tesco as a community pharmacist, I felt there was an opportunity to expand on NMS ' +
      'provision across stores. I took the initiative in writing, and producing this ' +
      'video explaining NMS. The intention of the video was to train non-pharmacist staff members on how they can ' +
      'support with the NMS service.',
    url: 'https://www.youtube.com/watch?v=Rm1wcX92XlQ',
    image: porfolioImage2,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2024 - Current',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Deputy Head of Population Health & Data Analysis (Interim Head: May–Sept 2025)',
    grade: '',
    content: (
      <div>
        <p className="prose-base">
          Lead data analytics strategy for medicines optimisation, developing bespoke datasets and analytical frameworks
          to identify efficiency opportunities across the integrated care system serving 1.1 million population. During
          interim period, reported directly to Associate Director of Pharmacy with presentation accountability to Chief
          Medical Director.
        </p>
        <br />
        <h2 className="text-lg font-bold">Key achievements</h2>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>
              <strong>Budget Leadership:</strong> Managed £220M prescribing budget; developed £14.6M QIPP efficiency
              savings target, achieving over-target performance.
            </li>
            <li>
              <strong>Algorithm Innovation:</strong> Designed Python-based cost-optimisation algorithm identifying £2.8M
              annual savings potential across 14,000 patients (£200 average per patient).
            </li>
            <li>
              <strong>Process Transformation:</strong> Automated incentive scheme analysis, reducing process from months
              of manual work to 3 days while improving accuracy.
            </li>
            <li>
              <strong>Data Infrastructure:</strong> Created comprehensive medicines data table integrating all dm+d
              products with standardised strength calculations, morphine equivalent conversions, and ACB scoring.
            </li>
            <li>
              <strong>Clinical Safety:</strong> Created opioid monitoring dashboard converting all prescriptions to oral
              morphine equivalents, identifying high-risk patients.
            </li>
            <li>
              <strong>AI Integration:</strong> Leveraged artificial intelligence to audit repeat prescription adherence
              at system-wide scale.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    date: 'May 2022 - June 2024',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Medicines Optimisation - High cost drugs & care homes',
    grade: '',
    content: (
      <div>
        <p className="prose-base">
          Collaborated with specialists to ensure patient access to medicines mandated by new NICE technology appraisals
          (TAs) while optimizing care pathways to align with national and local guidance and minimize waste.
        </p>
        <br />
        <h2 className="text-lg font-bold">Responsibilities & achievements</h2>
        <Line />
        <div className="prose max-w-none">
          <ul>
            <li>
              Integrated Blueteq platform data with secondary care activity data, resolving data-matching limitations.
            </li>
            <li>
              Redesigned Blueteq forms based on NICE TAs, reducing forms by 70% and saving ~30 hours of admin and
              pharmacist time monthly.
            </li>
            <li>Developed primary care guidance with NSFT during the ADHD medicine shortage</li>
            <li>Created an oxygen data dashboard to identify primary care patients needing review.</li>
            <li>Completed high-cost drug pathways for rheumatology, ophthalmology, and gastroenterology.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    date: 'Nov 2017 - May 2022',
    location: 'Tesco Pharmacy',
    title: 'Pharmacy Manager',
    grade: '',
    //<p> As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a large amount of autonomy to ensure we deliver a high-quality service to our customers, whilst ensuring that safety is at the core of everything we do.</p>,
    content: (
      <>
        <p className="prose-base">
          Oversaw day-to-day pharmacy operations with autonomy to deliver high-quality, safety-focused services.
        </p>
        <br />
        <h2 className="text-lg font-bold">Responsibilities & key achievements</h2>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>
              Led regional projects, including achieving KPIs like the New Medication Service (NMS) and implementing
              national operational changes.
            </li>
            <li>Contributed to national initiatives, such as developing induction training plans for new starters.</li>
            <li>Served on the Local Pharmaceutical Committee (LPC), supporting Norfolk's community pharmacies.</li>
            <li>
              Created and executed plans to meet annual KPI targets, including customer feedback and health service
              provision.
            </li>
            <li>Managed locum pharmacist bookings and ensured an up-to-date business continuity plan.</li>
            <li>
              Handled HR responsibilities, including staff rotas, training, recruitment, performance management, and
              grievances.
            </li>
            <li>
              Collaborated with store and regional pharmacy managers via Microsoft Teams, WhatsApp, and conference
              calls.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'August 2016 - Nov 2017',
    location: 'Tesco Pharmacy',
    title: 'Duty Pharmacy Manager',
    grade: '',
    content: (
      <div>
        <p className="prose-base">
          Joined as a newly qualified pharmacist in August 2016 and, after two months, stepped up as Acting Pharmacy
          Manager.
        </p>
        <br />
        <h2 className="text-lg font-bold">Responsibilities & key achievements</h2>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>Co-led initiatives for NMS and asthma referrals, developing resources to support service provision.</li>
            <li>
              Designed a quality payments solution for asthma patient screening, implemented nationally, saving
              pharmacists 30–60 minutes daily and generating potential revenue of ~£1 million.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    date: 'July 2015 - July 2016',
    location: 'Paydens Pharmacy',
    title: 'Pre-Registration Pharmacist',
    grade: '',
    content: (
      <>
        <p className="prose-base">
          Chose to train at a busy, understaffed pharmacy offering a wide range of services, providing a strong
          foundation for my professional career.
        </p>
        <br />
        <h2 className="text-lg font-bold">Responsibilities & key achievements</h2>
        <Line />
        <div className="prose max-w-none">
          <ul>
            <li>
              Took on advanced responsibilities, including patient consultations, resolving prescription interventions,
              and supporting pharmacy staff.
            </li>
            <li>
              Undertook audits, including one which resulted in an increase in completed NMS, from less than 10% of
              target to reaching 50-60% target
            </li>
            <li>Instigated multiple PGDs, including NRT, EHC & Chlamydia screening/treatment</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'September 2009 - June 2014',
    location: "McDonald's Corporation",
    title: 'Crew Member → Trainer → Floor Manager',
    grade: '',
    content: (
      <p className="prose-base">
        Developed leadership and operational management skills in a fast-paced environment, progressing from crew member
        to floor manager overseeing teams during peak trading periods. Trained and evaluated staff performance,
        demonstrating ability to maintain service quality under pressure.
      </p>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: 'April - October 2018',
    location: 'NHS Leadership Academy',
    title: 'Mary Seacole Leadership Programme',
    grade: '78%',
    content: (
      <p className="prose-base">
        Formal NHS leadership qualification providing theoretical grounding in healthcare leadership approaches, change
        management, and system-level thinking. This programme has been the single biggest influence on how I manage and
        lead a team, teaching me to see leadership as a behaviour we employ rather than a position we hold.
      </p>
    ),
  },
  {
    date: 'September 2011 - June 2015',
    location: 'University of East Anglia',
    title: 'Master of Pharmacy (MPharm)',
    grade: '2.1',
    content: (
      <>
        <p className="prose-base">
          Developed strong academic and practical skills through research and extracurricular activities.
        </p>
        <div className="prose max-w-none">
          <ul>
            <li>
              Conducted an independent research project on drug delivery, exploring complex ideas in cocrystals,
              achieving a distinction- level grade of 75.1%.
            </li>
            <li>Demonstrated excellent consultation skills, reflected in a 4th-year OSCE result of 80%</li>
            <li>
              Honed time management, creativity, and problem-solving skills while balancing academic and extracurricular
              commitments.
            </li>
          </ul>
        </div>
        <h2 className="text-lg font-bold">Non-academic activities</h2>
        <Line />
        <div className="prose max-w-none">
          <ul>
            During my time at UEA I supported several clubs/societies as a committee member:
            <li>President - Pharmacy society</li>
            <li>Secretary/Vice-president - Ultimate frisbee</li>
            <li>Publicity officer - Alzheimer's society</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'September 2009 - June 2011',
    location: 'Highworth Grammar School',
    title: 'A-Levels: Maths, Chemistry, Politics',
    grade: 'Maths (A*), Chemistry (B), Politics (C)',
    content: <p></p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  items: [
    {
      type: ContactType.Email,
      text: 'andy@charlwood.xyz',
      href: 'mailto:andy@charlwood.xyz',
    },
    {
      type: ContactType.Location,
      text: 'Norwich, Norfolk',
      href: 'https://maps.app.goo.gl/ux5cpA2ZiV2KeVEp7',
    },
    {
      type: ContactType.Phone,
      text: '07795553088',
      href: 'tel:07795553088',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/andrewcharlwood/',
  },
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:andy@charlwood.xyz'},
  {
    label: 'Phone',
    Icon: PhoneIcon,
    href: 'tel:07795553088',
  },
];

/**
 * Footer Contact Links
 */
export const footerContactLinks: FooterContactLinkItem[] = [
  {
    label: 'Email',
    text: 'andy@charlwood.xyz',
    href: 'mailto:andy@charlwood.xyz',
    Icon: EnvelopeIcon,
  },
  {
    label: 'Location',
    text: 'Norwich, Norfolk',
    href: 'https://maps.app.goo.gl/ux5cpA2ZiV2KeVEp7',
    Icon: MapPinIcon,
  },
  {
    label: 'Phone',
    text: '07795553088',
    href: 'tel:07795553088',
    Icon: DevicePhoneMobileIcon,
  },
  {
    label: 'LinkedIn',
    text: '@andrewcharlwood',
    href: 'https://www.linkedin.com/in/andrewcharlwood/',
    Icon: LinkedInIcon,
  },
];
