import express from "express";
import formidable from "express-formidable";
import {
  getPlantController,
  getPlantPhotoController,
  uploadPlantController,
} from "../controller/plantController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
// router.post("/register", registerController);

// //LOGIN || POST
// router.post("/login", loginController);

//Trial
//routes

router.post("/create", uploadPlantController);

export default router;

//protected route
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });

router.get("/:name", formidable(), getPlantController);

//route Photo
router.get("/image/:name", formidable(), getPlantPhotoController);
