import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

export default path => {
    // Create Instance of Express
    const app = express();
  
    // Run Morgan for Logging

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
   
    //parses text 
    app.use(bodyParser.text());
    app.use(express.static(`${path}/client`));
  
    app.use("/api/users", routers.users);
    app.use("/api/products", routers.products);
    app.use("/api/purchases", routers.purchases);
    app.use("/api/carts",routers.carts);
    // Any non API GET routes will be directed to our React App and handled by React Router
    app.get("*", (req, res) => {
      res.sendFile(`${path}/client/index.html`);
    });
  
    return app;
    // -------------------------------------------------
  };