// AI-Generated Code - 2026-06-04 - Composer
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Business', path: '/business' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Product Gallery', path: '/product-gallery' },
  { label: 'Library', path: '/library' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Stock Buy', path: '/stock-buy' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Authorized Distributor', path: '/authorized-distributor' },
];
export const productTags = 'Active-Passives | Microprocessors | Cables | LEDs | Batteries | Motors | Alloys';
export const heroTitle = 'Lenxtech semiconductor chips, Electronic, industrial, aerospace & marine';
export const intro = {
  heading: 'Hello There!',
  paragraphs: [
    'Lenxtech is a young business-driven team with passion in Electrical, Electronics & Engineering. We are an international distribution company with a strong supplier network in Europe, Asia-Pacific, the Americas, Middle East & North Africa.',
    'By partnering with top EU & Asian brands across sectors, we source critical parts including electrolytic capacitors, microprocessors & logic devices, terminal blocks, transformers, multi-layer PCB assemblies, chemical pumps, optical sensors, display screens, metallic alloys, marine equipment, AGM batteries, hydraulics, heating & cooling systems, insulators, and industrial cables.',
  ],
};
export const sectors = [
  { title: 'Original Equipment Manufacturer', icon: 'OEM' },
  { title: 'Contract Manufacturer', icon: 'CM' },
  { title: 'Prototype, Design & Repair', icon: 'PDR' },
  { title: 'Industrial Automation', icon: 'IA' },
  { title: 'Aerospace & Defense', icon: 'AD' },
  { title: 'Marine & Energy', icon: 'ME' },
];
export const industries = ['Medical Devices','Automotive','Aerospace','Ship Building & Railways','Communication','Industrial Automation','Army & Defense','Consumer Electronics','Engineering Services','Energy','Educational Systems','Oil Production'];
export const productLines = [
  'Electronic Components (High Performance Chips)',
  'Electric Motors, Chemical Pumps & Mechanical Parts',
  'PCBs (Flex & Rigid Multi-Layered up to 48 layers)',
  'Cables (Marine, Railways, Mining, Oil & Gas)',
  'Batteries (Automotive, Marine, Energy & Industrial)',
  'LEDs, Automotive Lamps & Display Screens',
  'Transformers, Circuit Breakers (Heavy Duty)',
  'Metallic Alloys (Cu-Be)',
  'Insulators (Rubber, Fiber Glass, Foam, Wood, Cellulose)',
  'Smart Cards & RFID Tags (e-ID, Bio wearables)',
];
export const portfolioCatalog = [
  { title: 'Amplifiers, Audio, Access Control, Antennas', items: ['Operational & Instrumentation Amplifiers','Alarms, Buzzers, Ultrasonic Sensors','Antenna Modules — Whip, Dipole, Yagi, Patch'] },
  { title: 'Automotive Lamps, Battery Products', items: ['Head, Tail, Fog & Warning Lamps','Lithium Ion, AGM, Lead Acid Batteries','Battery Chargers, Holders, Packs'] },
  { title: 'Cable Assemblies & Wire Management', items: ['Marine, Railways, Industrial Cables','Fiber Optic & Flat Flex Cables','Heat Shrink, Wire Ducts, Labels'] },
  { title: 'Capacitors & Circuit Protection', items: ['Electrolytic, Ceramic, Tantalum Capacitors','Circuit Breakers, TVS, MOVs, Fuses','Surge Suppression & ESD Protectors'] },
  { title: 'ICs, Displays & Connectors', items: ['MCUs, MPUs, FPGAs, SoC, PLDs','LCD, OLED, QLED Display Modules','USB, HDMI, Terminal Blocks, FFC/FPC'] },
  { title: 'Sensors, RFID & Thermal', items: ['Temperature, Proximity, Motion Sensors','RFID HF-UHF, Smart Cards','Fans, Heat Sinks, SMPS Transformers'] },
];
export const commitment = [
  { title: 'Integrity & Supply', type: 'list', intro: 'We understand what it means:', items: ['Production risks from breakdown, shortage & complex sourcing','Fighting fake, refurbished & low-quality parts','Stock-ready for quarterly & half-yearly planning','Complete testing, packaging, shipping & documentation','Proactive, customer-centric partnership'] },
  { title: 'Intelligent Distribution', type: 'text', text: 'Our research system aligns demand with projects, stocks, markets, and intervals for seamless global supply. From rare microchips to 48-layer PCB assemblies and Lloyd-certified marine cables, we deliver complete solutions with timely delivery and attentive service.' },
  { title: 'Quality Control', type: 'list', intro: 'We pledge to source new and original parts. Third-party lines are duly tested:', items: ['Visual, functionality, standard packaging','Curve trace, X-Ray & decapsulation','In-circuit & functional test','AOI, microsection, impedance control','EMC/EMI, FCC, RF, RoHS compliance'], footer: 'Additional tests on client request. Standard one-year warranty on all parts.' },
];
export const offices = [
  { region: 'Central Europe', location: 'Budapest, Hungary', image: '/assets/offices/office-budapest.svg' },
  { region: 'South Asia', location: 'Hyderabad, India', image: '/assets/offices/office-hyderabad.svg' },
  { region: 'East Asia', location: 'Hong Kong, China', image: '/assets/offices/office-hongkong.svg' },
  { region: 'South Asia', location: 'Vashi, Navi Mumbai, India', image: '/assets/offices/office-mumbai.svg' },
  { region: 'South Asia', location: 'Chennai, Tamil Nadu, India', image: '/assets/offices/office-chennai.svg' },
];
export const addresses = [
  { name: 'Lenxtech Hungary Kft', lines: ['Berzeviczy Gergely u 18', '1041 Budapest'] },
  { name: 'Lenxtech Distribution Pvt Ltd', lines: ['Sy 136/2 and 136/4 Indiqube Pearl', 'Mindspace Road, Gachibowli', 'Hyderabad, Telangana 500032'] },
];
const stockLabels = [
  'Semiconductor chips', 'PCB assembly', 'Industrial cables', 'LED components',
  'Electric motors', 'Capacitors', 'Microprocessors', 'Marine equipment',
  'Automotive parts', 'Transformers', 'Optical sensors', 'AGM batteries',
];
const galleryLabels = [
  ...stockLabels,
  'Display modules', 'RFID tags', 'Hydraulic systems', 'Testing equipment',
];

