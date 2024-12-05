import '..//..//node_modules//video-react//dist//video-react.css'; // import css

import {PhoneIcon} from '@heroicons/react/20/solid';
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hero.jpg';
import porfolioImage3 from '../images/portfolio/blueteq.jpg';
import porfolioImage2 from '../images/portfolio/nms.jpg';
import porfolioImage1 from '../images/portfolio/ppa2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  Summary,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

// eslint-disable-next-line react-memo/require-memo
const Line = () => (
  <hr
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
  Contact: 'contact',
  Portfolio: 'projects',
  Summary: 'summary',
  Resume: 'experience',
  Education: 'education',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
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
        As Deputy Head of Population Health & Data Analysis within the Medicines Optimisation team at the NHS Norfolk
        and Waveney ICB, I focus on leveraging data analytics to optimise medicines usage, enhance prescribing quality,
        and address health inequalities. I develop analysis via Python, SQL, and Power BI to inform and guide the
        strategic plan of the medicine optimisation team.
      </p>
      <p className="prose-sm text-stone-100 sm:prose-base lg:prose-lg">
        An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to drive
        efficiencies through automation. In my free time, I'm a father, an avid video/photographer and a tech
        enthusiast.
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
      label: 'Age',
      text: '31',
      Icon: CalendarIcon,
    },
    {
      id: 3,
      label: 'Registration number',
      text: '2211810',
      Icon: FingerPrintIcon,
    },
    {
      id: 4,
      label: 'Interests',
      text: 'Technology, Photography, Rugby',
      Icon: SparklesIcon,
    },
    {
      id: 5,
      label: 'Education',
      text: 'Master of Pharmacy, University of East Anglia',
      Icon: AcademicCapIcon,
    },
    {
      id: 6,
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
        where I first became curious to the idea of automating workflows through coding, specifically, I created and
        implemented a system that could automatically check if prescription requests to local GPs could be automatically
        checked against dispensed items to identify unfilled requests. This saved ~6 hours of staff time checking repeat
        requests by staff each week.
        <br />
        <br />
        That was the first time I built my own software solution to a problem I was facing. It led me down a path where
        I not only see the value in learning these skills but have a passion for it. This hobby led me to becoming
        proficient in python & SQL, and enables me to provide significant value in my current role as Deputy Head
        of Population Health & Data Analysis within the Medicines Optimisation team.
        <br />
        <br />
        I’ve initiated and completed projects which have improved efficiencies for my colleagues and clinicians in the wider integrated care system. To see some of these
        examples, please see the{' '}
        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="#projects">
          projects part of this page.
        </a>
        <br />
        <br />
        My motivation has always been to facilitate excellent healthcare. How I channel that motivation has changed
        massively since 2016. I realise I don't need to be patient facing to achieve that goal.
        Pivoting from community pharmacy to local health commissioning was driven by a desire to positively impact
        patient outcomes at a regional level.
      </p>
    </>
  ),
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
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

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Deputy Head of Population Health & Data Analysis, Medicines Optimisation',
    grade: '',
    content: (
      <>
        <p className="prose-base">
        </p>
        <br />
        <br />
        <h3 className="text-md font-bold">Other recent notable pieces of work:</h3>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>
              Responding to the recent ADHD medicine shortage, collaborating with NSFT to formulate guidance for primary
              care
            </li>
            <li>
              Creating an oxygen data dashboard to to support primary care clinicians to identify patient in need of
              review
            </li>
            <li>
              Completing high-cost drug pathways for a number of directorates such as rheumatology, ophthalmology and
              gastroenterology.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'May 2022 - June 2024',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Medicines Optimisation - high-cost drugs',
    grade: '',
    content: (
      <>
        <p className="prose-base">
          As the high-cost drug Pharmacist, my primary role relates to collaborating with specialists across the ICS to
          ensure patients have access to medicines mandated by new NICE technology appraisals (TA).
          <br />
          <br />I collaborate with specialists across the ICS to formulate patient care pathways which follow NICE TA
          recommendations, include local advice from specialists and follow a best value approach to delivering care to
          minimise wasteful spending.
        </p>
        <br />
        <Line />
        <br />
        <p className="prose-base">
          <strong>A substantive project</strong> I've undertaken related to the Blueteq platform, which is used to send
          approval requests for high-cost drugs to ICB. Despite our BI team having stated activity data from secondary
          care could not be connected to data from Blueteq, I was able to match all forms submitted to the relevant
          activity data.
          <br />
          <br />I proposed an entire revamp of all Blueteq forms, with automatic form generation directly from NICE TAs,
          and removing redundant forms which could now be replaced with the linked data. The results were:
        </p>
        <div className="prose max-w-none">
          <ul>
            <li>Number of forms reduced by 70%</li>
            <li>Saving ~5-6 hours of ICB admin time per week</li>
            <li>Saving ~10 hours of ICB Pharmacist time per month</li>
            <li>Reduced admin burden on secondary care clinicians</li>
            <li>Auditing of drug usage to be completed significantly faster, with greater precision</li>
          </ul>
        </div>
        <br />
        <h3 className="text-md font-bold">Other recent notable pieces of work:</h3>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>
              Responding to the recent ADHD medicine shortage, collaborating with NSFT to formulate guidance for primary
              care
            </li>
            <li>
              Creating an oxygen data dashboard to to support primary care clinicians to identify patient in need of
              review
            </li>
            <li>
              Completing high-cost drug pathways for a number of directorates such as rheumatology, ophthalmology and
              gastroenterology.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'November 2017 - May 2022',
    location: 'Tesco Pharmacy',
    title: 'Pharmacy Manager',
    grade: '',
    //<p> As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a large amount of autonomy to ensure we deliver a high-quality service to our customers, whilst ensuring that safety is at the core of everything we do.</p>,
    content: (
      <>
        <p className="prose-base">
          As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a large
          amount of autonomy to ensure we delivered a high-quality service to our customers, whilst ensuring that safety
          is at the core of everything we did.
        </p>
        <br />
        <h2 className="text-lg font-bold">Responsibilities</h2>
        <Line></Line>
        <div className="prose max-w-none">
          <ul>
            <li>
              Leading projects within my region, including KPIs such as the New Medication Service (NMS), and
              operational changes being rolled out nationally
            </li>
            <li>
              National projects, including developing a new training plan all new starters undertake on induction.
            </li>
            <li>
              As a member of the Local Pharmaceutical Committee (LPC), I worked with other pharmacy contractor
              representatives to support community pharmacies in Norfolk.
            </li>
            <li>
              Creating and implementing plans to ensure we meet our KPI targets for the financial year (e.g., customer
              service feedback, provision of health services).
            </li>
            <li>
              Being the responsible pharmacist (RP), provision of services and all functions/responsibilities related to
              being the RP.
            </li>
            <li>
              Ensuring that we are operating in a safe, and legal way is fundamental to our day to day operations.
            </li>
            <li>Booking and managing locum pharmacists</li>
            <li>
              Ensuring there is a robust business continuity plan which is up to date and accessible in the event that
              we are unable to operate as expected.
            </li>
            <li>Ensuring the pharmacy is remunerated in an accurate and timely fashion.</li>
            <li>
              HR roles including but not limited to staff rotas, training, recruitment, disciplinaries, performance
              management, and grievances.
            </li>
            <li>
              Collaboration with non-healthcare managers in store. Primarily the store manager, and other pharmacy
              managers in my region, through Microsoft Teams, WhatsApp and conference calls.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    date: 'August 2016 - November 2017',
    location: 'Tesco Pharmacy',
    title: 'Duty Pharmacy Manager',
    grade: '',
    content: (
      <p className="prose-base">
        In August 2016 I started working at Tesco as a newly qualified pharmacist, after two months of working alongside
        the Pharmacy Manager, as Duty (deputy) Pharmacy manager, I stepped up to be the acting Pharmacy Manager for the
        store.
        <br />
        <br />
        Notable work in this role include working as joint lead for NMS and asthma referrals, focussing on providing
        resources which can be used by stores to help facilitate the provision of services.
        <br />
        <br />
        One solution related to quality payments, involving screening asthma patients was implemented been used
        nationally, which saved Pharmacists ~30-60 minutes of work a day, with the potential of generating
        <strong> ~£1 million</strong> in revenue from patient identification.
      </p>
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
          As a pre-registration pharmacist I took the decision to move to a busier, understaffed pharmacy – which
          provided a much wider variety of services and gave me the opportunity to challenge myself. This provided me
          with a great foundation to begin my professional career.
          <br />
          <br />
          My responsibilities included those atypical to a pre-registration pharmacist, such as consulting patients on
          new medications, highlighting and solving prescription interventions, and providing support to other pharmacy
          staff.
          <br />
          <br />
          Other areas where I have taken the opportunity to experience and learn from include:
        </p>
        <div className="prose prose-ul:">
          <ul>
            <li>Clinically screening patient charts for a palliative care hospice</li>
            <li>Understanding and undertaking wholesale procedure</li>
            <li>
              Undertaking audits, including one which resulted in an increase in completed NMS, from less than 10% of
              target to reaching 50-60% target
            </li>
            <li>Instigating multiple PGDs, including NRT, EHC & Chlamydia screening/treatment</li>
            <li>Two-week hospital-placement at the Queen Elizabeth The Queen Mother Hospital</li>
          </ul>
        </div>
      </>
    ),
  },
];

export const education: TimelineItem[] = [
  {
    date: 'April - October 2018',
    location: 'NHS Leadership Academy',
    title: 'Mary Seacole',
    grade: '79%',
    content: (
      <p className="prose-base">
        I took the opportunity to undertake the Mary Seacole leadership programme offered by the NHS leadership academy
        when it was first made available to community pharmacists. Seacole provided me with the tools necessary to embed
        the values of healthcare leadership in my regular practice and has been the single biggest influence on how I
        manage and lead a team.
        <br />
        <br />
        The course took ~6 months to complete, and concluded with a reflective, and reflexive essay for assessment.
        <br />
        <br />
        One of the biggest shifts in perspective I had from the course was seeing leadership as a behaviour that we
        employ, rather than being restricted to a person or a position. Practical skills such as providing effective
        feedback, interviewing skills, and inspiring colleagues through techniques such as “line-of-sight” have been
        extremely effective when managing colleagues.
      </p>
    ),
  },
  {
    date: '2011 - 2015',
    location: 'University of East Anglia',
    title: 'Master of Pharmacy (MPharm)',
    grade: '2.1',
    content: (
      <>
        <p className="prose-base">
          During my time at UEA, I gained experience through a selection of societies and roles, gaining experience and
          developing skills which would benefit my career. Academically I take most pride from my research project,
          based on drug delivery, which allowed me to independently explore and research complex ideas of cocrystals.
          Throughout my studies I grew to develop excellent consultation skills, shown in my 4th year OSCE result of
          80%.
          <br />
          <br />
          My ability to work effectively, creatively, with strict time management, is shown with result of my final year
          project which attained a grade of 75.1%
          <br />
          <br />
          <b>Non-academic activities</b>
        </p>
        <Line></Line>
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
    date: '2009 - 2011',
    location: 'Highworth Grammar School',
    title: 'A-Levels',
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
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'andy@charlwood.xyz',
      href: 'mailto:andy@charlwood.xyz',
    },
    {
      type: ContactType.Location,
      text: 'Norwich, Norfolk',
      href: 'https://maps.app.goo.gl/AXTQR6nBwLC44FVA8',
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
