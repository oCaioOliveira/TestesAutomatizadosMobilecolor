package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;
import pageObjects.TelaNotaOuCheckPage;

public class AlterarCorSteps {

	TelaInicialPage telaInicial = new TelaInicialPage(driver);
	TelaNotaOuCheckPage telaNotaCheck = new TelaNotaOuCheckPage(driver);
	
	@Quando("eu aciono o botao de opcoes de cores")
	public void euAcionoOBotaoDeOpcoesDeCores() {
		telaNotaCheck.acionarBotaoOpcoesCores();
	}

	@Quando("eu aciono o botao da cor roxa")
	public void euAcionoOBotaoDaCorRoxa() {
		telaNotaCheck.acionarBotaoCorRoxa();
	}
	
	@Quando("eu acionar o botao filtrar por cores")
	public void euAcionarOBotaoFiltrarPorCores() {
	    telaInicial.acionarBotaoFiltrarCores();
	}

	@Quando("eu acionar o botao da cor roxa")
	public void euAcionarOBotaoDaCorRoxa() {
	    telaInicial.acionarBotaoCorRoxa();
	}

	@Entao("o aplicativo deve mostrar apenas as notas com cor roxa onde esta a nota criada")
	public void oAplicativoDeveMostrarApenasAsNotasComCorRoxaOndeEstaANotaCriada() {
		assertTrue(driver.findElement(By.xpath("//android.widget.TextView[@text = 'Nota']")).isDisplayed());
	}
	
}
