export interface DepartmentData {
  id: string;
  name: string;
  fullName: string;
  heroImage?: string;
  overview: string;
  academicCalendars: { name: string; url: string }[];
  courseMaterials: { name: string; link: string }[];
  clubs: { name: string; description?: string; image?: string }[];
  vision: string;
  mission: string[];
  hod: {
    name: string;
    image?: string;
    message: string;
    designation: string;
    stats?: { label: string; value: string | number }[];
    achievements?: string[];
  };
  laboratories: string[];
  publications?: { AcademicYear: string; url: string }[];
  achievements: string[];
  faculty: FacultyMember[];
  peos: string[];
  pos: string[];
  psos: string[];
  pgPsos?: string[];
  departmentCommittee?: { sno: number; name: string; designation: string; }[];
  disciplinaryCommittee?: { sno: number; name: string; designation: string; }[];
  consultancyProjects?: { faculty: string; title: string; fundingAgency: string; reference?: string; date: string; amountInLakhs?: number; duration?: string; }[];
  researchProjects?: { faculty: string[]; title: string; fundingAgency: string; sanctionDate: string; duration: string; }[];
  mous?: { name: string; duration: string; activities: string; }[];
}

export interface FacultyMember {
  sno: number;
  name: string;
  registrationNumber: string;
  designation: string;
  image?: string;
  qualification?: string;
  experience?: string;
  email?: string;
  researchInterests?: string[];
}

