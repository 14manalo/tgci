/**
 * TGCI Church Website - Centralized Virtual Database Layer
 * Utilizes browser localStorage to persist Events, Prayers, Contact Inquiries, and Branches.
 * Synchronizes modifications across all client-side pages and the Admin Panel.
 */

const DEFAULT_EVENTS = [
  {
    id: "evt-youth-camp-2026",
    title: "Youth Camp 2026",
    category: "upcoming-events",
    tag: "Youth Event",
    month: "FEB",
    day: "15",
    smallDate: "15–16",
    fullDate: "Feb 15–16, 2026",
    startDate: "2026-02-15T09:00:00",
    time: "9:00 AM - 5:00 PM",
    location: "Parañaque Branch",
    image: "assets/images/event6.jpg",
    shortDescription: "A faith-filled youth camp with worship, team building, fellowship, and leadership activities.",
    description: "Youth Camp 2026 is a two-day spiritual and leadership gathering for young people. It includes worship, preaching, fellowship, group activities, team building, prayer time, and youth empowerment sessions.",
    details: [
      "Opening Worship",
      "Team Building Activities",
      "Leadership Talk",
      "Group Fellowship",
      "Prayer and Reflection",
      "Awarding and Closing Program"
    ],
    formLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  },
  {
    id: "evt-bible-study-2026",
    title: "Bible Study",
    category: "church-wide",
    tag: "Church-wide",
    month: "APR",
    day: "20",
    smallDate: "2026",
    fullDate: "April 20, 2026",
    startDate: "2026-04-20T08:00:00",
    time: "8:00 AM - 12:00 PM",
    location: "All Branches",
    image: "assets/images/event1.jpg",
    shortDescription: "Join us for a powerful Bible study and fellowship.",
    description: "A church-wide Bible study focused on spiritual growth, understanding the Word of God, and strengthening the faith of every member through teaching and fellowship.",
    details: [
      "Opening Prayer",
      "Bible Teaching",
      "Group Sharing",
      "Reflection Time",
      "Closing Prayer"
    ],
    formLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  },
  {
    id: "evt-one2one-2026",
    title: "One2One",
    category: "church-wide",
    tag: "Church-wide",
    month: "May",
    day: "13",
    smallDate: "2026",
    fullDate: "May 13, 2026",
    startDate: "2026-05-13T18:00:00",
    time: "6 PM ONWARDS",
    location: "All Branches",
    image: "assets/images/event2.jpg",
    shortDescription: "Join us for a life-changing Discipleship Training focused on spiritual growth and strengthening your walk with God.",
    description: "A meaningful Discipleship Training designed to equip believers through Bible teachings, spiritual mentoring, prayer, fellowship, and practical lessons that help strengthen faith and develop Christ-centered living.",
    details: [
      "Opening Prayer",
      "Bible Teaching",
      "Group Sharing",
      "Reflection Time",
      "Closing Prayer"
    ],
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSePjg1iq6nbUnuQ8Pwh-e6Xne__mYPLCyx-UO9mZlx4F6b8bQ/viewform"
  },
  {
    id: "evt-youth-branch-gathering",
    title: "Youth Branch Gathering",
    category: "branch-events",
    tag: "Branch Event",
    month: "MAR",
    day: "10",
    smallDate: "2026",
    fullDate: "Mar 10, 2026",
    startDate: "2026-03-10T09:00:00",
    time: "9:00 AM - 12:00 PM",
    location: "Parañaque Branch",
    image: "assets/images/event3.jpg",
    shortDescription: "Branch-based leadership and fellowship gathering.",
    description: "A branch-based youth gathering created to encourage young members through fellowship, leadership activities, worship, and spiritual connection.",
    details: [
      "Youth Fellowship",
      "Short Devotion",
      "Games and Activities",
      "Leadership Sharing",
      "Group Prayer"
    ],
    formLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  },
  {
    id: "evt-thanksgiving-party",
    title: "Thanksgiving Youth Party",
    category: "past-events",
    tag: "Past Event",
    month: "December",
    day: "26-27",
    smallDate: "2025",
    fullDate: "December 26-27, 2025",
    startDate: "2025-12-26T15:00:00",
    time: "3:00 PM ONWARDS",
    location: "TGCI Comon",
    image: "assets/images/event5.jpg",
    shortDescription: "A fun and meaningful gathering for our youth to celebrate Thanksgiving together.",
    description: "A thanksgiving celebration for the youth ministry filled with worship, games, fellowship, food, and appreciation moments.",
    details: [
      "Thanksgiving Worship",
      "Youth Games",
      "Fellowship Dinner",
      "Appreciation Program",
      "Closing Prayer"
    ],
    formLink: "#"
  },
  {
    id: "evt-camp-meeting-2026",
    title: "Youth Camp 2026",
    category: "past-events",
    tag: "Past Event",
    month: "April",
    day: "2-5",
    smallDate: "2026",
    fullDate: "April 2-5, 2026",
    startDate: "2026-04-02T09:00:00",
    time: "9:00 AM ONWARDS",
    location: "Puerto Real Resort Real Quezon",
    image: "assets/images/event6.jpg",
    shortDescription: "A powerful and refreshing Camp Meeting where the church gathers for worship, spiritual growth, fellowship, and encounters.",
    description: "A meaningful Camp Meeting filled with inspiring messages, worship sessions, prayer, fellowship, team activities, and moments of spiritual renewal for everyone attending.",
    details: [
      "Thanksgiving Worship",
      "Youth Games",
      "Fellowship Dinner",
      "Appreciation Program",
      "Closing Prayer"
    ],
    formLink: "#"
  },
  {
    id: "evt-vbs-kids-2026",
    title: "Vacation Bible Study for Kids 2026",
    category: "past-events",
    tag: "Past Event",
    month: "May ",
    day: "11-15",
    smallDate: "2026",
    fullDate: "May 11-15, 2026",
    startDate: "2026-05-11T07:30:00",
    time: "7:30 AM - 9:00 AM",
    location: "Subic Ilaya, Agoncillo, Batangas",
    image: "assets/images/event7.jpg",
    shortDescription: "A fun and faith-filled Vacation Bible Study where kids learn about God through exciting activities.",
    description: "A meaningful Vacation Bible Study for kids filled with Bible stories, worship songs, games, crafts, team activities, and fun learning experiences that help children grow in faith.",
    details: [
      "Thanksgiving Worship",
      "Youth Games",
      "Fellowship Dinner",
      "Appreciation Program",
      "Closing Prayer"
    ],
    formLink: "#"
  }
];

