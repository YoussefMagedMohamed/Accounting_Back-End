import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get('/items', (req,res)=> {
    res.send([
        {
          name: "item1",
          desc: "good",
          purchaseDesc: "",
          rate: "perfect",
          purchaseRate: "",
          usageUnit: "",
        },
        {
          name: "item2",
          desc: "bad",
          purchaseDesc: "",
          rate: "bad",
          purchaseRate: "",
          usageUnit: "",
        },
        {
          name: "item3",
          desc: "good",
          purchaseDesc: "",
          rate: "good",
          purchaseRate: "",
          usageUnit: "",
        },
        {
          name: "item4",
          desc: "normal",
          purchaseDesc: "",
          rate: "perfect",
          purchaseRate: "",
          usageUnit: "",
        },
      ])
})

app.post('/items', (req, res)=> {
    
})

app.listen(3000, () => console.log("Listening on port 3000..."));
