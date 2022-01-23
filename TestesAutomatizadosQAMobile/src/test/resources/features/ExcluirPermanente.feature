#language: pt
#encoding: UTF-8
Funcionalidade: excluir uma nota ou checklist permanentemente

  @excluirNotaPermanente
  Cenario: excluir uma nota
  	Quando eu aciono o botao allow
  	E aciono o botao skip
    E eu aciono o botao add note
    E eu aciono o botao text
    E eu informar no campo titulo "Nota"
    E eu acionar o botao salvar
    E eu acionar o botao voltar
    E eu deixar pressionado na nota criada
    E eu acionar o botao delete
    E eu acionar o botao ok
    E eu acionar o botao menu
    E eu acionar o botao lixeira
    E eu deixar pressionado na nota criada que esta na lixeira
    E eu acionar o botao permanently delete para deletar permanentemente a nota
    E eu acionar o botao ok
    Entao a nota excluida devera ser permanentemente exlcuida da lixeira
