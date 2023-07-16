const { BookCreateController, getAllBookController, getSingleBookController, deleteBookController, updateBookController } = require("./book.controller");

const router = require("express").Router();


router.post("/create-book", BookCreateController);
router.get("/getAllBook", getAllBookController);
router.get("/getSingleBookController/:id", getSingleBookController);
router.delete("/deleteBook/:id", deleteBookController);
router.put("/updateBook", updateBookController);

module.exports = router;
