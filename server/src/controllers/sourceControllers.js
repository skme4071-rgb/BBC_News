import { Source } from "../Models/models.js";

// ================= CREATE =================
export const createSource = async (req, res) => {
  try {
    const { name, logo, url, type } = req.body;

    const source = await Source.create({
      name,
      logo,
      url,
      type,
      createdBy: req.user._id, // assuming LoginCheck sets req.user
    });

    res.status(201).json(source);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= UPDATE =================
export const updateSource = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, logo, url, type } = req.body;

    const source = await Source.findByIdAndUpdate(
      id,
      { name, logo, url, type },
      { new: true },
    );

    if (!source) return res.status(404).json({ message: "Source not found" });

    res.status(200).json(source);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= DELETE =================
export const deleteSource = async (req, res) => {
  try {
    const { id } = req.params;

    const source = await Source.findByIdAndDelete(id);

    if (!source) return res.status(404).json({ message: "Source not found" });

    res.status(200).json({ message: "Source deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET (SINGLE) =================
export const getSource = async (req, res) => {
  try {
    const { id } = req.params;

    const source = await Source.findById(id);

    if (!source) return res.status(404).json({ message: "Source not found" });

    res.status(200).json(source);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ================= GET ALL =================
export const getAllSources = async (req, res) => {
  try {
    const sources = await Source.find();
    res.status(200).json(sources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
