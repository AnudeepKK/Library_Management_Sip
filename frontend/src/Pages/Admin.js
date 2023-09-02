import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from '../Components/Navbar';

function Admin() {
    const [option, setOption] = useState("add");
    const [searchTerm, setSearchTerm] = useState("");
    const [addedBooks, setAddedBooks] = useState([]);
    const [foundBooks, setFoundBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        Image: "",
        Name: "",
        Author: "",
        Genre: "",
        Public: "",
    });
    const [updateData, setUpdateData] = useState({
        name: "",
        newData: {
            Image: "",
            Name: "",
            Author: "",
            Genre: "",
            Public: "",
        },
    });
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        // Fetch added books from the backend when the component mounts
        fetchAddedBooks();
    }, []);

    const handleOptionChange = (selectedOption) => {
        setOption(selectedOption);
        setSearchTerm("");
        setFoundBooks([]);
    };

    const handleSearch = () => {
        if (option === "delete" || option === "update") {
            const filtered = addedBooks.filter(
                (book) =>
                    book.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.Author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFoundBooks(filtered);
        }
    };

    // const handleDeleteBook = async (book) => {
    //     try {
    //         // Send a DELETE request to the backend to delete the book using Axios
    //         await Axios.delete(`http://localhost:3500/api2/book/del`, { data: { Name: book.Name } });

    //         // Remove the book from the local state
    //         const updatedBooks = addedBooks.filter((b) => b.Name !== book.Name);
    //         setAddedBooks(updatedBooks);
    //         setFoundBooks([]);
    //     } catch (error) {
    //         // Handle errors
    //         console.error("Error deleting book:", error);
    //     }
    // };
    const handleDeleteBook = async (book) => {
        try {
            // Send a DELETE request to the backend to delete the book using Axios
            await Axios.delete(`http://localhost:3500/api2/book/del`, { data: { name: book.Name } });
    
            // Remove the book from the local state
            const updatedBooks = addedBooks.filter((b) => b.Name !== book.Name);
            setAddedBooks(updatedBooks);
            setFoundBooks([]);
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with a non-2xx status code
                console.error("Error deleting book:", error.response.data);
            } else if (error.request) {
                // The request was made, but no response was received
                console.error("No response received. Network error:", error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error("Error setting up the request:", error.message);
            }
        }
    };
    

    const handleAddBook = async (event) => {
        event.preventDefault();

        try {
            // Send a POST request to the backend to add a new book using Axios
            const response = await Axios.post("http://localhost:3500/api2/book/add", newBook);
            console.log(response);
            if (response.status === 201) {
                // Add the new book to the local state
                const data = response.data;
                setAddedBooks([...addedBooks, data]);
                setNewBook({
                    Image: "",
                    Name: "",
                    Author: "",
                    Genre: "",
                    Public: "",
                });
            }
        } catch (error) {
            // Handle errors
            console.error("Error adding book:", error);
        }
    };

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

    const handleUpdateBook = async () => {
        try {
            // Send a POST request to the backend to update the book using Axios
            const response = await Axios.post("http://localhost:3500/api2/book/update", updateData);

            if (response.status === 200) {
                // Update the book in the local state
                const updatedBooks = addedBooks.map((b) => {
                    if (b.Name === updateData.name) {
                        return { ...b, ...updateData.newData };
                    }
                    return b;
                });

                setAddedBooks(updatedBooks);
                setFoundBooks([]);
                setUpdateData({
                    name: "",
                    newData: {
                        Image: "",
                        Name: "",
                        Author: "",
                        Genre: "",
                        Public: "",
                    },
                });
            }
        } catch (error) {
            // Handle errors
            console.error("Error updating book:", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
            {loading ? ( // Render a loading spinner or message while loading is true.
                    <p>Loading...</p>
                ) : (
                <div className="border border-5 p-4 bg-warning-subtle">
                    <h1 className="mb-4  display-4 fw-bold text-primary">
                        Add, Delete, or Update Book
                    </h1>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="card  ">
                                <div className="card-header">Options</div>
                                <div className="card-body text-center">
                                    <div
                                        className="btn-group text-center"
                                        role="group"
                                        aria-label="Options"
                                    >
                                        <button
                                            className={`btn ${
                                                option === "add"
                                                    ? "btn-success"
                                                    : "btn-danger"
                                            }`}
                                            onClick={() => handleOptionChange("add")}
                                        >
                                            Add Book
                                        </button>
                                        <button
                                            className={`btn ${
                                                option === "delete"
                                                    ? "btn-success"
                                                    : "btn-danger"
                                            }`}
                                            onClick={() => handleOptionChange("delete")}
                                        >
                                            Delete Book
                                        </button>
                                        <button
                                            className={`btn ${
                                                option === "update"
                                                    ? "btn-success"
                                                    : "btn-danger"
                                            }`}
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
                                                        <label htmlFor="imageLink" className="form-label">
                                                            Image Link
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="imageLink"
                                                            required
                                                            value={newBook.Image}
                                                            name="newBook"
                                                            onChange={(e) =>
                                                                setNewBook({ ...newBook, Image: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">
                                                            Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="title"
                                                            required
                                                            value={newBook.Name}
                                                            name="newBook"
                                                            onChange={(e) =>
                                                                setNewBook({ ...newBook, Name: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="author" className="form-label">
                                                            Author
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="author"
                                                            required
                                                            value={newBook.Author}
                                                            name="newBook"
                                                            onChange={(e) =>
                                                                setNewBook({ ...newBook, Author: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="genre" className="form-label">
                                                            Genre
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="genre"
                                                            required
                                                            value={newBook.Genre}
                                                            name="newBook"
                                                            onChange={(e) =>
                                                                setNewBook({ ...newBook, Genre: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="publicationDate" className="form-label">
                                                            Publication Date
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="publicationDate"
                                                            required
                                                            value={newBook.Public}
                                                            name="newBook"
                                                            onChange={(e) =>
                                                                setNewBook({ ...newBook, Public: e.target.value })
                                                            }
                                                        />
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
                                                    name="name"
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                                <button
                                                    className="btn btn-outline-primary mb-3"
                                                    onClick={handleSearch}
                                                >
                                                    Search
                                                </button>
                                                <ul>
                                                    {foundBooks.map((book, index) => (
                                                        <li key={index}>
                                                            <strong>Title:</strong> {book.Name}, <strong>Author:</strong>{" "}
                                                            {book.Author},{" "}
                                                            <strong>Genre:</strong> {book.Genre},{" "}
                                                            <strong>Publication Date:</strong>{" "}
                                                            {book.Public}{" "}
                                                            <button
                                                                className="btn btn-danger btn-sm ml-2"
                                                                onClick={() => handleDeleteBook(book)}
                                                            >
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
                                                <button
                                                    className="btn btn-outline-primary mb-3"
                                                    onClick={handleSearch}
                                                >
                                                    Search
                                                </button>
                                                <ul>
                                                    {foundBooks.map((book, index) => (
                                                        <li key={index}>
                                                            <strong>Title:</strong> {book.Name}, <strong>Author:</strong>{" "}
                                                            {book.Author},{" "}
                                                            <strong>Genre:</strong> {book.Genre},{" "}
                                                            <strong>Publication Date:</strong>{" "}
                                                            {book.Public}{" "}
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor={`update-title-${index}`}
                                                                    className="form-label"
                                                                >
                                                                    New Title
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id={`update-title-${index}`}
                                                                    placeholder="New Title"
                                                                    value={updateData.newData.Name}
                                                                    onChange={(e) =>
                                                                        setUpdateData({
                                                                            ...updateData,
                                                                            newData: {
                                                                                ...updateData.newData,
                                                                                Name: e.target.value,
                                                                            },
                                                                        })
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label
                                                                    htmlFor={`update-author-${index}`}
                                                                    className="form-label"
                                                                >
                                                                    New Author
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id={`update-author-${index}`}
                                                                    placeholder="New Author"
                                                                    value={updateData.newData.Author}
                                                                    onChange={(e) =>
                                                                        setUpdateData({
                                                                            ...updateData,
                                                                            newData: {
                                                                                ...updateData.newData,
                                                                                Author: e.target.value,
                                                                            },
                                                                        })
                                                                    }
                                                                />
                                                            </div>
                                                            <button
                                                                className="btn btn-success btn-sm"
                                                                onClick={() =>
                                                                    handleUpdateBook(
                                                                        book.Name,
                                                                        updateData.newData.Name,
                                                                        updateData.newData.Author
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
                                                        <img
                                                            src={book.Image}
                                                            alt={`Cover of ${book.Name}`}
                                                            className="card-img-top"
                                                        />
                                                        <div className="card-body">
                                                            <h5 className="card-title">{book.Name}</h5>
                                                            <p className="card-text">
                                                                <strong>Author:</strong> {book.Author}
                                                            </p>
                                                            <p className="card-text">
                                                                <strong>Genre:</strong> {book.Genre}
                                                            </p>
                                                            <p className="card-text">
                                                                <strong>Publication Date:</strong> {book.Public}
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
                )}
            </div>
        </>
    );
}

export default Admin;
