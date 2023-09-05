import React, { useState, useEffect } from "react";
import Axios from "axios";
import CustomNavbar from "../Components/Navbar";
import Footer from "../Components/footer";

const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [addedBooks, setAddedBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("None");
    const [filteredGenreBooks, setFilteredGenreBooks] = useState([]);

    const fetchAddedBooks = async () => {
        try {
            // Fetch the list of added books from the backend using Axios
            const response = await Axios.get("http://localhost:3500/api2/book/dis");
            if (response.status === 200) {
                const data = response.data.data; // Assuming your backend returns data in { data: [...] } format
                setAddedBooks(data);
            }
        } catch (error) {
            // Handle errors
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        // Fetch added books from the backend when the component mounts
        fetchAddedBooks();
    }, []);

    useEffect(() => {
        // Filter books after fetching data
        setFilteredBooks(addedBooks);

        if (selectedGenre === "None") {
            setFilteredGenreBooks(addedBooks);
        } else {
            setFilteredGenreBooks(addedBooks.filter((book) => book.Genre === selectedGenre));
        }
    }, [selectedGenre, addedBooks]); // Include addedBooks in the dependency array

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setShowResults(false);
        } else {
            const filtered = addedBooks.filter(
                (book) =>
                    book.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.Author.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="container mt-5 mb-4">
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
                                    <option value="Mystery">Mystery</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Romance">Romance</option>
                                    <option value="Fantasy">Fantasy</option>
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
                                <div className="card book-card">
                                    <img src={book.Image} alt={`Cover of ${book.Name}`} className="card-img-top"  style={{height:"250px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{book.Name}</h5>
                                        <p className="card-text">Author: {book.Author}</p>
                                        <p className="card-text">Genre: {book.Genre}</p>
                                        <p className="card-text">Publication Date: {book.Public}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Books;