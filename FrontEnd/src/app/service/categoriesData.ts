// All service categories with detailed information
export const allCategories = [
  "AC Repair Services",
  "Appliance Repair",
  "Cleaning Services (Home, Office, Sofa, Carpet, etc.)",
  "Beauty & Wellness (At-home salon, spa, massage)",
  "Men's Care & Salon",
  "Health & Care (Nursing, physiotherapy, home doctor visits)",
  "Electronics & Gadgets Repair",
  "Electric & Plumbing",
  "Pest Control",
  "Painting & Renovation",
  "Shifting / Moving Services",
  "Driver Services",
  "Car Care Services (Wash, detailing, repair)",
  "Emergency Services (Locksmith, urgent repairs, ambulance)",
  "Babysitting / Childcare",
  "Elderly Care / Attendant Services",
  "Laundry & Dry Cleaning",
  "Handyman Services (Carpentry, drilling, minor repairs)",
  "Gardening & Landscaping",
  "Pet Care (Grooming, sitting, vet at home)",
  "Makeup Artist Services",
  "Security Guard / Watchman Services",
  "CCTV Installation & Repair",
  "Water Purifier Services",
  "Mobile & Laptop Repair at Home",
  "Home Automation Services",
  "Car Rental",
  "Event Management",
  "Photography & Videography",
  "Catering Services",
  "Home Tutoring / Online Classes",
  "Fitness Trainer / Yoga at Home",
  "Interior Design & Home Decor",
  "Courier / Document Delivery",
  "Party Decoration & Supplies",
  "Tent & Stage Setup",
  "Mehendi Artist",
  "DJ & Sound System Rental",
  "Bouncer / Event Security",
  "IT Support (WiFi setup, computer repair)",
];

