"use client";
import { contactInfo } from "@/constant";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {toast} from "react-hot-toast"


gsap.registerPlugin(ScrollTrigger)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactPage = () => {

  const textRef = useRef<HTMLSpanElement>(null)

 useEffect(() => {
    const letters = textRef.current?.querySelectorAll('.letter')
    if (!letters) return
    gsap.set(letters, { opacity: 0, y: 20 })
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    })
  }, [])
  const text = 'Get in Touch With Us Now'
  const [loading, setLoading] = useState(false);
   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          setLoading(true)
          const formData = new FormData(event.currentTarget);

          formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_KEY as string);

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
            const target = event.target as HTMLFormElement
             target.reset()
             toast.success('Message sent Successfully')
             setLoading(false)
             return
          }
           setLoading(false)
          toast.success('Something went wrong')
      }

  return (
    <div  id="contact" className="px-5 md:px-20 pt-10 pb-16 mb-4 scroll-mt-28">
    <span
      ref={textRef}
      className="relative block mb-10 mx-auto text-[32px] md:text-[40px] xl:text-6xl font-bold text-white text-center"
    >
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block letter">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactInfo.map((item, idx) => {
          const Card = (
            <motion.div
              custom={idx}
              variants={fadeUp}
              className="p-2 md:p-6 hover:shadow-sm hover:shadow-gray-50 hover:scale-105 transition-all duration-500 flex gap-3 items-center border rounded-xl border-baseBlack"
              key={idx}
            >
              <item.icon size={50} color="white" className="min-w-[50px] min-h-[50px]" />
              <div className="grid gap-y-2">
                <h3 className="sm:text-xl capitalize font-bold">{item.type}</h3>
                <p className="text-lg break-words whitespace-normal">{item.to}</p>
              </div>
            </motion.div>
          );

          return item.type === "email" || item.type === "Phone Number" ? (
            <a
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="block"
            >
              {Card}
            </a>
          ) : (
            Card
          );
        })}
      </motion.div>
      <motion.div
        className="mt-10"
        initial={
          {
            x:-100,
            opacity:0.3
          }
        }
        whileInView={{
          x:0,
          opacity:1
        }}
        viewport={{ once: true }}
        variants={fadeUp}
      >
 
 <div className="w-full mx-auto px-6 py-12 rounded-2xl bg-slate-900/80 backdrop-blur-md shadow-xl border border-slate-700">
  <h2 className="text-center text-3xl font-bold text-white mb-8">
    Get in Touch
  </h2>
  <form onSubmit={handleSubmit} className="grid gap-6 w-full">
    <div className="grid md:grid-cols-2 gap-6 w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-medium text-slate-200">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="your@email.com"
          className="rounded-lg border w-full border-slate-600 bg-white p-3 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-medium text-slate-200">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your full name"
          className="rounded-lg border w-full border-slate-600 bg-white p-3 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
        />
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="message" className="text-lg font-medium text-slate-200">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        rows={6}
        required
        placeholder="Your message..."
        className="rounded-lg w-full border border-slate-600 bg-white p-3 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
      />
    </div>

    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-fit mx-auto px-8 py-3 rounded-full bg-teal-500 text-white text-lg font-semibold shadow-lg hover:bg-teal-600 transition"
    >
      {loading ? <LoaderCircle className="animate-spin" size={24} /> : "Submit"}
    </motion.button>
  </form>
</div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
