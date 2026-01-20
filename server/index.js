if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const corsOptions = require('./config/cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const connectDb = require('./database/db');
const serviceRoutes = require('./routes/serviceRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

connectDb();

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/services', serviceRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('App now listening on port:', PORT)
})