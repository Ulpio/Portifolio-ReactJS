import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { cvData } from '../../data/cvData.js';

/* Only the 3 most impactful projects are shown in the CV */
const FEATURED_SLUGS = ['yes', 'vergo', 'registartt'];

/* ── Colours ─────────────────────────────────────── */
const ACCENT        = '#2563eb';
const TEXT_PRIMARY  = '#1a1a1a';
const TEXT_SECONDARY = '#4b5563';
const TEXT_MUTED    = '#6b7280';
const BORDER        = '#e5e7eb';

/* ── Styles ──────────────────────────────────────── */
const s = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 40,
    paddingHorizontal: 38,
    fontSize: 9.5,
    fontFamily: 'Helvetica',
    color: TEXT_PRIMARY,
    /* No lineHeight here — cascading lineHeight causes 2-3× bloat in react-pdf */
  },

  /* Header — each row is a View so marginBottom is always respected */
  header: {
    marginBottom: 12,
    paddingBottom: 9,
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
  },
  nameWrap:    { marginBottom: 4 },
  titleWrap:   { marginBottom: 2 },
  headlineWrap:{ marginBottom: 5 },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
  },
  titleText: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
  },
  headlineText: {
    fontSize: 9,
    color: TEXT_SECONDARY,
  },
  /* Contact is a single Text node — avoids all flex overlap */
  contactText: {
    fontSize: 8.5,
    color: TEXT_SECONDARY,
  },

  /* Section wrapper */
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    paddingBottom: 3,
    borderBottomWidth: 0.75,
    borderBottomColor: BORDER,
    marginBottom: 6,
  },

  /* Summary — explicit lineHeight so it doesn't inherit from page */
  paragraph: {
    marginBottom: 5,
    fontSize: 9.5,
    lineHeight: 1.3,
    color: TEXT_PRIMARY,
  },

  /* Skills — two columns via paired rows */
  skillRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  skillColLeft: {
    flex: 1,
    paddingRight: 12,
  },
  skillColRight: {
    flex: 1,
  },
  skillCatTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    marginBottom: 2,
  },
  skillLine: {
    fontSize: 8.5,
    color: TEXT_SECONDARY,
    lineHeight: 1.2,
  },
  skillFullRow: {
    marginBottom: 4,
  },

  /* Experience */
  expBlock: {
    marginBottom: 8,
  },
  /* flex row: role (flex:1) on left, period (fixed) on right — no overlap */
  expHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expRole: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    paddingRight: 8,
  },
  expPeriod: {
    flexShrink: 0,
    fontSize: 8.5,
    color: TEXT_MUTED,
  },
  expCompany: {
    fontSize: 9,
    color: TEXT_SECONDARY,
    marginBottom: 3,
  },
  expBullet: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 2,
  },
  expBulletDot: {
    width: 10,
    fontSize: 9,
    color: ACCENT,
  },
  expBulletText: {
    flex: 1,
    fontSize: 9,
    color: TEXT_PRIMARY,
    lineHeight: 1.25,
  },

  /* Education */
  eduBlock: {
    marginBottom: 6,
  },
  eduHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  eduDegree: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    paddingRight: 8,
  },
  eduPeriod: {
    flexShrink: 0,
    fontSize: 8.5,
    color: TEXT_MUTED,
  },
  eduInstitution: {
    fontSize: 9,
    color: TEXT_SECONDARY,
  },

  /* Projects */
  projBlock: {
    marginBottom: 7,
  },
  projHeaderRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  projTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    marginRight: 6,
  },
  projLink: {
    fontSize: 8,
    color: ACCENT,
    textDecoration: 'none',
  },
  projTech: {
    fontSize: 8.5,
    color: TEXT_MUTED,
    marginBottom: 2,
  },
  projDesc: {
    fontSize: 9,
    color: TEXT_SECONDARY,
    lineHeight: 1.25,
  },

  /* Footer — absolute, fixed on every page */
  footer: {
    position: 'absolute',
    bottom: 18,
    left: 38,
    right: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: TEXT_MUTED,
    borderTopWidth: 0.5,
    borderTopColor: BORDER,
    paddingTop: 5,
  },
  footerLink: {
    fontSize: 7.5,
    color: TEXT_MUTED,
    textDecoration: 'none',
  },
});

