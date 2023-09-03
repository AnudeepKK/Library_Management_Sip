const express = require("express");
const router = express.Router();

// const StudentController = require("../controllers/studentController");
// const FacultyController = require("../controllers/facultyController");
// const UserController = require("../controllers/unserController");




const BookController = require("../Controller/bookcontroller")

//user api
router.post("/book/add",BookController.addBook);
router.get("/book/dis",BookController.readBook);
router.put("/book/update",BookController.updateBook);
router.post("/book/del",BookController.deleteBook);
// router.delete('/api2/book/del', BookController.deleteBook);

// router.get('/users',(req,res)=>{
//     res.send('All users')
// })

// router.post("/students/create", StudentController.createStudent);
// // Faculty Routes
// router.post("/faculty/create", FacultyController.createFaculty);
// router.get("/faculty/read", FacultyController.readFaculty);
// router.put("/faculty/update/:id", FacultyController.updateFaculty);
// router.delete("/faculty/delete/:id", FacultyController.deleteFaculty);

module.exports = router;
