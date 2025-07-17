import React, { useState } from 'react';

function Form() {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Initialize error state
  const [errors, setErrors] = useState({});
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      <i className="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      <i className="fas fa-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <i className="fas fa-phone absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      />
                      <i className="fas fa-tag absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                      ></textarea>
                      <i className="fas fa-comment absolute right-4 top-4 text-gray-400"></i>
                    </div>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-3"></i>
                      Sending....
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
  );
}

export default Form;


