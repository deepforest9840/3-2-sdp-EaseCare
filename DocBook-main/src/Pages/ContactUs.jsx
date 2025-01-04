import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-gradient-to-r from-teal-50 via-teal-50 to-teal-100 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
                <h1 className="text-3xl font-bold text-center text-teal-600 mb-4">
                    Contact Us
                </h1>

                <p className="text-sm text-center text-gray-700 mb-6">
                    We're here to help! Fill out the form below to get in touch.
                </p>

                <form action="#" method="POST" className="space-y-4">
                    {/* Name Field */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Subject Field */}
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                            placeholder="Enter the subject"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                            placeholder="Type your message here"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
