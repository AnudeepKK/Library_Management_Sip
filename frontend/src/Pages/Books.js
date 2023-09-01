import React, { useState, useEffect } from "react";
import Book1 from "../Images/Book1.png"
import Book2 from "../Images/Book2.png"
import Book3 from "../Images/Book3.png"
import Book4 from "../Images/Book4.png"
import Book5 from "../Images/Book5.png"
import CustomNavbar from "../Components/Navbar";

const exampleBooks = [
    {
        _id: "1",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        publicationDate: "July 11, 1960",
        coverImage: Book1
    },
    {
        _id: "2",
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        publicationDate: "June 8, 1949",
        coverImage: Book2
    },
    {
        _id: "3",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        publicationDate: "January 28, 1813",
        coverImage: Book3
    },
    {
        _id: "4",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        publicationDate: "April 10, 1925",
        coverImage: Book4
    },
    {
        _id: "5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        publicationDate: "September 21, 1937",
        coverImage: Book5
    }
];

const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(exampleBooks);
    const [showResults, setShowResults] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("None");
    const [filteredGenreBooks, setFilteredGenreBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(exampleBooks);
        if (selectedGenre === "None") {
            setFilteredGenreBooks(exampleBooks);
        } else {
            setFilteredGenreBooks(exampleBooks.filter((book) => book.genre === selectedGenre));
        }
    }, [selectedGenre]);

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setShowResults(false);
        } else {
            const filtered = exampleBooks.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBooks(filtered);
            setShowResults(true);
        }
    };

    const handleBack = () => {
        setSearchTerm("");
        setSelectedGenre("None");
        setShowResults(false);
    };

    return (
            <>
            <CustomNavbar/>
        <div className="container mt-5">
            <div className="border border-5 p-4 bg-warning-subtle">
                <div className="mb-4 text-center border border-5 border-black">
                    <h1>BOOK SHELF</h1>
                </div>
                <div className="border border-4 p-3 bg-primary-subtle">
                    <h2 className="mb-4 text-center">Find Available Books</h2>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6  d-flex justify-content-center align-items-center ">
                            <div className="input-group">
                                <input
                                    id="Search-bar"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by title or author"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <button className="btn btn-outline-secondary bg-dark text-info" type="button" onClick={handleSearch}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="genreFilter" className="form-label">
                                    Filter by Genre:
                                </label>
                                <select
                                    id="genreFilter"
                                    className="form-select"
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                >
                                    <option value="None">None</option>
                                    <option vaue="Fiction">Fiction</option>
                                    <option vaue="Dystopian">Dystopian</option>
                                    <option vaue="Fantasy">Fantasy</option>
                                    <option vaue="Romance">Romance</option>
                                    {/* Add more genre options here on need*/}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-5 mt-3 p-5 bg-primary-subtle">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            {showResults && (
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
                                    <h6 className="mb-0 me-3 border border-3 border-info text-info p-2 rounded bg-dark">Results</h6>
                                    <button className="btn btn-outline-secondary ml-3 text-info border border-3 border-info bg-black" onClick={handleBack}>
                                        Back
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        {(showResults ? filteredBooks : filteredGenreBooks).map((book) => (
                            <div key={book._id} className="col-md-3 mb-4">
                                <div className="card">
                                    <img src={book.coverImage} alt={`Cover of ${book.title}`} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <p className="card-text">Author: {book.author}</p>
                                        <p className="card-text">Genre: {book.genre}</p>
                                        <p className="card-text">Publication Date: {book.publicationDate}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Books;