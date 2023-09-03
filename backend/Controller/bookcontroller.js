const BookModel = require("../models/bookmodel");
const { isvalid, isvalidBody } = require("./valid");

const addBook = async (req, res) => {
    try {
        let data = req.body;
        let { Image, Name, Author, Genre, Public } = req.body;
        if (!isvalidBody(data)) {
            return res.status(400).send({ msg: "No data added" })
        }
        if (!isvalid(Image)) {
            return res.status(400).send({ msg: "Image link is required" })
        }
        if (!isvalid(Name)) {
            return res.status(400).send({ msg: "Title of book is required" })
        }
        if (!isvalid(Author)) {
            return res.status(400).send({ msg: "Enter the author of book" })
        }
        if (!isvalid(Genre)) {
            return res.status(400).send({ msg: "Genre is required" })
        }
        if (!isvalid(Public)) {
            return res.status(400).send({ msg: "Publication date is required" })
        }
        let addData = await BookModel.create(data)
        return res.status(201)
            .send({
                status: true,
                msg: "Student Data Create Sucessfully",
                data: addData,
            });

    } catch (error) {
        return res.status(500).send(error);
    }
};

const readBook = async (req, res) => {
    try {
        const bookData = await BookModel.find();
        return res.status(200).send({
            status: true,
            data: bookData,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const updateBook = async (req, res) => {
    try {
        const { name, newData } = req.body;

        if (!name || !newData) {
            return res.status(400).send({ msg: "Invalid input" });
        }

        const updatedBook = await BookModel.findOneAndUpdate({ Name: name }, newData, {
            new: true,
        });

        if (!updatedBook) {
            return res.status(404).send({ msg: "Book not found" });
        }

        return res.status(200).send({
            status: true,
            msg: "Book data updated successfully",
            data: updatedBook,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteBook = async (req, res) => {
    try {
        const { Name } = req.body;

        if (!Name) {
            return res.status(400).send({ msg: "Invalid input" });
        }

        const deletedBook = await BookModel.findOneAndDelete({ Name: Name });

        if (!deletedBook) {
            return res.status(404).send({ msg: "Book not found" });
        }

        return res.status(200).send({
            status: true,
            msg: "Book deleted successfully",
            data: deletedBook,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = { addBook, readBook, updateBook, deleteBook };
