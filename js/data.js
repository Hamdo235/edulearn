// =============================================
//  EDULEARN — Base de données simulée (JSON)
// =============================================

const DB = {
  users: [
    {
      id: 1, role: "admin",
      nom: "Abakar", prenom: "Admin",
      email: "admin@edulearn.td",
      password: "admin123",
      avatar: "AA",
      dateInscription: "2024-01-01"
    },
    {
      id: 2, role: "etudiant",
      nom: "Mahamat", prenom: "Yakhoub",
      email: "yakhoub@edulearn.td",
      password: "1234",
      avatar: "YM",
      dateInscription: "2025-01-15",
      coursInscrits: [1, 2, 4],
      progression: { 1: 75, 2: 40, 4: 10 }
    },
    {
      id: 3, role: "etudiant",
      nom: "Hassan", prenom: "Fatima",
      email: "fatima@edulearn.td",
      password: "1234",
      avatar: "FH",
      dateInscription: "2025-02-03",
      coursInscrits: [1, 3],
      progression: { 1: 100, 3: 60 }
    },
    {
      id: 4, role: "formateur",
      nom: "Ahmat", prenom: "Dr. Ibrahim",
      email: "formateur@edulearn.td",
      password: "1234",
      avatar: "IA",
      dateInscription: "2024-06-10",
      coursCrees: [1, 2, 3]
    }
  ],

  cours: [
    {
      id: 1,
      titre: "Développement Web Full Stack",
      description: "Maîtrisez HTML, CSS, JavaScript, Node.js et les bases de données pour créer des applications web complètes.",
      categorie: "Informatique",
      niveau: "Intermédiaire",
      duree: "48h",
      lecons: 24,
      formateur: "Dr. Ibrahim Ahmat",
      formateurId: 4,
      image: "💻",
      couleur: "#6366f1",
      prix: 15000,
      inscrits: 128,
      note: 4.8,
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      modules: [
        { titre: "Introduction au Web", lecons: 4, duree: "6h" },
        { titre: "HTML & CSS Avancé", lecons: 6, duree: "10h" },
        { titre: "JavaScript ES6+", lecons: 7, duree: "14h" },
        { titre: "Backend avec Node.js", lecons: 5, duree: "12h" },
        { titre: "Projet Final", lecons: 2, duree: "6h" }
      ]
    },
    {
      id: 2,
      titre: "Machine Learning avec Python",
      description: "Apprenez les fondamentaux du Machine Learning avec scikit-learn, pandas et numpy pour analyser des données.",
      categorie: "Data Science",
      niveau: "Avancé",
      duree: "36h",
      lecons: 18,
      formateur: "Dr. Ibrahim Ahmat",
      formateurId: 4,
      image: "🤖",
      couleur: "#ec4899",
      prix: 20000,
      inscrits: 94,
      note: 4.9,
      tags: ["Python", "scikit-learn", "pandas", "numpy"],
      modules: [
        { titre: "Python pour la Data Science", lecons: 4, duree: "8h" },
        { titre: "Analyse exploratoire", lecons: 3, duree: "6h" },
        { titre: "Algorithmes ML", lecons: 7, duree: "14h" },
        { titre: "Projets pratiques", lecons: 4, duree: "8h" }
      ]
    },
    {
      id: 3,
      titre: "Java & Programmation Orientée Objet",
      description: "Maîtrisez Java, la POO, les design patterns et développez des applications robustes et maintenables.",
      categorie: "Informatique",
      niveau: "Débutant",
      duree: "30h",
      lecons: 20,
      formateur: "Dr. Ibrahim Ahmat",
      formateurId: 4,
      image: "☕",
      couleur: "#f59e0b",
      prix: 12000,
      inscrits: 213,
      note: 4.7,
      tags: ["Java", "POO", "Design Patterns", "Spring"],
      modules: [
        { titre: "Bases de Java", lecons: 6, duree: "8h" },
        { titre: "POO Avancée", lecons: 5, duree: "8h" },
        { titre: "Collections & Exceptions", lecons: 5, duree: "7h" },
        { titre: "Projet Java", lecons: 4, duree: "7h" }
      ]
    },
    {
      id: 4,
      titre: "Réseaux & Sécurité Informatique",
      description: "Comprendre les protocoles réseau, TCP/IP, les pare-feux et les bases de la cybersécurité.",
      categorie: "Réseaux",
      niveau: "Intermédiaire",
      duree: "40h",
      lecons: 22,
      formateur: "Mme. Nadia Oumar",
      formateurId: 5,
      image: "🔒",
      couleur: "#10b981",
      prix: 18000,
      inscrits: 76,
      note: 4.6,
      tags: ["TCP/IP", "Firewall", "VPN", "Cybersécurité"],
      modules: [
        { titre: "Fondamentaux réseau", lecons: 5, duree: "8h" },
        { titre: "Protocoles TCP/IP", lecons: 6, duree: "10h" },
        { titre: "Sécurité réseau", lecons: 7, duree: "14h" },
        { titre: "Cas pratiques", lecons: 4, duree: "8h" }
      ]
    },
    {
      id: 5,
      titre: "Bases de Données & SQL",
      description: "Maîtrisez la conception de bases de données, le SQL, MySQL, PostgreSQL et les principes de normalisation.",
      categorie: "Base de données",
      niveau: "Débutant",
      duree: "24h",
      lecons: 16,
      formateur: "Prof. Saleh Moussa",
      formateurId: 6,
      image: "🗄️",
      couleur: "#3b82f6",
      prix: 10000,
      inscrits: 305,
      note: 4.5,
      tags: ["SQL", "MySQL", "PostgreSQL", "NoSQL"],
      modules: [
        { titre: "Introduction aux BDD", lecons: 3, duree: "4h" },
        { titre: "SQL Fondamental", lecons: 5, duree: "8h" },
        { titre: "SQL Avancé", lecons: 5, duree: "8h" },
        { titre: "Optimisation", lecons: 3, duree: "4h" }
      ]
    },
    {
      id: 6,
      titre: "Mobile App avec Flutter",
      description: "Créez des applications mobiles cross-platform iOS et Android avec Flutter et Dart.",
      categorie: "Mobile",
      niveau: "Intermédiaire",
      duree: "42h",
      lecons: 26,
      formateur: "M. Karim Adoum",
      formateurId: 7,
      image: "📱",
      couleur: "#8b5cf6",
      prix: 22000,
      inscrits: 58,
      note: 4.8,
      tags: ["Flutter", "Dart", "iOS", "Android"],
      modules: [
        { titre: "Dart & Flutter Basics", lecons: 6, duree: "10h" },
        { titre: "UI Flutter", lecons: 8, duree: "14h" },
        { titre: "State Management", lecons: 6, duree: "10h" },
        { titre: "Publication App", lecons: 6, duree: "8h" }
      ]
    }
  ],

  stats: {
    totalEtudiants: 842,
    totalCours: 6,
    totalFormateurs: 5,
    revenusTotal: 4580000,
    inscriptionsMois: [65, 78, 92, 88, 110, 124, 98, 134, 145, 162, 178, 195]
  }
};

