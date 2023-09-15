import express from "express";
import { getPlantController } from "../controller/plantController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
// router.post("/register", registerController);

// //LOGIN || POST
// router.post("/login", loginController);

//Trial
//routes

export default router;

//protected route
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });

router.get("/:name", getPlantController);
