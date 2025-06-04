import React, { useState, useEffect } from 'react';
import volumLanding from '../resources/volum-landing.png';
import spheresixLanding from '../resources/spheresix-landing.png';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setActiveProject('volum');
    }, []);

    const projects = [
        {
            id: 'volum',
            title: 'Volum: Radio Reimagined',
            role: 'Founder & CEO',
            period: '2024 - Present',
            website: 'volum.live',
            description: 'A prototype video streaming application built with React that empowers independent artists and brings listeners together.',
            details: [
                'Solely developing the entire application from concept to implementation',
                'Creating a platform that democratizes music discovery and streaming',
                'Building interactive features that connect artists directly with fans',
                'Implementing responsive design for seamless use across all devices'
            ],
            image: volumLanding,
            technologies: ['React', 'JavaScript', 'Node.js', 'CSS', 'Firebase']
        },
        {
            id: 'spheresix',
            title: 'SphereSix',
            role: 'CTO',
            achievement: '2nd Place New Venture Challenge Winner',
            period: '2025',
            website: 'sixsphere-dd766.web.app',
            description: 'A web application powered by React and Firebase that calculates carbon sequestration rates for any location.',
            details: [
                'Collaborated in a team of two to develop the entire application',
                'Built custom algorithm to calculate carbon sequestration based on location data',
                'Implemented soil type querying functionality for precise calculations',
                'Integrated with carbon market APIs to provide real-time value assessments'
            ],
            image: spheresixLanding,
            technologies: ['React', 'Firebase', 'APIs', 'Environmental Science', 'Data Visualization']
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
            
            {/* Projects header */}
            <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">My Projects</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
                    Building innovative solutions that combine technical excellence with entrepreneurial vision.
                </p>
            </div>

            {/* Project navigation */}
            <div className={`flex justify-center mb-12 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-gray-700">
                    {projects.map(project => (
                        <button
                            key={project.id}
                            onClick={() => setActiveProject(project.id)}
                            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                activeProject === project.id 
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20' 
                                : 'text-gray-400 hover:text-gray-200'
                            }`}
                        >
                            {project.title.split(':')[0]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project content */}
            <div className="max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    activeProject === project.id && (
                        <div 
                            key={project.id}
                            className={`flex flex-col ${
                                idx % 2 === 1 ? 'lg:flex-row-reverse flex-col-reverse' : 'lg:flex-row'
                            } gap-12 transition-all duration-700 delay-200 transform ${
                                isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                        >
                            {/* Project details column */}
                            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full flex flex-col flex-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                            <div className="flex flex-wrap items-center mt-1 text-sm text-gray-400">
                                                <span className="mr-3">{project.role}</span>
                                                <span className="mr-3">|</span>
                                                <span>{project.period}</span>
                                            </div>
                                            {project.achievement && (
                                                <div className="mt-2">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300">
                                                        {project.achievement}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <a 
                                            href={`https://${project.website}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                                        >
                                            <span>{project.website}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>

                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    
                                    <h3 className="text-lg font-medium text-white mb-2">Key Developments</h3>
                                    <ul className="space-y-2 mb-6">
                                        {project.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-400">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="mt-auto">
                                        <h3 className="text-lg font-medium text-white mb-2">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700/70 text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Project image column */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="relative w-full">
                                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-gray-700">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                                    </div>
                                    {/* Interactive hover effect */}
                                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20"></div>
                                    <div className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Call to action */}
            <div className={`mt-20 text-center transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40"
                >
                    Contact Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Projects;