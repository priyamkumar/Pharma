import React from "react";

const ProductInfoLayout = () => {
  return (
    <div className="md:max-w-[75vw] mx-auto bg-white p-6 font-sans">
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-gray-900">
            About the product
          </h2>

          {/* Description Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              ABLOVIB N is a comprehensive respiratory medication that combines
              the powerful mucolytic action of N-Acetylcysteine with the
              bronchodilator properties of Acebrophylline. This innovative
              formulation is specifically designed to address multiple aspects
              of respiratory disorders by reducing mucus viscosity, promoting
              expectoration, and providing bronchodilation. N-Acetylcysteine
              works by breaking down the disulfide bonds in mucus proteins,
              making it easier to clear thick, sticky secretions from the
              respiratory tract. Meanwhile, Acebrophylline acts as a selective
              phosphodiesterase inhibitor, providing both bronchodilator and
              anti-inflammatory effects, which helps in opening up the airways
              and reducing inflammation in the respiratory system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination is particularly effective in chronic respiratory
              conditions where both mucus clearance and bronchodilation are
              required. This dual-action approach helps patients breathe more
              easily while reducing the frequency and severity of respiratory
              symptoms. The medication is formulated to provide sustained relief
              and improve overall quality of life for patients suffering from
              various respiratory ailments.
            </p>
          </div>

          {/* Indication Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">Indication</h3>
            <p className="text-gray-700">
              Chronic Obstructive Pulmonary Disease (COPD), Chronic Bronchitis,
              Acute Bronchitis, Asthmatic Bronchitis, Emphysema, Bronchiectasis,
              Acute and Chronic Respiratory Tract Infections, Mucus
              Hypersecretion Disorders, Post-operative Respiratory Complications
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="my-15 space-y-6">
          {/* Side Effects Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">Side Effects</h3>
            <p className="text-gray-600">
              Nausea, Vomiting, Diarrhea, Abdominal pain, Headache, Dizziness,
              Skin rash, Allergic reactions, Drowsiness, Gastric irritation,
              Heartburn, Loss of appetite, Fatigue, Tremor, Palpitations, Sleep
              disturbances, Dry mouth, Constipation
            </p>
          </div>

          {/* Important Notice Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">
              Important Notice
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Prescription Required:</strong> This medication should
                only be used under medical supervision. Consult your healthcare
                provider before starting treatment. Do not exceed the
                recommended dosage. Inform your doctor about any existing
                medical conditions, allergies, or other medications you are
                taking. Pregnant and breastfeeding women should seek medical
                advice before use.
              </p>
              <p className="text-gray-600 text-xs mt-2 italic">
                Temp data - Please consult healthcare professional for complete
                prescribing information.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">
              Storage Instructions
            </h3>
            <p className="text-gray-600 text-sm">
              Store in a cool, dry place away from direct sunlight. Keep out of
              reach of children. Do not use after expiry date. Store below 25°C.
            </p>
          </div>

          {/* Dosage Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-900">Dosage</h3>
            <p className="text-gray-600 text-sm">
              <strong>Adults:</strong> 1 tablet twice daily or as directed by
              physician.
              <br />
              <strong>Duration:</strong> As prescribed by healthcare provider.
              <br />
              <strong>Administration:</strong> Take with or after meals to
              reduce gastric irritation.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-[#ddfbe9] text-[#129349] rounded-lg shadow-md p-6 border-l-4 transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="space-y-3">
          {/* Header/Title */}
          <h2 className="text-xl font-semibold text-gray-900">
            Storage Condition
          </h2>

          {/* Body Text */}
          <p className="text-gray-800 leading-relaxed">
            Product details for storage condition Product details for storage
            condition Product details for storage condition Product details for
            storage condition. Store in a cool, dry place away from direct
            sunlight and moisture. Keep the temperature between 15°C to 25°C for
            optimal preservation. Ensure the container is tightly closed after
            each use to maintain product integrity and prevent contamination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoLayout;
