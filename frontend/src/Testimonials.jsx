import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Hamid Bukhari",
      text: "I am doing business with two years. His support is awesome. Staff are so nice and helpful specially Mr Abhishek handling and follow up very good.",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Shafi Ollayil",
      text: "I am very glad to tell that Suave Healthcare means a lot for me.. They are supporting me very much.. The products are good quality and good price also",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "NIRMAL JANGRA",
      text: "If you're looking for quality products with affordable prices and services for your value, Suave Healthcare would be my suggestion",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 4,
      name: "Ravi Thakur",
      text: "One of the best place to visit for pharma business .... Wide range of products are available at best price.. Quality of the medicine is of higher standard",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 5,
      name: "Rahul Rastogi",
      text: "I have been using Suave Healthcare products since 2021almost 1 year. My experience was good. And its products are also very nice with good packaging.",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 6,
      name: "G.MEENAKSHI Sundaram",
      text: "I have been doing business with them since 2018...its really great having a organization like Suave Healthcare..well trained staffs, uncompromising efficacy of products",
      avatar: "/api/placeholder/64/64"
    }
  ];

  // Function to render 5 star rating
  const renderStars = () => {
    return (
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 text-[#129349]" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Google logo component
  const GoogleLogo = () => (
    <div className="w-8 h-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    </div>
  );

  return (
    <section className="py-12">
    <div className="md:max-w-[75vw] mx-auto px-4 ">
      <h2 className="text-3xl font-bold text-gray-700 mb-3">
        Your Success is Our Testimony
      </h2>
      <p className="text-gray-600 mb-12">
        Here's what our esteemed partners say about collaborating with
        Suave Healthcare. Discover their journeys towards success with
        us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              {renderStars()}
              <GoogleLogo />
            </div>
            
            <p className="text-gray-700 flex-grow mb-4">
              "{testimonial.text}"
            </p>
            
            <div className="flex items-center mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="cursor-pointer border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors w-full max-w-xl">
          View All
        </button>
      </div>
    </div>
    </section>
  );
}
