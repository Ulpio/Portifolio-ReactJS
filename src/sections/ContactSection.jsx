import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail, MdSend, MdCheckCircle, MdError } from 'react-icons/md';
import emailService from '../services/emailService';
import './ContactSection.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const INITIAL_FORM = { name: '', email: '', message: '' };

function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.errors.nameRequired');
    if (!form.email.trim()) {
      errs.email = t('contact.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t('contact.errors.emailInvalid');
    }
    if (!form.message.trim()) errs.message = t('contact.errors.messageRequired');
    return errs;
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setResult(null);
    const res = await emailService.sendEmail(form);
    setLoading(false);
    setResult({
      success: res.success,
      message: res.success ? t('contact.success') : t('contact.error'),
    });
    if (res.success) setForm(INITIAL_FORM);
  };

  const socialLinks = [
    {
      href: 'https://github.com/Ulpio',
      label: 'GitHub',
      handle: 'github.com/Ulpio',
      Icon: SiGithub,
      bg: 'rgba(88, 166, 255, 0.08)',
      iconColor: '#e6edf3',
    },
    {
      href: 'https://linkedin.com/in/ulpionetto',
      label: 'LinkedIn',
      handle: 'linkedin.com/in/ulpionetto',
      Icon: SiLinkedin,
      bg: 'rgba(10, 102, 194, 0.15)',
      iconColor: '#0a66c2',
    },
    {
      href: 'mailto:ulpionetto0@gmail.com',
      label: 'Email',
      handle: 'ulpionetto0@gmail.com',
      Icon: MdEmail,
      bg: 'rgba(88, 166, 255, 0.08)',
      iconColor: '#58a6ff',
    },
  ];

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-section__inner">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span variants={itemVariants} className="contact-section__label">
            {t('contact.label')}
          </motion.span>
          <motion.h2 id="contact-heading" variants={itemVariants} className="contact-section__title">
            {t('contact.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="contact-section__subtitle">
            {t('contact.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants} className="contact-section__grid">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              noValidate
              aria-label={t('contact.formAria')}
            >
              <div className="contact-form__field">
                <label htmlFor="contact-name" className="contact-form__label">
                  {t('contact.nameLabel')}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={`contact-form__input${errors.name ? ' contact-form__input--error' : ''}`}
                  placeholder={t('contact.namePlaceholder')}
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span id="name-error" className="contact-form__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email" className="contact-form__label">
                  {t('contact.emailLabel')}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`contact-form__input${errors.email ? ' contact-form__input--error' : ''}`}
                  placeholder={t('contact.emailPlaceholder')}
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span id="email-error" className="contact-form__error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message" className="contact-form__label">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`contact-form__textarea${errors.message ? ' contact-form__textarea--error' : ''}`}
                  placeholder={t('contact.messagePlaceholder')}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span id="message-error" className="contact-form__error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {result && (
                <div
                  className={`contact-form__feedback ${result.success ? 'contact-form__feedback--success' : 'contact-form__feedback--error'}`}
                  role="status"
                  aria-live="polite"
                >
                  {result.success ? (
                    <MdCheckCircle size={18} aria-hidden="true" />
                  ) : (
                    <MdError size={18} aria-hidden="true" />
                  )}
                  {result.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="contact-form__submit"
                aria-busy={loading}
              >
                <MdSend size={16} aria-hidden="true" />
                {loading ? t('contact.sending') : t('contact.submit')}
              </button>
            </form>

            {/* Social links */}
            <div className="contact-social">
              {socialLinks.map(({ href, label, handle, Icon, bg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="contact-social__card"
                  aria-label={`${label}: ${handle}`}
                >
                  <div className="contact-social__icon" style={{ background: bg }}>
                    <Icon size={22} style={{ color: iconColor }} aria-hidden="true" />
                  </div>
                  <div className="contact-social__info">
                    <span className="contact-social__name">{label}</span>
                    <span className="contact-social__handle">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
