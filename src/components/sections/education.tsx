import { education } from '@/data';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p className="text-lg">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="text-sm text-gray-400">Grade: {edu.grade}</p>
              {edu.skills && (
                <div className="mt-4">
                  <h4 className="font-semibold">Skills:</h4>
                  <ul className="list-disc list-inside">
                    {edu.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.activities && (
                <div className="mt-4">
                  <h4 className="font-semibold">Activities:</h4>
                  <ul className="list-disc list-inside">
                    {edu.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
