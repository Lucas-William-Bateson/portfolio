import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-cover bg-no-repeat bg-[url('/images/background.svg')] grid grid-cols-8 grid-rows-8 gap-4 p-10 h-screen">
      {/* Hobbies Section */}
      <div className="col-span-2 row-span-2 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4">
        <h2 className='text-lg font-semibold mb-2'>Hobbies</h2>
        <p>Scouts, Online gaming, Microelectronics, Programming</p>
      </div>

      {/* Languages Section */}
      <div className="col-span-2 row-start-3 row-span-2 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4">
        <h2 className='text-lg font-semibold mb-2'>Languages</h2>
        <p>🇬🇧 English – Native</p>
        <p>🇳🇴 Norwegian – Native</p>
        <p>🇩🇪 German – Beginner</p>
      </div>

      {/* Platforms Section */}
      <div className="col-span-2 row-start-5 row-span-4 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4">
        <h2 className='text-lg font-semibold mb-2'>Platforms</h2>
        <p>Github: Lucas8448</p>
        <p>LinkedIn: Lucas Bateson</p>
      </div>

      {/* Intro Section */}
      <div className="col-start-3 col-span-4 row-span-4 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4 flex items-center justify-center">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold mb-2">Hi 👋🏻, I'm a 17-year-old student studying Computer Science.</h1>
          <p>I study at Fyrstikkallen Vgs in Oslo. I'm a dual British🇬🇧/Norwegian🇳🇴 national, born and raised in Oslo.</p>
        </div>
        <div className="flex-1 ">
          <Image src="/images/avatar.png" width={100} height={100} alt="Profile Picture" className="size-9/12 self-auto justify-self-center" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="col-start-3 col-span-2 row-start-5 row-span-4 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4">
        <h2 className='text-lg font-semibold mb-2'>Skills</h2>
        <p>Backend with Python Flask</p>
        <p>Vue.js/React</p>
        <p>Next.js/Nuxt.js</p>
        <p>TailwindCSS</p>
        <p>HTML, CSS, JavaScript</p>
        <p>Scylla/Sqlite3</p>
        <p>Git</p>
      </div>

      {/* Grades Section */}
      <div className="col-start-7 col-span-2 row-start-1 row-span-8 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4 overflow-auto max-h-screen">
        <h2 className='text-lg font-semibold mb-2'>Grades (1-lowest, 6-highest)</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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

      {/* Experience Section */}
      <div className="col-start-5 col-span-2 row-start-5 row-span-4 bg-white/80 backdrop-blur-lg shadow rounded-lg p-4">
        <h2 className='text-lg font-semibold mb-2'>Experience</h2>
        <p>Programming teacher Aug 2020 – Jun 2021, Oslo commune, Oslo</p>
        <p>Scout Leader Aug 2018 – present, Oslo</p>
      </div>
    </main>
  );
}