// =============================================
//  Gestion de la session (localStorage)
// =============================================

const Auth = {
  login(email, password) {
    const user = DB.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("edulearn_user", JSON.stringify(user));
      return user;
    }
    return null;
  },

  logout() {
    localStorage.removeItem("edulearn_user");
    window.location.href = "../index.html";
  },

  getUser() {
    const data = localStorage.getItem("edulearn_user");
    return data ? JSON.parse(data) : null;
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = "index.html";
    }
  }
};

// =============================================
//  Utilitaires
// =============================================

const Utils = {
  formatPrice(p) {
    return p.toLocaleString("fr-FR") + " FCFA";
  },

  renderStars(note) {
    const full = Math.floor(note);
    const half = note % 1 >= 0.5;
    let html = "";
    for (let i = 0; i < full; i++) html += "★";
    if (half) html += "☆";
    for (let i = full + (half ? 1 : 0); i < 5; i++) html += "☆";
    return html;
  },

  getNiveauBadge(niveau) {
    const map = {
      "Débutant": "badge-vert",
      "Intermédiaire": "badge-bleu",
      "Avancé": "badge-rouge"
    };
    return map[niveau] || "badge-bleu";
  },

  getCoursByIds(ids) {
    return DB.cours.filter(c => ids.includes(c.id));
  },

  getCoursById(id) {
    return DB.cours.find(c => c.id === id);
  }
};
