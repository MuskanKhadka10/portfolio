import { Download } from 'lucide-react';

const Resume = () => {
  // In a real implementation, this would be a link to your actual resume
  const resumeUrl = '/path-to-your-resume.pdf';

  const handleDownload = () => {
    // In a real app, this would be a real download
    // For demo purposes, we'll just show an alert
    alert('In a real implementation, this would download your resume.');
  };

  return (
    <section
      id="resume"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a summary of my experience and education. Download my full resume
            for more details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-colors duration-300"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  W
                </span>
                Work Experience
              </h3>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                    Senior Full Stack Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    TechCorp Inc. • 2020 - Present
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lead development of company's main SaaS product. Managed a team
                    of 5 developers. Implemented CI/CD pipelines and improved site
                    performance by 40%.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                    Web Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Digital Solutions LLC • 2018 - 2020
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed responsive websites and web applications for various
                    clients. Worked with React, Node.js, and PHP. Collaborated
                    with design team to implement UI/UX improvements.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                    Junior Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    WebFirm Agency • 2016 - 2018
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Assisted in the development of client websites. Maintained
                    existing codebases and fixed bugs. Gained experience with
                    HTML, CSS, JavaScript, and PHP.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  E
                </span>
                Education
              </h3>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                    Master of Computer Science
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    Tech University • 2014 - 2016
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in Software Engineering. Thesis on "Optimizing
                    Web Application Performance". GPA: 3.8/4.0
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    State University • 2010 - 2014
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Coursework included Web Development, Database Design, and
                    Network Security. GPA: 3.7/4.0
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  C
                </span>
                Certifications
              </h3>

              <div className="space-y-4">
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    AWS Certified Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">2021</p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Microsoft Office Specialist
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">2019</p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    React Developer Certification
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;