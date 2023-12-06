import mongoose from "mongoose";


const LeadSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
  leadStatus: { type: String, default: 'Leads cleUnder Review' },
  regDate: { type: String },
  clientId: { type: String },
  clientGenerationDate: { type: String },
  firstTradeDate: { type: String },
 fullTradeDate: { type: String },
  fundAdd: { type: String },
  fundAddDate: { type: String },
  status: { type: String, default: 'Approved' },
  daysBetweenDates: { type: String },
  fundAddedBy: { type: String },
  firstTradeBy: { type: String },
  fullTradeBy:{type:String},
  AccountOpenDate:{type:String},
  ApplicationNumber:{type:String},
  whatsappNumber:{type:String},
  coordinatorName:{type:String},
  teamLeaderName:{type:String},
  daysForFirstTrade:{type:String},
  daysForFullTrade:{type:String},
  Brokerage:{type:String},
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
  
  
  deleted: {
    type: Boolean,
    default: false,
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', LeadSchema);
