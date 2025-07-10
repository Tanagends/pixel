'use client'; // If this component is used in a Next.js App Router client component

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner'; // Assuming you're using sonner for toasts
import { motion } from 'framer-motion'; // Assuming you have framer-motion installed
import { LoaderCircle } from 'lucide-react';

// Shadcn UI Imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'; // Adjust path as needed
import { Input } from '@/components/ui/input'; // Assuming this is your Shadcn UI Input
import { Textarea } from '@/components/ui/textarea'; // Assuming this is your Shadcn UI Textarea


// Define your Zod schema outside the component for better performance
const formSchema = z.object({
  name: z.string().min(1, "Full Name is required"), // Changed message for clarity
  email: z.string().email("Invalid email address").min(1, "Email is required"), // Added min(1) for required check
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});


const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // If the response is not OK, try to get the error message from the body
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const result = await response.json();
      toast.success(result.message || "Message sent successfully!"); // Added a default message
      form.reset(); // Reset form fields after successful submission

    } catch (error) { // Use 'any' or a more specific type if you know the error structure
      console.error("Error sending message:", error);
      toast.error(error.message || 'An unexpected error occurred while sending your message.'); // Added a default message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="w-full"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-300 mb-1">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-md bg-white/5 border-white/20 focus:ring-orange-500 focus:border-orange-500 shadow-sm h-12 text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs mt-1" />
                </FormItem>
              )}
            />

            {/* Email Address Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-300 mb-1">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@example.com"
                      className="w-full px-4 py-3 rounded-md bg-white/5 border-white/20 focus:ring-orange-500 focus:border-orange-500 shadow-sm h-12 text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs mt-1" />
                </FormItem>
              )}
            />
          </div>

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-300 mb-1">Subject</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Regarding your services..."
                    className="w-full px-4 py-3 rounded-md bg-white/5 border-white/20 focus:ring-orange-500 focus:border-orange-500 shadow-sm h-12 text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs mt-1" />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-300 mb-1">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white/5 border-white/20 focus:ring-orange-500 focus:border-orange-500 shadow-sm text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs mt-1" />
              </FormItem>
            )}
          />

          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg flex items-center justify-center disabled:bg-orange-400"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;