#language: pt
#encoding: UTF-8
Funcionalidade: Criar nota no color note

  @criaNota
  Cenario: Criar uma nota
  	Quando eu aciono o botao allow
  	E aciono o botao skip
    E eu aciono o botao add note
    E eu aciono o botao text
    E eu informar no campo titulo "Nota"
    E eu acionar o botao salvar
    E eu acionar o botao voltar
    Entao o aplicativo cadastra a nota com o titulo "Nota"
