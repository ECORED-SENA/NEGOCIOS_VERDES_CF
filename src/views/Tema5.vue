<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Procesos de la cadena de producción
    
    .bgImg10.mb-4
      .row.align-items-center.justify-content-end.mb-4
        .col-lg-5.mb-4.mb-md-0
          p.mb-0 #[b También se le conoce como procesos productivos o como cadenas productivas, entendiendo proceso de producción al conjunto de pasos planificados y relacionados entre sí], encaminados a transformar insumos o factores (materias primas, fuerza de trabajo e infraestructura) en bienes y/o servicios, en el que interactúa la información, las personas y la tecnología, para satisfacer la demanda de los clientes.
        .col-10.col-lg-6
          figure.M01
            img(src='@/assets/curso/tema5/img01.png', alt='Procesos de la cadena de producción')

      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema5/img02.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Etapas de un proceso de producción
                p.text-small.mb-0 Existen tres (3) etapas para desarrollar un proceso de producción.
              .col-sm-auto
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Etapas_Produccion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      
      p.mb-4 Y se identifican cinco (5) tipos de procesos de producción:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-botones--borde.p-3.BG00.mb-4.bordColor01
          .row.align-items-center.justify-content-center
            .col-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img03.svg', alt='')
            .col-lg-9
              h5 Producción por lotes o discontinua
              p.mb-0 Es el proceso que fabrica permanentemente una pequeña cantidad de productos exactos.

        .tarjeta.color-acento-botones--borde.p-3.BG00.mb-4.bordColor02
          .row.align-items-center.justify-content-center
            .col-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img04.svg', alt='')              
            .col-lg-9
              h5 Producción de bajo pedido o por proyectos
              p.mb-0 Es el proceso que fabrica tan solo un producto a la vez, por lo que cada producto es diferente.

        .tarjeta.color-acento-botones--borde.p-3.BG00.mb-4.bordColor01
          .row.align-items-center.justify-content-center
            .col-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img05.svg', alt='')              
            .col-lg-9
              h5 Producción en masa
              p.mb-0 Es el proceso en el que se fabrica gran cantidad de productos iguales con el uso de maquinaria automatizada.

        .tarjeta.color-acento-botones--borde.p-3.BG00.mb-4.bordColor02
          .row.align-items-center.justify-content-center
            .col-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img06.svg', alt='')              
            .col-lg-9
              h5 Producción continua
              p.mb-0 Es el proceso en el que se fabrican miles de productos idénticos de manera constante e iterativa. En este proceso, el flujo de transformación del bien es continua e ininterrumpida.

        .tarjeta.color-acento-botones--borde.p-3.BG00.mb-4.bordColor01
          .row.align-items-center.justify-content-center
            .col-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/img07.svg', alt='')              
            .col-lg-9
              h5 Producción artesanal
              p.mb-0 
                | Es el proceso en el que se fabrican productos variados, de pieza más o menos única, poco uniforme, producidos en lotes mucho más pequeños y generalmente dirigidos a un consumidor o cliente específico o casual.
                br
                | Por ejemplo, la producción de las mochilas, carteras o accesorios realizados en telares indígenas en Colombia.
    
    p.mb-4 A continuación, se presenta el proceso productivo de una fábrica de sandalias:

    .row.align-items-center.justify-content-center
      .col-6.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img08.jpg', alt='')              
      .col-lg-5
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 1
            | Estimar la cantidad de sandalias que se van a producir.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 2
            | Comprar la materia prima.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 3
            | Transportar los insumos de producción.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 4
            | Fase de síntesis.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 5
            | Ensamblar y cortar cada pieza.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 6
            | Perforar, grabar, foliar y encasillar las piezas.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 7
            | Efectuar el montaje y fijar las piezas.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 8
            | Poner la suela a las sandalias.				
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 9
            | Aplicar el pigmento.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 10
            | Fase de acondicionamiento				
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 11
            | Empacar cada par de sandalias.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 12
            | Despachar a las zapaterías.
          li 
            .lista-ol--cuadro__vineta.lolvineta2
              span 13
            | Prestar atención a las reacciones del cliente.

</template>

<script>
export default {
  name: 'Tema5',
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
