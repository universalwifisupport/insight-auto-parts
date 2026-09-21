import heroWorkshop from "@/assets/hero-engine-bay.jpg";
import enginesCategory from "@/assets/category-engines.jpg";
import transmissionsCategory from "@/assets/category-transmissions.jpg";
import otherPartsCategory from "@/assets/category-other-parts.jpg";
import castIronInline4 from "@/assets/product-cast-iron-inline-4.jpg";
import refurbishedV6 from "@/assets/product-refurbished-v6.jpg";
import forgedTurboShortBlock from "@/assets/product-forged-turbo-short-block.jpg";
import v8CrateEngine from "@/assets/product-v8-crate-engine.jpg";
import dieselInline6Block from "@/assets/product-diesel-inline-6-block.jpg";
import closeRatio6Speed from "@/assets/product-close-ratio-6-speed.jpg";
import automatic10Speed from "@/assets/product-10-speed-automatic.jpg";
import dualPlateClutch from "@/assets/product-dual-plate-clutch.jpg";
import limitedSlipDifferential from "@/assets/product-limited-slip-differential.jpg";
import transferCase from "@/assets/product-transfer-case.jpg";
import turbocharger from "@/assets/product-turbocharger.jpg";
import coiloverKit from "@/assets/product-coilover-kit.jpg";
import brakeRotorCaliper from "@/assets/product-brake-rotor-caliper.jpg";
import chromolyDriveshaft from "@/assets/product-chromoly-driveshaft.jpg";
import billetIntakeManifold from "@/assets/product-billet-intake-manifold.jpg";
import aluminumRadiator from "@/assets/product-aluminum-radiator.jpg";

export type Category = "Engines" | "Transmissions" | "Other Parts";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  shortDescription: string;
  availability: string;
  image: string;
  specs: string[];
};

export const PHONE_NUMBER = "(888) 566-8927";
export const PHONE_HREF = "tel:+18885668927";
export const BRAND_NAME = "Insight Auto Part";

export const categories = [
  {
    name: "Engines" as Category,
    number: "01",
    description: "Blocks, long blocks, crate engines and rebuild-ready assemblies.",
    image: enginesCategory,
  },
  {
    name: "Transmissions" as Category,
    number: "02",
    description: "Manual boxes, automatics, clutches and torque-rated driveline hardware.",
    image: transmissionsCategory,
  },
  {
    name: "Other Parts" as Category,
    number: "03",
    description: "Braking, suspension, forced induction, cooling and driveline essentials.",
    image: otherPartsCategory,
  },
];

