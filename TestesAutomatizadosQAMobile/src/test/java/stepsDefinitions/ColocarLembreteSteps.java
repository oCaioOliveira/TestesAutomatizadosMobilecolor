package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaNotaOuCheckPage;
import pageObjects.TelaOpcoesPage;

public class ColocarLembreteSteps {

	TelaNotaOuCheckPage telaNotaCheck = new TelaNotaOuCheckPage(driver);
	TelaOpcoesPage telaOpcoesPage = new TelaOpcoesPage(driver);
	
	@Quando("eu aciono o botao opcoes")
	public void euAcionoOBotaoOpcoes() {
	    telaNotaCheck.acionarBotaoOpcoes();
	}

	@Quando("eu aciono o botao reminder")
	public void euAcionoOBotaoReminder() {
	    telaNotaCheck.acionarBotaoReminder();
	}

	@Quando("eu aciono o botao reminder in fifteen minutes")
	public void euAcionoOBotaoReminderInFifteenMinutes() {
	    telaOpcoesPage.acionarBotaoRemind();
	}

	@Quando("eu aciono o botao done")
	public void euAcionoOBotaoDone() {
	    telaOpcoesPage.acionarBotaoDone();
	}

	@Entao("o aplicativo deve mostrar um relogio indicando o tempo para o lembrete ativar")
	public void oAplicativoDeveMostrarUmRelogioIndicandoOTempoParaOLembreteAtivar() {
		assertEquals(619 ,driver.findElement(By.id("com.socialnmobile.dictapps.notepad.color.note:id/datetime_absolute")).getLocation().getX());
	}
	
}
