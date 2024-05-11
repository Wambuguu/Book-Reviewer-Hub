import React, { useState, useEffect } from "react";

function ReviewForm() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookReview, setBookReview] = useState("");
    const [bookRating, setBookRating] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [reviews, setReviews] = useState([]);
}