export const departments: Record<string, DepartmentData> = {
  "cse": {
    id: "cse",
    name: "CSE",
    fullName: "Computer Science and Engineering",

    overview: `Department of Computer Science and Engineering was a part of the Vignan Institute of Technology and Science right from its inception in 1999 with an intake of 60. The strength was increased to 180 progressively. The Department has been offering Post graduate programme in Computer Science and Engineering since 2009 with an intake of 18.

    B.Tech (Computer Science & Engineering): 180
    M.Tech(Computer Science & Engineering) : 18`,

    vision: `To emerge as a premier centre for education and research in computer science and engineering and in transforming students into innovative professionals of contemporary and future technologies to cater for the global needs of human resources for IT and ITES companies.`,

    mission: [
      "To produce excellent computer science professionals by imparting quality training, hands-on-experience and value based education.",
      "To strengthen links with industry through collaborative partnerships in research & product development and student internships.",
      "To promote research based projects and activities among the students in the emerging areas of technology.",
      "To explore opportunities for skill development in the application of computer science among rural and under privileged population."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. G. Rajavikram",
      image: "/DepartmentPage/HodProfiles/CSE.jpg",
      designation: "Associate Professor & HOD",
      message: `Dr G.Rajavikram has completed his PhD from JNTU Hyderabad in 2021. He completed his M.Tech (CSE) from JNTU CEH in 2010 and completed his B.Tech (CSE) from Kshatriya College of Engineering, Nizamabad in 2006. He has a total of teaching, research and administrative experience of 16 years. His research interests include Wireless Sensor Networks, IOT and Network Security.`,
      stats: [
        { label: "Journal Publications", value: 11 },
        { label: "Conferences Presented", value: 5 },
        { label: "Books Published", value: 1 },
        { label: "Book Chapters Published", value: 2 }
      ],
      achievements: [
        "Received “YUVA ACHARYA AWARD”from Bharat Education Excellence Awards inSeptember,2021.",
        "Qualified UGC-NET for Lectureship in November, 2012.",
        "Qualified GATE-2016, 2014. Secured 542 score (AIR 3002) in GATE 2014.",
        "NPTEL ELITE SILVER certificate in “PROGRAMMING IN JAVA” course, Sep – Dec 2020.",
        "BEST TEACHER AWARD at Vignan Institute Of Technology Of Science, 2012.",
        "BEST PAPER PRESENTATION AWARD at ICICSE–2014 International Conference.",
        "Delivered Guest Lecture on “Recent IT Trends” at Lingaraj Appa Engineering College, Bidar , Karnataka- India",
        "Resource Person for a workshop on “Advanced Java Technologies” at VITS, 2010.",
        "Administrative roles executed – Head of the Department , Dean -IT Services"
      ]
    },

    publications:[
      {
        AcademicYear:"2022-2023",
        url:"https://drive.google.com/file/d/17ctdT5TGaotMKeQUsRBZBRk_OGUYgzpa/view"
      },
      {
        AcademicYear:"2021-2022",
        url:"https://drive.google.com/file/d/1dkyo4GbU18yVE9m32RbTjQ7yX0T7ugT6/view"
      },
      {
        AcademicYear:"2020-2021",
        url:"https://vignanits.ac.in/wp-content/uploads/2021/10/CSE_AY2020-2021.pdf"
      },
      {
        AcademicYear:"2019-2020",
        url:"https://vignanits.ac.in/wp-content/uploads/2021/10/CSE_AY2019-2020.pdf"
      },
      {
        AcademicYear:"2018-2019",
        url:"/Pdfs/Publications/CSE/CSE_AY2018-2019.pdf"
      },
      {
        AcademicYear:"2017-2018",
        url:"/Pdfs/Publications/CSE/CSE_AY2017-2018.pdf"
      },
      {
        AcademicYear:"2016-2017",
        url:"/Pdfs/Publications/CSE/CSE_AY2016-2017.pdf"
      },
    ],

    consultancyProjects: [
    {
      faculty: "Mr. G. Raja Vikram",
      title: "Vignan Information Management System",
      fundingAgency: "Lavu Educational Society",
      date: "12/02/2018",
      amountInLakhs: 2,
      duration: "1 Year"
    },
    {
      faculty: "Mr. G. Raja Vikram",
      title: "Vignan IT Management System",
      fundingAgency: "Lavu Educational Society",
      date: "05/12/2017",
      amountInLakhs: 1.5,
      duration: "6 Months"
    },
    {
      faculty: "Mr. S. Kranthi Reddy",
      title: "Upgradation of College Website",
      fundingAgency: "Lavu Educational Society",
      date: "12/09/2017",
      amountInLakhs: 1,
      duration: "2 Months"
    },
    {
      faculty: "Mr. B. V. Chowdary",
      title: "Technical Support and Infrastructure Facility to TCS iON",
      fundingAgency: "TCS iON",
      reference: "CPGET080719TS27",
      date: "07/07/2019",
      amountInLakhs: 4.5,
      duration: "3 Months"
    }
  ],

    laboratories: [
      "IT Workshop Lab",
      "Problem Solving Lab-I & II",
      "Data Structures Lab",
      "Java Programming Lab",
      "Database Management Systems Lab",
      "Operating Systems Lab",
      "C++ Programming Lab",
      "Computer Networks Lab",
      "Cryptography and Network Security Lab",
      "Design and Analysis of Algorithms Lab",
      "Software Engineering Lab",
      "Web Technologies Lab",
      "Linux Programming Lab",
      "Data Mining Lab",
      "Advanced Algorithms Lab"
    ],
    achievements: [],

    faculty: [
      { sno: 1, name: "Dr. GANDHAM RAJAVIKRAM", registrationNumber: "9283-170102-130548", designation: "Associate Professor & HOD" },
      { sno: 2, name: "Dr. M V M KUAR KUKUNURI", registrationNumber: "92150401-162534", designation: "Professor" },
      { sno: 3, name: "Dr. SRINU BANOTHU", registrationNumber: "76150405-161531", designation: "Associate Professor" },
      { sno: 4, name: "Dr. JANARDHAN GUNDEBOINA", registrationNumber: "94150402-130707", designation: "Assistant Professor" },
      { sno: 5, name: "Dr. MURALIDHAR PANTULA", registrationNumber: "9606-210306-101023", designation: "Associate Professor" },
      { sno: 6, name: "Dr. V RAMAKRISHNA BHATTIPROLU", registrationNumber: "6268-241129-164609", designation: "Associate Professor" },
      { sno: 7, name: "SRIANJANEYA NIMMAKURI", registrationNumber: "0282-150408-130636", designation: "Assistant Professor" },
      { sno: 8, name: "GANTLA HARISH REDDY", registrationNumber: "62150407-134535", designation: "Assistant Professor" },
      { sno: 9, name: "KUTUMBA RAO NAMA", registrationNumber: "19150406-124310", designation: "Assistant Professor" },
      { sno: 10, name: "PRASAD YADAV BELDE", registrationNumber: "5164-150409-152040", designation: "Assistant Professor" },
      { sno: 11, name: "KALLAM REDDY SUDHA", registrationNumber: "2078-150409-160129", designation: "Assistant Professor" },
      { sno: 12, name: "ARCHANA MANNE", registrationNumber: "6114-150410-104221", designation: "Assistant Professor" },
      { sno: 13, name: "SANDHI KRANTHI REDDY", registrationNumber: "0707-150410-140629", designation: "Assistant Professor" },
      { sno: 14, name: "PALLAPOTHU KIRAN KUMAR", registrationNumber: "2077-150414-110113", designation: "Assistant Professor" },
      { sno: 15, name: "SATTUR SOUJANYA", registrationNumber: "5236-150416-161902", designation: "Assistant Professor" },
      { sno: 16, name: "VIVEKREDDY AMBATI", registrationNumber: "0515-150425-145944", designation: "Assistant Professor" },
      { sno: 17, name: "REPALLE CHAITANYA KUMAR", registrationNumber: "6246-150425-165730", designation: "Assistant Professor" },
      { sno: 18, name: "NAGA SUNEETHA", registrationNumber: "0158-150426-203558", designation: "Assistant Professor" },
      { sno: 19, name: "BANOTHU SUNEETHA", registrationNumber: "2821-160120-153701", designation: "Assistant Professor" },
      { sno: 20, name: "PAILLA THIRAMAL REDDY", registrationNumber: "0654-160125-130934", designation: "Assistant Professor" },
      { sno: 21, name: "VENKATA KISHORE KONIKI", registrationNumber: "7665-160209-165131", designation: "Assistant Professor" },
      { sno: 22, name: "KANCHOJU RAMALINGACHARY", registrationNumber: "9092-160310-113150", designation: "Assistant Professor" },
      { sno: 23, name: "RAVINDER L C", registrationNumber: "3775-160320-162447", designation: "Assistant Professor" },
      { sno: 24, name: "SANTOSH ORUSU", registrationNumber: "6470-160529-200043", designation: "Assistant Professor" },
      { sno: 25, name: "YERROLLA PRASAD GNANENDRA", registrationNumber: "8069-170121-120512", designation: "Assistant Professor" },
      { sno: 26, name: "KODARU SUMANA", registrationNumber: "9656-170125-124409", designation: "Assistant Professor" },
      { sno: 27, name: "SUDINI PRIYANKA", registrationNumber: "9061-170129-101816", designation: "Assistant Professor" },
      { sno: 28, name: "RANGANA MAHESH", registrationNumber: "7769-180820-182507", designation: "Assistant Professor" },
      { sno: 29, name: "SATEESH CHERUVUKOMMU", registrationNumber: "9093-200108-112407", designation: "Assistant Professor" },
      { sno: 30, name: "RAMYA BANDA", registrationNumber: "6636-201109-104702", designation: "Assistant Professor" },
      { sno: 31, name: "RAGHAVENDRA BEJAVADA", registrationNumber: "6419-211101-174432", designation: "Assistant Professor" },
      { sno: 32, name: "DEEPTHI KAMIDI", registrationNumber: "2934-220707-110300", designation: "Assistant Professor" },
      { sno: 33, name: "RANJITH PONNAM", registrationNumber: "2065-220707-123908", designation: "Assistant Professor" },
      { sno: 34, name: "PITHANI NAGAMANI", registrationNumber: "8390-230412-201626", designation: "Assistant Professor" },
      { sno: 35, name: "KOTAMRAJU JAYASRIDEVI", registrationNumber: "4430-231021-121641", designation: "Assistant Professor" },
      { sno: 36, name: "MADDINENI VIJAYA SANTHI", registrationNumber: "1853-240214-184343", designation: "Assistant Professor" },
      { sno: 37, name: "BONAM SWATHI", registrationNumber: "5627-150408-125128", designation: "Assistant Professor" },
      { sno: 38, name: "KRISHNA PRASAD DHONDI", registrationNumber: "2344-150408-170159", designation: "Assistant Professor" },
      { sno: 39, name: "KOMATI SRINIVAS", registrationNumber: "9080-150418-140016", designation: "Assistant Professor" },
      { sno: 40, name: "VENKATA SATYA SUBRAMANYA PAVAN LANKA LAKSHMI NARAYANA BALAJI", registrationNumber: "1811-220905-191726", designation: "Assistant Professor" },
      { sno: 41, name: "SURESH NANNURI", registrationNumber: "4315-221214-114042", designation: "Assistant Professor" },
      { sno: 42, name: "MOGILI SIVA", registrationNumber: "8643-230412-193954", designation: "Assistant Professor" },
      { sno: 43, name: "PEDAPATI VEERABABU", registrationNumber: "6203-240213-124327", designation: "Assistant Professor" },
      { sno: 44, name: "AKULA SANDEEP KUMAR", registrationNumber: "7380-240608-143920", designation: "Assistant Professor" }
    ],

departmentCommittee: [
  { sno: 1, name: "Dr.G.Rajavikram, HOD", designation: "Chairman" },
  { sno: 2, name: "Dr.K.ShahuChatrapati, Professor, JNTUCEH-Manthani", designation: "Special Invitee" },
  { sno: 3, name: "Mr.Pratap Reddy, IT Project Manager, TCS", designation: "Special Invitee" },
  { sno: 4, name: "Dr.O.Nagesh,Professor", designation: "Member" },
  { sno: 5, name: "Dr.G.Janardhan,Associate Professor", designation: "Member" },
  { sno: 6, name: "Dr.P.Laxmikanth,Associate Professor", designation: "Member" },
  { sno: 7, name: "Mr.N.Srianajaneya,Associate Professor", designation: "Member" }
],

    disciplinaryCommittee: [
      { sno: 1, name: "Dr. G Raja Vikram", designation: "Chairman" },
      { sno: 2, name: "Dr. O.Sri Nagesh", designation: "Member" },
      { sno: 3, name: "Dr. G Janardhan", designation: "Member" },
      { sno: 4, name: "Mr.N Srianjaneya", designation: "Member" }
    ],

    researchProjects: [
    {
      faculty: [
        "Dr. Vijayalaxmi Biradar",
        "Mrs. Anuradha Chavali",
        "Mr. S. Kranthi Reddy"
      ],
      title: "Testing Optimal Asset Allocation Strategy for 60-70 years old in the US",
      fundingAgency: "Saint Peter’s University, New Jersey, USA",
      sanctionDate: "22/11/2019",
      duration: "1 Year"
    }
  ],

  mous: [
    { name: "S-Infinity Solutions", duration: "5 Years", activities: "Research and Consultancy Projects" },
    { name: "Voidmain Technologies", duration: "3 Years", activities: "Internships" },
    { name: "CBCRUNCH Technologies", duration: "3 Years", activities: "Internships" },
    { name: "IBM India Limited", duration: "3 Years", activities: "Training Programmes" },
    { name: "CISCO Networking Academy", duration: "10 Years", activities: "Certification Course" },
    { name: "International Institute of Information Technology, Hyderabad", duration: "10 Years", activities: "Certification Course" },
    { name: "Infosys Limited, Bangalore", duration: "2 Years", activities: "Infosys Campus Connect Program" }
  ],

    peos: [
      "To create and sustain a community of learning in which students acquire knowledge and apply in their concerned fields with due consideration for ethical, ecological, and economic issues.",
      "To provide knowledge based services so as to meet the needs of the society and industry.",
      "To make the students understand, design and implement the concepts in multiple arenas.",
      "To educate the students in disseminating the research findings with good soft skills so as to become successful entrepreneurs."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Professional Skills: Learn the basic concepts of Computer Science and Engineering and to apply them to various areas, like Data Structures, Operating Systems, Computer Organization, Computer Networks, Information Security etc., in the design and implementation of complex systems.",
      "Problem-Solving Skills : Solutions to complex Computer Science and Engineering problems, using latest hardware and software tools, along with analytical skills to arrive at cost effective and appropriate solutions.",
      "Entrepreneurship skills and career management : Social-awareness & environmental-wisdom along with ethical responsibility to lead a successful career and to sustain passion and zeal for real-world applications using optimal resources as an Entrepreneur."
    ],

    pgPsos: [
      "To deliver graduates to design and implement solutions for rapidly changing computing problems and information system environments and lifelong learning to adapt innovation.",
      "Analyze software products, processes in a systematic way by applying problem solving skills and employable in product-oriented Industry.",
      "Ability to take up higher studies, Research & Development and Entrepreneurships in the modern computing environment."
    ],
    
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "cse-aiml": {
    id: "cse-aiml",
    name: "CSE (AI & ML)",
    fullName: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",

    overview: `Department of Artificial intelligence and Machine Learning was started in the year 2020. Artificial intelligence and Machine Learning is field of computer science used to design models with help of Structured, semi-structured and unstructured data to solve complex problems. AI & ML is used in different areas such as Image Recognition, Automatic Language Translation, Speech Recognition, Product Recommendations, Self Driving Cars, Email Spam and Malware Filtering etc.`,

    vision: `To foster collaborative and diverse community of Artificial Intelligence and Machine Learning experts who work together to advance the state of the art and address major societal challenges.`,

    mission: [
      "To evolve as centre for academic excellence in learning through creative and modern teaching practices."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. J.R.V. Jeny",
      designation: "Professor & HOD",
      image: "/DepartmentPage/HodProfiles/CSE(AIML).jpg",
      message: `Dr. J.R.V. Jeny has completed her Ph.D from Manonmaniam Sundaranar University in 2016. She completed M.E (CSE) from Annamalai University in 2005 and completed B.E (CSE) from Periyar Maniammai College of Technology for Women in 1997. She has a total teaching, experience of 23 years. Her research interests include Wireless Sensor Networks, IOT and Network Security.`,
      stats: [
        { label: "Patents Published", value: 4 },
        { label: "Scopus Indexed Papers", value: 5 },
        { label: "Conferences", value: 8 },
        { label: "IEEE International Conferences", value: 4 },
        { label: "Peer Reviewed Journal Publications", value: 15 },
        { label: "Book Chapters Published", value: 1 }
      ],
      achievements: [
        "Received Lady Engineer award from institution of engineers, 2022",
        "Received Rs. 40,000 funding from ICMR for two days national level seminar on “Deep learning for cancer diagnosis using python”, 2018"
      ]
    },

    laboratories: [
      "AI & ML Lab",
      "Deep Learning Lab",
      "Natural Language Processing Lab",
      "Computer Vision Lab",
      "IDEA Lab (Multidisciplinary Research)"
    ],

    faculty: [
      { sno: 1, name: "Dr. RETHNA VIRGIL JENY", registrationNumber: "4768-160219-134349", designation: "ASSOCIATE PROFESSOR & HOD" },
      { sno: 2, name: "Dr. RAMA KRISHNA REDDY", registrationNumber: "61150407-120333", designation: "ASSISTANT PROFESSOR" },
      { sno: 3, name: "Dr. VENKATA SRINIVASULU BYSANI", registrationNumber: "7449-220906-020844", designation: "ASSOCIATE PROFESSOR" },
      { sno: 4, name: "Dr. NAGULAPALLI LINGAREDDY", registrationNumber: "5504-220708-143008", designation: "ASSISTANT PROFESSOR" },
      { sno: 5, name: "RAPOLU PRAVEEN KUMAR", registrationNumber: "33150407-115931", designation: "ASSISTANT PROFESSOR" },
      { sno: 6, name: "VINEELA MADIREDDY", registrationNumber: "46150330-215312", designation: "ASSISTANT PROFESSOR" },
      { sno: 7, name: "YELKA KRISHNA REDDY", registrationNumber: "7432-150412-154211", designation: "ASSISTANT PROFESSOR" },
      { sno: 8, name: "VENKATESWARLU MANAVAPATI", registrationNumber: "5207-150415-113920", designation: "ASSISTNAT PROFESSOR" },
      { sno: 9, name: "KANDIMALLA GOPI", registrationNumber: "8513-150416-123137", designation: "ASSISTANT PROFESSOR" },
      { sno: 10, name: "VASANTHA SIRIKONDA", registrationNumber: "4318-150417-133149", designation: "ASSISTANT PROFESSOR" },
      { sno: 11, name: "KOTA RAVALI", registrationNumber: "3019-150506-174101", designation: "ASSISTANT PROFESSOR" },
      { sno: 12, name: "DAYAKAR KATUKOJWALA", registrationNumber: "6690-160122-142209", designation: "ASSISTANT PROFESSOR" },
      { sno: 13, name: "LINGASWAMY PULAKARAM", registrationNumber: "4777-160129-180655", designation: "ASSISTANT PROFESSOR" },
      { sno: 14, name: "MAHESH KOTTAM", registrationNumber: "3059-160206-144706", designation: "ASSISTANT PROFESSOR" },
      { sno: 15, name: "ANNEBOINA VENKANNA", registrationNumber: "2645-160310-103924", designation: "ASSISTANT PROFESSOR" },
      { sno: 16, name: "GIRI GUDIKANDULA", registrationNumber: "7505-170116-100232", designation: "ASSISTANT PROFESSOR" },
      { sno: 17, name: "KADAGANCHI SUDHAKAR", registrationNumber: "1992-170208-170542", designation: "ASSISTANT PROFESSOR" },
      { sno: 18, name: "MUPPIDI MAHESH", registrationNumber: "6360-170213-104624", designation: "ASSISTANT PROFESSOR" },
      { sno: 19, name: "KUMAR SANTHOSH ELLENDULA", registrationNumber: "7601-180130-170511", designation: "ASSISTANT PROFESSOR" },
      { sno: 20, name: "AYIELLA SAIDULU", registrationNumber: "2635-180219-184016", designation: "ASSISTANT PROFESSOR" },
      { sno: 21, name: "SHIVA KUMAR HUDUMULA", registrationNumber: "3858-210706-220435", designation: "ASSISTANT PROFESSOR" },
      { sno: 22, name: "KANUGU SANDYA", registrationNumber: "8637-210707-121255", designation: "ASSISTANT PROFESSOR" },
      { sno: 23, name: "SUKUNKARI NANDAKISHORE", registrationNumber: "6902-220125-110831", designation: "ASSISTANT PROFESSOR" },
      { sno: 24, name: "SANTHOSH KUMAR THADAKAMALLA", registrationNumber: "8703-220425-211255", designation: "ASSISTANT PROFESSOR" },
      { sno: 25, name: "ANJALI MARKALA", registrationNumber: "7210-220517-120600", designation: "ASSISTANT PROFESSOR" },
      { sno: 26, name: "SIVA KANAKARAJU BATTULA", registrationNumber: "9089-230412-182624", designation: "ASSISTANT PROFESSOR" },
      { sno: 27, name: "MUTYALA NAIDU POTHALA", registrationNumber: "1201-230601-151003", designation: "ASSISTANT PROFESSOR" },
      { sno: 28, name: "MOUNICA BALLA", registrationNumber: "2060-240428-162153", designation: "ASSISTANT PROFESSOR" },
      { sno: 29, name: "BHUKYA SRAVYA", registrationNumber: "7994-240708-160209", designation: "ASSISTANT PROFESSOR" },
      { sno: 30, name: "POLISETTI RAVI KISHORE", registrationNumber: "6434-240709-094139", designation: "ASSOCIATE PROFESSOR" },
      { sno: 31, name: "KOLIPAKA SRINIVAS", registrationNumber: "8368-250213-140456", designation: "ASSISTANT PROFES" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Dr. J R V Jeny, HOD", designation: "Chairman" },
      { sno: 2, name: "Dr. K. Shahu Chatrapati, Professor, JNTUCEH-Manthani", designation: "Special Invitee" },
      { sno: 3, name: "Mr. Pratap Reddy, IT Project Manager, TCS", designation: "Special Invitee" },
      { sno: 4, name: "Dr. K. Rama Krishna Reddy", designation: "Member" },
      { sno: 5, name: "Mr. R. Praveen Kumar", designation: "Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Dr. J R V Jeny, HOD", designation: "Chairman" },
      { sno: 2, name: "Dr. Ramakrishna Reddy, Associate Prof.", designation: "Member" },
      { sno: 3, name: "Mr. R Praveen Kumar, Associate Prof.", designation: "Member" },
      { sno: 4, name: "Mr. M Praveen, Assistant Prof.", designation: "Member" }
    ],

    publications:[
      {
        AcademicYear:"2022-2023",
        url:"https://drive.google.com/file/d/1bc_5mCbV0cfprQYCV-LoKGu7NlNNGaO4/view"
      },
      {
        AcademicYear:"2021-2022",
        url:"https://drive.google.com/file/d/1gbe3LMMVkqdrSNGa8oMgEAunCufDG8xm/view"
      },
    ],

    peos: [
      "Have Knowledge and analytical skills including Mathematics, Science & basic Engineering.",
      "Graduates will be able to work effectively in cross-functional teams to develop Artificial Intelligence and Machine Learning solutions that meet business objectives & societal needs.",
      "Have extensive knowledge in state of art frame works in Artificial Intelligence and design industry accepted AI solutions using modern tools."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Understanding of statistical concepts and their applications in Machine learning.",
      "Familiarity with natural language processing and its applications in areas such as sentiment analysis and language translation.",
      "Adopt new and fast emerging technologies in Artificial Intelligence and Machine Learning."
    ],
    achievements: []
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "cse-ds": {
    id: "cse-ds",
    name: "CSE (Data Science)",
    fullName: "Computer Science and Engineering (Data Science)",

    overview: `Department of Data Science was established in the year 2020. Data Science is a field of computer science used to extract knowledge from different types of data such as Structured, semi-structured and unstructured data. Data Science is used in different areas such as Internet Search, Augmented Reality, Fraud and Risk Reduction, Website Recommendations etc.`,

    vision: `To develop Data Science professionals through creative and innovative approaches to address the present and future challenges of the modern computing world.`,

    mission: [
      "Educate students by expanding their knowledge in cutting–edge technologies to acquire professional ethics.",
      "Impart quality education to build research & entrepreneurial eco system using niche technologies."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Prof. P. Lavanya Kumari",
      designation: "Assistant Professor & HOD",
      message: "The Department of Data Science focuses on developing professionals equipped with strong analytical skills, innovative thinking and ethical values to address modern computing challenges."
    },

    laboratories: [
      "Data Science Lab",
      "Big Data Analytics Lab",
      "Machine Learning Lab",
      "Statistical Computing Lab"
    ],

    faculty: [
      { sno: 1, name: "LAVANYA KUMARI PRIYA", registrationNumber: "10150407-105549", designation: "ASSISTANT PROFESSOR & HOD" },
      { sno: 2, name: "MANOJ KUMAR MAHTO", registrationNumber: "2989-220707-160023", designation: "ASSOCIATE PROFESSOR" },
      { sno: 3, name: "Dr. RAJA RAMESH CHUNDRU", registrationNumber: "5772-230413-172159", designation: "ASSOCIATE PROFESSOR" },
      { sno: 4, name: "Dr. PRABHAKAR MARRY", registrationNumber: "81150402-090727", designation: "ASSISTANT PROFESSOR" },
      { sno: 5, name: "Dr. LAKSHMI ANUSHA KOTHAMASU", registrationNumber: "4419-161202-124849", designation: "ASSISTANT PROFESSOR" },
      { sno: 6, name: "Dr. REVELLE AKSHARA", registrationNumber: "4283-150424-125725", designation: "ASSISTANT PROFESSOR" },
      { sno: 7, name: "CHIRUMARTHI VENKANNA", registrationNumber: "78150407-172001", designation: "ASSISTANT PROFESSOR" },
      { sno: 8, name: "MOHAMMED KHALEEL AHMED", registrationNumber: "0773-150414-120750", designation: "ASSISTANT PROFESSOR" },
      { sno: 9, name: "CHINTAKAYALA SHIVASHANKER", registrationNumber: "0505-150415-135409", designation: "ASSISTANT PROFESSOR" },
      { sno: 10, name: "VEMULA LINGAMAIAH", registrationNumber: "4278-150417-235845", designation: "ASSISTANT PROFESSOR" },
      { sno: 11, name: "BOTTU UDAYKUMAR", registrationNumber: "3416-150424-191209", designation: "ASSISTANT PROFESSOR" },
      { sno: 12, name: "NAGENDRA CHERKUPALLY", registrationNumber: "8774-150425-230203", designation: "ASSISTANT PROFESSOR" },
      { sno: 13, name: "SUSHEELA BATHUKA", registrationNumber: "6015-170103-140248", designation: "ASSISTANT PROFESSOR" },
      { sno: 14, name: "NAGARAM NAGARJUNA", registrationNumber: "4295-171018-143046", designation: "ASSISTANT PROFESSOR" },
      { sno: 15, name: "KOTHA MOUNIKA", registrationNumber: "2277-190506-161834", designation: "ASSISTANT PROFESSOR" },
      { sno: 16, name: "MADHAVEELATHA GUTTA", registrationNumber: "6037-200303-095646", designation: "ASSISTANT PROFESSOR" },
      { sno: 17, name: "SHAFI AHMAD MOHAMMED", registrationNumber: "4245-220707-154107", designation: "ASSISTANT PROFESSOR" },
      { sno: 18, name: "JEEVAN REDDY TALAPAREDDY", registrationNumber: "0163-221212-101236", designation: "ASSISTANT PROFESSOR" },
      { sno: 19, name: "VARIPALLI BHULAKSHMI", registrationNumber: "6987-230412-203342", designation: "ASSISTANT PROFESSOR" },
      { sno: 20, name: "NAGESH KUMAR MACHA", registrationNumber: "7371-230415-121622", designation: "ASSISTANT PROFESSOR" },
      { sno: 21, name: "RAJENDRA PRASAD KURITI", registrationNumber: "6381-230603-132857", designation: "ASSISTANT PROFESSOR" },
      { sno: 22, name: "ARUNAGAYATRI KODUKULLA", registrationNumber: "2372-240208-143508", designation: "ASSISTANT PROFESSOR" },
      { sno: 23, name: "SREENIVAS NAKIREKANTI", registrationNumber: "9468-240209-120802", designation: "ASSISTANT PROFESSOR" },
      { sno: 24, name: "SURYAM TALACHENDRI", registrationNumber: "1718-240212-184519", designation: "ASSISTANT PROFESSOR" },
      { sno: 25, name: "THOTE PRIYANKA", registrationNumber: "5000-240706-164655", designation: "ASSISTANT PROFESSOR" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Prof. P.Lavanya Kumari, HOD", designation: "Chairman" },
      { sno: 2, name: "Dr.K.Shahu Chatrapati, Professor & HOD-CSE, JNTUCEH-Manthani", designation: "Special Invitee" },
      { sno: 3, name: "Mr.Pratap Reddy, IT Project Manager, TCS", designation: "Special Invitee" },
      { sno: 4, name: "Dr.B.Prakash", designation: "Member" },
      { sno: 5, name: "Dr.G.Raja Vikram", designation: "Member" },
      { sno: 6, name: "Dr.J RV Jeny", designation: "Member" },
      { sno: 7, name: "Prof.B.V.Chowdary", designation: "Member" },
      { sno: 8, name: "Prof.B.Ravi Krishna", designation: "Member" },
      { sno: 9, name: "Mrs.R.Sasikala", designation: "Member" },
      { sno: 10, name: "Mr.V.Rajasekhar", designation: "Member" },
      { sno: 11, name: "Mr.G.Murali", designation: "Parent" },
      { sno: 12, name: "Mr.D.Prabhakar", designation: "Parent" },
      { sno: 13, name: "Mr.D.Surya (20891A6712)", designation: "Student Member(III Year)" },
      { sno: 14, name: "Ms.V.Navya Sri (20891A6760)", designation: "Student Member(III Year)" },
      { sno: 15, name: "Mr.V.Hemanth(21891A6758)", designation: "Student Member(II Year)" },
      { sno: 16, name: "Ms.V.Kruthi(21891A6759)", designation: "Student Member(II Year)" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Mrs.P.Lavanya Kumari, HOD", designation: "Chairman" },
      { sno: 2, name: "Mrs.R.Sasikala, Asst.Prof.", designation: "Member" },
      { sno: 3, name: "Mr.N.Nagarjuna, Asst.Prof.", designation: "Member" },
      { sno: 4, name: "Mrs.G.Sruthi", designation: "Member" }
    ],

    peos: [
      "PEO-1: Emerge as engineers, innovators, entrepreneurs with social awareness and ethical values.",
      "PEO-2: Work in teams in multidisciplinary areas addressing the needs of society.",
      "PEO3 : Inculcate self learning and lifelong learning adapting cutting edge technologies."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "PSO-1: Design. Implement and test application software in the field of data science",
      "PSO-2: Understand the architecture and organization of computer systems to develop data science tools.",
      "PSO-3 : To use specialized softwares to carry out statistical data analysis"
    ],

    achievements: []
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "cse-it": {
    id: "cse-it",
    name: "CSE (IT)",
    fullName: "Computer Science and Engineering (Information Technology)",
    
    overview: "Department of Information Technology established in the year 2019 with an intake of 60. The mission of the Department is to provide quality and value-laden education for students, in the traditional and contemporary areas of Information Technology",
    
    vision: "To emerge as a premier center for education and research in computer science and engineeringand in transforming students into innovative professionals of contemporary and future technologies to cater the global needs of human resources for IT and ITES companies .",
    
    mission: [
      "To produce excellent computer science professionals by imparting quality training, hands-on-experience and value based education.",
      "To strengthen links with industry through collaborative partnerships in research & product development and student internships.",
      "To promote research based projects and activities among the students in the emerging areas of technology.",
      "To explore opportunities for skill development in the application of computer science among rural and under privileged population ."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Prof. B.V.Chowdary",
      designation: "Head of the Department",
      image: "/DepartmentPage/HodProfiles/CSE(IT).jpg",
      message: "Prof. B.V.Chowdary, Pursuing his PhD from GITAM University, Vizag. Master’s in CSE from MGR University, Chennai in 2006 and completed B.Tech (ECE) from Sree Vidyanikethan Engineering College, Tirupathi in 2003. He has a total teaching, research and administrative experience of 14 years. His research interests include Data Mining and Machine Learning.",
      stats: [
        { label: "Journal Publications", value: 14 },
        { label: "Conferences Presented", value: 4 },
        { label: "Patents", value: 1 }
      ],
      achievements: [
        "Received “YUVA ACHARYA AWARD” from Bharat Education Excellence Awards in September 2021.",
        "Administrative roles executed – Head of the Department, Dean -IT Services"
      ]
    },

    laboratories: [
      "TCS iON Supported Lab",
      "Web Technologies Lab",
      "Network Programming Lab",
      "Database Lab",
      "Software Engineering Lab"
    ],

    faculty: [
      { sno: 1, name: "VENKATESHWARLA CHOWDARY BASINENI", registrationNumber: "08150407-181138", designation: "ASSISTANT PROFESSOR" },
      { sno: 2, name: "Dr. NAVEEN KUMAR BASAVA", registrationNumber: "3446-150419-095020", designation: "ASSISTANT PROFESSOR" },
      { sno: 3, name: "MEENAVOLU S B KASYAPA", registrationNumber: "2953-150415-102627", designation: "ASSISTANT PROFESSOR" },
      { sno: 4, name: "ARUNA THOTA", registrationNumber: "6418-160316-170714", designation: "ASSISTANT PROFESSOR" },
      { sno: 5, name: "RAMA KRISHNA GUDURU", registrationNumber: "1498-161026-143751", designation: "ASSISTANT PROFESSOR" },
      { sno: 6, name: "CHANAGONI VIJAYA SAI", registrationNumber: "3065-180808-155640", designation: "ASSISTANT PROFESSOR" },
      { sno: 7, name: "GUBBALA CHANAKYA", registrationNumber: "8254-211214-120012", designation: "ASSISTANT PROFESSOR" },
      { sno: 8, name: "SHAIK KHALEELULLAH", registrationNumber: "1980-220704-155138", designation: "ASSISTANT PROFESSOR" },
      { sno: 9, name: "SRIKANTH JAINI", registrationNumber: "7060-221213-094845", designation: "ASSISTANT PROFESSOR" },
      { sno: 10, name: "AKEPATI REDDY SANKAR", registrationNumber: "0455-240207-121933", designation: "ASSISTANT PROFESSOR" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Prof. B.V.Chowdary", designation: "Head of the Department" },
      { sno: 2, name: "Dr.K.Shahu Chatrapati, Professor & HOD-CSE, JNTUCEH-Manthani", designation: "Special Invitee" },
      { sno: 3, name: "Mr.B.Prathap Reddy, Assoc.,Consultant, Operations Manager,TCS", designation: "Special Invitee" },
      { sno: 4, name: "Dr.M.Prabhakar, Assistant Professor", designation: "Member" },
      { sno: 5, name: "Mr.Siva Rama Krishna , Assistant Professor", designation: "Member" },
      { sno: 6, name: "Mr.S.K Akbar, Assistant Professor", designation: "Member" },
      { sno: 7, name: "Chilukuri Peddi Raju", designation: "Parent" },
      { sno: 8, name: "T Yugender", designation: "Parent" },
      { sno: 9, name: "A.Shriya", designation: "Student Member" },
      { sno: 10, name: "G.Bhuvan Sai Teja", designation: "Student Member" },
      { sno: 11, name: "Jayanth R Pawar", designation: "Student Member" },
      { sno: 12, name: "K.Akshit", designation: "Student Member" },
      { sno: 13, name: "M.N.K.Vardhana Mahati", designation: "Student Member" },
      { sno: 14, name: "M.Sai Chetana", designation: "Student Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Mr. B.V. Chowdary", designation: "Chairman" },
      { sno: 2, name: "Mr. K. Siva Rama Krishna", designation: "Co-ordinator" },
      { sno: 3, name: "Dr. M.Prabhakar", designation: "Member" },
      { sno: 4, name: "Mr. D.Chaithanya", designation: "Member" },
      { sno: 5, name: "Mrs. P.Srilatha", designation: "Member" }
    ],

    consultancyProjects: [
      { title: "IGM Hyderabad", faculty: "Mr. B V Chowdary", date: "2019-20", amountInLakhs: 0.1879, duration: "1 day", fundingAgency: "TCS-ion" },
      { title: "RRB NTPC Examination", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.6813, duration: "3 days", fundingAgency: "TCS-ion" },
      { title: "TS EAMCET Engineering Exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.5779, duration: "6 days", fundingAgency: "TCS-ion" },
      { title: "JEE ADVANCED Exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.2538, duration: "1 day", fundingAgency: "TCS-ion" },
      { title: "TS EAMCET Agriculture Exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.3189, duration: "1 day", fundingAgency: "TCS-ion" },
      { title: "TS ICET and TS EDCET Exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.8308, duration: "2 days", fundingAgency: "TCS-ion" },
      { title: "TS LAWCET/PGLCET Exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.2394, duration: "1 day", fundingAgency: "TCS-ion" },
      { title: "TS OUCET", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.4127, duration: "1 day", fundingAgency: "TCS-ion" },
      { title: "TSPSC-Departmental test exam", faculty: "Mr. B V Chowdhary", date: "2019-20", amountInLakhs: 0.7964, duration: "2 days", fundingAgency: "TCS-ion" }
    ],

    peos: [
      "To create and sustain a community of learning in which students acquire knowledge and apply in their concerned fields with due consideration for ethical, ecological, and economic issues.",
      "To provide knowledge based services so as to meet the needs of the society and industry.",
      "To make the students understand, design and implement the concepts in multiple arenas.",
      "To educate the students in disseminating the research findings with good soft skills so as to become successful entrepreneurs."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate, review, research, literature and analyze complex engineering problems reaching substantiated conclusions using the first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Professional Skills: Learn the basic concepts of Computer Science and Engineering and to apply them to various areas, like Data Structures, Operating Systems, Computer Organization, Computer Networks, Information Security etc., in the design and implementation of complex systems.",
      "Problem-Solving Skills : Solutions to complex Computer Science and Engineering problems, using latest hardware and software tools, along with analytical skills to arrive at cost effective and appropriate solutions.",
      "Entrepreneurship skills and career management : Social-awareness & environmental-wisdom along with ethical responsibility to lead a successful career and to sustain passion and zeal for real-world applications using optimal resources as an Entrepreneur."
    ],

    achievements: []
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "aiml": {
    id: "aiml",
    name: "AI & ML",
    fullName: "Artificial Intelligence and Machine Learning",
    academicCalendars: [],
    courseMaterials: [],
    clubs: [],
    overview: "The Department of Artificial Intelligence and Machine Learning was established in 2020. It focuses on the field of computer science used to design models using structured, semi-structured, and unstructured data to solve complex problems in various areas such as Image Recognition, Automatic Language Translation, Speech Recognition, and Self-Driving Cars.",
    vision: "To foster a collaborative and diverse community of Artificial Intelligence and Machine Learning experts who work together to advance the state of the art and address major societal challenges.",
    mission: [
      "To evolve as a centre for academic excellence in learning through creative and modern teaching practices.",
      "To provide students with strong foundations in AI and ML supported by state-of-the-art laboratory facilities.",
      "To forge active alliances with AI industries and reputed R&D institutions.",
    ],
    hod: {
      name: "Dr. J.R.V. Jeny",
      designation: "Professor & HOD",
      message: "Dr. J.R.V. Jeny has 23 years of total teaching experience. She completed her Ph.D in 2016 from Manonmaniam Sundaranar University. Her research interests include Wireless Sensor Networks, IoT, and Network Security. She is committed to building a department that produces world-class AI professionals.",
    },
    laboratories: [
      "Artificial Intelligence Lab",
      "Machine Learning Lab",
      "Deep Learning Lab",
      "Computer Vision Lab",
      "IDEA Lab (Multidisciplinary Research)",
    ],
    faculty: [
      { sno: 1, name: "Dr. J.R.V. JENY", registrationNumber: "2465-170111-133957", designation: "Professor & HOD" },
      { sno: 2, name: "Dr. RETHNA VIRGIL JENY", registrationNumber: "4768-160219-134349", designation: "Associate Professor" },
      { sno: 3, name: "Dr. G. VARADARAJU", registrationNumber: "8560-230531-155452", designation: "Professor" },
      { sno: 4, name: "Dr. S. KASHI VISWANADHAM", registrationNumber: "3968-150410-154911", designation: "Professor" },
      { sno: 5, name: "Mrs. D. SUDHA", registrationNumber: "6512-150409-152230", designation: "Assistant Professor" },
      { sno: 6, name: "Mrs. B. SANDHYA", registrationNumber: "4615-150409-122414", designation: "Assistant Professor" },
      { sno: 7, name: "Mrs. SK. HASEENA", registrationNumber: "27150404-100234", designation: "Assistant Professor" },
      { sno: 8, name: "Mr. R. CHANDRA SHEKAR", registrationNumber: "7215031-140707", designation: "Assistant Professor" },
      { sno: 9, name: "Mr. TULASI PRASAD KATIKALA", registrationNumber: "8165-160309-100918", designation: "Assistant Professor" },
      { sno: 10, name: "Mr. DUDDU CH RAMA RAJU", registrationNumber: "1481-180121-125010", designation: "Assistant Professor" },
      { sno: 11, name: "Mr. RACHAKONDA NAGESHWAR RAO", registrationNumber: "7253-150409-130009", designation: "Assistant Professor" },
      { sno: 12, name: "Mr. PANDURANGA REDDY PATAKOTA", registrationNumber: "72150402-125008", designation: "Assistant Professor" },
      { sno: 13, name: "Mr. D. SREENIVASARAO", registrationNumber: "1729-150410-141933", designation: "Assistant Professor" },
      { sno: 14, name: "Mr. THAKUR SHIV SINGH", registrationNumber: "3816-160308-181513", designation: "Assistant Professor" },
      { sno: 15, name: "Mrs. KOTA RAVALI", registrationNumber: "0806-160930-155902", designation: "Assistant Professor" },
    ],
    achievements: [
      "Received the Lady Engineer Award from the Institution of Engineers (India) in 2022.",
      "Received Rs. 40,000 funding from ICMR for a national level seminar on Deep learning for cancer diagnosis using Python in 2018.",
    ],
    peos: [
      "Have knowledge and analytical skills including Mathematics, Science & basic Engineering.",
      "Graduates will be able to work effectively in cross-functional teams to develop AI and ML solutions.",
      "Have extensive knowledge in state-of-the-art frameworks in Artificial Intelligence.",
    ],
    pos: [
      "Engineering Knowledge", "Problem Analysis", "Design/Development of Solutions",
      "Conduct Investigations of Complex Problems", "Modern Tool Usage", "The Engineer and Society",
      "Environment and Sustainability", "Ethics", "Individual and Team Work",
      "Communication", "Project Management and Finance", "Life-long Learning",
    ],
    psos: [
      "Understanding of statistical concepts and their applications in Machine Learning.",
      "Familiarity with natural language processing and its applications.",
      "Adopt new and fast-emerging technologies in Artificial Intelligence and Machine Learning.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "aids": {
    id: "aids",
    name: "AI & DS",
    fullName: "Artificial Intelligence and Data Science",
    
    overview: "The Department of Artificial Intelligence and Data Science provides advanced knowledge and skills in Artificial Intelligence and Data Science combined with Analytical Visualization Technologies. It focuses on nurturing collaborative innovations and maintaining high standards of quality education.",
    
    vision: "To empower individuals to acquire advanced knowledge and skills with cutting edge combination in Artificial Intelligence and Data Science with Analytical Visualization Technologies through excellent standards of quality-education by nurturing collaborative innovations towards serving the greater cause of society.",
    
    mission: [
      "Inculcate the students with strong fundamental concepts in Artificial Intelligence and Data Science with analytical capability, programming and problem-solving skills.",
      "Create an ambience of technology enabled learning through innovation of computing, expert system, self-learning, sound academic practices and research endeavors.",
      "Establish State of the art Research Labs in various domains of computer science to facilitate learning, knowledge creation and dissemination.",
      "Provide opportunities to promote organizational and leadership skills in students through various extra-curricular and co-curricular activities."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. Bhallamudi Ravikrishna",
      designation: "Assistant Professor & HOD",
      message: "The AI & DS department is committed to equipping students with the skills needed to harness the power of data and artificial intelligence. We focus on building a strong foundation in both AI and data science, preparing students for careers in this rapidly evolving field."
    },

    laboratories: [
      "AI & Data Science Lab",
      "Data Visualization Lab",
      "Machine Learning Lab",
      "IDEA Lab (Multidisciplinary Research)"
    ],

    faculty: [
      { sno: 1, name: "Dr. BHALLAMUDI RAVIKRISHNA", registrationNumber: "66150407-162639", designation: "ASSISTANT PROFESSOR & HOD" },
      { sno: 2, name: "Dr. MURALI KRISHNA NAMANA", registrationNumber: "7837-170108-205317", designation: "PROFESSOR" },
      { sno: 3, name: "Dr. VADALI SRINIVAS", registrationNumber: "3542-221213-131823", designation: "ASSISTANT PROFESSOR" },
      { sno: 4, name: "SUNKI RAMANA REDDY", registrationNumber: "53150404-111012", designation: "ASSISTANT PROFESSOR" },
      { sno: 5, name: "KORRA BALU", registrationNumber: "1719-150428-101345", designation: "ASSISTANT PROFESSOR" },
      { sno: 6, name: "VANKADARU RAJESH", registrationNumber: "7800-160209-123632", designation: "ASSISTANT PROFESSOR" },
      { sno: 7, name: "CHALLA NARESH", registrationNumber: "8208-170106-143404", designation: "ASSISTANT PROFESSOR" },
      { sno: 8, name: "LAVANYA GOLLA", registrationNumber: "1869-170113-082356", designation: "ASSISTANT PROFESSOR" },
      { sno: 9, name: "NEMURAGOMUL MAHESH NEMURAGOMUL MAHESH", registrationNumber: "4590-220706-235400", designation: "ASSISTANT PROFESSOR" },
      { sno: 10, name: "SAI LALITH PRASAD THOTA", registrationNumber: "7589-221215-184132", designation: "ASSISTANT PROFESSOR" },
      { sno: 11, name: "RACHAMALLA YAMINI", registrationNumber: "4088-230417-115446", designation: "ASSISTANT PROFESSOR" },
      { sno: 12, name: "SATYA GANGA ESWARA SAI SREE GUNDRA", registrationNumber: "6326-230417-131318", designation: "ASSISTANT PROFESSOR" },
      { sno: 13, name: "SINDHUJA KAPUDASI", registrationNumber: "5720-240217-153313", designation: "ASSISTANT PROFESSOR" },
      { sno: 14, name: "ASHOK KUMAR KARRA", registrationNumber: "6628-240218-104433", designation: "ASSISTANT PROFESSOR" },
      { sno: 15, name: "NAGEEN SHAIK", registrationNumber: "0874-231017-110631", designation: "ASSISTANT PROFESSOR" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Prof. B. RaviKrishna, Head of the Department, AI&DS", designation: "Chairman" },
      { sno: 2, name: "Dr. K.Shahu Chatrapati, Professor, JNTUCEH-Manthani", designation: "Special Invitee" },
      { sno: 3, name: "Mr.Pratap Reddy, IT Project Manager, TCS", designation: "Special Invitee" },
      { sno: 4, name: "Dr.G.Rajavikram, Head of the Department-CSE", designation: "Member" },
      { sno: 5, name: "Prof. B.V.Chowdary, Head of the Department – IT", designation: "Member" },
      { sno: 6, name: "Dr.J.R.V.Jeny, Head of the Department-CSE(AI&ML)", designation: "Member" },
      { sno: 7, name: "Prof. P. Lavannya Kumari, Head of the Department – CSE(DS)", designation: "Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Mr. B. RaviKrishna, Associate Professor & Head of the Department", designation: "Chairman" },
      { sno: 2, name: "Dr. V. Omeshwar Reddy, Associate Professor.", designation: "Member" },
      { sno: 3, name: "Mr. Ch. Naresh, Assistant Professor", designation: "Member" },
      { sno: 4, name: "Mr. N. Mahesh, Assistant Professor", designation: "Member" }
    ],

    peos: [
      "PEO1: Core Knowledge: Inculcate in students a firm grasp of foundational concepts, as well as analytical, programming and problem-solving skills for complex algorithms to solve real-world problems across different domains.",
      "PEO2: Proficiency with Innovation: Ability to design AI Models, implement closely intertwined with Data Science concepts with a focus on advanced algorithms to drive innovation, and create value to their work.",
      "PEO3: Lifelong Amplifying Growth: Addressing societal challenges through cutting-edge research, center of excellence for improving career prospects through professional certification changes, and pursuing higher education and Entrepreneur opportunities."
    ],
    
    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "PSO1 Exhibit Expertized Domain Knowledge: Able to Analyze and Apply Domain knowledge in Artificial Intelligence, Data Science, Machine Learning, Big Data to solve complex problems solving effectively and efficiently in par with the expected quality standards.",
      "PSO2 Critical thinking to Design Expert Systems: Able to Exhibit Expertized technical and critical thinking skills in the discipline of Artificial Intelligence and Data Science to find solutions to design expert and Intelligent Systems. Also Enabling the Graduates stay relevant and competitive in their careers.",
      "PSO3 Ability to Establish Innovative Ideas: Establish innovative ideas to instigate new business ventures to fulfill the needs of diverse audiences and Entrepreneurships to make meaningful contributions to their organizations and society."
    ],

    achievements: [
      "Guest Lecture on 'Artificial Intelligence & its applications' by Dr. Anand Mishra (IIT Jodhpur) on Dec 8th, 2022. Participants: 68 from 2nd Year CSE (AI & DS)."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "eie": {
    id: "eie",
    name: "EIE",
    fullName: "Electronics and Instrumentation Engineering",
    
    overview: "The Department of Electronics and Instrumentation Engineering focuses on advanced education and research in design, instrumentation, and control systems. The department equips students with skills in industrial automation, process control, and biomedical instrumentation.",
    
    vision: "To develop into an advanced centre for exceptionally good Education and Research in the field of Mechanical engineering design, materials and manufacturing Technologies, consistent with the contemporary and futuristic needs of society through optimized technologies.",
    
    mission: [
      "To provide strong foundations in mechanical engineering supported by matching laboratory facilities in an excellent academic environment conducive to learning.",
      "To implement learning centered teaching practices and deliver Industry ready students with professional ethics, concern for environmental safety & awareness of societal problems in the design-production cycle of mechanical engineering products/systems.",
      "To forge active alliances with mechanical engineering industries, reputed R&D institutions and academia to appreciate the complexities of arriving at solutions to real world mechanical engineering problems and the interfaces required with other disciplines.",
      "To take stock of the emerging technologies and make the department of mechanical engineering a center of excellence for academics & research"
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. M.Vasu Babu",
      designation: "Associate Professor & HOD",
      image: "/DepartmentPage/HodProfiles/EIE.jpg",
      message: "Dr.M.Vasu Babu has completed his Ph D from Andhra university in 2020. He completed M.Tech (IPI) from Andhra University in 2005 and completed B.Tech from V.R.S.E.C, Vijayawada in 2003. He has total teaching,research and administrative experience of 17 years.His research interests include thin film fabrication, MEMS and gas sensors.",
      stats: [
        { label: "Journal Publications", value: 9 },
        { label: "International Conferences", value: 1 }
      ],
      achievements: [
        "Gate Qualified in 2002",
        "Professional memberships: IAENG",
        "Administrative roles executed: NBA co-ordinator, IQAC co-ordinator, NAAC co-ordinator, Project co-ordinator"
      ]
    },

    laboratories: [
      "Electronic Devices & Circuits Lab",
      "Electrical Circuits Lab",
      "Control Systems Lab",
      "Process Control Lab",
      "Biomedical Instrumentation Lab",
      "Digital Electronics Lab",
      "Microprocessors & Microcontrollers Lab"
    ],

    faculty: [
      { sno: 1, name: "PAPANI SRINIVAS", registrationNumber: "39150331-170818", designation: "ASSISTANT PROFESSOR & HOD" },
      { sno: 2, name: "Dr. VASUBABU MATTA", registrationNumber: "2647-200110-141045", designation: "ASSOCIATE PROFESSOR" },
      { sno: 3, name: "CHINTAM V B ADITYA KUMAR", registrationNumber: "3689-150408-140541", designation: "ASSISTANT PROFESSOR" },
      { sno: 4, name: "BANOTH VASU NAIK", registrationNumber: "80150406-133049", designation: "ASSISTANT PROFESSOR" },
      { sno: 5, name: "KINNARA BHAVANI", registrationNumber: "9648-150411-102654", designation: "ASSISTANT PROFESSOR" },
      { sno: 6, name: "GANJI VIJAYALAXMI", registrationNumber: "8743-150420-130736", designation: "ASSISTANT PROFESSOR" },
      { sno: 7, name: "MADHURI GUMMINENNI", registrationNumber: "1854-150623-102833", designation: "ASSISTANT PROFESSOR" },
      { sno: 8, name: "ROJA NANDIKONDA", registrationNumber: "8282-230523-145112", designation: "ASSISTANT PROFESSOR" },
      { sno: 9, name: "C CHITRA", registrationNumber: "5617-240909-141820", designation: "ASSISTANT PROFESSOR" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Mr. Ch V B Aditya", designation: "Chairman" },
      { sno: 2, name: "Mr. Vachaya Tejavath, Deputy Superintendent Engineer, Department of Instrumentation & Control, ONGC", designation: "Special Invitee" },
      { sno: 3, name: "Dr. G V Mahalakshmi, Professor, Department of ECE, SNIST", designation: "Special Invitee" },
      { sno: 4, name: "Dr. M Vasubabu", designation: "Member" },
      { sno: 5, name: "Dr. S Prasanna", designation: "Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Dr. M Vasu Babu", designation: "Chairman" },
      { sno: 2, name: "Mr. Ch V B Aditya", designation: "Convener" },
      { sno: 3, name: "Mr. Dr. S Prasana", designation: "Member" },
      { sno: 4, name: "Mr. K Prem Sagar", designation: "Member" },
      { sno: 5, name: "Mr. P Srinivas", designation: "Member" }
    ],

    mous: [
      { name: "Micro Automation Sytems Pvt. Ltd", duration: "2016 to till date", activities: "Innovation Oriented Projects & Consultancy Projects" },
      { name: "Spectrochem Instrument Private Limited", duration: "10 Years", activities: "Consultancy Projects, Internships, Guest lecture" }
    ],

    researchProjects: [
      { title: "Battery Health Monitoring For Mini-Hybrid Power System Using Labview", faculty: ["N Dinesh Kumar", "P Bhanusree"], duration: "2013-14", fundingAgency: "unknown", sanctionDate: "2013-14" },
      { title: "A Quick Wireless Doc – Wireless Transmission of Bio Medical Signals for Health Monitoring Applications using MANETs", faculty: ["N Dinesh Kumar", "Ch V B Aditya Kumar"], duration: "2010-12", fundingAgency: "unknown", sanctionDate: "2010-12" },
      { title: "Automatic Poultry Feeder using PLCs", faculty: ["N Dinesh Kumar", "Ch V B Aditya Kumar"], duration: "2011-13", fundingAgency: "unknown", sanctionDate: "2011-13" },
      { title: "Automated Universal Hygienic Food Processing Machine", faculty: ["N Dinesh Kumar", "Ch V B Aditya Kumar"], duration: "2011-13", fundingAgency: "unknown", sanctionDate: "2011-13" },
      { title: "Sorting of material based on Height and Width using Automation", faculty: ["N Dinesh Kumar", "Ch V B Aditya Kumar"], duration: "2009-10", fundingAgency: "unknown", sanctionDate: "2009-10" },
      { title: "Automatic bottle filling Capping & Embossing using PLC", faculty: ["N Dinesh Kumar", "Ch V B Aditya Kumar", "B Alekya"], duration: "2009-10", fundingAgency: "unknown", sanctionDate: "2009-10" },
      { title: "Design And reduction of wattage losses in SOLAR module using AR coating Cell-to-cell gap and thickness", faculty: ["N Dinesh Kumar"], duration: "2010-11", fundingAgency: "unknown", sanctionDate: "2010-11" },
      { title: "Priority based routing of packets in mobile adhoc networks.", faculty: ["N Dinesh Kumar"], duration: "2011", fundingAgency: "unknown", sanctionDate: "2011" },
      { title: "Intelligent Irrigation System", faculty: ["N Dinesh Kumar"], duration: "2012-13", fundingAgency: "unknown", sanctionDate: "2012-13" },
      { title: "Smart Sensors- Acoustic Sensors For Underwater Applications", faculty: ["K Prem Sagar"], duration: "2012", fundingAgency: "unknown", sanctionDate: "2012" },
      { title: "High Performance FPGA Implementation Of Rijandael Algorithm For Network Security", faculty: ["S Prasanna"], duration: "2013", fundingAgency: "unknown", sanctionDate: "2013" }
    ],

    consultancyProjects: [
      { title: "Edge preserving Decomposition using WLS Frame Work", faculty: "Mr. B Rajesh, Mr. V Durga Prasad", date: "2017-18", amountInLakhs: 0.75, duration: "2 Months", fundingAgency: "V TECH INSTRUMENTS" },
      { title: "Automatic Poultry Feeder using PLCs", faculty: "Mr Ch.V.B.Aditya kumar", date: "2017-18", amountInLakhs: 0.85, duration: "1 Year", fundingAgency: "Vinayaka Hatcheries, Rajendranagar,Hyderabad" },
      { title: "Double precision floating point using VHDL", faculty: "A Jhansi Rani, B Durga Prasad", date: "2016-17", amountInLakhs: 10.10, duration: "1 Year", fundingAgency: "ANSHUMAN TECH PVT LTD" },
      { title: "Design of Smart Sensors- Acoustic Sensors For Underwater Applications", faculty: "Mr Ch.V.B.Aditya kumar/Mr.K.PremSagar", date: "2016-17", amountInLakhs: 0.75, duration: "1 Year", fundingAgency: "Micro Automation Systems, Miyapur, Hyderabad" }
    ],

    peos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Students were enabled to apply the core mechanical engineering subjects related to Design, Thermal, and Manufacturing knowledge in analysis & to conduct experimental investigation of complex mechanical products / systems.",
      "Graduates were enabled to use the modern modeling and finite element analysis software in developing the new mechanical products and also demonstrates the social responsibility, professional ethics and environmental safety in their professional and personal life.",
      "Co-curricular activities in collaboration with industries, R&D centers and professional bodies and also extra-curricular activities enable the students to acquire organizing abilities, team & competitive spirit, communication & management skills and knowledge of emerging technologies."
    ],

    achievements: [
      "Workshop on Recent trends in Sensor applications: 150 participants",
      "FinTECH: 70 participants",
      "SalesForce: 70 participants",
      "Power Conditioning and Management Systems in Electric Vehicles: 134 participants",
      "Workshop on Industrial Automation: 6 participants",
      "Workshop on IoT using arduino: 17 participants",
      "Guest Lecture on An introduction of Testing Tools in software: 89 participants",
      "Workshop on Advanced automation using PLC, SCADA and OPC: 15 participants",
      "Workshop on Robotics and automation: 18 participants",
      "Guest Lecture on “Block Chain Technology”: 73 participants",
      "A Guest lecture on ” An overview of user Interface and user Experience”: 73 participants",
      "Workshop on Embedded systems and applications: 18 participants",
      "Workshop on VLSI Technologies: 17 participants",
      "Workshop on LAB VIEW used in multi diciplinary: 15 participants",
      "Guest Lecture on “Overview of biologically inspired Robotics”: 59 participants"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "ece": {
    id: "ece",
    name: "ECE",
    fullName: "Electronics and Communication Engineering",
    
    overview: "Department of Electronics and communication Engineering was established in 1999 with an intake of 60 and in the year 2005 it had been increased to 180. The department has started post graduate courses (M. Tech) in VLSI during 2008-09 with intake of 18 and EMBEDDED SYSTEMS during 2010-11 with intake of 18.\n\nB.Tech (Electronics and Communication Engineering) : 180\nM.Tech(Embedded System) : 18",
    
    vision: "To impart technical education through latest pedagogical techniques and transform students into competent, committed & creative professionals, with abilities to address the challenges of the century for the benefit of society by imparting high quality education with human values and to emerge as a premier center for Electronics & Communication Engineering.",
    
    mission: [
      "To provide high quality academic programmes, training activities and research facilities to the students of Electronics and Communication Engineering in the related field.",
      "To develop capabilities and skillful in undertaking the core designs of Electronics and Communication Engineering supported by continuous industry – institute interaction aimed at employability.",
      "To provide leadership and research aptitude among students of Electronics and Communication Engineering.",
      "To inculcate the exploration skills among the students for the contribution of economic and technological development in national and as well as global arena."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. P.A. Harsha Vardhini",
      designation: "Professor & HOD",
      message: "The ECE department is committed to excellence in education and research in electronics and communication engineering. We provide students with a strong foundation in core ECE subjects while also exposing them to cutting-edge technologies in VLSI, embedded systems, and wireless communications.",
    },

    laboratories: [
      "Project Laboratory",
      "VLSI Lab",
      "Embedded Systems Lab",
      "Electronic Devices & Circuits Lab",
      "Signals & Systems Lab",
      "Digital Signal Processing Lab",
      "Microwave & Optical Communication Lab",
      "Advanced Communication Lab",
    ],

    faculty: [
      { sno: 1, name: "Dr. P.A. HARSHA VARDHINI", registrationNumber: "26150407-125656", designation: "Professor & HOD" },
      { sno: 2, name: "Dr. BHAGAVATHI RAO ADHIBATLA", registrationNumber: "9064-150415-195000", designation: "Professor" },
      { sno: 3, name: "Dr. SUBHENDU BATABYAL", registrationNumber: "2378-240711-105459", designation: "Professor" },
      { sno: 4, name: "Dr. NALI DINESH KUMAR", registrationNumber: "80150406-145457", designation: "Associate Professor" },
      { sno: 5, name: "Dr. JILLELLA VENKATESWARA RAO", registrationNumber: "49150407-143839", designation: "Associate Professor" },
      { sno: 6, name: "Dr. M KHALEEL ULLAH KHAN", registrationNumber: "0626-150410-152831", designation: "Associate Professor" },
      { sno: 7, name: "Dr. KATAPAKA YADAIAH", registrationNumber: "1376-150408-102610", designation: "Associate Professor" },
      { sno: 8, name: "Dr. VIJAYA LAKSHMI CHINTAMANENI", registrationNumber: "6952-150408-152453", designation: "Assistant Professor" },
      { sno: 9, name: "Dr. SANDEEP PINGILI", registrationNumber: "4603-150408-140803", designation: "Assistant Professor" },
      { sno: 10, name: "Dr. SHIDDANAGOUD PHAKKIRAGOUD BANIGOUDRA", registrationNumber: "3487-161206-022850", designation: "Assistant Professor" },
      { sno: 11, name: "Dr. SARIN VIJAY M", registrationNumber: "3768-160306-152245", designation: "Assistant Professor" },
      { sno: 12, name: "Dr. CHEKURI SUDHAKAR", registrationNumber: "3734-170915-075444", designation: "Assistant Professor" },
      { sno: 13, name: "Dr. MERIN SUSAN PHILIP", registrationNumber: "3360-240904-115721", designation: "Assistant Professor" },
      { sno: 14, name: "Dr. KARDAS RAMBABU", registrationNumber: "14150403-085021", designation: "Assistant Professor" },
      { sno: 15, name: "Dr. PARVATHAPURAM PAVAN KUMAR", registrationNumber: "9637-160218-104957", designation: "Assistant Professor" },
      { sno: 16, name: "Dr. TATIKONDA JAGANMOHAN", registrationNumber: "0588-170126-140848", designation: "Assistant Professor" },
      { sno: 17, name: "Dr. MAHANKALI PALLAVI", registrationNumber: "2107-240906-141937", designation: "Assistant Professor" },
      { sno: 18, name: "NELAPATI KOTESWARAMMA", registrationNumber: "25150407-101952", designation: "Assistant Professor" },
      { sno: 19, name: "VITTAL KOLLI", registrationNumber: "12150407-104117", designation: "Assistant Professor" },
      { sno: 20, name: "SRAVANI POTULA", registrationNumber: "0279-231017-221534", designation: "Assistant Professor" },
      { sno: 21, name: "NOMULA SRINIVAS", registrationNumber: "60150401-161540", designation: "Assistant Professor" },
      { sno: 22, name: "SWAPNA REVURI", registrationNumber: "49150407-091145", designation: "Assistant Professor" },
      { sno: 23, name: "MEENAIAH BATTA", registrationNumber: "6719-150418-234006", designation: "Assistant Professor" },
      { sno: 24, name: "ASHWINI NALLENKI", registrationNumber: "9492-170111-122201", designation: "Assistant Professor" },
      { sno: 25, name: "MOUNIKA BANDHU", registrationNumber: "6641-180421-163545", designation: "Assistant Professor" },
      { sno: 26, name: "NEELI APARNA", registrationNumber: "9299-230223-123729", designation: "Assistant Professor" },
      { sno: 27, name: "RAMESH JUTTU", registrationNumber: "9334-230412-211948", designation: "Assistant Professor" },
      { sno: 28, name: "GIRAMONI SRAVANI", registrationNumber: "6622-240909-120625", designation: "Assistant Professor" },
      { sno: 29, name: "CHALLA RAMA KRISHNA", registrationNumber: "9985-150419-144114", designation: "Assistant Professor" },
      { sno: 30, name: "SRINIVASU POTTA", registrationNumber: "7578-150419-115214", designation: "Assistant Professor" },
      { sno: 31, name: "GURUMURTHY PANASA", registrationNumber: "6766-160203-154104", designation: "Assistant Professor" },
      { sno: 32, name: "RAJASAIHARSHA CHADALA", registrationNumber: "7842-220705-143653", designation: "Assistant Professor" },
      { sno: 33, name: "MADHU YADAV THOTLA", registrationNumber: "2586-230412-212951", designation: "Assistant Professor" },
      { sno: 34, name: "SHANKAR SOMU", registrationNumber: "2386-231021-190649", designation: "Assistant Professor" }
    ],

    achievements: [
      "Students qualified for GATE with top ranks in Electronics and Communication Engineering.",
      "Research papers published in IEEE and Springer journals by faculty members.",
      "Industry collaborations with leading ECE companies for student internships.",
    ],

    peos: [
      "Engineering Essentials: To provide students with substantial in-depth knowledge in the area of Electronics and Communication Engineering fundamentals necessary to solve engineering problems pertaining to industry and research.",
      "Complex problems analysis and solutions: To analyze complex Electronics and Communications Engineering problems and use research based knowledge to provide valid solutions by applying appropriate techniques, resources and modern engineering tools.",
      "Entrepreneurship and lifelong learning: To foster innovation, invention and entrepreneurship by enabling the graduates to transform their ideas to proof-of-concepts for technical applications and engage themselves in the life long learning with the knowledge of project management and finance.",
      "Social Responsibility & Ethical Values: To inculcate professional and ethical values among the students for the successful professional career with a commitment to provide postulated engineering solutions assessing social, health, safety and legal issues in a broader cultural, societal and environmental contest."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Professional Skills: The in-depth knowledge in the core as well as allied fields of Electronics and Communication Engineering and apply them for the design, analysis of complex circuits and systems in the areas advanced Electronics, Communication, Signal processing, VLSI and Embedded systems.",
      "Tools Usage for design of solutions: An ability to solve complex problems in the field of Electronics and Communication Engineering and find cost effective solutions using modern hardware and software tools.",
      "Successful Career and Entrepreneurship: An understanding of social-awareness & environmental-wisdom along with ethical responsibility to have a successful career and to sustain passion and zeal for a sustainable social development as a responsible engineer and Entrepreneur"
    ],

    pgPsos: [
      "A Commitment to continuous improvement in analyzing the micro and macro level engineering specific issues of embedded systems, VLSI design and signal processing by applying basic engineering and mathematic fundamentals.",
      "Quality improvement through clear ability to design and implement the acquired technical knowledge with programming efficiency.",
      "Team participation and leadership with excellent technical communication and interpersonal skills act as change agents for societal benefits"
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "eee": {
    id: "eee",
    name: "EEE",
    fullName: "Electrical and Electronics Engineering",
    
    overview: "Department of Electrical and Electronics Engineering (EEE) is one of the oldest branches of engineering in Vignan Institute of Technology and Science right from its inception during 1999 with an intake of 60 Students and it also offering Post graduate program in Power Electronics and Electrical Drives from the Academic year 2012-2013 with an intake of 18 students.\n\nB.Tech (Electrical and Electronics Engineering) : 60\nM.Tech(Power Electronics and Electrical Drives) : 18",
    
    vision: "To become a centre of excellence in Electrical and Electronics Engineering Education which produce competent engineers who can contribute for the socio-economic development of the nation.",
    
    mission: [
      "To impart a detailed understanding of the fundamentals of Electrical and Electronics Engineering practice.",
      "To undertake projects and research activities in collaboration with national premier institutions and R&D centres.",
      "To foster student with innovative designs and make them industry – ready with relevant projects.",
      "To expose students to critical challenges and life-long learning in the broadest context of upcoming technologies."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. T. Rama Subba Reddy",
      designation: "Professor & HOD",
      image: "/DepartmentPage/HodProfiles/EEE.jpg",
      message: "Dr. T Rama Subba Reddy is working as Professor and Head of Electrical & Electronics Engineering department at Vignan Institute of Technology & Science, Deshmukhi, affiliated to JNTUH, Hyderabad.",
      stats: [
        { label: "Journal Publications", value: 7 },
        { label: "Ph.D. Guiding", value: 5 }
      ],
      achievements: [
        "Carrying Sponsored Research Project as Co-PI “Development of Energy Management Controller based Inverter with Improved PV System fed Organization” funded by MNRE worth Rs: 75.34 lacs"
      ]
    },

    laboratories: [
      "Project Laboratory",
      "Industry Supported Laboratory",
      "Electrical Machines Lab",
      "Power Systems Lab",
      "Power Electronics Lab",
      "Control Systems Lab",
      "Measurements & Instrumentation Lab",
    ],

    faculty: [
      { sno: 1, name: "Dr. DURGA SUKUMAR GADWALA", registrationNumber: "7206-160311-141220", designation: "Professor & Principal" },
      { sno: 2, name: "Dr. THADI RAMASUBBA REDDY", registrationNumber: "9083-150413-130544", designation: "Professor & HOD" },
      { sno: 3, name: "Dr. REPANA RAMANJAN PRASAD", registrationNumber: "27150407-075125", designation: "Associate Professor" },
      { sno: 4, name: "Dr. ANIL KUMAR DHARAVATU", registrationNumber: "87150407-150915", designation: "Associate Professor" },
      { sno: 5, name: "SRIKANTH DUBBA", registrationNumber: "82150406-161438", designation: "Assistant Professor" },
      { sno: 6, name: "SRINIVAS GADDE", registrationNumber: "94150407-144340", designation: "Assistant Professor" },
      { sno: 7, name: "LUKKA BHANU GANESH", registrationNumber: "93150407-120126", designation: "Assistant Professor" },
      { sno: 8, name: "GUDIPATI SRAVANTHI", registrationNumber: "50150407-152354", designation: "Assistant Professor" },
      { sno: 9, name: "GOTTIPATI MADHURI", registrationNumber: "7349-150418-173227", designation: "Assistant Professor" },
      { sno: 10, name: "SRIKANT GANJI", registrationNumber: "4105-160312-123136", designation: "Assistant Professor" },
      { sno: 11, name: "VISHNU KANDAKATLA", registrationNumber: "9850-170520-185454", designation: "Assistant Professor" },
      { sno: 12, name: "RAJASHEKHAR KOORAPATI", registrationNumber: "9170-180201-153425", designation: "Assistant Professor" },
      { sno: 13, name: "T JAYANTH KUMAR", registrationNumber: "28150404-120113", designation: "Assistant Professor" },
      { sno: 14, name: "KARNAM SREEDHAR BHARGAVI", registrationNumber: "18150402-153802", designation: "Assistant Professor" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Dr. T Rama Subba Reddy, Professor, VGNT", designation: "Chairman" },
      { sno: 2, name: "Dr.Neelakantan Krishnan, Associate Professor, VGNT", designation: "Member" },
      { sno: 3, name: "Dr.B. Pakeeraiah, Associate Professor, GRIET", designation: "Special Invitee" },
      { sno: 4, name: "Er.N.Rajasekhara, AE – TSTRANSCO", designation: "Special Invitee" },
      { sno: 5, name: "Mr.R.Ramanjan Prasad, Associate Professor, VGNT", designation: "Coordinator" },
      { sno: 6, name: "Mrs.G.Sravanthi, Assistant Professor, VGNT", designation: "Member" },
      { sno: 7, name: "Mr.G.Srinivas, Assistant Professor, VGNT", designation: "Member" },
      { sno: 8, name: "Mr.A.Akhilesh, II-C.R 1", designation: "Member" },
      { sno: 9, name: "Kum.K.Kalpana, II-C.R 2", designation: "Member" },
      { sno: 10, name: "Kum.P.Sushmitha, III-C.R 1", designation: "Member" },
      { sno: 11, name: "Mr.P.Srikanth, III-C.R 2", designation: "Member" },
      { sno: 12, name: "Kum.P.Akhila Reddy, IV-C.R 1", designation: "Member" },
      { sno: 13, name: "Mr.P.Prabhas Chandra, IV-C.R 2", designation: "Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Dr T.RamaSubba Reddy, Professor & HOD", designation: "Chairman" },
      { sno: 2, name: "Mr.R.Ramanjan Prasad, Associate Professor", designation: "Convener" },
      { sno: 3, name: "Mr.L.Bhanu Ganesh, Assistant Professor", designation: "Member" },
      { sno: 4, name: "Mrs.G.Sravanthi, Assistant Professor", designation: "Member" }
    ],

    researchProjects: [
      {
        faculty: ["Dr. G Durga Sukumar"],
        title: "Fund for Improvement of S & T Infrastructure",
        fundingAgency: "DST-FIST Ref: SR/FST/COLLEGE-141/2017",
        sanctionDate: "2017-18",
        duration: "3 Years"
      },
      {
        faculty: ["Dr. D. Suresh"],
        title: "Grid interconnection of renewable energy with improved power quality feature for three phase four wire distribution system",
        fundingAgency: "SERB-DST",
        sanctionDate: "2016-17",
        duration: "3 Years"
      },
      {
        faculty: ["Dr. G. Durga Sukumar"],
        title: "Development of Energy Management controller based inverter with improved PV system fed organization",
        fundingAgency: "MNRE",
        sanctionDate: "2016-17",
        duration: "2 Years"
      }
    ],

    consultancyProjects: [
      {
        faculty: "Dr.Vijayalaxmi Biradar, Dr. G. Durga Sukumar",
        title: "Hands on Robotics and IOT Training: Exposing Rural Students to Opportunities in STEM",
        fundingAgency: "IEEE CSS OUT REACH FUND",
        date: "2020-2021",
        amountInLakhs: 7.9875,
        duration: "6 months"
      },
      {
        faculty: "Dr. B. Vijayalaxmi & Dr.G. Durga Sukumar",
        title: "Tele Health Monitoring System in rural areas through Primary Health Center Using IOT for COVID-19",
        fundingAgency: "IEEE Sight/hac",
        date: "2020-2021",
        amountInLakhs: 4.12575,
        duration: "6 months"
      },
      {
        faculty: "DR. T Ram Subba Reddy",
        title: "Electrical Wiring & Installation of electrical Appliances at Vignan Girls hostel, hyderabad",
        fundingAgency: "Lavu Educational Society",
        date: "2017-18",
        amountInLakhs: 2.0,
        duration: "3 Months"
      },
      {
        faculty: "G. Srinivas, R. Ramanjan Prasad",
        title: "Installation and commissioning of Panels, Cable Work, A/c, Fan and LED Wiring, CC Camera at Vignan versity school",
        fundingAgency: "Lavu educational society",
        date: "2017-18",
        amountInLakhs: 2.5,
        duration: "1 year"
      }
    ],

    mous: [
      { name: "M/s Thrive Solar Energy Private Ltd., Hyderabad", duration: "10 years", activities: "Internships" },
      { name: "Lokesh Electrotech Industries Pvt. Ltd., Hyderabad", duration: "10 years", activities: "Internships" }
    ],

    achievements: [],

    peos: [
      "Graduate shall be able to apply fundamentals of science in emerging areas of Electrical and Electronics Engineering, research, employability and handle the realistic problems with ethical values",
      "Graduate of Electrical and Electronics Engineering shall have communication skills, sense of responsibility to serve the society and protect the environment.",
      "Graduate shall have habit of innovative thinking to pursue career in core areas of electrical and electronics engineering.",
      "The graduates shall have strong foundation in academics, managerial skill, leadership qualities and to be industry ready professionals with updated technologies and soft skill."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "PSO-I: Ability to identify, formulate, design and investigate the solution for complex engineering problems by applying knowledge acquired from electric circuits, electronics circuits, digital electronics, control systems, electrical machines, power semi-conductor drives and Power systems.",
      "PSO-II: Apply modern engineering hardware, software tools and project management techniques to design, develop and implement electrical, electronics and allied multi-disciplinary projects to meet the demands of industry and to provide solutions to the real time engineering problems.",
      "PSO-III: To inculcate professional ethics, team work and entrepreneurial thinking to address societal electrical issues with advanced engineering solution techniques."
    ],

    pgPsos: [
      "PSO-I : The ability to analyse and develop hardware along with control algorithm in the area of power electronics and electrical drives for complex system in varying conditions.",
      "PSO-II : The ability to apply standard engineering practices and project management strategies in developing hardware project with best environmental practices to deliver a quality product for domestic and industrial success.",
      "PSO-III :The ability to employ engineering knowledge, modern tools and green engineering practices in creating career path to be an entrepreneur"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "mech": {
    id: "mech",
    name: "MECH",
    fullName: "Mechanical Engineering",
    
    overview: "The department of mechanical engineering was established in the year 1999 with an intake of 60 students and increased to 180 students from year 2014 onwards. The department also has a post graduate program in Design & Manufacturing with a sanctioned intake of 18 students. University ranks, gold medals is a regular feature of the department.",
    
    vision: "To develop into an advanced centre for exceptionally good Education and Research in the field of Mechanical engineering design, materials and manufacturing Technologies, consistent with the contemporary and futuristic needs of society through optimized technologies.",
    
    mission: [
      "To provide strong foundations in mechanical engineering supported by matching laboratory facilities in an excellent academic environment conducive to learning.",
      "To implement learning centered teaching practices and deliver Industry ready students with professional ethics, concern for environmental safety & awareness of societal problems in the design-production cycle of mechanical engineering products/systems.",
      "To forge active alliances with mechanical engineering industries, reputed R&D institutions and academia to appreciate the complexities of arriving at solutions to real world mechanical engineering problems and the interfaces required with other disciplines.",
      "To take stock of the emerging technologies and make the department of mechanical engineering a center of excellence for academics & research"
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. B. Singaravel",
      designation: "Associate Professor & HOD",
      image: "/DepartmentPage/HodProfiles/MECH.jpg",
      message: "Dr.B. Singaravel is working as Associate Professor and Head of Mechanical Engineering department at Vignan Institute of Technology & Science, Deshmukhi, affiliated to JNTUH, Hyderabad. He had about 10 years of teaching experience. He is member of various professional bodies such as ISTE and IEI. Research topics of interest are Machining and Optimization.",
      stats: [
        { label: "Patents", value: 4 },
        { label: "Book/Book-Chapters", value: 6 },
        { label: "Journal/Conference Papers", value: 50 },
        { label: "Funded Projects (DST SERB)", value: 1 }
      ]
    },

    laboratories: [
      "Project Laboratory",
      "Composite Laboratory",
      "Manufacturing Technology Lab",
      "Fluid Mechanics & Hydraulic Machinery Lab",
      "Thermal Engineering Lab",
      "Metrology & Machine Tools Lab",
      "Strength of Materials Lab",
      "CAD/CAM Lab",
    ],

    faculty: [
      { sno: 1, name: "Dr. NARENDAR GORENTHLA", registrationNumber: "12150407-144026", designation: "Professor & HOD" },
      { sno: 2, name: "VENKATAPATHI RAO GUTTHA", registrationNumber: "9708-150410-135027", designation: "Professor" },
      { sno: 3, name: "Dr. K CHANDRA SHEKAR", registrationNumber: "60150407-112825", designation: "Professor" },
      { sno: 4, name: "Dr. AYYAGARI KIRANKUMAR", registrationNumber: "1645-220413-141000", designation: "Professor" },
      { sno: 5, name: "Dr. Nimmagadda Leela Prasad", registrationNumber: "0475-150408-125550", designation: "Associate Professor" },
      { sno: 6, name: "Dr. CHAKRADHAR BANDAPALLI", registrationNumber: "0715-190503-150833", designation: "Associate Professor" },
      { sno: 7, name: "Dr. SINGARAVEL BALASUBRAMANIYAN", registrationNumber: "2672-170112-132640", designation: "Assistant Professor" },
      { sno: 8, name: "Dr. C H DIVYA", registrationNumber: "90150407-140023", designation: "Assistant Professor" },
      { sno: 9, name: "ASHOK MUSHAM", registrationNumber: "9685-160305-222251", designation: "Assistant Professor" },
      { sno: 10, name: "A NARESH KUMAR", registrationNumber: "34150407-171743", designation: "Assistant Professor" },
      { sno: 11, name: "SURESH VADEPU", registrationNumber: "2361-160216-184125", designation: "Assistant Professor" },
      { sno: 12, name: "ADDULA VENKATRAMREDDY", registrationNumber: "5201-160314-015937", designation: "Assistant Professor" },
      { sno: 13, name: "KRIT PRAKASH", registrationNumber: "6927-211214-190647", designation: "Assistant Professor" }
    ],

    departmentCommittee: [
      { sno: 1, name: "Prof. N. Leela Prasad, HOD", designation: "Chairman" },
      { sno: 2, name: "Dr. K. Chandra Shekar, Dean Academics", designation: "Member" },
      { sno: 3, name: "Dr. B. Singaravel, Assoc. Prof", designation: "Member" },
      { sno: 4, name: "Dr.A.Kiran Kumar, Professor", designation: "Member" },
      { sno: 5, name: "Dr. Ch. Anusha, Asst. Prof", designation: "Member" },
      { sno: 6, name: "Mr. P. Sadanandam, Asst. Prof", designation: "Member" },
      { sno: 7, name: "Dr. Suresh Akella, Dean& HOD NNR Group of Institutions", designation: "Special Invitee Academics" },
      { sno: 8, name: "Sri. B. Siva Sambi Reddy, Entrepreneur & composite cluster member", designation: "Special Invitee Industrial" },
      { sno: 9, name: "Mr. Jatin Arrvapaili, CEO, Dynamake Engineering.", designation: "Alumni Member" },
      { sno: 10, name: "Mr. R. Sampath Chary, IV-year Student", designation: "Student Member" },
      { sno: 11, name: "Ms. G. Poojitha, III-year Student", designation: "Student Member" },
      { sno: 12, name: "Mr. Sumit Kumar Sharma, II-year St", designation: "Student Member" }
    ],

    disciplinaryCommittee: [
      { sno: 1, name: "Prof. N. Leela Prasad, Professor//HOD", designation: "Chairman" },
      { sno: 2, name: "Dr. B. Singarvel, Assoc prof", designation: "Convener" },
      { sno: 3, name: "Dr. A. Kiran Kumar, Professor", designation: "Member" },
      { sno: 4, name: "Dr. B. chakradhar, Assoc.prof", designation: "Member" },
      { sno: 5, name: "Mrs. M. Radhika, Assoc.Prof", designation: "Member" },
      { sno: 6, name: "Mr. M. Jayanth, Student", designation: "Member" },
      { sno: 7, name: "Ms. M. Santhoshini, Student", designation: "Member" }
    ],

    researchProjects: [
      {
        faculty: ["Dr. B. Singaravel"],
        title: "Verticle Machining Center",
        fundingAgency: "AICTE-MODROB",
        sanctionDate: "2020-2021",
        duration: "2 Year"
      },
      {
        faculty: ["Dr. S.M. Hussaini"],
        title: "Characterization and metallographic studies of INCONEL 718 when formed and subjected to sub-zero Temperature",
        fundingAgency: "JNTUH",
        sanctionDate: "2019-20",
        duration: "1 year"
      },
      {
        faculty: ["Dr. S.M. Hussaini"],
        title: "Manufacturing packing items of Plastic (Plastic PP PET Manufacturing)",
        fundingAgency: "PMEGP Scheme",
        sanctionDate: "2019-20",
        duration: "1 YEAR"
      },
      {
        faculty: ["Dr. B. Vijayalaxmi"],
        title: "Tele Health Monitoring System in rural areas through Primary Health Center Using IOT for COVID-19",
        fundingAgency: "UBA",
        sanctionDate: "2019-20",
        duration: "3 months"
      },
      {
        faculty: ["Dr.N.Dinesh Kumar", "Mr. N. Leela Prasad"],
        title: "Energy harvesting by solar thermal power generation",
        fundingAgency: "DRDO-Anurag",
        sanctionDate: "2017-18",
        duration: "2 years"
      },
      {
        faculty: ["Dr. B. Singaravel"],
        title: "Studies on the performance parameters of curring tool inserts to establish the influence of surface texturing and its design paramets with elemental ceramic coating, minimum quantity lubrication and lubricants",
        fundingAgency: "DST-SERB",
        sanctionDate: "2016-17",
        duration: "3 YEARS"
      }
    ],

    consultancyProjects: [
      {
        faculty: "Prof. G.V. Rao, Dr. K. Chandra Shekar, Dr.N. Leela Prasad & Mr. K. Mangapathi Rao",
        title: "Planning, Design and Implementation of PPC including quality aspects for large range of high accuracy, 100% EOU",
        fundingAgency: "Raghu Vamshi Machine Tools",
        date: "2019-20",
        amountInLakhs: 10.1,
        duration: "1 year"
      },
      {
        faculty: "Dr.B. Singaravel",
        title: "Application of Vegetable Oil based Bio Dielectric Fluid for Sustainable Electric Discharge Machining",
        fundingAgency: "IEI Research and Development Cell",
        date: "2017-18",
        amountInLakhs: 0.3,
        duration: "1 Year"
      },
      {
        faculty: "N.Leela Prasad and Dr.K.Chandra Shekar",
        title: "Design and Fabrication of Furniture",
        fundingAgency: "Lavu Educational Society",
        date: "2017-18",
        amountInLakhs: 3.0,
        duration: "6 Months"
      },
      {
        faculty: "Dr.K.Chandra Shekar",
        title: "Manufacturing of polymer matrix composite sheets",
        fundingAgency: "Gowra Technologies, Hyderabad",
        date: "2017-18",
        amountInLakhs: 2.0,
        duration: "3 Months"
      },
      {
        faculty: "Mr. N. Leela Prasad",
        title: "Design and fabrication of Furniture work",
        fundingAgency: "Lavu Educational Society",
        date: "2017-18",
        amountInLakhs: 10.12,
        duration: "1 Year"
      },
      {
        faculty: "Prof. G V Rao",
        title: "Establishment of Composite Laboratory",
        fundingAgency: "Lavu Educational Society",
        date: "2016-17",
        amountInLakhs: 3.2,
        duration: "6 Months"
      },
      {
        faculty: "Dr. K Chandra Shekar",
        title: "Design and Fabrication of Material Handling Equipment",
        fundingAgency: "Lavu Educational Society",
        date: "2016-17",
        amountInLakhs: 2.0,
        duration: "1 Year"
      },
      {
        faculty: "Mr. N. Leela Prasad",
        title: "PPC layout",
        fundingAgency: "Raghu vamshi Machine tools PVT LTD.",
        date: "2016-17",
        amountInLakhs: 10.10,
        duration: "1.2 Years"
      }
    ],

    mous: [
      { name: "M/s CNC Techics Pvt.Ltd", duration: "10 years", activities: "Workshops" },
      { name: "Telangana and Andhra Composites Manufacturers Assoiation(TAACMA)", duration: "10 years", activities: "Training programmes/workshops/FDP" },
      { name: "Institution of Mechanical Engineers(IME)", duration: "Life Long", activities: "Training programmes" }
    ],

    achievements: [],

    peos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
      "Students were enabled to apply the core mechanical engineering subjects related to Design, Thermal, and Manufacturing knowledge in analysis & to conduct experimental investigation of complex mechanical products / systems.",
      "Graduates were enabled to use the modern modeling and finite element analysis software in developing the new mechanical products and also demonstrates the social responsibility, professional ethics and environmental safety in their professional and personal life.",
      "Co-curricular activities in collaboration with industries, R&D centers and professional bodies and also extra-curricular activities enable the students to acquire organizing abilities, team & competitive spirit, communication & management skills and knowledge of emerging technologies."
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  "civil": {
    id: "civil",
    name: "CIVIL",
    fullName: "Civil Engineering",
    academicCalendars: [],
    courseMaterials: [],
    clubs: [],
    overview: "VGNT has started B.Tech Civil Engineering in 2011, with an intake of 60. There are four faculties working in the department. The students of the department are allowed to participate in Intra and Intercollegiate level paper presentation, technical Quizzes and Project work competitions. In Vignan engineering college, they are also allowed to participate in literary competitions, cultural activities and Sports and Games to boost their social morals. The students bought laurels to the department and to the civil engineering college in Hyderabad, in turn. Industrial visits are arranged for students. The Department has well equipped state-of-the-art laboratories for Surveying, Soil Testing, Cement and Concrete Testing, Highway Material Testing, Quality Testing of water and wastewater samples.",
    vision: "To impart knowledge and excellence in Civil Engineering with global perspective and to make the students ethically, psychologically strong and emotionally balanced engineers to build our nation.",
    mission: [
      "To train the students with the best teaching-learning process in transforming them into outstanding professionals with research aptitude and leadership skills which prepare the innovative minds of budding engineers to face the future challenges through continuous industry-institute interaction."
    ],
    hod: {
      name: "Dr. G GAUTHAM KISHORE REDDY",
      designation: "Assistant Professor & HOD",
      image: "/DepartmentPage/HodProfiles/CIVIL.jpg",
      message: "The Civil Engineering department is dedicated to producing skilled civil engineers who can contribute to the nation's infrastructure development. We provide students with a strong foundation in structural analysis, geotechnical engineering, and environmental engineering.",
    },
    laboratories: [
      "Surveying",
      "Soil Testing",
      "Cement and Concrete Testing",
      "Highway Material Testing",
      "Quality Testing of water and wastewater samples"
    ],
    faculty: [
      { sno: 1, name: "Dr. G GAUTHAM KISHORE REDDY", registrationNumber: "4355-160304-162820", designation: "Assistant Professor & HOD" },
      { sno: 2, name: "Dr. SOUNDARRAJAN DAKSHANAMURTHY", registrationNumber: "9918-170122-172510", designation: "Professor" },
      { sno: 3, name: "Dr. NARAYAN GURUNATH SANGAM", registrationNumber: "6945-150408-105112", designation: "Associate Professor" },
      { sno: 4, name: "Dr. MALIGI DURGA", registrationNumber: "5426-211115-232843", designation: "Associate Professor" },
      { sno: 5, name: "KARTHIK THIPPARTHI", registrationNumber: "5881-160312-132838", designation: "Assistant Professor" },
      { sno: 6, name: "BOLLEBOINA LAVANYA", registrationNumber: "2758-160312-190345", designation: "Assistant Professor" },
      { sno: 7, name: "BURRI MAHESH", registrationNumber: "5126-160312-203805", designation: "Assistant Professor" },
      { sno: 8, name: "JAKINALAPALLY NARESH", registrationNumber: "7202-150409-194456", designation: "Assistant Professor" },
      { sno: 9, name: "JAYARAM MIRYALA", registrationNumber: "6115-190502-120240", designation: "Assistant Professor" },
      { sno: 10, name: "CHILUMULA REETA RANI", registrationNumber: "4687-220706-154215", designation: "Assistant Professor" },
      { sno: 11, name: "SAIKRISHNA ALLA", registrationNumber: "0354-230617-125550", designation: "Assistant Professor" },
      { sno: 12, name: "SINGARAM KAVYA", registrationNumber: "9438-240217-152224", designation: "Assistant Professor" }
    ],
    departmentCommittee: [
      { sno: 1, name: "Dr. D. SoundarRajan", designation: "Chairman" },
      { sno: 2, name: "Dr. Narayan Sangam", designation: "Faculty Coordinator" },
      { sno: 3, name: "Dr.M.Sridevi", designation: "Special Invitee" },
      { sno: 4, name: "Mr. D. Sreedhar", designation: "Special Invitee" },
      { sno: 5, name: "Mr.T. KarthikChary", designation: "Member" },
      { sno: 6, name: "Mrs.B.Lavanya", designation: "Member" },
      { sno: 7, name: "Mr.B. Mahesh", designation: "Member" },
      { sno: 8, name: "Mr. E.Rajesh", designation: "Student Member" },
      { sno: 9, name: "Ms. Chanda Preethi", designation: "Student Member" },
      { sno: 10, name: "Ms.P. Srujana", designation: "Student Member" }
    ],
    disciplinaryCommittee: [
      { sno: 1, name: "Dr. Narayan Sangam", designation: "Chairman" },
      { sno: 2, name: "Mr. Karthik Chary", designation: "Convenor" },
      { sno: 3, name: "Mrs.B. Lavanya", designation: "Member" },
      { sno: 4, name: "Mr. Mahesh", designation: "Member" }
    ],
    mous: [
      { name: "Samsem Engineering Contract", duration: "5 Years", activities: "Internships" },
      { name: "Kandhan Agency", duration: "5 Years", activities: "Internships" },
      { name: "M/s. Smart InfraEST, Kushal Towers, Hyderabad", duration: "2 year", activities: "Workshops/Seminar" },
      { name: "M/s. K L C Infra", duration: "2 year", activities: "Consultancy Projects and internships" },
      { name: "M/s. DBE Constructions", duration: "2 year", activities: "Consultancy projects & internships" },
      { name: "G Ramesh Civil Works", duration: "4 Years", activities: "Consultancy projects" }
    ],
    achievements: [
      "Organized NCACE-2020 Conference with 143 Participants (Dec 2020)",
      "Conducted multiple technical seminars and webinars on High Rise Buildings, Coastal Area Natural Disaster Management, and Recent Advancements in Fiber Reinforced Concrete (2020-21)",
      "Held workshops on Building Information Modelling and Foundation Analysis & Design",
      "Conducted extensive guest lectures on Interior designing using Sketchup, Revit and Architecture, and Offshore Structures"
    ],
    peos: [
      "Professional Excellence: To impart proficiency in engineering knowledge and skills to analyze, design, build, maintain or improve civil engineering based systems.",
      "Understanding Socio-Economic Aspects: To offer broad education and practical skills so that the students can carry out technical investigations within realistic constraints such as economic, environmental, societal, safety and sustainability.",
      "Technical Collaboration: To impart ability to collaborate with and function on multidisciplinary teams to offer engineering solutions to the society.",
      "Continued Self-Learning: To create interest in the students for continuous learning in advanced areas of civil engineering and related fields."
    ],
    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],
    psos: [
      "Engineering Fundamentals: Graduates shall demonstrate sound knowledge in analysis, design, laboratory investigations and construction aspects of Civil Engineering infrastructure, along with good foundation in mathematics, basic sciences and technical communication.",
      "Broadness and Diversity: Graduates will have a broad understanding of economic, environmental, societal, health and safety factors involved in infrastructural development, and shall demonstrate ability to function within multidisciplinary teams with competence in modern tool usage.",
      "Self-Learning and Service: Graduates will be motivated for continuous self – learning in engineering practice and/ or pursue research in advanced areas of Civil Engineering in order to offer engineering services to the society, ethically and responsibly."
    ]
  },
  
  // ─────────────────────────────────────────────────────────────────────────────
  "bsh": {
    id: "bsh",
    name: "BS&H",
    fullName: "Basic Sciences And Humanities",
    
    overview: "Department of Basic Sciences and Humanities is part of Vignan Institute of Technology and Science right from its inception. The department fosters the basic concepts of Engineering with the following disciplines: English, Engineering Chemistry, Engineering Physics, Mathematics, Programming for Problem Solving, Engineering Graphics, BEE, Engineering workshop and Information Technology Workshop.\n\nIt has 13 sections with an intake of 780 students and each section consists of 60 students. The department encompass with the B.Tech. Courses – Civil. Engg., EIE, EEE, Mech. Engg. ECE, CSE, ITE., Data Structures, Machine Learning and Artificial Intelligence.",
    
    vision: "To equip the B.Tech, students with the basic skills as per industry needs along with fulfilling academics. To develop social responsibility, communication skills, team building, problem solving, intra and inter-personal skills, and leadership qualities, adopt student-centered and participatory learning.",
    
    mission: [
      "To build bridge gap between intermediate and B.Tech.",
      "To develop confidence levels of students on B.Tech. course of their respective discipline.",
      "To make the students emotionally strong and competent both in academic and extracurricular activities.",
      "To indoctrinate comprehensive, practical and application oriented learning."
    ],

    academicCalendars: [],
    courseMaterials: [],
    clubs: [],

    hod: {
      name: "Dr. R. Balaji",
      designation: "Associate Professor & HOD",
      image: "/DepartmentPage/HodProfiles/BSH.jpg",
      message: "Dr. R.Balaji is working as Associate professor of Physics and Head Basic Science and Humanities department at Vignan Institute of Technology & Science, Deshmukhi, affiliated to JNTUH, Hyderabad. He has more than 25 years of experience in teaching. He has published more than 7 research papers in national and international journals. He is member of ThermodynamicSociety. His specific areas of research interest are in Thermodynamics Properties of liquids and Quantum Optics.",
      stats: [
        { label: "SCI indexed Journals", value: 7 },
        { label: "National & International Conferences", value: 12 }
      ]
    },

    laboratories: [
      "Physics Lab",
      "Chemistry Lab",
      "English Language Communication Skills Lab",
    ],

    faculty: [
      { sno: 1, name: "Dr. NANDANAVANAM PHANI KUMAR", registrationNumber: "9348-170523-173650", designation: "Professor" },
      { sno: 2, name: "VEMAN REDDY MEKA", registrationNumber: "93150331-102057", designation: "Assistant Professor" },
      { sno: 3, name: "SATISH MOLLI", registrationNumber: "35150407-192436", designation: "Assistant Professor" },
      { sno: 4, name: "MANENDHAR GUNDU", registrationNumber: "4233-150408-084929", designation: "Assistant Professor" },
      { sno: 5, name: "SHYAM SUNDER REDDY", registrationNumber: "3757-150408-124814", designation: "Assistant Professor" },
      { sno: 6, name: "TELUKUNTLA VENKAT LAKSHMI NARAYANA", registrationNumber: "4811-150408-175032", designation: "Assistant Professor" },
      { sno: 7, name: "AVINASH HARIDAS", registrationNumber: "2241-150409-125513", designation: "Assistant Professor" },
      { sno: 8, name: "VENUGOPAL DEVARAPALLI", registrationNumber: "5350-150419-105442", designation: "Assistant Professor" },
      { sno: 9, name: "APARNA PALAKALADINE", registrationNumber: "2580-160223-205750", designation: "Assistant Professor" },
      { sno: 10, name: "CHILAKALA SRI LAKSHMI", registrationNumber: "4903-170913-142053", designation: "Assistant Professor" },
      { sno: 11, name: "PASUMARTI NAGA RAJU", registrationNumber: "4115-220124-111611", designation: "Assistant Professor" },
      { sno: 12, name: "RAVI MAHLA", registrationNumber: "7051-240909-105645", designation: "Assistant Professor" },
      { sno: 13, name: "KASIREDDY BHARAT SIMHA REDDY", registrationNumber: "32150407-143452", designation: "Assistant Professor" },
      { sno: 14, name: "KONDA MANOHAR", registrationNumber: "5843-150409-134144", designation: "Assistant Professor" },
      { sno: 15, name: "BODDU RAMANA REDDY", registrationNumber: "6064-150409-143143", designation: "Assistant Professor" },
      { sno: 16, name: "RANABOTHU GOVARDHAN", registrationNumber: "7858-150414-131227", designation: "Assistant Professor" },
      { sno: 17, name: "SRINIVASA RAO TUMATI", registrationNumber: "5811-160318-144704", designation: "Associate Professor" },
      { sno: 18, name: "POLINENI GOVINDA CHOWDARY", registrationNumber: "6366-150408-203914", designation: "Associate Professor" },
      { sno: 19, name: "KOMBAIAH KOMBAIAH", registrationNumber: "0002-210705-154156", designation: "Assistant Professor" },
      { sno: 20, name: "RAFI SHAIK", registrationNumber: "0479-230402-113907", designation: "Associate Professor" },
      { sno: 21, name: "RAJARIKAM NAGARAJU", registrationNumber: "9697-240505-231524", designation: "Assistant Professor" },
      { sno: 22, name: "LAKSHMI SAVITHRI VATSALYA VAVILALA", registrationNumber: "10150402-150336", designation: "Assistant Professor" },
      { sno: 23, name: "ANINDHYAKIRAN JALADI", registrationNumber: "58150407-153339", designation: "Assistant Professor" },
      { sno: 24, name: "BALAJI RAMBHATLA", registrationNumber: "5346-150408-130712", designation: "Assistant Professor" },
      { sno: 25, name: "MUKESH BEJJARAPU", registrationNumber: "1506-150408-230932", designation: "Assistant Professor" },
      { sno: 26, name: "SHAIK RASOOL SAHEB", registrationNumber: "4530-160307-002640", designation: "Assistant Professor" },
      { sno: 27, name: "SRINIVAS CHERUPALLY", registrationNumber: "3605-240214-131829", designation: "Assistant Professor" },
      { sno: 28, name: "KANNAN", registrationNumber: "9145-241102-140733", designation: "Associate Professor" },
      { sno: 29, name: "GANTA SARITHA REDDY", registrationNumber: "1779-150409-124946", designation: "Assistant Professor" },
      { sno: 30, name: "MYLA KUMAR BABU", registrationNumber: "9289-150409-161159", designation: "Assistant Professor" },
      { sno: 31, name: "CHANDRASEKHAR KILARI", registrationNumber: "3162-150410-183124", designation: "Assistant Professor" },
      { sno: 32, name: "MUSUKU JAYASREE", registrationNumber: "8148-170104-103741", designation: "Assistant Professor" },
      { sno: 33, name: "PUSHPA RAGINI GANDURI", registrationNumber: "4051-170211-151706", designation: "Assistant Professor" },
      { sno: 34, name: "M MANIMOZHISELLVAN", registrationNumber: "7461-240505-100045", designation: "Assistant Professor" },
      { sno: 35, name: "KORE MALLESH", registrationNumber: "7195-240505-180904", designation: "Assistant Professor" },
      { sno: 36, name: "MD ABDUL AHAD", registrationNumber: "1963-240506-161740", designation: "Assistant Professor" },
      { sno: 37, name: "BYRI AGA REDDY", registrationNumber: "95150407-110143", designation: "Associate Professor" },
      { sno: 38, name: "VENKATA RAO YERRAGUNTLA", registrationNumber: "5244-150408-180920", designation: "Assistant Professor" },
      { sno: 39, name: "NAGOJU BHASKARA CHARY", registrationNumber: "6442-150413-163535", designation: "Others" },
      { sno: 40, name: "NALLALA ROOPA", registrationNumber: "1815-150420-222120", designation: "Assistant Professor" },
      { sno: 41, name: "VENKATESH BODIGE", registrationNumber: "6549-150507-154751", designation: "Assistant Professor" },
      { sno: 42, name: "MANNAVA SREERAMU", registrationNumber: "2275-160222-140546", designation: "Assistant Professor" },
      { sno: 43, name: "MADAGONI PRASAD SHIVA", registrationNumber: "4966-170105-152901", designation: "Assistant Professor" },
      { sno: 44, name: "BODIGA PRAVEEN KUMAR", registrationNumber: "2196-170201-092946", designation: "Assistant Professor" },
      { sno: 45, name: "HIMABINDU CHINTHAPATLA", registrationNumber: "3927-180122-141245", designation: "Assistant Professor" },
      { sno: 46, name: "CHENNUBOINA SRINIVASA RAO", registrationNumber: "6653-200314-101126", designation: "Others" },
      { sno: 47, name: "YADAIAH THATIPAMULA", registrationNumber: "7566-210813-121812", designation: "Assistant Professor" },
      { sno: 48, name: "YERRAGUNTLA TRIPURA", registrationNumber: "6719-211220-191402", designation: "Assistant Professor" },
      { sno: 49, name: "PONNAM DIVYA", registrationNumber: "6164-220705-113738", designation: "Assistant Professor" },
      { sno: 50, name: "PADMAVATHI MALLULA", registrationNumber: "2548-220722-145609", designation: "Others" }
    ],

    researchProjects: [
      {
        faculty: ["Dr. N. Phani Kumar"],
        title: "Dynamics of Certain Non linear System in Epideomiology",
        fundingAgency: "JNTUH",
        sanctionDate: "2019-20",
        duration: "1 year"
      },
      {
        faculty: ["Dr. Venkatesh Miriyala"],
        title: "Design Synthesis and Bioligical evaluation of novel Isoquinoline amide and sulphonamidi analogues as Autotaxin inhibitors",
        fundingAgency: "SERB",
        sanctionDate: "2017-18",
        duration: "3 Years"
      }
    ],

    achievements: [
      "Conducted Webinar on How to Teach Communication Skills (03.06.2021) with 532 participants",
      "Conducted Webinar on Learning Pronunciation for Language Fluency (10.06.2021) with 275 participants",
      "Organized Workshop on Recent methods of teaching mathematics and engineering chemistry (Dec 2018)",
      "Conducted Induction Program for faculty members (July 2018)",
      "Organized Guest Lecture on Application of Parametric modeling & Multi Physics Simulation (Jan 2019)",
      "Organized Guest lecture on Recent Trends in Electronic Industry (July 2018)",
      "Conducted Personality development session for faculty (April 2018)",
      "Conducted Workshop on Method of Teaching for Engineering Students with reference to new JNTUH Syllabus (July 2017)",
      "Organized Workshop on Comprehensive teaching methodologies for engineering faculty (Dec 2016)",
      "Organized Orientation Program for young teachers (July 2016)"
    ],

    peos: [
      "To develop the ability among students to synthesize data and technical concepts for application to product design in industry that need the global needs.",
      "To provide students with sound foundation in the mathematical, scientific and engineering fundamental necessary to formulate, solve and analyze engineering problems and to prepare them to work as part of teams on multi disciplinary projects.",
      "To promote student awareness of the lifelong learning and to create them with professional ethics and code of practice."
    ],

    pos: [
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
      "Problem analysis: Identify, formulate review research literature and analyze complex engineering problems reaching substantiated conclusions using first principle of mathematics, natural science and engineering science.",
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental",
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    ],

    psos: [
    ]
  },
};
