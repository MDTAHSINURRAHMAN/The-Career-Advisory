const CareerRoadmaps = () => {
  const roadmaps = [
    {
      id: 1,
      title: "Software Development",
      steps: [
        "Learn Programming Basics",
        "Master Data Structures",
        "Build Projects",
        "Get Internships",
        "Land Your Dream Job",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing",
      steps: [
        "Understand SEO",
        "Learn Social Media Marketing",
        "Run Paid Ads",
        "Analyze Metrics",
        "Start Freelancing",
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      steps: [
        "Learn Design Principles",
        "Master Figma",
        "Create Portfolios",
        "Collaborate with Teams",
        "Work as a Designer",
      ],
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Career Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roadmaps.map((roadmap) => (
          <div key={roadmap.id} className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {roadmap.title}
            </h2>
            <ul className="list-disc ml-4 text-gray-600">
              {roadmap.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmaps;
