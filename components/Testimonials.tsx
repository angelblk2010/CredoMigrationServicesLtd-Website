"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & James Mitchell",
    country: "United Kingdom",
    visa: "New Zealand Skilled Migrant Visa",
    image: "👨‍👩‍👧",
    rating: 5,
    text: "Credo Migration made our dream of moving to New Zealand a reality. Their expertise and personal attention throughout the entire process gave us confidence during a stressful time. We're now happily settled in Auckland with our daughter.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    country: "India",
    visa: "Australia Skilled Independent Visa (189)",
    image: "👩‍💼",
    rating: 5,
    text: "Professional, knowledgeable, and always responsive. The team at Credo helped me navigate the complex Australian immigration system with ease. I received my visa in just 8 months. Highly recommended!",
    date: "January 2024"
  },
  {
    id: 3,
    name: "Michael Chen",
    country: "Singapore",
    visa: "New Zealand Work to Residence Visa",
    image: "👨‍💻",
    rating: 5,
    text: "Outstanding service from start to finish. They explained every step clearly, prepared all documentation meticulously, and kept me informed throughout. Worth every penny for the peace of mind.",
    date: "November 2023"
  },
  {
    id: 4,
    name: "Emma & David Thompson",
    country: "South Africa",
    visa: "Australia Partner Visa",
    image: "👫",
    rating: 5,
    text: "We were overwhelmed by the partner visa requirements until we found Credo Migration. Their compassionate approach and attention to detail made all the difference. We're now together in Melbourne!",
    date: "September 2023"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 rounded-full mb-4">
            <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sage-700 font-semibold text-sm">Client Success Stories</span>
          </div>
          <h2 className="heading-lg mb-4">Trusted by Families Worldwide</h2>
          <p className="text-body max-w-2xl mx-auto text-navy-600">
            Real stories from real people who achieved their migration dreams with our help
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-subtle">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  {testimonials[activeIndex].image}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-navy-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="font-semibold text-navy-900 text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-sm text-navy-600">
                      {testimonials[activeIndex].country} → {testimonials[activeIndex].visa}
                    </div>
                  </div>
                  <div className="text-sm text-navy-500">
                    {testimonials[activeIndex].date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2 ${
                index === activeIndex 
                  ? 'w-12 bg-sage-600' 
                  : 'w-2 bg-navy-200 hover:bg-navy-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">500+</div>
            <div className="text-sm text-navy-600">Successful Visas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">95%</div>
            <div className="text-sm text-navy-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">50+</div>
            <div className="text-sm text-navy-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">10+</div>
            <div className="text-sm text-navy-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
