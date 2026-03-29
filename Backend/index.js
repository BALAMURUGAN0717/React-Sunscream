const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello black")
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://sakthi:trisha@cluster0.vhlgmaf.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productcollection = client.db("Dot").collection("key")

      app.post("/uploadkey", async(req,res)=>{
      const data = req.body
      const result = await productcollection.insertOne(data)
      res.send(result)
    })

      app.get("/getkey", async(req,res)=>{
      const data = await productcollection.find()
      const result = await data.toArray()
      res.send(result)
    })

    app.get("/getkey/:id", async(req,res)=>{
      const data = req.params.id
      const filter = {_id: new ObjectId(data)}
      const result = await productcollection.findOne(filter)
      res.send(result)
    })

    app.delete("/deletekey/:id",async(req,res)=>{
      const data = req.params.id
      const filter ={_id: new ObjectId(data)}
      const result = await productcollection.deleteOne(filter)
      res.send(result)
    })

    app.patch('/updatekey/:id',async(req,res)=>{
      const data=req.params.id
      const filter ={_id: new ObjectId(data)}
      const update = req.body
      const updateprod ={
        $set:{
          ...update
        }
      }
      const option = {upsert:true}
      const result=await productcollection.updateOne(filter,updateprod,option)
      res.send(result)
    })
     

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log("server") 
  })




