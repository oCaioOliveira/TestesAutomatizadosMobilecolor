package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;
import pageObjects.TelaNotaOuCheckPage;

public class MarcarConcluidoSteps {

	TelaInicialPage telaInicial = new TelaInicialPage(driver);
	TelaNotaOuCheckPage telaNotaCheck = new TelaNotaOuCheckPage(driver);
	
	@Quando("eu aciono o botao checklist")
	public void euAcionoOBotaoChecklist() {
	    telaInicial.acionarBotaoCheckList();
	}
	
	@Quando("eu informar no campo da lista titulo {string}")
	public void euInformarNoCampoDaListaTitulo(String string) {
	    telaNotaCheck.informarCampoCheck(string);
	}

	@Quando("eu aciono o botao add item")
	public void euAcionoOBotaoAddItem() {
	    telaNotaCheck.acionarBotaoAddItem();
	}
	
	@Quando("eu informar no campo item {string}")
	public void euInformarNoCampoItem(String string) {
		telaNotaCheck.informarCampoItem(string);
	}


	@Quando("eu aciono o botao ok")
	public void euAcionoOBotaoOk() {
	   telaNotaCheck.acionarBotaoOk();
	}

	@Quando("eu acionar o campo onde esta escrito minha tarefa")
	public void euAcionarOCampoOndeEstaEscritoMinhaTarefa() {
	    telaNotaCheck.acionarBotaoItem();
	}

	@Entao("o aplicativo deve marcar a tarefa como concluida")
	public void oAplicativoDeveMarcarATarefaComoConcluida() {
		assertTrue(driver.findElement(By.id("com.socialnmobile.dictapps.notepad.color.note:id/image")).isDisplayed());
	}
	
}
