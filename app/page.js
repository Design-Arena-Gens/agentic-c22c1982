'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null)

  const sections = [
    {
      id: 1,
      title: "1. Identificación del Caso",
      icon: "📋",
      items: [
        "Número de expediente o referencia",
        "Partes involucradas (demandante, demandado, terceros)",
        "Fecha de inicio del caso",
        "Tribunal o jurisdicción competente",
        "Tipo de procedimiento (civil, penal, laboral, administrativo, etc.)"
      ]
    },
    {
      id: 2,
      title: "2. Antecedentes de Hecho",
      icon: "📖",
      items: [
        "Narración cronológica de los hechos relevantes",
        "Contexto factual completo y objetivo",
        "Fechas, lugares y circunstancias importantes",
        "Documentación y pruebas existentes",
        "Relación entre las partes antes del conflicto"
      ]
    },
    {
      id: 3,
      title: "3. Planteamiento del Problema Jurídico",
      icon: "❓",
      items: [
        "Identificación clara de la cuestión legal a resolver",
        "Delimitación del alcance del análisis",
        "Formulación de preguntas específicas",
        "Identificación de conflictos normativos (si existen)",
        "Determinación de la materia jurídica aplicable"
      ]
    },
    {
      id: 4,
      title: "4. Marco Normativo Aplicable",
      icon: "⚖️",
      items: [
        "Constitución y principios constitucionales",
        "Leyes orgánicas y ordinarias pertinentes",
        "Reglamentos y normativa secundaria",
        "Tratados internacionales ratificados",
        "Jerarquía normativa aplicable al caso"
      ]
    },
    {
      id: 5,
      title: "5. Análisis de Jurisprudencia",
      icon: "🏛️",
      items: [
        "Sentencias relevantes de tribunales superiores",
        "Línea jurisprudencial aplicable",
        "Precedentes vinculantes y persuasivos",
        "Evolución interpretativa de las normas",
        "Criterios de unificación de doctrina"
      ]
    },
    {
      id: 6,
      title: "6. Doctrina Jurídica",
      icon: "📚",
      items: [
        "Opiniones de juristas reconocidos",
        "Comentarios doctrinales relevantes",
        "Interpretación académica de las normas",
        "Debate doctrinal sobre puntos controvertidos",
        "Referencias bibliográficas especializadas"
      ]
    },
    {
      id: 7,
      title: "7. Análisis de Derechos y Obligaciones",
      icon: "🔍",
      items: [
        "Derechos de las partes involucradas",
        "Obligaciones legales aplicables",
        "Cargas probatorias correspondientes",
        "Derechos fundamentales en juego",
        "Garantías procesales aplicables"
      ]
    },
    {
      id: 8,
      title: "8. Subsunción Jurídica",
      icon: "🎯",
      items: [
        "Aplicación de la norma a los hechos concretos",
        "Calificación jurídica de la conducta o situación",
        "Cumplimiento de requisitos legales",
        "Análisis de elementos configuradores (si aplica)",
        "Verificación de presupuestos de hecho normativos"
      ]
    },
    {
      id: 9,
      title: "9. Interpretación Jurídica",
      icon: "💡",
      items: [
        "Método de interpretación utilizado (literal, sistemático, teleológico, histórico)",
        "Análisis del espíritu de la norma",
        "Interpretación conforme a la Constitución",
        "Aplicación de principios generales del derecho",
        "Criterios de integración jurídica (analogía, equidad)"
      ]
    },
    {
      id: 10,
      title: "10. Identificación de Vacíos o Conflictos Normativos",
      icon: "⚠️",
      items: [
        "Lagunas legales existentes",
        "Antinomias normativas",
        "Conflictos entre normas de igual o distinto rango",
        "Propuestas de solución interpretativa",
        "Criterios de resolución de conflictos normativos"
      ]
    },
    {
      id: 11,
      title: "11. Análisis de Pruebas",
      icon: "🔬",
      items: [
        "Valoración de las pruebas disponibles",
        "Admisibilidad y pertinencia probatoria",
        "Fuerza probatoria de cada elemento",
        "Necesidad de pruebas adicionales",
        "Estándar probatorio aplicable"
      ]
    },
    {
      id: 12,
      title: "12. Viabilidad Jurídica",
      icon: "✅",
      items: [
        "Probabilidad de éxito de la pretensión",
        "Fortalezas del caso",
        "Debilidades y riesgos",
        "Análisis de precedentes similares",
        "Escenarios posibles y sus consecuencias"
      ]
    },
    {
      id: 13,
      title: "13. Posibles Estrategias Jurídicas",
      icon: "♟️",
      items: [
        "Alternativas procesales disponibles",
        "Recursos y medios de impugnación",
        "Estrategias de negociación o conciliación",
        "Medidas cautelares aplicables",
        "Rutas de acción recomendadas"
      ]
    },
    {
      id: 14,
      title: "14. Consecuencias Jurídicas",
      icon: "⚡",
      items: [
        "Efectos legales de las posibles decisiones",
        "Consecuencias económicas, civiles o penales",
        "Responsabilidades derivadas",
        "Plazos y términos aplicables",
        "Impacto en derechos de terceros"
      ]
    },
    {
      id: 15,
      title: "15. Conclusiones",
      icon: "📝",
      items: [
        "Síntesis del análisis realizado",
        "Respuesta fundamentada a la problemática planteada",
        "Posición jurídica recomendada",
        "Valoración de riesgos y beneficios",
        "Determinación clara y precisa"
      ]
    },
    {
      id: 16,
      title: "16. Recomendaciones",
      icon: "💼",
      items: [
        "Acciones legales sugeridas",
        "Medidas preventivas o correctivas",
        "Documentación complementaria necesaria",
        "Plazos críticos a considerar",
        "Próximos pasos procesales"
      ]
    },
    {
      id: 17,
      title: "17. Bibliografía y Referencias",
      icon: "📎",
      items: [
        "Leyes y normas citadas",
        "Jurisprudencia referenciada",
        "Doctrina consultada",
        "Documentos y anexos",
        "Fuentes de información utilizadas"
      ]
    }
  ]

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            ⚖️ Elementos de un Análisis Jurídico Legal
          </h1>
          <p className={styles.subtitle}>
            Guía completa de los componentes esenciales que debe contener un análisis jurídico profesional
          </p>
        </header>

        <div className={styles.intro}>
          <h2>¿Qué es un Análisis Jurídico Legal?</h2>
          <p>
            Un análisis jurídico legal es un documento técnico que examina de manera sistemática y fundamentada
            una situación o problema desde la perspectiva del Derecho. Su objetivo es determinar la aplicabilidad
            de normas jurídicas a hechos concretos, evaluar derechos y obligaciones, y proporcionar conclusiones
            y recomendaciones fundamentadas.
          </p>
        </div>

        <div className={styles.sections}>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`${styles.card} ${expandedSection === section.id ? styles.expanded : ''}`}
            >
              <div
                className={styles.cardHeader}
                onClick={() => toggleSection(section.id)}
              >
                <span className={styles.icon}>{section.icon}</span>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <span className={styles.toggle}>
                  {expandedSection === section.id ? '−' : '+'}
                </span>
              </div>

              {expandedSection === section.id && (
                <div className={styles.cardContent}>
                  <ul className={styles.list}>
                    {section.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.note}>
            <strong>Nota Importante:</strong>
            <p>
              La estructura y profundidad del análisis jurídico puede variar según el tipo de caso,
              la jurisdicción, y la finalidad del documento. Algunos análisis pueden requerir secciones
              adicionales o enfatizar ciertos aspectos sobre otros dependiendo de la complejidad del asunto.
            </p>
          </div>

          <div className={styles.tips}>
            <h3>🎓 Recomendaciones para un Buen Análisis Jurídico:</h3>
            <ul>
              <li><strong>Objetividad:</strong> Mantener imparcialidad en el análisis</li>
              <li><strong>Fundamentación:</strong> Todas las afirmaciones deben estar respaldadas</li>
              <li><strong>Claridad:</strong> Usar lenguaje jurídico preciso pero comprensible</li>
              <li><strong>Exhaustividad:</strong> Examinar todos los aspectos relevantes</li>
              <li><strong>Actualidad:</strong> Verificar vigencia de normas y jurisprudencia</li>
              <li><strong>Coherencia:</strong> Mantener lógica interna en el razonamiento</li>
              <li><strong>Practicidad:</strong> Orientar hacia soluciones aplicables</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
