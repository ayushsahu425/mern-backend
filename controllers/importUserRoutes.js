// const { error } = require("winston")
var Lead= require('../model/Lead');

var csv = require('csvtojson');
const { response } = require('../routes/importUserRoutes');
const { default: User } = require('../model/Lead');

const importUser = async(req,res)=>{
    console.log(req.file);
    try{
    var userData = [];
        csv()
        .fromFile(req.file.path)
        .then(async(response) =>{
            // console.log(response);

            for(var x = 0; x < response.length;  x++){
              userData.push
              ({
                clientName: response[x].clientName,
                phoneNumber: response[x].phoneNumber,
                emailAddress:response[x].emailAddress,
                leadStatus:response[x].leadStatus,
                regDate:response[x].regDate,
                clientId:response[x].clientId,
                clientGenerationDate:response[x].clientGenerationDate,
                firstTradeDate: response[x].firstTradeDate,
                fullTradeDate: response[x].fullTradeDate,
                fundAdd: response[x].fundAdd,
                fundAddDate: response[x].fundAddDate,
                fundAddedBy: response[x].fundAddedBy,
                firstTradeBy: response[x].firstTradeBy,
                fullTradeBy: response[x].fullTradeBy,
                AccountOpenDate: response[x].AccountOpenDate,
                ApplicationNumber: response[x].ApplicationNumber,
                whatsappNumber: response[x].whatsappNumber,
                coordinatorName: response[x].coordinatorName,
                teamLeaderName: response[x].teamLeaderName,
                daysforFirstTrade: response[x].daysforFirstTrade,
                daysforFullTrade:  response[x].daysforFullTrade,
                createdBy: "65680b2513a432054f6ee771"
                // coloumn name



              });

            }
            await User.insertMany(userData);
        });
         
        res.send({status:200, success:true, msg:'csv imported'});
    
    } catch(error){
        res.send({status:400, success:false, msg:error.message});


    }
}
module.exports = {
    importUser
}