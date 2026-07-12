function campoBasicos(prefix){
  return [
    { type:'text', name:'colores', label:'Colores del evento' },
    { type:'text', name:'tema', label:'Tema' },
    { type:'textarea', name:'frase', label:'Frase (opcional)', full:true },
    { type:'text', name:'musica', label:'Música (nombre o enlace)' },
  ];
}
function camposFinales(){
  return [
    { title:'Fotos y confirmación', fields:[
      { type:'file', name:'galeriaFotos', label:'Galería de fotos', multiple:true, accept:'image/*', full:true, hint:'Selecciona una o varias imágenes (se guardan para que las veas en el panel)' },
      { type:'text', name:'confirmacion', label:'Confirmación (¿cómo deseas recibir las confirmaciones?)', full:true },
    ]},
    { title:'Contacto', fields:[
      { type:'tel', name:'whatsapp', label:'WhatsApp', required:true },
      { type:'text', name:'instagram', label:'Instagram (opcional)' },
      { type:'text', name:'nombreCliente', label:'Nombre de quien solicita', required:true },
      { type:'email', name:'correo', label:'Correo electrónico (opcional)' },
      { type:'textarea', name:'infoAdicional', label:'Información adicional', full:true },
    ]},
  ];
}

const FORM_CONFIGS = {

  xv: {
    title:'Formulario — XV Años',
    intro:'Cuéntanos todos los detalles para diseñar la invitación de tus XV años.',
    sections:[
      { title:'Información del evento', fields:[
        { type:'text', name:'nombreFestejado', label:'Nombre del festejado', required:true },
        { type:'number', name:'edad', label:'Edad' },
        { type:'date', name:'fecha', label:'Fecha', required:true },
        { type:'time', name:'hora', label:'Hora' },
        { type:'text', name:'iglesia', label:'Iglesia' },
        { type:'text', name:'recepcion', label:'Recepción' },
        { type:'text', name:'direccion', label:'Dirección', full:true },
        { type:'text', name:'codigoVestimenta', label:'Código de vestimenta' },
      ]},
      { title:'Diseño y estilo', fields: campoBasicos() },
      { title:'Familia', fields:[
        { type:'text', name:'padres', label:'Padres' },
        { type:'text', name:'padrinos', label:'Padrinos' },
      ]},
      ...camposFinales(),
    ]
  },

  bodas: {
    title:'Formulario — Bodas',
    intro:'Cuéntanos todos los detalles para diseñar la invitación de su boda.',
    sections:[
      { title:'Información del evento', fields:[
        { type:'text', name:'nombreNovia', label:'Nombre de la novia', required:true },
        { type:'text', name:'nombreNovio', label:'Nombre del novio', required:true },
        { type:'date', name:'fecha', label:'Fecha', required:true },
        { type:'time', name:'hora', label:'Hora' },
        { type:'text', name:'iglesia', label:'Iglesia' },
        { type:'text', name:'recepcion', label:'Recepción' },
        { type:'text', name:'direccion', label:'Dirección', full:true },
        { type:'text', name:'codigoVestimenta', label:'Código de vestimenta' },
      ]},
      { title:'Diseño y estilo', fields: campoBasicos() },
      { title:'Familia', fields:[
        { type:'text', name:'padres', label:'Padres' },
        { type:'text', name:'padrinos', label:'Padrinos / testigos' },
      ]},
      ...camposFinales(),
    ]
  },

  babyshower: {
    title:'Formulario — Baby Shower',
    intro:'Cuéntanos todos los detalles para diseñar la invitación del Baby Shower.',
    sections:[
      { title:'Información del evento', fields:[
        { type:'text', name:'nombreMama', label:'Nombre de la futura mamá', required:true },
        { type:'text', name:'nombrePapa', label:'Nombre del futuro papá' },
        { type:'date', name:'fecha', label:'Fecha', required:true },
        { type:'time', name:'hora', label:'Hora' },
        { type:'text', name:'lugar', label:'Lugar' },
        { type:'text', name:'direccion', label:'Dirección', full:true },
        { type:'text', name:'codigoVestimenta', label:'Código de vestimenta (opcional)' },
      ]},
      { title:'Diseño y estilo', fields: campoBasicos() },
      { title:'Familia', fields:[
        { type:'text', name:'padres', label:'Familiares a mencionar' },
      ]},
      ...camposFinales(),
    ]
  },

  cumpleanos: {
    title:'Formulario — Cumpleaños',
    intro:'Cuéntanos todos los detalles para diseñar la invitación del cumpleaños.',
    sections:[
      { title:'Información del evento', fields:[
        { type:'text', name:'nombreFestejado', label:'Nombre del festejado(a)', required:true },
        { type:'number', name:'edad', label:'Edad que cumple' },
        { type:'date', name:'fecha', label:'Fecha', required:true },
        { type:'time', name:'hora', label:'Hora' },
        { type:'text', name:'lugar', label:'Lugar' },
        { type:'text', name:'direccion', label:'Dirección', full:true },
        { type:'text', name:'codigoVestimenta', label:'Código de vestimenta (opcional)' },
      ]},
      { title:'Diseño y estilo', fields: campoBasicos() },
      { title:'Familia', fields:[
        { type:'text', name:'padres', label:'Padres o anfitriones a mencionar' },
      ]},
      ...camposFinales(),
    ]
  },

  eventos: {
    title:'Formulario — Eventos',
    intro:'Cuéntanos todos los detalles para diseñar la invitación de tu evento.',
    sections:[
      { title:'Información del evento', fields:[
        { type:'text', name:'nombreEvento', label:'Nombre del evento', required:true },
        { type:'text', name:'organizador', label:'Organizador / anfitrión' },
        { type:'date', name:'fecha', label:'Fecha', required:true },
        { type:'time', name:'hora', label:'Hora' },
        { type:'text', name:'lugar', label:'Lugar' },
        { type:'text', name:'direccion', label:'Dirección', full:true },
        { type:'text', name:'codigoVestimenta', label:'Código de vestimenta (opcional)' },
      ]},
      { title:'Diseño y estilo', fields: campoBasicos() },
      ...camposFinales(),
    ]
  },
};
