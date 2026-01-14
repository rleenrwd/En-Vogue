const corsOrigin = process.env.CORS_ORIGIN;

if (!corsOrigin) {
    console.error('CORS_ORIGIN is not set. Check .env file.');
    process.exit(1);
}

console.log('CORS_ORIGIN:', corsOrigin);

const corsOptions = {
    origin: corsOrigin,
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;