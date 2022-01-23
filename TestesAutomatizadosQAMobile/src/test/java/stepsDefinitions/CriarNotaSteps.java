package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;
import pageObjects.TelaNotaOuCheckPage;

public class CriarNotaSteps {

	TelaInicialPage telaInicial = new TelaInicialPage(driver);
	TelaNotaOuCheckPage telaNotaCheck = new TelaNotaOuCheckPage(driver);

	@Quando("eu aciono o botao allow")
	public void euAcionoOBotaoAllow() {
	    telaInicial.acionarBotaoAllow();
	}

	@Quando("aciono o botao skip")
	public void acionoOBotaoSkip() {
	    telaInicial.acionarBotaoSkip();
	}
	
	@Quando("eu aciono o botao add note")
	public void euAcionoOBotaoAddNote() {
		telaInicial.acionarBotaoAddNote();
	}

	@Quando("eu aciono o botao text")
	public void euAcionoOBotaoText() {
		telaInicial.acionarBotaoText();
	}

	@Quando("eu informar no campo titulo {string}")
	public void euInformarNoCampoTitulo(String titulo) {
		telaNotaCheck.informarCampoTitulo(titulo);
	}

	@Quando("eu acionar o botao salvar")
	public void euAcionarOBotaoSalvar() {
		telaNotaCheck.acionarBotaoSalvar();
	}
	
	@Quando("eu acionar o botao voltar")
	public void euAcionarOBotaoVoltar() {
		telaNotaCheck.acionarBotaoVoltar();
	}

	@Entao("o aplicativo cadastra a nota com o titulo {string}")
	public void oAplicativoCadastraANotaComOTitulo(String string) {
		assertEquals(string, driver.findElement(By.xpath("//android.widget.TextView[@text = 'Nota']")).getText());
	}

}
