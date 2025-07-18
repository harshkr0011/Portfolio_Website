import { education } from '@/data';
import Image from 'next/image';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-10 pr-56 rounded-lg shadow-lg max-w-screen-md mx-auto px-4 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl">
              {edu.image && (
                <div className="absolute top-4 right-4 w-52 aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary bg-background">
                  <Image
                    src={edu.image}
                    alt={edu.institution + ' image'}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <div className="text-base text-gray-300 mb-2 whitespace-pre-line">
                {edu.degree}
                {edu.duration ? `\n${edu.duration}` : ''}
                {edu.grade ? `\nGrade: ${edu.grade}` : ''}
              </div>
              {/* Skills and Activities as grid */}
              {(edu.skills || edu.activities) && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {edu.skills && (
                    <div>
                      <h4 className="font-semibold">Skills:</h4>
                      <ul className="list-disc list-inside">
                        {edu.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {edu.activities ? (
                    <div>
                      <h4 className="font-semibold">Activities:</h4>
                      <ul className="list-disc list-inside">
                        {edu.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="flex items-center h-full text-gray-400 italic">
                      <span>No activities listed.</span>
                    </div>
                  )}
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
