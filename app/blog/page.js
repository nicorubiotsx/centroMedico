import React from 'react';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog de Salud - Centro Médico Las Cabras',
  description: 'Artículos de salud, consejos de prevención y novedades del Centro Médico Las Cabras. Mantente informado sobre bienestar y calidad de vida.',
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Control Preventivo: la clave para una vida saludable',
      excerpt: 'Los chequeos médicos regulares permiten detectar enfermedades silenciosas a tiempo. Conoce qué exámenes deberías realizarte según tu edad y factores de riesgo.',
      category: 'Prevención',
      date: '25 de junio, 2026',
      author: 'Dr. Carlos Mendoza',
      readTime: '5 min',
      color: '#0284c7',
    },
    {
      id: 2,
      title: 'Vacunación infantil: calendario actualizado 2026',
      excerpt: 'La vacunación en la primera infancia es fundamental para prevenir enfermedades graves. Revisa el calendario oficial y asegúrate de que tus hijos estén protegidos.',
      category: 'Pediatría',
      date: '18 de junio, 2026',
      author: 'Dra. Beatriz Fuentes',
      readTime: '4 min',
      color: '#0d9488',
    },
    {
      id: 3,
      title: 'Hipertensión arterial: el asesino silencioso',
      excerpt: 'Más del 30% de los adultos chilenos padece hipertensión sin saberlo. Aprende a reconocer los factores de riesgo y la importancia de controlar tu presión regularmente.',
      category: 'Cardiología',
      date: '10 de junio, 2026',
      author: 'Dr. Alejandro Silva',
      readTime: '6 min',
      color: '#dc2626',
    },
    {
      id: 4,
      title: 'Protección solar en zonas rurales: guía práctica',
      excerpt: 'Las comunas agrícolas de la VI Región presentan alta exposición al sol. Descubre cómo proteger tu piel correctamente y cuándo acudir al dermatólogo.',
      category: 'Dermatología',
      date: '2 de junio, 2026',
      author: 'Dra. Sofía Vergara',
      readTime: '4 min',
      color: '#f59e0b',
    },
    {
      id: 5,
      title: 'Lesiones deportivas más comunes en el campo',
      excerpt: 'El trabajo agrícola y las actividades al aire libre pueden provocar lesiones musculoesqueléticas. Conoce las más frecuentes y cómo prevenirlas.',
      category: 'Traumatología',
      date: '25 de mayo, 2026',
      author: 'Dr. Roberto Díaz',
      readTime: '5 min',
      color: '#7c3aed',
    },
    {
      id: 6,
      title: 'Salud dental: por qué no debes posponer tu visita',
      excerpt: 'Las caries y la enfermedad periodontal afectan a millones de chilenos. Te explicamos por qué una visita al dentista cada 6 meses puede ahorrarte dolor y gastos.',
      category: 'Odontología',
      date: '15 de mayo, 2026',
      author: 'Dr. Martín López',
      readTime: '3 min',
      color: '#06b6d4',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.tag}>Blog de Salud</span>
        <h1 className={styles.title}>
          Consejos y <span className={styles.accentText}>novedades</span> para tu bienestar
        </h1>
        <p className={styles.subtitle}>
          Artículos escritos por nuestro equipo médico con información práctica y actualizada para cuidar tu salud y la de tu familia.
        </p>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article key={article.id} className={`${styles.articleCard} glass-effect`}>
              <div className={styles.articleImage}>
                <div className={styles.imagePlaceholder} style={{ background: `linear-gradient(135deg, ${article.color}22, ${article.color}44)` }}>
                  <span className={styles.imageIcon} style={{ color: article.color }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.categoryBadge} style={{ background: `${article.color}18`, color: article.color }}>{article.category}</span>
                  <span className={styles.readTime}>{article.readTime} de lectura</span>
                </div>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>{article.author.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
                    <div>
                      <span className={styles.authorName}>{article.author}</span>
                      <span className={styles.articleDate}>{article.date}</span>
                    </div>
                  </div>
                  <span className={styles.readMore}>
                    Leer más
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
