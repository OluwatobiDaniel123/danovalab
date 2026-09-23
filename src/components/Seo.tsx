import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
}

const SITE = "DanovaLab";
const BASE = "https://danovalab.com";
const DEFAULT_DESC =
  "DanovaLab is a technology company building modern websites, web applications, business software, and digital solutions that help businesses operate, grow, and compete.";

export function Seo({ title, description, path = "", image, type = "website" }: SeoProps) {
  const fullTitle = title === SITE ? title : `${title} — ${SITE}`;
  const url = `${BASE}${path}`;
  const img = image || `${BASE}/og-default.jpg`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DanovaLab",
    description: DEFAULT_DESC,
    url: BASE,
    slogan: "Technology That Moves Your Business Forward.",
    sameAs: [
      "https://www.linkedin.com/company/danovalab",
      "https://github.com/danovalab",
      "https://www.instagram.com/danovalab",
      "https://x.com/danovalab",
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
