import plantModel from "../models/plantModel.js";
import fs from "fs";

export const getPlantController = async (req, res) => {
  try {
    const { name } = req.params;
    const { photo } = req.files;
    if (!photo || photo.size > 3000000) {
      res.status(500).send({
        error: "photo is required and should be less than 3mb",
      });
    }
    const data = fs.readFileSync(photo.path);
    const contentType = photo.type;
    const plant = await plantModel.findOne({ name: name }).select("-photo");
    res.status(201).send({
      success: true,
      message: "Plant retrived sucessfully",
      plant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};
export const getPlantPhotoController = async (req, res) => {
  try {
    const { name } = req.params;

    const plant = await plantModel.findOne({ name: name }).select("photo");
    if (plant.photo.data) {
      res.set("Content-type", plant.photo.contentType);
      res.status(201).send(plant.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};

export const uploadPlantController = async (req, res) => {
  try {
    const { name } = req.params;

    const plant = await plantModel.findOne({ name: name }).select("photo");
    if (plant.photo.data) {
      res.set("Content-type", plant.photo.contentType);
      res.status(201).send(plant.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting plant details",
    });
  }
};
