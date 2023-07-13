import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { titles, contactForm } from '../constants';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_r0hhwh3',
      'template_15lufbq',
     {
        from_name: form.name,
        to_name: 'Yoshan',
        from_email: form.email,
        to_email: 'ymumberson@gmail.com',
        message: form.message,
     },
      'JRtXihfnaCJ2S0VB9'
     )
     .then(() => {
      setLoading(false);
      alert(contactForm.find(({ id }) => id === "Alert-successful").text);

      setForm({
        name: '',
        email: '',
        message: '',
      });
     }, (error) => {
      setLoading(false);
      console.log(error);
      alert(contactForm.find(({ id }) => id === "Alert-successful").text);
     });
  } 

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{titles.find(({ id }) => id === "Contact-main").text}</p>
        <h3 className={styles.sectionHeadText}>{titles.find(({ id }) => id === "Contact-sub").text}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contactForm.find(({ id }) => id === "Name-title").text}</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={contactForm.find(({ id }) => id === "Name-text").text}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contactForm.find(({ id }) => id === "Email-title").text}</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={contactForm.find(({ id }) => id === "Name-text").text}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{contactForm.find(({ id }) => id === "Message-title").text}</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={contactForm.find(({ id }) => id === "Name-text").text}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? contactForm.find(({ id }) => id === "Sending").text : contactForm.find(({ id }) => id === "Send").text}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");