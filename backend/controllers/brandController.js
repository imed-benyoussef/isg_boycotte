const Brand = require('../models/brandModel');

exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.status(200).json(brand);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBrand = async (req, res) => {
    try {
        const newBrand = new Brand(req.body);
        const savedBrand = await newBrand.save();
        res.status(201).json(savedBrand);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBrand = async (req, res) => {
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.status(200).json(updatedBrand);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBrand = async (req, res) => {
    try {
        const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
        if (!deletedBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.status(200).json({ message: 'Brand deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
