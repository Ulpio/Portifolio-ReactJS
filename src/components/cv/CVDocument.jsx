import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer';
import { cvData } from '../../data/cvData.js';

/* ── Accent colour ──────────────────────────────── */
const ACCENT = '#2563eb';
const TEXT_PRIMARY = '#1a1a1a';
const TEXT_SECONDARY = '#4b5563';
const TEXT_MUTED = '#6b7280';
const BORDER = '#e5e7eb';
const CHIP_BG = '#f3f4f6';

/* ── Styles ─────────────────────────────────────── */
const s = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontSize: 9.5,
    fontFamily: 'Helvetica',
    color: TEXT_PRIMARY,
    lineHeight: 1.45,
  },

  /* ── Header ── */
  header: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.5,
    marginBottom: 3,
    color: TEXT_PRIMARY,
  },
  title: {
    fontSize: 11,
    color: ACCENT,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
  },
  headline: {
    fontSize: 9,
    color: TEXT_SECONDARY,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    fontSize: 8.5,
    color: TEXT_SECONDARY,
  },
  contactItem: {
    fontSize: 8.5,
    color: TEXT_SECONDARY,
  },
  contactLink: {
    fontSize: 8.5,
    color: ACCENT,
    textDecoration: 'none',
  },
  contactSep: {
    fontSize: 8.5,
    color: TEXT_MUTED,
    marginHorizontal: 4,
  },

  /* ── Sections ── */
  sectionWrap: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 3,
    borderBottomWidth: 0.75,
    borderBottomColor: BORDER,
    marginBottom: 7,
  },

  /* ── Summary ── */
  paragraph: {
    marginBottom: 5,
    lineHeight: 1.5,
    textAlign: 'justify',
    color: TEXT_PRIMARY,
  },

  /* ── Skills ── */
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 6,
  },
  skillCatTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    marginBottom: 3,
  },
  skillLine: {
    fontSize: 8.5,
    color: TEXT_SECONDARY,
    lineHeight: 1.4,
  },

  /* ── Experience ── */
  expBlock: {
    marginBottom: 10,
  },
  expHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
    maxWidth: '70%',
  },
  expPeriod: {
    fontSize: 8.5,
    color: TEXT_MUTED,
    textAlign: 'right',
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
    lineHeight: 1.4,
  },

  /* ── Education ── */
  eduBlock: {
    marginBottom: 6,
  },
  eduHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  eduDegree: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
  },
  eduPeriod: {
    fontSize: 8.5,
    color: TEXT_MUTED,
  },
  eduInstitution: {
    fontSize: 9,
    color: TEXT_SECONDARY,
  },

  /* ── Projects ── */
  projBlock: {
    marginBottom: 8,
  },
  projHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  projTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_PRIMARY,
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
    lineHeight: 1.4,
  },

  /* ── Footer ── */
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: TEXT_MUTED,
    borderTopWidth: 0.5,
    borderTopColor: BORDER,
    paddingTop: 6,
  },
});

/* ── Label maps ─────────────────────────────────── */
const labels = {
  en: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    education: 'Education',
    projects: 'Key Projects',
    languages: 'Languages',
    databases: 'Databases',
    frameworks: 'Frameworks & Tools',
    devops: 'DevOps & Cloud',
    practices: 'Architecture & Practices',
    present: 'Present',
    docTitle: 'Resume - Ulpio Netto - Backend Developer',
    docSubject: 'Resume of Ulpio Netto, Backend Developer and Software Engineer specializing in Go, Java, REST APIs, microservices, AWS, Kubernetes, and cloud infrastructure.',
    generated: 'Generated from ulpionetto.dev',
  },
  pt: {
    summary: 'Resumo Profissional',
    skills: 'Habilidades T\u00e9cnicas',
    experience: 'Experi\u00eancia Profissional',
    education: 'Forma\u00e7\u00e3o Acad\u00eamica',
    projects: 'Projetos Relevantes',
    languages: 'Linguagens',
    databases: 'Bancos de Dados',
    frameworks: 'Frameworks & Ferramentas',
    devops: 'DevOps & Cloud',
    practices: 'Arquitetura & Pr\u00e1ticas',
    present: 'Presente',
    docTitle: 'Curr\u00edculo - Ulpio Netto - Desenvolvedor Backend',
    docSubject: 'Curr\u00edculo de Ulpio Netto, Desenvolvedor Backend e Engenheiro de Software especializado em Go, Java, APIs REST, microsservi\u00e7os, AWS, Kubernetes e infraestrutura cloud.',
    generated: 'Gerado a partir de ulpionetto.dev',
  },
};

