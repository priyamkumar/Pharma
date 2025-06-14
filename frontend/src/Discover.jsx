import React from 'react'

export default function Discover() {
  return (
    <section className="py-12">
        <div className="container md:max-w-[75vw] mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Discover Suave Healthcare
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                At Suave Healthcare, we are dedicated to providing top-quality,
                affordable healthcare solutions through our extensive range of
                pharma franchise, PCD franchise, and pharma PCD franchise
                opportunities.
              </p>
              <p className="text-gray-600">
                Established in 2014, we have grown exponentially, partnering
                with numerous distributors and catering to a diverse clientele.
                Our commitment to innovation, quality, and customer satisfaction
                has positioned us as a trusted name in the pharmaceutical
                industry. Discover the difference and join our journey
                towards better health for all.
              </p>
            </div>
            <div className="bg-[#ddfbe9] rounded-lg overflow-hidden p-6 text-gray-600">
              <h3 className="text-2xl font-bold mb-4">
                EXPERIENCE THE DIFFERENCE
              </h3>
              <p className="mb-1 font-medium">
                Your Trusted Partner in Quality,
              </p>
              <p className="mb-1 font-medium">Innovation, and Affordable</p>
              <p className="font-medium">Healthcare Solutions</p>
              <img
                src="/1.jpeg"
                alt="Healthcare Professional"
                className="ml-auto max-w-40"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
