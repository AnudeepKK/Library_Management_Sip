import React, { useState } from "react";

function Admin() {
    const [option, setOption] = useState("add");
    const [searchTerm, setSearchTerm] = useState("");
    const [addedBooks, setAddedBooks] = useState([]);
    const [foundBooks, setFoundBooks] = useState([]);

    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption);
        setSearchTerm("");
        setFoundBooks([]);
    };

    const handleAddBook = (event) => {
        event.preventDefault();
        const newBook = {
            title: event.target.title.value,
            author: event.target.author.value,
            genre: event.target.genre.value,
            publicationDate: event.target.publicationDate.value,
            imageLink: event.target.imageLink.value, // Add this line
        };
        setAddedBooks([...addedBooks, newBook]);
        event.target.reset();
    };


    const handleSearch = () => {
        if (option === "delete" || option === "update") {
            const filtered = addedBooks.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFoundBooks(filtered);
        }
    };

    const handleDeleteBook = (book) => {
        const updatedBooks = addedBooks.filter((b) => b !== book);
        setAddedBooks(updatedBooks);
        setFoundBooks([]);
    };

    const handleUpdateBook = (index, newTitle, newAuthor) => {
        const updatedBooks = [...addedBooks];
        updatedBooks[index].title = newTitle;
        updatedBooks[index].author = newAuthor;
        setAddedBooks(updatedBooks);
        setFoundBooks([]);
    };

    return (
        <div className="container mt-5">
            <div className="border border-5 p-4 bg-warning-subtle">
                <h1 className="mb-4  display-4 fw-bold text-primary">
                    Add, Delete, or Update Book
                </h1>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card position-fixed ">
                            <div className="card-header">Options</div>
                            <div className="card-body text-center">
                                <div className="btn-group text-center" role="group" aria-label="Options">
                                    <button
                                        className={`btn ${option === "add" ? "btn-success" : "btn-danger"}`}
                                        onClick={() => handleOptionChange("add")}
                                    >
                                        Add Book
                                    </button>
                                    <button
                                        className={`btn ${option === "delete" ? "btn-success" : "btn-danger"}`}
                                        onClick={() => handleOptionChange("delete")}
                                    >
                                        Delete Book
                                    </button>
                                    <button
                                        className={`btn ${option === "update" ? "btn-success" : "btn-danger"}`}
                                        onClick={() => handleOptionChange("update")}
                                    >
                                        Update Book
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <img
                                        src="https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Book Options"
                                        className="img-fluid mt-3"
                                        style={{ width: "100%", height: "50vh" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="border border-5 p-4 bg-warning">
                            <div className="card">
                                <div className="card-header">
                                    {option === "add" && "Add Book"}
                                    {option === "delete" && "Delete Book"}
                                    {option === "update" && "Update Book"}
                                </div>
                                <div className="card-body bg-dark text-white">
                                    {/* ... Form for Add, Delete, and Update ... */}
                                    {option === "add" && (
                                        <div>
                                            <h2>Add Book</h2>
                                            <form onSubmit={handleAddBook}>
                                                <div className="mb-3">
                                                    <div className="mb-3">
                                                        <label htmlFor="imageLink" className="form-label">
                                                            Image Link
                                                        </label>
                                                        <input type="text" className="form-control" id="imageLink" required />
                                                    </div>

                                                    <label htmlFor="title" className="form-label">
                                                        Title
                                                    </label>
                                                    <input type="text" className="form-control" id="title" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="author" className="form-label">
                                                        Author
                                                    </label>
                                                    <input type="text" className="form-control" id="author" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="genre" className="form-label">
                                                        Genre
                                                    </label>
                                                    <input type="text" className="form-control" id="genre" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="publicationDate" className="form-label">
                                                        Publication Date
                                                    </label>
                                                    <input type="text" className="form-control" id="publicationDate" required />
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    Add Book
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                    {option === "delete" && (
                                        <div>
                                            <h2>Delete Book</h2>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Search by title or author"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <button className="btn btn-outline-primary mb-3" onClick={handleSearch}>
                                                Search
                                            </button>
                                            <ul>
                                                {foundBooks.map((book, index) => (
                                                    <li key={index}>
                                                        <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author},{" "}
                                                        <strong>Genre:</strong> {book.genre}, <strong>Publication Date:</strong>{" "}
                                                        {book.publicationDate}{" "}
                                                        <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDeleteBook(book)}>
                                                            Delete
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {option === "update" && (
                                        <div>
                                            <h2>Update Book</h2>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                placeholder="Search by title or author"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <button className="btn btn-outline-primary mb-3" onClick={handleSearch}>
                                                Search
                                            </button>
                                            <ul>
                                                {foundBooks.map((book, index) => (
                                                    <li key={index}>
                                                        <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author},{" "}
                                                        <strong>Genre:</strong> {book.genre}, <strong>Publication Date:</strong>{" "}
                                                        {book.publicationDate}{" "}
                                                        <div className="mb-3">
                                                            <label htmlFor={`update-title-${index}`} className="form-label">
                                                                New Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id={`update-title-${index}`}
                                                                placeholder="New Title"
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor={`update-author-${index}`} className="form-label">
                                                                New Author
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id={`update-author-${index}`}
                                                                placeholder="New Author"
                                                            />
                                                        </div>
                                                        <button
                                                            className="btn btn-success btn-sm"
                                                            onClick={() =>
                                                                handleUpdateBook(
                                                                    index,
                                                                    document.getElementById(`update-title-${index}`).value,
                                                                    document.getElementById(`update-author-${index}`).value
                                                                )
                                                            }
                                                        >
                                                            Update
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="border border-5 mt-3 p-4 bg-dark">
                            <div className="card mt-4">
                                <div className="card-body bg-warning">
                                    <h2>Added Books</h2>
                                    <div className="row">
                                        {addedBooks.map((book, index) => (
                                            <div key={index} className="col-md-6 mb-4">
                                                <div className="card">
                                                    <img src={book.imageLink} alt={`Cover of ${book.title}`} className="card-img-top" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{book.title}</h5>
                                                        <p className="card-text">
                                                            <strong>Author:</strong> {book.author}
                                                        </p>
                                                        <p className="card-text">
                                                            <strong>Genre:</strong> {book.genre}
                                                        </p>
                                                        <p className="card-text">
                                                            <strong>Publication Date:</strong> {book.publicationDate}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
