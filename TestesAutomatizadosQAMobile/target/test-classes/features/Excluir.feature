#language: pt
#encoding: UTF-8
Funcionalidade: excluir uma nota ou checklist

  @excluirNota
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
    Entao a nota excluida deve estar na lixeira provando que foi excluida