/* ── Label maps ──────────────────────────────────── */
const labels = {
  en: {
    summary:    'Professional Summary',
    skills:     'Technical Skills',
    experience: 'Professional Experience',
    education:  'Education',
    projects:   'Key Projects',
    langSkills: 'Languages',
    databases:  'Databases',
    frameworks: 'Frameworks & Tools',
    devops:     'DevOps & Cloud',
    practices:  'Architecture & Practices',
    spokenLangs: 'Languages',
    docTitle:   'Resume - Ulpio Netto - Backend Developer',
    docSubject: 'Resume of Ulpio Netto, Backend Developer and Software Engineer specializing in Go, Java, REST APIs, microservices, AWS, Kubernetes, and cloud infrastructure.',
    generated:  'Generated from ulpionetto.dev',
  },
  pt: {
    summary:    'Resumo Profissional',
    skills:     'Habilidades T\u00e9cnicas',
    experience: 'Experi\u00eancia Profissional',
    education:  'Forma\u00e7\u00e3o Acad\u00eamica',
    projects:   'Projetos Relevantes',
    langSkills: 'Linguagens',
    databases:  'Bancos de Dados',
    frameworks: 'Frameworks & Ferramentas',
    devops:     'DevOps & Cloud',
    practices:  'Arquitetura & Pr\u00e1ticas',
    spokenLangs: 'Idiomas',
    docTitle:   'Curr\u00edculo - Ulpio Netto - Desenvolvedor Backend',
    docSubject: 'Curr\u00edculo de Ulpio Netto, Desenvolvedor Backend e Engenheiro de Software especializado em Go, Java, APIs REST, microsservi\u00e7os, AWS, Kubernetes e infraestrutura cloud.',
    generated:  'Gerado a partir de ulpionetto.dev',
  },
};

/* ── ATS metadata keywords ───────────────────────── */
const PDF_KEYWORDS = [
  'Ulpio Netto', 'Backend Developer', 'Software Engineer',
  'Go', 'Golang', 'Java', 'REST API', 'Microservices',
  'PostgreSQL', 'AWS', 'Kubernetes', 'Docker', 'Terraform',
  'CI/CD', 'Node.js', 'TypeScript', 'Python',
  'Team Lead', 'DevOps', 'Cloud Infrastructure',
  'Spring Boot', 'Gin', 'SQLC', 'GORM',
  'Redis', 'MongoDB', 'GitHub Actions', 'ArgoCD',
  'OpenTelemetry', 'Jaeger', 'Event-Driven Architecture',
].join(', ');

