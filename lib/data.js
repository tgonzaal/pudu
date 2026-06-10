// Datos de Pudú para MadeInnConce 2026 (programa real + ecosistema biobiano).

export const EVENT = {
  name: 'MadeInnConce 2026',
  edition: '5ª edición',
  dates: '7, 8 y 9 de abril 2026',
  place: 'Concepción, Biobío',
};

export const ROLES = ['Emprendedor', 'Inversionista', 'Corporativo', 'Investigador', 'Académico', 'Otro'];

export const BUSCA_OPTIONS = ['Inversión', 'Co-fundador', 'Clientes', 'Proveedores', 'Mentores', 'Alianzas', 'Talento'];

export const DAYS = [
  { id: 'd1', label: 'Mar 7', full: 'Martes 7 de abril' },
  { id: 'd2', label: 'Mié 8', full: 'Miércoles 8 de abril' },
  { id: 'd3', label: 'Jue 9', full: 'Jueves 9 de abril' },
];

export const STAGES = [
  { id: 'principal', name: 'Escenario Principal', short: 'Principal', headerClass: 'bg-pudu-green' },
  { id: 'garage', name: 'Sala Garage', short: 'Garage', headerClass: 'bg-pudu-earth' },
  { id: 'camara', name: 'Sala de Cámara', short: 'S. Cámara', headerClass: 'bg-pudu-night' },
];
export const stageById = (id) => STAGES.find((s) => s.id === id) || STAGES[0];

export const TYPE_META = {
  keynote: { label: 'Keynote', chip: 'bg-pudu-green/10 text-pudu-green' },
  charla: { label: 'Charla', chip: 'bg-pudu-mist text-pudu-green' },
  panel: { label: 'Panel', chip: 'bg-pudu-night/10 text-pudu-night' },
  taller: { label: 'Taller', chip: 'bg-pudu-earth/15 text-pudu-earth' },
  show: { label: 'Show', chip: 'bg-pudu-earth/15 text-pudu-earth' },
  networking: { label: 'Networking', chip: 'bg-pudu-moss/15 text-pudu-moss' },
  pitch: { label: 'Pitch', chip: 'bg-pudu-earth/15 text-pudu-earth' },
};

const S = (name, role) => ({ name, role });

