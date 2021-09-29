<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Procesos de la Cadena de Suministro o #[i Supply Chain]
    
    .row.bgImg01.mb-4
      .col-lg-5.mb-4.mb-md-0
        figure.Mn01
          img(src='@/assets/curso/tema1/img01.png', alt='Cadena de Suministro')
      .col-10.col-lg-6
        p.mb-0.mt-5 Una cadena de suministro o Supply Chain en inglés, de acuerdo con la definición de Chopra & Meindl (2008), es un proceso continuo que se desarrolla por eslabones o niveles, en el cual cada eslabón es el insumo del siguiente, donde intervienen los actores de la cadena, para transformar un producto desde el origen (materia prima) en un producto terminado, con el fin de satisfacer las necesidades del consumidor final respecto a una compra realizada, es decir, que el producto o servicio que el cliente compró, le sea entregado correctamente.
    
    .row.justify-content-center
      .col-lg-10
        p.mb-4 Al pensar en el término “Cadena de Suministro”, muchas veces se hace alusión a una serie de pasos en el que interviene una sola persona para cada proceso o para cada etapa. Sin embargo, en este contexto, la cadena de suministro funciona como una “red” que se encuentra encadenada entre sí, por cada uno de los procesos que la componen, ver figura 1.

        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Cadena de Suministro
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Cadena de Suministro')
    
    p.mb-4 En una cadena de suministro participan diferentes actores, y los principales son:

    .row.justify-content-center
      .col-md-6.col-lg-3.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 1
          .p-4
            p.mb-0 Proveedores.
          
      .col-md-6.col-lg-3.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 2
          .p-4
            p.mb-0 Fabricantes.

      .col-md-6.col-lg-4.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 3
          .p-4
            p.mb-0 Distribuidores: mayoristas y minoristas.
      
      .col-md-6.col-lg-3.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 4
          .p-4
            p.mb-0 Transportistas.
          
      .col-md-6.col-lg-3.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 5
          .p-4
            p.mb-0 Vendedores.

      .col-md-6.col-lg-4.mb-3
        .BG31.d-flex.h-100.align-items-center
          .Dv11.BG30.py-4.px-2.h-100.d-flex.align-items-center.justify-content-center
            h4.mb-0 6
          .p-4
            p.mb-0 Clientes o consumidores finales.
      
    Separador

    #t1_1.titulo-segundo
      h2 1.1 Eslabones de una cadena de suministro
    
    p.mb-4 Existen diferentes niveles en una cadena de suministro, y los eslabones más comunes son:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-5
          //- PasosB debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          PasosB.color-acento-botones

            .row.bgImg03.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-0 Suministro de materia prima por proveedores

            .row.bgImg04.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-0 Almacén de materia prima
            
            .row.bgImg05.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-0 Almacén de materia prima
            
            .row.bgImg06.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-0 Almacén de producto terminado
            
            .row.bgImg07.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-4 Centro de distribución y transporte
                p.mb-0 Puede ser propio o por un tercero. El producto se transporta hacia su destino final.
            
            .row.bgImg08.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-4 Ventas al cliente
                p.mb-0 Se relaciona con la comercialización del producto o servicio. Se pueden dar las importaciones y las exportaciones.
            
            .row.bgImg09.minH01.justify-content-end.align-items-center.br01(titulo="")
              .col-md-5.text-white.text-end.pe-5.textShadow
                h1.mb-4 Entrega al consumidor final
                p.mb-0 Se relaciona con la entrega del producto o servicio final en el punto de venta física o por medios electrónicos.
      
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.BG10
          .row.justify-content-center
            .col-6.col-lg-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img10.svg', alt='Recordemos')
            .col-lg-10
              .h4.mb-2 Recordemos que
              p.mb-0 Cada empresa puede establecer los eslabones de su propia cadena de suministro acorde con la organización, sus necesidades, los recursos disponibles y de la complejidad del modelo de negocio.
    
    Separador

    #t1_2.titulo-segundo
      h2 1.2 Fases de la cadena de suministro
    
    p.mb-4 Las tres (3) fases principales que integran la cadena de suministro son:


    .row.justify-content-center
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema1/img11.png', alt='Fase 1')
          .TFoverlay.text-white.p-3
            h5 Aprovisionamiento o suministro
            p.mb-0 Se relaciona con las actividades que son necesarias para adquirir y entregar las materias primas para la fabricación de los productos, esto incluye: la planeación de la demanda, inventarios y compras de materia prima a proveedores. En otras palabras, se define el cómo, dónde y cuándo se obtienen las materias primas para la producción.
      
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema1/img12.png', alt='Fase 2')
          .TFoverlay.text-white.p-3
            h5 Fabricación o Producción
            p.mb-0 Aquí se convierten las materias primas en productos terminados o para el caso de una empresa de servicios, se da el proceso propio de producción del servicio.
      
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema1/img13.png', alt='Fase 3')
          .TFoverlay.text-white.p-3
            h5 Distribución
            p.mb-0 Tiene que ver con que los productos terminados lleguen al consumidor final por medio de una red de distribución, almacenes, tiendas físicas de minoristas o plataformas en línea.
    
    separador
    
    #t1_3.titulo-segundo
      h2 1.3 Tipos de cadena de suministro
    
    p.mb-4 Existen diferentes tipos de cadena de suministro, las cuales se describen a continuación:

    TabsA.color-acento-contenido.mb-4
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Tradicional")
        h4 Tradicional
        p Esta cadena de suministro funciona para empresas que no requieran muchas cantidades de materia prima al fabricar sus productos, y que tienen un proceso de fabricación tradicional en el que no se necesita un flujo de información continua.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Directa")
        h4 Directa
        p Es la cadena de suministro que tiene una empresa, un proveedor y un cliente que se involucran y están relacionados entre sí en varias áreas de la organización, es decir, que manejan los productos, la parte financiera, los servicios y la información en todos los eslabones de la cadena.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Extendida")
        h4 Extendida
        p Es la cadena de suministro que tiene una empresa, un proveedor y un cliente que se involucran y están relacionados entre sí en varias áreas de la organización, es decir, que manejan los productos, la parte financiera, los servicios y la información en todos los eslabones de la cadena.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Compartida")
        h4 Compartida
        p Tiene que ver con la toma de decisiones compartidas ya que, en cada eslabón de la cadena las personas encargadas toman sus decisiones de manera individual, pero cuentan con una base de datos definida y accesible en la cual se puede compartir información y permitiendo tener acceso a las decisiones que se van tomando durante el proceso.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Compartida")
        h4 Sincronizada
        p Como su nombre lo indica, quiere decir que en esta cadena de suministro se realizan todas las fases de fabricación del producto de manera sincronizada. En otras palabras, se hace un seguimiento del flujo de entrada de materia prima hasta la salida del producto terminado entregado al almacén y listo para ser enviado o para la venta.
        p Debido a que todos los eslabones de la cadena de suministro deben estar muy bien sincronizados para el correcto funcionamiento de los procesos, se requiere de la implementación y #[strong uso de la tecnología que incorpore sistemas de información precisos] con el fin de permitir que ocurran los cambios durante el paso a paso de las actividades.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Compartida")
        h4 Compleja
        p Incluye a todas las empresas involucradas en todos los eslabones tanto de productos, servicios, finanzas e información desde el último proveedor hasta el último cliente.
      
    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/img14.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Cadena de suministro estándar del cafe
              p.text-small.mb-0 Ahora, se analiza el siguiente ejemplo de la cadena de suministro estándar del café.
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Cadena_Cafe.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


    

          


        
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
