import exports from "express";
import {
  createMember,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/account", getAllAccount);
Controller.post("/regeditaccount", createMember);
Controller.patch("/account/:id", updateAccount);
Controller.delete("/account/:id", deleteAccount);


export default Controller;
