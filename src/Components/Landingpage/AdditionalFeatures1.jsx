import React from 'react';

const AdditionalFeatures1 = () => {
    return (
        <div>
           <div>
               <h2 className="text-3xl font-bold text-center text-green-800 pt-4 bg-base-200">Why We’re Different</h2>
            </div>
           <div className="hero bg-base-200 mb-4">
           
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://ik.imagekit.io/mm5y9xdkp/5-Features-of-a-Bank.jpg?updatedAt=1753195070145"
      className="max-w-sm pt-6 rounded-xl shadow-2xl"
    />
    <div>
     <section className="bg-gray-50 py-12 px-4 md:px-12 ">
     
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden shadow-md">
          <thead className="bg-green-200 text-green-800">
            <tr>
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold">Traditional Bank</th>
              <th className="px-6 py-4 font-semibold">Our Bank</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 bg-white">
            <tr>
              <td className="px-6 py-4">24/7 Smart Chatbot</td>
              <td className="px-6 py-4 text-red-500 text-xl">❌</td>
              <td className="px-6 py-4 text-green-600 text-xl">✅</td>
            </tr>
            <tr >
              <td className="px-6 py-4">Instant KYC</td>
              <td className="px-6 py-4 text-red-500 text-xl">❌</td>
              <td className="px-6 py-4 text-green-600 text-xl">✅</td>
            </tr>
            <tr >
              <td className="px-6 py-4">Carbon-Neutral</td>
              <td className="px-6 py-4 text-red-500 text-xl">❌</td>
              <td className="px-6 py-4 text-green-600 text-xl">✅</td>
            </tr>
            <tr >
              <td className="px-6 py-4">Personalized Insights</td>
              <td className="px-6 py-4 text-red-500 text-xl">❌</td>
              <td className="px-6 py-4 text-green-600 text-xl">✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    </div>
  </div>
</div> 
        </div>
    );
};

export default AdditionalFeatures1;