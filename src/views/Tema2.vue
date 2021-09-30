<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de la cadena de suministro
    
    .row.mb-5
      .col-md-6
        h2 Se conoce en inglés como #[i Supply Chain Management] (SCM), y se refiere al ciclo de vida de un producto o servicio, desde su creación hasta su consumo.
      .col-md-6
        p Es un conjunto de actividades que integra 3 procesos principales y los flujos desde la planificación de las actividades de suministro, la producción y la distribución dentro de una empresa, con la participación de los proveedores, los clientes y los consumidores finales.
    
    p.mb-4 Una cadena de suministro integra tres (3) elementos:

    .row.mb-5
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema2/img01.svg', alt='01')
        h4.text-center La planeación de las actividades
      
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema2/img02.svg', alt='01')
        h4.text-center La ejecución o implementación de las actividades
      
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema2/img03.svg', alt='01')
        h4.text-center El control de las actividades
    
    p.mb-5 Los elementos están relacionados con el flujo de materiales o productos, flujo de información y flujo de pagos, desde la adquisición de materias primas hasta la entrega final del producto al cliente, pasando por su transformación en el medio, ver figura 2.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Cadena de Suministro
        figure
          img.mb-3(src='@/assets/curso/tema2/img04.svg', alt='Cadena de Suministro')
          figcaption Nota. Cadena de suministros. Biblioteca digital. (2013).
  
</template>

<script>
export default {
  name: 'Tema2',
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
