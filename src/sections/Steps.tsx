import { FC } from "react";

const data = [
  {
    id: 1,
    title: 'Set disbursement Instructions',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 2,
    title: 'Assembly retrieves funds from your account',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 3,
    title: 'Assembly initiates disbursement',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 4,
    title: 'Customer receives funds payment',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 5,
    title: 'Transaction confirmation',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  },
  {
    id: 6,
    title: 'Process completion',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
  }
];

const Steps: FC = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            WHATS THE FUNCTION
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light">
            Meet the feature of our product
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <span className="text-2xl font-semibold text-gray-800">
                  {item.id.toString().padStart(2, '0')}
                </span>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl text-white font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;