import Header from "./components/header";

const Page = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-500 py-8 px-4">
      <div id="name" className="bg-white py-4 mb-4"><h2 className="text-center text-2xl font-bold">Gourav Sharma</h2>
      <p className="text-center text-2xl font-bold"> E-mail - gouravsh.635@gmail.com</p>
      </div>
        <div id="profile" className="bg-white py-4 mb-4">
            <h2 className="text-center text-2xl font-bold">About me</h2>
            <p>Highly driven and dedicated software development student with a strong passion for creating innovative solutions.
               Seeking an internship or entry-level position at a software company to apply theoretical knowledge, contribute to projects, 
               and further develop skills in software development.</p>
        </div>
        <div id="education" className="bg-white py-4 mb-4">
          <h2 className="text-center text-2xl font-bold">Education</h2>
          <p>Diploma in Software Development</p>
          <p>Southern Alberta Institute of Technology (SAIT), City, Province</p>
          <p>Expected Graduation: August, 2024</p>
          <p>High School Diploma</p>
          <p>SBS Model Senior Secondary School, Garshankar, India</p>
          <p>Year of Graduation: 2022</p>
        </div>
        <div id="skills" className="bg-white py-4 mb-4">
          <h2 className="text-center text-2xl font-bold">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Proficient in programming languages: Java and Python</li>
            <li>Web Development: HTML, CSS, JavaScript</li>
            <li>Database Management: SQL, MySQL</li>
            <li>Version Control: Git</li>
            <li>Solid understanding of Software Development Lifecycle (SDLC)</li>
            <li>Strong problem-solving and analytical abilities</li>
            <li>Excellent written and verbal communication skills</li>
            <li>Attention to detail and a focus on delivering quality results efficiently</li>
          </ul>
        </div>
        <div id="experience" className="bg-white py-4 mb-4">
          <h2 className="text-center text-2xl font-bold">Experience</h2>
          <p>Security Guard</p>
          <p>GardaWorld Security Company, City, Province</p>
          <p>Month, Year - Present</p>
          <ul className="list-disc list-inside">
            <li>Maintained the security and safety of premises and personnel.</li>
            <li>Monitored and authorized entrance and departure of employees, visitors, and other individuals.</li>
            <li>Conducted regular patrols to ensure a secure environment and prevent unauthorized activities.</li>
            <li>Reported security breaches, disturbances, or unusual incidents promptly.</li>
            <li>Provided exceptional customer service by addressing inquiries and concerns.</li>
          </ul>
        </div>
        <div id="projects" className="bg-white py-4 mb-4">
          <h2 className="text-center text-2xl font-bold">Projects</h2>
          <p>Web-based Movie Recommendation System</p>
          <p>Southern Alberta Institute of Technology (SAIT), City, Province</p>
          <p>Month, Year - Month, Year</p>
          <ul className="list-disc list-inside">
            <li>Collaborated with a team of students to develop a web-based movie recommendation system using Java and HTML/CSS.</li>
            <li>Employed object-oriented programming principles to design and implement system functionalities.</li>
            <li>Integrated a MySQL database to store movie information and user preferences.</li>
            <li>Conducted thorough testing and debugging to ensure reliability and user-friendliness.</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Page;
