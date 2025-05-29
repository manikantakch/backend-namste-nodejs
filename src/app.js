const express = require("express");
const {authAdmin} = require('./middlewares/adminAuth');

const server = express();
server.use(express.json());



// server.get('/getUserData',(req,res) => {
//     try {
// throw new Error("getting error");
//     }
//     catch(error) {
// res.status(500).send({error:error.message})
//     }
// })


// server.use('/',(error,req,res,next) => {
//     if(error) {
//         console.log("error:",error)
//         res.status(500).send("Some thing Went wrong")
//     }
// })


// server.use('/dashboard',authAdmin);

// function checkAuth(req, res, next) {
//   const authorization = req.headers.authorization;

//   console.log("request ",req.headers)

//   if (authorization === "secret") {
//     next();
//   } else {
//     res.status(401).send("Un-Authorization");
//   }
// }

// server.get("/home", (req, res) => {
//   res.send("This request has been made successfully!!!");
// });

// server.get("/dashboard", (req, res, next) => {
//   res.send("📊 Welcome to the Dashboard (authorized)");
// });
// server.get("/dashboard/getAllData", (req, res, next) => {
//     res.send("📊 Welcome to the dashbord");
//   });

//   server.get("/dashboard/saveData", (req, res, next) => {
//     res.send("dgfhgjhkjy iygkbn");
//   });
  

// server.use('/',(req,res,next) => {
//     next();
// })

// server.get('/user',(req,res,next) => {
//     // res.send("welocome");
//     next();
// },
// (req,res,next) => {
//     // res.send("welocome");
//     next();
// },
// )

// server.get('/user',(req,res,next) => {
//     console.log("manikanta")
//     res.send("welocome 1");
// },

// (req,res,next) => {
//  console.log("mani")
// })

// server.get('/products',(req,res,next) => {
//     console.log("manikanta kumnar")
//     res.send("welocome 2");
// },

// (req,res,next) => {
//  console.log("mani")
// })

// server.use(
//   "/user",
//   (req, res, next) => {
//     // res.send({ firstname: "mani" });
//     next();
//   },
//   (req, res,next) => {
//     // res.send({ lastname: "chinna" });
//     next();
//   },
//   [(req, res,next) => {
//     // res.send({ lastname: "chinna" });
//     next();
//   },
//   (req, res) => {
//     res.send({ lastname: "chinna" });
//   }]
// );

// server.get('/user',(req,res,next) => {
//     next();
// })
// server.get('/user',(req,res) => {
//     res.send({firstname:"manikanta"})
// })

// server.get('/user/:userId/:name',(req,res) => {

//     console.log("request params",req.params)
//     res.send({firstname:"manikanta",lastname:"chinna"})
// })

// server.post('/user',(req,res) => {
//     console.log("req",req.body);
//     res.send("successfully!!")

// })

// server.get('/abc',(req,res) => {
//     console.log(req,"params")
//     res.send("sending abc")
// })

// server.use('/user',(req,res) => {
//     res.send("manikanta")
// })

// server.use("/test",(req,res) => {
//     res.send("test page")
// });

// server.use("/learn",(req,res) => {
//     res.send("learn page")
// });

// server.use("/library",(req,res) => {
//     res.send("library page")
// });
// server.use("/practice/2",(req,res) => {
//     res.send("practice page 2");
// });
// server.use("/practice",(req,res) => {
//     res.send("practice page");
// });

// server.use("/shedule",(req,res) => {
//     res.send("practice page");
// });
// server.use("/",(req,res) => {
//     res.send("Intial page")
// });

server.listen(8000, () => {
  console.log("connected server");
});
