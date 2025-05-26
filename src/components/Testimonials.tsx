import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (isAutoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what people say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <Quote
                          size={32}
                          className="text-blue-600 dark:text-blue-400 absolute -top-3 -left-3"
                        />
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 text-center mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;