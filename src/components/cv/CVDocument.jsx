import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { cvData } from '../../data/cvData.js';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    color: '#444',
    marginBottom: 4,
  },
  headline: {
    fontSize: 9,
    color: '#555',
    marginBottom: 8,
  },
  contactLine: {
    fontSize: 9,
    color: '#555',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 8,
    color: '#222',
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
    fontSize: 9,
    marginRight: 4,
    marginBottom: 4,
  },
  projectBlock: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  projectDesc: {
    marginBottom: 4,
    lineHeight: 1.35,
    color: '#333',
  },
  projectTech: {
    fontSize: 9,
    color: '#555',
    marginBottom: 2,
  },
  projectLink: {
    fontSize: 9,
    color: '#0066cc',
  },
  educationBlock: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  educationMeta: {
    fontSize: 9,
    color: '#555',
    marginBottom: 2,
  },
  experienceBlock: {
    marginBottom: 12,
  },
  experienceRole: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  experienceCompany: {
    fontSize: 10,
    color: '#444',
    marginBottom: 2,
  },
  experiencePeriod: {
    fontSize: 9,
    color: '#666',
    marginBottom: 4,
  },
  experienceHighlightsWrap: {
    marginTop: 2,
  },
  experienceHighlights: {
    fontSize: 9,
    color: '#333',
    lineHeight: 1.4,
    marginBottom: 2,
  },
  projectsSubtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 6,
    color: '#333',
  },
  footer: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    fontSize: 9,
    color: '#666',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function CVDocument() {
  const { name, title, headline, summary, contact, skills, education, experience, projects } = cvData;

  return (
    <Document
      title="Currículo - Ulpio Netto"
      author="Ulpio Netto"
      subject="Currículo Desenvolvedor Backend Engenheiro de Software - Go Java AWS Microsserviços"
      keywords="Ulpio Netto, Currículo, Desenvolvedor Backend, Engenheiro de Software, Go, Golang, Java, backend, microsserviços, API REST, APIs REST, PostgreSQL, AWS, Kubernetes, Docker, K8s, CI/CD, Team Lead, Node.js, MongoDB, Terraform, DevOps, Afya Unima, Ciência da Computação, Yes Technology, OxeTech, Registartt, Vergo, Guia"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>
          {headline ? <Text style={styles.headline}>{headline}</Text> : null}
          <View style={styles.contactLine}>
            <Text>{contact.email}</Text>
            <Text> | </Text>
            <Link src={contact.linkedin} style={styles.projectLink}>
              LinkedIn
            </Link>
            <Text> | </Text>
            <Link src={contact.github} style={styles.projectLink}>
              GitHub
            </Link>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Resumo profissional</Text>
        {summary.map((paragraph, i) => (
          <Text key={i} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Formação</Text>
        {education && education.length > 0 ? (
          education.map((item, i) => (
            <View key={i} style={styles.educationBlock}>
              <Text style={styles.educationDegree}>{item.degree}</Text>
              {(item.institution || item.period) ? (
                <Text style={styles.educationMeta}>
                  {[item.institution, item.period].filter(Boolean).join(' · ')}
                </Text>
              ) : null}
            </View>
          ))
        ) : (
          <Text style={styles.paragraph}>Formação em Ciência da Computação ou áreas afins.</Text>
        )}

        <Text style={styles.sectionTitle}>Habilidades técnicas</Text>
        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>Linguagens</Text>
          <View style={styles.skillList}>
            {skills.languages.map((s, i) => (
              <Text key={i} style={styles.skillChip}>
                {s}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>Bancos de dados</Text>
          <View style={styles.skillList}>
            {skills.databases.map((s, i) => (
              <Text key={i} style={styles.skillChip}>
                {s}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>Frameworks e ferramentas</Text>
          <View style={styles.skillList}>
            {skills.frameworks.map((s, i) => (
              <Text key={i} style={styles.skillChip}>
                {s}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.skillCategory}>
          <Text style={styles.skillCategoryTitle}>DevOps</Text>
          <View style={styles.skillList}>
            {skills.devops.map((s, i) => (
              <Text key={i} style={styles.skillChip}>
                {s}
              </Text>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Experiência profissional</Text>
        {experience && experience.length > 0 && experience.map((exp, i) => (
          <View key={`exp-${i}`} style={styles.experienceBlock} wrap={false}>
            <Text style={styles.experienceRole}>{exp.role}</Text>
            <Text style={styles.experienceCompany}>
              {[exp.company, exp.period].filter(Boolean).join(' · ')}
            </Text>
            {exp.highlights && exp.highlights.length > 0 ? (
              <View style={styles.experienceHighlightsWrap}>
                {exp.highlights.map((line, j) => (
                  <Text key={j} style={styles.experienceHighlights}>
                    • {line}
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
        ))}
        {projects && projects.length > 0 && (
          <>
            {experience && experience.length > 0 ? (
              <Text style={styles.projectsSubtitle}>Projetos relevantes</Text>
            ) : null}
            {projects.map((project, i) => (
              <View key={i} style={styles.projectBlock} wrap={false}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
                <Text style={styles.projectTech}>
                  {project.technologies.join(' · ')}
                </Text>
                {project.demoLink && (
                  <Link src={project.demoLink} style={styles.projectLink}>
                    {project.demoLink}
                  </Link>
                )}
              </View>
            ))}
          </>
        )}

        <View style={styles.footer} fixed>
          <Text>{contact.email}</Text>
          <Text> · </Text>
          <Link src={contact.linkedin} style={styles.projectLink}>
            LinkedIn
          </Link>
          <Text> · </Text>
          <Link src={contact.github} style={styles.projectLink}>
            GitHub
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default CVDocument;
