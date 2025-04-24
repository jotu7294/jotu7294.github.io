import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [activeSection, setActiveSection] = useState('form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const validateForm = () => {
        const errors = {};
        if (!formState.name.trim()) errors.name = "Name is required";
        if (!formState.email.trim()) errors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formState.email)) errors.email = "Email is invalid";
        if (!formState.message.trim()) errors.message = "Message is required";
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setFormErrors({});
            try {
                const res = await fetch('https://formspree.io/f/xldbepww', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: new FormData(e.target)
                });
                if (res.ok) {
                    setIsSubmitting(false);
                    setSubmitted(true);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setSubmitted(false), 5000);
                } else {
                    setIsSubmitting(false);
                    setFormErrors({ submit: 'There was an error sending your message. Please try again.' });
                }
            } catch (err) {
                setIsSubmitting(false);
                setFormErrors({ submit: 'There was an error sending your message. Please try again.' });
            }
        }
    };

    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'joeytursi@gmail.com',
            link: 'mailto:joeytursi@gmail.com'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            value: 'Boulder, CO',
            link: null
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Availability',
            value: 'Monday - Friday, 9am - 5pm MST',
            link: null
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
            link: 'https://github.com/jotu7294'
        },
        {
            name: 'LinkedIn',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            link: 'https://www.linkedin.com/in/joeytursi/'
        },
        {
            name: 'Twitter',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            link: 'https://twitter.com/yourusername'
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
            ),
            link: 'https://instagram.com/jtursii'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-purple-600/10 blur-3xl"></div>
            
            {/* Contact header */}
            <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Get In Touch</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>

            {/* Navigation tabs
            <div className={`flex justify-center mb-12 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-gray-700">
                    <button
                        onClick={() => setActiveSection('form')}
                        className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                            activeSection === 'form'
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        Contact Form
                    </button>
                    <button
                        onClick={() => setActiveSection('info')}
                        className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                            activeSection === 'info'
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        Contact Info
                    </button>
                </div>
            </div> */}

            {/* Contact content */}
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact form section */}
                        <div className={`flex-1 ${activeSection === 'form' ? 'block' : 'hidden lg:block'}`}>
                            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                                    
                                    {submitted ? (
                                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-start mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mt-0.5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div>
                                                <p className="text-green-300 font-medium">Message sent successfully!</p>
                                                <p className="text-green-200/70 text-sm mt-1">I'll get back to you as soon as possible.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formState.name}
                                                            onChange={handleChange}
                                                            className={`bg-gray-800/70 border ${formErrors.name ? 'border-red-500/50' : 'border-gray-700'} focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-300 rounded-lg block w-full p-3 outline-none transition-colors duration-200`}
                                                            placeholder="Your name"
                                                        />
                                                        {formErrors.name && (
                                                            <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                                    <div className="relative">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formState.email}
                                                            onChange={handleChange}
                                                            className={`bg-gray-800/70 border ${formErrors.email ? 'border-red-500/50' : 'border-gray-700'} focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-300 rounded-lg block w-full p-3 outline-none transition-colors duration-200`}
                                                            placeholder="Your email"
                                                        />
                                                        {formErrors.email && (
                                                            <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    className="bg-gray-800/70 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-300 rounded-lg block w-full p-3 outline-none transition-colors duration-200"
                                                    placeholder="What is this regarding?"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                                <div className="relative">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formState.message}
                                                        onChange={handleChange}
                                                        rows="5"
                                                        className={`bg-gray-800/70 border ${formErrors.message ? 'border-red-500/50' : 'border-gray-700'} focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-gray-300 rounded-lg block w-full p-3 outline-none transition-colors duration-200`}
                                                        placeholder="Your message here..."
                                                    ></textarea>
                                                    {formErrors.message && (
                                                        <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                            {formErrors.submit && (
                                                <p className="text-red-400 text-xs mt-1">{formErrors.submit}</p>
                                            )}
                                            <div className="pt-2">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-700/30 hover:shadow-blue-600/40 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Contact info section */}
                        <div className={`flex-1 ${activeSection === 'info' ? 'block' : 'hidden lg:block'}`}>
                            <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                    <div className="space-y-6 mb-8">
                                        {contactMethods.map((method, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400">
                                                    {method.icon}
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-medium text-white">{method.title}</h3>
                                                    {method.link ? (
                                                        <a href={method.link} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                                            {method.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-400">{method.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 hover:from-blue-600/20 hover:to-indigo-600/20 border border-gray-700 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 transition-all duration-200"
                                                aria-label={`Follow on ${social.name}`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Schedule call button */}
                                <div className="relative z-10 mt-auto pt-8">
                                    <a
                                        href="mailto:joeytursi@gmail.com"
                                        className="flex items-center justify-center px-6 py-4 rounded-lg bg-gradient-to-br from-gray-700/70 to-gray-800/70 hover:from-blue-600/20 hover:to-indigo-600/20 border border-gray-700 hover:border-blue-500/30 text-white transition-all duration-200 group"
                                    >
                                        <div className="mr-4 flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-200">Want to talk in person?</span>
                                            <span className="block text-lg font-medium">Schedule a Call</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;