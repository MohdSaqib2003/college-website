var express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my@sql",
  database: 'college'
});

app.post("/alumni", (req, res) => {
  const name = req.body.name;
  const batch = req.body.batch;
  const contact = req.body.contact;
  const about = req.body.about;
  db.query(
    "INSERT INTO alumni(name,batch,contact,about) VALUES(?,?,?,?)",
    [name, batch, contact, about],
    (err, result) => {
      console.log(err);
    }
  )
})

app.post("/student", (req, res) => {
  const Enrollment_No = req.body.Enrollment_No;
  const ID_No = req.body.ID_No;
  db.query(
    "SELECT *FROM students WHERE Enroll_No = ? AND ID_No = ? ",
    [Enrollment_No,ID_No],
    (err, result) => {
      if(err){
        console.log(err);
        res.send({err:err});
      }
      if(result.length>0){
        console.log('successfully fetch');
        res.send(result);
      }else{
        console.log('Wrong ID');
        res.send({message:'false'})
      }
    }
  )
})

app.post("/suggestion", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  db.query(
    "INSERT INTO suggestion(name,email,message) VALUES(?,?,?)",
    [name,email,message],
    (err, result) => {
      console.log(err);
    }
  )
})

app.listen(8080, () => {
  console.log("server running");
});