/* ── Helpers ─────────────────────────────────────── */
function loc(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

function locArr(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.en || [];
}

function locPeriod(period, lang) {
  if (!period) return '';
  return lang === 'pt'
    ? period.replace('Present', 'Presente')
    : period;
}

/* ── Project descriptions (inline, ATS-readable) ── */
const projDescs = {
  en: {
    yes: 'Corporate microservices platform in Go for PDF/XLS report generation integrated with a BPMN engine, inter-service communication via AWS SQS/SNS, Kubernetes deployment via ArgoCD, and Terraform IaC.',
    vergo: 'Open-source multi-tenant SaaS boilerplate in Go with RBAC, JWT auth, Stripe billing, AWS S3 presigned URLs, project CRUD with audit log, CI/CD via GitHub Actions, and CodeQL security scanning.',
    registartt: 'Full backend built from scratch in Go (Gin + SQLC): high-performance RESTful API, auth/authz system, distributed caching, async task processing, structured logging, and interactive API docs.',
  },
  pt: {
    yes: 'Plataforma corporativa de microsservi\u00e7os em Go para gera\u00e7\u00e3o de relat\u00f3rios PDF/XLS com motor BPMN, comunica\u00e7\u00e3o via AWS SQS/SNS, deploy Kubernetes via ArgoCD e infraestrutura com Terraform.',
    vergo: 'Boilerplate SaaS multi-tenant open-source em Go com RBAC, JWT, billing Stripe, AWS S3 presigned URLs, CRUD de projetos com audit log, CI/CD com GitHub Actions e an\u00e1lise CodeQL.',
    registartt: 'Backend completo constru\u00eddo do zero em Go (Gin + SQLC): API RESTful de alta performance, autentica\u00e7\u00e3o/autoriza\u00e7\u00e3o, cache distribu\u00eddo, processamento ass\u00edncrono e documenta\u00e7\u00e3o interativa.',
  },
};

/* ── Component ───────────────────────────────────── */
function CVDocument({ lang = 'en' }) {
  const l   = labels[lang] || labels.en;
  const { name, contact, skills, education, experience } = cvData;
  const projects  = cvData.projects.filter((p) => FEATURED_SLUGS.includes(p.slug));
  const summary   = locArr(cvData.summary, lang);
  const practices = locArr(skills.practices, lang);
  const location  = loc(contact.location, lang);

  /* Build contact line as a single plain string — avoids flex overlap */
  const contactLine = [
    contact.email,
    contact.linkedinShort,
    contact.githubShort,
    contact.website.replace('https://', ''),
    location,
  ].filter(Boolean).join('  |  ');

  return (
    <Document
      title={l.docTitle}
      author="Ulpio Netto"
      subject={l.docSubject}
      keywords={PDF_KEYWORDS}
      creator="ulpionetto.dev"
      producer="ulpionetto.dev"
    >
      <Page size="A4" style={s.page}>

        {/* ── HEADER ── */}
        <View style={s.header}>
          <View style={s.nameWrap}>
            <Text style={s.name}>{name}</Text>
          </View>
          <View style={s.titleWrap}>
            <Text style={s.titleText}>{loc(cvData.title, lang)}</Text>
          </View>
          <View style={s.headlineWrap}>
            <Text style={s.headlineText}>{loc(cvData.headline, lang)}</Text>
          </View>
          <Text style={s.contactText}>{contactLine}</Text>
        </View>

        {/* ── SUMMARY ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{l.summary}</Text>
          {summary.map((p, i) => (
            <Text key={i} style={s.paragraph}>{p}</Text>
          ))}
        </View>

        {/* ── SKILLS ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{l.skills}</Text>
          {/* Row 1: Languages | Databases */}
          <View style={s.skillRow}>
            <View style={s.skillColLeft}>
              <Text style={s.skillCatTitle}>{l.langSkills}</Text>
              <Text style={s.skillLine}>{skills.languages.join(', ')}</Text>
            </View>
            <View style={s.skillColRight}>
              <Text style={s.skillCatTitle}>{l.databases}</Text>
              <Text style={s.skillLine}>{skills.databases.join(', ')}</Text>
            </View>
          </View>
          {/* Row 2: Frameworks | DevOps */}
          <View style={s.skillRow}>
            <View style={s.skillColLeft}>
              <Text style={s.skillCatTitle}>{l.frameworks}</Text>
              <Text style={s.skillLine}>{skills.frameworks.join(', ')}</Text>
            </View>
            <View style={s.skillColRight}>
              <Text style={s.skillCatTitle}>{l.devops}</Text>
              <Text style={s.skillLine}>{skills.devops.join(', ')}</Text>
            </View>
          </View>
          {/* Row 3: Architecture & Practices (full width) */}
          {practices.length > 0 && (
            <View style={s.skillFullRow}>
              <Text style={s.skillCatTitle}>{l.practices}</Text>
              <Text style={s.skillLine}>{practices.join(', ')}</Text>
            </View>
          )}
        </View>

        {/* ── EXPERIENCE ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{l.experience}</Text>
          {experience.map((exp, i) => {
            const role       = loc(exp.role, lang);
            const highlights = locArr(exp.highlights, lang);
            return (
              <View key={i} style={s.expBlock} wrap={false}>
                <View style={s.expHeaderRow}>
                  <Text style={s.expRole}>{role}</Text>
                  <Text style={s.expPeriod}>{locPeriod(exp.period, lang)}</Text>
                </View>
                <Text style={s.expCompany}>
                  {exp.company}{exp.type ? ` — ${loc(exp.type, lang)}` : ''}
                </Text>
                {highlights.map((line, j) => (
                  <View key={j} style={s.expBullet}>
                    <Text style={s.expBulletDot}>{'\u2022'}</Text>
                    <Text style={s.expBulletText}>{line}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        {/* ── KEY PROJECTS ── */}
        {projects.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>{l.projects}</Text>
            {projects.map((proj, i) => {
              const desc = projDescs[lang]?.[proj.slug] || projDescs.en?.[proj.slug] || '';
              return (
                <View key={i} style={s.projBlock} wrap={false}>
                  <View style={s.projHeaderRow}>
                    <Text style={s.projTitle}>{proj.title}</Text>
                    {proj.demoLink && (
                      <Link src={proj.demoLink} style={s.projLink}>
                        {proj.demoLink.replace(/^https?:\/\//, '')}
                      </Link>
                    )}
                  </View>
                  <Text style={s.projTech}>{proj.technologies.join(' \u00b7 ')}</Text>
                  {desc ? <Text style={s.projDesc}>{desc}</Text> : null}
                </View>
              );
            })}
          </View>
        )}

        {/* ── LANGUAGES ── */}
        {cvData.languages && cvData.languages.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>{l.spokenLangs}</Text>
            <Text style={s.skillLine}>
              {cvData.languages.map((lg) =>
                `${loc(lg.lang, lang)} (${loc(lg.level, lang)})`
              ).join('  •  ')}
            </Text>
          </View>
        )}

        {/* ── EDUCATION ── */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>{l.education}</Text>
          {education.map((item, i) => (
            <View key={i} style={s.eduBlock}>
              <View style={s.eduHeaderRow}>
                <Text style={s.eduDegree}>{loc(item.degree, lang)}</Text>
                <Text style={s.eduPeriod}>{item.period}</Text>
              </View>
              <Text style={s.eduInstitution}>{item.institution}</Text>
            </View>
          ))}
        </View>

        {/* ── FOOTER ── */}
        <View style={s.footer} fixed>
          <Text>{l.generated}</Text>
          <Link src={contact.website} style={s.footerLink}>
            {contact.website.replace('https://', '')}
          </Link>
        </View>

      </Page>
    </Document>
  );
}

export default CVDocument;
