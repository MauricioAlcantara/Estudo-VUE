import IProjeto from "@/Interfaces/IProjeto";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}
