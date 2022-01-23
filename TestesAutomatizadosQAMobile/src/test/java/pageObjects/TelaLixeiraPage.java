package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaLixeiraPage {

	public TelaLixeiraPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text = 'Nota']")
	private MobileElement notaExcluida;
	
	@AndroidFindBy(accessibility = "Permanently delete")
	private MobileElement botaoDelete;
	
	public void segurarNotaCriada() {
		Actions acao = new Actions(driver);
		acao.clickAndHold(notaExcluida).perform();
	}
	
	public void acionarBotaoDelete() {
		botaoDelete.click();
	}
	
}
