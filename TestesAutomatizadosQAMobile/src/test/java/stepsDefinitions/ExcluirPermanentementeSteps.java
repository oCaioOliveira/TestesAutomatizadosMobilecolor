package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaLixeiraPage;

public class ExcluirPermanentementeSteps {

	TelaLixeiraPage telaLixeira = new TelaLixeiraPage(driver);
	
	@Quando("eu deixar pressionado na nota criada que esta na lixeira")
	public void euDeixarPressionadoNaNotaCriadaQueEstaNaLixeira() {
	    telaLixeira.segurarNotaCriada();
	}

	@Quando("eu acionar o botao permanently delete para deletar permanentemente a nota")
	public void euAcionarOBotaoPermanentlyDeleteParaDeletarPermanentementeANota() {
	    telaLixeira.acionarBotaoDelete();
	}

	@Entao("a nota excluida devera ser permanentemente exlcuida da lixeira")
	public void aNotaExcluidaDeveraSerPermanentementeExlcuidaDaLixeira() {
		assertEquals("false", driver.findElement(By.id("com.socialnmobile.dictapps.notepad.color.note:id/list"))
				.getAttribute("focused"));
	}
	
}
