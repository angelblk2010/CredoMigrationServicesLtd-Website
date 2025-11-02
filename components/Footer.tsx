import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-warm-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CM</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Credo Migration</div>
                <div className="text-sm text-warm-400">Licensed Advisers</div>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed text-warm-300">
              Professional immigration advisory services for New Zealand and Australia with licensed expertise and a personal, ethical approach.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-800 hover:bg-sage-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-800 hover:bg-sage-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-navy-800 hover:bg-sage-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/new-zealand" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">New Zealand Immigration</Link></li>
              <li><Link href="/services/australia" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Australia Immigration</Link></li>
              <li><Link href="/services/new-zealand#skilled" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Skilled Migrant Visas</Link></li>
              <li><Link href="/services/new-zealand#work" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Work Visas</Link></li>
              <li><Link href="/services/new-zealand#family" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Family & Partner Visas</Link></li>
              <li><Link href="/services/new-zealand#student" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Student Visas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/process" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Our Process</Link></li>
              <li><Link href="/fees" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Fees & Costs</Link></li>
              <li><Link href="/blog" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Blog & Resources</Link></li>
              <li><Link href="/contact" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Contact Us</Link></li>
              <li><Link href="/licensing" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Licensing Information</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li><Link href="/privacy" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block">Professional Disclaimer</Link></li>
            </ul>
            <div className="bg-navy-800 rounded-xl p-4 border border-sage-600/20">
              <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Licensed & Registered
              </h4>
              <p className="text-xs text-warm-300 mb-1">✓ IAA Licensed (New Zealand)</p>
              <p className="text-xs text-warm-300">✓ MARA Registered (Australia)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-sm text-center">
          <p className="text-warm-400">&copy; {new Date().getFullYear()} Credo Migration Services Ltd. All rights reserved.</p>
          <p className="mt-2 text-xs text-warm-500">
            Professional immigration advice. Licensed in New Zealand (IAA) and Australia (MARA).
          </p>
        </div>
      </div>
    </footer>
  );
}
