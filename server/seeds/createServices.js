if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const mongoose = require('mongoose');
const Service = require('../models/Service');

const seedServices = [
    {
    name: 'The En Vogue Finish',
    subtitle: 'A flawless look. A signature touch. An En Vogue Finish.',
    description:
      'Our most refined grooming experience, The En Vogue Finish is a 3-hour, 20-minute session tailored to perfection. It includes a luxurious bath, deep-conditioning treatment, precision coat styling or breed-specific cut, paw and pad care, ear cleansing, and an elegant finishing spritz. Designed for pets with a taste for the exquisite, this signature service starts at $130 and delivers polished results worthy of the runway.',
    image: 'https://static.wixstatic.com/media/11062b_b8900eefe71e426c8224fc1d1f269ed7~mv2.jpg',
    price: 130,
    durationMins: 180,
    },
    {
    name: 'The Luxe Lather',
    subtitle: 'Shampoo & Condition - A silky cleanse for the most stylish coats.',
    description:
      'Our professional bathing service pampers your pet with gentle, natural shampoos and nourishing conditioners, leaving their coat soft, fresh, and radiant. Every detail is designed to soothe the skin, calm the senses, and deliver a spa-like experience worthy of the En Vogue name.',
    image:
      'https://static.wixstatic.com/media/11062b_e139dd3aa5674cdebf390629957ab8ac~mv2.jpg',
    price: 50,
    durationMins: 60,
  },
  {
    name: 'PAWlish & Shine',
    subtitle: 'Teeth Cleaning Service - Healthy. Gleaming. En Vogue.',
    description: "This specialized service, provided by a trusted third-party expert, focuses on maintaining the health and brilliance of your pet’s teeth and gums. Gentle yet effective, it promotes fresher breath, cleaner teeth, and overall wellness.",
    image: 'https://static.wixstatic.com/media/15e1fadb6f8945b0baceadc73acfb5d2.jpg',
    price: 300,
    durationMins: 60
  },
  {
    name: 'Reluxe and Play',
    subtitle: 'Doggy Daycare Service - Because luxury and fun go paw in paw.',
    description: 'Our boutique daycare offers a serene, climate-controlled space where pets can play, rest, and socialize under attentive supervision. With tailored enrichment, plush lounges, and a low-stress environment, your companion enjoys comfort, care, and calm throughout the day.',
    image: 'https://static.wixstatic.com/media/8f06d423f1074c479bf65ababdd2d897.jpg',
    price: 35,
    durationMins: 120
  },
  {
    name: 'Strut en Vogue',
    subtitle: 'Our Dog Walking Service - Because the only way to chase squirrels is to do it en style.',
    description: 'Our bespoke dog walking and exercise sessions are thoughtfully designed to deliver essential physical activity and mental stimulation. Every stride is tailored to keep your dog joyful, healthy, and stylishly energized.',
    image: 'https://static.wixstatic.com/media/a8ce84a51c8f4768b5edb6bdca7b9776.jpg',
    price: 35,
    durationMins: 60
  },
  {
    name: 'Stay en Vogue',
    subtitle: 'Our Overnight Boarding Service - Serene nights. Styled stays. En Vogue always.',
    description: "We provide a secure, and serene environment for your cherished companion while you’re away. Every detail is designed to ensure comfort, safety, and personalized attention — offering your pet a restful retreat that feels like a true home away from home.",
    image: 'https://static.wixstatic.com/media/39e67632823a4224b2e36c07d6c8a426.jpg',
    price: 100,
    durationMins: 1440
  },
   {
    name: 'Consultation',
    subtitle: 'Custom Grooming Request(s) - Because every pet deserves a personalized touch.',
    description: "Our tailored grooming consultation offers one-on-one support for your unique needs — from grooming guidance and obedience tips to trusted referrals and expert recommendations. It's your chance to ask, explore, and elevate your pet's care the En Vogue way.",
    image: 'https://static.wixstatic.com/media/11062b_0cee0e2f2b434966a50dc8447c6d601d~mv2.jpg',
    price: 50,
    durationMins: 60
  },
]

const runSeed = async () => {
    const URI = process.env.MONGO_URI;

    if (!URI) {
        console.error('MONGO_URI not set. Check your .env file.');
        process.exit(1);
    }

    try {
        await mongoose.connect(URI);

        const deleteServices = await Service.deleteMany({});
        console.log('All services removed from collection.');

        const insertServices = await Service.insertMany(seedServices);
        console.log('New services inserted into collection.');

    } catch (err) {
        console.error('Seed failed:', err.message);
        process.exitCode = 1;
    } finally {
        try {
            await mongoose.connection.close();
            console.log('MongoDB connection closed.');
        } catch (_) {}
    }

};

runSeed();