/* ── PDF keywords for ATS indexing ──────────────── */
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

/* ── Helpers ────────────────────────────────────── */
function localized(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.en || '';
}

function localizedArray(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.en || [];
}

/* ── Component ──────────────────────────────────── */
function CVDocument({ lang = 'en' }) {
  const l = labels[lang] || labels.en;
  const {
    name, contact, skills, education, experience, projects,
  } = cvData;

  const titleText = localized(cvData.title, lang);
  const headlineText = localized(cvData.headline, lang);
  const summaryParagraphs = localizedArray(cvData.summary, lang);
  const practicesList = localizedArray(skills.practices, lang);
  const locationText = localized(contact.location, lang);

  /* Description text for projects from translation keys */
  const projectDescriptions = {
    en: {
      registartt: 'Backend development for Registartt platform, delivering a high-performance RESTful API with authentication, distributed caching, and async task processing.',
      vergo: 'Open-source multi-tenant SaaS boilerplate in Go with RBAC, JWT auth, Stripe billing, and AWS S3 integration. CI/CD with GitHub Actions and CodeQL.',
      oxetech: 'Platform for State of Alagoas Government Program. Migrated legacy JS API to Go, achieving 75% faster response times with multiple access levels.',
      guia: 'AI-powered smart tourism hub for personalized travel itineraries with dynamic route generation, PDF export, and external tourism API integration.',
      yes: 'Corporate microservices platform in Go for PDF/XLS report generation with BPMN engine, AWS SQS/SNS, Kubernetes deployment via ArgoCD, and Terraform IaC.',
      sonoria: 'AI-powered web platform for automated analysis of auditory electrophysiological exams, with CRNN model, interactive waveform visualization, and legacy data migration.',
    },
    pt: {
      registartt: 'Desenvolvimento backend da plataforma Registartt, entregando API RESTful de alta performance com autentica\u00e7\u00e3o, cache distribu\u00eddo e processamento ass\u00edncrono.',
      vergo: 'Boilerplate SaaS multi-tenant open-source em Go com RBAC, autentica\u00e7\u00e3o JWT, billing Stripe e integra\u00e7\u00e3o AWS S3. CI/CD com GitHub Actions e CodeQL.',
      oxetech: 'Plataforma do Programa do Governo de Alagoas. Migra\u00e7\u00e3o de API legada JS para Go, alcan\u00e7ando tempos de resposta 75% mais r\u00e1pidos.',
      guia: 'Hub de turismo inteligente com IA para roteiros personalizados, gera\u00e7\u00e3o din\u00e2mica de itiner\u00e1rios, exporta\u00e7\u00e3o PDF e integra\u00e7\u00e3o com APIs de turismo.',
      yes: 'Plataforma corporativa de microsservi\u00e7os em Go para gera\u00e7\u00e3o de relat\u00f3rios PDF/XLS com motor BPMN, AWS SQS/SNS, deploy Kubernetes via ArgoCD e Terraform.',
      sonoria: 'Plataforma web com IA para an\u00e1lise automatizada de exames eletrofisiol\u00f3gicos auditivos, com modelo CRNN, visualiza\u00e7\u00e3o interativa e migra\u00e7\u00e3o de dados legados.',
    },
  };

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

        {/* ────────── HEADER ────────── */}
        <View style={s.header}>
          <Text style={s.name}>{name}</Text>
          <Text style={s.title}>{titleText}</Text>
          {headlineText ? <Text style={s.headline}>{headlineText}</Text> : null}
          <View style={s.contactRow}>
            <Text style={s.contactItem}>{contact.email}</Text>
            <Text style={s.contactSep}>|</Text>
            <Link src={contact.linkedin} style={s.contactLink}>{contact.linkedinShort}</Link>
            <Text style={s.contactSep}>|</Text>
            <Link src={contact.github} style={s.contactLink}>{contact.githubShort}</Link>
            <Text style={s.contactSep}>|</Text>
            <Link src={contact.website} style={s.contactLink}>{contact.website.replace('https://', '')}</Link>
            {locationText ? (
              <>
                <Text style={s.contactSep}>|</Text>
                <Text style={s.contactItem}>{locationText}</Text>
              </>
            ) : null}
          </View>
        </View>

        {/* ────────── SUMMARY ────────── */}
        <View style={s.sectionWrap}>
          <Text style={s.sectionTitle}>{l.summary}</Text>
          {summaryParagraphs.map((p, i) => (
            <Text key={i} style={s.paragraph}>{p}</Text>
          ))}
        </View>

        {/* ────────── SKILLS ────────── */}
        <View style={s.sectionWrap}>
          <Text style={s.sectionTitle}>{l.skills}</Text>
          <View style={s.skillsGrid}>
            <View style={s.skillCategory}>
              <Text style={s.skillCatTitle}>{l.languages}</Text>
              <Text style={s.skillLine}>{skills.languages.join(', ')}</Text>
            </View>
            <View style={s.skillCategory}>
              <Text style={s.skillCatTitle}>{l.databases}</Text>
              <Text style={s.skillLine}>{skills.databases.join(', ')}</Text>
            </View>
            <View style={s.skillCategory}>
              <Text style={s.skillCatTitle}>{l.frameworks}</Text>
              <Text style={s.skillLine}>{skills.frameworks.join(', ')}</Text>
            </View>
            <View style={s.skillCategory}>
              <Text style={s.skillCatTitle}>{l.devops}</Text>
              <Text style={s.skillLine}>{skills.devops.join(', ')}</Text>
            </View>
          </View>
          {practicesList.length > 0 && (
            <View style={{ marginTop: 2 }}>
              <Text style={s.skillCatTitle}>{l.practices}</Text>
              <Text style={s.skillLine}>{practicesList.join(', ')}</Text>
            </View>
          )}
        </View>

        {/* ────────── EXPERIENCE ────────── */}
        <View style={s.sectionWrap}>
          <Text style={s.sectionTitle}>{l.experience}</Text>
          {experience.map((exp, i) => {
            const role = localized(exp.role, lang);
            const highlights = localizedArray(exp.highlights, lang);
            return (
              <View key={i} style={s.expBlock} wrap={false}>
                <View style={s.expHeaderRow}>
                  <Text style={s.expRole}>{role}</Text>
                  <Text style={s.expPeriod}>{exp.period}</Text>
                </View>
                <Text style={s.expCompany}>{exp.company}</Text>
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

        {/* ────────── PROJECTS ────────── */}
        {projects && projects.length > 0 && (
          <View style={s.sectionWrap}>
            <Text style={s.sectionTitle}>{l.projects}</Text>
            {projects.map((proj, i) => {
              const desc = projectDescriptions[lang]?.[proj.slug] || projectDescriptions.en?.[proj.slug] || '';
              return (
                <View key={i} style={s.projBlock} wrap={false}>
                  <View style={s.projHeaderRow}>
                    <Text style={s.projTitle}>{proj.title}</Text>
                    {proj.demoLink && (
                      <Link src={proj.demoLink} style={s.projLink}>{proj.demoLink.replace(/^https?:\/\//, '')}</Link>
                    )}
                  </View>
                  <Text style={s.projTech}>{proj.technologies.join(' \u00b7 ')}</Text>
                  {desc ? <Text style={s.projDesc}>{desc}</Text> : null}
                </View>
              );
            })}
          </View>
        )}

        {/* ────────── EDUCATION ────────── */}
        <View style={s.sectionWrap}>
          <Text style={s.sectionTitle}>{l.education}</Text>
          {education.map((item, i) => (
            <View key={i} style={s.eduBlock}>
              <View style={s.eduHeaderRow}>
                <Text style={s.eduDegree}>{localized(item.degree, lang)}</Text>
                <Text style={s.eduPeriod}>{item.period}</Text>
              </View>
              <Text style={s.eduInstitution}>{item.institution}</Text>
            </View>
          ))}
        </View>

        {/* ────────── FOOTER ────────── */}
        <View style={s.footer} fixed>
          <Text>{l.generated}</Text>
          <Link src={contact.website} style={{ fontSize: 7.5, color: TEXT_MUTED, textDecoration: 'none' }}>
            {contact.website.replace('https://', '')}
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
