const nodemailer = require("nodemailer");
const storyModel = require("./story.model");
const policemanModel = require("../policeman/policeman.model");
const { mailSender, mailSenderPass } = require("../constants");

class StoryController {
  async addStory(req, res) {
    const policeman = await policemanModel.findOne({ number });
    try {
      const newStory = await storyModel.create({
        ...story,
        policeman: policeman._id,
      });

      const updatedPoliceman = await policemanModel.findByIdAndUpdate(
        policeman._id,
        {
          $push: {
            story: {
              _id: newStory._id,
            },
          },
        },
        { new: true }
      );
      res.status(201).send(updatedPoliceman);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  async offerStory(req, res) {
    try {
      const { email = "email не вказано", author, text } = req.body;
      const number = req.params.number;

      const policeman = await policemanModel.findOne({ number });

      const { name, surname } = policeman;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: mailSender,
          pass: mailSenderPass,
        },
      });

      const result = await transporter.sendMail({
        from: mailSender,
        to: ["created4tools@gmail.com"],
        subject: "police memorial story",
        html: `<div><p><strong>повідомлення від: </strong>${email}</p><p><strong>${name} ${surname}</strong><p><strong>номер жетона: </strong>${number}</p></p><p><strong>автор:</strong> ${author}</p><p><strong>текст:</strong> ${text}</p></div>`,
      });
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
}

module.exports = new StoryController();
