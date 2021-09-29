<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bgIntro
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Hoy en día, con el crecimiento de consumidores de productos y servicios que cuentan con #[strong prácticas ambientales sostenibles] y #[strong responsables socialmente], todos los esfuerzos que se realicen por parte de los emprendedores o las empresas en diseñar, planear y operar estratégicamente una cadena de suministro y de logística de un producto, repercutirán directamente en beneficios a los clientes, al medio ambiente y a las mismas empresas o emprendedores ya que, elevará su competitividad frente a otras compañíasdel mercado al tener elementos diferenciadores acordes a la situación actual.

    .row.justify-content-center
      .col-lg-6.mb-4.mb-md-0
        p.mb-0 La gestión de la toda la cadena de suministro, incluidos los procesos de logística, tiene gran relevancia e impacto en las organizaciones ya que, en el proceso de movilizar la materia prima o cualquier producto terminado, desde un #[strong punto “X” hacia un punto “Y” y de un punto “Y” a otros puntos], implica hoy en día contar con el talento humano y el uso de tecnologías y otros sistemas que proporcionan al final que la operación sea exitosa y se pueda entregar una experiencia de valor a los clientes que la solicitan.
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='cadena de suministro')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
