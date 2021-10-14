<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Procesos de la cadena de distribución
    
    p.mb-4 Se le conoce también como proceso de distribución. Son una serie de actividades que van desde el producto fabricado hasta cuando el producto llega a sus potenciales compradores o clientes, es decir, es el proceso de hacer llegar el producto terminado a los clientes.

    p.mb-4 Para que el producto fabricado o producido llegue hasta el cliente final en tiempo y forma, las empresas deberán escoger la estrategia de distribución más adecuada, entre las cuales se encuentran:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.BG31.p-4(titulo="Tradicional")
        .row.align-items-center.justify-content-center
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img01.svg', alt='Estrategia intensiva')              
          .col-lg-10
            h4 Estrategia intensiva
            p Es la estrategia de distribución con el mayor número de puntos de venta posible. Es usada principalmente para vender productos de comercialización en masa. Por ejemplo, los bienes de consumo que rotan rápidamente o productos de uso diario, tales como gaseosas, jabones, cremas, detergentes, entre otros.
      
      .tarjeta.color-acento-contenido.BG31.p-4(titulo="Estrategia selectiva")
        .row.align-items-center.justify-content-center
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img02.svg', alt='Estrategia selectiva')              
          .col-lg-10
            h4 Estrategia selectiva
            p Es la estrategia intermedia entre la intensiva y la exclusiva, donde se escoge a un número selecto de intermediarios y los puntos de venta no son tantos como en la extensiva. Es usada para vender productos que se perciben como “premium”.
      
      .tarjeta.color-acento-contenido.BG31.p-4(titulo="Estrategia exclusiva")
        .row.align-items-center.justify-content-center
          .col-6.col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/img03.svg', alt='Estrategia exclusiva')              
          .col-lg-10
            h4 Estrategia exclusiva
            p Es la estrategia que busca la distinción del producto, es decir, los fabricantes pactan la venta de su producto a los distribuidores exclusivos para diferenciarlo como un artículo de costoso valor. Es utilizada para vender productos de alta gama, costosos o de lujo.
      
    .row.justify-content-center.mb-4
      .col-md-4.mb-4.mb-lg-0.d-flex
        .BG11.br01.p-4.w-100
          h4 Vertical
          p.mb-0 Es el sistema mediante el cual los fabricantes, mayoristas y minoristas trabajan de forma unificada.
      .col-md-4.mb-4.mb-lg-0.d-flex
        .BG10.br01.p-4.w-100
          h4 Horizontal
          p.mb-0 Alianza entre dos o más empresas que persiguen un mismo objetivo, es decir, quieren aprovechar una nueva oportunidad de mercadeo.
      .col-md-4.d-flex
        .BG11.br01.p-4.w-100
          h4 Combinado o híbrido
          p.mb-0 Es el sistema en el que una sola empresa escoge dos o más canales para llegar a uno o más segmentos de compradores.
    
    p.mb-5 Cuando se ha definido la estrategia de distribución, el siguiente paso es escoger el canal adecuado para que el producto llegue a las manos de los consumidores, entre los que se encuentran:

    #t6_1.titulo-segundo
      h2 6.1 Canal directo
    
    .row.align-items-center.justify-content-evenly.bgImg011.mb-4
      .col-6.col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img04.svg', alt='Canal directo')              
      .col-lg-5
        p Se refiere al envío de manera directa del producto por parte del fabricante al cliente final, es decir, sin intermediación. Este tipo de canal de distribución es recomendable para los emprendedores, ya que la persona se encarga de vender sus productos en su mismo punto de venta, en internet a través del comercio electrónico o e-commerce, mediante visitas domiciliarias si así lo requiere o inclusive llamadas telefónicas. Por ejemplo, el postre que se vende en una pastelería, cuyo local puede ser la misma casa o su puesto de venta.
    
    p.mb-4 Existen algunas ventajas y desventajas al utilizar este canal de distribución:

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-primario
          table
            thead
              tr
                th Ventajas
                th Desventajas
            tbody
              tr
                td
                  figure.mb-4
                    img.w-25.mx-auto(src='@/assets/curso/tema6/img05.svg', alt='')  
                  p.mb-0
                    | Control del producto (entregado en óptimas condiciones y a tiempo).
                    br
                    br
                    | Control de las ventas. 
                    br
                    br
                    | Servicio al cliente personalizado.
                td
                  figure.mb-4
                    img.w-25.mx-auto(src='@/assets/curso/tema6/img06.svg', alt='') 
                  p.mb-0
                    | La falta de cobertura.
                    br
                    br
                    | Mayores costos.
                    br
                    br
                    | Falta de poder delegar el trabajo.    

    #t6_2.titulo-segundo
      h2 6.2 Canal indirecto
    
    p.mb-4 Se refiere al envío del producto por parte del fabricante al cliente final, pero utilizando uno o más intermediarios. Este tipo de canal de distribución es el más común, ya que intervienen los agentes, mayoristas, minoristas y detallistas.

    .row.justify-content-center.mb-5
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema6/img07.jpg', alt='Fase 1')
          .TFoverlay--02.text-white.p-3
            h5 Canal indirecto corto
            p.mb-0 El canal indirecto corto es el más sencillo, puesto que se utiliza un solo intermediario entre el fabricante y el consumidor. Por ejemplo, cualquier negocio pequeño que compre su mercancía directamente a la fábrica.
      
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema6/img08.jpg', alt='Fase 2')
          .TFoverlay--02.text-white.p-3
            h5 Canal indirecto largo
            p.mb-0 Este canal es el más común y lo conforman varios intermediarios: mayoristas, almacenistas, distribuidores, minoristas.
      
      .col-md-10.col-lg-4.mb-4.mb-lg-0
        .TFcontainer
          img.TFimage(src='@/assets/curso/tema6/img09.jpg', alt='Fase 3')
          .TFoverlay--02.text-white.p-3
            h5 Canal indirecto doble
            p.mb-0 En este canal de distribución intervienen mayoristas, minoristas y agentes. Un agente es el distribuidor exclusivo de algún tipo de bien y/o servicio. Por ejemplo, un negocio que se trabaje por medio de franquicias tal como el negocio de batidos o jugos de frutas en Colombia o cadenas de restaurantes de comida rápida de pizzería o hamburguesas.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .BG11.p-5.mb-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 3. 
            span Tipos de canales de distribución
          figure
            img(src='@/assets/curso/tema6/img10.svg', alt='Tipos de canales de distribución')
            figcaption Nota. Imagen tomada y adaptada del Instituto Nacional de Tecnología Agropecuaria. La distribución. (s.f.).

        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/icono-play.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para profundizar sobre los canales de distribución, te invitamos a ver el video #[strong “Canales de distribución – Marketing en un minuto”], que se encuentra en el material complementario. 
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=cGwlGtu14O0&list=RDCMUCwh64yBHC2TCaNMaSRHHTCA&index=2" target="_blank")
                    span Ver
                    i.fas.fa-play-circle

</template>

<script>
export default {
  name: 'Tema6',
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