// Detailed category information
export const categoryDetails: Record<string, {
  description: string;
  pricingRange: string;
  serviceAreas: string[];
  averageRating: number;
  responseTime: string;
  popularServices: string[];
}> = {
  "AC Repair Services": {
    description: "Professional AC installation, repair, maintenance, and gas refilling services for all brands",
    pricingRange: "৳500 - ৳3,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.6,
    responseTime: "2-4 hours",
    popularServices: ["AC Installation", "Gas Refilling", "Filter Cleaning", "Compressor Repair", "Remote Repair"]
  },
  "Appliance Repair": {
    description: "Expert repair services for refrigerators, washing machines, microwaves, and other home appliances",
    pricingRange: "৳300 - ৳2,500",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.5,
    responseTime: "3-6 hours",
    popularServices: ["Refrigerator Repair", "Washing Machine Service", "Microwave Repair", "Oven Service", "Dishwasher Repair"]
  },
  "Cleaning Services (Home, Office, Sofa, Carpet, etc.)": {
    description: "Comprehensive cleaning solutions for homes, offices, and commercial spaces",
    pricingRange: "৳1,000 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.7,
    responseTime: "Same day - 24 hours",
    popularServices: ["Home Deep Cleaning", "Office Cleaning", "Sofa Cleaning", "Carpet Cleaning", "Kitchen Deep Clean"]
  },
  "Beauty & Wellness (At-home salon, spa, massage)": {
    description: "Professional beauty and wellness services in the comfort of your home",
    pricingRange: "৳800 - ৳5,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.8,
    responseTime: "2-6 hours",
    popularServices: ["Facial Treatment", "Hair Styling", "Manicure & Pedicure", "Massage Therapy", "Bridal Makeup"]
  },
  "Men's Care & Salon": {
    description: "Specialized grooming and styling services for men including haircuts, beard trimming, and facials",
    pricingRange: "৳300 - ৳2,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.4,
    responseTime: "1-3 hours",
    popularServices: ["Haircut & Styling", "Beard Trim", "Facial Treatment", "Hair Coloring", "Head Massage"]
  },
  "Health & Care (Nursing, physiotherapy, home doctor visits)": {
    description: "Professional healthcare services including nursing care, physiotherapy, and home doctor consultations",
    pricingRange: "৳1,500 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.9,
    responseTime: "1-4 hours",
    popularServices: ["Home Nursing", "Physiotherapy", "Doctor Consultation", "Elderly Care", "Post-Surgery Care"]
  },
  "Electronics & Gadgets Repair": {
    description: "Expert repair services for smartphones, tablets, laptops, and other electronic devices",
    pricingRange: "৳200 - ৳3,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.3,
    responseTime: "2-5 hours",
    popularServices: ["Mobile Repair", "Laptop Service", "Tablet Repair", "Gaming Console Repair", "Smart Watch Service"]
  },
  "Electric & Plumbing": {
    description: "Licensed electricians and plumbers for installation, repair, and maintenance services",
    pricingRange: "৳500 - ৳4,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.6,
    responseTime: "2-6 hours",
    popularServices: ["Electrical Installation", "Plumbing Repair", "Switchboard Service", "Water Heater Installation", "Pipe Fitting"]
  },
  "Pest Control": {
    description: "Professional pest control and extermination services for homes and commercial properties",
    pricingRange: "৳1,500 - ৳6,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.7,
    responseTime: "24-48 hours",
    popularServices: ["Cockroach Control", "Termite Treatment", "Rodent Control", "Bed Bug Treatment", "Mosquito Control"]
  },
  "Painting & Renovation": {
    description: "Professional painting and renovation services for homes, offices, and commercial spaces",
    pricingRange: "৳2,000 - ৳15,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.5,
    responseTime: "1-3 days",
    popularServices: ["Interior Painting", "Exterior Painting", "Wall Texture", "Kitchen Renovation", "Bathroom Remodeling"]
  },
  "Shifting / Moving Services": {
    description: "Reliable moving and shifting services with packing, loading, and transportation",
    pricingRange: "৳3,000 - ৳25,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.4,
    responseTime: "24-72 hours",
    popularServices: ["Home Shifting", "Office Relocation", "Packing Service", "Furniture Moving", "Long Distance Moving"]
  },
  "Driver Services": {
    description: "Professional drivers for personal and commercial use with verified backgrounds",
    pricingRange: "৳1,500 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.3,
    responseTime: "2-6 hours",
    popularServices: ["Personal Driver", "Commercial Driver", "Event Driver", "Airport Pickup", "Long Distance Driving"]
  },
  "Car Care Services (Wash, detailing, repair)": {
    description: "Comprehensive car care including washing, detailing, and minor repair services",
    pricingRange: "৳500 - ৳5,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.6,
    responseTime: "2-4 hours",
    popularServices: ["Car Wash", "Interior Cleaning", "Paint Protection", "Minor Repairs", "Tire Service"]
  },
  "Emergency Services (Locksmith, urgent repairs, ambulance)": {
    description: "24/7 emergency services including locksmith, urgent repairs, and ambulance services",
    pricingRange: "৳1,000 - ৳10,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.8,
    responseTime: "30 minutes - 2 hours",
    popularServices: ["Locksmith Service", "Emergency Repairs", "Ambulance Service", "Emergency Plumbing", "Power Restoration"]
  },
  "Babysitting / Childcare": {
    description: "Professional childcare and babysitting services with experienced caregivers",
    pricingRange: "৳800 - ৳3,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.7,
    responseTime: "2-6 hours",
    popularServices: ["Babysitting", "Child Care", "Homework Help", "Child Development", "Special Needs Care"]
  },
  "Elderly Care / Attendant Services": {
    description: "Compassionate elderly care and attendant services for senior citizens",
    pricingRange: "৳2,000 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.9,
    responseTime: "4-8 hours",
    popularServices: ["Elderly Care", "Medical Attendant", "Companion Care", "Personal Care", "Medication Management"]
  },
  "Laundry & Dry Cleaning": {
    description: "Professional laundry and dry cleaning services with pickup and delivery",
    pricingRange: "৳200 - ৳2,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.4,
    responseTime: "24-48 hours",
    popularServices: ["Dry Cleaning", "Laundry Service", "Ironing", "Starch Service", "Curtain Cleaning"]
  },
  "Handyman Services (Carpentry, drilling, minor repairs)": {
    description: "Versatile handyman services for various home repairs and maintenance tasks",
    pricingRange: "৳300 - ৳3,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.5,
    responseTime: "2-6 hours",
    popularServices: ["Carpentry Work", "Drilling Service", "Minor Repairs", "Furniture Assembly", "Installation Work"]
  },
  "Gardening & Landscaping": {
    description: "Professional gardening and landscaping services for homes and commercial properties",
    pricingRange: "৳1,000 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.6,
    responseTime: "24-48 hours",
    popularServices: ["Garden Maintenance", "Landscaping", "Plant Care", "Lawn Service", "Tree Trimming"]
  },
  "Pet Care (Grooming, sitting, vet at home)": {
    description: "Comprehensive pet care services including grooming, sitting, and veterinary care",
    pricingRange: "৳500 - ৳4,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.7,
    responseTime: "2-6 hours",
    popularServices: ["Pet Grooming", "Pet Sitting", "Vet at Home", "Pet Training", "Pet Boarding"]
  },
  "Makeup Artist Services": {
    description: "Professional makeup artists for bridal, party, and special occasion makeup",
    pricingRange: "৳2,000 - ৳15,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.8,
    responseTime: "2-4 hours",
    popularServices: ["Bridal Makeup", "Party Makeup", "Hair Styling", "Mehendi Design", "Photography Makeup"]
  },
  "Security Guard / Watchman Services": {
    description: "Professional security guards and watchman services for homes and commercial properties",
    pricingRange: "৳8,000 - ৳25,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.4,
    responseTime: "24-48 hours",
    popularServices: ["Home Security", "Commercial Security", "Event Security", "Night Watchman", "Armed Guards"]
  },
  "CCTV Installation & Repair": {
    description: "Professional CCTV camera installation, maintenance, and repair services",
    pricingRange: "৳3,000 - ৳25,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.6,
    responseTime: "24-48 hours",
    popularServices: ["CCTV Installation", "Camera Repair", "DVR Setup", "Remote Monitoring", "System Maintenance"]
  },
  "Water Purifier Services": {
    description: "Water purifier installation, maintenance, and filter replacement services",
    pricingRange: "৳500 - ৳5,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.5,
    responseTime: "2-6 hours",
    popularServices: ["Purifier Installation", "Filter Replacement", "Maintenance Service", "RO Service", "Water Testing"]
  },
  "Mobile & Laptop Repair at Home": {
    description: "Convenient mobile and laptop repair services at your doorstep",
    pricingRange: "৳300 - ৳4,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.4,
    responseTime: "2-5 hours",
    popularServices: ["Mobile Repair", "Laptop Service", "Screen Replacement", "Battery Replacement", "Software Issues"]
  },
  "Home Automation Services": {
    description: "Smart home automation installation and setup services",
    pricingRange: "৳5,000 - ৳50,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"],
    averageRating: 4.7,
    responseTime: "24-72 hours",
    popularServices: ["Smart Lighting", "Security Systems", "Climate Control", "Entertainment Setup", "Voice Control"]
  },
  "Car Rental": {
    description: "Reliable car rental services for personal and business use",
    pricingRange: "৳2,000 - ৳15,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.3,
    responseTime: "2-6 hours",
    popularServices: ["Daily Rental", "Weekly Rental", "Airport Pickup", "Business Travel", "Wedding Car"]
  },
  "Event Management": {
    description: "Complete event management services for weddings, corporate events, and celebrations",
    pricingRange: "৳10,000 - ৳500,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.6,
    responseTime: "1-7 days",
    popularServices: ["Wedding Planning", "Corporate Events", "Birthday Parties", "Anniversary Celebrations", "Product Launch"]
  },
  "Photography & Videography": {
    description: "Professional photography and videography services for all occasions",
    pricingRange: "৳3,000 - ৳50,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.7,
    responseTime: "24-72 hours",
    popularServices: ["Wedding Photography", "Event Coverage", "Portrait Photography", "Product Photography", "Video Editing"]
  },
  "Catering Services": {
    description: "Professional catering services for events, parties, and corporate functions",
    pricingRange: "৳200 - ৳1,500",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.5,
    responseTime: "24-48 hours",
    popularServices: ["Wedding Catering", "Corporate Catering", "Party Catering", "Home Delivery", "Custom Menus"]
  },
  "Home Tutoring / Online Classes": {
    description: "Qualified tutors for home tutoring and online classes in all subjects",
    pricingRange: "৳500 - ৳3,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.6,
    responseTime: "24-48 hours",
    popularServices: ["Math Tutoring", "English Classes", "Science Tuition", "Online Classes", "Exam Preparation"]
  },
  "Fitness Trainer / Yoga at Home": {
    description: "Personal fitness trainers and yoga instructors for home sessions",
    pricingRange: "৳800 - ৳5,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.7,
    responseTime: "2-6 hours",
    popularServices: ["Personal Training", "Yoga Classes", "Weight Loss Programs", "Strength Training", "Meditation"]
  },
  "Interior Design & Home Decor": {
    description: "Professional interior design and home decoration services",
    pricingRange: "৳5,000 - ৳100,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal"],
    averageRating: 4.6,
    responseTime: "1-7 days",
    popularServices: ["Interior Design", "Home Decoration", "Furniture Selection", "Color Consultation", "Space Planning"]
  },
  "Courier / Document Delivery": {
    description: "Fast and reliable courier and document delivery services",
    pricingRange: "৳50 - ৳1,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.3,
    responseTime: "Same day - 3 days",
    popularServices: ["Document Delivery", "Package Courier", "Express Delivery", "International Shipping", "Pickup Service"]
  },
  "Party Decoration & Supplies": {
    description: "Creative party decoration and supply services for all celebrations",
    pricingRange: "৳2,000 - ৳25,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.5,
    responseTime: "24-48 hours",
    popularServices: ["Birthday Decoration", "Wedding Decoration", "Corporate Decoration", "Balloon Decoration", "Theme Parties"]
  },
  "Tent & Stage Setup": {
    description: "Professional tent and stage setup services for events and functions",
    pricingRange: "৳5,000 - ৳50,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.4,
    responseTime: "24-48 hours",
    popularServices: ["Tent Setup", "Stage Construction", "Lighting Setup", "Sound System", "Event Infrastructure"]
  },
  "Mehendi Artist": {
    description: "Professional mehendi artists for bridal and party mehendi designs",
    pricingRange: "৳1,000 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.8,
    responseTime: "2-6 hours",
    popularServices: ["Bridal Mehendi", "Party Mehendi", "Arabic Design", "Traditional Design", "Custom Patterns"]
  },
  "DJ & Sound System Rental": {
    description: "Professional DJ services and sound system rental for events",
    pricingRange: "৳3,000 - ৳25,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.5,
    responseTime: "24-48 hours",
    popularServices: ["Wedding DJ", "Party DJ", "Sound System Rental", "Karaoke Setup", "Live Music"]
  },
  "Bouncer / Event Security": {
    description: "Professional security personnel for events and functions",
    pricingRange: "৳2,000 - ৳8,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur", "Mymensingh"],
    averageRating: 4.3,
    responseTime: "24-48 hours",
    popularServices: ["Event Security", "Wedding Security", "Party Security", "VIP Protection", "Crowd Control"]
  },
  "IT Support (WiFi setup, computer repair)": {
    description: "Professional IT support services for home and office computer systems",
    pricingRange: "৳500 - ৳5,000",
    serviceAreas: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi", "Barisal", "Rangpur"],
    averageRating: 4.5,
    responseTime: "2-6 hours",
    popularServices: ["WiFi Setup", "Computer Repair", "Network Setup", "Software Installation", "Data Recovery"]
  }
};

