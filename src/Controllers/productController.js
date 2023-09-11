const { status } = require("express/lib/response");

exports.create = async (req, res) => {
  res
    .status(201)
    .json({ status: "success", data: "Product created successfully" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Product data" });
};

exports.delete = async (req, res) => {
  res.status(204).json({ status: "success", data: "Product Delete" });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Product updated successfully" });
};
