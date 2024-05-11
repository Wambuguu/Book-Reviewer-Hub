import React, { useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/textbooks-lying-near-bookcase_23-2147845949.jpg?t=st=1714996178~exp=1714999778~hmac=25e4163d13a4b068fb76799e46801d33c05657737b12bf2949adb1cac3bb8a0e&w=900";

  const points = [
    {
      title: "Explore Diverse Reviews",
      description:
        "Browse through a diverse range of book reviews spanning various genres, from thrilling mysteries to heartwarming romances.",
    },
    {
      title: "Join Our Community",
      description:
        "Connect with fellow book enthusiasts, share your thoughts on your latest reads, and engage in lively discussions about all things literature.",
    },
    {
      title: "Become a Reviewer",
      description:
        "Join our community of reviewers and become a valued contributor. Share your honest opinions, recommend hidden gems, and connect with fellow readers from around the world.",
    },
    {
      title: "Stay Updated",
      description:
        "Stay informed about the latest literary trends, book releases, and author news with our regular updates and features.",
    },
    {
      title: "Start Your Literary Journey",
      description:
        "Start your literary journey with Book Reviewer Hub today and let the adventure begin. Whether you're looking for your next read or eager to share your love of books with others, our platform has everything you need to dive into the world of literature. Join us and embark on a journey of discovery, connection, and inspiration. Happy reading!",
    },
  ];

  const [currentPointIndex, setCurrentPointIndex] = useState(0);

  const handleNextPoint = () => {
    setCurrentPointIndex((prevIndex) =>
      prevIndex === points.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPoint = () => {
    setCurrentPointIndex((prevIndex) =>
      prevIndex === 0 ? points.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-grow flex flex-col justify-between">
        <div className="py-8 text-white text-center">
          <div className="max-w-lg mx-auto p-4 bg-black bg-opacity-70 rounded-lg">
            <h1 className="text-4xl font-bold">Book Reviewer Hub</h1>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="max-w-lg p-8 bg-black bg-opacity-70 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">{points[currentPointIndex].title}</h2>
            <p className="text-lg leading-relaxed">
              {points[currentPointIndex].description}
            </p>
          </div>
        </div>

        <div className="pb-8 flex justify-center">
          <button
            className="bg-white text-gray-900 rounded-full px-4 py-2 mr-4 focus:outline-none"
            onClick={handlePrevPoint}
          >
            Prev
          </button>
          <button
            className="bg-white text-gray-900 rounded-full px-4 py-2 focus:outline-none"
            onClick={handleNextPoint}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
