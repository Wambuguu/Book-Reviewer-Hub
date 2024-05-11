import React, { useState, useEffect } from "react";

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
}
