import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface Post {
  id: number
  slug: string
  title: string
  date: string
  summary: string
  body: string
  tags: string[]
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(r => r.json())
      .then((data: Post[]) => {
        const found = data.find(p => p.slug === slug)
        if (found) {
          setPost(found)
        } else {
          setNotFound(true)
        }
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  // JSON-LD schema injection
  useEffect(() => {
    if (!post) return
    const existingScript = document.getElementById('blog-jsonld')
    if (existingScript) existingScript.remove()

    const script = document.createElement('script')
    script.id = 'blog-jsonld'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: 'FLAWC.com — Tomlinson & Co',
        url: 'https://flawc.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'FLAWC.com',
        url: 'https://flawc.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://flawc.com/flawc-logo-square.svg'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://flawc.com/blog/${post.slug}`
      },
      keywords: post.tags.join(', ')
    })
    document.head.appendChild(script)

    document.title = `${post.title} | FLAWC.com`

    return () => {
      const s = document.getElementById('blog-jsonld')
      if (s) s.remove()
    }
  }, [post])

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

      {loading && (
        <div className="text-center text-gray-500 py-32">Loading…</div>
      )}

      {notFound && !loading && (
        <div className="text-center py-32">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#1e3a5f] underline hover:text-blue-800">← Back to Blog</Link>
        </div>
      )}

      {post && !loading && (
        <>
          {/* Back Link + Hero */}
          <section className="bg-[#1e3a5f] py-10 px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-orange-300 hover:text-white text-sm font-semibold mb-5 transition">
                ← Back to Blog
              </Link>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-blue-800 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">{post.title}</h1>
              <p className="text-blue-300 text-sm">
                {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                {' · '}FLAWC.com
              </p>
            </div>
          </section>

          {/* Post Body */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#1e3a5f] [&_h2]:mt-8 [&_h2]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_li]:text-gray-700
                  [&_strong]:text-[#1e3a5f]
                  [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />

              {/* CTA Box */}
              <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Need a Florida Workers' Comp Quote?</h3>
                <p className="text-blue-700 mb-4">Our specialists shop 150+ carriers to find the best rate for your Florida business. It's free and takes minutes.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:800-616-1418"
                    className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition"
                  >
                    📞 Call 800-616-1418
                  </a>
                  <a
                    href="https://app.usecanopy.com/c/tomlinson-and-co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1e3a5f] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl transition"
                  >
                    ⚡ Get Free Quote →
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link to="/blog" className="text-[#1e3a5f] hover:text-blue-800 font-semibold underline text-sm">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-8">
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
