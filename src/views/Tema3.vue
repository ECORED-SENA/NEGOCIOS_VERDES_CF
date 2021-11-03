<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Procesos de logística
    
    .row.bgImg01.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img01.svg', alt='Procesos de logística')
      .col-10.col-lg-6
        p.mb-0 De acuerdo con lo indicado por Beetrack (s.f.), se entiende por #[b logística], a los procesos de coordinación, gestión y transporte de los bienes comerciales desde el lugar de distribución hasta el consumidor final. Es decir, la logística es la encargada del almacenamiento, inventario, transporte, entrega y/o devolución del producto y, por lo tanto, es una parte fundamental en la cadena de suministro de cualquier organización, porque por ella, las empresas logran que sus productos y servicios se pongan a disposición de los clientes en el momento y lugar adecuados.
    
    p.mb-4 A continuación, se pueden visualizar los diferentes tipos de logística:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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
