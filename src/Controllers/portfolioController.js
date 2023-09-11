const { status } = require("express/lib/response");

exports.create = async (req, res) => {
  res
    .status(201)
    .json({ status: "success", data: "Portfolio created successfully" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Portfolio data" });
};

exports.delete = async (req, res) => {
  res.status(204).json({ status: "success", data: "Portfolio Delete" });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Portfolio updated successfully" });
};