const DEFAULT_PRAYERS = [
  {
    id: "pry-1",
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "09171234567",
    category: "Family & Relationships",
    description: "Praying for good health, strength, and harmony within our family, and protection for our children.",
    isAnonymous: false,
    status: "Prayed For",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleString()
  },
  {
    id: "pry-2",
    name: "Anonymous",
    email: "",
    phone: "",
    category: "Guidance & Decisions",
    description: "Praying for guidance regarding a career decision and that God open doors of opportunity.",
    isAnonymous: true,
    status: "Pending",
    date: new Date(Date.now() - 12 * 60 * 60 * 1000).toLocaleString()
  }
];

const DEFAULT_INQUIRIES = [
  {
    id: "inq-1",
    name: "Maria Santos",
    email: "maria.santos@email.com",
    reason: "General Inquiry",
    subject: "Sunday Service Details",
    message: "Hello! I am planning to visit your church this Sunday. Is there an active youth program during the 9:00 AM service? Thank you!",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
    read: false
  },
  {
    id: "inq-2",
    name: "Alex Reyes",
    email: "alex.r@email.com",
    reason: "Branch Information",
    subject: "Parañaque Branch Location",
    message: "Hi TGCI Team, can I get the exact address or landmarks for the Parañaque branch? Thank you and God bless!",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString(),
    read: true
  }
];

