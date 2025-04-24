import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-70"></div>
                
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMiA0OGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
                
                {/* Content container */}
                <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center">
                    <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden">
                        <img 
                            src="https://lh3.googleusercontent.com/a/ACg8ocK7K4JM4BBjT9J2WGe7Z2-vgACvuxmOtPeqaogZBQTq0YWUjgAG=s96-c" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight mb-3">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Joseph Tursi</span>
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl font-light text-center mb-8 text-gray-300">Computer Science Student & Developer</h2>
                    
                    <p className="max-w-2xl text-center text-gray-400 text-lg mb-12">
                        Motivated and versatile Computer Science student with strong leadership, 
                        problem-solving, and technical skills. Passionate about software development 
                        and entrepreneurial ventures.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40" onClick={() => window.location.href = '/projects'}>
                            View Portfolio
                        </button>
                        <button className="px-8 py-3 rounded-lg border border-blue-500/30 hover:border-blue-400/60 text-blue-400 hover:text-blue-300 font-medium transition-all duration-200 backdrop-blur-sm" onClick={() => window.location.href = '/contact'}>
                            Contact Me
                        </button>
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
            </section>
            
            {/* Page links section */}
            <section className="container mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-16 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Explore My Work</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Projects Card */}
                    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Projects</h3>
                            <p className="text-gray-400 mb-6">
                                Discover my work including Volum (Radio Reimagined) and SphereSix, my award-winning ventures focused on innovation and sustainability.
                            </p>
                            <a href="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                                View Projects
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Experience Card */}
                    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Experience</h3>
                            <p className="text-gray-400 mb-6">
                                Learn about my professional journey at Coditum/TeachForth, SummerTech, and the University of Colorado Boulder.
                            </p>
                            <a href="/experience" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                                See Experience
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Skills Card */}
                    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Skills</h3>
                            <p className="text-gray-400 mb-6">
                                Explore my technical toolkit including React, TypeScript, Node.js, C++, and design tools like Adobe Suite.
                            </p>
                            <a href="/experience#skills" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                                View Skills
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Call to action section */}
            <section className="relative py-16 mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Connect!</h2>
                    <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40">
                        Get in Touch
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;