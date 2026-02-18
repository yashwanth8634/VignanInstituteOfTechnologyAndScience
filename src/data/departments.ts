export interface DepartmentData {
  id: string;
  name: string;
  fullName: string;
  established: string;
  intake: string;
  heroImage?: string;
  overview: string;
  vision: string;
  mission: string[];
  hod: {
    name: string;
    image?: string;
    message: string;
    designation: string;
  };
  laboratories: string[];
  achievements: string[];
  faculty: FacultyMember[];
  peos: string[];
  pos: string[];
  psos: string[];
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
  cse: {
    id: "cse",
    name: "CSE",
    fullName: "Computer Science and Engineering",
    established: "1999",
    intake: "180",
    overview: `The Department of Computer Science and Engineering has been a core part of the Vignan Institute of Technology and Science since its inception in 1999. It started with an initial intake of 60 students, which has progressively increased to 180. The department has also been offering a Post Graduate (M.Tech) program in Computer Science and Engineering since 2009 with an intake of 18 students.`,
    vision: `To emerge as a premier centre for education and research in computer science and engineering and in transforming students into innovative professionals of contemporary and future technologies to cater for the global needs of human resources for IT and ITES companies.`,
    mission: [
      "To produce excellent computer science professionals by imparting quality training, hands-on-experience, and value-based education.",
      "To strengthen links with industry through collaborative partnerships in research & product development and student internships.",
      "To promote research-based projects and activities among the students in the emerging areas of technology.",
      "To explore opportunities for skill development in the application of computer science among rural and underprivileged populations.",
    ],
    hod: {
      name: "Dr. G. Rajavikram",
      image:"https://vignanits.ac.in/wp-content/uploads/2022/05/HODCSE.jpg",
      designation: "Head of Department",
      message: `Dr. Rajavikram completed his PhD from JNTU Hyderabad in 2021. He holds an M.Tech (CSE) from JNTU CEH and a B.Tech (CSE) from Kshatriya College of Engineering. He has 16 years of experience in teaching, research, and administration. His research interests include Wireless Sensor Networks, IoT, and Network Security.`,
    },
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
      "Advanced Algorithms Lab",
    ],
    faculty: [
      { sno: 1, name: "Dr. GANDHAM RAJAVIKRAM", registrationNumber: "9283-170102-130548", designation: "Associate Professor & HOD",image:"https://vignanits.ac.in/wp-content/uploads/2022/05/HODCSE.jpg" },
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
      { sno: 44, name: "AKULA SANDEEP KUMAR", registrationNumber: "7380-240608-143920", designation: "Assistant Professor" },
    ],
    achievements: [
      "Received the “YUVA ACHARYA AWARD” from Bharat Education Excellence Awards in September 2021.",
      "Best Teacher Award at Vignan Institute of Technology and Science (2012).",
      "Best Paper Presentation Award at ICICSE–2014 International Conference.",
      "Qualified UGC-NET for Lectureship and multiple GATE qualifications (including AIR 3002 in 2014).",
      "NPTEL Elite Silver certificate in “Programming in Java”.",
    ],
    peos: [
      "To create and sustain a community of learning in which students acquire and apply knowledge with ethical, ecological, and economic considerations.",
      "To provide knowledge-based services to meet the needs of society and industry.",
      "To design and implement concepts across multiple arenas.",
      "To educate students in disseminating research findings and developing soft skills for entrepreneurship.",
    ],
    pos: [
      "Engineering Knowledge",
      "Problem Analysis",
      "Design/Development of Solutions",
      "Modern Tool Usage",
      "The Engineer and Society",
      "Environment and Sustainability",
      "Ethics",
      "Individual and Team Work",
      "Communication",
      "Project Management and Finance",
      "Life-long Learning",
    ],
    psos: [
      "Professional Skills: Ability to apply concepts like Data Structures, OS, and Networks to complex system design.",
      "Problem-Solving Skills: Using latest hardware/software tools for cost-effective solutions.",
      "Entrepreneurship & Career: Social awareness and ethical responsibility to lead a successful career.",
    ],
  },
};
