/**
 * CONFIGURACIÓN GLOBAL DE PUNTO HOGAR S.A.S.
 * Certificado de Existencia y Representación Legal - Cámara de Comercio de Cali
 * NIT: 800199735-1 | Matrícula Mercantil N°: 1375-50
 */

const APP_CONFIG = {
  company: {
    name: "Punto Hogar S.A.S.",
    brandName: "Punto Hogar",
    slogan: "¡Tu lugar para un hogar más lindo y funcional!",
    nit: "800199735-1",
    matricula: "1375-50",
    camaraComercio: "Cámara de Comercio de Cali",
    fundationYear: 1997,
    yearsExperience: "29+",
    phone: "+57 310 467 0073",
    phoneDisplay: "+57 (310) 467-0073",
    phoneRaw: "3104670073",
    email: "ventas@puntohogar.space",
    address: "Calle 5 B4 # 36 - 56",
    city: "Cali",
    department: "Valle del Cauca",
    country: "Colombia",
    fullAddress: "Calle 5 B4 # 36 - 56, Cali, Valle del Cauca, Colombia",
    domain: "puntohogar.space",
    schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM",
    niifGroup: "Grupo 2 (NIIF para PYMES)",
    judicialEmail: "ventas@puntohogar.space"
  },

  about: {
    badge: "29 Años Transformando Espacios",
    title: "Excelencia Arquitectónica & Diseño de Interiores de Alta Gama",
    description: "Desde nuestra fundación el 25 de agosto de 1997 en la ciudad de Cali, Punto Hogar S.A.S. se ha posicionado como la compañía líder en transformación espacial, remodelación integral, amoblamiento ejecutivo y domótica avanzada. Respaldados por nuestra matrícula mercantil N° 1375-50 ante la Cámara de Comercio de Cali y bajo estrictos estándares de ingeniería HSEQ, unimos innovación, estética y funcionalidad para dar vida a hogares y corporaciones extraordinarias.",
    mission: "Proveer soluciones arquitectónicas y de diseño de interiores que superen las expectativas de elegancia, confort y durabilidad de nuestros clientes, garantizando rigurosidad técnica y cumplimiento legal 100%.",
    vision: "Ser consolidados internacionalmente como el referente de arquitectura interior y automatización residencial de mayor prestigio en el suroccidente colombiano y Latinoamérica."
  },

  stats: [
    { value: "+1,250", label: "Proyectos Ejecutados", detail: "Proyectos de alta gama entregados a satisfacción" },
    { value: "100%", label: "Cumplimiento HSEQ", detail: "Normas de calidad ISO 9001 y SG-SST" },
    { value: "29+", label: "Años de Trayectoria", detail: "Constituida formalmente desde 1997" },
    { value: "99.8%", label: "Satisfacción Clientes", detail: "Garantía escrita y soporte post-entrega" }
  ],

  pillars: [
    {
      title: "Cumplimiento 100% Contractual",
      description: "Ejecución estricta de cronogramas de obra con pólizas de cumplimiento y garantía de entregas en fecha pactada.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    },
    {
      title: "Precisión Técnica & Modelado 3D",
      description: "Planificación BIM de alta resolución y planos detallados para asegurar que cada milímetro responda a la especificación aprobada.",
      icon: `<svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`
    },
    {
      title: "Sostenibilidad & Acabados Eco",
      description: "Uso de materiales certificados de bajo impacto ambiental, maderas sostenibles y recubrimientos libres de emisiones tóxicas.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V14M12 22a10 10 0 100-20 10 10 0 000 20z"></path></svg>`
    },
    {
      title: "Seguridad HSEQ Certificada",
      description: "Estándares rigurosos de Seguridad y Salud en el Trabajo para nuestro personal técnico y protección total en sus instalaciones.",
      icon: `<svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
    },
    {
      title: "Transparencia & Presupuesto Cerrado",
      description: "Cero sobrecostos ocultos. Desglose analítico de costos de mano de obra, insumos y tiempos de ejecución desde el día uno.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    },
    {
      title: "Equipo Multidisciplinario Experto",
      description: "Arquitectos, ingenieros civiles, especialistas en iluminación y diseñadores industriales dedicados a su proyecto.",
      icon: `<svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Diseño & Arquitectura de Interiores",
      subtitle: "Espacios de vanguardia a la medida",
      description: "Desarrollo integral de proyectos arquitectónicos residenciales y comerciales. Incluye distribución espacial optimizada, renderizado 3D fotorrealista, selección de paletas cromáticas, texturas y proyectos de iluminación personalizada.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
      tags: ["Diseño 3D", "Iluminación", "Interiorismo"]
    },
    {
      id: "srv-2",
      title: "Remodelación Integral de Espacios",
      subtitle: "Transformación total sin fricciones",
      description: "Renovación completa de casas, apartamentos, penthouses y sedes corporativas. Gestión técnica de demolición, obra blanca, carpintería arquitectónica, revestimientos importados e instalaciones de alta complejidad.",
      icon: `<svg class="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-1a2 2 0 01-2-2V4zm-1 9a2 2 0 012-2h2a2 2 0 012 2v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-7z"></path></svg>`,
      tags: ["Obra Blanca", "Pisos & Baños", "Garantía Total"]
    },
    {
      id: "srv-3",
      title: "Amoblamiento Corporativo & Residencial",
      subtitle: "Mobiliario ergonómico de alta gama",
      description: "Fabricación e instalación de mobiliario exclusivo en finas maderas y metales. Diseños ergonómicos para salas de juntas, estaciones de trabajo ejecutivas, cocinas integrales de lujo y sistemas de almacenamiento inteligente.",
      icon: `<svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>`,
      tags: ["Mobiliario Custom", "Cocinas Lujo", "Ergonomía"]
    },
    {
      id: "srv-4",
      title: "Domótica e Integración Inteligente",
      subtitle: "Casas e instalaciones del futuro",
      description: "Automatización residencial y empresarial de última generación. Centralización de sistemas de iluminación inteligente, climatización por zonas, persianas automatizadas, audio distribuido y seguridad perimetral.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
      tags: ["Smart Home", "Audio RGB", "Control por App"]
    }
  ],

  projects: [
    {
      title: "Residencia Penthouse Ciudad Jardín",
      category: "Interiorismo & Amoblamiento de Lujo",
      image: "p1.jpg",
      location: "Ciudad Jardín, Cali",
      year: "2026",
      summary: "Transformación arquitectónica de penthouse de 380m² con iluminación LED indirecta, tonos neutros y acabados en mármol."
    },
    {
      title: "Renovación Gourmet & Cocina Integral",
      category: "Remodelación & Carpintería Fina",
      image: "p2.jpg",
      location: "Granada, Cali",
      year: "2025",
      summary: "Diseño e instalación de cocina isla en cuarzo calacatta, herrajes alemanes de cierre suave y barra social en madera de teca."
    },
    {
      title: "Sede Corporativa & Oficinas Ejecutivas",
      category: "Amoblamiento & Arquitectura Comercial",
      image: "p3.jpg",
      location: "Zona Oeste, Cali",
      year: "2025",
      summary: "Adecuación integral de 3 pisos corporativos con paneles fonoabsorbentes, estaciones ergonómicas y cristales templados."
    },
    {
      title: "Smart Residence & Control Domótico",
      category: "Domótica & Automatización",
      image: "p4.jpg",
      location: "Pance, Cali",
      year: "2026",
      summary: "Integración domótica completa en villa residencial: control de accesos biométricos, audio multi-zona y ambientación lumínica."
    }
  ],

  legal: {
    privacyPolicy: {
      title: "Política de Tratamiento de Datos Personales y Habeas Data",
      subtitle: "Ley 1581 de 2012 / Decreto 1377 de 2013 - República de Colombia",
      lastUpdated: "10 de Agosto de 2026",
      sections: [
        {
          num: "1",
          heading: "Identificación del Responsable del Tratamiento",
          content: "PUNTO HOGAR S.A.S., identificada con NIT 800199735-1, con matrícula mercantil N° 1375-50 de la Cámara de Comercio de Cali, con domicilio principal en Calle 5 B4 # 36 - 56, Cali, Valle del Cauca, Colombia; correo electrónico de notificación legal: ventas@puntohogar.space, y teléfono de atención comercial: +57 310 467 0073, en calidad de Responsable del Tratamiento de Datos Personales, adopta la presente política en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes."
        },
        {
          num: "2",
          heading: "Principios Rectores del Tratamiento",
          content: "PUNTO HOGAR S.A.S. aplicará de manera estricta e integral los principios rectores de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad en cada una de las actividades que involucren recolección, almacenamiento, uso, circulación o supresión de datos personales."
        },
        {
          num: "3",
          heading: "Datos Recopilados y Finalidades del Tratamiento",
          content: "Los datos recopilados a través de nuestros formularios web, canales telefónicos o interacciones comerciales (nombre, teléfono, correo electrónico, dirección física y requerimientos de proyectos) serán utilizados para: a) El procesamiento y emisión de cotizaciones y propuestas arquitectónicas; b) La ejecución formal de contratos de obra, remodelación o compraventa de mobiliario; c) La gestión de facturación, cobranza y obligaciones contables/fiscales según el Grupo 2 NIIF; d) La atención eficiente de solicitudes, peticiones, quejas y reclamos (PQRS); e) El envío de comunicaciones comerciales y novedades de servicios cuando hayan sido expresamente autorizadas."
        },
        {
          num: "4",
          heading: "Derechos de los Titulares (Derechos ARCO)",
          content: "De conformidad con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene derecho a: a) Conocer, actualizar y rectificar sus datos personales frente a PUNTO HOGAR S.A.S.; b) Solicitar prueba de la autorización otorgada; c) Ser informado previa solicitud sobre el uso que se ha dado a sus datos; d) Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la ley; e) Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales; f) Acceder en forma gratuita a sus datos personales objeto de tratamiento."
        },
        {
          num: "5",
          heading: "Procedimiento y Canales para el Ejercicio de Derechos",
          content: "Los titulares pueden ejercer sus derechos mediante comunicación escrita remitida al correo electrónico ventas@puntohogar.space o entregada físicamente en la Calle 5 B4 # 36 - 56, Cali, Colombia. La consulta o reclamo deberá contener la identificación del titular, la descripción de los hechos que dan lugar a la solicitud y los documentos de soporte. Las consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. En caso de reclamos, el término de respuesta formal será de quince (15) días hábiles."
        },
        {
          num: "6",
          heading: "Política de Cookies y Almacenamiento Local",
          content: "Este sitio web utiliza cookies técnicas y mecanismos de almacenamiento local (localStorage) únicamente para recordar las preferencias de consentimiento del usuario y optimizar la navegación fluida dentro del portal. No vendemos ni compartimos información de rastreo con redes de anuncios de terceros sin su consentimiento explícito."
        },
        {
          num: "7",
          heading: "Medidas de Seguridad e Integridad de la Información",
          content: "PUNTO HOGAR S.A.S. ha implementado medidas de seguridad técnicas, humanas y administrativas de alto nivel (incluyendo cifrado SSL/TLS de 256 bits y restricción de accesos por roles) para evitar la alteración, pérdida, consulta, uso o acceso no autorizado o fraudulento de los datos personales almacenados."
        },
        {
          num: "8",
          heading: "Vigencia y Modificaciones a la Política",
          content: "La presente política rige a partir de su publicación el 10 de Agosto de 2026. Los datos personales permanecerán en nuestras bases de datos durante el tiempo que sea necesario para cumplir con las finalidades autorizadas y las obligaciones legales y contractuales. Cualquier modificación sustancial a este documento será notificada oportunamente en nuestro portal oficial puntohogar.space."
        }
      ]
    },

    termsAndConditions: {
      title: "Términos y Condiciones Generales de Uso y Contratación",
      subtitle: "Regido por la Legislación de la República de Colombia - Ley 23 de 1982 / Ley 527 de 1999",
      lastUpdated: "10 de Agosto de 2026",
      sections: [
        {
          num: "1",
          heading: "Titularidad del Sitio y Aceptación de las Condiciones",
          content: "El presente portal web es de propiedad exclusiva de PUNTO HOGAR S.A.S. (NIT 800199735-1), sociedad comercial constituida conforme a las leyes colombianas, con domicilio en Cali, Valle del Cauca. El acceso, navegación y uso de este sitio atribuye la condición de Usuario e implica la aceptación plena e incondicional de todos los términos expuestos en este documento."
        },
        {
          num: "2",
          heading: "Propiedad Intelectual e Industrial (Ley 23 de 1982)",
          content: "Todos los elementos contenidos en este sitio web, incluyendo de manera enunciativa pero no limitativa: diseños arquitectónicos, renders 3D, fotografías, logotipos, marcas comerciales, código fuente, estructura de datos y textos, son de propiedad de PUNTO HOGAR S.A.S. o cuentan con la correspondiente licencia de uso. Queda terminantemente prohibida su reproducción, distribución, transformación o explotación pública sin la autorización previa y expresamente otorgada por escrito por la empresa."
        },
        {
          num: "3",
          heading: "Condiciones de Uso y Usos Prohibidos",
          content: "El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y servicios del sitio web. Queda prohibido: a) Introducir virus, código malicioso o programas destructivos; b) Intentar acceder de forma no autorizada a los servidores o bases de datos de PUNTO HOGAR S.A.S.; c) Usar los formularios web con fines de spam, difamación o fraude."
        },
        {
          num: "4",
          heading: "Carácter Informativo de Cotizaciones y Renders",
          content: "Las imágenes, renders, modelos visuales y estimaciones de precios presentados en este portal son de carácter ilustrativo e informativo. Ningún presupuesto digital constituye una oferta binding hasta tanto se firme un contrato formal de ejecución de obra o compraventa con especificaciones técnicas detalladas y cronograma definitivo."
        },
        {
          num: "5",
          heading: "Tratamiento de Datos Personales",
          content: "La información recolectada a través del portal será tratada de acuerdo con la Política de Privacidad de Habeas Data de PUNTO HOGAR S.A.S. Al interactuar con el formulario de contacto, el usuario autoriza de manera libre, previa y voluntaria dicho tratamiento."
        },
        {
          num: "6",
          heading: "Exención y Limitación de Responsabilidad",
          content: "PUNTO HOGAR S.A.S. no se hace responsable por interrupciones en la disponibilidad del sitio web causadas por fallas en las redes de telecomunicaciones de terceros, ataques cibernéticos de fuerza mayor o mantenimiento programado de servidores."
        },
        {
          num: "7",
          heading: "Enlaces e Integraciones con Terceros",
          content: "Este portal puede incluir mapas interactivos (Google Maps) o enlaces a redes sociales de la compañía. PUNTO HOGAR S.A.S. no asume responsabilidad alguna por las políticas de privacidad o contenidos de sitios de terceros."
        },
        {
          num: "8",
          heading: "Modificaciones a las Condiciones",
          content: "PUNTO HOGAR S.A.S. se reserva la facultad de modificar unilateralmente en cualquier momento y sin previo aviso la presentación, configuración y condiciones de uso del portal web."
        },
        {
          num: "9",
          heading: "Legislación Aplicable y Jurisdicción Competente",
          content: "Los presentes Términos y Condiciones se rigen e interpretan conforme a las leyes de la República de Colombia. Cualquier controversia, diferencia o reclamación derivada de la interpretación o ejecución de este contrato será sometida prioritariamente a arreglo directo o conciliación, y en su defecto a la jurisdicción de los Jueces Ordinarios de la ciudad de Cali, Valle del Cauca, Colombia."
        }
      ]
    }
  }
};

/**
 * DOM INJECTION & INTERACTIVE LOGIC
 */
document.addEventListener("DOMContentLoaded", () => {
  injectCompanyData();
  renderStats();
  renderPillars();
  renderServices();
  renderProjects();
  initCookieBanner();
  initContactForm();
  initMobileMenu();
});

function injectCompanyData() {
  const comp = APP_CONFIG.company;
  const abt = APP_CONFIG.about;

  setElementText("company-name", comp.name);
  setElementText("company-brand", comp.brandName);
  setElementText("company-slogan", comp.slogan);
  setElementText("company-nit", comp.nit);
  setElementText("company-nit-full", `NIT: ${comp.nit} | ${comp.camaraComercio}`);
  setElementText("company-address", comp.address);
  setElementText("company-city", `${comp.city}, ${comp.department}, ${comp.country}`);
  setElementText("company-phone", comp.phoneDisplay);
  setElementText("company-email", comp.email);
  setElementText("company-schedule", comp.schedule);
  setElementText("company-years", comp.yearsExperience);
  setElementText("company-foundation", `${comp.fundationYear}`);
  setElementText("current-year", new Date().getFullYear().toString());

  setElementHref("phone-cta-link", `tel:${comp.phoneRaw}`);
  setElementHref("nav-phone-link", `tel:${comp.phoneRaw}`);
  setElementHref("email-link", `mailto:${comp.email}`);

  setElementText("about-badge", abt.badge);
  setElementText("about-title", abt.title);
  setElementText("about-description", abt.description);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElementHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.stats.map(s => `
    <div class="glass-card p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
      <div class="font-outfit text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mb-2">
        ${s.value}
      </div>
      <h3 class="text-slate-100 font-semibold text-base mb-1">${s.label}</h3>
      <p class="text-slate-400 text-xs">${s.detail}</p>
    </div>
  `).join("");
}

function renderPillars() {
  const container = document.getElementById("pillars-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.pillars.map(p => `
    <div class="glass-card p-8 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group">
      <div class="w-14 h-14 rounded-xl bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
        ${p.icon}
      </div>
      <h3 class="font-outfit text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">${p.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${p.description}</p>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.services.map(srv => `
    <div class="glass-card rounded-2xl border border-white/10 p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300 group hover:-translate-y-1">
      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="w-14 h-14 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:border-teal-400 transition-all">
            ${srv.icon}
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ${srv.tags[0]}
          </span>
        </div>
        <h3 class="font-outfit text-2xl font-bold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors">${srv.title}</h3>
        <p class="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">${srv.subtitle}</p>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">${srv.description}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-2 mb-6">
          ${srv.tags.map(t => `<span class="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">${t}</span>`).join("")}
        </div>
        <button onclick="selectServiceForQuote('${srv.title}')" class="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10">
          <span>Cotizar Servicio</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.projects.map(proj => `
    <div class="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-emerald-500/40 transition-all duration-300">
      <div class="relative h-64 overflow-hidden">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            ${proj.category}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4">
          <p class="text-xs text-slate-300 font-mono mb-1">📍 ${proj.location} • ${proj.year}</p>
          <h3 class="font-outfit text-xl font-bold text-white">${proj.title}</h3>
        </div>
      </div>
      <div class="p-6">
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${proj.summary}</p>
        <button onclick="selectServiceForQuote('${proj.title}')" class="text-emerald-400 hover:text-emerald-300 font-semibold text-xs flex items-center gap-1 group/btn">
          <span>Solicitar Proyecto Similar</span>
          <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function selectServiceForQuote(serviceName) {
  const select = document.getElementById("form-service");
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName) || select.options[i].value.includes(serviceName)) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      select.value = "Cotización General";
    }
  }
  const contactSec = document.getElementById("contacto");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
}

function initCookieBanner() {
  const consent = localStorage.getItem("cookie_consent");
  const banner = document.getElementById("cookie-banner");
  if (!consent && banner) {
    setTimeout(() => {
      banner.classList.remove("translate-y-full", "opacity-0");
    }, 1000);
  }
}

function acceptCookies() {
  localStorage.setItem("cookie_consent", "accepted");
  const banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.classList.add("translate-y-full", "opacity-0");
  }
}

function initContactForm() {
  const form = document.getElementById("quote-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    showToastSuccess(name, service);
    form.reset();
  });
}

function showToastSuccess(name, service) {
  const modal = document.getElementById("success-toast-modal");
  const userSpan = document.getElementById("toast-user-name");
  if (userSpan) userSpan.textContent = name;
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeToastModal() {
  const modal = document.getElementById("success-toast-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");
}

function openLegalModal(type) {
  const modal = document.getElementById("legal-modal");
  const titleEl = document.getElementById("legal-modal-title");
  const subtitleEl = document.getElementById("legal-modal-subtitle");
  const contentEl = document.getElementById("legal-modal-content");

  if (!modal || !contentEl) return;

  let doc = null;
  if (type === 'privacy') {
    doc = APP_CONFIG.legal.privacyPolicy;
  } else if (type === 'terms') {
    doc = APP_CONFIG.legal.termsAndConditions;
  }

  if (!doc) return;

  titleEl.textContent = doc.title;
  subtitleEl.textContent = `${doc.subtitle} • ÚLTIMA ACTUALIZACIÓN: ${doc.lastUpdated}`;

  contentEl.innerHTML = doc.sections.map(sec => `
    <div class="mb-6 bg-slate-900/60 p-5 rounded-xl border border-white/5">
      <h4 class="text-emerald-400 font-outfit font-bold text-lg mb-2">
        ${sec.num}. ${sec.heading}
      </h4>
      <p class="text-slate-300 text-sm leading-relaxed">${sec.content}</p>
    </div>
  `).join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLegalModal() {
  const modal = document.getElementById("legal-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}
