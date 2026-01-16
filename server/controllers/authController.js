const mongoose = require('mongoose');
const AdminUser = require('../models/AdminUser');

exports.loginAdmin = (req, res) => {
    res.send('Login');
}

exports.logoutAdmin = (req, res) => {
    res.send('Logged out');
}