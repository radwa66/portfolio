"use client";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SocialButton from "./SocialButton";
import ContactInfo from "./ContactInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contact-schema";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

 const onSubmit = async (
  data: ContactFormData
) => {
  try {
    await emailjs.send(
      "service_mbsai03",
      "template_v4yqryd",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "4Kmh6oX1Lb9spd3QT"
    );

    reset();

    alert("Message sent!");
  } catch {
    alert("Failed to send message");
  }
};

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-24  border-t  border-white/10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center md:items-start items-center">
          <span className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
            -- Get In Touch
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s work together
          </h2>

          <p className="mb-8 max-w-lg text-gray-400 leading-7 text-center md:text-left">
            I’m a frontend developer specializing in Next.js, React, TypeScript,
            and modern web experiences. I’m always open to discussing freelance
            projects, frontend opportunities, and creative collaborations.
          </p>

          <ContactInfo
            href="mailto:radwaelhenawy8@gmail.com"
            ariaLabel="Send email"
            icon={<Mail size={20} className="text-emerald-400" />}
          >
            radwaelhenawy8@gmail.com
          </ContactInfo>

          <ContactInfo icon={<MapPin size={20} className="text-emerald-400" />}>
            Tokyo, Japan
          </ContactInfo>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <SocialButton
              href="https://github.com/radwa66"
              label="Github"
              icon={<FaGithub size={20} />}
            />

            <SocialButton
              href="https://www.linkedin.com/in/radwa-mohamed-558031393"
              label="Linkedin"
              icon={<FaLinkedin size={20} />}
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Name */}
            <InputField
              id="name"
              label="Name"
              placeholder="Your name"
              register={register}
              error={errors.name}
            />

            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="your@email.com"
              register={register}
              error={errors.email}
            />

            <TextareaField
              id="message"
              label="Message"
              placeholder="Write your message..."
              register={register}
              error={errors.message}
            />

            {/* Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full flex justify-center cursor-pointer gap-2 items-center rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-black transition hover:bg-emerald-300"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
