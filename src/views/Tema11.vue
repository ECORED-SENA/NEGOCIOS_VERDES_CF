<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Cadena de valor
    
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 En los años 80, el norteamericano Michael Porter presentó un modelo para identificar las fortalezas en los procesos de producción de las empresas. Esa teoría se conoce con el nombre de #[strong cadena de valor].

        p.mb-4 #[strong La cadena de valor] se define como un instrumento de #[strong análisis estratégico interno] que contribuye a establecer la ventaja competitiva de cualquier organización frente a otras, estudiando las actividades más relevantes. Con esta herramienta se pueden conocer las #[strong fortalezas de los procesos de producción] de cada empresa, es decir, se pueden identificar cuáles son las #[strong actividades que generan valor], cómo funcionan los costos, las fuentes y la capacidad de diferenciarse de las otras.
      .col-6.col-lg-3
        figure
          img(src='@/assets/curso/tema11/img01.svg', alt='Cadena de valor')
    
    p.mb-4 La cadena de valor describe cuatro (4) aspectos del panorama competitivo:

    .row.justify-content-center.mb-5
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG00.bordColor02.br01.p-4.w-100
          h4 Grado de integración
          p.mb-0 Aspecto determina las actividades que la propia empresa hace sin necesidad de acudir a otras empresas.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG00.bordColor01.br01.p-4.w-100
          h4 Panorama industrial
          p.mb-0 Este aspecto permite conocer la relación entre el mercado y los sectores con los que se relaciona la empresa y la competencia.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG00.bordColor02.br01.p-4.w-100
          h4 Panorama de segmento
          p.mb-0 Este aspecto se refiere a los cambios con los que se puede afectar el producto, los compradores y como pueden afectar las ventas.
      .col-md-3.d-flex
        .BG00.bordColor01.br01.p-4.w-100
          h4 Panorama geográfico
          p.mb-0 Este aspecto se refiere al análisis de los lugares donde la empresa compite. Se identifican los países, ciudades o regiones.
    
    p.mb-5 Y para su aplicación en una empresa, se pueden determinar dos (2) tipos de actividades: primarias y de soporte, donde cada una de estas actividades crea un costo y una cuantía sobre el producto final, que es lo que llamamos margen. Conozcamos cada una de ellas.

    h3 Actividades primarias

    p.mb-5 Son las actividades que se relacionan verdaderamente con la comercialización y la fabricación del producto y se dividen en:

    .row.justify-content-center.mb-5
      .col-md-10.col-lg-8
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema11/img02.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.BGEsp01.p-3(y="30.5%" x="26.5%")
            .h5.mb-2.text-dark Logística interna
            p.text-dark Incluye las operaciones de recepción, almacenamiento, distribución y devolución de producto, si aplica, de las materias primas.
          
          .tarjeta.color-primario.BGEsp02.p-3(y="51.9%" x="32.8%")
            .h5.mb-2 Operación o producción
            p Son las actividades en las que se transforma la materia prima en el producto final.
          
          .tarjeta.color-primario.BGEsp03.p-3(y="63.2%" x="51.6%")
            .h5.mb-2 Logística externa o de salida
            p Actividad de logística que se orienta en acopiar y distribuir el producto terminado al consumidor.
          
          .tarjeta.color-primario.BGEsp04.p-3(y="52.5%" x="69.8%")
            .h5.mb-2 Marketing y ventas
            p Actividades con las que se hace publicidad para dar a conocer el producto y se generan las ventas de este.
          
          .tarjeta.color-primario.BGEsp05.p-3(y="30.5%" x="76.5%")
            .h5.mb-2 Atención al cliente
            p actividades que tienen que ver con el suministro del servicio postventa para mantener el valor del producto o realizarlo, es decir, todo el acompañamiento que se hace a los compradores, tales como garantía, mantenimiento, instalación, entre otros.

    h3 Actividades secundarias o de apoyo

    p.mb-4 Son las actividades que añaden valor al producto, pero no se involucran directamente en la comercialización y su producción, y donde participa recursos humanos.

    .row.justify-content-center
      .col-md-3.mb-4.mb-lg-0.d-flex
        .p-4.w-100
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema11/img03.svg', alt='')
          h4 Infraestructura de la empresa
          p.mb-0 Actividades que brindan soporte a toda la organización, como la planeación, la instalación física de la empresa, la contabilidad y las finanzas.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .p-4.w-100
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema11/img04.svg', alt='')
          h4 Recursos humanos
          p.mb-0 Actividades de vinculación de personal, de formación y de motivación de los trabajadores.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .p-4.w-100
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema11/img05.svg', alt='')
          h4 Desarrollo de tecnología e investigación
          p.mb-0 Actividades que tienen que ver con el desarrollo del conocimiento y de tecnología.
      .col-md-3.d-flex
        .p-4.w-100
          figure.mb-4
            img.w-75.mx-auto(src='@/assets/curso/tema11/img06.svg', alt='')
          h4 Adquisiciones
          p.mb-0 Actividades para aprovisionamiento y almacenamiento de materias primas o de los materiales con los que se va a fabricar el producto.

</template>

<script>
export default {
  name: 'Tema11',
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
