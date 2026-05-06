// ─── Content ────────────────────────────────────────────────────────────────
// Edit the CONTENT object below to update all site content without touching
// any layout or styling code.
const CONTENT = {
  name: "David B. Robbins",
  title: "Investor · Entrepreneur · Chairman",
  tagline: "Family Office",

  about: {
    intro:
      "David B. Robbins is a seasoned investor and entrepreneur whose career spans corporate law, private equity, gaming, media, and healthcare. Educated at the Wharton School of the University of Pennsylvania (B.S. Economics) and NYU School of Law (J.D.), he built his professional foundation in corporate law before transitioning into investment management and company leadership.",
    body: `David served as Chairman of Bally Technologies (NYSE: BYI) from 1996 until its landmark acquisition by Scientific Games in 2014. During his tenure, Bally grew into one of the premier gaming equipment and technology companies in the world.

Alongside his work in gaming, David co-founded Trevi Health Capital in 2005, a healthcare-focused private equity firm emphasizing healthcare information and medical technology. He has since pursued a range of investments across media and entertainment, life sciences, and gaming through his family office.

Beyond investment, David has been an active cultural patron. He produced the Tony Award–winning 2013 Broadway revival of Pippin, recognized as Best Revival of a Musical.

His philanthropic work centers on neurology and developmental medicine. Through his family foundation, he supports Columbia University's Institute for Genomic Medicine and NYU Langone Medical Center, and serves on boards addressing epilepsy, autism, and developmental disabilities.`,
  },

  investments: [
    {
      name: "Bally Technologies",
      ticker: "NYSE: BYI",
      role: "Chairman, 1996–2014",
      description:
        "Publicly traded gaming equipment and technology company. Acquired by Scientific Games in 2014.",
      category: "Gaming & Technology",
    },
    {
      name: "Trevi Health Capital",
      ticker: null,
      role: "Co-Founder, 2005",
      description:
        "Healthcare-focused private equity firm with an emphasis on healthcare information systems and medical technology.",
      category: "Healthcare & Life Sciences",
    },
    {
      name: "Relativity Media",
      ticker: null,
      role: "Investor via UltraV Holdings, 2018",
      description:
        "Film and television distribution and production company acquired in partnership with SoundPoint Capital.",
      category: "Media & Entertainment",
    },
    {
      name: "UltraV Holdings",
      ticker: null,
      role: "Principal",
      description:
        "Investment vehicle formed in partnership with SoundPoint Capital, focused on media and entertainment assets.",
      category: "Media & Entertainment",
    },
    {
      name: "Alexiam Capital",
      ticker: null,
      role: "Principal",
      description:
        "Private investment platform pursuing opportunities across diversified sectors including healthcare, media, and technology.",
      category: "Private Equity",
    },
    {
      name: "Pippin (Broadway)",
      ticker: null,
      role: "Producer, 2013",
      description:
        "Tony Award–winning revival of the Stephen Schwartz musical. Best Revival of a Musical, 2013 Tony Awards.",
      category: "Arts & Culture",
    },
  ],

  contact: {
    phone: "+1 (917) 414-2175",
    phoneHref: "tel:+19174142175",
    email: "drobbins663@gmail.com",
    emailHref: "mailto:drobbins663@gmail.com",
    linkedinLabel: "LinkedIn Profile",
    linkedinHref: "https://www.linkedin.com/in/david-robbins-2472b923/",
  },
};

// ─── Category badge colors ────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Gaming & Technology": "bg-slate-100 text-slate-700",
  "Healthcare & Life Sciences": "bg-emerald-50 text-emerald-700",
  "Media & Entertainment": "bg-amber-50 text-amber-700",
  "Private Equity": "bg-blue-50 text-blue-700",
  "Arts & Culture": "bg-purple-50 text-purple-700",
};

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <span
          className="text-xs tracking-[0.25em] uppercase text-gray-400 font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {CONTENT.tagline}
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Investments", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-gray-800 tracking-wide transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 lg:px-12 bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase text-[#b8963e] mb-8 font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {CONTENT.tagline}
        </p>
        <h1
          className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {CONTENT.name}
        </h1>
        <div className="w-12 h-px bg-[#b8963e] mb-6" />
        <p
          className="text-base text-gray-400 tracking-widest uppercase text-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {CONTENT.title}
        </p>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const paragraphs = CONTENT.about.body
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Label column */}
          <div className="lg:pt-2">
            <p
              className="text-xs tracking-[0.25em] uppercase text-[#b8963e] font-medium mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              About
            </p>
            <h2
              className="text-2xl font-light text-gray-900 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Background &amp; Career
            </h2>
            <div className="w-8 h-px bg-[#b8963e] mt-4" />
          </div>

          {/* Content column */}
          <div className="lg:col-span-2 space-y-5">
            <p
              className="text-lg text-gray-800 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {CONTENT.about.intro}
            </p>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base text-gray-600 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Investments ──────────────────────────────────────────────────────────────
function Investments() {
  return (
    <section id="investments" className="py-24 px-6 lg:px-12 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.25em] uppercase text-[#b8963e] font-medium mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Portfolio
          </p>
          <h2
            className="text-2xl font-light text-gray-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Investments &amp; Holdings
          </h2>
          <div className="w-8 h-px bg-[#b8963e] mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONTENT.investments.map((inv) => (
            <div
              key={inv.name}
              className="bg-white border border-gray-100 p-7 flex flex-col gap-4 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <span
                className={`self-start text-xs font-medium px-2.5 py-1 rounded-sm tracking-wide ${
                  CATEGORY_COLORS[inv.category] ?? "bg-gray-100 text-gray-600"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {inv.category}
              </span>

              <div>
                <h3
                  className="text-lg font-semibold text-gray-900 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {inv.name}
                </h3>
                {inv.ticker && (
                  <p
                    className="text-xs text-gray-400 mt-1 font-mono"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {inv.ticker}
                  </p>
                )}
              </div>

              <p
                className="text-xs font-medium text-[#b8963e] tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {inv.role}
              </p>

              <p
                className="text-sm text-gray-500 leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {inv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactItem({
  label,
  href,
  value,
  external,
}: {
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div className="border-t border-white/10 pt-6">
      <p
        className="text-xs tracking-widest uppercase text-gray-500 mb-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-base text-gray-200 hover:text-[#b8963e] transition-colors duration-200"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {value}
      </a>
    </div>
  );
}

function Contact() {
  const { phone, phoneHref, email, emailHref, linkedinLabel, linkedinHref } =
    CONTENT.contact;

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:pt-2">
            <p
              className="text-xs tracking-[0.25em] uppercase text-[#b8963e] font-medium mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact
            </p>
            <h2
              className="text-2xl font-light text-white leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get in Touch
            </h2>
            <div className="w-8 h-px bg-[#b8963e] mt-4" />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-0">
            <ContactItem label="Phone" href={phoneHref} value={phone} />
            <ContactItem label="Email" href={emailHref} value={email} />
            <ContactItem
              label="LinkedIn"
              href={linkedinHref}
              value={linkedinLabel}
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a1520] border-t border-white/5 py-8 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-gray-600"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} David B. Robbins. All rights reserved.
        </p>
        <p
          className="text-xs text-gray-600"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          David Robbins Family Office
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Investments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
