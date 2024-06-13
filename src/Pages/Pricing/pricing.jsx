import React from 'react';

const Pricing = () => {
  const data = [
    {
      id: 1,
      title: "Starter",
      price: 49,
      credits: 40,
      features: ["Estimated 30-50 notes", "Unlimited custom templates", "HIPAA and PIPEDA compliant"],
    },
    {
      id: 2,
      title: "Standard",
      price: 99,
      credits: 1250,
      features: ["Estimated 300-500 notes", "Unlimited custom templates", "HIPAA and PIPEDA compliant"],
    },
    {
      id: 3,
      title: "Premium",
      price: 199,
      credits: 3250,
      features: ["Estimated 300-500 notes", "Unlimited custom templates", "HIPAA and PIPEDA compliant"],
    },
  ];

  return (
    <div className="my-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex items-center justify-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-8 lg:mt-6 mt-4 font-bold text-blue-900">
          Pricing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-100 rounded-3xl p-6 shadow-md">
            <div className="card-body">
              <h5 className="text-3xl font-bold mb-4">{item.title}</h5>
              <h6 className="text-2xl font-semibold mb-2">${item.price}<span className="text-base">/mo</span></h6>
              <p className="text-base mb-4">{item.credits} Credits</p>
              <ul className="list-disc pl-5 space-y-2 mb-8 lg:mb-12">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-base">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
