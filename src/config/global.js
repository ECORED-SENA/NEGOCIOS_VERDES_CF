export default {
  global: {
    componenteFormativo: 'Logística',
    descripcionCurso:
      'Se presenta la conceptualización de la cadena de suministro, logística, red de distribución y los diferentes aspectos para tener en cuenta en el diseño, planeación y operación dentro de una empresa, así como la diferencia que existe entre la cadena de suministro y la logística con el fin de apropiar los conocimientos en la administración de una cadena de suministro y la logística en los negocios verdes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Procesos de la cadena de suministro o <i>Supply chain</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Eslabones de una cadena de suministro',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fases de la cadena de suministro',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de cadena de suministro',
            hash: 't1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de la cadena de suministro',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procesos de logística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diferencias entre cadena de suministro y logística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Procesos de la cadena de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Procesos de la cadena de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Canal directo',
            hash: 't6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Canal indirecto',
            hash: 't6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diseño de productos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Procesos de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Nivel de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Tiempo de entrega en logística o <i>Lead time</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Cadena de valor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Sistemas <i>Push y Pull</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Redes de distribución',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividades didácticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Beetrack. (s.f.). 15 conceptos básicos de logística y cadena de suministro. ',
      link:
        'https://www.beetrack.com/es/blog/conceptos-basicos-de-logistica-cadena-de-suministr',
    },
    {
      referencia: 'Biblioteca digital. (2013). Cadena de suministros. ',
      link: 'http://tesis.uson.mx/digital/tesis/docs/22513/Capitulo2.pdf',
    },
    {
      referencia:
        'Chopra, S. y Meindl, P. (2008). Administración de la Cadena de Suministro. Estrategia, planeación y operación. Pearson. ',
      link:
        'http://up-rid2.up.ac.pa:8080/xmlui/bitstream/handle/123456789/1340/Administraci%C3%B3n%20de%20la%20cadena%20de%20suministro.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Fantino, J. (2021). Diseño de un producto: ¿cuál es el paso a paso ideal para diseñar productos que enamoren a tus clientes? Crehana. ',
      link:
        'https://www.crehana.com/co/blog/diseno-productos/etapas-del-diseno-de-un-producto/',
    },
    {
      referencia:
        'Evaluando Software.com. (2021). Tipos de cadenas de suministros. ',
      link: 'https://www.evaluandosoftware.com/tipos-de-cadenas-de-suministro/',
    },
    {
      referencia:
        'González, M. y Gómez, C. y Domínguez J. (s.f.). Los servicios: concepto, clasificación y problemas de medición. Ekonomiaz No. 13 y 14. ',
    },
    {
      referencia:
        'IEBS SCHOOL. (2021). La Cadena de Gestión de Suministro (SCM): qué es y cuáles son las ventajas que ofrece. ',
      link:
        'https://www.iebschool.com/blog/cadena-gestion-suministro-negocios-internacionales/',
    },
    {
      referencia:
        'Iquique TV Noticias. (2019). La Cadena de Suministros y sus eslabones. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=LeoQpz6UM7o',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria. (s.f.). Distribución: canales, logística y punto de venta. ',
      link:
        'https://inta.gob.ar/sites/default/files/8-distribucion-canales-logistica.pdf',
    },
    {
      referencia:
        'Jiménez, J. y Hernández, A. (2002). Marco conceptual de la cadena de suministro: un nuevo enfoque logístico. ',
      link:
        'http://www.elmayorportaldegerencia.com/Documentos/Cadena%20Suministros/[PD]%20Documentos%20-%20Un%20nuevo%20enfoque%20logistico.pdf',
    },
    {
      referencia: 'López, J. (2019). Tipos de logística. Economipedia. ',
      link: 'https://economipedia.com/definiciones/tipos-de-logistica.html',
    },
    {
      referencia:
        'Mecalux Esmena. (2021). Sistema <i>Push</i> y <i>Pull</i> aplicado a la logística de producción. ',
      link: 'https://www.mecalux.es/blog/push-pull-sistema',
    },
    {
      referencia:
        'NU. CEPAL. División de Comercio Internacional e Integración. (2001). Los desafíos de la clasificación de los servicios y su importancia para las negociaciones comerciales. ',
      link:
        'https://www.cepal.org/es/publicaciones/4359-desafios-la-clasificacion-servicios-su-importancia-negociaciones-comerciales',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de valor',
      significado:
        'La cadena de valor es una herramienta estratégica que contribuye a establecer la ventaja competitiva de cualquier organización frente a otras, estudiando las actividades más relevantes. Con esta herramienta se pueden conocer las fortalezas de los procesos de producción de cada empresa, es decir, se pueden identificar cuáles son las actividades que generan valor, cómo funcionan los costos, las fuentes y la capacidad de diferenciarse de las otras.',
    },
    {
      termino: 'Distribución',
      significado:
        'Es una etapa de la cadena de suministro que se encarga de una serie de actividades que van desde movimiento del producto fabricado hasta cuando el producto llega a sus consumidores, es decir, el proceso de hacer llegar el producto terminado a los clientes.',
    },
    {
      termino: 'Just in timen',
      terminoHtml: '<em>Just in time</em>',
      significado:
        ' JIT por sus siglas en inglés que significa método o sistema “Justo a Tiempo”. Es una metodología en la que se cuenta únicamente con la cantidad necesaria de producto, en el momento y lugar justo, eliminar cualquier desperdicio o elemento que no aporte valor.',
    },
    {
      termino: 'Heterogeneidad',
      significado:
        'También se le conoce como variabilidad, es una característica que significa que cada servicio ofrecido a un cliente puede variar dependiendo de factores humanos, tales como la salud física, su estado de ánimo, el grado de simpatía que le despierte ese cliente, entre otros y no se puede predecir antes de consumirlo. Se requiere de un proceso de estandarización del servicio.',
    },
    {
      termino: 'Inseparabilidad',
      significado:
        'Hace referencia a que cada servicio se produce, se vende y se consume en un mismo periodo de tiempo, es decir, la producción del servicio y el consumo suceden a la vez. Por lo tanto, esta característica está relacionada con la correlación que ocurre entre el proveedor y el cliente.',
    },
    {
      termino: 'Intangibilidad',
      significado:
        'Un servicio no está disponible al consumidor para que sea mirado, escuchado, degustado, tocado o pesado u olido, antes de tomar la decisión de compra. En otras palabras, los servicios no son palpables, son un hecho, ejecución o un esfuerzo. El consumo de un servicio no puede ser apartado de la producción. La intangibilidad es la diferencia primordial entre los bienes y los servicios.',
    },
    {
      termino: 'Lead time',
      terminoHtml: '<em>Lead time</em>',
      significado:
        'Significa el tiempo de entrega en logística, es el periodo de tiempo que pasa desde que el cliente realiza la compra hasta que el proveedor entrega el producto al cliente, es decir, hasta que el cliente lo recibe. ',
    },
    {
      termino: 'Logística',
      significado:
        'Es el proceso de coordinación, gestión y transporte de los bienes comerciales desde el lugar de distribución hasta el consumidor final.',
    },
    {
      termino: 'Perecibilidad',
      significado:
        'Es cuando un servicio no puede ser acopiado, almacenado, puesto o exhibido en un anaquel de una tienda para ser llevado por el comprador. Un servicio tiene fecha de inicio y de fin, es decir, caduca.',
    },
    {
      termino: 'Stock',
      terminoHtml: '<em>Stock</em>',
      significado:
        'Conjunto de mercancías o productos que se tienen almacenados en espera de su venta o comercialización.',
    },
    {
      termino: 'Supply Chain',
      terminoHtml: '<em>Supply Chain</em>',
      significado:
        ' SC por sus siglas en inglés que significa cadena de suministro, es un proceso continuo que se desarrolla por eslabones, en donde cada eslabón es el insumo del siguiente, en el cual intervienen unos actores de la cadena, para transformar una materia prima en un producto terminado, con el fin de satisfacer las necesidades del consumidor final respecto a una compra realizada.',
    },
    {
      termino: 'Supply Chain Management',
      terminoHtml: '<em>Supply Chain Management</em>',
      significado:
        ' SCM por sus siglas en inglés que significa gestión o administración de la cadena de suministro, es un conjunto de actividades que integra tres procesos principales y los flujos de información, de productos y de pagos, en la planificación de las actividades de suministro, en la producción y en la distribución dentro de una empresa, con la participación de los proveedores, los clientes y los consumidores finales.',
    },
  ],
  complementario: [
    {
      texto:
        'Iquique TV Noticias. (2019). La Cadena de Suministros y sus eslabones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LeoQpz6UM7o',
    },
    {
      texto:
        'Jiménez, J. y Hernández, A. (2002). Marco conceptual de la cadena de suministro: un nuevo enfoque logístico. ',
      tipo: 'Publicación Técnica',
      link:
        'http://www.elmayorportaldegerencia.com/Documentos/Cadena%20Suministros/[PD]%20Documentos%20-%20Un%20nuevo%20enfoque%20logistico.pdf',
    },
    {
      texto:
        'IMEFI TV. (2017). Canales de Distribución - <i>Marketing</i> en un minuto [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=cGwlGtu14O0&list=RDCMUCwh64yBHC2TCaNMaSRHHTCA&index=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea del Pilar Torres Gallardo',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, Empresa y Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
