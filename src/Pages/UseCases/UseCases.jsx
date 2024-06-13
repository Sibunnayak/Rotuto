import React from "react";

const UseCases = () => {
  const data = [
    {
      id: 1,
      title: "Starter",
    },
    {
      id: 2,
      title: "Standard",
    },
    {
      id: 3,
      title: "Premium",
    },
    {
      id: 4,
      title: "Starter",
    },
    {
      id: 5,
      title: "Standard",
    },
    {
      id: 6,
      title: "Premium",
    },
  ];

  return (
    <div className="my-12 lg:mx-auto mx-8 max-w-screen-xl">
      <div className="flex items-center justify-center">
        <h1 className="lg:text-7xl lg:mb-10 text-4xl max-sm:text-2xl mb-8 lg:mt-6 mt-4 font-bold text-blue-900">
          AI Chatbot Use Cases
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl p-6 shadow-md bg-gradient-to-b from-blue-900 to-blue-950 flex items-center justify-center"
          >
            <div className="card-body flex flex-col items-center">
              <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full mt-24 border-black border shadow-lg shadow-black">
                <p className="mx-8">Use it for</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
