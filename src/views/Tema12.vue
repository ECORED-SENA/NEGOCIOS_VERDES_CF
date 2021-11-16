<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 12
      h1 Sistemas #[i Push y Pull]
    
    .cajon-b.color-primario.p-3.mb-4
      p.mb-0 Dentro de la cadena de suministro es muy importante tener control y hacer seguimiento sobre los productos manejados, para poder responder efectivamente a las necesidades de los consumidores. Por lo tanto, la gestión de inventarios es una pieza fundamental dentro del esquema de planificación de un sistema de producción en cualquier empresa, porque permite el seguimiento de la cantidad de inventario (materias primas, materiales o producto terminado) que se deben tener en la empresa desde la producción hasta el almacenamiento o acopio y desde el almacenamiento hasta la distribución en el punto de venta, con el fin de cumplir con los pedidos de los clientes y además, en tenerlos de manera correcta y ordenada.
    
    p.mb-4 Para una buena gestión de inventarios, existen dos (2) sistemas de control para las empresas que les permite tomar decisiones frente a dicha gestión:

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/Q92N-0QZpWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3 Diferencias entre el sistema #[i Push y Pull]

    p.mb-5 A continuación, se presenta un comparativo entre ambos esquemas:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Diferencias entre sistema #[i Push y Pull]

        .tabla-a.color-acento-contenido
          table.tableLYauto
            caption Nota. Sena (2021).
            thead
              tr
                th Sistemas
                th #[i Push]
                th #[i Pull]
            tbody
              tr
                td(rowspan='8') Diferencias
                td Predicciones de la demanda.
                td Demanda efectiva/real - sistema “#[i just in time]”.
              tr
                td Se tiene en cuenta la disponibilidad de inventario del producto.
                td No se tiene en cuenta la disponibilidad de inventario del producto.
              tr
                td Costos de producción por unidad más bajos porque se puede producir en masa o a gran escala (se aprovecha la economía de escala).
                td Costos de producción por unidad más altos porque el producto no se fabrica en masa o a gran escala.
              tr
                td Sistema de producción más rápido y flexible.
                td Sistema de producción más demorado e inflexible.
              tr
                td No hay personalización del producto.
                td Se personaliza el producto porque se elabora conforme a los gustos del cliente.
              tr
                td Logística de aprovisionamiento eficiente.
                td Se reducen costos de logística porque se eliminan procesos que no aportan valor real.
              tr
                td Altos costos de almacenaje.
                td Se disminuyen los costos de almacenaje.
              tr
                td Tiempos de entrega del producto más rápido.
                td Tiempos de entrega más demorados.
              tr
                td(rowspan='3') Desventajas
                td Demanda no predecible al 100 % ocasionando errores en la planificación de la demanda.
                td Aumento en los tiempos de producción porque se puede demorar la compra de materia prima o materiales para su producción o en el despacho del producto terminado.
              tr
                td Riesgo de romper el #[i stock]: inventario escaso o exceso de inventario.
                td Aumento en tiempos de entrega del producto terminado (puede no llegar a ser entrega inmediata).
              tr
                td Aumento en costos de almacenamiento (si hay ruptura del #[i stock]).
                td Costos de producción por unidad más altos porque el producto no se fabrica en masa o a gran escala.

</template>

<script>
export default {
  name: 'Tema12',
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
