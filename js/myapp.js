const list = [];



const app = Vue.createApp({
  data() {
    return {
      milistado: list,
      nombre: "",
      apellido: "",
      edad: "",
      ciudad: ""
    };
  },

  methods: {
    agregarEstudiante() {
      const nuevoEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        ciudad: this.ciudad,
      };
      this.milistado.unshift(nuevoEstudiante);
      this.nombre= "";
      this.apellido= "";
      this.edad= "";
      this.ciudad= "";
    },
  },
});

app.mount("#myFormulario");
