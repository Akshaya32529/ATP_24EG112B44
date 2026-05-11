import React from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../store/authStore'

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-white min-h-[calc(100vh-64px)] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full animate-fade-in">
            New Era of Blogging
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Share your stories with <br/>
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              the whole world.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            A premium platform for writers and readers. Create beautiful articles, 
            engage with your audience, and discover stories that matter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isAuthenticated ? (
              <>
                <NavLink 
                  to="/register" 
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-200"
                >
                  Start Writing for Free
                </NavLink>
                <NavLink 
                  to="/login" 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300"
                >
                  Sign In
                </NavLink>
              </>
            ) : (
              <NavLink 
                to="/articles" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-200"
              >
                Browse Articles
              </NavLink>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Write Effortlessly</h3>
              <p className="text-slate-600 leading-relaxed">
                Our intuitive editor lets you focus on what matters most—your words. 
                Rich formatting and easy image uploads.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Global Audience</h3>
              <p className="text-slate-600 leading-relaxed">
                Reach thousands of readers across the globe. Your stories deserve 
                to be heard by a community that cares.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Deep Engagement</h3>
              <p className="text-slate-600 leading-relaxed">
                Build meaningful connections with your readers through our 
                seamless commenting and feedback system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Join our creative community</h2>
          <p className="text-lg text-slate-600 mb-10">
            Thousands of writers are already sharing their ideas on BlogApp. 
            From tech insights to personal stories, there's a place for everyone.
          </p>
          {!isAuthenticated && (
            <NavLink 
              to="/register" 
              className="inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:gap-4 transition-all duration-300"
            >
              Get started now <span>→</span>
            </NavLink>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home