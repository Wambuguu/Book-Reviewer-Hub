import React from "react";
import Footer from "./Footer";

const About = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/textbooks-lying-near-bookcase_23-2147845949.jpg?t=st=1714996178~exp=1714999778~hmac=25e4163d13a4b068fb76799e46801d33c05657737b12bf2949adb1cac3bb8a0e&w=900";

  return (
    <div
      className="min-h-screen flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-white max-w-lg mx-auto p-4 bg-black bg-opacity-70 rounded-lg">
            About Us
          </h1>
        </div>
        <div className="max-w-3xl p-6 bg-black bg-opacity-70 text-white rounded-lg shadow-lg">
          <p className="text-lg font-semibold leading-relaxed">
            Book Reviewer Hub is a comprehensive platform designed for book
            enthusiasts to discover and review their favorite reads with the use
            of a user-friendly interface and robust search functionalities.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            At BookReviewerHub, we're passionate about books and the
            transformative power of literature. Our platform was born out of a
            love for reading and a desire to create a vibrant community where
            book enthusiasts can come together to discover, discuss, and
            celebrate the written word.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            <span className="font-semibold">Our Mission:</span> Our mission is
            simple: to connect readers, authors, and reviewers in a dynamic
            online hub where they can explore, share, and engage with books in
            meaningful ways. We believe that books have the power to educate,
            inspire, and unite people from all walks of life, and we're
            committed to fostering a welcoming space where this magic can
            thrive.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
