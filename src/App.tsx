import React from 'react';
import './App.css';

interface JobProps {
  img: string;
  name: string;
  description: string;
  period: string;
}

const Job: React.FC<JobProps> = ({ img, name, description, period }) => (
  <section className="flex items-center gap-6">
    <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
      <img src={img} alt={`${name} logo`} className="rounded-lg object-contain h-20 aspect-square" />
    </div>
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
      <p className="text-sm text-muted-foreground">{period}</p>
    </div>
  </section>
);

interface LanguageProps {
  src: string;
  alt: string;
  name: string;
  level: string;
}

const Language: React.FC<LanguageProps> = ({ src, alt, name, level }) => (
  <section className="flex items-center gap-6 lg:gap-2">
    <div className="bg-muted rounded-lg flex items-center justify-center h-20 lg:h-8 aspect-2/3">
      <img src={src} alt={alt} className="rounded-lg object-contain h-20 lg:h-8 aspect-2/3" />
    </div>
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 space-y-1 lg:-space-y-1 xl:flex-col xl:items-start xl:gap-0 xl:space-y-1">
      <h3 className="text-lg lg:text-base font-semibold">{name}</h3>
      <p className="text-muted-foreground lg:text-sm">{level}</p>
    </div>
  </section>
);

interface SkillProps {
  src: string;
  alt: string;
}

const Skill: React.FC<SkillProps> = ({ src, alt }) => (
  <div className="inline-flex items-center rounded-lg p-2">
    <img src={src} alt={alt} className="h-20" />
  </div>
);

const Hobbies: React.FC = () => (
  <div className="order-2 p-8 rounded-lg shadow lg:order-1 lg:col-span-2 lg:row-span-2 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className='mb-2 text-lg font-semibold'>Hobbies</h2>
    <p>Scouts, Online gaming, Microelectronics, Programming</p>
  </div>
);

const Languages: React.FC = () => (
  <div className="order-3 p-4 space-y-6 lg:space-y-2 rounded-lg shadow lg:order-2 lg:col-span-2 lg:row-span-2 lg:row-start-3 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className="mb-4 lg:mb-2 text-xl font-semibold">Languages</h2>
    <Language src="images/icons/gb.svg" alt="British flag" name="English" level="Native" />
    <Language src="images/icons/no.svg" alt="Norwegian flag" name="Norwegian" level="Native" />
    <Language src="images/icons/de.svg" alt="German flag" name="German" level="Beginner" />
  </div>
);

const Platforms: React.FC = () => (
  <div className="order-4 p-8 rounded-lg shadow lg:order-3 lg:col-span-2 lg:row-span-4 lg:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className='mb-2 text-lg font-semibold'>Platforms</h2>
    <p>Github: Lucas8448</p>
    <p>LinkedIn: Lucas Bateson</p>
  </div>
);

const Introduction: React.FC = () => (
  <div className="flex flex-col items-center justify-center order-1 p-8 rounded-lg shadow lg:order-4 lg:flex-row lg:col-span-4 lg:col-start-3 lg:row-span-4 bg-white/80 backdrop-blur-lg shadow-over">
    <div className="px-4 mb-4 text-center md:text-left md:mb-0 md:flex-auto">
      <h1 className="mb-2 text-xl font-bold">Hi, I'm Lucas, a 17-year-old working as an intern at NAV</h1>
      <p>My internship is a 2-year-internship with the Norwegian Labour and Welfare Administration.</p>
      <p>I'm a dual British/Norwegian national, born and raised in Oslo.</p>
    </div>
    <div className="flex justify-center px-4 md:flex-auto md:justify-start">
      <img src="/images/avatar.png" alt="Profile" className="w-3/4 rounded-lg" />
    </div>
  </div>
);

const Skills: React.FC = () => (
  <div className="order-5 p-8 rounded-lg shadow lg:order-5 lg:col-span-2 lg:col-start-3 lg:row-span-4 lg:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className='mb-2 text-xl font-semibold'>Skills</h2>
    <div className="flex flex-wrap gap-2">
      <Skill src="images/icons/react.svg" alt="React logo" />
      <Skill src="images/icons/nuxt.svg" alt="Nuxt logo" />
      <Skill src="images/icons/nextjs.svg" alt="Nextjs logo" />
      <Skill src="images/icons/Flask_logo.svg" alt="Flask logo" />
      <Skill src="images/icons/python.svg" alt="Python logo" />
      <Skill src="images/icons/sqlite.svg" alt="Sqlite logo" />
      <Skill src="images/icons/tailwindcss.svg" alt="Tailwindcss logo" />
      <Skill src="images/icons/git.svg" alt="Git logo" />
    </div>
  </div>
);

const Grades: React.FC = () => (
  <div className="order-6 p-4 overflow-auto rounded-lg shadow lg:order-6 lg:max-h-screen lg:col-span-2 lg:col-start-7 lg:row-start-1 lg:row-span-8 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className='p-4 mb-2 text-lg font-semibold'>Grades (1-lowest, 6-highest)</h2>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Subject
          </th>
          <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Grade
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4">Matematikk</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Naturfag</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Produksjon</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Teknologiforståelse</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Programmering</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Yrkesfaglig fordypning vg1</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Engelsk</td>
          <td className="px-6 py-4">5</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Driftstøtte</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Utvikling</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Yrkesfaglig fordypning vg2</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Brukerstøtte</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Norsk</td>
          <td className="px-6 py-4">5</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Samfunnskunnskap</td>
          <td className="px-6 py-4">6</td>
        </tr>
        <tr>
          <td className="px-6 py-4">Kroppsøving</td>
          <td className="px-6 py-4">6</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Experience: React.FC = () => (
  <div className="order-7 p-8 rounded-lg shadow lg:order-7 lg:col-span-2 lg:col-start-5 lg:row-span-4 lg:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
    <h2 className='mb-2 text-xl font-semibold'>Experience</h2>
    <div className="space-y-6">
      <Job 
        img="images/icons/scout.png" 
        name="Scout Leader" 
        description="Overseeing leaders and assisting with leading their patrols and completed multiple courses with a focus on leadership skills." 
        period="Aug 2018 – present, Oslo, Norway" 
      />
      <Job 
        img="images/icons/nav_logo.jpg" 
        name="Software Developer" 
        description="First a 3-week work placement, then working every Wednesday" 
        period="Jan 2024 - Jun 2024, Oslo, Norway" 
      />
      <Job 
        img="images/icons/visma_norge_logo.jpg" 
        name="Data Analyst" 
        description="One week internship at Visma Norway doing data analysis for their InSchool service in AWS Quicksight" 
        period="Nov 2023 - Dec 2023, Oslo, Norway" 
      />
      <Job 
        img="images/icons/intility_as_logo.jpg" 
        name="Software Development Intern" 
        description="One week internship at Intility learning about their systems and doing some OpenAI API tasks. I also worked a bit with Azure permissions and tried handling some support cases." 
        period="Nov 2023 - Nov 2023, Oslo, Norway" 
      />
      <Job 
        img="images/icons/oslo.jpg" 
        name="Programming teacher" 
        description="Responsible for helping grade 4 students learn block programming." 
        period="Aug 2020 – Jun 2021, Oslo commune, Oslo, Norway" 
      />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div
      className="bg-cover bg-scroll bg-no-repeat bg-[url('/images/background.png')] grid lg:grid-cols-8 lg:grid-rows-8 gap-4 p-4 lg:p-10 h-screen">
      <Hobbies />
      <Languages />
      <Platforms />
      <Introduction />
      <Skills />
      <Grades />
      <Experience />
    </div>
  );
}

export default App;