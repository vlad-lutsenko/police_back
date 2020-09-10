const policemanModel = require("./policeman.model");

class PolicemanController {
  async getPolicemanList(req, res) {
    try {
      const policemanList = await policemanModel.find({});
      res.status(200).send(policemanList);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async getOnePoliceman(req, res) {
    try {
      const { policemanNumber } = req.params;
      const policeman = await policemanModel
        .find({ number: policemanNumber })
        .populate("story");
      res.status(200).send(policeman);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  // async addPoliceman(req, res) {
  //   // try {
  //   //   const policeman = req.body;
  //   //   const addedPoliceman = await policemanModel.create(policeman);
  //   //   res.status(201).send(addedPoliceman);
  //   // } catch (error) {
  //   //   console.error(error);
  // res.status(500).send(error);
  //   // }
  // }
}

module.exports = new PolicemanController();
