import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .finally(() => {
        setLoading(false);
        formRef.current.reset();
      });
  };

  return (
    <section className=" pb-5 relative flex flex-col justify-center items-center bg-gray-100">
      {/* Card */}
      <div className="bg-white z-10 shadow-2xl w-full max-w-2xl px-16 py-14">
        <h2 className="md:text-4xl text-2xl font-normal text-center mb-10">
          Contact Me
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-100 px-4 py-3 text-sm focus:outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-100 px-4 py-3 text-sm focus:outline-none"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Type your message"
            required
            className="w-full bg-gray-100 px-4 py-3 text-sm resize-none focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-green-700 text-white py-3 text-sm tracking-wide hover:bg-green-800 transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
         <div className="flex justify-center items-center gap-2  ">
          <span className="material-icons text-lg">
            phone
          </span>
          <p>08136190549</p>
        </div>

        </form>
      </div>

      {/* Footer text */}
      <p className="text-gray-400 z-10 text-sm mt-10">
        copyright since 2025...
      </p>
      <div className="h-100 absolute bottom-0 bg-black w-full"></div>
    </section>
  );
}
