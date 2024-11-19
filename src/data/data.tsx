import 'node_modules/video-react/dist/video-react.css'; // import css

import {PhoneIcon} from "@heroicons/react/20/solid";
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


// eslint-disable-next-line react-memo/require-memo
const Line = () => (<hr
    style={{
        color: 'rgba(52, 52, 52, 0.1)', backgroundColor: 'rgba(52, 52, 52, 0.5)', height: 2,
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
    imageSrc: heroImage, name: `Hey, I'm Andy`, description: (<>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            <strong className="text-stone-100">I’m a medicine optimisation Pharmacist, working for the Norfolk & Waveney
                ICB</strong>. I'm focussed on <strong className="text-stone-100">high-cost drugs</strong>, <strong
            className="text-stone-100">data analysis</strong>, and implementing <strong className="text-stone-100">innovative
            solutions</strong> to drive efficiency's within the team.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            In my free time time, I'm an avid <strong className="text-stone-100">video/photographer</strong>
            {' '}
            (the background to this page is from a trip to Verona), and a tech enthusiast who's a <strong
            className="text-stone-100">self-taught
            developer</strong> (largely python) for data analysis, simple apps and AI.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            I wanted to demonstrate how <strong className="text-stone-100">enthusiastic I am about the prospect of
            working with Eclipse</strong>, in a
            unique way. <br/><strong className="text-stone-100">I decided to create this website to host my CV, with
            some examples of my work.</strong>
        </p>
    </>), actions: [{
        href: './A Charlwood - CV.pdf', text: 'CV PDF', primary: true, Icon: ArrowDownTrayIcon,
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
        label: 'Age', text: '30', Icon: CalendarIcon
    }, {label: 'Registration number', text: '2211810', Icon: FlagIcon}, {
        label: 'Interests', text: 'Technology, Photography, Rugby', Icon: SparklesIcon
    }, {label: 'Study', text: 'University of East Anglia', Icon: AcademicCapIcon}, {
        label: 'Employment', text: 'Norfolk & Waveney ICB', Icon: BuildingOffice2Icon
    },],
};

/**
 * About section
 */
export const letterData: Letter = {
    description: (<>
        <p className="prose-base mb-4">
            I’m a medicine optimisation Pharmacist, working primarily with high-cost drugs for the Norfolk & Waveney
            Integrated Care Board (ICB). I’m passionate about providing <strong>excellent healthcare to our population
            and finding innovative ways to do so</strong>.
            <br/><br/>
            At the Eclipse conference I was excited by the passion for Eclipse held by Dr Brown and the other speakers.
            I realise that there is no job role I am applying for, and no description of the person you might consider
            employing. I believe you want someone <strong>innovative</strong>, with a passion
            for <strong>technology</strong> whose motivation is to <strong>improve patient outcomes</strong>. I believe
            I am that person.
            <br/><br/>
            I've been a registered pharmacist for over 7 years, with 5 years of experience in the community and nearly 2
            years within the ICB. I have the expected skill set of a pharmacist working within those roles, but I also
            have different, more unique skills that the typical pharmacist does not have, which would make me an asset
            to Eclipse.
            <br/><br/>
            I wanted to demonstrate my eagerness to learn new skills, and enthusiasm for Eclipse, so I decided to use
            this opportunity to learn the basics of Typescript and build this website.
        </p>
        <Line/>
        <p className="prose-base mb-4 mt-4">
            <strong>My career as a registered pharmacist started in Tesco pharmacy, Great Yarmouth</strong>. I had
            significant
            concerns relating to patient safety and potentially fraudulent activity in the branch. which, after
            escalating through appropriate channels, led to the pharmacy manager being suspended and dismissed.
            <br/><br/>
            As a pharmacist with less than 2 months of experience and no personal contacts with locum pharmacists or
            other branches (having recently moved to the area), being thrust into managing and being responsible for the
            operation of a 100-hour pharmacy was extremely challenging.
            <br/><br/>
            That challenge, however, helped to <strong>define me as the pharmacy professional I am today.</strong> I am
            proud of making the difficult decision to voice my concerns and being the driving force of change, which led
            the branch to become far safer, from 1-2 medication errors a month to 1-2 a year. The branch grew much
            busier, by around 50% in items supplied. Our KPIs also grew to the top of the group for the provision of NMS
            and customer service scores.
            <br/><br/>
            <strong>My motivation has always been to provide excellent healthcare.</strong> How I channel that
            motivation has changed massively since 2016. Thanks to courses such as the NHS Mary Seacole Leadership
            course, I am far better equipped to use my leadership skills to engage with my colleagues or any stakeholder
            to achieve what is needed.
        </p>
        <Line/>
        <p className="prose-base mb-4 mt-4">
            <strong>I feel innovation has been a core part of what has enabled me to progress successfully in my
                career.</strong> One notable example in 2017,the quality payments scheme was introduced, requiring
            checks on patient inhaler use. The solution proposed by the company involved checking patient summary care
            records for each prescription with an inhaler dispensed. This process would have been laborious, possibly
            taking up to an hour of pharmacist time each day.
            <br/><br/>
            I took the initiative to explore what could be achieved with the antiquated dispensing system and developed
            a
            process requiring an audit every 6 months, taking 4 hours to complete. Achieving this criterion was worth
            <strong> nearly £1
                million in total funding across all branches</strong>. I created a walkthrough document, which was
            distributed to
            stores and
            used as the official process for the company. <br/><br/><strong>All branches met the criteria
            successfully.</strong>
        </p>
        <Line/>
        <p className="prose-base mb-4 mt-4">
            <strong>I’m a big fan of tech</strong>, spending my spare time working on projects involving software
            development, in doing so I’ve been able to apply these skills to implement solutions in my current/previous
            role.
            <br/><br/>
            When I was working as a community pharmacist, we were responsible for ordering medication for patients. We
            had a process of manually checking to see if we had received these prescriptions, which would take ~6 hours
            each week. This prompted me to write some macros in visual basic that would cross-reference dispensed vs.
            requested items in under a minute. <strong>This saved us significant time each week, enabling us to serve
            our patients more effectively.</strong> I felt empowered by the fact that I could take an idea and create
            something that helped people.
            <br/><br/>
            <strong>That was nearly 6 years ago</strong>, and the first time I’d leveraged software to build my own
            solution. It led me down a path where I not only see the value in learning these skills but have a passion
            for it. More recently in my current role I’ve discovered how to link secondary care activity data to Blueteq
            form data, something previously not thought to be possible. Using this, I’ve initiated and completed
            projects which have improved efficiencies for my colleagues and clinicians in the wider integrated care
            system. To see some of these examples, please see the <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="#projects">projects part of
            this page.</a>
        </p>
        <Line/>
        <p className="prose-base mb-4 mt-4">
            I hope these examples demonstrates the mindset I bring to work every day. I strive to develop and implement
            efficient processes through innovative solutions. My fluency in technology and data analysis supports me in
            this
            endeavour, and where possible, I automate a large part of my workflow.
            <br/><br/>
            As a pharmacist, I feel I bring a clinical knowledge base. What I believe sets me apart from other
            pharmacists is my
            passion and understanding for technology & software. When building clinical technology products like
            Eclipse,
            I
            believe that bringing a clinical mind with an understanding of software development would be of real value.
            <br/><br/>
            Thank you for your consideration, and I look forward to hearing from you.
        </p>
    </>),
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
    description: 'An interactive chart displaying patient care pathways for high-cost drugs (example provided has randomised cost/patient numbers). This graph enables an intuitive way to explore patient journeys by trust/directorate, and provides a detailed breakdown of figures such as total patients, cost, frequency of dosing, average cost per patient. Data can be filtered by date/directorate to identify trends of medicine used easily. ',
    url: './patient_pathway_analysis.html',
    image: porfolioImage1,
}, {
    title: 'Blueteq generator',
    description: 'As part of my project to automate work flow relating to Blueteq forms, I created a program which automatically scrapes information from NICE technology appraisals, and generates forms for clinical review before going live. This enables minimal admin work to generate the forms in the future, but more importantly enabled us to standardise and recreate all current live forms with minimal effort.',
    url: 'https://github.com/andrewcharlwood/blueteqforms?search=1',
    image: porfolioImage3,

}, {
    title: 'NMS video',
    description: 'Whilst working at Tesco as a community pharmacist, I felt there was an opportunity to expand on NMS ' +
        'provision across stores. I took the initiative in writing, and producing this ' +
        'video explaining NMS. The intention of the video was to train non-pharmacist staff members on how they can ' +
        'support with the NMS service.',
    url: 'https://www.youtube.com/watch?v=Rm1wcX92XlQ',
    image: porfolioImage2,

},];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: TimelineItem[] = [{
    date: 'May 2022 - Present',
    location: 'NHS Norfolk and Waveney Integrated Care Board',
    title: 'Medicines Optimisation - high-cost drugs',
    grade: "",
    content: (<>
        <p className="prose-base">
            As the high-cost drug Pharmacist, my primary role relates to collaborating with specialists across the
            ICS to ensure patients have access to medicines mandated by new NICE technology appraisals (TA).
            <br/>
            <br/>
            I collaborate with specialists across the ICS to formulate patient care pathways which follow NICE TA
            recommendations, include local advice from specialists and follow a best value approach to delivering
            care to minimise wasteful spending.
        </p>
        <br/>
        <Line/>
        <br/>
        <p className="prose-base">
            <strong>A substantive project</strong> I've undertaken related to the Blueteq platform, which is used to
            send approval
            requests for high-cost drugs to ICB. Despite our BI team having stated activity data from secondary care
            could not be connected to data from Blueteq, I was able to match all forms submitted to the
            relevant activity data.
            <br/>
            <br/>
            I proposed an entire revamp of all Blueteq forms, with automatic form generation directly from NICE TAs,
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
        <br/>
        <h3 className="text-md font-bold">Other recent notable pieces of work:</h3>
        <Line></Line>
        <div className="prose max-w-none">
            <ul>
                <li>Responding to the recent ADHD medicine shortage, collaborating with NSFT to formulate guidance for
                    primary
                    care
                </li>
                <li>Creating an oxygen data dashboard to to support primary care clinicians to identify patient in need
                    of review
                </li>
                <li>Completing high-cost drug pathways for a number of directorates such as rheumatology, ophthalmology
                    and gastroenterology.
                </li>
            </ul>
        </div>
    </>),
}, {
    date: 'November 2017 - May 2022', location: 'Tesco Pharmacy', title: 'Pharmacy Manager', grade: "", content: (//<p> As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a large amount of autonomy to ensure we deliver a high-quality service to our customers, whilst ensuring that safety is at the core of everything we do.</p>,
        <>
            <p className="prose-base">
                As the pharmacy manager, I was responsible for the day-to-day operation of the pharmacy. I was given a
                large amount of autonomy to ensure we delivered a high-quality service to our customers, whilst ensuring
                that safety is at the core of everything we did.
            </p>
            <br/>
            <h2 className="text-lg font-bold">Responsibilities</h2>
            <Line></Line>
            <div className="prose max-w-none">
                <ul>
                    <li>Leading projects within my region, including KPIs such as the New Medication Service (NMS),
                        and operational changes being rolled out nationally
                    </li>
                    <li>National projects, including developing a new training plan all new starters undertake on
                        induction.
                    </li>
                    <li>As a member of the Local Pharmaceutical Committee (LPC), I worked with other pharmacy
                        contractor representatives to support community pharmacies in Norfolk.
                    </li>
                    <li>Creating and implementing plans to ensure we meet our KPI targets for the financial year
                        (e.g., customer service feedback, provision of health services).
                    </li>
                    <li>Being the responsible pharmacist (RP), provision of services and all
                        functions/responsibilities related to being the RP.
                    </li>
                    <li>Ensuring that we are operating in a safe, and legal way is fundamental to our day to day
                        operations.
                    </li>
                    <li>Booking and managing locum pharmacists</li>
                    <li>Ensuring there is a robust business continuity plan which is up to date and accessible in
                        the event that we are unable to operate as expected.
                    </li>
                    <li>Ensuring the pharmacy is remunerated in an accurate and timely fashion.</li>
                    <li>HR roles including but not limited to staff rotas, training, recruitment, disciplinaries,
                        performance management, and grievances.
                    </li>
                    <li>Collaboration with non-healthcare managers in store. Primarily the store manager, and other
                        pharmacy managers in my region, through Microsoft Teams, WhatsApp and conference calls.
                    </li>
                </ul>
            </div>
        </>),
}, {
    date: 'August 2016 - November 2017',
    location: 'Tesco Pharmacy',
    title: 'Duty Pharmacy Manager',
    grade: "",
    content: (<p className="prose-base">
        In August 2016 I started working at Tesco as a newly qualified pharmacist, after two months of working
        alongside the Pharmacy Manager, as Duty (deputy) Pharmacy manager, I stepped up to be the acting
        Pharmacy Manager for the store.
        <br/>
        <br/>
        Notable work in this role include
        working as joint lead for NMS and asthma referrals, focussing on providing resources which can be used
        by stores to help facilitate the provision of services.
        <br/>
        <br/>
        One solution related to quality payments, involving screening asthma patients was implemented been used
        nationally, which saved Pharmacists ~30-60 minutes of work a day, with the potential of generating
        <strong> ~£1 million</strong> in revenue from patient identification.
    </p>),
}, {
    date: 'July 2015 - July 2016',
    location: 'Paydens Pharmacy',
    title: 'Pre-Registration Pharmacist',
    grade: "",
    content: (<>
        <p className="prose-base">
            As a pre-registration pharmacist I took the decision to move to a busier, understaffed pharmacy –
            which provided a much wider variety of services and gave me the opportunity to challenge myself.
            This provided me with a great foundation to begin my professional career.
            <br/><br/>
            My responsibilities included those atypical to a pre-registration pharmacist, such as consulting
            patients
            on new medications, highlighting and solving prescription interventions, and providing support to other
            pharmacy staff.
            <br/><br/>
            Other areas where I have taken the opportunity to experience and learn from include:
        </p>
        <div className="prose prose-ul:">
            <ul>
                <li>Clinically screening patient charts for a palliative care hospice</li>
                <li>Understanding and undertaking wholesale procedure</li>
                <li>Undertaking audits, including one which resulted in an increase in completed NMS, from less than
                    10% of target to reaching 50-60% target
                </li>
                <li>Instigating multiple PGDs, including NRT, EHC & Chlamydia screening/treatment</li>
                <li>Two-week hospital-placement at the Queen Elizabeth The Queen Mother Hospital</li>
            </ul>
        </div>
    </>),
},];


export const education: TimelineItem[] = [{
    date: 'April - October 2018',
    location: 'NHS Leadership Academy',
    title: 'Mary Seacole',
    grade: "79%",
    content: <p className="prose-base">
        I took the opportunity to undertake the Mary Seacole leadership programme offered by the NHS leadership academy
        when it was first made available to community pharmacists. Seacole provided me with the tools necessary to embed
        the values of healthcare leadership in my regular practice and has been the single biggest influence on how I
        manage and lead a team.
        <br/><br/>
        The course took ~6 months to complete, and concluded with a reflective, and reflexive essay for assessment.
        <br/><br/>
        One of the biggest shifts in perspective I had from the course was seeing leadership as a behaviour that we
        employ, rather than being restricted to a person or a position. Practical skills such as providing effective
        feedback, interviewing skills, and inspiring colleagues through techniques such as “line-of-sight” have been
        extremely effective when managing colleagues.
    </p>,
}, {
    date: '2011 - 2015',
    location: 'University of East Anglia',
    title: 'Master of Pharmacy (MPharm)',
    grade: '2.1',
    content: <>
        <p className="prose-base">
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
        type: ContactType.Email, text: 'contact@andrewcharlwood.live', href: 'mailto:andrew.charlwood@gmail.com',
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
    label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/andrewcharlwood/'
}, {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:contact@andrewcharlwood.live'}, {
    label: 'Phone', Icon: PhoneIcon, href: 'tel:07795553088'
},];
