export const QUIZ_QUESTIONS = [
  {
    id: "name",
    question: "What's your dog's name?",
    type: "text",
    placeholder: "e.g. Buddy",
  },
  {
    id: "gender",
    question: "What's [dogName]'s gender?",
    type: "select",
    options: ["Boy", "Girl"],
  },
  {
    id: "breed",
    question: "What's [dogName]'s breed?",
    type: "searchable-select",
    options: [
      "Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Malamute", "American Bulldog", "American Cocker Spaniel", "American Eskimo Dog", "American Foxhound", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Shepherd Dog", "Appenzeller Sennenhund", "Australian Cattle Dog", "Australian Shepherd", "Australian Terrier", "Basenji", "Basset Hound", "Beagle", "Bearded Collie", "Bedlington Terrier", "Belgian Malinois", "Belgian Sheepdog", "Belgian Tervuren", "Bernese Mountain Dog", "Bichon Frise", "Black and Tan Coonhound", "Bloodhound", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Briard", "Brittany", "Brussels Griffon", "Bull Terrier", "Bulldog", "Bullmastiff", "Cairn Terrier", "Canaan Dog", "Cane Corso", "Cardigan Welsh Corgi", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested", "Chinese Shar-Pei", "Chow Chow", "Clumber Spaniel", "Cocker Spaniel", "Collie", "Coton de Tulear", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Doberman Pinscher", "Dogue de Bordeaux", "English Cocker Spaniel", "English Foxhound", "English Setter", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher Mountain Dog", "Field Spaniel", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "German Pinscher", "German Shepherd", "German Shorthaired Pointer", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Harrier", "Havanese", "Ibizan Hound", "Icelandic Sheepdog", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Japanese Chin", "Keeshond", "Kerry Blue Terrier", "Komondor", "Kuvasz", "Labrador Retriever", "Lakeland Terrier", "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Mastiff", "Miniature Pinscher", "Miniature Schnauzer", "Mixed Breed", "Neapolitan Mastiff", "Newfoundland", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Parson Russell Terrier", "Pekingese", "Pembroke Welsh Corgi", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Plott", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Water Dog", "Pug", "Puli", "Pyrenean Shepherd", "Rat Terrier", "Rhodesian Ridgeback", "Rottweiler", "Saint Bernard", "Saluki", "Samoyed", "Schipperke", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Soft Coated Wheaten Terrier", "South Russian Ovcharka", "Spanish Water Dog", "Spinone Italiano", "Staffordshire Bull Terrier", "Standard Schnauzer", "Sussex Spaniel", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Toy Fox Terrier", "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "Whippet", "Wire Fox Terrier", "Wirehaired Pointing Griffon", "Xoloitzcuintli", "Yorkshire Terrier", "Other"
    ],
  },
  {
    id: "age",
    question: "How old is [dogName]?",
    type: "select",
    options: ["Puppy (0-6 months)", "Junior (6-18 months)", "Adult (2-7 years)", "Senior (8+ years)"],
  },
  {
    id: "environment",
    question: "Where do you live with [dogName]?",
    type: "select",
    options: ["Apartment", "House with small yard", "House with big yard", "Farm / Rural area"],
  },
  {
    id: "issue",
    question: "What's the primary challenge to solve with [dogName] first?",
    type: "grid-select",
    options: [
      { label: "Barking", icon: "Volume2" },
      { label: "Leash Pulling", icon: "Magnet" },
      { label: "Separation Anxiety", icon: "Clock" },
      { label: "Aggression", icon: "ShieldAlert" },
      { label: "Recall", icon: "MessageCircle" },
      { label: "Potty Training", icon: "Droplets" },
      { label: "Destruction / Chewing", icon: "Zap" },
      { label: "Jumping on People", icon: "ArrowUpCircle" },
      { label: "Fear of Strangers", icon: "UserMinus" },
      { label: "Resource Guarding", icon: "Lock" },
    ],
  },
  {
    id: "seriousness",
    question: "How serious is [dogName]'s behavior?",
    type: "select",
    options: ["Mild (Annoying)", "Moderate (Disrupting life)", "Severe (Dangerous/Stressful)"],
  },
  {
    id: "duration",
    question: "How long has this been happening with [dogName]?",
    type: "select",
    options: ["Less than a month", "1-6 months", "6-12 months", "Years"],
  },
  {
    id: "energy",
    question: "How would you describe [dogName]'s energy level?",
    type: "select",
    options: ["Low (Loves napping)", "Medium (Balanced)", "High (Always active)", "Extreme (Never tires)"],
  },
  {
    id: "attempts",
    question: "What have you already tried?",
    type: "multi-select",
    options: ["Group classes", "Private trainer", "YouTube tutorials", "Books", "Nothing yet"],
  },
  {
    id: "owner_experience",
    question: "How much experience do you have with dogs?",
    type: "select",
    options: ["First-time owner", "Had 1-2 dogs before", "Experienced owner", "Professional/Expert"],
  },
  {
    id: "commitment",
    question: "How much time can you spend daily training [dogName]?",
    type: "select",
    options: ["5-10 minutes", "15-30 minutes", "1 hour+", "As much as needed"],
  },
  {
    id: "outcome",
    question: "What's the #1 thing you want to achieve with [dogName]?",
    type: "grid-select",
    options: [
      { label: "Peaceful Walks", icon: "Magnet" },
      { label: "Off-Leash Freedom", icon: "Wind" },
      { label: "Quiet Home Office", icon: "VolumeX" },
      { label: "Guest Friendly", icon: "Users" },
      { label: "Stress-Free Travel", icon: "Plane" },
      { label: "Safe Socialization", icon: "ShieldCheck" },
    ],
  },
  {
    id: "life_change",
    question: "How would your life change if [dogName]'s problem was fixed?",
    type: "select",
    options: [
      "I'd feel more confident as an owner",
      "We'd go on more adventures together",
      "My home would be less stressful",
      "I'd be proud of my dog in public"
    ],
  },
  {
    id: "email",
    question: "Where should we send [dogName]'s custom transformation roadmap?",
    type: "email",
    placeholder: "your@email.com",
    footer: "Join 12,000+ owners who achieved their goals this year."
  },
];
