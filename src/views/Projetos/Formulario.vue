<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
        </label>
        <input
            type="text"
            class="input"
            v-model="nomeDoProjeto"
            id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/store";
import {ADICIONAR_PROJETO, ALTERAR_PROJETO, NOTIFICAR} from "@/store/tipo-mutacoes"
import {TipoNoficacao} from "@/Interfaces/INotificacao";
import useNotificador from "@/hooks/notificador"

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Formulario',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if(this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data () {
    return {
      nomeDoProjeto: ""
    };
  },
  methods: {
    salvar () {
      if (this.id) {
        this.store.commit(ALTERAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONAR_PROJETO, this.nomeDoProjeto)
      }

      this.nomeDoProjeto = "";
      this.notificar(TipoNoficacao.SUCESSO, 'Excelente', 'O projeto foi cadastrado com sucesso!')
      this.$router.push('/projetos')
    }
  },
  setup () {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
});

</script>