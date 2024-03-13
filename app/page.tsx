import Image from 'next/image'

export default function Home() {
  return (
    <main className="main text-base">
      <div className="container interests">
        <h2 className='text-lg'>Hobbies</h2>
        <p>Scouts, Online gaming, Microelectronics and Programming</p>
      </div>
      <div className="container languages">
        <h2 className='text-lg'>Languages</h2>
        <p>🇬🇧 English – native</p>
        <p>🇳🇴 Norwegian – native</p>
        <p>🇩🇪 German – beginner</p>
      </div>
      <div className="container socials">
        <h2 className='text-lg'>Platforms</h2>
        <p>Github: Lucas8448</p>
        <p>LinkedIn: Lucas Bateson</p>
      </div>
      <div className="container intro">
        <div className="intro-content">
          <div className="intro-text text-lg text-center">
            <h1>Hi 👋🏻, I am a 17-year-old student studying Computer Science.</h1>
            <br />
            <p>I am studying at Fyrstikkallen Vgs in Oslo. I am a dual british🇬🇧/norwegian🇳🇴 national, although I am born and raised in Oslo.</p>
          </div>
          <div className="profile-image">
            <Image
              src={"/images/avatar.png"}
              width={150}
              height={150}
              alt="Image Description" />
          </div>
        </div>
      </div>
      <div className="container experience">
        <h2 className='text-lg'>Experience</h2>
        <p>Programming teacher Aug 2020 – Jun 2021, Oslo commune, Oslo</p>
        <p>Scout Leader Aug 2018 – present, Oslo</p>
      </div>
      <div className="container skills">
        <h2 className='text-lg'>Skills</h2>
        <p>Backend with Python Flask.</p>
        <p>Vue.js/React.</p>
        <p>Next.js/Nuxt.js</p>
        <p>TailwindCSS</p>
        <p>Html, CSS and JavaScript</p>
        <p>Scylla/Sqlite3</p>
        <p>Git</p>
      </div>
      <div className="container grades">
        <h2 className='text-lg'>Grades ( 1-lowest, 6-highest )</h2>
        <table>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Matematikk</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Naturfag</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Produksjon</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Teknologiforståelse</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Programmering</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Yrkesfaglig fordypning vg1</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Engelsk</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Driftsstøtte</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Utvikling</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Yrkesfaglig fordypning vg2</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Brukerstøtte</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Norsk, vg2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Samfunnskunnskap</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Kroppsøving, vg2</td>
            <td>6</td>
          </tr>
        </table>
      </div>
    </main>
  );
}