const DEFAULT_BRANCHES = [
  {
    id: "agoncillo",
    area: "batangas",
    searchKeywords: "agoncillo batangas agoncillo chapter",
    name: "Agoncillo Chapter",
    location: "Batangas",
    image: "assets/images/branch-agoncillo.jpg",
    description: "Serving Batangas Province with dedication, worship, and community care.",
    tags: ["Family Friendly", "Worship"],
    membersCount: "500+ Members",
    established: "Est. 2005",
    directionsLink: "https://www.google.com/maps/search/Agoncillo+Batangas",
    pastorName: "Ptra. Mayeth Encarnacion",
    pastorImage: "assets/images/branch-pastor1.jpg",
    pastorDescription: "Agoncillo Chapter welcomes families and new visitors through worship, fellowship, prayer, and community care.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Youth Fellowship", time: "Saturday 3:00 PM" }
    ],
    gallery: [
      "assets/images/branch-agoncillo.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/hero.jpg"
    ],
    members: [
      { name: "Ptra. Mayeth Encarnacion", position: "Pastor", category: "senior" },
      { name: "Faye Balani", position: "Youth Leader / Worship Leader", category: "youth" },
      { name: "Gabriel Balani", position: "Drummer", category: "youth" },
      { name: "Evangel Balani", position: "Admin / CE Kids", category: "youth" },
      { name: "Mary Frezy Balani", position: "Song Leader", category: "youth" },
      { name: "Judiel Balani", position: "Worship, Mission Ministry", category: "youth" },
      { name: "Mark Niel Encarnacion", position: "Youth President", category: "youth" },
      { name: "Mark John Encarnacion", position: "Guitarist", category: "youth" },
      { name: "Mario Encarnacion", position: "Guitarist", category: "youth" },
      { name: "Justlyn Encarnacion", position: "Worship & Kids Ministry", category: "youth" },
      { name: "Tessie Encarnacion", position: "Evangelism and Intercessory Ministry", category: "senior" },
      { name: "Diosa Matias", position: "Worship & Help Ministry", category: "senior" },
      { name: "David Nikiel Daño", position: "Member", category: "toddlers" },
      { name: "Daniel Tovi Daño", position: "Member", category: "toddlers" },
      { name: "Domiel Nico Daño", position: "Member", category: "toddlers" },
      { name: "Moriah Faith Balani", position: "Member", category: "toddlers" },
      { name: "Nickie Matias", position: "Admin, Youth Leader / CE Kids", category: "youth" },
      { name: "Princess Nicole Matias", position: "Member", category: "youth" },
      { name: "Adrian Daño", position: "Member", category: "youth" },
      { name: "KC Manalo", position: "Member", category: "youth" },
      { name: "Christian Daño", position: "Worship and Help Ministry", category: "youth" },
      { name: "Vicky Daño", position: "Evangelism / Kids Ministry", category: "senior" }
    ]
  },
  {
    id: "pamplona",
    area: "quezon",
    searchKeywords: "pamplona quezon province pamplona chapter",
    name: "Pamplona Chapter",
    location: "Quezon Province",
    image: "assets/images/branch-pamplona.jpg",
    description: "Growing in faith and fellowship while serving families across Quezon Province.",
    tags: ["Discipleship", "Community"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Pamplona+Quezon+Province",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Pamplona Chapter serves families through discipleship, worship, and fellowship.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Youth Fellowship", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-pamplona.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Anna Delos Reyes", position: "Pastor", category: "senior" },
      { name: "Josefa Bautista", position: "Song Leader", category: "senior" },
      { name: "Kevin Lim", position: "Guitarist", category: "youth" },
      { name: "Claire Santos", position: "Choir Member", category: "youth" },
      { name: "Miguel Ortega", position: "Usher", category: "toddlers" }
    ]
  },
  {
    id: "gumian",
    area: "quezon",
    searchKeywords: "gumian quezon province gumian chapter",
    name: "Gumian Chapter",
    location: "Quezon Province",
    image: "assets/images/branch-gumian.jpg",
    description: "Helping communities grow in worship, discipleship, and service.",
    tags: ["Outreach", "Service"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Gumian+Quezon+Province",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Gumian Chapter continues to serve through worship, outreach, and spiritual care.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Ministry Fellowship", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-gumian.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Branch Pastor", position: "Pastor", category: "senior" },
      { name: "Worship Leader", position: "Song Leader", category: "youth" },
      { name: "Youth Leader", position: "Youth Ministry", category: "youth" }
    ]
  },
  {
    id: "magsaysay",
    area: "quezon",
    searchKeywords: "magsaysay quezon province magsaysay chapter",
    name: "Magsaysay Chapter",
    location: "Quezon Province",
    image: "assets/images/branch-magsaysay.jpg",
    description: "Building a faith-filled community through worship and fellowship.",
    tags: ["Worship", "Family"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Magsaysay+Quezon+Province",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Magsaysay Chapter is a welcoming place for worship, family fellowship, and growth.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Fellowship", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-magsaysay.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Branch Pastor", position: "Pastor", category: "senior" },
      { name: "Worship Leader", position: "Song Leader", category: "youth" },
      { name: "Youth Leader", position: "Youth Ministry", category: "youth" }
    ]
  },
  {
    id: "panukulan",
    area: "quezon",
    searchKeywords: "panukulan quezon province panukulan chapter",
    name: "Panukulan Chapter",
    location: "Quezon Province",
    image: "assets/images/branch-panukulan.jpg",
    description: "Serving families and communities through faith, love, and ministry.",
    tags: ["Outreach", "Faith"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Panukulan+Quezon+Province",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Panukulan Chapter serves families through faith, outreach, and ministry care.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Outreach", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-panukulan.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Branch Pastor", position: "Pastor", category: "senior" },
      { name: "Worship Leader", position: "Song Leader", category: "youth" },
      { name: "Youth Leader", position: "Youth Ministry", category: "youth" }
    ]
  },
  {
    id: "mahabang-lalim",
    area: "quezon",
    searchKeywords: "mahabang lalim quezon province mahabang lalim chapter",
    name: "Mahabang Lalim Chapter",
    location: "Quezon Province",
    image: "assets/images/branch-mahabang-lalim.jpg",
    description: "Growing together as one church family rooted in faith and service.",
    tags: ["Discipleship", "Service"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Mahabang+Lalim+Quezon+Province",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Mahabang Lalim Chapter is rooted in discipleship, worship, and faithful service.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Discipleship", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-mahabang-lalim.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Branch Pastor", position: "Pastor", category: "senior" },
      { name: "Worship Leader", position: "Song Leader", category: "youth" },
      { name: "Youth Leader", position: "Youth Ministry", category: "youth" }
    ]
  },
  {
    id: "paranaque",
    area: "manila",
    searchKeywords: "paranaque parañaque metro manila ncr paranaque chapter",
    name: "Parañaque Chapter",
    location: "Metro Manila",
    image: "assets/images/branch-paranaque.jpg",
    description: "Serving the NCR region with faith, prayer, fellowship, and ministry.",
    tags: ["City Ministry", "Prayer"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Paranaque+Metro+Manila",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor2.jpg",
    pastorDescription: "Parañaque Chapter serves the city through prayer, worship, discipleship, and outreach.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "10:00 AM" },
      { title: "Prayer Night", time: "Wednesday 6:00 PM" },
      { title: "Ministry Training", time: "Saturday 2:00 PM" }
    ],
    gallery: [
      "assets/images/branch-paranaque.jpg",
      "assets/images/event1.jpg",
      "assets/images/church-bg.jpg"
    ],
    members: [
      { name: "Daniel Cruz", position: "Pastor", category: "senior" },
      { name: "Sophia Reyes", position: "Song Leader", category: "youth" },
      { name: "Rafael Lim", position: "Keyboardist", category: "youth" },
      { name: "Lara Tan", position: "Choir Member", category: "youth" },
      { name: "Vincent Torres", position: "Drummer", category: "youth" }
    ]
  },
  {
    id: "kalubkob",
    area: "cavite",
    searchKeywords: "kalubkob imus cavite chapter",
    name: "Kalubkob Chapter",
    location: "Imus Cavite",
    image: "assets/images/branch-kalubkob.jpg",
    description: "Serving the Cavite region with dedication, worship, and loving fellowship.",
    tags: ["Youth Active", "Fellowship"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Imus+Cavite",
    pastorName: "Rico Sumido",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Kalubkob Chapter serves the Cavite region through worship, fellowship, and ministry.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Youth Fellowship", time: "Saturday 3:00 PM" }
    ],
    gallery: [
      "assets/images/branch-kalubkob.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Rico Sumido", position: "Pastor", category: "senior" },
      { name: "Ailene Ablan", position: "Song Leader", category: "senior" },
      { name: "Melody Sumido", position: "Pastora", category: "senior" },
      { name: "Lara Tan", position: "Choir Member", category: "youth" },
      { name: "Vincent Torres", position: "Drummer", category: "youth" }
    ]
  },
  {
    id: "litlit",
    area: "cavite",
    searchKeywords: "litlit imus cavite chapter",
    name: "Litlit Chapter",
    location: "Imus Cavite",
    image: "assets/images/branch-litlit.jpg",
    description: "Creating a welcoming place for worship, prayer, and spiritual growth.",
    tags: ["Prayer", "Community"],
    membersCount: "350+ Members",
    established: "Est. 2012",
    directionsLink: "https://www.google.com/maps/search/Litlit+Imus+Cavite",
    pastorName: "Branch Pastor",
    pastorImage: "assets/images/pastor1.jpg",
    pastorDescription: "Litlit Chapter welcomes people through prayer, worship, community, and care.",
    serviceSchedule: [
      { title: "Sunday Worship", time: "9:00 AM" },
      { title: "Prayer Gathering", time: "Wednesday 5:00 PM" },
      { title: "Fellowship", time: "Scheduled" }
    ],
    gallery: [
      "assets/images/branch-litlit.jpg",
      "assets/images/church-bg.jpg",
      "assets/images/branch-main.jpg"
    ],
    members: [
      { name: "Branch Pastor", position: "Pastor", category: "senior" },
      { name: "Worship Leader", position: "Song Leader", category: "youth" },
      { name: "Youth Leader", position: "Youth Ministry", category: "youth" }
    ]
  }
];

