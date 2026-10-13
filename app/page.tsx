
"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Server,
  Bot,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  LockKeyhole,
  Network,
  Globe2,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  Fingerprint,
  Activity,
  Database,
  Zap,
  Send,
} from "lucide-react";

type Language = "fr" | "es" | "en";

const translations = {
  fr: {
    nav: ["Expertises", "Formations", "Notre vision", "Contact"],
    quote: "Demander un devis",
    eyebrow: "CYBERSÉCURITÉ · TECHNOLOGIE · INNOVATION",
    hero1: "La technologie",
    hero2: "au service de",
    hero3: "votre avenir.",
    heroText:
      "Cybersécurité, infrastructure IT, intelligence artificielle et formation. Sonqo Security accompagne les entreprises dans la construction d'un environnement numérique plus sûr, intelligent et performant.",
    discover: "Explorer nos expertises",
    location: "Basée en France · Ouverte à l'international",
    expertiseLabel: "NOS EXPERTISES",
    expertiseTitle: "Une expertise globale.",
    expertiseTitle2: "Une vision sans limites.",
    expertiseText:
      "De la protection de vos systèmes à la transformation de vos processus, nous réunissons les compétences technologiques essentielles à votre développement.",
    services: [
      {
        number: "01",
        title: "Cybersécurité",
        description:
          "Protégez vos données, vos systèmes et vos activités face aux menaces numériques.",
        tags: ["Analyse des risques", "Protection des données", "Sécurité des accès"],
      },
      {
        number: "02",
        title: "Infrastructure & IT",
        description:
          "Construisez un environnement informatique fiable, sécurisé et adapté à votre organisation.",
        tags: ["Réseaux & systèmes", "Sauvegardes", "Support informatique"],
      },
      {
        number: "03",
        title: "Automatisation & IA",
        description:
          "Simplifiez vos opérations et explorez les possibilités de l'intelligence artificielle.",
        tags: ["Automatisation", "Solutions IA", "Optimisation"],
      },
      {
        number: "04",
        title: "Formation professionnelle",
        description:
          "Développez les compétences numériques de vos collaborateurs et renforcez votre culture de sécurité.",
        tags: ["Sensibilisation", "Ateliers", "Formations sur mesure"],
      },
    ],
    trainingLabel: "SONQO ACADEMY",
    trainingTitle: "La sécurité commence",
    trainingTitle2: "par la connaissance.",
    trainingText:
      "Le facteur humain est essentiel à la cybersécurité. Nous proposons des formations adaptées aux entreprises, aux équipes et à leurs réalités professionnelles.",
    trainingList: [
      "Sensibilisation à la cybersécurité",
      "Phishing, mots de passe et authentification",
      "Protection des données professionnelles",
      "Intelligence artificielle et bonnes pratiques",
    ],
    trainingNote:
      "Attestations de formation selon le programme suivi. Les formations ne constituent pas actuellement des certifications professionnelles reconnues par l'État.",
    trainingCTA: "Organiser une formation",
    visionLabel: "NOTRE IDENTITÉ",
    visionTitle: "La technologie",
    visionTitle2: "avec un cœur.",
    visionText1:
      "Sonqo signifie « cœur » en quechua. Plus qu'un nom, c'est une conviction : la technologie doit rester au service des personnes.",
    visionText2:
      "Née d'une vision multiculturelle et implantée en France, Sonqo Security associe sécurité, innovation et proximité pour accompagner les organisations dans leur évolution numérique.",
    processLabel: "NOTRE MÉTHODE",
    processTitle: "De votre problème",
    processTitle2: "à notre solution.",
    steps: [
      ["01", "Écouter", "Comprendre votre activité et vos besoins."],
      ["02", "Analyser", "Identifier les risques et les opportunités."],
      ["03", "Concevoir", "Proposer une solution claire et adaptée."],
      ["04", "Accompagner", "Vous aider à déployer et faire évoluer la solution."],
    ],
    contactLabel: "PARLONS DE VOTRE PROJET",
    contactTitle: "Votre prochain projet",
    contactTitle2: "commence ici.",
    contactText:
      "Décrivez votre besoin, même si vous ne connaissez pas la solution technique. Nous étudierons votre demande pour vous proposer une approche adaptée.",
    fullName: "Nom et prénom",
    company: "Entreprise / organisation",
    email: "Adresse email",
    phone: "Téléphone (facultatif)",
    country: "Pays",
    need: "Quel service recherchez-vous ?",
    budget: "Budget estimé",
    message: "Décrivez votre projet ou votre problème...",
    submit: "Préparer ma demande",
    needs: [
      "Cybersécurité",
      "Infrastructure & IT",
      "Automatisation & IA",
      "Formation professionnelle",
      "Développement web / logiciel",
      "Je ne sais pas encore",
    ],
    budgets: [
      "Budget à définir",
      "Moins de 500 €",
      "500 € – 1 500 €",
      "1 500 € – 5 000 €",
      "5 000 € – 15 000 €",
      "Plus de 15 000 €",
    ],
    formInfo:
      "Le bouton ouvre votre application de messagerie avec la demande préremplie. Vous devrez confirmer son envoi.",
    direct: "CONTACT DIRECT",
    footer: "Protéger aujourd'hui. Construire demain.",
    rights: "Tous droits réservés.",
  },
  es: {
    nav: ["Servicios", "Formación", "Nuestra visión", "Contacto"],
    quote: "Solicitar presupuesto",
    eyebrow: "CIBERSEGURIDAD · TECNOLOGÍA · INNOVACIÓN",
    hero1: "La tecnología",
    hero2: "al servicio de",
    hero3: "tu futuro.",
    heroText:
      "Ciberseguridad, infraestructura IT, inteligencia artificial y formación. Sonqo Security acompaña a las empresas en la construcción de un entorno digital más seguro, inteligente y eficiente.",
    discover: "Explorar servicios",
    location: "Con base en Francia · Alcance internacional",
    expertiseLabel: "NUESTROS SERVICIOS",
    expertiseTitle: "Experiencia integral.",
    expertiseTitle2: "Una visión sin límites.",
    expertiseText:
      "Desde la protección de sistemas hasta la transformación de procesos, reunimos las competencias tecnológicas esenciales para tu desarrollo.",
    services: [
      {
        number: "01",
        title: "Ciberseguridad",
        description:
          "Protege tus datos, sistemas y operaciones frente a las amenazas digitales.",
        tags: ["Análisis de riesgos", "Protección de datos", "Seguridad de accesos"],
      },
      {
        number: "02",
        title: "Infraestructura & IT",
        description:
          "Construye un entorno informático fiable, seguro y adaptado a tu organización.",
        tags: ["Redes y sistemas", "Copias de seguridad", "Soporte informático"],
      },
      {
        number: "03",
        title: "Automatización & IA",
        description:
          "Simplifica operaciones y descubre las posibilidades de la inteligencia artificial.",
        tags: ["Automatización", "Soluciones IA", "Optimización"],
      },
      {
        number: "04",
        title: "Formación empresarial",
        description:
          "Desarrolla las competencias digitales de tus empleados y refuerza su cultura de seguridad.",
        tags: ["Sensibilización", "Talleres", "Formación a medida"],
      },
    ],
    trainingLabel: "SONQO ACADEMY",
    trainingTitle: "La seguridad empieza",
    trainingTitle2: "por el conocimiento.",
    trainingText:
      "El factor humano es esencial para la ciberseguridad. Ofrecemos formación adaptada a las empresas, sus equipos y sus necesidades.",
    trainingList: [
      "Sensibilización en ciberseguridad",
      "Phishing, contraseñas y autenticación",
      "Protección de datos profesionales",
      "Inteligencia artificial y buenas prácticas",
    ],
    trainingNote:
      "Constancias de formación según el programa realizado. Actualmente no son certificaciones profesionales reconocidas oficialmente por el Estado.",
    trainingCTA: "Organizar una formación",
    visionLabel: "NUESTRA IDENTIDAD",
    visionTitle: "Tecnología",
    visionTitle2: "con corazón.",
    visionText1:
      "Sonqo significa «corazón» en quechua. Más que un nombre, es una convicción: la tecnología debe estar al servicio de las personas.",
    visionText2:
      "Nacida de una visión multicultural y establecida en Francia, Sonqo Security combina seguridad, innovación y cercanía para acompañar a las organizaciones en su evolución digital.",
    processLabel: "NUESTRO MÉTODO",
    processTitle: "De tu problema",
    processTitle2: "a nuestra solución.",
    steps: [
      ["01", "Escuchar", "Comprender tu actividad y tus necesidades."],
      ["02", "Analizar", "Identificar riesgos y oportunidades."],
      ["03", "Diseñar", "Proponer una solución clara y adaptada."],
      ["04", "Acompañar", "Ayudarte a implementar y evolucionar la solución."],
    ],
    contactLabel: "HABLEMOS DE TU PROYECTO",
    contactTitle: "Tu próximo proyecto",
    contactTitle2: "empieza aquí.",
    contactText:
      "Describe lo que necesitas, aunque no conozcas la solución técnica. Estudiaremos tu solicitud para proponerte un enfoque adaptado.",
    fullName: "Nombre y apellidos",
    company: "Empresa / organización",
    email: "Correo electrónico",
    phone: "Teléfono (opcional)",
    country: "País",
    need: "¿Qué servicio necesitas?",
    budget: "Presupuesto estimado",
    message: "Describe tu proyecto o problema...",
    submit: "Preparar mi solicitud",
    needs: [
      "Ciberseguridad",
      "Infraestructura & IT",
      "Automatización & IA",
      "Formación empresarial",
      "Desarrollo web / software",
      "Todavía no lo sé",
    ],
    budgets: [
      "Presupuesto por definir",
      "Menos de 500 €",
      "500 € – 1.500 €",
      "1.500 € – 5.000 €",
      "5.000 € – 15.000 €",
      "Más de 15.000 €",
    ],
    formInfo:
      "El botón abre tu aplicación de correo con la solicitud preparada. Tendrás que confirmar el envío.",
    direct: "CONTACTO DIRECTO",
    footer: "Proteger hoy. Construir mañana.",
    rights: "Todos los derechos reservados.",
  },
  en: {
    nav: ["Expertise", "Training", "Our vision", "Contact"],
    quote: "Request a quote",
    eyebrow: "CYBERSECURITY · TECHNOLOGY · INNOVATION",
    hero1: "Technology",
    hero2: "in service of",
    hero3: "your future.",
    heroText:
      "Cybersecurity, IT infrastructure, artificial intelligence and training. Sonqo Security helps companies build safer, smarter and more efficient digital environments.",
    discover: "Explore our expertise",
    location: "Based in France · International outlook",
    expertiseLabel: "OUR EXPERTISE",
    expertiseTitle: "Integrated expertise.",
    expertiseTitle2: "Limitless vision.",
    expertiseText:
      "From protecting systems to transforming processes, we bring together the technological capabilities essential to your growth.",
    services: [
      {
        number: "01",
        title: "Cybersecurity",
        description:
          "Protect your data, systems and operations against digital threats.",
        tags: ["Risk assessment", "Data protection", "Access security"],
      },
      {
        number: "02",
        title: "Infrastructure & IT",
        description:
          "Build a reliable, secure IT environment tailored to your organisation.",
        tags: ["Networks & systems", "Backups", "IT support"],
      },
      {
        number: "03",
        title: "Automation & AI",
        description:
          "Simplify operations and discover the potential of artificial intelligence.",
        tags: ["Automation", "AI solutions", "Optimisation"],
      },
      {
        number: "04",
        title: "Corporate training",
        description:
          "Develop employees' digital skills and strengthen their security awareness.",
        tags: ["Awareness", "Workshops", "Tailored training"],
      },
    ],
    trainingLabel: "SONQO ACADEMY",
    trainingTitle: "Security begins",
    trainingTitle2: "with knowledge.",
    trainingText:
      "People play a vital role in cybersecurity. We offer training tailored to businesses, their teams and their needs.",
    trainingList: [
      "Cybersecurity awareness",
      "Phishing, passwords and authentication",
      "Professional data protection",
      "Artificial intelligence and best practices",
    ],
    trainingNote:
      "Training attendance or completion certificates may be provided. These are not currently state-recognised professional certifications.",
    trainingCTA: "Arrange training",
    visionLabel: "OUR IDENTITY",
    visionTitle: "Technology",
    visionTitle2: "with a heart.",
    visionText1:
      "Sonqo means 'heart' in Quechua. More than a name, it reflects our belief that technology should serve people.",
    visionText2:
      "Built on a multicultural vision and based in France, Sonqo Security combines security, innovation and a human approach to support organisations in their digital evolution.",
    processLabel: "OUR APPROACH",
    processTitle: "From your challenge",
    processTitle2: "to our solution.",
    steps: [
      ["01", "Listen", "Understand your business and needs."],
      ["02", "Analyse", "Identify risks and opportunities."],
      ["03", "Design", "Propose a clear, tailored solution."],
      ["04", "Support", "Help implement and evolve the solution."],
    ],
    contactLabel: "LET'S DISCUSS YOUR PROJECT",
    contactTitle: "Your next project",
    contactTitle2: "starts here.",
    contactText:
      "Tell us what you need, even if you don't know the technical solution. We'll review your request and propose an appropriate approach.",
    fullName: "Full name",
    company: "Company / organisation",
    email: "Email address",
    phone: "Phone (optional)",
    country: "Country",
    need: "What service do you need?",
    budget: "Estimated budget",
    message: "Describe your project or challenge...",
    submit: "Prepare my request",
    needs: [
      "Cybersecurity",
      "Infrastructure & IT",
      "Automation & AI",
      "Corporate training",
      "Web / software development",
      "I'm not sure yet",
    ],
    budgets: [
      "To be discussed",
      "Under €500",
      "€500 – €1,500",
      "€1,500 – €5,000",
      "€5,000 – €15,000",
      "Over €15,000",
    ],
    formInfo:
      "This opens your email application with a prepared message. You must confirm sending it.",
    direct: "DIRECT CONTACT",
    footer: "Protect today. Build tomorrow.",
    rights: "All rights reserved.",
  },
};

