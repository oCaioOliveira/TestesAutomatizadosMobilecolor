#language: pt
#encoding: UTF-8
Funcionalidade: Colocar lembrete na nota ou checklist

  @colocarLembrete
  Cenario: Colocar lembrete na nota de quinze minutos
  	Quando eu aciono o botao allow
  	E aciono o botao skip
    E eu aciono o botao add note
    E eu aciono o botao text
    E eu aciono o botao opcoes
    E eu aciono o botao reminder
    E eu aciono o botao reminder in fifteen minutes
    E eu aciono o botao done
    Entao o aplicativo deve mostrar um relogio indicando o tempo para o lembrete ativar
