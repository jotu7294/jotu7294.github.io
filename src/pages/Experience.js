import React, { useEffect, useState } from 'react';

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        // Scroll to the section if a hash is present in the URL
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const experiences = [
        {
            id: 1,
            title: 'Founding Tutoring Specialist',
            company: 'Coditum / TeachForth',
            period: 'March 2023 - Present',
            description: 'Began as an intern, assisting in course development and instructional design, before transitioning into a full teaching role. Delivering personalized 1-on-1 lessons in Java, C++, Python, Blender, and Adobe Creative Suite to students at all levels. Tailoring teaching methods to individual learning styles, fostering a positive and engaging educational experience.',
            skills: ['Java', 'C++', 'Python', 'Blender', 'Adobe Creative Suite', 'Teaching', 'Curriculum Design']
        },
        {
            id: 2,
            title: 'Lead Teaching Specialist',
            company: 'SummerTech',
            period: 'September 2019 - Present',
            description: 'Managed 10+ employees and taught Java programming and 3D modeling to students of all levels, adapting teaching methods to diverse needs. Mentored and supported peers, fostering a collaborative and innovative learning environment. Analyzed data from student performance over 6 months using statistical tools to tailor curriculum and improve engagement significantly.',
            skills: ['Team Management', 'Java', '3D Modeling', 'Mentoring', 'Data Analysis', 'Curriculum Development']
        },
        {
            id: 3,
            title: 'Assistant to the Dean of Engineering',
            company: 'University of Colorado Boulder',
            period: 'June 2019 - August 2024',
            description: 'Managing records and employee data for the College of Engineering. Coordinating communications to ensure team alignment and goal setting. Writing scripts to streamline day to day tasks with Microsoft Automate.',
            skills: ['Data Management', 'Communications', 'Script Writing', 'Microsoft Automate', 'Team Coordination']
        }
    ];

    const education = [
        {
            id: 1,
            degree: 'BS Computer Science',
            institution: 'University of Colorado Boulder',
            period: '2022 - 2026',
            details: 'Minor in Engineering Entrepreneurship | 3.54 CS GPA'
        },
        {
            id: 2,
            degree: 'High School Diploma',
            institution: 'Mahwah High School',
            period: '2018 - 2022',
            details: 'Gold Thunderbird Scholar | 97.18 GPA'
        }
    ];

    const activities = [
        { id: 1, name: 'GBMB College Marching Band', organization: 'Univ. Colorado Boulder' },
        { id: 2, name: 'KVCU Radio 1190 Club Member', organization: 'Univ. Colorado Boulder' },
        { id: 3, name: 'Symphonic Band President', organization: 'Mahwah High School', period: '2021 - 2022' },
        { id: 4, name: 'Track & Field Captain', organization: 'Mahwah High School', period: '2020 - 2022' }
    ];

    const awards = [
        { id: 1, name: "Dean's List 2024", organization: 'Univ. Colorado Boulder' },
        { id: 2, name: 'Eagle Scout Award', organization: 'Boy Scouts of America' }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
            
            {/* Header */}
            <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Experience & Education</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
                    My professional journey combining technical expertise with leadership and educational impact.
                </p>
            </div>

            {/* Main content container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column: Professional Experience */}
                <div className="lg:col-span-2">
                    <div className={`mb-12 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            Professional Experience
                        </h2>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div 
                                    key={exp.id} 
                                    className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Timeline connector */}
                                    {index < experiences.length - 1 && (
                                        <div className="absolute left-6 bottom-0 w-0.5 h-8 bg-gradient-to-b from-blue-500/30 to-transparent transform translate-y-full"></div>
                                    )}
                                    
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <span className="text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="text-lg text-gray-300 mb-3">{exp.company}</div>
                                        <p className="text-gray-400 mb-4">{exp.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/70 text-gray-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right column: Education, Activities, Awards */}
                <div className="space-y-10">
                    {/* Education section */}
                    <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            Education
                        </h2>

                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <div 
                                    key={edu.id} 
                                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                                            <span className="text-xs text-gray-400">{edu.period}</span>
                                        </div>
                                        <div className="text-blue-400 mb-1">{edu.institution}</div>
                                        <div className="text-sm text-gray-400">{edu.details}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activities section */}
                    <div className={`transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            Activities
                        </h2>

                        <div className="space-y-3">
                            {activities.map((activity) => (
                                <div 
                                    key={activity.id} 
                                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-medium text-white">{activity.name}</h3>
                                            {activity.period && <span className="text-xs text-gray-400">{activity.period}</span>}
                                        </div>
                                        <div className="text-sm text-gray-400">{activity.organization}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards section */}
                    <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            Awards
                        </h2>

                        <div className="space-y-3">
                            {awards.map((award) => (
                                <div 
                                    key={award.id} 
                                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <h3 className="font-medium text-white">{award.name}</h3>
                                        <div className="text-sm text-gray-400">{award.organization}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical skills section */}
            <div id="skills" className={`mt-16 max-w-6xl mx-auto transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    Technical Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        'React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 
                        'Scala', 'C++', 'MySQL', 'MongoDB', 'Adobe Suite', 'Microsoft 365'
                    ].map((skill, idx) => (
                        <div 
                            key={idx} 
                            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 text-center text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;