const serviceIcons = [ShieldCheck, Server, Bot, GraduationCap];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <div
      ref={setElement}
      className={`${className} transition-all duration-700 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        total > 0 ? (window.scrollY / total) * 100 : 0
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const body = [
      "SONQO SECURITY — REQUEST FOR QUOTE",
      "",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Country: ${data.get("country")}`,
      `Service: ${data.get("need")}`,
      `Budget: ${data.get("budget")}`,
      "",
      "Project:",
      String(data.get("message") || ""),
    ].join("\n");

    window.location.href =
      "mailto:contact@sonqosecurity.com?subject=" +
      encodeURIComponent("Sonqo Security — Demande de devis") +
      "&body=" +
      encodeURIComponent(body);
  }

  const navigation = [
    ["#expertises", t.nav[0]],
    ["#formations", t.nav[1]],
    ["#vision", t.nav[2]],
    ["#contact", t.nav[3]],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f9fc] text-[#132f49]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #43b8ee;
          color: white;
        }

        @keyframes sonqoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        @keyframes sonqoPulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: .75; transform: scale(1.13); }
        }

        @keyframes sonqoSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes sonqoSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes sonqoScan {
          0% { top: 8%; opacity: 0; }
          15% { opacity: .7; }
          85% { opacity: .7; }
          100% { top: 92%; opacity: 0; }
        }

        @keyframes sonqoShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .sonqo-float {
          animation: sonqoFloat 7s ease-in-out infinite;
        }

        .sonqo-pulse {
          animation: sonqoPulse 5s ease-in-out infinite;
        }

        .sonqo-spin {
          animation: sonqoSpin 38s linear infinite;
        }

        .sonqo-spin-reverse {
          animation: sonqoSpinReverse 48s linear infinite;
        }

        .sonqo-grid {
          background-image:
            linear-gradient(rgba(25, 96, 145, .055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(25, 96, 145, .055) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .sonqo-glow-text {
          background: linear-gradient(
            100deg,
            #12608f 0%,
            #00a8ec 40%,
            #367fba 65%,
            #12608f 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: sonqoShimmer 8s linear infinite;
        }

        .sonqo-card {
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .sonqo-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 25px 65px rgba(15, 72, 116, .13);
          border-color: #7bcaf0;
        }

        .sonqo-ring {
          border: 1px solid rgba(38, 151, 213, .27);
          border-radius: 50%;
        }

        .sonqo-input {
          width: 100%;
          border: 1px solid #d8e5ee;
          border-radius: 14px;
          background: #f8fbfd;
          padding: 14px 16px;
          color: #163650;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }

        .sonqo-input:focus {
          border-color: #00a8ec;
          box-shadow: 0 0 0 4px rgba(0, 168, 236, .1);
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* SCROLL PROGRESS */}
      <div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-[#00a8ec] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="Sonqo Security"
              className="h-[76px] w-[76px] shrink-0 object-contain md:h-[84px] md:w-[84px]"
            />

            <div>
              <div className="text-[13px] font-black tracking-[.19em] sm:text-[16px]">
                SONQO SECURITY
              </div>
              <div className="mt-1 hidden text-[9px] font-semibold tracking-[.22em] text-[#5b8eaa] sm:block">
                TECHNOLOGY WITH A HEART
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] font-semibold text-[#41617a] transition hover:text-[#00a8ec]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-[#dce8f0] bg-[#f3f8fb] p-1">
              {(["fr", "es", "en"] as const).map((language) => (
                <button
                  key={language}
                  onClick={() => setLang(language)}
                  className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase transition ${
                    lang === language
                      ? "bg-[#163b59] text-white shadow"
                      : "text-[#62839b] hover:text-[#163b59]"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-[#153a57] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#007fba] xl:inline-flex"
            >
              {t.quote}
              <ArrowUpRight size={15} />
            </a>

            <button
              aria-label="Menu"
              aria-expanded={mobileMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl border border-[#dce8f0] p-2 lg:hidden"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <nav className="flex flex-col gap-1 border-t border-[#e2edf3] bg-white px-6 py-4 lg:hidden">
            {navigation.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenu(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-[#edf6fb]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setMouse({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
          });
        }}
        className="sonqo-grid relative isolate min-h-[850px] overflow-hidden bg-[linear-gradient(135deg,#fbfdff_0%,#e9f4fb_45%,#c3ddec_100%)] px-5 pb-24 pt-40 md:px-10 lg:pt-44"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60 transition-all duration-500"
          style={{
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,rgba(54,181,242,.18),transparent 38%)`,
          }}
        />

        <div className="sonqo-pulse pointer-events-none absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-[#48b7ed]/20 blur-[110px]" />

        <div className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-white/80 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1370px] items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#abd5ea] bg-white/65 px-4 py-2 text-[10px] font-bold tracking-[.15em] text-[#337ca3] shadow-sm sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#00a8ec] shadow-[0_0_12px_#00a8ec]" />
              {t.eyebrow}
            </div>

            <h1 className="mt-8 text-[clamp(3.4rem,6.1vw,6.4rem)] font-semibold leading-[1.04] tracking-[-.065em]">
              {t.hero1}
              <br />
              {t.hero2}
              <br />
              <span className="sonqo-glow-text">{t.hero3}</span>
            </h1>

            <p className="mt-8 max-w-[620px] text-base leading-8 text-[#456d87] md:text-lg">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#153b59] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(21,59,89,.18)] transition hover:-translate-y-1 hover:bg-[#007fba]"
              >
                {t.quote}
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#expertises"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#a9cadd] bg-white/65 px-7 py-4 text-sm font-bold text-[#214f70] transition hover:bg-white"
              >
                {t.discover}
                <ChevronDown size={17} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-[#6589a0]">
              <Globe2 size={19} className="text-[#168cbe]" />
              {t.location}
            </div>
          </Reveal>

          {/* ANIMATED BRAND ORBIT */}
          <Reveal delay={150} className="relative mx-auto w-full max-w-[630px]">
            <div className="relative mx-auto aspect-square w-full max-w-[610px]">
              <div className="sonqo-pulse absolute inset-[12%] rounded-full bg-[#62c9fa]/25 blur-[50px]" />

              <div className="sonqo-ring sonqo-spin absolute inset-[3%] border-dashed border-[#55a9d6]/40" />
              <div className="sonqo-ring sonqo-spin-reverse absolute inset-[12%] border-2 border-[#6fc5ed]/35" />
              <div className="sonqo-ring absolute inset-[21%] border-[#a2d5ed]/70 bg-white/25 backdrop-blur-md" />

              <div className="absolute left-1/2 top-[3%] z-10 -translate-x-1/2 rounded-2xl border border-white bg-white/85 p-3 shadow-xl sonqo-float">
                <ShieldCheck size={25} className="text-[#00a8ec]" />
              </div>

              <div
                className="sonqo-float absolute bottom-[17%] left-[4%] z-10 rounded-2xl border border-white bg-white/85 p-3 shadow-xl"
                style={{ animationDelay: "-2s" }}
              >
                <Network size={25} className="text-[#00a8ec]" />
              </div>

              <div
                className="sonqo-float absolute right-[3%] top-[37%] z-10 rounded-2xl border border-white bg-white/85 p-3 shadow-xl"
                style={{ animationDelay: "-4s" }}
              >
                <Bot size={25} className="text-[#00a8ec]" />
              </div>

              <div className="sonqo-float absolute inset-[23%] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-white/65 shadow-[0_20px_80px_rgba(24,115,172,.17)] backdrop-blur-lg" />

                <img
                  src="/logo.png"
                  alt="Logo original Sonqo Security"
                  className="relative z-10 h-full w-full scale-[1.15] object-contain drop-shadow-[0_15px_22px_rgba(20,85,135,.2)]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <a
          href="#expertises"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold tracking-[.2em] text-[#6d98b2]"
        >
          SCROLL
          <ChevronDown size={19} className="animate-bounce" />
        </a>
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="relative bg-white px-5 py-28 md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#008dca]">
              <span className="h-[2px] w-9 bg-[#00a8ec]" />
              {t.expertiseLabel}
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-.055em]">
                {t.expertiseTitle}
                <br />
                <span className="text-[#1b94c8]">{t.expertiseTitle2}</span>
              </h2>

              <p className="max-w-[520px] text-base leading-8 text-[#668197]">
                {t.expertiseText}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {t.services.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Reveal key={`${lang}-${service.number}`} delay={index * 90}>
                  <a
                    href="#contact"
                    className="sonqo-card group relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-[30px] border border-[#dceaf3] bg-[linear-gradient(145deg,#fff_0%,#eff7fc_100%)] p-8 md:p-10"
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#52bdf0]/10 blur-[45px] transition group-hover:bg-[#52bdf0]/20" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#153b59] text-white shadow-lg transition group-hover:bg-[#008dca]">
                        <Icon size={30} strokeWidth={1.6} />
                      </div>

                      <span className="text-5xl font-light text-[#c2d8e6]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="relative mt-9 text-2xl font-semibold tracking-tight md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="relative mt-4 max-w-[440px] leading-7 text-[#65849a]">
                      {service.description}
                    </p>

                    <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#d6e8f1] bg-white/80 px-3 py-2 text-[11px] font-semibold text-[#487b9a]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="absolute bottom-8 right-8 text-[#008dca] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STRIP */}
      <section className="overflow-hidden border-y border-[#c6e0ee] bg-[#eaf5fb] py-7">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5 text-xs font-bold tracking-[.16em] text-[#5d8ba8] md:text-sm">
          <span className="flex items-center gap-2">
            <Fingerprint size={22} /> CYBERSECURITY
          </span>
          <span className="flex items-center gap-2">
            <Database size={22} /> INFRASTRUCTURE
          </span>
          <span className="flex items-center gap-2">
            <Zap size={22} /> AUTOMATION
          </span>
          <span className="flex items-center gap-2">
            <Activity size={22} /> INNOVATION
          </span>
        </div>
      </section>

      {/* ACADEMY */}
      <section
        id="formations"
        className="relative overflow-hidden bg-[#102e49] px-5 py-28 text-white md:px-10"
      >
        <div className="sonqo-grid absolute inset-0 opacity-20" />
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#008bcd]/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-16 lg:grid-cols-[1fr_.85fr]">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#5acbff]">
              <span className="h-[2px] w-9 bg-[#5acbff]" />
              {t.trainingLabel}
            </div>

            <h2 className="mt-7 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-.055em]">
              {t.trainingTitle}
              <br />
              <span className="text-[#58c8fb]">{t.trainingTitle2}</span>
            </h2>

            <p className="mt-7 max-w-[610px] text-base leading-8 text-[#bad0df]">
              {t.trainingText}
            </p>

            <div className="mt-9 space-y-4">
              {t.trainingList.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#58c8fb]"
                  />
                  <span className="text-[#d7e8f2]">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#57c8fb] px-7 py-4 text-sm font-bold text-[#10314b] transition hover:-translate-y-1 hover:bg-white"
            >
              {t.trainingCTA}
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-6 max-w-[600px] text-xs leading-6 text-[#91afc3]">
              {t.trainingNote}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="sonqo-float relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#4fc4fa]/20" />
              <div className="sonqo-spin absolute inset-[8%] rounded-full border border-dashed border-[#4fc4fa]/35" />
              <div className="absolute inset-[18%] rounded-full border border-[#4fc4fa]/30 bg-[#1c5275]/50 shadow-[0_0_100px_rgba(40,176,244,.15)]" />

              <div className="relative flex h-[54%] w-[54%] items-center justify-center rounded-[40px] border border-[#70c8f3]/20 bg-[#1c4869]/80 shadow-2xl backdrop-blur-lg">
                <GraduationCap
                  size={112}
                  strokeWidth={1}
                  className="text-[#69d0ff]"
                />
              </div>

              <div className="absolute bottom-[10%] right-[3%] rounded-2xl border border-white/15 bg-[#1c496a]/90 p-4 shadow-xl">
                <ShieldCheck size={28} className="text-[#70d1ff]" />
              </div>

              <div className="absolute left-[1%] top-[17%] rounded-2xl border border-white/15 bg-[#1c496a]/90 p-4 shadow-xl">
                <Sparkles size={27} className="text-[#70d1ff]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="relative bg-[linear-gradient(160deg,#f7fbfe_0%,#dceef8_100%)] px-5 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center rounded-[44px] border border-white/80 bg-white/55 shadow-[0_25px_90px_rgba(31,97,143,.12)] backdrop-blur-lg">
              <div className="absolute inset-[10%] rounded-full border border-dashed border-[#8bc8e7]/60" />
              <div className="absolute inset-[20%] rounded-full bg-[#9bdafa]/15 blur-xl" />

              <img
                src="/logo.png"
                alt="Sonqo Security"
                className="sonqo-float relative z-10 h-[85%] w-[85%] object-contain"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#008dca]">
              <span className="h-[2px] w-9 bg-[#00a8ec]" />
              {t.visionLabel}
            </div>

            <h2 className="mt-7 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-.055em]">
              {t.visionTitle}
              <br />
              <span className="text-[#168fc6]">{t.visionTitle2}</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#456e89]">
              {t.visionText1}
            </p>

            <p className="mt-5 text-base leading-8 text-[#64849a]">
              {t.visionText2}
            </p>

            <div className="mt-9 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#00a8ec]" />
              <span className="text-xs font-bold tracking-[.22em] text-[#4c91b7]">
                SONQO SECURITY
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-28 md:px-10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#008dca]">
              <span className="h-[2px] w-9 bg-[#00a8ec]" />
              {t.processLabel}
            </div>

            <h2 className="mt-7 text-[clamp(2.5rem,5vw,4.7rem)] font-semibold leading-[1.1] tracking-[-.055em]">
              {t.processTitle}
              <br />
              <span className="text-[#1b94c8]">{t.processTitle2}</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map(([number, title, description], index) => (
              <Reveal key={`${lang}-${number}`} delay={index * 100}>
                <div className="sonqo-card h-full rounded-[26px] border border-[#dceaf3] bg-[#f7fbfe] p-7">
                  <div className="text-5xl font-light text-[#a6cde2]">
                    {number}
                  </div>
                  <div className="mt-7 h-[3px] w-12 rounded-full bg-[#00a8ec]" />
                  <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#68879b]">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[linear-gradient(145deg,#153d5c_0%,#0c273e_100%)] px-5 py-28 text-white md:px-10"
      >
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#008dca]/15 blur-[110px]" />

        <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[.24em] text-[#5acbff]">
              <span className="h-[2px] w-9 bg-[#5acbff]" />
              {t.contactLabel}
            </div>

            <h2 className="mt-7 text-[clamp(2.7rem,4.7vw,4.9rem)] font-semibold leading-[1.08] tracking-[-.055em]">
              {t.contactTitle}
              <br />
              <span className="text-[#5acbff]">{t.contactTitle2}</span>
            </h2>

            <p className="mt-7 max-w-[510px] text-base leading-8 text-[#bdd2df]">
              {t.contactText}
            </p>

            <div className="mt-12 text-xs font-bold tracking-[.2em] text-[#62cafa]">
              {t.direct}
            </div>

            <div className="mt-6 space-y-5 text-sm text-[#d9e8f1]">
              <a
                href="mailto:contact@sonqosecurity.com"
                className="flex items-center gap-4 transition hover:text-[#5acbff]"
              >
                <Mail size={20} className="text-[#5acbff]" />
                contact@sonqosecurity.com
              </a>

              <a
                href="tel:+33648100651"
                className="flex items-center gap-4 transition hover:text-[#5acbff]"
              >
                <Phone size={20} className="text-[#5acbff]" />
                +33 6 48 10 06 51
              </a>

              <div className="flex items-center gap-4">
                <MapPin size={20} className="text-[#5acbff]" />
                Hendaye, France · International
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={submitQuote}
              className="rounded-[34px] border border-white/70 bg-white p-6 text-[#153b59] shadow-[0_35px_90px_rgba(0,0,0,.2)] md:p-10"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#eaf6fd] p-3">
                    <Send size={23} className="text-[#008dca]" />
                  </div>

                  <span className="text-lg font-bold">
                    {t.quote}
                  </span>
                </div>

                <span className="hidden text-xs font-bold tracking-widest text-[#90b2c5] sm:block">
                  SONQO
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="sonqo-input"
                  name="name"
                  required
                  placeholder={t.fullName}
                />

                <input
                  className="sonqo-input"
                  name="company"
                  placeholder={t.company}
                />

                <input
                  className="sonqo-input"
                  name="email"
                  type="email"
                  required
                  placeholder={t.email}
                />

                <input
                  className="sonqo-input"
                  name="phone"
                  type="tel"
                  placeholder={t.phone}
                />

                <input
                  className="sonqo-input sm:col-span-2"
                  name="country"
                  placeholder={t.country}
                />

                <select
                  className="sonqo-input"
                  name="need"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>{t.need}</option>
                  {t.needs.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>

                <select
                  className="sonqo-input"
                  name="budget"
                  defaultValue=""
                >
                  <option value="" disabled>{t.budget}</option>
                  {t.budgets.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>

                <textarea
                  className="sonqo-input min-h-[170px] resize-y sm:col-span-2"
                  name="message"
                  required
                  placeholder={t.message}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#153b59] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#008dca]"
              >
                {t.submit}
                <ArrowRight size={18} />
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#7c9aaf]">
                {t.formInfo}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091e30] px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Sonqo Security"
              className="h-16 w-16 object-contain"
            />

            <div>
              <div className="text-sm font-black tracking-[.18em]">
                SONQO SECURITY
              </div>
              <div className="mt-1 text-xs text-[#91afc2]">
                {t.footer}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#91afc2]">
            © {new Date().getFullYear()} Sonqo Security. {t.rights}
          </p>

          <a
            href="#inicio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            aria-label="Back to top"
          >
            <ArrowRight size={19} className="-rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}
