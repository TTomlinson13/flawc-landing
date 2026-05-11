import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Post {
  id: number
  slug: string
  title: string
  date: string
  summary: string
  body: string
  tags: string[]
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(r => r.json())
      .then((data: Post[]) => {
        const sorted = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setPosts(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold text-[#1e3a5f] hover:text-blue-700 transition">
              FLAWC<span className="text-[#f97316]">.com</span>
            </Link>
            <p className="text-xs text-gray-500">Florida Workers' Compensation Insurance</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hidden sm:inline text-[#1e3a5f] font-semibold hover:text-[#f97316] transition text-sm">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1e3a5f] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-300 font-semibold uppercase tracking-wider mb-2 text-sm">Florida Workers' Comp Insights</p>
          <h1 className="text-4xl font-bold text-white mb-3">The FLAWC.com Blog</h1>
          <p className="text-blue-100 text-lg">Expert guidance on Florida workers' compensation insurance — rates, compliance, class codes, and protecting your business.</p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center text-gray-500 py-20">Loading posts…</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-gray-500 py-20">No posts found.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-blue-50 text-[#1e3a5f] text-xs font-semibold px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-lg font-bold text-[#1e3a5f] mb-2 leading-snug">{post.title}</h2>
                    <p className="text-gray-500 text-xs mb-3">
                      {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-gray-600 text-sm flex-1 mb-5">{post.summary}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block bg-[#1e3a5f] hover:bg-blue-900 text-white font-semibold text-sm py-2 px-5 rounded-lg transition self-start"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#f97316] py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Get Your Florida Workers' Comp Quote?</h2>
          <p className="text-orange-100 mb-5">We shop 150+ carriers to find your business the best rate. It's free and fast.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://app.usecanopy.com/c/tomlinson-and-co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-[#1e3a5f] font-bold py-3 px-8 rounded-xl shadow-lg transition"
            >
              ⚡ Get Free Quote
            </a>
            <a href="tel:800-616-1418" className="inline-block bg-[#1e3a5f] hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-white font-bold mb-1">FLAWC.com</p>
          <p className="text-sm">Florida Workers' Compensation Insurance<br />A Tomlinson &amp; Co Agency</p>
          <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson &amp; Co Inc. All rights reserved.</p>
          <p className="text-xs mt-2">
            <Link to="/" className="text-gray-400 hover:text-white underline mr-4">Home</Link>
            <Link to="/blog" className="text-gray-400 hover:text-white underline mr-4">Blog</Link>
            <a href="/privacy-policy.html" className="text-gray-400 hover:text-white underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
