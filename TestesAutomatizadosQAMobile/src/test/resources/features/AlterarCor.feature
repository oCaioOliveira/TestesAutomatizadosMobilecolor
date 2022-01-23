#language: pt
#encoding: UTF-8
Funcionalidade: Alterar a cor de uma nota no color note

	@alteraCor
  Cenario: alterar a cor
  	Quando eu aciono o botao allow
  	E aciono o botao skip
    E eu aciono o botao add note
    E eu aciono o botao text
    E eu informar no campo titulo "Nota"
    E eu aciono o botao de opcoes de cores
    E eu aciono o botao da cor roxa
    E eu acionar o botao salvar
    E eu acionar o botao voltar
    E eu acionar o botao filtrar por cores
    E eu acionar o botao da cor roxa
    Entao o aplicativo deve mostrar apenas as notas com cor roxa onde esta a nota criada
