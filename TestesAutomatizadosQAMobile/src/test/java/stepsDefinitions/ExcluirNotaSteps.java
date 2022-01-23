package stepsDefinitions;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;
import pageObjects.TelaMenuPage;

public class ExcluirNotaSteps {

	TelaInicialPage telaInicial = new TelaInicialPage(driver);
	TelaMenuPage telaMenu = new TelaMenuPage(driver);
	
	@Quando("eu deixar pressionado na nota criada")
	public void euDeixarPressionadoNaNotaCriada() {
	    telaInicial.segurarNotaCriada();
	}

	@Quando("eu acionar o botao delete")
	public void euAcionarOBotaoDelete() {
	    telaInicial.acionarBotaoDelete();
	}

	@Quando("eu acionar o botao ok")
	public void euAcionarOBotaoOk() {
	   telaInicial.acionarBotaoOk();
	}
	
	@Quando("eu acionar o botao menu")
	public void euAcionarOBotaoMenu() {
	    telaInicial.acionarBotaoMenu();
	}

	@Quando("eu acionar o botao lixeira")
	public void euAcionarOBotaoLixeira() {
	    telaMenu.acionarBotaoLixeira();
	}

	@Entao("a nota excluida deve estar na lixeira provando que foi excluida")
	public void aNotaExcluidaDeveEstarNaLixeiraProvandoQueFoiExcluida() {
		assertTrue(driver.findElement(By.xpath("//android.widget.TextView[@text = 'Nota']")).isDisplayed());
	}

}
