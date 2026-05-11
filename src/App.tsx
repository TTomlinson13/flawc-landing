import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>🏗️ Florida Workers' Compensation Specialists</span>
          <a href="tel:800-616-1418" className="hover:text-orange-300 transition">📞 800-616-1418</a>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">FLAWC<span className="text-[#f97316]">.com</span></h1>
            <p className="text-xs text-gray-500">Florida Workers' Compensation Insurance</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hidden sm:inline text-[#1e3a5f] font-semibold hover:text-[#f97316] transition text-sm">
              Blog
            </Link>
            <a
              href="tel:800-616-1418"
              className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition"
            >
              📞 800-616-1418
            </a>
            <a
              href="https://app.usecanopy.com/c/tomlinson-and-co"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e3a5f] hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1e3a5f] py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 20px)"}}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-orange-300 font-semibold uppercase tracking-wider text-sm mb-3">Florida's Workers' Comp Specialists</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Florida Workers' Compensation Insurance —<br className="hidden md:block" />
            <span className="text-[#f97316]"> Fast, Affordable, Done Right</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We shop 150+ carriers to get your Florida business covered quickly and affordably.
            Required by law — we make it painless.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.usecanopy.com/c/tomlinson-and-co"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl"
            >
              ⚡ Get a Free Quote Now
            </a>
            <a
              href="tel:800-616-1418"
              className="bg-white hover:bg-gray-100 text-[#1e3a5f] px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl"
            >
              📞 Call 800-616-1418
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-5">✓ Free quotes &nbsp;•&nbsp; ✓ No obligation &nbsp;•&nbsp; ✓ Same-day coverage available</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#f97316] py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-white font-bold text-sm md:text-base">
          <span>🏢 150+ Carriers</span>
          <span>📅 Since 1966</span>
          <span>🗺️ 9 States</span>
          <span>💰 $0 Cost to You</span>
        </div>
      </section>

      {/* Why Workers Comp */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#f97316] font-semibold uppercase tracking-wider text-sm mb-2">Florida Law Requires It</p>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Why Florida Businesses Need Workers' Comp</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">It's the Law</h3>
              <p className="text-gray-600 text-sm">Florida law requires workers' comp for most businesses with 4 or more employees. In <strong>construction</strong>, coverage is required for even <strong>1 employee</strong>.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Fines Up to $1,000/Day</h3>
              <p className="text-gray-600 text-sm">Non-compliance carries penalties of up to <strong>$1,000 per day</strong> — plus you may be ordered to stop work immediately until coverage is in place.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Protect Your Business</h3>
              <p className="text-gray-600 text-sm">Without coverage, a single workplace injury could expose your business to a lawsuit that threatens everything you've built. Coverage is the responsible choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 px-4 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#f97316] font-semibold uppercase tracking-wider text-sm mb-2">Industries We Serve</p>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Who We Help</h2>
            <p className="text-gray-500 mt-2">From single-person contractors to mid-size Florida businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🔨', label: 'Contractors &\nConstruction' },
              { icon: '🍽️', label: 'Restaurants &\nFood Service' },
              { icon: '🛒', label: 'Retail &\nWholesale' },
              { icon: '🏥', label: 'Healthcare &\nMedical' },
              { icon: '🧹', label: 'Janitorial &\nCleaning' },
              { icon: '🚛', label: 'Trucking &\nLogistics' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-2">{icon}</div>
                <p className="text-[#1e3a5f] font-bold text-sm whitespace-pre-line">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">Don't see your industry? <a href="tel:800-616-1418" className="text-[#f97316] font-semibold hover:underline">Call us</a> — we cover virtually every Florida business class.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#f97316] font-semibold uppercase tracking-wider text-sm mb-2">Simple Process</p>
            <h2 className="text-3xl font-bold text-[#1e3a5f]">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', icon: '📋', title: 'Get a Quote', desc: 'Fill out our quick online form or call us. We gather the basics about your business — takes under 5 minutes.' },
              { step: '2', icon: '🔍', title: 'We Shop 150+ Carriers', desc: 'Our team compares rates from over 150 A-rated carriers to find you the best coverage at the best price.' },
              { step: '3', icon: '✅', title: "You're Covered", desc: 'We bind your policy and send your proof of insurance. Same-day coverage is available in most cases.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="relative bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f97316] text-white rounded-full flex items-center justify-center font-bold text-sm">{step}</div>
                <div className="text-4xl mb-3 mt-2">{icon}</div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-300 font-semibold uppercase tracking-wider text-sm mb-2">Don't Wait — Get Covered Today</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Florida Workers' Comp Quote Now</h2>
          <p className="text-blue-200 text-lg mb-8">
            It's free, fast, and there's no obligation. Our specialists are standing by to help your Florida business stay compliant and protected.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.usecanopy.com/c/tomlinson-and-co"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl"
            >
              ⚡ Get Free Quote Online
            </a>
            <a
              href="tel:800-616-1418"
              className="bg-white hover:bg-gray-100 text-[#1e3a5f] px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl"
            >
              📞 800-616-1418
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-5">Available Mon–Fri 8am–6pm ET &nbsp;•&nbsp; Altamonte Springs, FL</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-white font-bold mb-1">FLAWC.com</p>
          <p className="text-sm mb-1">Florida Workers' Compensation Insurance Specialists</p>
          <p className="text-sm">A <strong className="text-white">Tomlinson &amp; Co</strong> Agency &nbsp;•&nbsp; Altamonte Springs, FL &nbsp;•&nbsp; 📞 800-616-1418</p>
          <div className="mt-5 border-t border-gray-700 pt-5 flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/" className="text-gray-400 hover:text-white transition underline">Home</Link>
            <Link to="/blog" className="text-gray-400 hover:text-white transition underline">Blog</Link>
            <a href="/privacy-policy.html" className="text-gray-400 hover:text-white transition underline">Privacy Policy</a>
          </div>
          <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson &amp; Co Inc. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-600">FLAWC.com is a marketing brand of Tomlinson &amp; Co Inc., a licensed Florida insurance agency.</p>
        </div>
      </footer>

    </div>
  )
}
