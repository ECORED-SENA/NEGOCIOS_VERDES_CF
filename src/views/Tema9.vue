<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Nivel de servicio
    
    .row.justify-content-center.mb-4
      .col-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema9/img01.svg', alt='ciclo del nivel de serviciod')
      .col-lg-6
        p El nivel de servicio o también llamado “ciclo del nivel de servicio”, se puede definir como la probabilidad de satisfacción de la demanda total del cliente en un periodo de tiempo determinado, en condiciones normales de una empresa y sin generar desorganización en todos los eslabones de la cadena de suministro. La probabilidad se da mediante un indicador en porcentaje. Por ejemplo, si el nivel de servicio de cierta referencia de ropa interior es del 95 %, esto quiere decir que teóricamente, 95 de cada 100 clientes podrán adquirir casi siempre esa referencia y verán satisfecho su pedido en el tiempo previsto.
    
    p.mb-4 Los niveles de servicio indican el impacto que generan los proveedores en cada uno de sus clientes en cuanto a:

    .row.justify-content-center.mb-5
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG10.br01.p-4.w-100
          figure.mb-3
            img.w-25(src='@/assets/curso/tema9/img02.svg', alt='')
          p.mb-0 Tiempos de entrega.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG11.br01.p-4.w-100
          figure.mb-3
            img.w-25(src='@/assets/curso/tema9/img03.svg', alt='')
          p.mb-0 Calidad del producto.
      .col-md-3.mb-4.mb-lg-0.d-flex
        .BG10.br01.p-4.w-100
          figure.mb-3
            img.w-25(src='@/assets/curso/tema9/img04.svg', alt='')
          p.mb-0 Servicio posventa.
      .col-md-3.d-flex
        .BG11.br01.p-4.w-100
          figure.mb-3
            img.w-25(src='@/assets/curso/tema9/img05.svg', alt='')
          p.mb-0 Servicio al cliente.
    
    p.mb-5 Y se clasifican dependiendo del impacto que cause en sus clientes, en:

    SlyderE(indicadores="derecha")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Nivel Criminal
          p Se refiere al incumplimiento de la promesa de servicio dejando de creer totalmente en la la marca o en la empresa. La actitud que toma el cliente es la de detractor, puesto que lo que esperaba no se cumplió o no se dio, sintiéndose decepcionado y lastimado en lo más profundo.      
        .col-md-6
          figure
            img(src='@/assets/curso/tema9/img10.jpg', alt='Nivel Criminal')

      .row
        .col-md-6.mb-4.mb-md-0
          h4 Nivel Básico
          p Este nivel es lo mínimo. Quiere decir que no se ofrece nada más allá de lo rigurosamente necesario. Lo que pida el cliente, es lo que el cliente recibe. No hay comunicación para notificar nada al cliente, no hay ningún interés, los clientes eligen opciones más agradables que cumplan con sus expectativas y la actitud es desertora.     
        .col-md-6
          figure
            img(src='@/assets/curso/tema9/img06.jpg', alt='Nivel Básico')
      
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Nivel Esperado
          p Este servicio no ofrece nada especial, es pasable. El cliente opta por comprarle mientras encuentra algo mejor, la actitud del cliente es indiferente y puede cambiarse si encuentra otra oferta un poco más cautivadora.  
        .col-md-6
          figure
            img(src='@/assets/curso/tema9/img07.jpg', alt='Nivel Esperado')
      
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Nivel Deseado
          p Es el servicio que un cliente aspira pero que rara vez recibe. Es lo que le gustaría que las empresas hicieran. Este servicio hace que los clientes continúen llegando, apoyan la marca y su actitud es de fan frente al producto o servicio, pero no luchan por ella. 
        .col-md-6
          figure
            img(src='@/assets/curso/tema9/img08.jpg', alt='Nivel Deseado')
      
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Nivel Alucinante
          p Este servicio es aquel que es totalmente asombroso e imprevisto, además de gratificante para el cliente. Este servicio supera considerablemente cualquier expectativa y le genera emoción de felicidad a través de una sonrisa. El cliente cuenta su fabulosa experiencia a conocidos, familia y amigos y por lo tanto su actitud frente al servicio lo hace promocionar la marca y acercar a otras personas a la empresa, es decir, se convierte en promotor.
        .col-md-6
          figure
            img(src='@/assets/curso/tema9/img08.jpg', alt='Nivel Alucinante')
    
    h4 Cálculo del nivel de servicio
    p.mb-4 Existe una manera básica para calcular el nivel de servicio, teniendo en cuenta el número de artículos de una referencia que se vendieron y el número de artículos que no pudieron ser suministrados por falta de existencias o stock, existiendo un pedido por parte del cliente. Se calcula de la siguiente forma:

    .row.justify-content-center
      .col-lg-7.bordColor01.p-5.mb-5
        figure
          img(src='@/assets/curso/tema9/img11.svg', alt='')
        
      .col-lg-10
        .cajon.color-primario.BG11.p-5
          .h5.mb-1 Acuerdo de Nivel de Servicio (ANS) - Service Level Agreement (SLA)
          p.mb-0 Es un documento en el que se establece el nivel de servicio que un cliente espera de su proveedor, es decir, un acuerdo acerca de las pautas de un producto o de un servicio. La forma del documento más usado para establecer el acuerdo es a través de un contrato. Un ANS sirve para que tanto proveedor como cliente estén al tanto de qué esperar, y también, es la forma jurídica para hacer que estos acuerdos se cumplan.

</template>

<script>
export default {
  name: 'Tema9',
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
