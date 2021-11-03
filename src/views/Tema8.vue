<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Procesos de servicios
    
    .row.mb-5
      .col-md-6
        h2 Para poder ahondar en los procesos de servicio, es importante definir y entender qué son los servicios. 
      .col-md-6
        p Los servicios son las actividades económicas realizadas por un proveedor en los que no se obtiene un bien material elaborado; sin embargo, sí aporta un valor agregado al cliente y entrega un beneficio al consumidor en un tiempo y lugar específico para producir un resultado deseado. En otras palabras, los bienes se producen, los servicios se ejecutan.
    
    p.mb-4 Dentro de las características de los servicios más nombradas se encuentran:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Intangilibidad")
        .row.justify-content-center
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema8/img01.svg', alt='Intangilibidad')
          .col-lg-6
            h4 Intangibilidad
            p Quiere decir que un servicio no está disponible al consumidor para que sea mirado, escuchado, degustado, tocado o pesado u olido, antes de tomar la decisión de compra. En otras palabras, los servicios no son palpables, son un hecho, ejecución o un esfuerzo; los servicios no se tienen, se utilizan; el consumo de un servicio no puede ser apartado de la producción. La intangibilidad es la diferencia primordial entre los bienes y los servicios.
      
      .py-3.py-md-4(titulo="Heterogeneidad")
        .row.justify-content-center
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema8/img02.svg', alt='Heterogeneidad')
          .col-lg-6
            h4 Heterogeneidad
            p También se le conoce como variabilidad. Significa que cada servicio ofrecido a un cliente puede variar dependiendo de factores humanos, tales como la salud física, su estado de ánimo, el grado de simpatía que le despierte ese cliente, entre otros y no se puede predecir antes de consumirlo. Se requiere de un proceso de estandarización del servicio. Por ejemplo, cada servicio que proporciona una manicurista en una peluquería puede cambiar hasta en un mismo día, porque su desempeño depende del nivel de cansancio que tenga a lo largo del día, del estado de ánimo, la forma de aplicar el esmalte, la forma de limpiar las uñas, entre otros factores que van a determinar un resultado deseado o no deseado en el cliente dependiendo cómo haya sido su experiencia con ese servicio.
      
      .py-3.py-md-4(titulo="Inseparabilidad")
        .row.justify-content-center
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema8/img03.svg', alt='Inseparabilidad')
          .col-lg-6
            h4 Inseparabilidad
            p Hace referencia a que cada servicio que se produce, se vende y se consume en un mismo periodo de tiempo, es decir, la producción del servicio y el consumo suceden a la vez. Por lo tanto, esta característica está relacionada con la correlación que ocurre entre el proveedor y el cliente. Por ejemplo, si una persona necesita una atención médica, debe estar ante un médico o un profesional de la salud para que lo realice.
      
      .py-3.py-md-4(titulo="Perecibilidad")
        .row.justify-content-center
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema8/img04.svg', alt='Perecibilidad')
          .col-lg-6
            h4 Perecibilidad
            p Significa que un servicio no puede ser acopiado, almacenado, puesto o exhibido en un anaquel de una tienda para ser llevado por el comprador. Un servicio tiene fecha de inicio y de fin, es decir, caduca. Por ejemplo, el trayecto de un tiquete de avión no se puede guardar, tiene una fecha y caduca.
    
    p.mb-4 Ahora bien, los servicios se clasifican para responder a las necesidades estratégicas de una empresa y existen diversas clasificaciones; algunas de ellas son:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/zTgk6ZaHVV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

</template>

<script>
export default {
  name: 'Tema8',
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
