const express = require("express");
const app = express();
const { Users } = require("./users"); 
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    if (Users && Users.length > 0) {
      const {q}=req.query;

      const keys=['first_name',"last_name","email"];

      const search=(data)=>{
        return data.filter((item)=>
        keys.some((key)=> item[key].toLowerCase().includes(q))
        );
      };

      res.json(search(Users));
    } else {
      res.json({ error: "Users array is empty or undefined" });
    }
  });
  

app.listen(5000, () => console.log("API is Working!"));
