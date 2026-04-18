import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  Smile, 
  ShieldCheck, 
  Baby, 
  HeartPulse, 
  Scissors, 
  Layers, 
  Grid, 
  Zap, 
  Camera, 
  Search, 
  Clock, 
  PhoneCall 
} from 'lucide-react';

export const services = [
  {
    id: 1,
    slug: 'general-dentistry',
    name: 'General Dentistry',
    icon: Stethoscope,
    category: 'Preventive',
    shortDescription: 'Comprehensive dental check-ups and cleanings to keep your smile healthy.',
    fullDescription: 'Our general dentistry services are the foundation of a healthy smile. We focus on prevention, early detection, and treatment of common dental issues to ensure long-term oral health for patients of all ages.',
    benefits: [
      'Early detection of cavities',
      'Professional cleaning and scaling',
      'Personalized oral hygiene advice',
      'Prevention of gum diseases'
    ],
    procedure: [
      'Initial consultation and history taking',
      'Comprehensive oral examination',
      'Digital X-rays if necessary',
      'Professional scaling and polishing',
      'Fluoride application for protection'
    ],
    whoNeedsIt: 'Everyone! We recommend a general check-up every 6 months to maintain optimal oral health.',
    faqs: [
      { question: 'How often should I visit the dentist?', answer: 'We recommend visiting every 6 months for a routine check-up and cleaning.' },
      { question: 'Is a dental check-up painful?', answer: 'Not at all. A routine check-up is a painless process focused on examination and cleaning.' }
    ],
    relatedServices: [2, 13, 15]
  },
  {
    id: 2,
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    icon: Sparkles,
    category: 'Cosmetic',
    shortDescription: 'Brighten your smile with our professional teeth whitening treatments.',
    fullDescription: 'Professional teeth whitening is a safe and effective way to remove stains and discoloration, giving you a brighter, more confident smile in just one visit.',
    benefits: [
      'Immediate results',
      'Safe for tooth enamel',
      'Boosts self-confidence',
      'Long-lasting brightness'
    ],
    procedure: [
      'Shade assessment',
      'Protection of gums and soft tissues',
      'Application of whitening gel',
      'Activation with specialized light',
      'Final rinse and post-care instructions'
    ],
    whoNeedsIt: 'Individuals with stained or discolored teeth due to coffee, tea, smoking, or aging.',
    faqs: [
      { question: 'Is teeth whitening safe?', answer: 'Yes, when performed by a professional, it is completely safe for your teeth and gums.' },
      { question: 'How long do the results last?', answer: 'Results can last from 6 months to 2 years depending on your lifestyle and oral hygiene.' }
    ],
    relatedServices: [9, 1]
  },
  {
    id: 3,
    slug: 'dental-implants',
    name: 'Dental Implants',
    icon: Activity,
    category: 'Restorative',
    shortDescription: 'Permanent solutions for missing teeth that look and feel natural.',
    fullDescription: 'Dental implants are the gold standard for replacing missing teeth. They provide a stable, long-term solution that functions just like natural teeth.',
    benefits: [
      'Natural appearance and feel',
      'Prevents bone loss',
      'Improves speech and eating',
      'Durable and long-lasting'
    ],
    procedure: [
      'Detailed 3D scan and planning',
      'Implant placement surgery',
      'Healing period (Osseointegration)',
      'Abutment placement',
      'Custom crown attachment'
    ],
    whoNeedsIt: 'Anyone with one or more missing teeth who wants a permanent, natural-looking replacement.',
    faqs: [
      { question: 'How long does the implant process take?', answer: 'The entire process can take 3 to 6 months to allow for proper healing and integration.' },
      { question: 'Are dental implants painful?', answer: 'The procedure is performed under local anesthesia, so you won\'t feel pain during the surgery.' }
    ],
    relatedServices: [7, 8]
  },
  {
    id: 4,
    slug: 'orthodontics-braces',
    name: 'Orthodontics & Braces',
    icon: Grid,
    category: 'Orthodontic',
    shortDescription: 'Straighten your teeth and correct your bite with modern orthodontic solutions.',
    fullDescription: 'We offer a range of orthodontic treatments, from traditional metal braces to clear aligners, to help you achieve a perfectly aligned smile.',
    benefits: [
      'Improved facial aesthetics',
      'Better bite function',
      'Easier to clean straight teeth',
      'Prevents future dental issues'
    ],
    procedure: [
      'Orthodontic consultation and scans',
      'Custom treatment plan',
      'Fitting of braces or aligners',
      'Regular adjustment visits',
      'Retention phase with retainers'
    ],
    whoNeedsIt: 'Children and adults with crooked teeth, gaps, or bite misalignments.',
    faqs: [
      { question: 'What is the best age for braces?', answer: 'While often started in early teens, orthodontics can be successful at any age.' },
      { question: 'How long does treatment take?', answer: 'Average treatment time is 12 to 24 months, depending on the complexity.' }
    ],
    relatedServices: [10, 1]
  },
  {
    id: 5,
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    icon: HeartPulse,
    category: 'Restorative',
    shortDescription: 'Save your natural tooth and eliminate pain with painless RCT.',
    fullDescription: 'Root Canal Treatment (RCT) is a procedure used to save a tooth that is badly decayed or becomes infected. It involves removing the damaged area of the tooth, cleaning it, and sealing it.',
    benefits: [
      'Eliminates tooth pain',
      'Saves the natural tooth',
      'Prevents spread of infection',
      'Restores normal biting force'
    ],
    procedure: [
      'X-ray and diagnosis',
      'Local anesthesia for comfort',
      'Removal of infected pulp',
      'Cleaning and shaping of canals',
      'Filling and sealing the tooth'
    ],
    whoNeedsIt: 'Patients experiencing severe toothache, sensitivity to heat/cold, or swelling around a tooth.',
    faqs: [
      { question: 'Is root canal painful?', answer: 'Modern RCT is as comfortable as getting a filling, thanks to advanced anesthesia.' },
      { question: 'How many visits are required?', answer: 'Most root canals can be completed in 1 or 2 visits.' }
    ],
    relatedServices: [7, 12]
  },
  {
    id: 6,
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    icon: Baby,
    category: 'Pediatric',
    shortDescription: 'Specialized dental care for children in a fun and friendly environment.',
    fullDescription: 'We love kids! Our pediatric services are designed to make dental visits fun and educational, setting the foundation for a lifetime of healthy smiles.',
    benefits: [
      'Child-friendly environment',
      'Prevention of early childhood caries',
      'Positive dental experiences',
      'Growth and development monitoring'
    ],
    procedure: [
      'Gentle introduction to the dentist',
      'Fun oral examination',
      'Cleaning and fluoride treatment',
      'Sealants for cavity prevention',
      'Parental guidance on nutrition'
    ],
    whoNeedsIt: 'Children from their first tooth up to their teenage years.',
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'By their first birthday or when their first tooth appears.' },
      { question: 'How can I prepare my child for their visit?', answer: 'Keep it positive! Read books about the dentist and explain it as a fun adventure.' }
    ],
    relatedServices: [1, 13]
  },
  {
    id: 7,
    slug: 'crowns-and-bridges',
    name: 'Crowns & Bridges',
    icon: Layers,
    category: 'Restorative',
    shortDescription: 'Restore damaged or missing teeth with high-quality crowns and bridges.',
    fullDescription: 'Crowns and bridges are fixed prosthetic devices that are cemented onto existing teeth or implants to restore function and aesthetics.',
    benefits: [
      'Restores tooth strength',
      'Natural looking results',
      'Prevents teeth from shifting',
      'Improves chewing and speech'
    ],
    procedure: [
      'Tooth preparation',
      'Digital or physical impressions',
      'Temporary crown placement',
      'Custom fabrication in lab',
      'Final fitting and cementation'
    ],
    whoNeedsIt: 'Patients with broken, weakened, or missing teeth.',
    faqs: [
      { question: 'How long do crowns last?', answer: 'With good care, crowns can last 10 to 15 years or even longer.' },
      { question: 'What materials are used?', answer: 'We use high-quality ceramic, porcelain, or zirconia for the best results.' }
    ],
    relatedServices: [3, 5]
  },
  {
    id: 8,
    slug: 'dentures',
    name: 'Dentures',
    icon: Smile,
    category: 'Restorative',
    shortDescription: 'Comfortable and natural-looking partial or full dentures.',
    fullDescription: 'Dentures are removable replacements for missing teeth and surrounding tissues. We offer both full and partial dentures designed for comfort and a natural look.',
    benefits: [
      'Restores facial structure',
      'Improves ability to eat and speak',
      'Affordable tooth replacement',
      'Custom-fitted for comfort'
    ],
    procedure: [
      'Initial impressions and measurements',
      'Trial fitting with wax models',
      'Adjustments for bite and aesthetics',
      'Final denture fabrication',
      'Fitting and patient education'
    ],
    whoNeedsIt: 'Patients who have lost several or all of their teeth.',
    faqs: [
      { question: 'How do I care for my dentures?', answer: 'Clean them daily with a soft brush and soak them in a cleaning solution overnight.' },
      { question: 'Will dentures change how I speak?', answer: 'It may take a little practice, but you will soon speak clearly and naturally.' }
    ],
    relatedServices: [3, 7]
  },
  {
    id: 9,
    slug: 'veneers-smile-makeover',
    name: 'Veneers & Smile Makeover',
    icon: Zap,
    category: 'Cosmetic',
    shortDescription: 'Transform your smile with custom-made porcelain veneers.',
    fullDescription: 'A smile makeover uses a combination of cosmetic procedures, primarily veneers, to create the perfect smile you\'ve always dreamed of.',
    benefits: [
      'Corrects multiple imperfections',
      'Stain-resistant material',
      'Minimal tooth preparation',
      'Dazzling, uniform results'
    ],
    procedure: [
      'Smile design consultation',
      'Minimal tooth preparation',
      'Precision impressions',
      'Custom veneer fabrication',
      'Bonding and final polishing'
    ],
    whoNeedsIt: 'Anyone looking to correct gaps, chips, stains, or misshapen teeth for a "Hollywood" smile.',
    faqs: [
      { question: 'Are veneers permanent?', answer: 'Veneers are a long-term solution but may need replacement after 10-15 years.' },
      { question: 'Do veneers ruin your natural teeth?', answer: 'No, only a very thin layer of enamel is removed to ensure a perfect fit.' }
    ],
    relatedServices: [2, 13]
  },
  {
    id: 10,
    slug: 'gum-disease-treatment',
    name: 'Gum Disease Treatment',
    icon: ShieldCheck,
    category: 'Restorative',
    shortDescription: 'Comprehensive care for gingivitis and periodontitis.',
    fullDescription: 'Healthy gums are the foundation of a healthy mouth. We provide specialized treatments to stop and reverse the effects of gum disease.',
    benefits: [
      'Prevents tooth loss',
      'Eliminates bad breath',
      'Reduces gum bleeding',
      'Improves overall health'
    ],
    procedure: [
      'Periodontal screening',
      'Deep scaling and root planing',
      'Antibiotic therapy if needed',
      'Laser gum treatment',
      'Maintenance and follow-up'
    ],
    whoNeedsIt: 'Patients with bleeding, swollen, or receding gums.',
    faqs: [
      { question: 'What causes gum disease?', answer: 'Mainly plaque buildup due to inadequate oral hygiene.' },
      { question: 'Can gum disease be cured?', answer: 'Gingivitis can be reversed; periodontitis can be managed and controlled.' }
    ],
    relatedServices: [13, 1]
  },
  {
    id: 11,
    slug: 'tooth-extraction',
    name: 'Tooth Extraction',
    icon: Scissors,
    category: 'Restorative',
    shortDescription: 'Safe and painless removal of damaged or wisdom teeth.',
    fullDescription: 'While we always try to save teeth, sometimes extraction is necessary for your overall health. We ensure the process is as comfortable as possible.',
    benefits: [
      'Relieves chronic pain',
      'Prevents spread of infection',
      'Creates space for orthodontics',
      'Resolves wisdom tooth issues'
    ],
    procedure: [
      'X-ray assessment',
      'Local anesthesia',
      'Gentle tooth removal',
      'Post-extraction care instructions',
      'Discussion of replacement options'
    ],
    whoNeedsIt: 'Patients with severely decayed teeth, impacted wisdom teeth, or overcrowding.',
    faqs: [
      { question: 'Is extraction painful?', answer: 'You will feel pressure but no pain during the procedure due to anesthesia.' },
      { question: 'What is the recovery time?', answer: 'Most patients recover within 3 to 7 days.' }
    ],
    relatedServices: [3, 7]
  },
  {
    id: 12,
    slug: 'dental-fillings',
    name: 'Dental Fillings',
    icon: ShieldCheck,
    category: 'Restorative',
    shortDescription: 'Tooth-colored fillings to restore decayed teeth.',
    fullDescription: 'We use modern, tooth-colored composite resins to fill cavities, ensuring your restoration is both durable and invisible.',
    benefits: [
      'Matches natural tooth color',
      'Bonds directly to tooth',
      'Prevents further decay',
      'Mercury-free materials'
    ],
    procedure: [
      'Removal of decayed portion',
      'Cleaning and preparation',
      'Layering of composite resin',
      'Hardening with specialized light',
      'Shaping and polishing'
    ],
    whoNeedsIt: 'Patients with small to medium-sized cavities.',
    faqs: [
      { question: 'How long do composite fillings last?', answer: 'Typically 5 to 10 years with good oral hygiene.' },
      { question: 'Will people see my fillings?', answer: 'No, we match the color perfectly to your natural tooth.' }
    ],
    relatedServices: [1, 5]
  },
  {
    id: 13,
    slug: 'scaling-and-polishing',
    name: 'Scaling & Polishing',
    icon: Sparkles,
    category: 'Preventive',
    shortDescription: 'Professional cleaning to remove plaque and tartar.',
    fullDescription: 'Scaling and polishing is a routine procedure to remove plaque and tartar that regular brushing can\'t reach, leaving your teeth smooth and clean.',
    benefits: [
      'Prevents gum disease',
      'Removes surface stains',
      'Freshens breath',
      'Smoother tooth surfaces'
    ],
    procedure: [
      'Ultrasonic scaling',
      'Manual fine scaling',
      'Professional polishing',
      'Flossing and rinsing',
      'Oral hygiene demonstration'
    ],
    whoNeedsIt: 'Everyone! Recommended every 6 months for a healthy mouth.',
    faqs: [
      { question: 'Does scaling weaken teeth?', answer: 'No, it only removes harmful deposits from the surface.' },
      { question: 'Will my teeth be sensitive after?', answer: 'Some mild sensitivity is normal for 24 hours.' }
    ],
    relatedServices: [1, 10]
  },
  {
    id: 14,
    slug: 'emergency-dental-care',
    name: 'Emergency Dental Care',
    icon: PhoneCall,
    category: 'Preventive',
    shortDescription: 'Immediate care for dental pain, accidents, and emergencies.',
    fullDescription: 'Dental emergencies can happen anytime. We prioritize emergency cases to provide immediate relief and prevent further complications.',
    benefits: [
      'Rapid pain relief',
      'Prevents tooth loss',
      'Same-day appointments',
      'Expert trauma care'
    ],
    procedure: [
      'Immediate triage',
      'Emergency pain management',
      'Diagnostic X-rays',
      'Stabilization of the issue',
      'Follow-up treatment plan'
    ],
    whoNeedsIt: 'Anyone experiencing severe pain, a knocked-out tooth, or dental trauma.',
    faqs: [
      { question: 'What counts as a dental emergency?', answer: 'Severe pain, bleeding, swelling, or a broken/knocked-out tooth.' },
      { question: 'Do you take walk-ins for emergencies?', answer: 'Yes, we prioritize emergency cases.' }
    ],
    relatedServices: [5, 11]
  },
  {
    id: 15,
    slug: 'dental-x-rays',
    name: 'Dental X-rays & Diagnosis',
    icon: Camera,
    category: 'Preventive',
    shortDescription: 'Digital X-rays for precise diagnosis and treatment planning.',
    fullDescription: 'We use low-radiation digital X-rays to see what\'s happening beneath the surface, allowing for early detection and accurate treatment.',
    benefits: [
      '90% less radiation than film',
      'Instant high-quality images',
      'Early detection of issues',
      'Better patient education'
    ],
    procedure: [
      'Protective lead apron',
      'Placement of digital sensor',
      'Quick image capture',
      'Immediate review with doctor',
      'Digital storage for records'
    ],
    whoNeedsIt: 'New patients and those needing specific diagnostic checks.',
    faqs: [
      { question: 'Are dental X-rays safe?', answer: 'Yes, digital X-rays use extremely low levels of radiation.' },
      { question: 'How often do I need X-rays?', answer: 'Typically once a year for routine checks, or as needed for specific issues.' }
    ],
    relatedServices: [1, 3, 5]
  }
];
