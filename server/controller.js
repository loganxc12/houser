module.exports = {

     getHouses: (req, res) => {
          const dbInstance = req.app.get("db");
          dbInstance.get_houses() 
               .then( houses => res.status(200).send(houses) )
               .catch( error => {
                    res.status(500).send({errorMessage: "Error in getHouses method"});
                    console.log(error);
               })
     },

     postHouse: (req, res) => {
          const dbInstance = req.app.get("db");
          const { name, address, city, state, zip, imageUrl, mortgage, rent  } = req.body;
          dbInstance.create_house( [name, address, city, state, zip, imageUrl, mortgage, rent] )
               .then( () => res.sendStatus(200) )
               .catch( error => {
                    res.status(500).send({errorMessage: "Error in postHouse method"});
                    console.log(error);
               })
     },

     deleteHouse: (req, res) => {
          const dbInstance = req.app.get("db");
          dbInstance.delete_house(req.params.id)
               .then( () => res.sendStatus(200) )
               .catch( error => {
                    res.status(500).send({errorMessage: "Error in deleteHouse method"});
                    console.log(error);
               })
     },

     

     // getInventory: (req, res) => {
     //      const dbInstance = req.app.get("db");
     //      dbInstance.get_inventory() //How can we call this here?
     //           .then( products => res.status(200).send(products) )
     //           .catch( error => {
     //                res.status(500).send({errorMessage: "Error in getInventory method"});
     //                console.log(error);
     //           })
     // },

}