const db = {
  // Helper to safely parse JSON
  _parse(val, fallback) {
    try {
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      console.error("JSON parsing error", e);
      return fallback;
    }
  },

  // Helper to safely stringify JSON
  _stringify(val) {
    return JSON.stringify(val);
  },

  // Initialize the database and load seed data
  init() {
    if (!localStorage.getItem("tgci_initialized")) {
      localStorage.setItem("tgci_events", this._stringify(DEFAULT_EVENTS));
      localStorage.setItem("tgci_prayers", this._stringify(DEFAULT_PRAYERS));
      localStorage.setItem("tgci_inquiries", this._stringify(DEFAULT_INQUIRIES));
      localStorage.setItem("tgci_branches", this._stringify(DEFAULT_BRANCHES));
      localStorage.setItem("tgci_password", "admin123"); // Default Password
      localStorage.setItem("tgci_initialized", "true");
      console.log("TGCI Virtual Database initialized successfully with default records.");
    } else if (!localStorage.getItem("tgci_branches")) {
      // Gracefully support database upgrade to Phase 2
      localStorage.setItem("tgci_branches", this._stringify(DEFAULT_BRANCHES));
      console.log("TGCI Virtual Database upgraded to Phase 2: branches seeded successfully.");
    }
  },

  // RESET Database to defaults
  reset() {
    localStorage.removeItem("tgci_initialized");
    localStorage.removeItem("tgci_branches");
    this.init();
  },

  // EVENTS CRUD
  events: {
    getAll() {
      db.init();
      return db._parse(localStorage.getItem("tgci_events"), DEFAULT_EVENTS);
    },

    saveAll(list) {
      localStorage.setItem("tgci_events", db._stringify(list));
      return true;
    },

    getById(id) {
      return this.getAll().find(e => e.id === id);
    },

    add(event) {
      const list = this.getAll();
      const newEvent = {
        id: "evt-" + Date.now() + Math.random().toString(36).substring(2, 5),
        ...event,
        details: Array.isArray(event.details) ? event.details : (event.details || "").split("\n").filter(d => d.trim() !== "")
      };
      list.unshift(newEvent); // Add to beginning
      this.saveAll(list);
      return newEvent;
    },

    update(id, updatedEvent) {
      const list = this.getAll();
      const index = list.findIndex(e => e.id === id);
      if (index !== -1) {
        list[index] = {
          ...list[index],
          ...updatedEvent,
          details: Array.isArray(updatedEvent.details) ? updatedEvent.details : (updatedEvent.details || "").split("\n").filter(d => d.trim() !== "")
        };
        this.saveAll(list);
        return list[index];
      }
      return null;
    },

    delete(id) {
      let list = this.getAll();
      const originalLength = list.length;
      list = list.filter(e => e.id !== id);
      if (list.length < originalLength) {
        this.saveAll(list);
        return true;
      }
      return false;
    }
  },

  // PRAYERS CRUD
  prayers: {
    getAll() {
      db.init();
      return db._parse(localStorage.getItem("tgci_prayers"), DEFAULT_PRAYERS);
    },

    saveAll(list) {
      localStorage.setItem("tgci_prayers", db._stringify(list));
      return true;
    },

    add(prayer) {
      const list = this.getAll();
      const newPrayer = {
        id: "pry-" + Date.now() + Math.random().toString(36).substring(2, 5),
        name: prayer.isAnonymous ? "Anonymous" : (prayer.name || "Anonymous"),
        email: prayer.isAnonymous ? "" : (prayer.email || ""),
        phone: prayer.isAnonymous ? "" : (prayer.phone || ""),
        category: prayer.category || "General",
        description: prayer.description || "",
        isAnonymous: !!prayer.isAnonymous,
        status: "Pending",
        date: new Date().toLocaleString()
      };
      list.unshift(newPrayer);
      this.saveAll(list);
      return newPrayer;
    },

    updateStatus(id, status) {
      const list = this.getAll();
      const index = list.findIndex(p => p.id === id);
      if (index !== -1) {
        list[index].status = status;
        this.saveAll(list);
        return list[index];
      }
      return null;
    },

    delete(id) {
      let list = this.getAll();
      const originalLength = list.length;
      list = list.filter(p => p.id !== id);
      if (list.length < originalLength) {
        this.saveAll(list);
        return true;
      }
      return false;
    }
  },

  // INQUIRIES CRUD
  inquiries: {
    getAll() {
      db.init();
      return db._parse(localStorage.getItem("tgci_inquiries"), DEFAULT_INQUIRIES);
    },

    saveAll(list) {
      localStorage.setItem("tgci_inquiries", db._stringify(list));
      return true;
    },

    add(inquiry) {
      const list = this.getAll();
      const newInquiry = {
        id: "inq-" + Date.now() + Math.random().toString(36).substring(2, 5),
        name: inquiry.name || "",
        email: inquiry.email || "",
        reason: inquiry.reason || "General Inquiry",
        subject: inquiry.subject || "No Subject",
        message: inquiry.message || "",
        date: new Date().toLocaleString(),
        read: false
      };
      list.unshift(newInquiry);
      this.saveAll(list);
      return newInquiry;
    },

    markAsRead(id, isRead = true) {
      const list = this.getAll();
      const index = list.findIndex(i => i.id === id);
      if (index !== -1) {
        list[index].read = isRead;
        this.saveAll(list);
        return list[index];
      }
      return null;
    },

    delete(id) {
      let list = this.getAll();
      const originalLength = list.length;
      list = list.filter(i => i.id !== id);
      if (list.length < originalLength) {
        this.saveAll(list);
        return true;
      }
      return false;
    }
  },

  // DYNAMIC BRANCHES & CHAPTERS DATABASE
  branches: {
    getAll() {
      db.init();
      return db._parse(localStorage.getItem("tgci_branches"), DEFAULT_BRANCHES);
    },

    saveAll(list) {
      localStorage.setItem("tgci_branches", db._stringify(list));
      return true;
    },

    getById(id) {
      return this.getAll().find(b => b.id === id);
    },

    update(id, updatedBranch) {
      const list = this.getAll();
      const index = list.findIndex(b => b.id === id);
      if (index !== -1) {
        list[index] = {
          ...list[index],
          ...updatedBranch
        };
        // Recalculate members count string to be safe
        if (list[index].members) {
          list[index].membersCount = list[index].members.length + " Members";
        }
        this.saveAll(list);
        return list[index];
      }
      return null;
    },

    addMember(branchId, member) {
      const list = this.getAll();
      const index = list.findIndex(b => b.id === branchId);
      if (index !== -1) {
        const branch = list[index];
        if (!branch.members) branch.members = [];
        
        branch.members.push({
          name: member.name || "New Member",
          position: member.position || "Member",
          category: member.category || "youth"
        });
        
        branch.membersCount = branch.members.length + " Members";
        this.saveAll(list);
        return branch;
      }
      return null;
    },

    deleteMember(branchId, memberName) {
      const list = this.getAll();
      const index = list.findIndex(b => b.id === branchId);
      if (index !== -1) {
        const branch = list[index];
        if (branch.members) {
          const originalLength = branch.members.length;
          branch.members = branch.members.filter(m => m.name !== memberName);
          if (branch.members.length < originalLength) {
            branch.membersCount = branch.members.length + " Members";
            this.saveAll(list);
            return branch;
          }
        }
      }
      return null;
    }
  },

  // AUTHENTICATION
  auth: {
    verifyPassword(password) {
      db.init();
      const stored = localStorage.getItem("tgci_password") || "admin123";
      if (password === stored) {
        sessionStorage.setItem("tgci_admin_logged", "true");
        return true;
      }
      return false;
    },

    changePassword(newPassword) {
      db.init();
      if (!newPassword || newPassword.trim().length < 4) return false;
      localStorage.setItem("tgci_password", newPassword.trim());
      return true;
    },

    isLoggedIn() {
      return sessionStorage.getItem("tgci_admin_logged") === "true";
    },

    logout() {
      sessionStorage.removeItem("tgci_admin_logged");
      return true;
    }
  },

  // BACKUP UTILITIES
  backup: {
    exportJSON() {
      db.init();
      const data = {
        tgci_events: db.events.getAll(),
        tgci_prayers: db.prayers.getAll(),
        tgci_inquiries: db.inquiries.getAll(),
        tgci_branches: db.branches.getAll(),
        tgci_password: localStorage.getItem("tgci_password") || "admin123"
      };
      return JSON.stringify(data, null, 2);
    },

    importJSON(jsonString) {
      try {
        const data = JSON.parse(jsonString);
        if (data.tgci_events && data.tgci_prayers && data.tgci_inquiries) {
          localStorage.setItem("tgci_events", db._stringify(data.tgci_events));
          localStorage.setItem("tgci_prayers", db._stringify(data.tgci_prayers));
          localStorage.setItem("tgci_inquiries", db._stringify(data.tgci_inquiries));
          if (data.tgci_branches) {
            localStorage.setItem("tgci_branches", db._stringify(data.tgci_branches));
          }
          if (data.tgci_password) {
            localStorage.setItem("tgci_password", data.tgci_password);
          }
          localStorage.setItem("tgci_initialized", "true");
          return true;
        }
        return false;
      } catch (e) {
        console.error("Failed to import JSON data", e);
        return false;
      }
    }
  }
};

// Initialize database instantly when db.js is loaded
db.init();
