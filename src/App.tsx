import React from 'react';
import './App.css';

function App() {
  return (
    <div
      className="bg-cover bg-scroll bg-no-repeat bg-[url('images/background.png')] grid md:grid-cols-8 md:grid-rows-8 gap-4 p-4 md:p-10 h-screen">
      <div
        className="order-2 p-8 rounded-lg shadow md:order-1 md:col-span-2 md:row-span-2 bg-white/80 backdrop-blur-lg shadow-over">
        <h2 className='mb-2 text-lg font-semibold'>Hobbies</h2>
        <p>Scouts, Online gaming, Microelectronics, Programming</p>
      </div>

      <div className="order-3 p-4 space-y-6 rounded-lg shadow md:order-2 md:col-span-2 md:row-span-2 md:row-start-3 bg-white/80 backdrop-blur-lg shadow-over">
        <h2 className="mb-4 text-xl font-semibold">Languages</h2>
        <section className="flex items-center gap-6">
          <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-2/3">
            <img src="images\icons\gb.svg" alt="British flag" className="rounded-lg object-contain h-20 aspect-2/3" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">English</h3>
            <p className="text-muted-foreground">
              Native
            </p>
          </div>
        </section>
        <section className="flex items-center gap-6">
          <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-2/3">
            <img src="images\icons\no.svg" alt="Norwegian flag" className="rounded-lg object-contain h-20 aspect-2/3" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Norwegain</h3>
            <p className="text-muted-foreground">
              Native
            </p>
          </div>
        </section>
        <section className="flex items-center gap-6">
          <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-2/3">
            <img src="images\icons\de.svg" alt="German flag" className="rounded-lg object-contain h-20 aspect-2/3" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">German</h3>
            <p className="text-muted-foreground">
              Beginner
            </p>
          </div>
        </section>
      </div>

      <div
        className="order-4 p-8 rounded-lg shadow md:order-3 md:col-span-2 md:row-span-4 md:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
        <h2 className='mb-2 text-lg font-semibold'>Platforms</h2>
        <p>Github: Lucas8448</p>
        <p>LinkedIn: Lucas Bateson</p>
      </div>

      <div
        className="flex flex-col items-center justify-center order-1 p-8 rounded-lg shadow md:order-4 md:flex-row md:col-span-4 md:col-start-3 md:row-span-4 bg-white/80 backdrop-blur-lg shadow-over">
        <div className="px-4 mb-4 text-center md:text-left md:mb-0 md:flex-auto">
          <h1 className="mb-2 text-xl font-bold">Hi, I'm Lucas, a 17-year-old as an intern at NAV</h1>
          <p>My internship is a 2-year-internship with the Norwegian Labour and Welfare Administration.</p><p>I'm a dual British/Norwegian national, born and raised in
            Oslo.</p>
        </div>
        <div className="flex justify-center px-4 md:flex-auto md:justify-start">
          <img src="/images/avatar.png" alt="Profile" className="w-3/4 rounded-lg" />
        </div>
      </div>

      <div className="order-5 p-8 rounded-lg shadow md:order-5 md:col-span-2 md:col-start-3 md:row-span-4 md:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
        <h2 className='mb-2 text-xl font-semibold'>Skills</h2>
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/react.svg" alt="React logo" className="h-16" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/nuxt.svg" alt="Nuxt logo" className="h-20" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/nextjs.svg" alt="Nextjs logo" className="h-20" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/Flask_logo.svg" alt="Flask logo" className="h-20" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/python.svg" alt="Python logo" className="h-20" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/sqlite.svg" alt="Sqlite logo" className="h-20" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/tailwindcss.svg" alt="Tailwindcss logo" className="h-14" />
          </div>
          <div className="inline-flex items-center rounded-lg p-2">
            <img src="images/icons/git.svg" alt="Git logo" className="h-16" />
          </div>
        </div>
      </div>

      <div
        className="order-6 p-4 overflow-auto rounded-lg shadow md:order-6 md:max-h-screen md:col-span-2 md:col-start-7 md:row-start-1 md:row-span-8 bg-white/80 backdrop-blur-lg shadow-over">
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

      <div
        className="order-7 p-8 rounded-lg shadow md:order-7 md:col-span-2 md:col-start-5 md:row-span-4 md:row-start-5 bg-white/80 backdrop-blur-lg shadow-over">
        <h2 className='mb-2 text-xl font-semibold'>Experience</h2>
        <div className="space-y-6">
          <section className="flex items-center gap-6">
            <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
              <img src="images/icons/scout.png" alt="Scout logo" className="rounded-lg object-contain h-20 aspect-square" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Scout Leader</h3>
              <p className="text-muted-foreground">
                Overseeing leaders and assisting with leading their 
                patrols and completed multiple courses with a focus on leadership skills.
              </p>
              <p className="text-sm text-muted-foreground">Aug 2018 – present, Oslo, Norway</p>
            </div>
          </section>
          <section className="flex items-center gap-6">
            <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
              <img src="images\icons\nav_logo.jpg" alt="Nav logo" className="rounded-lg object-contain h-20 aspect-square" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Software Developer</h3>
              <p className="text-muted-foreground">
                First a 3-week work placement, then working every Wednesday
              </p>
              <p className="text-sm text-muted-foreground">Jan 2024 - Jun 2024, Oslo, Norway</p>
            </div>
          </section>
          <section className="flex items-center gap-6">
            <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
              <img src="images\icons\visma_norge_logo.jpg" alt="Visma logo" className="rounded-lg object-contain h-20 aspect-square" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Data Analyst</h3>
              <p className="text-muted-foreground">
                One week internship at Visma Norway doing data analysis for their InSchool service in AWS Quicksight
              </p>
              <p className="text-sm text-muted-foreground">Nov 2023 - Dec 2023, Oslo, Norway</p>
            </div>
          </section>
          <section className="flex items-center gap-6">
            <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
              <img src="images\icons\intility_as_logo.jpg" alt="Intility Logo" className="rounded-lg object-contain h-20 aspect-square" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Software Development Intern</h3>
              <p className="text-muted-foreground">
                One week internship at Intility learning about their systems and doing some OpenAI API tasks. I also worked a bit with Azure permissions and tried handling some support cases.
              </p>
              <p className="text-sm text-muted-foreground">Nov 2023 - Nov 2023, Oslo, Norway</p>
            </div>
          </section>
          <section className="flex items-center gap-6">
            <div className="bg-muted rounded-lg flex items-center justify-center h-20 aspect-square">
              <img src="images/icons/oslo.jpg" alt="Oslo Commune Logo" className="rounded-lg object-contain h-20 aspect-square" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Programming teacher</h3>
              <p className="text-muted-foreground">
                Responsible for helping grade 4 students learn block programming.
              </p>
              <p className="text-sm text-muted-foreground">Aug 2020 – Jun 2021, Oslo commune, Oslo, Norway</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
