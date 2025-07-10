"use client";
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'sonner'
import { motion } from 'framer-motion';
import { LoaderCircle, MailCheck } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email, name });
      if (response.data.error) {
        setStatus('error');
        setMessage(response.data.error);
        toast.error(response.data.error);
      } else {
        setStatus('success');
        setMessage('Subscribed!');
        toast.success('Subscribed successfully!');
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Form submission error:', error.response?.data);
      setStatus('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
      toast.error(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative bg-gray-900 text-white py-20 sm:py-28 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
        <div className="w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
        <div className="w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <MailCheck className="mx-auto h-16 w-16 text-orange-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join our newsletter for the latest in web development, design trends, and exclusive offers from PixelCrafte.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl space-y-6 mx-auto max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-3 mt-4 bg-orange-500 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:bg-orange-600 hover:shadow-lg disabled:bg-orange-400 flex items-center justify-center"
            whileHover={{ scale: status === 'sending' ? 1 : 1.03 }}
            whileTap={{ scale: status === 'sending' ? 1 : 0.97 }}
          >
            {status === 'sending' ? (
              <>
                <LoaderCircle className="animate-spin mr-2" />
                Subscribing...
              </>
            ) : (
              'Subscribe Now'
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}