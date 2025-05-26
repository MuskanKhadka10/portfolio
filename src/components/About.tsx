import { Code, Server, PackageOpen } from 'lucide-react';
import { SkillBar } from './SkillBar';

const About = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
  ];

  const backendSkills = [
    { name: 'Python', level: 80 },
    { name: 'PHP', level: 70 },
    { name: 'Node.js', level: 75 },
    { name: 'SQL', level: 65 },
  ];

  const officeSkills = [
    { name: 'Word', level: 95 },
    { name: 'Excel', level: 90 },
    { name: 'PowerPoint', level: 85 },
    { name: 'SharePoint', level: 75 },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Full-Stack Developer currently interning at CodeSala,
              where I'm gaining hands-on experience in building modern web applications
              and working with cutting-edge technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At CodeSala, I collaborate with senior developers on real-world projects,
              contributing to both frontend and backend development. This experience
              has enhanced my problem-solving skills and deepened my understanding
              of software development best practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I'm enthusiastic about learning new technologies and constantly improving
              my skills. When I'm not coding, I enjoy exploring tech blogs, participating
              in coding challenges, and contributing to open-source projects.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                  Frontend Development
                </h4>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Server size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                  Backend Development
                </h4>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <PackageOpen size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                  Microsoft Office 365
                </h4>
              </div>
              <div className="space-y-4">
                {officeSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;