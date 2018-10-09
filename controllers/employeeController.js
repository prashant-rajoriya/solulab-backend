const express = require('express');
const router = express.Router();
const Employees = require('../models/employees');
var multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.get('/:id', (req, res, next) => {
  Employees.findOne({_id : req.params.id})
    .then(data => res.send(data))
    .catch(err => res.status(400).send({"error" : "Not found the particular employee"}))
})

router.get('/', (req, res, next) => {
  Employees.find({})
    .then(data => res.send(data))
    .catch(err => res.status(400).send({"error" : "Can't find any data "})) 
})


router.post('/', (req, res, next) => {
  console.log(req.body)
  let emp = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    email : req.body.email,
    phone : req.body.phone,
    employeCode : Number(req.body.employeCode),
    img : req.body.img
  };
  Employees.create(emp)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', (req, res, next) => {
  Employees.findByIdAndUpdate(req.params.id, req.body.employee)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err))
})

router.delete('/:id', (req, res, next) => {
  Employees.findByIdAndRemove(req.params.id)
  .then(data => res.send(data))
  .catch(err => res.status(400).send(err))
})

module.exports = router;