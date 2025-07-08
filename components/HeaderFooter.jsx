"use client";
import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import {contactInfo } from '@/assets'
import { Phone, Instagram, Facebook, Linkedin, LoaderCircle, Loader } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';

//================================================================//
// 0. INLINE SVG ICONS
// I've replaced the 'react-icons' library with inline SVGs to resolve the compilation error.
// This removes external dependencies and makes the component more self-contained.
//================================================================//

const IconEnvelope = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
);
const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const IconTwitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.904-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
);
const IconDribbble = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.031 19.584c-3.623-.298-6.602-2.345-8.203-5.115l.021.011c2.144 2.859 5.385 4.545 8.943 4.545.243 0 .484-.008.723-.023-1.07-.373-1.524-1.593-1.484-2.835.034-1.083.743-2.012 1.71-2.456-1.02-.13-2.113.14-3.055.932-1.933 1.623-2.61 3.26-2.812 4.19.088.026.179.051.267.076zm.575-10.378c-2.394.397-4.116 2.593-4.116 4.91s1.722 4.513 4.116 4.91c.148-1.571.826-3.013 1.954-4.067.876-.822 1.903-1.413 2.945-1.75-1.296-1.571-3.21-2.697-5.06-2.922zm-7.022-2.175c.983-2.115 2.923-3.792 5.253-4.595-1.343 2.153-1.74 4.885-1.12 7.33-.272-.023-.54-.042-.81-.042-1.925 0-3.692.693-5.051 2.046l-.014-.02c.328-1.393.226-2.738-.258-4.719zM12 2.4c2.973 0 5.618 1.144 7.611 3.019-1.688-1.258-3.774-1.98-6.042-1.98-1.796 0-3.465.385-4.945 1.087.653-.82 1.65-1.376 2.766-1.747.535-.179 1.096-.279 1.61-.279zm5.405 16.292c-1.385 1.483-3.342 2.459-5.498 2.459-.142 0-.284-.005-.425-.015-1.736-2.07-2.158-4.833-1.01-7.252.339-.711.832-1.365 1.428-1.939 1.633 1.493 3.63 2.527 5.869 2.822.062.83.023 1.68-.364 2.592l.001-.002c.002 0 .002 0 0 0zm2.668-5.32c-2.09-.32-3.833-1.35-5.26-2.793.93-.832 1.455-2.022 1.455-3.237 0-.44-.06-.87-.175-1.285 2.938.815 5.106 3.421 5.106 6.545 0 .285-.018.566-.052.842-.4-.143-.825-.26-1.272-.361.023-.153.052-.303.052-.457.001-1.053-.393-2.023-1.077-2.772l-.002.001z"/></svg>
);
const IconChevronDown = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);
const IconMobileMenu = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);
const IconArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconCode = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
);
const IconPenTool = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><path d="m11 13 2.5 2.5"/></svg>
);


//================================================================//
// 1. STYLES - Simulating /styles/globals.css
//================================================================//

