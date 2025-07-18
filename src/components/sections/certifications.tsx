import { certifications } from '@/data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{cert.name}</h3>
              <p className="text-lg text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-400">Issued: {cert.issued}</p>
              {cert.credentialId && (
                <p className="text-sm text-gray-400">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              {cert.skills && (
                <div className="mt-4">
                  <h4 className="font-semibold">Skills:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-700 px-2 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
