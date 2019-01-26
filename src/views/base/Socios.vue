<template>
<b-card-group deck>
        <b-card header="Listado de Asociados Completo"
                header-tag="header"
                title="Asociados">
            <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Buscar Asociado" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Buscar Asociado" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Limpiar</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filtrar" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- Ninguno --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Paginado" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
    >
      <!-- AQUI SE IMPRIMEN AUTOMATICAMENTE LOS CAMPOS DEBIDO A LOS SLOT DE LA TABLA -->
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card-group deck>
            <b-col cols="8">
              <b-card title="Datos Completos">
              <ul>
                <li> {{row}}</li>
                <li>Nombres: {{modalInfo.nombre}}</li>
                <li>Apellidos: {{modalInfo.apellido}}</li>
                <li>Cedula de Identidad: {{modalInfo.cedula}}</li>
                <li>Fecha de Nacimiento: {{modalInfo.fnacimiento}}</li>
                <li>Condición: {{modalInfo.condicion}}</li>
                <li>Fecha de Ingreso: {{modalInfo.fecha}}</li>
                
              </ul>
            </b-card>
            </b-col>
            <b-col cols="4">
              <b-card>
                <!-- COLOCAR LA IMAGEN -->                
                  <b-img :src="modalInfo.imagen" fluid :alt="'Foto del Asociado N° '+modalInfo.imagen" />
              </b-card>
            </b-col>                  
        </b-card-group>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" :title="modalInfo.title" ref="modal" hide-footer>
      
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
      
    </b-modal>

  </b-container>
        </b-card>
</b-card-group>  
</template>

<script>
//importar axios
import axios from 'axios'
const moment = require('moment');

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

      let fecha = moment(item.fecha).format('DD/MM/YYYY')
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
    infoDetails (item) {

      let fecha = moment(item.fecha).format('DD/MM/YYYY')
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
      detailsShowing = true
      
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
      axios.get('https://opserc.herokuapp.com/api/socios')
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
      let condicion = this.modalInfo.condicion
      let fnacimiento = this.modalInfo.fnacimiento
      let imagen = this.modalInfo.imagen
      axios.put('https://opserc.herokuapp.com/api/socios/'+id, {nsocio:nsocio, nombre:nombre, apellido:apellido, cedula:cedula, condicion:condicion, fnacimiento:fnacimiento, imagen:imagen})
        .then( (res) => {
          this.sociosAll()
          this.mensajeRespuesta = res.data.message
          this.handleSubmit()

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
