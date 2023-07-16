const BookCollection = require("./book.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

const BookCreateController = async (req, res) => {
    
    try {
      const result = await BookCollection.create({...req.body, createdAt: new Date()});
      
      res.send({status: 200, message: 'Book Created Successfully'})
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };

  const getAllBookController = async (req, res) => {
    
    try {
      const result = await BookCollection.find({});
      data = result.sort((a, b) => (b.createdAt < a.createdAt ? -1 : 1));
      res.send(data)
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };
  
  const getSingleBookController = async (req, res) => {
    const {id} = req.params
   
    try {
      const result = await BookCollection.findOne({_id: new ObjectId(id)});
      
      res.send(result)
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };

  const deleteBookController = async (req, res) => {
    const {id} = req.params
   
    try {
      const result = await BookCollection.deleteOne({_id: new ObjectId(id)});
      
      res.send({status: 200, message: 'Book Is deleted'})
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  };

  const updateBookController = async (req, res) => {
    console.log('hiteeeed')
    const updateData = req.body
    const {_id, ...updateBook} = updateData
    console.log('Update boook', updateBook)
    try {
      const result = await BookCollection.updateOne({_id: new ObjectId(_id)},{ $set:{
        title: updateBook.title,
        author: updateBook.author,
        genre: updateBook.genre,
        publicationDate: updateBook.publicationDate
      } } );
      
      res.send({status: 200, message: 'Book Is deleted'})
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error);
    }
  };

  module.exports = {
    BookCreateController,
    getAllBookController,
    getSingleBookController,
    deleteBookController,
    updateBookController
  };