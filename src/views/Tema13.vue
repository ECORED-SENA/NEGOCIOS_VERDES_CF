<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 13
      h1 Redes de distribución
    
    p.mb-4 Una red de distribución es un sistema de infraestructuras de almacenamiento y métodos de transporte que permiten que el producto terminado sea recibido en las manos por el consumidor. Esta red de distribución incluye todas las actividades y serie de pasos que realiza una empresa para llevar el producto que elabora hasta su cliente.

    p.mb-4 Los productos terminados pueden ser transportados a través de diferentes medios, entre los que se encuentran:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema13/img01.jpg', alt='')
        .BGEsp06.p-3
          h4.text-white.mb-0 Transporte por ferrocarril
      
      .col-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema13/img02.jpg', alt='')
        .BGEsp06.p-3
          h4.text-white.mb-0 Transporte aéreo
      
      .col-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema13/img03.jpg', alt='')
        .BGEsp06.p-3
          h4.text-white.mb-0 Transporte marítimo

      .col-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema13/img04.jpg', alt='')
        .BGEsp06.p-3
          h4.text-white.mb-0 Transporte fluvial
      
      .col-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/tema13/img05.jpg', alt='')
        .BGEsp06.p-3
          h4.text-white.mb-0 Transporte terrestre (por carretera)
    
    h3 Estructura de las redes de distribución

    p.mb-4 Se pueden encontrar tres (3) formas básicas de estructuras de distribución semejantes a una red:

    .row.mb-5
      .col-md-4
        .BG31.p-4.mb-4.br01.mtO01
          figure.mb-4.mtN01
            img.w-50.mx-auto(src='@/assets/curso/tema13/img06.svg', alt='')        
          h4.text-center.mb-0 Redes de distribución central        
        p La misma empresa genera sus ventas sin utilizar puntos de distribución externamente o sin uso de terceros. Las actividades están concentradas en almacenes centrales, lo que significa que se acopian de manera organizada en un solo lugar.
      
      .col-md-4
        .BG30.p-4.mb-4.br01.mtO01
          figure.mb-4.mtN01
            img.w-50.mx-auto(src='@/assets/curso/tema13/img07.svg', alt='')        
          h4.text-center.mb-0 Redes de distribución descentralizadas     
        p Las ventas del producto se hacen mediante sucursales propias o puntos de venta desde un almacén regulador. Se refiere a que las tareas y decisiones de ventas se trasladan a un almacén regulador con las que tiene que estar muy en contacto la empresa.

      .col-md-4
        .BG31.p-4.mb-4.br01.mtO01
          figure.mb-4.mtN01
            img.w-50.mx-auto(src='@/assets/curso/tema13/img08.svg', alt='')        
          h4.text-center.mb-0 Redes de distribución externalizadas      
        p La distribución se entrega a empresas jurídicas y económicamente independientes a la empresa.
    
    h3 Tipos o modelos de redes de distribución

    p.mb-5 Dependiendo de las necesidades de cada empresa, del presupuesto y del modelo de negocio, existen diferentes tipos de distribución, entre ellos:

    .row.justify-content-center        
      .col-md-10.col-lg-8
        .cajon.color-primario.BG11.p-5
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Distribución  directa de la fábrica al cliente: sin intermediarios.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Distribución mediante almacenes.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Distribución escalonada.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Distribución mediante subcontratación u #[i outsourcing].
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Distribución del proveedor a la fábrica.

</template>

<script>
export default {
  name: 'Tema13',
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
