import {TipoNoficacao} from "@/Interfaces/INotificacao";
import {store} from "@/store";
import {NOTIFICAR} from "@/store/tipo-mutacoes";

type Notificador = {
    notificar: (tipo: TipoNoficacao, titulo: string, texto: string) => void
}

export default () : Notificador => {

    const notificar =(tipo: TipoNoficacao, titulo: string, texto: string) : void => {
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }

    return {
        notificar
    }

}