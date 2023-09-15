import plantModel from "../models/plantModel.js";
export const getPlantController = async (req, res) => {
  try {
    const { name } = req.params;
    const plant = await plantModel.findOne({ name: name });
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
