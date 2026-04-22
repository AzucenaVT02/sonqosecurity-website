
"use client";

import { useState } from "react";
import { ShieldCheck, Database, HardDrive, Settings } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "es" | "en">("fr");

  const content = {
    fr: {
      badge: "Cybersécurité • Protection des données • Confiance numérique",
      title: "SONQO SECURITY",
      subtitle: "Solutions professionnelles de cybersécurité",
      description:
        "Nous accompagnons les entreprises dans la protection de leurs systèmes informatiques, de leurs données sensibles et de leurs opérations numériques.",
      contactBtn: "Nous contacter",
      servicesBtn: "Voir les services",
      servicesTitle: "Services",
      servicesText:
        "Des services conçus pour renforcer la sécurité informatique des entreprises.",
      aboutTitle: "À propos de Sonqo Security",
      aboutParagraph1:
        "Sonqo signifie cœur en quechua, une langue ancestrale d’Amérique du Sud. Ce mot symbolise l’essence même de notre vision : placer la confiance, la responsabilité et l’humain au centre de la cybersécurité.",
      aboutParagraph2:
        "Sonqo Security est né d’une identité multiculturelle, construite entre différentes cultures et sensibilités. Basée en France, au cœur du Pays Basque, notre approche s’inspire d’un esprit européen, d’une rigueur technique moderne et d’une vision ouverte sur le monde.",
      aboutParagraph3:
        "Notre engagement est simple : protéger ce qui compte le plus pour les entreprises — leurs données, leurs systèmes et leur continuité d’activité. Nous croyons qu’une cybersécurité efficace repose autant sur la technologie que sur l’écoute, l’adaptation et la compréhension des besoins réels de chaque organisation.",
      aboutParagraph4:
        "Chez Sonqo Security, chaque mission est menée avec sérieux, discrétion et engagement, afin d’établir une relation de confiance durable avec nos clients.",
      contactTitle: "Contact",
      phone: "Téléphone",
      email: "Email",
      location: "Localisation",
      locationValue: "Hendaye, France",
      navServices: "Services",
      navAbout: "À propos",
      navContact: "Contact",
      serviceItems: [
        {
          title: "Audit de cybersécurité",
          description:
            "Analyse des systèmes informatiques afin d’identifier les vulnérabilités et les risques de sécurité.",
          icon: ShieldCheck,
        },
        {
          title: "Protection des données",
          description:
            "Mise en place de solutions pour protéger les données sensibles et sécuriser les accès critiques.",
          icon: Database,
        },
        {
          title: "Sauvegardes sécurisées",
          description:
            "Configuration de sauvegardes fiables pour garantir la continuité des activités.",
          icon: HardDrive,
        },
        {
          title: "Maintenance de sécurité",
          description:
            "Surveillance et mises à jour régulières pour maintenir un niveau de sécurité optimal.",
          icon: Settings,
        },
      ],
    },

    es: {
      badge: "Ciberseguridad • Protección de datos • Confianza digital",
      title: "SONQO SECURITY",
      subtitle: "Soluciones profesionales de ciberseguridad",
      description:
        "Ayudamos a las empresas a proteger sus sistemas informáticos, sus datos sensibles y sus operaciones digitales.",
      contactBtn: "Contactar",
      servicesBtn: "Ver servicios",
      servicesTitle: "Servicios",
      servicesText:
        "Servicios diseñados para reforzar la seguridad informática de las empresas.",
      aboutTitle: "Sobre Sonqo Security",
      aboutParagraph1:
        "Sonqo significa corazón en quechua, una lengua ancestral de América del Sur. Este nombre representa la esencia de nuestra visión: situar la confianza, la responsabilidad y el compromiso humano en el centro de la ciberseguridad.",
      aboutParagraph2:
        "Sonqo Security nace de una identidad multicultural, construida entre diferentes culturas y sensibilidades. Con base en Francia, en el corazón del País Vasco, nuestra forma de trabajar combina rigor técnico europeo con una visión abierta y global.",
      aboutParagraph3:
        "Nuestro compromiso es claro: proteger lo que más importa para las empresas — sus datos, sus sistemas y la continuidad de sus operaciones. Creemos que una ciberseguridad eficaz no depende solo de la tecnología, sino también de la escucha, la adaptación y la comprensión real de las necesidades de cada organización.",
      aboutParagraph4:
        "En Sonqo Security, cada proyecto se realiza con seriedad, discreción y responsabilidad, construyendo relaciones de confianza duraderas.",
      contactTitle: "Contacto",
      phone: "Teléfono",
      email: "Email",
      location: "Ubicación",
      locationValue: "Hendaya, Francia",
      navServices: "Servicios",
      navAbout: "Sobre",
      navContact: "Contacto",
      serviceItems: [
        {
          title: "Auditoría de ciberseguridad",
          description:
            "Análisis de los sistemas informáticos para identificar vulnerabilidades y riesgos de seguridad.",
          icon: ShieldCheck,
        },
        {
          title: "Protección de datos",
          description:
            "Implementación de soluciones para proteger datos sensibles y asegurar accesos críticos.",
          icon: Database,
        },
        {
          title: "Copias de seguridad seguras",
          description:
            "Configuración de copias de seguridad fiables para garantizar la continuidad de la actividad.",
          icon: HardDrive,
        },
        {
          title: "Mantenimiento de seguridad",
          description:
            "Supervisión y actualizaciones periódicas para mantener un nivel de seguridad óptimo.",
          icon: Settings,
        },
      ],
    },

    en: {
      badge: "Cybersecurity • Data Protection • Digital Trust",
      title: "SONQO SECURITY",
      subtitle: "Professional cybersecurity solutions",
      description:
        "We help businesses protect their IT systems, sensitive data and digital operations.",
      contactBtn: "Contact us",
      servicesBtn: "View services",
      servicesTitle: "Services",
      servicesText:
        "Services designed to strengthen business cybersecurity and reduce risk.",
      aboutTitle: "About Sonqo Security",
      aboutParagraph1:
        "Sonqo means heart in Quechua, an ancestral language from South America. This name represents the core of our vision: placing trust, responsibility and human values at the center of cybersecurity.",
      aboutParagraph2:
        "Sonqo Security was born from a multicultural identity shaped by different cultures and perspectives. Based in France, in the heart of the Basque Country, our approach combines European technical rigor with an open and global mindset.",
      aboutParagraph3:
        "Our commitment is simple: to protect what matters most to businesses — their data, their systems and their operational continuity. We believe effective cybersecurity relies not only on technology, but also on listening, adapting and truly understanding each organization's needs.",
      aboutParagraph4:
        "At Sonqo Security, every mission is carried out with professionalism, discretion and dedication, building long-term relationships based on trust.",
      contactTitle: "Contact",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Hendaye, France",
      navServices: "Services",
      navAbout: "About",
      navContact: "Contact",
      serviceItems: [
        {
          title: "Cybersecurity audit",
          description:
            "Analysis of IT systems to identify vulnerabilities and security risks.",
          icon: ShieldCheck,
        },
        {
          title: "Data protection",
          description:
            "Implementation of solutions to protect sensitive data and secure critical access.",
          icon: Database,
        },
        {
          title: "Secure backups",
          description:
            "Reliable backup configuration to ensure business continuity.",
          icon: HardDrive,
        },
        {
          title: "Security maintenance",
          description:
            "Monitoring and regular updates to maintain an optimal level of security.",
          icon: Settings,
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen text-[#17324b] bg-[linear-gradient(180deg,#eef4f8_0%,#dbe7f1_22%,#bfd5e5_45%,#86abc7_68%,#3d6786_86%,#1d3b56_100%)]">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sonqo Security"
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
            <span className="text-xs font-semibold tracking-[0.22em] text-[#17324b] md:text-sm">
              SONQO SECURITY
            </span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-[#17324b]/80 md:flex">
            <a href="#services" className="hover:text-[#00AEEF]">
              {t.navServices}
            </a>
            <a href="#about" className="hover:text-[#00AEEF]">
              {t.navAbout}
            </a>
            <a href="#contact" className="hover:text-[#00AEEF]">
              {t.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("fr")}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                lang === "fr"
                  ? "bg-[#00AEEF] text-white"
                  : "bg-white/40 text-[#17324b]"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                lang === "es"
                  ? "bg-[#00AEEF] text-white"
                  : "bg-white/40 text-[#17324b]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                lang === "en"
                  ? "bg-[#00AEEF] text-white"
                  : "bg-white/40 text-[#17324b]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-10 md:px-6 md:py-20">
        <div className="absolute left-[-120px] top-10 h-[260px] w-[260px] rounded-full bg-[#00AEEF]/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[300px] w-[300px] rounded-full bg-white/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/40 bg-white/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#315a78] md:text-xs">
              {t.badge}
            </div>

            <h1 className="text-5xl font-bold tracking-[0.16em] text-[#17324b] md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl font-medium text-[#00AEEF] md:text-3xl">
              {t.subtitle}
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#17324b]/75 md:text-lg">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#00AEEF] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,174,239,0.3)] hover:opacity-90"
              >
                {t.contactBtn}
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#17324b]/20 bg-white/40 px-6 py-3 text-center text-sm font-semibold text-[#17324b] hover:border-[#00AEEF]"
              >
                {t.servicesBtn}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[720px] rounded-[2.5rem] border border-white/35 bg-white/30 px-6 py-10 shadow-[0_30px_80px_rgba(17,39,58,0.16)] backdrop-blur-xl">
              <div className="flex justify-center">
                <img
                  src="/logo.png"
                  alt="Sonqo Security"
                  className="w-[300px] object-contain md:w-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-[#17324b] md:text-4xl">
            {t.servicesTitle}
          </h2>

          <p className="mt-4 text-base text-[#17324b]/70 md:text-lg">
            {t.servicesText}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.serviceItems.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/35 bg-white/40 p-6 shadow-[0_12px_36px_rgba(23,50,75,0.08)] transition hover:-translate-y-1"
                >
                  <Icon size={36} className="mb-4 text-[#00AEEF]" />
                  <h3 className="text-xl font-semibold text-[#17324b]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#17324b]/72">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/35 bg-white/38 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-[#17324b] md:text-4xl">
            {t.aboutTitle}
          </h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-[#17324b]/75 md:text-lg">
            <p>{t.aboutParagraph1}</p>
            <p>{t.aboutParagraph2}</p>
            <p>{t.aboutParagraph3}</p>
            <p>{t.aboutParagraph4}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/35 bg-white/38 p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-[#17324b] md:text-4xl">
            {t.contactTitle}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/50 p-6">
              <p className="text-sm uppercase text-[#00AEEF]">{t.phone}</p>
              <p className="mt-3">+33 6 48 10 06 51</p>
            </div>

            <div className="rounded-2xl bg-white/50 p-6">
              <p className="text-sm uppercase text-[#00AEEF]">{t.email}</p>
              <p className="mt-3 break-all">contact@sonqosecurity.com</p>
            </div>

            <div className="rounded-2xl bg-white/50 p-6">
              <p className="text-sm uppercase text-[#00AEEF]">{t.location}</p>
              <p className="mt-3">{t.locationValue}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