// Enhanced providers by category with more detailed information
export const providersByCategory: Record<string, { 
  name: string; 
  desc: string; 
  rating: number;
  experience: string;
  location: string;
  verified: boolean;
  responseTime: string;
  pricing: string;
  photo: string;
  services: string[];
}[]> = {};

allCategories.forEach((cat, i) => {
  const categoryDetail = categoryDetails[cat];
  providersByCategory[cat] = [
    { 
      name: `${cat.split(" ")[0]} Pro`, 
      desc: `Top-rated provider for ${cat.toLowerCase()} with ${categoryDetail.averageRating}★ rating`, 
      rating: categoryDetail.averageRating,
      experience: `${5 + (i % 5)} years`,
      location: categoryDetail.serviceAreas[0],
      verified: true,
      responseTime: categoryDetail.responseTime,
      pricing: categoryDetail.pricingRange,
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      services: categoryDetail.popularServices.slice(0, 3)
    },
    { 
      name: `${cat.split(" ")[0]} Experts`, 
      desc: `Experienced in ${cat.toLowerCase()} with excellent customer reviews`, 
      rating: categoryDetail.averageRating - 0.2,
      experience: `${3 + (i % 3)} years`,
      location: categoryDetail.serviceAreas[1] || categoryDetail.serviceAreas[0],
      verified: true,
      responseTime: categoryDetail.responseTime,
      pricing: categoryDetail.pricingRange,
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      services: categoryDetail.popularServices.slice(0, 3)
    },
    { 
      name: `${cat.split(" ")[0]} Solutions`, 
      desc: `Reliable ${cat.toLowerCase()} services with quick response time`, 
      rating: categoryDetail.averageRating - 0.1,
      experience: `${4 + (i % 4)} years`,
      location: categoryDetail.serviceAreas[2] || categoryDetail.serviceAreas[0],
      verified: false,
      responseTime: categoryDetail.responseTime,
      pricing: categoryDetail.pricingRange,
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      services: categoryDetail.popularServices.slice(0, 3)
    }
  ];
}); 