const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f9fafb; /* bg-gray-50 */
    }
    .hero-bg {
        background-color: #1a202c;
        background-image: radial-gradient(#ff5722 0.5px, transparent 0.5px), radial-gradient(#ff5722 0.5px, #1a202c 0.5px);
        background-size: 20px 20px;
        background-position: 0 0, 10px 10px;
        animation: pulse-bg 15s infinite linear;
    }
    @keyframes pulse-bg {
        0% { background-color: #1a202c; }
        50% { background-color: #2d3748; }
        100% { background-color: #1a202c; }
    }
  `}</style>
);

//================================================================//

//----------------------------------------------------------------//
// Logo Component
//----------------------------------------------------------------//
const Logo = ({className}) => {
  const svgVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
  };

  return (
    <Link className="flex items-center space-x-2 cursor-pointer" href="/">
    <motion.img className=""
        src="/logo.svg"
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        variants={svgVariants}
        initial="hidden"
        animate="visible"
    >
    </motion.img>
      <span className="text-2xl font-extrabold tracking-tight">
        <span className={className}>Pixel</span> <span className="text-orange-400">Crafte</span>
      </span>
    </Link>
  );
};

{/* 
  <motion.svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <path d="M12 0H8C3.58172 0 0 3.58172 0 8V12H4C4 8.68629 6.68629 6 10 6H12V0Z" fill="#FF5722"/>
    <path d="M20 0H24C28.4183 0 32 3.58172 32 8V12H28C28 8.68629 25.3137 6 22 6H20V0Z" fill="#1a202c"/>
    <path d="M12 32H10C6.68629 32 4 29.3137 4 26V20H0V24C0 28.4183 3.58172 32 8 32H12V32Z" fill="#1a202c"/>
    <path d="M20 32H24C28.4183 32 32 28.4183 32 24V20H28V26C28 29.3137 25.3137 32 22 32H20V32Z" fill="#FF5722"/>
    <rect x="8" y="8" width="16" height="16" rx="2" fill="#1a202c"/>
  </motion.svg> */}

//-----------------------------------------------------------------//
// Menubar / Topbar Component
//-----------------------------------------------------------------//


//----------------------------------------------------------------//
// Header Component
//----------------------------------------------------------------//
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItemVariants = {
        hover: { y: -2, color: "#FF5722" },
        tap: { scale: 0.95 }
    };
    
    const underlineVariants = {
      hidden: { scaleX: 0 },
      visible: { scaleX: 1, transition: { duration: 0.3, ease: 'easeInOut' } }
    };
    
    const ctaButtonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 87, 34, 0.25)" },
        tap: { scale: 0.98 }
    };

    // get free quote dialog
    const GetFreeQuote = () => {
        const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const formSchema = z.object({
            email: z.string().email("Invalid email address").nonempty("Email is required"),
            phone: z.string().optional(),
            serviceDescription: z.string().min(10, "Service description must be at least 10 characters long").nonempty("Service description is required"),
        });
        const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
                email: '',
                phone: '',
                serviceDescription: ''
            }
        });
        const onSubmit = async (data) => {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/get-quote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to send quote request');
                }
                const result = await response.json();
                toast.success(result.message || "Quote request sent successfully!");
                setIsDialogOpen(false);
                form.reset(); // Reset form fields after successful submission
            } catch (error) {
                console.error("Error sending quote request:", error);
                toast.error(error.message || "Failed to send quote request");
            } finally {
                setIsSubmitting(false);
            }
        };
        return (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <motion.button 
                            className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-sm"
                            variants={ctaButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Get a Free Quote
                    </motion.button>                        
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
                    <DialogTitle>Get a Free Quote</DialogTitle>
                    <DialogDescription>
                        Please fill out the form below to receive a free quote for our services.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your@example.com"
                  type="email"
                  className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs mt-1" />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 (555) 123-4567"
                  type="tel" // Use type="tel" for phone numbers
                  className=" rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          name="serviceDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your service description here..."
                  className="rounded-md px-4 py-2 h-32 resize-y focus:outline-none focus:ring-2 focus:ring-orange-500"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-xs mt-1" />
            </FormItem>
          )}
        />           <DialogFooter className="pt-3">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" disabled={isSubmitting}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white disabled:bg-orange-400">
                            {isSubmitting ? (
                                <>
                                    <LoaderCircle className="animate-spin mr-2" size={16} />
                                    Sending...
                                </>
                            ) : (
                                'Get Quote'
                            )}
                        </Button>
                        </DialogFooter>
                    </form>
                    {/* Error Message */}
                </Form>
                </DialogContent>
            </Dialog>
        )
    }

    // Menubar
    const Menubar = () => {
    return (
        <Sheet>
          <SheetTrigger className="lg:hidden">
                   <IconMobileMenu className="lg:hidden text-gray-700 focus:outline-none" />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle><Logo /></SheetTitle>
                        <div className="flex items-center space-x-8">
                            <ul className="flex items-center space-x-8 font-medium text-gray-600">
                                <li className="relative">                                                                                                            
                                    <motion.a href={'/'} variants={navItemVariants} whileHover="hover" whileTap="tap">Home</motion.a> 
                                </li>
                                <li className="relative text-center">                                                                                                            
                                    <motion.a href={'/website-development'} variants={navItemVariants} whileHover="hover" whileTap="tap">Website Development</motion.a> 
                                </li>
                                <li className="relative text-center">                                                                                                            
                                    <motion.a href={'/graphic-design'} variants={navItemVariants} whileHover="hover" whileTap="tap">Graphic Design</motion.a> 
                                </li>
                                {['Work', 'About', 'Blog', 'Contact'].map((item) => (
                                    <li key={item} className="relative">
                                        <motion.a href={`/${item.toLowerCase()}`} variants={navItemVariants} whileHover="hover" whileTap="tap">{item}</motion.a>
                                        <motion.div
                                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 w-full"
                                          variants={underlineVariants}
                                          initial="hidden"
                                          whileHover="visible"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
            </SheetHeader>
            <SheetFooter className="">
                {/* <motion.button 
                        className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-sm"
                        variants={ctaButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Get a Free Quote
                </motion.button> */}

                <GetFreeQuote />
            </SheetFooter>
          </SheetContent>
        </Sheet>
    )
}

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-800 text-white text-xs px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto h-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href={`tel:${contactInfo.phone_1}`} className="flex items-center space-x-1.5 hover:text-orange-500 transition-colors duration-300">
                            <Phone size={14} />
                            <span>{contactInfo.phone_1}</span>
                            <span>{contactInfo.phone_2}</span>
                        </Link>
                        <Link href={`mailto:${contactInfo.email}`} className="hidden sm:flex items-center space-x-1.5 hover:text-orange-500 transition-colors duration-300">
                            <IconEnvelope />
                            <span>{contactInfo.email}</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        {contactInfo.linkedin && (
                            <Link href={contactInfo.linkedin} className="text-white hover:text-orange-500 transition-colors duration-300">
                                <Linkedin size={18} className='bg-white text-gray-800 p-[2px] rounded-sm'/>
                            </Link>
                        )}
                        {contactInfo.instagram && (
                            <Link href={contactInfo.instagram} className="text-white hover:text-orange-500 transition-colors duration-300">
                                <Instagram size={18} className='bg-white text-gray-800 p-[2px] rounded-sm' />
                            </Link>
                        )}
                        {contactInfo.facebook && (
                            <Link href={contactInfo.facebook} className="text-white hover:text-orange-500 transition-colors duration-300">
                                <Facebook size={18} className='bg-white text-gray-800 p-[2px] rounded-sm'/>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-white'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Logo className="text-gray-800" />
                        <div className="hidden lg:flex items-center space-x-8">
                            <ul className="flex items-center space-x-8 font-medium text-gray-600">
                                <li className="relative">                                                                                                            
                                    <motion.a href={'/'} variants={navItemVariants} whileHover="hover" whileTap="tap">Home</motion.a> 
                                  </li>
                                <li className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                                    <motion.button className="flex items-center space-x-1 focus:outline-none" variants={navItemVariants} whileHover="hover" whileTap="tap">
                                        <span>Services</span>
                                        <IconChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                    </motion.button>
                                    <motion.div
                                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 w-full"
                                      variants={underlineVariants}
                                      animate={isServicesOpen ? "visible" : "hidden"}
                                    />
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
                                            >
                                                <a href="/website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">Web Development</a>
                                                <a href="/graphic-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">Graphic Design</a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                                {['Work', 'About', 'Blog', 'Contact'].map((item) => (
                                    <li key={item} className="relative">
                                        <motion.a href={`/${item.toLowerCase()}`} variants={navItemVariants} whileHover="hover" whileTap="tap">{item}</motion.a>
                                        <motion.div
                                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 w-full"
                                          variants={underlineVariants}
                                          initial="hidden"
                                          whileHover="visible"
                                        />
                                    </li>
                                ))}
                            </ul>
                            {/* <motion.button 
                                className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-sm"
                                variants={ctaButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Get a Free Quote
                            </motion.button> */}
                            <GetFreeQuote />
                        </div>
                        <Menubar />
                    </div>
                </div>
            </nav>
        </header>
    );
};

//----------------------------------------------------------------//
// Footer Component
//----------------------------------------------------------------//
const Footer = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const linkHoverVariant = {
        hover: { x: 4, color: "#F97316", transition: { type: "spring", stiffness: 300 } }
    };
    
    const formSchema = z.object({
      email: z.string().email(
        "Please enter a valid email address"
      ),
    })


    async function onSubmit(data) {
        
        // Here you can handle the form submission, e.g., send data to an API
        setIsSubmitting(true);
        try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send your form data as JSON
      });

      if (response.ok) {
        // Request was successful (status 200-299)
        const result = await response.json(); // Parse the JSON response from your API
        console.log('Subscription successful:', result);
        toast.success(result.message || 'Thank you for subscribing!');
        form.reset(); // Clear the form after successful submission
      } else {
        // Request failed (status 4xx, 5xx)
        const errorData = await response.json(); // Get error message from API
        console.error('Subscription failed:', errorData);
        toast.error(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      toast.error('A network error occurred. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
}
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & Newsletter */}
                    <div className="space-y-4">
                        <Logo className="text-white" />
                        <p className="text-gray-400 text-sm">
                            Building the Digital Future, One Pixel at a Time.
                        </p>
                        <h4 className="font-bold text-white pt-2">Join our newsletter</h4>
                        <Form {...form}>
                            <form className="flex" onSubmit={form.handleSubmit(onSubmit)}>
                                <Input
                                 {...form.register("email")}
                                 name="email"
                                 type="email"
                                 required
                                 placeholder="Your email"
                                 className="outline-0 border-0 w-full bg-gray-700 text-white text-sm rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-r-none"/>
                                { isSubmitting ? (
                                <button type="submit" disabled={true} className="bg-gray-500 text-white font-bold text-sm px-4 py-2 rounded-r-md transition-colors duration-300 flex">
                                    <LoaderCircle className="animate-spin inline-block" size={16} /> <span className="inline-block">Wait...</span>
                                </button>
                                ) : (
                                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-r-md transition-colors duration-300">
                                        Subscribe
                                    </button>
                                )
                                }
                            </form>
                              {/* Display error message if any */}
                              {form.formState.errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                  {form.formState.errors.email.message}
                                </p>
                              )}
                        </Form>
                    </div>
                    {/* Column 2: Quick Links */}
                    <div className="lg:justify-self-center">
                        <h3 className="text-lg font-bold text-orange-500 mb-4">Navigate</h3>
                        <ul className="space-y-3 text-gray-300">
                            {['website-develop', 'graphic-design', 'work', 'about', 'blog', 'contact'].map(item => (
                                <li key={item}><motion.a href={`/${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors duration-300" variants={linkHoverVariant} whileHover="hover">{item}</motion.a></li>
                            ))}
                        </ul>
                    </div>
                    {/* Column 3: Services */}
                     <div className="lg:justify-self-center">
                        <h3 className="text-lg font-bold text-orange-500 mb-4">Our Expertise</h3>
                        <ul className="space-y-3 text-gray-300">
                             <li><motion.a href="/web" className="hover:text-orange-500 transition-colors duration-300" variants={linkHoverVariant} whileHover="hover">Web Development</motion.a></li>
                             <li><motion.a href="/design" className="hover:text-orange-500 transition-colors duration-300" variants={linkHoverVariant} whileHover="hover">Graphic Design</motion.a></li>
                             <li><motion.a href="/web" className="hover:text-orange-500 transition-colors duration-300" variants={linkHoverVariant} whileHover="hover">UI/UX Design</motion.a></li>
                             <li><motion.a href="/web" className="hover:text-orange-500 transition-colors duration-300" variants={linkHoverVariant} whileHover="hover">SEO Strategy</motion.a></li>
                        </ul>
                    </div>
                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-lg font-bold text-orange-500 mb-4">Get in Touch</h3>
                        <div className="text-gray-300 space-y-3">
                            <Link className='block' href={`tel:${contactInfo.phone_1}`}>{contactInfo.phone_1}</Link>
                            <Link className='block' href={`tel:${contactInfo.phone_2}`}>{contactInfo.phone_2}</Link>
                            <Link className='block' href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            {contactInfo.facebook && (
                                <motion.a href={contactInfo.facebook} whileHover={{ scale: 1.2, color: "#F97316" }} className="text-xl"><Facebook /></motion.a>
                            )}
                            {contactInfo.instagram && (
                                <motion.a href={contactInfo.instagram} whileHover={{ scale: 1.2, color: "#F97316" }} className="text-xl"><Instagram /></motion.a>
                            )}
                            {contactInfo.linkedin && (
                                <motion.a href={contactInfo.linkedin} whileHover={{ scale: 1.2, color: "#F97316" }} className="text-xl"><Linkedin /></motion.a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} PixelCrafte. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Header, Footer };
