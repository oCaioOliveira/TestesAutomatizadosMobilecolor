$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AlterarCor.feature");
formatter.feature({
  "name": "Alterar a cor de uma nota no color note",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "alterar a cor",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@alteraCor"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao text",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo titulo \"Nota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao de opcoes de cores",
  "keyword": "E "
});
formatter.match({
  "location": "AlterarCorSteps.euAcionoOBotaoDeOpcoesDeCores()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao da cor roxa",
  "keyword": "E "
});
formatter.match({
  "location": "AlterarCorSteps.euAcionoOBotaoDaCorRoxa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao filtrar por cores",
  "keyword": "E "
});
formatter.match({
  "location": "AlterarCorSteps.euAcionarOBotaoFiltrarPorCores()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao da cor roxa",
  "keyword": "E "
});
formatter.match({
  "location": "AlterarCorSteps.euAcionarOBotaoDaCorRoxa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo deve mostrar apenas as notas com cor roxa onde esta a nota criada",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlterarCorSteps.oAplicativoDeveMostrarApenasAsNotasComCorRoxaOndeEstaANotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ColocarLembrete.feature");
formatter.feature({
  "name": "Colocar lembrete na nota ou checklist",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Colocar lembrete na nota de quinze minutos",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@colocarLembrete"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao text",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao opcoes",
  "keyword": "E "
});
formatter.match({
  "location": "ColocarLembreteSteps.euAcionoOBotaoOpcoes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao reminder",
  "keyword": "E "
});
formatter.match({
  "location": "ColocarLembreteSteps.euAcionoOBotaoReminder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao reminder in fifteen minutes",
  "keyword": "E "
});
formatter.match({
  "location": "ColocarLembreteSteps.euAcionoOBotaoReminderInFifteenMinutes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao done",
  "keyword": "E "
});
formatter.match({
  "location": "ColocarLembreteSteps.euAcionoOBotaoDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo deve mostrar um relogio indicando o tempo para o lembrete ativar",
  "keyword": "Entao "
});
formatter.match({
  "location": "ColocarLembreteSteps.oAplicativoDeveMostrarUmRelogioIndicandoOTempoParaOLembreteAtivar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CriarNota.feature");
formatter.feature({
  "name": "Criar nota no color note",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Criar uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@criaNota"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao text",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo titulo \"Nota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo cadastra a nota com o titulo \"Nota\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oAplicativoCadastraANotaComOTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Excluir.feature");
formatter.feature({
  "name": "excluir uma nota ou checklist",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "excluir uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@excluirNota"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao text",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo titulo \"Nota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu deixar pressionado na nota criada",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euDeixarPressionadoNaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao delete",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoDelete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao menu",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao lixeira",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoLixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a nota excluida deve estar na lixeira provando que foi excluida",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExcluirNotaSteps.aNotaExcluidaDeveEstarNaLixeiraProvandoQueFoiExcluida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ExcluirPermanente.feature");
formatter.feature({
  "name": "excluir uma nota ou checklist permanentemente",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "excluir uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@excluirNotaPermanente"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao text",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo titulo \"Nota\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu deixar pressionado na nota criada",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euDeixarPressionadoNaNotaCriada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao delete",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoDelete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao menu",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao lixeira",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoLixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu deixar pressionado na nota criada que esta na lixeira",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirPermanentementeSteps.euDeixarPressionadoNaNotaCriadaQueEstaNaLixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao permanently delete para deletar permanentemente a nota",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirPermanentementeSteps.euAcionarOBotaoPermanentlyDeleteParaDeletarPermanentementeANota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "ExcluirNotaSteps.euAcionarOBotaoOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a nota excluida devera ser permanentemente exlcuida da lixeira",
  "keyword": "Entao "
});
formatter.match({
  "location": "ExcluirPermanentementeSteps.aNotaExcluidaDeveraSerPermanentementeExlcuidaDaLixeira()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/MarcarConcluido.feature");
formatter.feature({
  "name": "Marcar como concluido itens de uma lista",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "marcar como concluido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@marcarConcluido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao allow",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAllow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aciono o botao skip",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.acionoOBotaoSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add note",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionoOBotaoAddNote()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao checklist",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euAcionoOBotaoChecklist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo da lista titulo \"Check\"",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euInformarNoCampoDaListaTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao add item",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euAcionoOBotaoAddItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo item \"acordar\"",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euInformarNoCampoItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aciono o botao ok",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euAcionoOBotaoOk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao salvar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o campo onde esta escrito minha tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "MarcarConcluidoSteps.euAcionarOCampoOndeEstaEscritoMinhaTarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo deve marcar a tarefa como concluida",
  "keyword": "Entao "
});
formatter.match({
  "location": "MarcarConcluidoSteps.oAplicativoDeveMarcarATarefaComoConcluida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
});