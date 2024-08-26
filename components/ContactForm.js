import React, { useState } from 'react';
import { collection, getDocs, query, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../app/firebase.js";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add form submission logic here
            if (!formData) return
            const docRefEmails = doc(collection(db, 'emails'))
            const docRefContactResponses = doc(collection(db, 'contactFormResponses'))
            console.log(e.target)
            await setDoc(docRefEmails, { email: formData.email, time: serverTimestamp() })
            await setDoc(docRefContactResponses,
                {
                    email: formData.email,
                    message: formData.message,
                    name: formData.name,
                    subject: formData.subject,
                })
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setMessage('Thank you! Your email has been recorded.');
            setSubmitted(true)
        }
        catch {
            console.error('Error adding document: ', error);
            setMessage('An error occurred. Please try again.');

        }
    };

    return (
        <div className="bg-zinc-100 rounded-lg shadow-lg p-8 mt-8">
            {!submitted ? (
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
                                    required
                                />
                            </div>
                        </div>
                        {/* Subject */}
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
                                required
                            />
                        </div>
                        {/* Message */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400"
                                rows="6"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="btn-zinc px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 hover:text-zinc-800 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>) : (message && <p>{message}</p>)}

        </div>
    );
};

export default ContactForm;
