"use client";

import Image from "next/image";
import Heading from "./reusable/Heading";
import { motion } from "framer-motion";
import { useState } from "react";
import { contactFormResponse, contactFormSchema } from "@/schemas";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      toast.error("Invalid form field inputs");
      return setError("Invalid Inputs");
    }
    try {
      setLoading(true);
      const res = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(validation.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: unknown = await res.json();
      setLoading(false);
      setError(null);
      const validateFeilds = contactFormResponse.safeParse(data);
      if (!validateFeilds.success) {
        return toast.error("Something went wrong");
      }

      const { message, ok } = validateFeilds.data;

      if (!ok) {
        return toast.error(message);
      }
      setFormData({
        name: "",
        email: "",
        subject: "",
        content: "",
      });
      toast.success(message);
    } catch (err) {
      setLoading(false);
      setError(null);
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div id="contact" className="min-h-screen py-10 px-56 sm:px-28">
      <Heading text="Get in touch" />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/contact.gif"}
            alt="contact-section-image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </motion.div>
        <motion.form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              disabled={loading}
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your Name"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <input
              disabled={loading}
              onChange={(e) => {
                handleChange(e);
              }}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Your Email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <input
            disabled={loading}
            onChange={(e) => {
              handleChange(e);
            }}
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          <textarea
            disabled={loading}
            onChange={(e) => {
              handleChange(e);
            }}
            name="content"
            value={formData.content}
            placeholder="Write me..."
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            disabled={loading}
            className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outine-none hover:bg-yellow-500 transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send Message
          </button>
          {error && (
            <span className="text-red-500 text-[14px] text-center">
              {error}
            </span>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
