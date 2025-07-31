import React from 'react';
import Marquee from 'react-fast-marquee';
//import Marquee from 'react-fast-marquee';

const Features = () => {
    const offers = [
    {
      title: "💡 Utility Bill Payment Offer",
      description: "Utility bill payment করলে পাবেন 5% ক্যাশব্যাক।",
    },
    {
      title: "🎁 New Account Bonus",
      description: "নতুন অ্যাকাউন্ট খুললেই X Digital Banking System দিচ্ছে ৳১০০ বোনাস।",
    },
    {
      title: "📲 Free SMS Alerts",
      description: "Mobile Banking App ব্যবহার করলে প্রতি মাসে ফ্রি SMS alert।",
    },
    {
      title: "🎓 Student Account Benefits",
      description: "ছাত্রদের জন্য Annual Fee Free ও Student Account এ Monthly cashback।",
    },
    { title: "💧 Instant Utility Discount",
      description: "বিদ্যুৎ, গ্যাস, পানির বিল দিলে পাওয়া যাবে ইনস্ট্যান্ট ডিসকাউন্ট।",
    },
    {
    title: "🎉 Transaction Bonus",
    description: "১ম ৫টি ট্রানজাকশন শেষ করলেই ৳২০০ বোনাস!",
  },
  {
    title: "🔁 Auto Pay Reward",
    description: "Auto Pay চালু করলে প্রতি মাসে ৳৫০ রিওয়ার্ড!",
  },
  {
    title: "💳 Virtual Card Bonus",
    description: "Virtual Debit Card একটিভ করলেই পাচ্ছেন ৳৭৫ বোনাস!",
  },
  {
    title: "🎯 Goal-Based Savings",
    description: "Goal-based saving account খুলে লক্ষ্যে পৌঁছালে বোনাস!",
  },
  ];

  return (
    <div className="bg-gray-50  py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        🏦 X Digital Banking System – এক্সক্লুসিভ অফারসমূহ
      </h2>
     <Marquee pauseOnHover='true'>
      {
         <div className="flex flex-row  gap-6 min-w-3xl mx-auto">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-200 rounded-2xl max-w-96 shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{offer.title}</h3>
            <p className="text-gray-700">{offer.description}</p>
            <div className="mt-4 ">
              <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm">
                বিস্তারিত দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>
      }
     </Marquee>
    </div>
  );
};


export default Features;