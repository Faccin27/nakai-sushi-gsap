"use client";

import type React from "react";
import { useEffect } from "react";
import { reviews } from "@/data/reviews-data";
import { revealElements, staggerReveal } from "@/lib/gsap";

const Reviews: React.FC = () => {
  useEffect(() => {
    staggerReveal(".reviews-container", ".review-card", 0.15);
    revealElements(".gsap-reveal-item");
  }, []);
  
  // render das star
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      id="reviews"
      className="section relative bg-white/95 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('/images/decorative.png')] bg-repeat opacity-5 pointer-events-none z-0"
        aria-hidden="true"
      ></div>

      <div className="container-padded">
        <div className="japanese-divider">
          <span className="w-2 h-2 bg-nakai-red rotate-45"></span>
        </div>

        <div className="text-center mb-16 z-50">
          <h2 className="heading-lg text-nakai-navy mb-4 gsap-reveal-item">
            Experiências dos Clientes
          </h2>
          <p className="text-lg text-nakai-navy/80 max-w-2xl mx-auto gsap-reveal-item">
            Veja o que nossos clientes têm a dizer sobre sua jornada
            gastronômica no Nakai
          </p>
        </div>

        <div className="reviews-container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card bg-nakai-gray p-6 rounded-sm shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={
                    review.profileImage ||
                    "https://randomuser.me/api/portraits/lego/1.jpg"
                  }
                  alt={review.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-nakai-navy">
                    {review.author}
                  </h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>

              {renderStars(review.rating)}

              <p className="mt-3 text-nakai-navy/80">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col items-center gsap-reveal-item">
          <p className="text-lg text-nakai-navy/80 mb-4">
            Leia mais avaliações no Google
          </p>
          <div className="flex items-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-xl font-semibold text-nakai-navy">
              4.9/5
            </span>
          </div>
          <a
            href="https://g.page/r/nakai-sushi/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-nakai-red text-white py-3 px-8 rounded-sm hover:bg-opacity-90 transition-colors"
          >
            Avalie-nos no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
