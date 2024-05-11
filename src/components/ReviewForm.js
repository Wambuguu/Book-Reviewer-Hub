import React, { useState } from "react";
import Footer from "./Footer";

function ReviewForm() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookReview, setBookReview] = useState("");
  const [bookRating, setBookRating] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  function fetchReviews() {
    fetch("https://books-api-iy0g.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error("Error fetching reviews:", error));

      fetchReviews();
      []);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bookTitle || !bookAuthor || !bookReview || !bookRating) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (isNaN(bookRating) || bookRating < 1 || bookRating > 5) {
      setErrorMessage("Rating must be a number between 1 and 5.");
      return;
    }

    fetch("https://books-api-iy0g.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookTitle,
        bookAuthor,
        bookReview,
        bookRating: parseInt(bookRating),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add review.");
        }
        return response.json();
      })
      .then((data) => {
        setReviews([...reviews, data]);
        setBookTitle("");
        setBookAuthor("");
        setBookReview("");
        setBookRating("");
        setSuccessMessage("Review added successfully.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        setErrorMessage("Failed to add review. Please try again.");
        setSuccessMessage("");
      });
  }

  function handleDelete(id) {
    fetch(`https://books-api-iy0g.onrender.com/reviews/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete review.");
        }
        const updatedReviews = reviews.filter((review) => review.id !== id);
        setReviews(updatedReviews);
        setSuccessMessage("Review deleted successfully.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
        setErrorMessage("Failed to delete review. Please try again.");
        setSuccessMessage("");
      });
  }
  return (
    <>
      <div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Write a Review
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
            {successMessage && (
              <div className="text-green-600">{successMessage}</div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                type="text"
                name="title"
                placeholder="Title"
                required
                className="input w-full p-2"
              />
              <input
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
                type="text"
                name="author"
                placeholder="Author"
                required
                className="input w-full p-2"
              />
              <input
                value={bookReview}
                onChange={(e) => setBookReview(e.target.value)}
                type="text"
                name="review"
                placeholder="Review"
                required
                className="input w-full p-2"
              />
              <input
                value={bookRating}
                onChange={(e) => setBookRating(e.target.value)}
                type="number"
                name="rating"
                placeholder="Rating"
                min="1"
                max="5"
                required
                className="input w-full p-2"
              />
            </div>
            <button
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block transition duration-300 ease-in-out"
              type="submit"
            >
              Submit Review
            </button>
          </form>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Submitted Reviews
          </h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">Author</th>
                <th className="border border-gray-400 px-4 py-2">Review</th>
                <th className="border border-gray-400 px-4 py-2">Rating</th>
                <th className="border-b border-gray-400 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {review.bookTitle}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {review.bookAuthor}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {review.bookReview}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {review.bookRating}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="text-red-600 font-bold"
                    >
                      {" "}
                      X{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReviewForm;
