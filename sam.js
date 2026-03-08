const express = require("express"); 
const app = express(); 
app.use(express.json()); 
// Route 1 
app.get("/hello", (req, res) => { 
res.status(200).json({ message: "Hello World from Express!" }); 
}); 
// Route 2 (Dynamic) 
app.get("/greet/:name", (req, res) => { 
const name = req.params.name; 
res.status(200).json({ message: `Hello ${name}!` }); 
}); 
app.listen(3000, () => { 
console.log("Server running on http://localhost:3000"); 
}); 