export const stockImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/assets/stock/stock-${i + 1}.svg`,
  alt: stockLabels[i],
}));

export const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/assets/gallery/gallery-${i + 1}.svg`,
  alt: galleryLabels[i],
}));
export const pdfPlaceholders = [
  {title:'ISO Certification',category:'certification'},{title:'Lenxtech Company Overview',category:'about'},
  {title:'Authorized Distributor Certificate',category:'distributor'},{title:'Partner Distributor Certificate',category:'distributor'},
  {title:'EMV Compliance Poster',category:'distributor'},{title:'Visionary Leadership Award',category:'honors'},
  {title:'Who We Are',category:'about'},{title:'Company Timeline',category:'about'},{title:'Corporate Presentation',category:'about'},{title:'Line Card',category:'business'},
];
export const teamMembers = [
  {name:'Leadership Team',role:'Executive Management',bio:'Driving global sourcing and customer partnerships.'},
  {name:'Supply Chain',role:'Operations',bio:'Inventory planning, logistics, and fulfillment.'},
  {name:'Quality Assurance',role:'Testing & Compliance',bio:'Authentic, tested components for every shipment.'},
  {name:'Customer Success',role:'Account Management',bio:'RFQ support, quotations, and proactive care.'},
];
export const libraryDocs = [
  {title:'Product Catalog 2026',type:'Catalog'},{title:'Quality Assurance Policy',type:'Policy'},
  {title:'Shipping & Packaging Standards',type:'Guide'},{title:'Terms & Conditions',type:'Legal'},
  {title:'Counterfeit Prevention Guidelines',type:'Guide'},
];
export const socialLinks = [{name:'Facebook',href:'#',label:'Facebook'},{name:'Instagram',href:'#',label:'Instagram'},{name:'LinkedIn',href:'#',label:'LinkedIn'}];
