<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diferencias entre cadena de suministro y logística

    figure.mb-5
      img(src='@/assets/curso/tema4/img01.jpg', alt='Diferencias entre cadena de suministro y logística')
    
    .row.mb-5
      .col-md-6
        h2 La diferencia fundamental entre la logística y la cadena de suministro está en que la logística hace parte de la cadena de suministro.
      .col-md-6
        p Lo cual quiere decir, que la logística es uno de los componentes de la cadena de suministro. Algunas de las diferencias entre la cadena de suministro y la logística se basan en, ver tabla 1:
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Diferencias entre cadena de suministro y logística

        .tabla-a.color-acento-contenido
          table.tableLYauto
            caption Nota. Tabla adaptada de Beetrack (s.f.). Diferencia entre logística y cadena de suministro.
            thead
              tr
                th Aspectos
                th Cadena de suministro
                th Logística
            tbody
              tr
                td Costos
                td Reduce costos en la compra de materias primas.
                td Reduce costos en la distribución de los productos terminados.
              tr
                td Tiempos
                td Controla los tiempos de cada uno de los procesos en fábrica/producción para que la logística no falle.
                td Entrega los productos terminados a los clientes en el menor tiempo posible.
              tr
                td Relaciones
                td Mejora la relación con proveedores, distribuidores, transportistas, comerciantes mayoristas y minoristas, etc.
                td Mejora la relación con los clientes.
              tr
                td Objetivo
                td Satisface las exigencias para entrar en mercados nuevos.
                td Satisface la demanda de los clientes.
              tr
                td Tecnologías
                td Sistema #[i Supply Chain Management] (SCM).
                td Sistema informático destinado a la gestión de almacén y #[i software] para transporte.
              tr
                td Responsable
                td #[i Supply chain manager].
                td Gerente o jefe de logística.

</template>

<script>
export default {
  name: 'Tema4',
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
