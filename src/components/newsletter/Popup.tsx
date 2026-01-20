"use client";

import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {subscribeNewsLetter} from '@/api/newsletter.api';
interface NewsletterPopupProps {
  delay?: number; // Delay in milliseconds before showing popup (default: 2000)
}

export default function NewsletterPopup({ delay = 2000 }: NewsletterPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("");

  useEffect(() => {
    // Show popup after specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
        setLoading(true);
        setError("");
        await subscribeNewsLetter(email);
        console.log("subscribe successfuly");

    }catch(err:any){
        setError(err.response?.data?.message || "something went wrong");
    }finally{
        setLoading(false)
    }
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    
    // Close popup after successful submission
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center  animate-fade-in"
     
    >
        <div className='absolute inset-0 bg-black/90'
         onClick={handleOverlayClick}/>
      <div className="relative bg-white  top-7  rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Close popup"
        >
          <AiOutlineClose className="w-5 h-5 text-gray-600" />
        </button>

        {/* Popup Content */}
        <div className="p-8 md:p-10">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Stay in the Loop
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get exclusive insights, industry trends, and CRM tips delivered straight to your inbox.
                </p>
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourcompany.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                    {loading ? "subscribing..." : "Subscribe to Newsletter"}
                  
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Join 10,000+ CRM professionals who trust our insights
                </p>
                <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No spam
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Welcome Aboard!
              </h2>
              <p className="text-gray-600 text-lg">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}