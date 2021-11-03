<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Diseño de productos
    
    p.mb-5 Se puede definir el concepto de diseño de un producto, como aquella serie de pasos o de actividades organizadas que debe seguir una empresa o cualquier emprendedor de acuerdo con sus propios criterios, para crear nuevos productos, arrojarlos al mercado y que estos puedan ser vendidos a los consumidores y satisfacer sus necesidades.

    h3 Pasos para el diseño de un producto

    p.mb-4 Existen muchas maneras de diseñar un producto, sin embargo, se plantean los siguientes pasos que pueden adaptarse a cualquier modelo de negocio:

    .row.justify-content-center.mb-4
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema7/img01.svg', alt='Definir el producton')
            .col-md-10
              h3 Definir el producto
              p En este paso se parte de una idea  que se define o se concreta, luego hay que corroborar con un estudio de mercado con el fin de conocer si se están satisfaciendo las necesidades del público objetivo. Aquí también se deben evaluar las técnicas, una de ellas es la metodología (DOFA) con las cuales se puede diseñar el producto y sus características, que deben estar alineadas con las necesidades de las personas que se descubrieron con el estudio de mercado.

          .row.justify-content-center
            .col-md-10.mb-4.mb-md-0
              h3 Diseño del producto
              p En este paso se construye o se crea el producto en sí, teniendo en cuenta todas las características, técnicas y requisitos propios de diseño identificados en el anterior paso.
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/tema7/img02.svg', alt='Diseño del producto')
          
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema7/img03.svg', alt='Revisar la viabilidad del producto')
            .col-md-10
              h3 Revisar la viabilidad del producto
              p Creado el producto, se debe cotejar la viabilidad técnica y la financiera ya que, puede que los costos de fabricación resulten muy elevados y se haga imposible producirlo como se esperaba. En este paso también, se debe revisar y evaluar qué tan aceptado es el producto en el mercado y si es posible comercializarlo, así como considerar diferentes controles de calidad y normas nacionales e internacionales.

          .row.justify-content-center
            .col-md-10.mb-4.mb-md-0
              h3 Identificar la competencia
              p Además de identificar a la competencia, es fundamental analizar el progreso, llevar a cabo el monitoreo y hacer rastreo de las quejas y reclamos de sus clientes frente al producto. Del análisis obtenido, se determinará quiénes son, qué actividades hacen, qué lugares abarcan, posibles modificaciones al producto diseñado y qué es lo que los hace diferentes para posicionarse en el mercado. Toda esa información, es relevante para establecer más fácilmente las ventajas y desventajas del producto que se quiere diseñar.
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/tema7/img04.svg', alt='Identificar la competencia')
          
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema7/img05.svg', alt='Fabricación del producto')
            .col-md-10
              h3 Fabricación del producto
              p En este paso, se realiza la fabricación especializada del producto diseñado. 

          .row.justify-content-center
            .col-md-10.mb-4.mb-md-0
              h3 Lanzamiento del producto
              p 
                | Este es el paso final, una vez se tiene el producto fabricado y listo para comercializarse en el mercado, las empresas o los emprendedores deben planear una estrategia de mercadeo que sea efectiva para captar los clientes potenciales e introducir el producto diseñado en los consumidores.
                br
                br
                | Debido a que no siempre el producto diseñado resulta atractivo al público, habrá la necesidad de rediseñar algún punto para que cautive al consumidor nuevamente.
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/tema7/img06.svg', alt='Lanzamiento de producto')

</template>

<script>
export default {
  name: 'Tema7',
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
