import React from "react";

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
      <div>
        <div>
          <h1>
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};