export const products: Product[] = [
  {
    slug: "cast-iron-2-0l-inline-4-engine-block",
    name: "Cast Iron 2.0L Inline-4 Engine Block",
    category: "Engines",
    price: 1240,
    description:
      "A straight, machined foundation for dependable street builds and workshop rebuilds. The block is supplied cleaned, measured and ready for final assembly.",
    shortDescription: "Machined decking, 8-bolt mains and honed bores for 1998–2011 platforms.",
    availability: "In stock · 2 units ready to dispatch",
    image: castIronInline4,
    specs: [
      "2.0L inline-4 architecture",
      "Cast iron block",
      "8-bolt main bearing caps",
      "Honed cylinder bores",
      "Workshop inspected",
    ],
  },
  {
    slug: "refurbished-3-5l-v6-engine",
    name: "Refurbished 3.5L V6 Engine",
    category: "Engines",
    price: 4150,
    description:
      "A fully refurbished V6 assembly built for a direct replacement or considered performance refresh. Each unit is inspected through a documented workshop process.",
    shortDescription: "New bearings and gaskets, dyno-tested to 268 hp output.",
    availability: "In stock · 1 unit ready to dispatch",
    image: refurbishedV6,
    specs: [
      "3.5L V6 configuration",
      "268 hp dyno-tested output",
      "New bearings and gaskets",
      "Compression tested",
      "Core exchange may apply",
    ],
  },
  {
    slug: "forged-2-4l-turbo-short-block",
    name: "Forged 2.4L Turbo Short Block",
    category: "Engines",
    price: 3290,
    description:
      "A forged rotating assembly for boosted applications that need a stronger margin than a standard replacement. Built to order around your final power target.",
    shortDescription: "Forged crankshaft, pistons and H-beam rods for boosted builds.",
    availability: "Quote required · Built to order",
    image: forgedTurboShortBlock,
    specs: [
      "2.4L turbo short block",
      "Forged steel crankshaft",
      "Forged low-compression pistons",
      "H-beam connecting rods",
      "Target power confirmed by phone",
    ],
  },
  {
    slug: "remanufactured-5-7l-v8-crate-engine",
    name: "Remanufactured 5.7L V8 Crate Engine",
    category: "Engines",
    price: 6890,
    description:
      "A remanufactured V8 crate engine with a clean inspection record and practical street calibration. Ask our team to confirm accessory and mount compatibility.",
    shortDescription: "Remanufactured V8 with polished intake and workshop-backed testing.",
    availability: "Limited availability · Call to confirm",
    image: v8CrateEngine,
    specs: [
      "5.7L V8 configuration",
      "Remanufactured long block",
      "Polished intake included",
      "Street-focused calibration",
      "Fitment confirmation required",
    ],
  },
  {
    slug: "diesel-3-0l-inline-6-bare-block",
    name: "Diesel 3.0L Inline-6 Bare Engine Block",
    category: "Engines",
    price: 2680,
    description:
      "A heavy-duty bare block for diesel rebuild programs. Main saddles and bores are checked before release so your machinist can begin from a known baseline.",
    shortDescription: "Heavy cast block with measured bores and inspected main saddles.",
    availability: "In stock · 1 unit ready to dispatch",
    image: dieselInline6Block,
    specs: [
      "3.0L diesel inline-6",
      "Heavy cast construction",
      "Measured cylinder bores",
      "Inspected main saddles",
      "Bare block supply",
    ],
  },
  {
    slug: "close-ratio-6-speed-manual-gearbox",
    name: "Close-Ratio 6-Speed Manual Gearbox",
    category: "Transmissions",
    price: 2890,
    description:
      "A synchronized six-speed gearbox for road and track applications where positive shifts and a tight ratio spread matter. Final fitment is confirmed against your vehicle details.",
    shortDescription: "Synchronized gears with a 2,850 lb-ft torque rating and billet input.",
    availability: "In stock · 2 units ready to dispatch",
    image: closeRatio6Speed,
    specs: [
      "6-speed manual",
      "Close-ratio gearset",
      "2,850 lb-ft rating",
      "Billet input shaft",
      "Teflon sleeve included",
    ],
  },
  {
    slug: "10-speed-automatic-transmission",
    name: "10-Speed Automatic Transmission Assembly",
    category: "Transmissions",
    price: 4320,
    description:
      "A clean automatic assembly for modern replacement programs. Share your vehicle year and drivetrain layout so our team can verify electronics, bellhousing and cooler requirements.",
    shortDescription: "Complete automatic housing with torque converter and inspected valve body.",
    availability: "Quote required · Fitment check recommended",
    image: automatic10Speed,
    specs: [
      "10-speed automatic",
      "Torque converter included",
      "Inspected valve body",
      "Aluminum housing",
      "Vehicle-specific fitment",
    ],
  },
  {
    slug: "dual-plate-competition-clutch-kit",
    name: "Dual-Plate Competition Clutch Kit",
    category: "Transmissions",
    price: 640,
    description:
      "A balanced dual-plate clutch kit for responsive engagement without giving up street manners. A practical choice for torque upgrades and spirited use.",
    shortDescription: "235 mm organic discs with a 680 lb-ft maximum torque rating.",
    availability: "In stock · Same-day dispatch",
    image: dualPlateClutch,
    specs: [
      "235 mm twin-disc design",
      "Organic friction discs",
      "Steel pressure plate",
      "680 lb-ft maximum torque",
      "Release hardware included",
    ],
  },
  {
    slug: "limited-slip-differential-carrier",
    name: "Helical Limited-Slip Differential Carrier",
    category: "Transmissions",
    price: 1120,
    description:
      "A helical limited-slip carrier designed to improve traction without abrupt lockup. Have your final drive ratio ready and we will confirm the correct installation set.",
    shortDescription: "Machined steel carrier with smooth, progressive torque biasing.",
    availability: "In stock · 3 units ready to dispatch",
    image: limitedSlipDifferential,
    specs: [
      "Helical gear design",
      "Progressive torque bias",
      "Machined steel carrier",
      "Street and track suitable",
      "Ratio confirmation required",
    ],
  },
  {
    slug: "four-wheel-drive-transfer-case",
    name: "Four-Wheel-Drive Transfer Case Assembly",
    category: "Transmissions",
    price: 2240,
    description:
      "A rugged transfer case assembly for four-wheel-drive service and replacement programs. The chain drive and housing are inspected before listing.",
    shortDescription: "Rugged cast housing with inspected chain drive and output shafts.",
    availability: "Limited availability · Call to confirm",
    image: transferCase,
    specs: [
      "4WD transfer case",
      "Inspected chain drive",
      "Cast alloy housing",
      "Dual output shafts",
      "Vehicle-specific fitment",
    ],
  },
  {
    slug: "ball-bearing-turbocharger-assembly",
    name: "Ball-Bearing Turbocharger Assembly",
    category: "Other Parts",
    price: 2275,
    description:
      "A responsive turbocharger assembly for compact performance builds. Match your engine size, target power and exhaust flange before ordering.",
    shortDescription: "Ball-bearing core, 38 mm compressor and 1.0 bar reference target.",
    availability: "In stock · Same-day dispatch",
    image: turbocharger,
    specs: [
      "Ball-bearing center section",
      "38 mm compressor",
      "1.0 bar reference target",
      "Integrated heat shield",
      "Oil line kit available",
    ],
  },
  {
    slug: "adjustable-performance-coilover-kit",
    name: "Adjustable Performance Coilover Kit",
    category: "Other Parts",
    price: 1640,
    description:
      "A four-corner suspension kit for drivers who want controlled ride-height adjustment and a more composed chassis. Confirm platform and spring-rate requirements by phone.",
    shortDescription: "Adjustable damping and ride height with 30-step compression control.",
    availability: "In stock · 4 kits ready to dispatch",
    image: coiloverKit,
    specs: [
      "Four-corner kit",
      "30-step damping control",
      "Threaded ride-height adjustment",
      "Aluminum dampers",
      "Platform-specific spring rates",
    ],
  },
  {
    slug: "two-piece-performance-brake-rotor-caliper",
    name: "Two-Piece Performance Brake Rotor & Caliper Set",
    category: "Other Parts",
    price: 1860,
    description:
      "A ventilated two-piece brake package with a firm pedal feel and repeatable heat management. Supplied as a matched front-axle set.",
    shortDescription: "Drilled two-piece rotors paired with high-temperature calipers.",
    availability: "In stock · Same-day dispatch",
    image: brakeRotorCaliper,
    specs: [
      "Two-piece floating rotors",
      "Cross-drilled face",
      "High-temperature calipers",
      "Front axle set",
      "Pad compound options",
    ],
  },
  {
    slug: "chromoly-front-driveshaft",
    name: "Chromoly Front Driveshaft Assembly",
    category: "Other Parts",
    price: 780,
    description:
      "A balanced chromoly driveshaft for demanding street, utility and performance applications. Provide wheelbase and flange details for a proper fitment check.",
    shortDescription: "Balanced chromoly tube with serviceable universal joints.",
    availability: "Quote required · Made to specification",
    image: chromolyDriveshaft,
    specs: [
      "Chromoly steel tube",
      "Serviceable universal joints",
      "Balanced assembly",
      "Custom length options",
      "Flange details required",
    ],
  },
  {
    slug: "billet-aluminum-high-flow-intake-manifold",
    name: "Billet Aluminum High-Flow Intake Manifold",
    category: "Other Parts",
    price: 980,
    description:
      "A precision-machined intake manifold with smooth runners and practical service access. Designed for builders who are chasing consistent distribution and clean packaging.",
    shortDescription: "CNC-machined runners with high-flow port geometry.",
    availability: "In stock · 2 units ready to dispatch",
    image: billetIntakeManifold,
    specs: [
      "Billet aluminum construction",
      "High-flow runner design",
      "CNC-machined ports",
      "Throttle body flange included",
      "Engine-specific fitment",
    ],
  },
  {
    slug: "high-capacity-aluminum-radiator",
    name: "High-Capacity Aluminum Performance Radiator",
    category: "Other Parts",
    price: 560,
    description:
      "A high-capacity aluminum radiator for builds that generate more heat than a standard core can comfortably manage. Ask about hose routing and fan clearance.",
    shortDescription: "Polished end tanks, high-density core and workshop-ready fitment support.",
    availability: "In stock · Same-day dispatch",
    image: aluminumRadiator,
    specs: [
      "High-density aluminum core",
      "Polished end tanks",
      "Dual-row construction",
      "Fan clearance checked",
      "Vehicle-specific mounts",
    ],
  },
];

export const heroImage = heroWorkshop;

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
