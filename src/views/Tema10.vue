<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Tiempo de entrega en logística o #[i Lead Time]
    
    p.mb-4 #[strong El tiempo de entrega] en logística o en inglés #[i #[b Lead Time]], es el periodo de tiempo que pasa desde que el cliente realiza la compra hasta que el proveedor entrega el producto al cliente, es decir, hasta que el cliente lo recibe. Generalmente, el tiempo se calcula en días, pero dependerá del modelo de negocio de cada empresa. Por lo tanto, para que funcione adecuadamente el sistema de entregas de la mercancía, la clave está en los inventarios.

    figure.mb-5 
      img(src='@/assets/curso/tema10/img01.jpg', alt='Lead Timed')
    
    p.mb-4 La relación del nivel de inventario es directamente proporcional al tiempo de entrega, si el nivel total del inventario es alto, el tiempo de entrega es mayor; mientras que, si se reduce el tiempo de entrega o Lead Time, también se reduce el inventario que se crea durante el tiempo de producción de la mercancía.

    p.mb-4 Ahorrando tiempo, se ahorra dinero. Por lo tanto, se deben priorizar al máximo 2 procesos:

    .row.justify-content-center
      .col-lg-9
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.p-0
                  figure
                    img(src='@/assets/curso/tema10/img02.jpg', alt='')
                th.p-0
                  figure
                    img(src='@/assets/curso/tema10/img03.jpg', alt='')
            tbody
              tr
                td Proceso de planificación de las rutas de distribución.
                td Proceso de trazabilidad en tiempo real de las entregas.


</template>

<script>
export default {
  name: 'Tema10',
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
