import React, { useRef } from "react";

/* -------------------- DATA -------------------- */
const testimonials = [
  {
    name: "Jane Doe",
    role: "Head of Science, West High",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDihh0vXmvyePghRwEjDP2b_0JD-dL_64oystn80ScVlgn0n8Sa8jTZXx-hZlVhmRXOoEWqXMfMHZX1QVWB6BLZoFP13_Y81Esw4cmHQ8cIngKyagnZbvcTXatMtj7HCQXr5gUUfBkko-GMGh88Pk0q3fSuu6YUUmrDoL1GNJaaZtGNwydUCprLPaZmh5BN5TV2E_aHiWySIGtsvIzzDUtvXdOBsWYz8RfXfD1-RC-sq6MQJ8DIFAMQUqrHBqS_ZMBJNHiFsRve_D0",
    rating: 5,
    text:
      "This platform transformed how we grade exams. What used to take days now takes hours.",
  },
  {
    name: "John Smith",
    role: "Professor, Tech University",
    image: "",
    rating: 4.5,
    text:
      "Instant feedback and analytics help me identify learning gaps very quickly.",
  },
  {
    name: "Emily White",
    role: "Administrator, Online Edu",
    image: "",
    rating: 5,
    text:
      "Administering exams has never been easier. Secure remote testing is amazing.",
  },
  {
    name: "Mark Davis",
    role: "IT Director, City Schools",
    image: "",
    rating: 5,
    text:
      "Setup was seamless. We migrated thousands of students in one weekend.",
  },
   {
    name: "bilal ",
    role: "Professor, Tech University",
    image: "",
    rating: 4.5,
    text:
      "Instant feedback and analytics help me identify learning gaps very quickly.",
  },
  {
    name: "kinza",
    role: "Administrator, Online Edu",
    image: "",
    rating: 5,
    text:
      "Administering exams has never been easier. Secure remote testing is amazing.",
  },
];

/* -------------------- STAR COMPONENT -------------------- */
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 text-yellow-400 text-lg">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) return <span key={star}>★</span>;
        if (rating >= star - 0.5) return <span key={star}>☆</span>;
        return (
          <span key={star} className="text-slate-300">
            ★
          </span>
        );
      })}
    </div>
  );
};

/* -------------------- MAIN SECTION -------------------- */
const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = 360 + 24; // card width + gap
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* -------- HEADER -------- */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Trusted by Educators
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700
                         hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              ←
            </button>
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700
                         hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* -------- SLIDER -------- */}
        <div
          ref={sliderRef}
          className="
            flex gap-6
    overflow-x-scroll
    scroll-smooth
    whitespace-nowrap
    pb-2
    no-scrollbar
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                inline-block
                w-[360px]
                flex-shrink-0
                bg-white dark:bg-slate-800
                rounded-2xl
                p-6
                border border-slate-200 dark:border-slate-700
                shadow-sm
              "
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={
                    item.image ||
                    `https://ui-avatars.com/api/?name=${item.name}`
                  }
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-indigo-600">{item.role}</p>
                </div>
              </div>

              {/* Rating */}
              <StarRating rating={item.rating} />

              {/* Text */}
              <p className="mt-4 text-wrap text-slate-600 dark:text-slate-300 italic">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
