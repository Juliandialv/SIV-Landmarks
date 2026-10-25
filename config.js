// Configuración de la web de anotación SIV.
// Edita solo lo que está entre comillas o los números. Guarda y vuelve a subir este archivo a GitHub.
// Si algo deja de funcionar tras editar, revisa que no falte ninguna coma o comilla.
window.SIV_CONFIG = {

  // ── Conexión con Google Sheets ──────────────────────────────────────────
  // URL de la aplicación web de Google Apps Script (termina en /exec)
  endpoint: "https://script.google.com/macros/s/AKfycbxy54D1TlqwiLHgGCgKndxxwYCVPS8B3mZaVNmDh8BZ-e6Z5TOnAEAKLlboIh7UKvp1/exec",
  // La misma clave que escribiste en TOKEN dentro de Code.gs
  token: "siv-landmark-calibration-1578",

  // ── Observadores ────────────────────────────────────────────────────────
  // Aparecen en un desplegable al entrar. "code" es el identificador que se guarda
  // en los datos: no lo cambies una vez empezado el estudio (solo letras, números o guiones).
  // "profile" ("clinico" o "no_especialista") y "experience" (años) son opcionales:
  // si los rellenas aquí, la persona ya no tiene que indicarlos en el formulario.
  // Si dejas la lista vacía ( observers: [], ) se vuelve a pedir un código escrito.
  observers: [
    { code: "OBS01", name: "Nombre Apellido 1", profile: "clinico", experience: 10 },
    { code: "OBS02", name: "Nombre Apellido 2", profile: "clinico", experience: 5 },
    { code: "OBS03", name: "Nombre Apellido 3", profile: "clinico", experience: 2 },
    { code: "OBS04", name: "Nombre Apellido 4", profile: "no_especialista" },
    { code: "OBS05", name: "Nombre Apellido 5", profile: "no_especialista" },
    { code: "OBS06", name: "Nombre Apellido 6", profile: "no_especialista" },
  ],

  // ── Comportamiento ──────────────────────────────────────────────────────
  pauseEvery: 15,      // cada cuántos modelos se propone una pausa
  showDebug: false,    // true solo para tus pruebas (coordenadas y tabla final)

  // ── Encuadre inicial de cada vista ──────────────────────────────────────
  // zoom: 1 = cabeza completa en pantalla; 2 = el doble de cerca; 1.5 = intermedio.
  // center: hacia dónde mira la cámara, como fracción de la caja del modelo
  //         [X anterior, Y izquierda, Z superior], cada valor entre 0 y 1.
  //         Para el sellion, sube Z (p. ej. 0.52) si queda bajo en pantalla.
  // Cambia esto solo antes de empezar el estudio: todos los observadores deben ver el mismo encuadre.
  views: {
    sellion: { zoom: 1.3,  center: [0.5, 0.5, 0.48] },
    tragion: { zoom: 1.45, center: [0.42, 0.5, 0.42] },
  },

  // ── Textos de ayuda de cada landmark ────────────────────────────────────
  // Aparecen en la pantalla de instrucciones y en la ficha lateral durante la anotación.
  // Puedes usar <b>negrita</b>. Si dejas un texto vacío ("") se usa el texto por defecto.
  // photo (opcional): ruta de una imagen propia subida a GitHub, p. ej. "img/sellion.jpg".
  //   Si la pones, sustituye a la imagen generada sobre el modelo de práctica.
  // photoCaption (opcional): pie de la imagen.
  landmarks: {
    sellion: {
      label: "Sellion",
      viewLabel: "Vista frontal",
      def: "Punto más profundo del ángulo nasofrontal, en la línea media, donde la frente se une con el dorso de la nariz.",
      tip: "Si te ayuda, gira el modelo de perfil para ver mejor la concavidad.",
      photo: "",
      photoCaption: "",
    },
    tragion_der: {
      label: "Tragion derecho",
      viewLabel: "Vista lateral derecha del paciente",
      def: "Punto en la escotadura situada justo por encima del trago de la oreja derecha del paciente.",
      tip: "Derecha se refiere siempre al paciente, no a tu pantalla. La cara queda a la derecha de la imagen.",
      photo: "",
      photoCaption: "",
    },
    tragion_izq: {
      label: "Tragion izquierdo",
      viewLabel: "Vista lateral izquierda del paciente",
      def: "Punto en la escotadura situada justo por encima del trago de la oreja izquierda del paciente.",
      tip: "Izquierda se refiere al paciente. En esta vista la cara queda a la izquierda de la imagen.",
      photo: "",
      photoCaption: "",
    },
  },

  // ── Punto de referencia en el modelo de práctica ───────────────────────
  // Índice del vértice (0-based) del modelo de práctica donde se dibuja cada landmark
  // en las imágenes de ejemplo. Son valores PROVISIONALES: revísalos.
  // Para obtener el tuyo: pon showDebug: true, haz el modelo de práctica, marca el punto
  // y activa "Mostrar coordenadas": el número tras la "v" es el índice del vértice.
  referencePoints: { sellion: 4844, tragion_der: 39172, tragion_izq: 64398 },

  // ── Lista "Cómo trabajar" de la pantalla de instrucciones ──────────────
  // Una línea por punto. {pausa} se sustituye por el valor de pauseEvery.
  instructions: [
    "<b>Haz clic (o toca) sobre la superficie</b> para colocar el punto. Si no te convence, vuelve a hacerlo en otro sitio: el punto se mueve.",
    "Cuando estés conforme, pulsa <b>Confirmar</b>. Antes de guardar el modelo puedes volver a un landmark confirmado pulsándolo en la lista.",
    "Al pulsar <b>Guardar y continuar</b> el modelo queda guardado y cerrado; no se puede revisar.",
    "Trabaja a tu ritmo. Te propondremos una pausa cada {pausa} modelos, y puedes cerrar la página cuando quieras: lo guardado se conserva.",
    "Derecha e izquierda son siempre <b>del paciente</b>.",
  ],
};
