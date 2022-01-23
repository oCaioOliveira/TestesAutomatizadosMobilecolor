#language: pt
#encoding: UTF-8
Funcionalidade: Marcar como concluido itens de uma lista

  @marcarConcluido
  Cenario: marcar como concluido
  	Quando eu aciono o botao allow
  	E aciono o botao skip
    E eu aciono o botao add note
    E eu aciono o botao checklist
    E eu informar no campo da lista titulo "Check"
    E eu aciono o botao add item
    E eu informar no campo item "acordar"
    E eu aciono o botao ok
    E eu acionar o botao salvar
    E eu acionar o campo onde esta escrito minha tarefa
    Entao o aplicativo deve marcar a tarefa como concluida
