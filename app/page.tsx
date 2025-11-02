export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Your Trusted Partner for New Zealand & Australia Immigration
            </h1>
            <p className="text-xl mb-8 text-primary-50">
              Licensed immigration advisers helping skilled professionals, families, students, and investors achieve their migration dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Book Consultation
              </a>
              <a href="#services" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Immigration Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive visa and migration solutions for New Zealand and Australia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* New Zealand Services */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="heading-md mb-4 text-primary-600">New Zealand Immigration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Skilled Migrant Category Resident Visa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Work to Residence Visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Family & Partnership Visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Student Visas & Post-Study Work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Investor & Entrepreneur Visas</span>
                </li>
              </ul>
              <a href="/services/new-zealand" className="inline-block mt-6 text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </a>
            </div>

            {/* Australia Services */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="heading-md mb-4 text-secondary-600">Australia Immigration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Skilled Independent Visa (subclass 189)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Skilled Nominated Visa (subclass 190)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Employer Sponsored Visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Family & Partner Visas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Business Innovation & Investment Visas</span>
                </li>
              </ul>
              <a href="/services/australia" className="inline-block mt-6 text-secondary-600 font-semibold hover:text-secondary-700">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Credo Migration Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional expertise you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-600">🎓</span>
              </div>
              <h3 className="heading-sm mb-3">Licensed Advisers</h3>
              <p className="text-gray-600">
                Fully licensed with IAA (New Zealand) and MARA (Australia) for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-600">⭐</span>
              </div>
              <h3 className="heading-sm mb-3">Proven Success</h3>
              <p className="text-gray-600">
                Years of experience with hundreds of successful visa applications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-primary-600">💼</span>
              </div>
              <h3 className="heading-sm mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored immigration strategies designed for your unique situation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clear pathway to your immigration goals
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: "Initial Consultation", desc: "Free assessment of your eligibility and visa options" },
                { step: 2, title: "Strategy Development", desc: "Customized immigration plan tailored to your goals" },
                { step: 3, title: "Documentation", desc: "Comprehensive preparation and review of all required documents" },
                { step: 4, title: "Application Submission", desc: "Professional lodgement and tracking of your visa application" },
                { step: 5, title: "Ongoing Support", desc: "Continuous communication and updates throughout the process" }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Book a consultation with our licensed immigration advisers today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@credomigration.com" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Email Us
              </a>
              <a href="tel:+64123456789" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
