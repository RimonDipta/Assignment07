const { status } = require("express/lib/response");

exports.create = async (req, res) => {
  res
    .status(201)
    .json({ status: "success", data: "Message created successfully" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Message data" });
};

exports.delete = async (req, res) => {
  res.status(204).json({ status: "success", data: "Message Delete" });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Message updated successfully" });
};
