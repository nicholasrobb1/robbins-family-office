import Image from "next/image";

// ─── Content ─────────────────────────────────────────────────────────────────
const CONTENT = {
  name: "David Robbins",
  siteName: "Robbins Capital Investments",
  tagline: "Family Office",

  about: {
    headline: "Background",
    paragraphs: [
      "RCI is the single-family investment office of David B. Robbins. Mr. Robbins has a long and distinguished track record identifying, structuring, and creating post investment value across both the private and public markets.",
      "Mr. Robbins holds a B.S. in Economics from the Wharton School of the University of Pennsylvania and a J.D. from NYU School of Law, and began his career in corporate law before transitioning into investment management.",
      "He served as Chairman of Bally Technologies (NYSE: BYI) from 1996 until its acquisition by Scientific Games in 2014, during which time Bally grew into one of the premier gaming equipment and technology companies in the world. He co-founded Trevi Health Capital in 2005, a healthcare-focused private equity firm emphasizing healthcare information and medical technology.",
      "Mr. Robbins produced the Tony Award–winning 2013 Broadway revival of Pippin (Best Revival of a Musical). Through his family foundation, he supports Columbia University's Institute for Genomic Medicine and NYU Langone Medical Center, with a focus on epilepsy, autism, and developmental disabilities.",
    ],
  },

  investments: [
    {
      name: "Bally Technologies",
      detail: "Chairman, 1996–2014  ·  NYSE: BYI",
      description:
        "Publicly traded gaming equipment and technology company acquired by Scientific Games in 2014.",
      logo: "/bally-logo.png",
      logoBg: "bg-[#002855]",
    },
    {
      name: "Trevi Health Capital",
      detail: "Co-Founder, 2005",
      description:
        "Healthcare-focused private equity firm emphasizing healthcare information systems and medical technology.",
      logo: "/trevi-logo.jpg",
      logoBg: "bg-white",
    },
    {
      name: "Relativity Media",
      detail: "Investor, 2018",
      description:
        "Film and television distribution and production company, acquired in partnership with SoundPoint Capital.",
      logo: "/relativity-logo.webp",
      logoBg: "bg-white",
    },
    {
      name: "Alexiam Capital",
      detail: "Principal",
      description:
        "Private investment platform across healthcare, media, and technology.",
      logo: null,
      initials: "AC",
      logoBg: "bg-slate-100",
    },
    {
      name: "Reset Health",
      detail: "Investor",
      description:
        "Healthcare company focused on [description placeholder — update as needed].",
      logo: null,
      initials: "RH",
      logoBg: "bg-slate-100",
    },
    {
      name: "Interblock",
      detail: "Investor",
      description:
        "Electronic table gaming technology company [description placeholder — update as needed].",
      logo: null,
      initials: "IB",
      logoBg: "bg-slate-100",
    },
    {
      name: "Pippin (Broadway)",
      detail: "Producer, 2013",
      description:
        "Tony Award–winning revival of the Stephen Schwartz musical. Best Revival of a Musical, 2013.",
      logo: "/pippin-logo.jpg",
      logoBg: "bg-[#29a8e0]",
    },
  ],

  contact: {
    address: "667 Madison Avenue\nNew York, NY 10065",
    phone: "+1 (917) 414-2175",
    phoneHref: "tel:+19174142175",
    email: "drobbins663@gmail.com",
    emailHref: "mailto:drobbins663@gmail.com",
    linkedinHref: "https://www.linkedin.com/in/david-robbins-2472b923/",
  },
};

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 h-[80px] flex items-center justify-between">
        <span className="text-white text-4xl font-normal tracking-wide uppercase" style={{ fontFamily: "var(--font-garamond)" }}>
          {CONTENT.siteName}
        </span>
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "About", href: "#about" },
            { label: "Investments", href: "#investments" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-gray-400 hover:text-white tracking-widest uppercase transition-colors duration-200"
            >
              {label}
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
    <section className="pt-[60px]">
      <div className="bg-[#0d1b2a] px-8 lg:px-16 pt-20 pb-16 max-w-full">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs text-gray-500 tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {CONTENT.tagline}
          </p>
          <h1
            className="text-3xl md:text-5xl text-white font-normal leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            {CONTENT.name}
          </h1>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="bg-white pt-[80px]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <p
            className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            About
          </p>
          <h2
            className="text-3xl font-normal text-gray-900 mb-8 leading-tight"
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            {CONTENT.about.headline}
          </h2>
          <div className="space-y-5">
            {CONTENT.about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[15px] text-gray-600 leading-[1.8]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Headshot */}
        <div className="flex justify-center">
          <div className="relative w-48 md:w-56 aspect-[3/4] bg-gray-100 shadow-sm">
            <Image
              src="/david-robbins.jpg"
              alt="David Robbins"
              fill
              className="object-cover object-top"
              sizes="224px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Investment Logo ──────────────────────────────────────────────────────────
function InvestmentLogo({
  logo,
  initials,
  logoBg,
  name,
}: {
  logo: string | null;
  initials?: string;
  logoBg: string;
  name: string;
}) {
  return (
    <div
      className={`w-14 h-10 rounded flex items-center justify-center shrink-0 overflow-hidden ${logoBg}`}
    >
      {logo ? (
        <div className="relative w-full h-full p-1.5">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain p-1.5"
            sizes="56px"
          />
        </div>
      ) : (
        <span
          className="text-xs font-semibold text-gray-500"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

// ─── Investments ─────────────────────────────────────────────────────────────
function Investments() {
  return (
    <section id="investments" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Label */}
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Portfolio
            </p>
            <h2
              className="text-3xl font-normal text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-garamond)" }}
            >
              Investments &amp; Holdings
            </h2>
          </div>

          {/* List */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-gray-100">
              {CONTENT.investments.map((inv) => (
                <div key={inv.name} className="py-6">
                  <div className="flex items-center gap-4 mb-2">
                    <InvestmentLogo
                      logo={inv.logo ?? null}
                      initials={inv.initials}
                      logoBg={inv.logoBg}
                      name={inv.name}
                    />
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3
                        className="text-xl font-normal text-gray-900"
                        style={{ fontFamily: "var(--font-garamond)" }}
                      >
                        {inv.name}
                      </h3>
                      <span
                        className="text-xs text-gray-400 tracking-wide shrink-0"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {inv.detail}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[14px] text-gray-500 leading-relaxed pl-[4.5rem]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {inv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const { address, phone, phoneHref, email, emailHref, linkedinHref } = CONTENT.contact;

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* Office image */}
          <div className="relative min-h-[420px]">
            <Image
              src="/office.avif"
              alt="Robbins Capital Investments office"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center px-12 py-16 bg-white">
            <h2
              className="text-3xl font-normal text-gray-900 mb-10"
              style={{ fontFamily: "var(--font-garamond)" }}
            >
              Robbins Capital Investments
            </h2>

            <div className="space-y-8">
              <div>
                <p
                  className="text-xs tracking-widest uppercase text-gray-400 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Address
                </p>
                <p
                  className="text-[15px] text-gray-700 whitespace-pre-line leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {address}
                </p>
              </div>

              <div>
                <p
                  className="text-xs tracking-widest uppercase text-gray-400 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Phone
                </p>
                <a
                  href={phoneHref}
                  className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {phone}
                </a>
              </div>

              <div>
                <p
                  className="text-xs tracking-widest uppercase text-gray-400 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Email
                </p>
                <a
                  href={emailHref}
                  className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {email}
                </a>
              </div>

              <div>
                <p
                  className="text-xs tracking-widest uppercase text-gray-400 mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  LinkedIn
                </p>
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a1520] border-t border-white/5 py-8 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
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
        <About />
        <Investments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
