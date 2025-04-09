import Tour from './../models/Tour.js';

//create new tour
export const createTour = async (req, res) => {

    const saveTour = await newTour.save();

  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({data:savedTour, success:true, message:"Tour created successfully"});
  } catch (err) {
    res.status(500).json({success:false, message:"Tour creation failed"});
  }
};