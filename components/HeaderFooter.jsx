"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Instagram, Facebook, Linkedin, LoaderCircle, ArrowRight, Code, PenTool, LayoutDashboard, Megaphone, Home, Briefcase, Info, Rss, Mail } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

import { contactInfo } from '@/assets';

//================================================================//
// 0. INLINE SVG ICONS
// Self-contained icons for robustness.
//================================================================//
const IconEnvelope = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
);
const IconChevronDown = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
);
const IconMobileMenu = () => (
    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);


//================================================================//
// 1. DYNAMIC LOGO COMPONENT
// Retains initial spin, adds a 360-degree spin on hover for
// an engaging, interactive effect.
//================================================================//
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
    <Link className="flex items-center space-x-2 cursor-pointer group" href="/">
      <motion.div
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ rotate: 360, transition: { duration: 0.5, ease: 'linear' } }}
      >
        <img
            src="/logo.svg"
            alt="PixelCrafte Logo"
            width="32"
            height="32"
            className="rounded-full"
        />
      </motion.div>
      <span className="text-2xl font-extrabold tracking-tight">
        <span className={className}>Pixel</span><span className="text-orange-500">Crafte</span>
      </span>
    </Link>
  );
};

//================================================================//
// 2. HEADER COMPONENT
// Features a revamped mobile menu and unified hover effects for
// all navigation links, ensuring a consistent and polished look.
//================================================================//
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItemVariants = {
        hover: { y: -2, color: "#FF5722" },
        tap: { scale: 0.95 }
    };

    const underlineVariants = {
      hidden: { scaleX: 0, originX: 0.5 },
      visible: { scaleX: 1, originX: 0.5, transition: { duration: 0.3, ease: 'easeInOut' } }
    };

    const ctaButtonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 87, 34, 0.25)" },
        tap: { scale: 0.98 }
    };

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Services', icon: LayoutDashboard, sublinks: [
            { name: 'Web Development', href: '/website-development', icon: Code },
            { name: 'Graphic Design', href: '/graphic-design', icon: PenTool },
            { name: 'Digital Marketing', href: '/digital-marketing', icon: Megaphone }
        ]},
        { name: 'Work', href: '/work', icon: Briefcase },
        { name: 'About', href: '/about', icon: Info },
        { name: 'Blog', href: '/blog', icon: Rss },
        { name: 'Contact', href: '/contact', icon: Mail }
    ];

    // GET A FREE QUOTE DIALOG (Modal)
    const GetFreeQuote = () => {
        const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const formSchema = z.object({
            email: z.string().email("Invalid email address").nonempty("Email is required"),
            phone: z.string().optional(),
            serviceDescription: z.string().min(10, "Min 10 characters").nonempty("Service description is required"),
        });
        const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: { email: '', phone: '', serviceDescription: '' }
        });
        const onSubmit = async (data) => {
            setIsSubmitting(true);
            try {
                // Mock API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                toast.success("Quote request sent! We'll be in touch soon.");
                setIsDialogOpen(false);
                form.reset();
            } catch (error) {
                toast.error("Failed to send quote request.");
            } finally {
                setIsSubmitting(false);
            }
        };
        return (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <motion.button
                        className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-sm shadow-lg shadow-orange-500/20"
                        variants={ctaButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Get a Free Quote
                    </motion.button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-orange-400 text-2xl">Get a Free Quote</DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Fill out the form below, and we'll craft a proposal for you.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="your@email.com" {...field} className="bg-gray-800 border-gray-600 focus:ring-orange-500" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder={contactInfo.phone_2} {...field} className="bg-gray-800 border-gray-600 focus:ring-orange-500" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                             <FormField control={form.control} name="serviceDescription" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tell us about your project</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe your vision..." {...field} className="bg-gray-800 border-gray-600 focus:ring-orange-500 h-32" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <DialogFooter className="pt-4">
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary" disabled={isSubmitting}>Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white disabled:bg-orange-400 disabled:opacity-70">
                                    {isSubmitting ? <><LoaderCircle className="animate-spin mr-2" size={16} /> Sending...</> : 'Request Quote'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        );
    }

    // REVAMPED AESTHETIC MOBILE MENUBAR
    const Menubar = () => {
        const mobileNavContainerVariants = {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        };
        const mobileNavItemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
        };

        return (
            <Sheet>
                <SheetTrigger className="lg:hidden">
                    <IconMobileMenu />
                </SheetTrigger>
                <SheetContent side="left" className="w-full h-full bg-gray-900/95 backdrop-blur-lg border-r-0 p-0 flex flex-col">
                    <div className="p-6 border-b border-gray-700/50">
                        <Logo className="text-white" />
                    </div>
                    <motion.div
                        className="flex-grow flex flex-col justify-center items-center space-y-6 p-6"
                        variants={mobileNavContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={mobileNavItemVariants}>
                                {link.sublinks ? (
                                    <div className="text-center">
                                         <span className="text-3xl font-bold text-gray-400 flex items-center justify-center gap-3">
                                            <link.icon className="text-orange-500" /> {link.name}
                                        </span>
                                        <div className="mt-2 space-y-3">
                                            {link.sublinks.map(sublink => (
                                                <Link key={sublink.name} href={sublink.href} className="block text-xl text-gray-200 hover:text-orange-400 transition-colors">
                                                    {sublink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={link.href} className="text-3xl font-bold text-gray-200 hover:text-orange-400 transition-colors flex items-center gap-3">
                                        <link.icon className="text-orange-500" /> {link.name}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="p-6 mt-auto border-t border-gray-700/50 w-full flex justify-center">
                         <GetFreeQuote />
                    </div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-800 text-white text-xs px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto h-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href={`tel:${contactInfo.phone_1}`} className="flex items-center space-x-1.5 hover:text-orange-400 transition-colors duration-300">
                            <Phone size={14} />
                            <span>{contactInfo.phone_1}</span>
                        </Link>
                        <Link href={`mailto:${contactInfo.email}`} className="hidden sm:flex items-center space-x-1.5 hover:text-orange-400 transition-colors duration-300">
                            <IconEnvelope />
                            <span>{contactInfo.email}</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-3">
                        {[contactInfo.linkedin, contactInfo.instagram, contactInfo.facebook].map((social, index) => (
                            <Link key={index} href={social} className="text-gray-400 hover:text-white transition-colors duration-300">
                                {index === 0 && <Linkedin size={16} />}
                                {index === 1 && <Instagram size={16} />}
                                {index === 2 && <Facebook size={16} />}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-white'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Logo className="text-gray-800" />
                        <div className="hidden lg:flex items-center space-x-8">
                            <ul className="flex items-center space-x-8 font-medium text-gray-600">
                                {navLinks.map(link => (
                                    <li key={link.name} className="relative group"
                                        onMouseEnter={() => link.sublinks && setIsServicesOpen(true)}
                                        onMouseLeave={() => link.sublinks && setIsServicesOpen(false)}
                                    >
                                        {link.sublinks ? (
                                            <motion.button className="flex items-center space-x-1 focus:outline-none" variants={navItemVariants} whileHover="hover" whileTap="tap">
                                                <span>{link.name}</span>
                                                <IconChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </motion.button>
                                        ) : (
                                            <motion.a href={link.href} variants={navItemVariants} whileHover="hover" whileTap="tap">{link.name}</motion.a>
                                        )}

                                        <motion.div
                                          className="absolute -bottom-1 left-0 h-0.5 bg-orange-500 w-full"
                                          variants={underlineVariants}
                                          initial="hidden"
                                          animate={isServicesOpen && link.sublinks ? "visible" : ""}
                                          whileHover="visible"
                                        />
                                        <AnimatePresence>
                                            {link.sublinks && isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-md shadow-xl py-2 z-10 border border-gray-100"
                                                >
                                                    {link.sublinks.map(sublink => (
                                                      <Link key={sublink.name} href={sublink.href} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-200">
                                                        <sublink.icon size={16} />
                                                        <span>{sublink.name}</span>
                                                      </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                            <GetFreeQuote />
                        </div>
                        <div className="lg:hidden">
                            <Menubar />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};


//================================================================//
// 3. VIBRANT & ELITE FOOTER COMPONENT
// A complete redesign featuring a dynamic gradient background,
// glowing effects, and a futuristic aesthetic to leave a
// lasting impression.
//================================================================//
const Footer = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formSchema = z.object({ email: z.string().email("Please enter a valid email address") });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { email: '' },
    });

    async function onSubmit(data) {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Mock API call
            toast.success(`Subscribed! Welcome to the inner circle, ${data.email}.`);
            form.reset();
        } catch (error) {
            toast.error('Subscription failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    const FooterLink = ({ href, children }) => (
      <motion.a
        href={href}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
        whileHover={{ x: 5, color: "#fb923c" }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <ArrowRight size={14} className="text-orange-500/70" />
        {children}
      </motion.a>
    );

    return (
        <footer className="relative bg-gray-900 text-white pt-20 pb-8 overflow-hidden">
            {/* BACKGROUND DECORATIVE ELEMENTS */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,87,34,0.3),rgba(255,255,255,0))]"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & Newsletter */}
                    <div className="space-y-6">
                        <Logo className="text-white" />
                        <p className="text-gray-400 text-sm">
                            Engineering the digital frontier with elite code and visionary design.
                        </p>
                        <h4 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 pt-2">Join Our Newsletter</h4>
                        <Form {...form}>
                            <form className="flex group" onSubmit={form.handleSubmit(onSubmit)}>
                                <FormControl>
                                    <Input
                                        {...form.register("email")}
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Your email address"
                                        className="w-full bg-gray-800/50 text-white border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-r-none border-r-0 transition-all duration-300 group-hover:bg-gray-800"
                                    />
                                </FormControl>
                                <button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-r-md transition-colors duration-300 flex items-center justify-center w-36 disabled:bg-gray-600">
                                    {isSubmitting ? <LoaderCircle className="animate-spin" size={20} /> : 'Subscribe'}
                                </button>
                            </form>
                            <FormMessage className="text-red-400 text-xs mt-2" />
                        </Form>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:justify-self-center">
                        <h3 className="text-xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Navigate</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="/about">About Us</FooterLink></li>
                            <li><FooterLink href="/work">Our Work</FooterLink></li>
                            <li><FooterLink href="/blog">Insights</FooterLink></li>
                            <li><FooterLink href="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                     <div className="lg:justify-self-center">
                        <h3 className="text-xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Our Expertise</h3>
                        <ul className="space-y-3">
                             <li><FooterLink href="/website-development">Web Deivelopment</FooterLink></li>
                             <li><FooterLink href="/graphic-design">Graphic Design</FooterLink></li>
                             <li><FooterLink href="/ui-ux-design">UI/UX Design</FooterLink></li>
                             <li><FooterLink href="/seo-strategy">SEO Strategy</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Get in Touch</h3>
                        <div className="text-gray-300 space-y-3">
                            <a href={`tel:${contactInfo.phone_1}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors"><Phone size={16}/> {contactInfo.phone_1}</a>
                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors"><IconEnvelope/> {contactInfo.email}</a>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            {[contactInfo.linkedin, contactInfo.instagram, contactInfo.facebook].map((social, index) => (
                                <motion.a key={index} href={social}
                                    className="p-2 bg-gray-700/50 rounded-full text-gray-300 hover:text-white hover:bg-orange-500 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3, boxShadow: "0px 5px 15px rgba(255, 87, 34, 0.4)" }}
                                >
                                    {index === 0 && <Linkedin size={20} />}
                                    {index === 1 && <Instagram size={20} />}
                                    {index === 2 && <Facebook size={20} />}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} PixelCrafte. All Rights Reserved. Built with passion.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/privacy-policy" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                        <a href="/terms-of-service" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Header, Footer };

