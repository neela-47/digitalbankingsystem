import React from 'react';
const achievements = [
  {
    title: "Strong Financial Growth in 2025",
    description:
      "Our bank achieved a remarkable 25% growth in assets and a 30% increase in customer base this year. This growth reflects our dedication to innovation, customer satisfaction, and digital transformation.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b1.png?updatedAt=1754995788811",
    stats: [
      { label: "Asset Growth", value: "+25%" },
      { label: "Customer Growth", value: "+30%" },
      { label: "Active Customers", value: "1.5M+" },
    ],
  },
  {
    title: "Awarded Best Digital Bank 2025",
    description:
      "Recognized by the National Banking Excellence Awards for providing outstanding digital banking experiences and customer service. Also received the Customer Service Excellence Award for the third consecutive year.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b2.png?updatedAt=1754995897960",
    stats: [
      { label: "Awards Won", value: "5+" },
      { label: "Customer Rating", value: "4.9/5 ⭐" },
    ],
  },
  {
    title: "Strategic Alliances for Better Banking",
    description:
      "Partnered with leading payment gateways and fintech startups to bring instant bill payments, mobile wallet integration, and real-time international remittances to our customers.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b3.png?updatedAt=1754995938415",
    stats: [
      { label: "Active Partnerships", value: "10+" },
      { label: "Instant Transactions", value: "1M+" },
    ],
  },
  {
    title: "Fastest Loan Approvals in the Country",
    description:
      "Achieved a record for processing loan applications in under 10 minutes with our AI-powered risk assessment system. Also recorded the highest number of account openings in a single month — 50,000 new accounts.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b4.png?updatedAt=1754995986119",
    stats: [
      { label: "Accounts in 30 Days", value: "50K" },
      { label: "Loan Approval Time", value: "<10 min" },
    ],
  },
  {
    title: "Pioneering AI in Banking Security",
    description:
      "Introduced AI-based fraud detection that proactively blocks suspicious transactions, and launched instant fund transfer between accounts in real time.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b5.png?updatedAt=1754996085350",
    stats: [
      { label: "Fraud Detection Accuracy", value: "99.9%" },
      { label: "Fund Transfer Speed", value: "<2 sec" },
    ],
  },
  {
    title: "Empowering Communities Through CSR",
    description:
      "Our corporate social responsibility programs impacted 500,000+ people in rural and urban areas through education, health, and entrepreneurship initiatives.",
    image: "https://ik.imagekit.io/mm5y9xdkp/b6.png?updatedAt=1754996130109",
    stats: [
      { label: "People Helped", value: "500K+" },
      { label: "Funds Invested", value: "$2M" },
    ],
  },
];

const Blog = () => {
    return (
        <div className='pb-8'>
           <div className="space-y-10">
      {achievements.map((item, index) => (
        <div
          key={index}
          className={`hero bg-base-200 py-10 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-bold text-primary">{item.title}</h1>
              <p className="py-6">{item.description}</p>
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                {item.stats.map((stat, sIndex) => (
                  <div className="stat" key={sIndex}>
                    <div className="stat-title">{stat.label}</div>
                    <div className="stat-value text-secondary">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default Blog;