export const SESSIONS = [
  // ===== ESCENARIO PRINCIPAL =====
  { id: 'p1', day: 'd1', start: '09:00', end: '10:00', stage: 'principal', track: 'Inspiración', type: 'show', title: 'Inauguración + Show inaugural', sp: [S('Jean Paul Olhaberry', 'Ilusionista')], desc: 'El ilusionista que desafía lo imposible y nos recuerda que todo comienza creyendo.' },
  { id: 'p2', day: 'd1', start: '10:00', end: '10:20', stage: 'principal', track: 'Inspiración', type: 'keynote', title: 'El camino de Chile en el automovilismo mundial', sp: [S('Eliseo Salazar', 'Ex piloto de Fórmula 1')], desc: 'Un referente que abrió camino y desafió los límites desde Chile.' },
  { id: 'p3', day: 'd1', start: '10:20', end: '10:30', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'De los tramos a liderar las carreras del mundo', sp: [S('Macarena del Sante', 'Ex piloto y navegante del Rallymobil')], desc: 'La chilena que pasó de correr los tramos a liderar carreras del mundo.' },
  { id: 'p4', day: 'd1', start: '10:30', end: '11:00', stage: 'principal', track: 'Inspiración', type: 'panel', title: 'La largada de MADE INN CONCE', sp: [S('Eliseo Salazar', 'Ex piloto F1'), S('Felipe Arenas', 'Emprendedor'), S('Macarena del Sante', 'Ex piloto Rallymobil')], mod: 'Yazmin Chelech, Directora MadeInnConce', desc: 'El momento en que decides correr tu propia carrera.' },
  { id: 'p5', day: 'd1', start: '11:00', end: '11:20', stage: 'principal', track: 'Emprendimiento', type: 'charla', sponsor: 'Banco de Chile', title: 'De Ñuble a Barcelona', sp: [S('Sebastián Salas', 'Profesor'), S('Héctor Lema', 'Estudiante'), S('Luis Vega', 'Estudiante')], desc: 'La inspiración que nació en el aula y se convirtió en un proyecto de emprendimiento escolar.' },
  { id: 'p6', day: 'd1', start: '11:20', end: '11:40', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Un legado familiar penquista', sp: [S('Familia Roggendorf', '')], desc: 'Un legado familiar que se convirtió en parte de la identidad penquista.' },
  { id: 'p7', day: 'd1', start: '11:40', end: '12:00', stage: 'principal', track: 'Innovación', type: 'charla', sponsor: 'Entel', title: 'De la larga distancia al espacio', sp: [S('Claudio Anabalón', 'Gerente de Asuntos Corporativos y RR.II., Entel')], desc: 'Cómo la conectividad habilita la transformación del país.' },
  { id: 'p8', day: 'd1', start: '12:00', end: '12:20', stage: 'principal', track: 'Innovación', type: 'charla', title: 'Sembrando conciencia para construir el futuro', sp: [S('Catalina Droguett', 'Periodista y referente latinoamericana en sostenibilidad')], desc: 'La mujer que está sembrando conciencia para construir el futuro.' },
  { id: 'p9', day: 'd1', start: '12:20', end: '12:40', stage: 'principal', track: 'Tecnología', type: 'charla', title: 'No se trata de parecer, se trata de ser', sp: [S('David Ávila', 'CEO de Planius.ai')], desc: 'Construir una marca que deje huella, desde la autenticidad.' },
  { id: 'p10', day: 'd1', start: '12:40', end: '13:00', stage: 'principal', track: 'Emprendimiento', type: 'charla', sponsor: 'BancoEstado', title: 'Liderazgo femenino: rompiendo paradigmas en la banca', sp: [S('Soledad Ovando', 'Gerenta General de Crédito, BancoEstado')], desc: 'Liderazgo femenino rompiendo paradigmas en la banca.' },
  { id: 'p11', day: 'd1', start: '13:00', end: '13:40', stage: 'principal', track: 'Inspiración', type: 'panel', title: 'El alma de Collao', sp: [S('Claudio Castellón', 'Actor, corazón lila'), S('Diego Livingstone', 'Presidente Deportes Concepción')], mod: 'Óscar Sánchez, Irade Biobío', desc: 'Historias, memoria y pasión alrededor de Deportes Concepción.' },
  { id: 'p12', day: 'd1', start: '14:40', end: '15:10', stage: 'principal', track: 'Inspiración', type: 'panel', title: 'El piloto que conquistó la F1 y el emprendedor que desafía la gravedad', sp: [S('Eliseo Salazar', 'Ex piloto de Fórmula 1'), S('David Ávila', 'CEO de Planius.ai')], mod: 'Tesi Del Sante, Directora MadeInnConce', desc: 'Apertura de la tarde: dos historias que desafían los límites.' },
  { id: 'p13', day: 'd1', start: '15:10', end: '15:30', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Transformar las conversaciones en reflexión', sp: [S('Rayen Araya', 'Periodista, fundadora de Business are Business')], desc: 'La voz que transforma las conversaciones en espacios de reflexión.' },
  { id: 'p14', day: 'd1', start: '15:30', end: '15:50', stage: 'principal', track: 'Inspiración', type: 'charla', sponsor: 'Teatro Biobío', title: 'MIC Creatividad: experiencias culturales que activan ciudades', sp: [S('Fernanda Videla', 'Teatro Biobío'), S('Manuel Ubilla', 'Teatro Biobío')], desc: 'Cómo se diseñan experiencias culturales que activan ciudades.' },
  { id: 'p15', day: 'd1', start: '15:50', end: '16:10', stage: 'principal', track: 'Innovación', type: 'charla', title: 'MIC Innovación: el sonido del océano como herramienta de cambio', sp: [S('Marcela Ruiz Aguilar', 'Fundadora y CEO de Acústica Marina')], desc: 'La científica que transformó el sonido del océano en una herramienta para cambiar el mundo.' },
  { id: 'p16', day: 'd1', start: '16:10', end: '16:30', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'MIC Emprendimiento: del amor por las mascotas a una marca con propósito', sp: [S('Martín Ortega', 'Fundador y CEO de Pawwy')], desc: 'El emprendedor que convirtió el amor por las mascotas en una marca con propósito.' },
  { id: 'p17', day: 'd1', start: '16:30', end: '17:30', stage: 'principal', track: 'Innovación', type: 'panel', title: 'Cultura 360: innovaciones que cambian el ecosistema creativo', sp: [S('Paula Bengolea', 'Directora Ejecutiva de ForoInnovación'), S('Isidora Cabezón', 'Directora Ejecutiva de CRTIC'), S('Hugo Villaroel', 'Gerente Comercial Dsm & Humboldt Electronics'), S('Jurel Sónico', 'Presentación musical')], desc: 'Innovaciones que están cambiando el ecosistema creativo.' },
  { id: 'p18', day: 'd1', start: '17:30', end: '18:00', stage: 'principal', track: 'Innovación', type: 'charla', title: 'Lanzamiento Desafío Futuro', sp: [S('Sara Edwards', 'Project Leader Desafío Futuro'), S('José Antonio González', 'CFO Hera Materials')], desc: 'Lanzamiento de Desafío Futuro.' },
  { id: 'p19', day: 'd2', start: '10:00', end: '10:40', stage: 'principal', track: 'Innovación', type: 'panel', title: 'Conectar vidas: la innovación detrás de DKMS Chile', sp: [S('Andrés Saavedra', 'Responsable Regional Concepción, DKMS Chile'), S('Constanza Mackenna', 'Embajadora DKMS Chile')], desc: 'La innovación detrás de DKMS Chile.' },
  { id: 'p20', day: 'd2', start: '10:40', end: '11:00', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Convertir la aventura en una forma de vida', sp: [S('Coto Salgado', 'Fundadora de Experiencia RASA')], desc: 'Impulsa una comunidad que convierte la aventura en una forma de vida.' },
  { id: 'p21', day: 'd2', start: '11:00', end: '11:20', stage: 'principal', track: 'Emprendimiento', type: 'charla', sponsor: 'Camanchaca', title: 'El territorio como motor de cambio', sp: [S('Massiel Concha', 'Fundadora de Algas y Delicias')], desc: 'La emprendedora de Tomé que convirtió su territorio en un motor de cambio.' },
  { id: 'p22', day: 'd2', start: '11:20', end: '11:40', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Desde Chile a la cima global del BMX', sp: [S('Coco Zurita', 'Deportista, leyenda del BMX')], desc: 'Demostró que desde Chile también se puede llegar a la cima global.' },
  { id: 'p23', day: 'd2', start: '11:40', end: '12:00', stage: 'principal', track: 'Tecnología', type: 'charla', sponsor: 'Entel', title: 'Smartcity: habilitando la transformación tecnológica del país', sp: [S('Nicolas Goncalves', 'Gerente Comercial de Entel Digital')], desc: 'Smartcity: habilitando la transformación tecnológica del país.' },
  { id: 'p24', day: 'd2', start: '12:00', end: '12:20', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Liderar una de las causas más movilizadoras de Chile', sp: [S('María José Zaldivar', 'Directora General de Fundación Teletón')], desc: 'Lidera una de las causas sociales más movilizadoras de Chile.' },
  { id: 'p25', day: 'd2', start: '12:20', end: '12:40', stage: 'principal', track: 'Tecnología', type: 'charla', sponsor: 'Mercado Pago', title: 'Cómo la tecnología democratiza el acceso a las finanzas', sp: [S('Matias Spagui', 'Director Senior de Mercado Pago')], desc: 'Cómo la tecnología democratiza el acceso a las finanzas.' },
  { id: 'p26', day: 'd2', start: '12:40', end: '13:00', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'Creatividad y supervivencia: volver a comenzar', sp: [S('Fernando Cartes', 'Fundador y Director de Agencia Valiente / @kartess')], desc: 'Renunciar a todo y volver a comenzar.' },
  { id: 'p27', day: 'd2', start: '13:00', end: '13:20', stage: 'principal', track: 'Innovación', type: 'charla', title: 'Comunicar para amplificar el impacto de la ciencia', sp: [S('Macarena Rojas-Abalos', 'Presidenta de ACHIPEC')], desc: 'La bióloga que convirtió la comunicación en una herramienta para amplificar la ciencia.' },
  { id: 'p28', day: 'd2', start: '13:20', end: '13:40', stage: 'principal', track: 'Tecnología', type: 'charla', title: 'Empujando la innovación tecnológica en Chile', sp: [S('Roberto Camhi', 'Fundador de Mapcity')], desc: 'Una de las mentes que ha empujado la innovación tecnológica en Chile.' },
  { id: 'p29', day: 'd2', start: '13:40', end: '14:00', stage: 'principal', track: 'Tecnología', type: 'charla', sponsor: 'Maxxa', title: 'Transformando el acceso a financiamiento de las pymes', sp: [S('Cristian Sauterel', 'CEO de Maxxa')], desc: 'Transformando cómo las pequeñas empresas acceden a financiamiento.' },
  { id: 'p30', day: 'd2', start: '15:00', end: '15:30', stage: 'principal', track: 'Inspiración', type: 'panel', title: 'Donde termina el miedo', sp: [S('Coco Zurita', 'Leyenda del BMX'), S('Coto Salgado', 'Fundadora de Experiencia RASA')], mod: 'Federico Iriberry', desc: 'El momento en que la decisión pesa más que la duda.' },
  { id: 'p31', day: 'd2', start: '15:30', end: '15:50', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'MIC Emprendimiento: entrenar la mentalidad de miles de jóvenes', sp: [S('Vicente Reyes', 'Fundador de Chile Trasciende')], desc: 'Una comunidad que entrena la mentalidad de miles de jóvenes en Chile.' },
  { id: 'p32', day: 'd2', start: '15:50', end: '16:10', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'MIC Innovación: no importa dónde empieces, sino el coraje de atreverte', sp: [S('Cristóbal Castillo', 'Fundador de Punto Palta Chile')], desc: 'No importa dónde empieces, sino el coraje de atreverte.' },
  { id: 'p33', day: 'd2', start: '16:10', end: '16:30', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'MIC Creatividad: el chileno que conquistó Hollywood', sp: [S('Patricio Escala', 'Productor ganador del Óscar')], desc: 'El chileno que conquistó Hollywood con La Historia de un Oso.' },
  { id: 'p34', day: 'd2', start: '17:00', end: '18:00', stage: 'principal', track: 'Inspiración', type: 'show', title: 'Música en vivo', sp: [S('Artista por confirmar', '')], desc: 'Cierre musical de la jornada.' },
  { id: 'p35', day: 'd3', start: '10:00', end: '10:20', stage: 'principal', track: 'Tecnología', type: 'keynote', title: 'Reinventando cómo vemos televisión en Latinoamérica', sp: [S('Ignacio Opazo', 'Co-fundador y CTO de Zapping')], desc: 'Startup chilena que reinventa cómo vemos televisión en Latinoamérica.' },
  { id: 'p36', day: 'd3', start: '10:20', end: '10:30', stage: 'principal', track: 'Innovación', type: 'charla', title: 'Redefiniendo el futuro de la rehabilitación', sp: [S('Pamela Salazar', 'Fundadora y CEO de UMOV')], desc: 'Redefiniendo el futuro de la rehabilitación con innovación chilena.' },
  { id: 'p37', day: 'd3', start: '10:30', end: '11:00', stage: 'principal', track: 'Innovación', type: 'keynote', title: 'Hackear el futuro', sp: [S('Ignacio Opazo', 'Co-fundador y CTO de Zapping'), S('Pamela Salazar', 'Fundadora y CEO de UMOV')], mod: 'David Fernández, Director de MadeInnConce', desc: 'Una conversación con quienes no esperaron que el futuro: decidieron construirlo.' },
  { id: 'p38', day: 'd3', start: '11:20', end: '11:40', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'Una visión convertida en una cadena de belleza influyente', sp: [S('Dominique Rosemberg', 'Fundadora de DBS')], desc: 'Transformó una visión en una de las cadenas de belleza más influyentes de Chile.' },
  { id: 'p39', day: 'd3', start: '11:40', end: '12:00', stage: 'principal', track: 'Innovación', type: 'charla', sponsor: 'Urbani', title: 'Bloque Urbani: rediseñar el diseño inmobiliario desde regiones', sp: [S('Claudio Basualto', 'Fundador de Urbani')], desc: 'Redefinió el diseño inmobiliario contemporáneo desde regiones.' },
  { id: 'p40', day: 'd3', start: '12:00', end: '12:20', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'Conectar el talento emprendedor latinoamericano con el mundo', sp: [S('Damaris Mendoza', 'Partner 500 Global')], desc: 'Conecta el talento emprendedor latinoamericano con oportunidades globales.' },
  { id: 'p41', day: 'd3', start: '12:20', end: '12:40', stage: 'principal', track: 'Inspiración', type: 'charla', title: 'Las calles, pura actitud y energía', sp: [S('Mauricio Rivera', 'Creador de contenido @aaaa.mau')], desc: 'Inspira a vivir con más valentía y energía.' },
  { id: 'p42', day: 'd3', start: '12:40', end: '13:00', stage: 'principal', track: 'Emprendimiento', type: 'charla', title: 'Una de las historias más grandes del emprendimiento latinoamericano', sp: [S('Daniel Undurraga', 'Cofundador de Cornershop')], desc: 'Detrás de una de las historias más grandes del emprendimiento latinoamericano.' },
  { id: 'p43', day: 'd3', start: '13:00', end: '13:30', stage: 'principal', track: 'Emprendimiento', type: 'panel', title: 'Rockstars: fundadores que cambiaron las reglas del juego', sp: [S('Dominique Rosenberg', 'Executive VP de DBS'), S('Maurizio Oneto', 'Cofundador de Global66'), S('Daniel Undurraga', 'Cofundador de Cornershop'), S('Ignacio Opazo', 'Cofundador de Zapping')], mod: 'Rocio Fonseca, Directora de MadeInnConce', desc: 'Fundadores que cambiaron las reglas del juego.' },
  { id: 'p44', day: 'd3', start: '13:30', end: '14:10', stage: 'principal', track: 'Innovación', type: 'panel', sponsor: 'ProChile', title: 'Panel Internacionalización', sp: [S('Damaris Mendoza', 'Partner 500 Global (MX)'), S('Herwin Stegeman', 'Managing Director, Heroes Corp (NL)'), S('Alexander Balderstone', 'Co-founder & CEO, Kaiku (UK)'), S('Cristobal Herera', 'Director ProChile Biobío'), S('Matías Mandiola', 'Director ProChile Ñuble')], desc: 'Presentado por ProChile: cómo proyectarse al mundo.' },
  { id: 'p45', day: 'd3', start: '17:00', end: '18:30', stage: 'principal', track: 'Inspiración', type: 'show', title: 'Ceremonia de Clausura', sp: [S('Casi Lola & Filarmónica de Llanquihue', 'El comienzo de un gran final'), S('Denisse Goldfarb', 'Autora y referente en futuro del trabajo'), S('Leo Méndez', 'Músico')], mod: 'Conduce: Elena Dressel', desc: 'Una historia de lucha, identidad y resiliencia para cerrar la 5ª edición.' },

  // ===== SALA GARAGE =====
  { id: 'g1', day: 'd1', start: '11:30', end: '13:30', stage: 'garage', track: 'Innovación', type: 'networking', sponsor: 'SERNATUR', title: 'Rueda de Negocios de Turismo SERNATUR Biobío', sp: [], desc: 'Espacio para activar negocios de turismo en la región.' },
  { id: 'g2', day: 'd1', start: '13:50', end: '14:10', stage: 'garage', track: 'Innovación', type: 'charla', title: 'Innovación universitaria: conoce Jump y Brain Chile', sp: [S('Claudia Zañartu', 'Jefa de Incubación, Centro de Innovación UC')], desc: 'Cómo la universidad impulsa la innovación y el emprendimiento.' },
  { id: 'g3', day: 'd1', start: '14:10', end: '14:40', stage: 'garage', track: 'Emprendimiento', type: 'panel', title: 'Ecosistema público de apoyo al emprendimiento', sp: [S('Francisco Acuña Añazco', 'Director DISODE, Municipalidad de Valdivia'), S('Carlos Hidalgo', 'Oficina de Emprendimiento, Municipalidad de Concepción'), S('Maritza San Martín', 'Directora SERNATUR Biobío')], mod: 'Pablo Acevedo, Director MadeInnConce', desc: 'El rol del sector público en el emprendimiento.' },
  { id: 'g4', day: 'd1', start: '14:40', end: '15:00', stage: 'garage', track: 'Innovación', type: 'charla', title: 'Marca Chile y Marca Biobío: identidad para proyectarse al mundo', sp: [S('Victor Palma', 'Director de Alianzas Estratégicas, Marca Chile')], desc: 'Innovación e identidad para proyectarse al mundo.' },
  { id: 'g5', day: 'd1', start: '15:00', end: '15:20', stage: 'garage', track: 'Tecnología', type: 'charla', sponsor: 'Entel', title: 'Cómo pasar el filtro corporativo (sin morir en el intento)', sp: [S('Cristóbal Muñoz', 'Gerente de Innovación, Entel')], desc: 'Claves para venderle a una gran empresa.' },
  { id: 'g6', day: 'd1', start: '15:20', end: '16:00', stage: 'garage', track: 'Emprendimiento', type: 'charla', sponsor: 'Camanchaca', title: 'Kick off Biobío Emprende con Camanchaca', sp: [], desc: 'Lanzamiento del programa de acompañamiento a emprendedores.' },
  { id: 'g7', day: 'd1', start: '16:00', end: '16:30', stage: 'garage', track: 'Innovación', type: 'panel', title: '¿Cómo enfrentar la crisis climática desde la innovación tecnológica?', sp: [S('Rosario Barriga', 'Principal Araucaria Venture'), S('Patrick Aravena', 'CEO Binariotech')], mod: 'Florencia Mesa, Climatech Chile', desc: 'Innovación tecnológica frente a la crisis climática.' },
  { id: 'g8', day: 'd1', start: '16:30', end: '18:00', stage: 'garage', track: 'Innovación', type: 'networking', title: 'Ecosistema Chile: motor para el desarrollo de los territorios', sp: [], desc: 'Seminario y conversatorio del ecosistema de innovación.' },
  { id: 'g9', day: 'd2', start: '10:00', end: '10:30', stage: 'garage', track: 'Innovación', type: 'panel', title: 'Del Biobío al mundo: marcas regionales y comercio internacional', sp: [], desc: 'Marcas regionales, comercio internacional de impacto y desarrollo territorial.' },
  { id: 'g10', day: 'd2', start: '10:30', end: '11:00', stage: 'garage', track: 'Emprendimiento', type: 'charla', sponsor: 'BancoEstado', title: 'Iniciativas START de BancoEstado: más allá del financiamiento', sp: [S('Fernando Amaya', 'Subgerente Nuevos Negocios, BancoEstado')], desc: 'Apoyo a startups más allá del financiamiento.' },
  { id: 'g11', day: 'd2', start: '11:00', end: '13:00', stage: 'garage', track: 'Innovación', type: 'networking', sponsor: 'SERNATUR', title: 'Rueda de Negocios de Turismo SERNATUR Biobío', sp: [], desc: 'Conecta con actores del turismo regional.' },
  { id: 'g12', day: 'd2', start: '13:00', end: '14:30', stage: 'garage', track: 'Emprendimiento', type: 'pitch', title: 'Pitch Competition Qualifiers', sp: [], desc: 'Clasificatorias de la competencia de pitch.' },
  { id: 'g13', day: 'd2', start: '14:30', end: '15:00', stage: 'garage', track: 'Innovación', type: 'charla', sponsor: 'CORFO', title: 'Charla Corfo: Ley I+D para certificar tu proyecto', sp: [S('Paulina Vergara', 'Incentivo Tributario, Gerencia de Innovación, CORFO')], desc: 'Cómo usar la Ley I+D para tu proyecto.' },
  { id: 'g14', day: 'd2', start: '15:00', end: '16:30', stage: 'garage', track: 'Innovación', type: 'taller', title: 'Ecosistema Chile: desafíos comunes y aprendizajes', sp: [], desc: 'Taller de grupos motores de ecosistemas regionales.' },
  { id: 'g15', day: 'd2', start: '16:30', end: '18:00', stage: 'garage', track: 'Emprendimiento', type: 'panel', title: 'Empresarios por el Biobío: encuentro de innovación y futuro', sp: [S('Josefina Montenegro', 'Directora de Empresas'), S('Nicolas Fuenzalida', 'Co-founder Poliglota e Itinerantes'), S('Álvaro Ananías', 'Cofundador de Genesys')], desc: 'Un espacio que reúne a empresarios del Biobío.' },
  { id: 'g16', day: 'd3', start: '09:00', end: '10:30', stage: 'garage', track: 'Emprendimiento', type: 'pitch', title: 'Pitch Competition Qualifiers', sp: [], desc: 'Continúan las clasificatorias de pitch.' },
  { id: 'g17', day: 'd3', start: '10:30', end: '12:20', stage: 'garage', track: 'Inspiración', type: 'networking', title: 'Origen Escolar', sp: [], desc: 'Estudiantes de enseñanza media y universitaria con empresarios, sin filtros.' },
  { id: 'g18', day: 'd3', start: '12:30', end: '12:50', stage: 'garage', track: 'Inspiración', type: 'charla', title: 'Charla con Katherine Echaiz', sp: [S('Katherine Echaiz', 'Revista Velvet y El Dínamo')], desc: 'Una conversación inspiradora.' },
  { id: 'g19', day: 'd3', start: '12:50', end: '13:30', stage: 'garage', track: 'Innovación', type: 'panel', title: 'Panel Turismo: territorios que inspiran', sp: [S('Felipe Horta', ''), S('Manuel Acuña', '')], mod: 'Maritza San Martín', desc: 'Territorios que inspiran a través del turismo.' },
  { id: 'g20', day: 'd3', start: '13:30', end: '14:30', stage: 'garage', track: 'Innovación', type: 'networking', sponsor: 'SERNATUR', title: 'Rueda de Negocios de Turismo SERNATUR Biobío', sp: [], desc: 'Última rueda de negocios de turismo.' },
  { id: 'g21', day: 'd3', start: '15:00', end: '17:00', stage: 'garage', track: 'Innovación', type: 'taller', title: 'Ecosistema Chile: potenciando el grupo motor', sp: [], desc: 'Taller de trabajo y generación del grupo motor Ecosistema Chile.' },

  // ===== SALA DE CÁMARA =====
  { id: 'c1', day: 'd1', start: '11:00', end: '13:00', stage: 'camara', track: 'Inspiración', type: 'keynote', title: 'Diálogo: legado y futuro', sp: [S('Ximena Abogabir', 'Referente en envejecimiento activo'), S('Pamela Salazar', 'Founder y CEO de UMOV'), S('Thomas Contreras', 'Founder y CEO de Maca Inn'), S('Francisca Zuchel', 'Founder Gero Bienestar'), S('Sofia Rosenkranz', 'Founder AMTU')], desc: 'Una de las voces más influyentes en la conexión entre generaciones.' },
  { id: 'c2', day: 'd1', start: '13:15', end: '14:15', stage: 'camara', track: 'Innovación', type: 'networking', title: 'Cidere Biobío presenta Ecosistema Biobío', sp: [], desc: 'Un espacio para activar negocios y conectarte con quienes aceleran tu camino.' },
  { id: 'c3', day: 'd1', start: '14:15', end: '14:45', stage: 'camara', track: 'Emprendimiento', type: 'charla', title: 'Estudio Biobío 2026: emprendimientos que mueven industria', sp: [S('Andrés Alvarado', 'Research Director Endeavor')], desc: 'Brechas, oportunidades y caminos de crecimiento en el Biobío.' },
  { id: 'c4', day: 'd1', start: '14:45', end: '15:05', stage: 'camara', track: 'Tecnología', type: 'panel', title: 'Smart Cities: cómo se construye la ciudad del futuro', sp: [S('Fernando Pérez', 'Director Principal City Lab Biobío'), S('Gregorio Basterrechea', 'City Manager Biobío Whoosh')], mod: 'Macarena Vera, Desarrolla Biobío', desc: 'Cómo se construye la ciudad del futuro.' },
  { id: 'c5', day: 'd1', start: '15:05', end: '15:45', stage: 'camara', track: 'Tecnología', type: 'charla', sponsor: 'Banco de Chile', title: 'Digitalización en pymes con foco en la experiencia del cliente', sp: [S('Winnie Darlic', 'Gerente Segmento Pyme, Banco de Chile')], desc: 'La mirada de Banco de Chile sobre la digitalización de las pymes.' },
  { id: 'c6', day: 'd1', start: '15:45', end: '16:05', stage: 'camara', track: 'Innovación', type: 'panel', title: 'Del campo a la mesa: innovación en la cadena alimentaria', sp: [S('Mauricio Navarrete', 'CEO de Adclean'), S('Camila Beltrán', 'CEO de Permacultura Tech'), S('José Miguel Stegmeier', 'Presidente Socabio')], mod: 'Carolina Vivallo, Desarrolla Biobío', desc: 'Innovación en toda la cadena alimentaria.' },
  { id: 'c7', day: 'd1', start: '16:05', end: '16:35', stage: 'camara', track: 'Tecnología', type: 'charla', title: 'De startup a solución escalable', sp: [S('Rodrigo Oyarzún', 'Head of Product Buk Finanzas')], desc: 'Cómo construir un producto competitivo.' },
  { id: 'c8', day: 'd1', start: '16:35', end: '17:05', stage: 'camara', track: 'Tecnología', type: 'panel', title: 'Escalar sin perder el rumbo', sp: [S('Álvaro Fernández', 'Gerente Mercado Pyme Entel Digital'), S('Benjamín Germany', 'Gerente General C4I UdeC'), S('Rodrigo Oyarzún', 'Head of Product Buk')], desc: 'Crecer de forma sostenible y mantener el control del negocio.' },
  { id: 'c9', day: 'd1', start: '17:05', end: '18:05', stage: 'camara', track: 'Emprendimiento', type: 'pitch', title: 'Pitch Day Startup Biobío', sp: [], desc: 'Las startups del Biobío presentan ante inversionistas.' },
  { id: 'c10', day: 'd2', start: '09:00', end: '12:00', stage: 'camara', track: 'Innovación', type: 'taller', title: 'Corporate Venture en acción', sp: [S('Winnie Darlic', 'Banco de Chile'), S('Juan Pablo Cruz', 'Nuevos Negocios, Banco Sura'), S('Patricia Aravena', 'Nuevos Negocios, Concha y Toro'), S('Rodrigo O’Ryan', 'Presidente Corma')], mod: 'Drei Ventures', desc: 'Conectando startups con desafíos reales de las empresas.' },
  { id: 'c11', day: 'd2', start: '12:00', end: '13:00', stage: 'camara', track: 'Tecnología', type: 'charla', title: 'Tendencias HR 2026: las 6 claves que la IA está redefiniendo', sp: [], desc: 'Las 6 claves que la IA redefine en gestión de personas.' },
  { id: 'c12', day: 'd2', start: '13:15', end: '13:45', stage: 'camara', track: 'Innovación', type: 'panel', title: 'Economía Azul: innovación desde el océano', sp: [S('Camila Fernández', 'Directora COPAS Coastal'), S('Norihuska Camacho', 'Programas 2811'), S('Andrea Zincker', 'ONG Canales'), S('Francisco Mackay', 'Director CiTA'), S('Tatiana Castillo', 'Puerto Coronel')], mod: 'Militza Saavedra, Blue Economy Lab', desc: 'Innovación desde el océano para el futuro competitivo de Chile.' },
  { id: 'c13', day: 'd2', start: '14:00', end: '15:00', stage: 'camara', track: 'Innovación', type: 'panel', title: 'Comunidad Biobío: activar recursos y amplificar el impacto', sp: [S('Catalina Taccone', 'Coordinadora Grupo Motor'), S('Jorge Bizama', 'Presidente Comunidad Biobío')], desc: 'Una nueva forma de activar recursos y amplificar el impacto en la región.' },
  { id: 'c14', day: 'd2', start: '15:00', end: '16:00', stage: 'camara', track: 'Emprendimiento', type: 'charla', sponsor: 'Entel', title: 'Método 365 presentado por Entel', sp: [S('Pipe Sánchez', 'Emprendedor y creador de contenido')], desc: 'Un método para emprender, presentado por Entel.' },
  { id: 'c15', day: 'd2', start: '16:10', end: '16:35', stage: 'camara', track: 'Emprendimiento', type: 'charla', sponsor: 'BancoEstado', title: 'Financiamiento para startups', sp: [S('Ana Bocic', 'Subgerente Empresas Startups, BancoEstado')], desc: 'Opciones de financiamiento para startups.' },
  { id: 'c16', day: 'd2', start: '16:35', end: '17:00', stage: 'camara', track: 'Innovación', type: 'panel', title: 'Crecimiento con impacto: empresas que impulsan un futuro sostenible', sp: [S('Camila Mohor', 'Partner & CEO de Insspiral'), S('Cristóbal Araneda', 'Líder de Propósito, Abastible'), S('Valy Cummings', 'Startuplab.01')], mod: 'Julián Ugarte, Presidente Socialab', desc: 'Empresas que impulsan un futuro sostenible.' },
  { id: 'c17', day: 'd3', start: '09:30', end: '10:30', stage: 'camara', track: 'Inspiración', type: 'panel', title: 'Más talento, más mujeres construyendo futuro', sp: [S('Lorena Llorente', 'Directora Instituto Teletón Concepción'), S('Lorena Toledo Barrios', 'Biobío Desafío Levantemos Chile'), S('Patricia Cabalá Leiva', 'Directora Ejecutiva Cabalá & Partners'), S('Lilian San Martín Medina', 'Operaciones Académicas UNAB')], mod: 'Carina Sanhueza, Más Digital Medios', desc: 'Más talento y más mujeres construyendo el futuro.' },
  { id: 'c18', day: 'd3', start: '10:30', end: '12:00', stage: 'camara', track: 'Emprendimiento', type: 'pitch', title: 'Reverse Pitch', sp: [S('Francisca Muñoz', 'Emprendimiento IncubaUdeC'), S('Héctor Acuña', 'Gestor de Innovación UCSC'), S('Luis Durán', 'Incuba Ñuble UBB'), S('Damaris Mendoza', 'Partner 500 Global (MX)'), S('Alexander Balderstone', 'CEO, Kaiku (UK)')], mod: 'Tesi Del Sante y Pablo Acevedo', desc: 'Las instituciones presentan sus desafíos a los emprendedores.' },
  { id: 'c19', day: 'd3', start: '12:00', end: '12:30', stage: 'camara', track: 'Inspiración', type: 'charla', title: 'Los negocios y su coherencia emocional', sp: [S('José Miguel Flores', 'Director MadeInnConce')], desc: 'La coherencia emocional detrás de los negocios.' },
  { id: 'c20', day: 'd3', start: '12:45', end: '14:00', stage: 'camara', track: 'Innovación', type: 'panel', title: 'MadeInn EDU: educación, innovación y hacer', sp: [S('Alvaro Ossa', 'Transferencia y Desarrollo UC'), S('Carla Taramasco', 'Directora ITiSB UNAB'), S('Jorge Vergara', 'Director Neurolab UDLA'), S('Beatriz Millan', 'Directora Incuba UdeC'), S('Pablo Zamora', 'Innovación PUCV')], mod: 'Benjamin Barros', desc: 'Donde la educación se encuentra con la innovación y el hacer.' },
  { id: 'c21', day: 'd3', start: '14:00', end: '15:00', stage: 'camara', track: 'Innovación', type: 'networking', title: 'Cidere Biobío presenta Ecosistema Biobío', sp: [], desc: 'Activar negocios y conectar con quienes aceleran tu camino.' },
  { id: 'c22', day: 'd3', start: '15:00', end: '15:45', stage: 'camara', track: 'Tecnología', type: 'panel', title: 'Fintech: el nuevo motor de financiamiento para las pymes', sp: [S('Franco Cisternas', 'CRO y Co-founder de Simpli'), S('Cristián Sauterel', 'CEO y Co-founder de Maxxa'), S('Manuel Astaburuaga', 'CEO y Co-founder de Levannta')], mod: 'Caro Molina', desc: 'El nuevo motor de financiamiento para las pymes.' },
  { id: 'c23', day: 'd3', start: '16:00', end: '17:00', stage: 'camara', track: 'Inspiración', type: 'taller', title: 'Voces: mujeres que lideran desde su historia', sp: [S('Sara Garrido', 'Dirigente pesquera, Coliumo'), S('Romanette Aguilera', 'Taller')], desc: 'Mujeres que lideran desde su historia.' },
];

// Personas presentes en el evento (para matchmaking contextual).
// provides = qué pueden satisfacer de BUSCA_OPTIONS.
export const MATCH_PROFILES = [
  { id: 'm1', name: 'Valentina Rojas', org: 'IncubaUDeC', role: 'Investigadora', offers: 'Metodologías de validación', seeks: 'Startups para mentoría', provides: ['Mentores'], present: true, pitch: 'Acompaño a equipos a validar problema y mercado antes de escalar. 8 años incubando proyectos en la UDeC.', linkedin: 'linkedin.com/in/valentinarojas' },
  { id: 'm2', name: 'Felipe Muñoz', org: 'Fondo Biobío Capital', role: 'Inversionista', offers: 'Capital semilla', seeks: 'Startups deeptech', provides: ['Inversión'], present: true, pitch: 'Invierto tickets de $30–80M en startups deeptech del sur. Busco fundadores técnicos con tracción temprana.', linkedin: 'linkedin.com/in/felipemunoz' },
  { id: 'm3', name: 'Catalina Soto', org: 'CMPC Ventures', role: 'Corporativo', offers: 'Pilots corporativos', seeks: 'Proveedores de innovación', provides: ['Clientes', 'Alianzas'], present: true, pitch: 'Conecto startups con desafíos reales de CMPC. Si tu solución aplica a la industria forestal, conversemos.', linkedin: 'linkedin.com/in/catalinasoto' },
  { id: 'm4', name: 'Diego Carrasco', org: 'TechnoSur', role: 'Emprendedor', offers: 'Software industrial', seeks: 'Inversión Serie A', provides: ['Proveedores'], present: false, pitch: 'Construyo software de automatización para plantas industriales. 12 clientes activos, creciendo 15% mensual.', linkedin: 'linkedin.com/in/diegocarrasco' },
  { id: 'm5', name: 'Andrea Pizarro', org: 'Universidad del Bío-Bío', role: 'Académica', offers: 'Investigación aplicada', seeks: 'Alianzas con empresas', provides: ['Alianzas', 'Mentores'], present: true, pitch: 'Dirijo un laboratorio de I+D aplicada. Busco empresas para transferir tecnología y co-crear soluciones.', linkedin: 'linkedin.com/in/andreapizarro' },
  { id: 'm6', name: 'Rodrigo Vega', org: 'StartUp Chile Alumni', role: 'Emprendedor', offers: 'Red de contactos', seeks: 'Co-fundador técnico', provides: ['Talento', 'Alianzas'], present: false, pitch: 'Ex StartUp Chile, dos exits menores. Busco un CTO para mi nuevo proyecto de logística regional.', linkedin: 'linkedin.com/in/rodrigovega' },
];

export const STANDS = [
  { id: 1, name: 'CORFO Biobío', category: 'Organismo público', accentClass: 'bg-pudu-green', short: 'Financiamiento para innovación y emprendimiento regional', visitors: 89, long: ['CORFO Biobío impulsa el desarrollo productivo de la región con instrumentos de financiamiento, capital semilla y programas de innovación.', 'En MadeInnConce presentamos las convocatorias 2026 para emprendedores, startups y empresas que buscan escalar con impacto regional.', 'Acércate al stand para resolver dudas sobre postulaciones y rutas de apoyo a la innovación.'] },
  { id: 2, name: 'Universidad de Concepción', category: 'Universidad', accentClass: 'bg-pudu-night', short: 'Investigación, incubación y transferencia tecnológica', visitors: 76, long: ['La Universidad de Concepción conecta investigación de frontera con el tejido productivo del Biobío.', 'Mostramos proyectos de transferencia tecnológica, patentes y spin-offs nacidas en nuestros laboratorios.', 'Conversa con nuestro equipo sobre colaboración universidad-empresa y acceso a capacidades de I+D.'] },
  { id: 3, name: 'CMPC Ventures', category: 'Corporativo', accentClass: 'bg-pudu-earth', short: 'Innovación abierta para startups de la industria forestal', visitors: 102, long: ['CMPC Ventures busca startups que resuelvan desafíos reales de la industria forestal y de la bioeconomía.', 'Ofrecemos pilotos corporativos, acceso a operaciones y la posibilidad de escalar con un socio industrial.', 'Si tu solución aplica a sostenibilidad, manufactura o cadena de suministro, este es tu stand.'] },
  { id: 4, name: 'StartUp Biobío', category: 'Organismo público', accentClass: 'bg-pudu-moss', short: 'Aceleradora regional de startups de alto impacto', visitors: 65, long: ['StartUp Biobío acelera emprendimientos de alto impacto con foco en el desarrollo del territorio.', 'Acompañamos a los equipos con mentorías, red de inversionistas y acceso a mercado.', 'Postula a nuestros programas y forma parte de la nueva generación de startups del sur.'] },
  { id: 5, name: 'BíoBío Tecnológico', category: 'Startup', accentClass: 'bg-pudu-green', short: 'Automatización para la industria forestal y pesquera', visitors: 44, long: ['BíoBío Tecnológico desarrolla soluciones de automatización y datos para la industria forestal y pesquera.', 'Nuestra plataforma reduce mermas y mejora la trazabilidad de la operación en planta.', 'Buscamos pilotos con grandes operadores y alianzas para escalar a otras regiones.'] },
  { id: 6, name: 'EcosistemaLA', category: 'Comunidad', accentClass: 'bg-pudu-night', short: 'Red mensual de innovación y emprendimiento regional', visitors: 38, long: ['EcosistemaLA es la red que cada mes reúne al ecosistema de innovación del sur de Chile.', 'Organizamos encuentros, charlas y espacios de colaboración entre emprendedores, academia y sector público.', 'Súmate a la comunidad y mantente conectado más allá del evento.'] },
  { id: 7, name: 'IncubaUDeC', category: 'Universidad', accentClass: 'bg-pudu-moss', short: 'Incubadora de negocios de la Universidad de Concepción', visitors: 57, long: ['IncubaUDeC apoya la creación y el crecimiento de empresas de base científico-tecnológica.', 'Ofrecemos incubación, validación de modelo y vinculación con inversión y mercado.', 'Conversa con nuestro equipo si estás dando los primeros pasos con tu emprendimiento.'] },
  { id: 8, name: 'Fondo Biobío Capital', category: 'Corporativo', accentClass: 'bg-pudu-earth', short: 'Inversión en startups con impacto regional', visitors: 71, long: ['Fondo Biobío Capital invierte en startups con potencial de impacto y arraigo regional.', 'Buscamos equipos con tracción, foco y disposición a construir desde el territorio.', 'Agenda una conversación si estás levantando tu ronda semilla o Serie A.'] },
];

export const ORG = {
  metrics: [
    { label: 'Asistentes registrados', value: '847', delta: '↑ +12 hoy' },
    { label: 'Dispuestos a conectar', value: '612', delta: '72% del total' },
    { label: 'Conexiones generadas', value: '234', delta: '↑ +37 hoy' },
    { label: 'Brochures descargados', value: '214', delta: '8 stands' },
  ],
  standActivity: [
    { name: 'CORFO Biobío', visits: 89, downloads: 34, leads: 12 },
    { name: 'UdeC', visits: 76, downloads: 28, leads: 8 },
    { name: 'CMPC Ventures', visits: 102, downloads: 45, leads: 19 },
    { name: 'StartUp Biobío', visits: 65, downloads: 22, leads: 7 },
    { name: 'BíoBío Tecnológico', visits: 44, downloads: 18, leads: 5 },
    { name: 'EcosistemaLA', visits: 38, downloads: 12, leads: 4 },
    { name: 'IncubaUDeC', visits: 57, downloads: 24, leads: 9 },
    { name: 'Fondo Biobío Capital', visits: 71, downloads: 31, leads: 14 },
  ],
  willing: { count: 612, total: 847, pct: 72 },
  audienceRoles: [
    { label: 'Emprendedor', value: 372 },
    { label: 'Corporativo', value: 158 },
    { label: 'Investigador', value: 96 },
    { label: 'Académico', value: 83 },
    { label: 'Inversionista', value: 71 },
    { label: 'Otro', value: 67 },
  ],
  audienceOrigin: [
    { label: 'Concepción', value: 410 },
    { label: 'Gran Concepción', value: 188 },
    { label: 'Resto Biobío', value: 132 },
    { label: 'Ñuble', value: 64 },
    { label: 'Resto del país', value: 41 },
    { label: 'Internacional', value: 12 },
  ],
  audienceInterests: [
    { label: 'Inversión', value: 268 },
    { label: 'Clientes', value: 241 },
    { label: 'Alianzas', value: 198 },
    { label: 'Mentores', value: 156 },
    { label: 'Talento', value: 142 },
    { label: 'Proveedores', value: 98 },
    { label: 'Co-fundador', value: 73 },
  ],
  audienceSectors: [
    { label: 'Tecnología / IA', value: 196 },
    { label: 'Impacto / Sostenibilidad', value: 142 },
    { label: 'Agro / Alimentos', value: 121 },
    { label: 'Forestal / Industria', value: 93 },
    { label: 'Educación', value: 88 },
    { label: 'Salud', value: 76 },
    { label: 'Turismo', value: 71 },
    { label: 'Otro', value: 60 },
  ],
  scenarioFlow: [
    { name: 'Escenario Principal', pct: 68, barClass: 'bg-pudu-green' },
    { name: 'Sala Garage', pct: 54, barClass: 'bg-pudu-earth' },
    { name: 'Sala de Cámara', pct: 31, barClass: 'bg-pudu-night' },
  ],
  recentConnections: [
    { a: 'Valentina Rojas', aOrg: 'IncubaUDeC', b: 'Diego Carrasco', bOrg: 'TechnoSur' },
    { a: 'Felipe Muñoz', aOrg: 'Fondo Biobío Capital', b: 'Diego Carrasco', bOrg: 'TechnoSur' },
    { a: 'Catalina Soto', aOrg: 'CMPC Ventures', b: 'Andrea Pizarro', bOrg: 'U. del Bío-Bío' },
    { a: 'Rodrigo Vega', aOrg: 'StartUp Chile Alumni', b: 'Valentina Rojas', bOrg: 'IncubaUDeC' },
    { a: 'Andrea Pizarro', aOrg: 'U. del Bío-Bío', b: 'CORFO Biobío', bOrg: 'CORFO' },
  ],
  alerts: [
    'Speed networking en Sala Garage comienza en 15 minutos.',
    'Stand CMPC Ventures tiene actividad inusualmente alta.',
  ],
};

// Personas que descargaron brochures (para exportar y enviar al encargado del stand).
export const ATTENDEE_POOL = [
  { nombre: 'Camila Fuentes', rol: 'Emprendedora', organizacion: 'AgroSur', email: 'camila.fuentes@agrosur.cl' },
  { nombre: 'Matías Pérez', rol: 'Estudiante', organizacion: 'U. de Concepción', email: 'matias.perez@udec.cl' },
  { nombre: 'Fernanda Soto', rol: 'Inversionista', organizacion: 'Aurora Capital', email: 'f.soto@auroracap.cl' },
  { nombre: 'Joaquín Ramírez', rol: 'Corporativo', organizacion: 'CMPC', email: 'jramirez@cmpc.cl' },
  { nombre: 'Antonia Vidal', rol: 'Investigadora', organizacion: 'UCSC', email: 'avidal@ucsc.cl' },
  { nombre: 'Sebastián Muñoz', rol: 'Emprendedor', organizacion: 'NodoTech', email: 'sebastian@nodotech.cl' },
  { nombre: 'Valentina Reyes', rol: 'Académica', organizacion: 'U. del Bío-Bío', email: 'vreyes@ubiobio.cl' },
  { nombre: 'Diego Sandoval', rol: 'Emprendedor', organizacion: 'PescaSmart', email: 'diego@pescasmart.cl' },
  { nombre: 'Catalina Herrera', rol: 'Corporativo', organizacion: 'Abastible', email: 'cherrera@abastible.cl' },
  { nombre: 'Tomás Carrasco', rol: 'Estudiante', organizacion: 'DuocUC', email: 'tomas.carrasco@duocuc.cl' },
  { nombre: 'Javiera Núñez', rol: 'Emprendedora', organizacion: 'EcoFardo', email: 'javiera@ecofardo.cl' },
  { nombre: 'Felipe Lagos', rol: 'Inversionista', organizacion: 'Biobío Capital', email: 'flagos@biobiocap.cl' },
  { nombre: 'Constanza Rivas', rol: 'Investigadora', organizacion: 'IncubaUDeC', email: 'crivas@incubaudec.cl' },
  { nombre: 'Ignacio Torres', rol: 'Emprendedor', organizacion: 'LogiSur', email: 'ignacio@logisur.cl' },
  { nombre: 'Daniela Espinoza', rol: 'Corporativo', organizacion: 'Esval', email: 'despinoza@esval.cl' },
  { nombre: 'Cristóbal Morales', rol: 'Académico', organizacion: 'UDLA', email: 'cmorales@udla.cl' },
  { nombre: 'Paula Contreras', rol: 'Emprendedora', organizacion: 'Algamar', email: 'paula@algamar.cl' },
  { nombre: 'Andrés Figueroa', rol: 'Estudiante', organizacion: 'U. de los Andes', email: 'afigueroa@uandes.cl' },
];

export function standLeads(stand) {
  const n = Math.min(stand.leads, ATTENDEE_POOL.length);
  const off = (stand.id * 3) % ATTENDEE_POOL.length;
  const out = [];
  for (let i = 0; i < n; i++) out.push(ATTENDEE_POOL[(off + i) % ATTENDEE_POOL.length]);
  return out;
}
