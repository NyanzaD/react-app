import SectionLayout from "../components/SectionLayout";

function Programs() {
  const programsData = [
    {
      id: "education",
      title: "Education",
      description:
        "Empowering children through education, giving them the tools they need for a brighter future.",
      image: require("../assets/images/hero-image.jpg"),
      reverse: false,
    },
    {
      id: "feeding",
      title: "Feeding",
      description:
        "Providing nutritious meals to those in need, ensuring no child goes hungry.",
      image: require("../assets/images/hero-image.jpg"),
      reverse: true,
    },
    {
      id: "hiv-counseling",
      title: "HIV Counseling",
      description:
        "Offering compassionate care and guidance to children and families affected by HIV.",
      image: require("../assets/images/hero-image.jpg"),
      reverse: false,
    },
    {
      id: "mentorship",
      title: "Mentorship",
      description:
        "Guiding children toward success through mentorship and life skills.",
      image: require("../assets/images/hero-image.jpg"),
      reverse: true,
    },
  ];

  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Programs</h2>
      <SectionLayout data={programsData} />
    </div>
  );
}

export default Programs;
