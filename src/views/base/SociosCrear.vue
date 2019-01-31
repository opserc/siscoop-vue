<template>
<b-row>
    <b-col md-6>
        <!-- INICIA EL CARD -->
        <b-card header="Datos Personales"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title">
            <!-- INICIA EL FORMULARIO -->
            <div>
                <b-form-group label="N° de Asociado:"
                            description="Numero de Registro en el Libro de Asociados">
                <b-form-input type="text"
                                v-model="nsocio"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Nombres:">
                <b-form-input type="text"
                                v-model="nombre"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Apellidos:">
                <b-form-input type="text"
                                v-model="apellido"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Cedula de Identidad:">
                <b-form-input type="text"
                                v-model="cedula"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Fecha de Nacimiento:">
                <b-form-input type="text"
                                v-model="fnacimiento"
                                required>
                </b-form-input>
                </b-form-group>                
                <b-form-group label="Imagen:">
                <b-form-input type="text"
                                v-model="imagen"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Condicion:">
                <b-form-input type="text"
                                v-model="condicion"
                                required>
                </b-form-input>
                </b-form-group>
                        
                <!-- BOTONES -->
                <b-button type="submit" variant="primary" @click.prevent="sociosAdd()">Inscribir</b-button>
            </div><!-- FINALIZA EL FORMULARIO -->            
        </b-card><!-- FINALIZA EL CARD -->
    </b-col>
    
    
</b-row>
</template>

<script>
//importar axios
import axios from 'axios'

export default {  

  name: 'socios',
  data () {
    return {      
      
      mensajeRespuesta: '',
      nsocio: '',
      nombre: '',
      apellido: '',
      cedula: '',
      condicion: '',
      fnacimiento: '',
      imagen: ''
        
    }
  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {  
    
    sociosAdd () {
      let nsocio = this.nsocio
      let nombre = this.nombre
      let apellido = this.apellido
      let cedula = this.cedula
      let condicion = this.condicion
      let fnacimiento = this.fnacimiento
      let imagen = this.imagen
      axios.post('http://localhost:3000/api/socios/', {nsocio:nsocio, nombre:nombre, apellido:apellido, cedula:cedula, condicion:condicion, fnacimiento:fnacimiento, imagen:imagen})
        .then( (res) => {
          this.mensajeRespuesta = res.data.message
          console.log(res.data.message)

        })
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
