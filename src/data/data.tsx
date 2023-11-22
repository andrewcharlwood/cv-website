import 'node_modules/video-react/dist/video-react.css'; // import css
import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BuildingOffice2Icon,
    CalendarIcon,
    EnvelopeIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';
import React from "react";


import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage3 from '../images/portfolio/blueteq.jpg';
import porfolioImage2 from '../images/portfolio/nms.jpg';
import porfolioImage1 from '../images/portfolio/ppa2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    Letter,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';
import {PhoneIcon} from "@heroicons/react/20/solid";


// eslint-disable-next-line react-memo/require-memo
const Line = () => (<hr
    style={{
        color: 'rgba(52, 52, 52, 0.05)', backgroundColor: 'rgba(52, 52, 52, 0.25)', height: 2,
    }}
/>);


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Andrew Charlwood CV', description: "React webapp CV",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'projects',
    Letter: 'letter',
    Resume: 'experience',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage, name: `Hey, I'm Andy`, description: (<>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            <strong className="text-stone-100">I'm a Norfolk based medicine optimisation Pharmacist</strong>,
            currently working
            at the <strong className="text-stone-100">Norfolk & Waveney ICB</strong>. I'm focussed on
            high-cost drugs, data analysis, and implementing innovative solutions to drive efficiency's within the
            team.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            In my free time time, I'm an avid video/photographer
            {' '}
            (the background to this page is from a trip to Verona), and a tech enthusiast who's a self-taught
            developer (largely python) for data analysis, simple apps and AI.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            I believe the use of data is still one of the most under utilised resources available to the NHS. At the
            Eclipse conference I was extremely impressed not only with the platform, but the values the company
            stood for, and the passion the team had for their work.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            I wanted to demonstrate how enthusiastic I am about the prospect of working with Eclipse in the future, in a
            unique way. I decided to create this website to host my CV, with some examples of my work.
        </p>
    </>), actions: [{
        href: '/assets/resume.pdf', text: 'CV PDF', primary: true, Icon: ArrowDownTrayIcon,
    }, {
        href: `#${SectionId.Contact}`, text: 'Contact', primary: false,
    },],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.`,
    aboutItems: [{label: 'Location', text: 'Norwich, Norfolk', Icon: MapIcon}, {
        label: 'Age',
        text: '30',
        Icon: CalendarIcon
    }, {label: 'Registration number', text: '2211810', Icon: FlagIcon}, {
        label: 'Interests',
        text: 'Technology, Photography, Rugby',
        Icon: SparklesIcon
    }, {label: 'Study', text: 'University of East Anglia', Icon: AcademicCapIcon}, {
        label: 'Employment',
        text: 'Norfolk & Waveney ICB',
        Icon: BuildingOffice2Icon
    },],
};

/**
 * About section
 */
export const letterData: Letter = {
    description: `An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.
  An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.
  An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.An innovative, data-driven medicine optimisation Pharmacist with a passion for utilising technology to 
  drive efficiencies through automation. With an extensive background in community pharmacy before moving into local 
  health commissioning, I’ve worked on both regional and national projects in both sectors.`,
};


/**
 * Skills section
 */
export const skills: SkillGroup[] = [{
    name: 'Spoken languages', skills: [{
        name: 'English', level: 10,
    }, {
        name: 'French', level: 4,
    }, {
        name: 'Spanish', level: 3,
    },],
}, {
    name: 'Frontend development', skills: [{
        name: 'React', level: 9,
    }, {
        name: 'Typescript', level: 7,
    }, {
        name: 'GraphQL', level: 6,
    },],
}, {
    name: 'Backend development', skills: [{
        name: 'Node.js', level: 8,
    }, {
        name: 'Rust', level: 5,
    }, {
        name: 'Golang', level: 4,
    },],
}, {
    name: 'Mobile development', skills: [{
        name: 'React Native', level: 9,
    }, {
        name: 'Flutter', level: 4,
    }, {
        name: 'Swift', level: 3,
    },],
},];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [{
    title: 'Patient pathway analysis',
    description: 'An interactive chart displaying patient care pathways for high cost drugs (randomised cost/patient numbers)',
    url: './patient_pathway_analysis.html',
    image: porfolioImage1,
}, {
    title: 'Blueteq generator',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/andrewcharlwood/blueteqforms?search=1',
    image: porfolioImage3,

}, {
    title: 'NMS video',
    description: 'Give a short description of your project here.',
    url: 'https://www.youtube.com/watch?v=Rm1wcX92XlQ',
    image: porfolioImage2,

},];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [{
    date: 'May 2022 - Present',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Medicines Optimisation - High cost drugs',
    grade: "",
    content: (<ul>
            As the high cost drug Pharmacist, my primary role relates to collaborating with specialists across the
            ICS to ensure patients have access to medicines mandated by new NICE technology appraisals (TA).
            <br/>
            <br/>
            I collaborate with specialists across the ICS to formulate patient care pathways which follow NICE TA
            recommendations, include local advice from specialists and follow a best value approach to delivering
            care to minimise wasteful spending.
            <br/>
            <br/>
            <b>Recent notable projects</b>
            <Line/>
            One substantive project I've undertaken related to the Blueteq platform, which is used to send approval
            requests for high-cost drugs to ICB. Despite our BI team having stated activity data from secondary care
            could not be connected to data from Blueteq, I was able to match all forms submitted to the
            relevant activity data.
            <br/>
            <br/>
            I proposed an entire revamp of all Blueteq forms, with automatic form generation directly from NICE TAs,
            and removing redundant forms which could now be replaced with the linked data. The results were:
            <br/><br/>

            <li> &#8226; Number of forms reduced by 70%</li>
            <li> &#8226; Saving ~5-6 hours of ICB admin time per week</li>
            <li> &#8226; Saving ~10 hours of ICB Pharmacist time per month</li>
            <li> &#8226; Reduced admin burden on secondary care clinicians</li>
            <li> &#8226; Auditing of drug usage to be completed significantly faster, with greater precision</li>

            <br/>
            Other recent notable pieces of work include:

            <li> &#8226; Responding to the recent ADHD medicine shortage with NSFT to formulate guidance for primary
                cares</li>
            <li> &#8226; </li>
        </ul>

    ),
}, {
    date: 'November 2017 - May 2022',
    location: 'Tesco Pharmacy',
    title: 'Pharmacy Manager',
    grade: "",
    content: (//<p> As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a large amount of autonomy to ensure we deliver a high-quality service to our customers, whilst ensuring that safety is at the core of everything we do.</p>,
        <ul>
            As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a
            large amount of autonomy to ensure we deliver a high-quality service to our customers, whilst ensuring
            that safety is at the core of everything we do
            <br/>
            <br/>
            <b>Responsibilities</b>
            <Line></Line>
            <li> &#8226; Leading projects within my region, including KPIs such as the New Medication Service (NMS),
                and operational changes being rolled out nationally
            </li>
            <li> &#8226; National projects, including developing a new training plan all new starters undertake on
                induction.
            </li>
            <li> &#8226; As a member of the Local Pharmaceutical Committee (LPC), I worked with other pharmacy
                contractor representatives to support community pharmacies in Norfolk.
            </li>
            <li> &#8226; Creating and implementing plans to ensure we meet our KPI targets for the financial year
                (e.g., customer service feedback, provision of health services).
            </li>
            <li> &#8226; Being the responsible pharmacist (RP), provision of services and all
                functions/responsibilities related to being the RP.
            </li>
            <li> &#8226; Ensuring that we are operating in a safe, and legal way is fundamental to our day to day
                operations.
            </li>
            <li> &#8226; Booking and managing locum pharmacists</li>
            <li> &#8226; Ensuring there is a robust business continuity plan which is up to date and accessible in
                the event that we are unable to operate as expected.
            </li>
            <li> &#8226; Ensuring the pharmacy is remunerated in an accurate and timely fashion.</li>
            <li> &#8226; HR roles including but not limited to staff rotas, training, recruitment, disciplinaries,
                performance management, and grievances.
            </li>
            <li> &#8226; Collaboration with non-healthcare managers in store. Primarily the store manager, and other
                pharmacy managers in my region, through Microsoft Teams, WhatsApp and conference calls.
            </li>
        </ul>),
}, {
    date: 'August 2016 - November 2017',
    location: 'Tesco Pharmacy',
    title: 'Duty Pharmacy Manager',
    grade: "",
    content: (<p>
        In August 2016 I started working at Tesco as a newly qualified pharmacist, after two months of working
        alongside the Pharmacy Manager, as Duty (deputy) Pharmacy manager, I stepped up to be the acting
        Pharmacy Manager for the store.
        <br/>
        <br/>
        Responsibilities were similar to that of the Pharmacy manager role. Notable work in this tole include
        working as joint lead for NMS and asthma referrals, focussing on providing resources which can be used
        by stores to help facilitate the provision of services.
        <br/>
        <br/>
        One resource related to quality payments, involving screening asthma patients was implemented been used
        nationally, which saved Pharmacists ~30-60 minutes of work a day, with the potential of generating
        ~£500k in revenue from patient identification.
    </p>),
}, {
    date: 'July 2015 - July 2016',
    location: 'Paydens Pharmacy',
    title: 'Pre-Registration Pharmacist',
    grade: "",
    content: (<ul>
        As a pre-registration pharmacist I took the decision to move to a busier, understaffed pharmacy –
        which provided a much wider variety of services and gave me the opportunity to challenge myself.
        This provided me with a great foundation to begin my professional career.
        My responsibilities included those atypical to a pre-registration pharmacist, such as consulting
        patients
        on new medications, highlighting and solving prescription interventions, and providing support to other
        pharmacy staff.
        <br/>
        <br/>
        Other areas where I have taken the opportunity to experience and learn from include:
        <li> &#8226; Clinically screening patient charts for a palliative care hospice </li>
        <li> &#8226; Understanding and undertaking wholesale procedure</li>
        <li> &#8226; Undertaking audits, including one which resulted in an increase in completed NMS, from less
            than 10% of target to reaching 50-60% target
        </li>
        <li> &#8226; Instigating multiple PGDs, including NRT, EHC & Chlamydia screening/treatment</li>
        <li> &#8226; Two-week hospital-placement at the Queen Elizabeth The Queen Mother Hospital</li>
    </ul>),
},];


export const education: TimelineItem[] = [{
    date: 'November 2018', location: 'NHS Leadership academy', title: 'Mary Seacole', grade: "", content: <p>
        Some demo text...Some demo text...Some demo text...Some demo text...Some demo text...Some demo
        text...Some demo text...Some demo text...Some demo text...Some demo text...Some demo text...Some
        demo text...Some demo text...Some demo text...Some demo text...Some demo text...Some demo
        text...Some demo text...Some demo text...Some demo text...Some demo text...
    </p>,
}, {
    date: '2011 - 2015',
    location: 'University of East Anglia',
    title: 'Masters of Pharmacy (MPharm)',
    grade: '2.1',
    content: <ul>
        During my time at UEA, I gained experience through a selection of societies and roles, gaining experience
        and developing skills which would benefit my career. Academically I take most pride from my research
        project,
        based on drug delivery, which allowed me to independently explore and research complex ideas of cocrystals.
        Throughout my studies I grew to develop excellent consultation skills, shown in my 4th year OSCE result of
        80%.
        <br/><br/>
        My ability to work effectively, creatively, with strict time management, is shown with result of my final
        year
        project which attained a grade of 75.1%
        <br/>
        <br/>
        <b>Non-academic activities</b>
        <Line></Line>
        During my time at UEA I supported a number of clubs/societies as a committee member:
        <br/><br/>
        <li> &#8226; President - Pharmacy society</li>
        <li> &#8226; Secretary/Vice-president - Ultimate frisbee</li>
        <li> &#8226; Publicity officer - Alzheimer's society</li>
    </ul>
}, {
    date: '2009 - 2011',
    location: 'Highworth Grammar School',
    title: 'A-Levels',
    grade: 'Maths (A*), Chemistry (B), Politics (C)',
    content: <p></p>,
},];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage, testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.', items: [{
        type: ContactType.Email, text: 'andrew.charlwood@gmail.com', href: 'mailto:andrew.charlwood@gmail.com',
    }, {
        type: ContactType.Location, text: 'Norwich, Norfolk', href: 'https://maps.app.goo.gl/AXTQR6nBwLC44FVA8',
    }, {
        type: ContactType.Phone, text: '07795553088', href: 'tel:07795553088',
    },],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [{
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/andrewcharlwood/'
}, {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:andrew.charlwood@gmail.com'}, {
    label: 'Phone',
    Icon: PhoneIcon,
    href: 'tel:07795553088'
},];
