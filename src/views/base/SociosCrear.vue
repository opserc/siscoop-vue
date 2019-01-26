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
                                v-model="modalInfo.nsocio"
                                disabled>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Nombres:">
                <b-form-input type="text"
                                v-model="modalInfo.nombre"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Apellidos:">
                <b-form-input type="text"
                                v-model="modalInfo.apellido"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Cedula de Identidad:">
                <b-form-input type="text"
                                v-model="modalInfo.cedula"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Fecha de Nacimiento:">
                <b-form-input type="text"
                                v-model="modalInfo.fnacimiento"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Fecha de Inscripción:">
                <b-form-input type="text"
                                v-model="modalInfo.fecha"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Imagen:">
                <b-form-input type="text"
                                v-model="modalInfo.imagen"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Condicion:">
                <b-form-input type="text"
                                v-model="modalInfo.condicion"
                                required>
                </b-form-input>
                </b-form-group>
                        
                <!-- BOTONES -->
                <b-button type="submit" variant="primary" @click="sociosUpdate()">Actualizar</b-button>
            </div><!-- FINALIZA EL FORMULARIO -->            
        </b-card><!-- FINALIZA EL CARD -->
    </b-col>
    <b-col md-6>
        <!-- INICIA EL CARD -->
        <b-card header="Datos Academicos"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title">
            <!-- INICIA EL FORMULARIO -->
            <div>
                <b-form-group label="N° de Asociado:"
                            description="Numero de Registro en el Libro de Asociados">
                <b-form-input type="text"
                                v-model="modalInfo.nsocio"
                                disabled>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Nombres:">
                <b-form-input type="text"
                                v-model="modalInfo.nombre"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Apellidos:">
                <b-form-input type="text"
                                v-model="modalInfo.apellido"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Cedula de Identidad:">
                <b-form-input type="text"
                                v-model="modalInfo.cedula"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Fecha de Nacimiento:">
                <b-form-input type="text"
                                v-model="modalInfo.fnacimiento"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Fecha de Inscripción:">
                <b-form-input type="text"
                                v-model="modalInfo.fecha"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Imagen:">
                <b-form-input type="text"
                                v-model="modalInfo.imagen"
                                required>
                </b-form-input>
                </b-form-group>
                <b-form-group label="Condicion:">
                <b-form-input type="text"
                                v-model="modalInfo.condicion"
                                required>
                </b-form-input>
                </b-form-group>
                      
                <!-- BOTONES -->
                <b-button type="submit" variant="primary" @click="sociosUpdate()">Actualizar</b-button>
            </div><!-- FINALIZA EL FORMULARIO -->            
        </b-card><!-- FINALIZA EL CARD -->
    </b-col>
    
</b-row>
</template>

<script>
//importar axios
import axios from 'axios'
import { format } from 'timeago.js'

const items = []

export default {  

  name: 'socios',
  data () {
    return {      
      
      mensajeRespuesta: '',
      items: [],
      fields: [
        { key: 'nsocio', label: 'Numero de Asociado', sortable: true, sortDirection: 'desc' },
        { key: 'nombre', label: 'Nombres', 'class': 'text-center' },
        { key: 'apellido', label: 'Apellidos', 'class': 'text-center' },
        { key: 'cedula', label: 'Cedula de Identidad', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', id: '', nsocio: '', nombre: '', apellido: '', cedula: '', fecha: '', condicion: '', fnacimiento: '', imagen: '', mensaje: '' }
    }
  },
  mounted () {
    this.sociosAll();
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, button) {
        const fecha = format(item.fecha);
        console.log(fecha)
      this.modalInfo.id = item.id
      this.modalInfo.nsocio = item.nsocio
      this.modalInfo.nombre = item.nombre
      this.modalInfo.apellido = item.apellido
      this.modalInfo.cedula = item.cedula
      this.modalInfo.fecha = fecha
      this.modalInfo.condicion = item.condicion
      this.modalInfo.fnacimiento = item.fnacimiento
      this.modalInfo.imagen = item.imagen
      this.modalInfo.mensaje = this.mensajeRespuesta
      this.modalInfo.title = 'Actualizando Asociado'

      this.$root.$emit('bv::show::modal', 'modalInfo', button)
      
    },
    handleSubmit () {
      this.$refs.modal.hide()
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    sociosAll () {
      axios.get('http://localhost:3000/api/socios')
        .then(
          result => {
            this.items = result.data;
          }
        )
    },
    sociosUpdate () {
      let id = this.modalInfo.id
      let nsocio = this.modalInfo.nsocio
      let nombre = this.modalInfo.nombre
      let apellido = this.modalInfo.apellido
      let cedula = this.modalInfo.cedula
      let fecha = this.modalInfo.fecha
      let condicion = this.modalInfo.condicion
      let fnacimiento = this.modalInfo.fnacimiento
      let imagen = this.modalInfo.imagen
      axios.put('http://localhost:3000/api/socios/'+id, {nsocio:nsocio, nombre:nombre, apellido:apellido, cedula:cedula, fecha:fecha, condicion:condicion, fnacimiento:fnacimiento, imagen:imagen})
        .then( (res) => {
          this.sociosAll()
          this.mensajeRespuesta = res.data.message
          this.handleSubmit()
          console.log(res.data.message)
          console.log(this.mensajeRespuesta)

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
