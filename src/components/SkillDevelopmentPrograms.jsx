const InteractivePrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Online Psychotherapy",
      description:
        "The bedrock of personal growth lies in a chance to enter into a dialogue with a kind, insightful, and highly experienced psychotherapist.",
      color: "bg-yellow-200",
      shape: (
        <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto"></div>
      ),
    },
    {
      id: 2,
      title: "Retreats",
      description:
        "A series of retreats designed to help you heal from emotional challenges in an atmosphere of friendship, learning, and discovery.",
      color: "bg-teal-200",
      shape: (
        <div className="w-20 h-20 mx-auto bg-teal-400 clip-triangle"></div>
      ),
    },
    {
      id: 3,
      title: "Group Therapy",
      description:
        "Weekly sessions to connect with other participants in the presence of a therapist-moderator to share and grow.",
      color: "bg-pink-200",
      shape: (
        <div className="w-20 h-20 mx-auto bg-pink-400 grid grid-cols-2 gap-1">
          <div className="w-full h-full bg-pink-300"></div>
          <div className="w-full h-full bg-pink-400"></div>
          <div className="w-full h-full bg-pink-400"></div>
          <div className="w-full h-full bg-pink-300"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8 lg:mt-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Therapy at The Career Advisory
      </h1>
      <p className="text-sm md:text-lg text-center text-gray-600 mb-12">
        Therapy has a proven ability to improve mood, restore clarity, and usher
        in calm. Our team of skilled therapists is here to help with issues
        including anxiety, relationships, and working life.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className={`p-6 rounded-none shadow-md ${program.color} text-center`}
          >
            {program.shape}
            <h2 className="text-md md:text-xl font-semibold mt-6">{program.title}</h2>
            <p className="text-sm md:text-base text-gray-700 mt-4">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractivePrograms;
