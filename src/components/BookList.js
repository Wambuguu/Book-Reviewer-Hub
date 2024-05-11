import React, { useState, useEffect } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://books-api-iy0g.onrender.com/books"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleCardClick = (book) => {
    setSelectedBook(selectedBook === book ? null : book);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Book List</h1>
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books
          .filter((book) =>
            book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-md cursor-pointer transition-colors duration-300 ${
                selectedBook === book
                  ? "border-2 border-blue-500"
                  : "border border-gray-200"
              }`}
              onClick={() => handleCardClick(book)}
            >
              <div className="p-4">
                <img
                  src={book.bookImage}
                  alt={book.bookTitle}
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold">{book.bookTitle}</h3>
              </div>
        }  
        <div/> 
    </div>
  );
};
