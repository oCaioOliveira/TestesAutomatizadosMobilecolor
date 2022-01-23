package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaNotaOuCheckPage {

	public TelaNotaOuCheckPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note")
	private MobileElement campoTitulo;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_title")
	private MobileElement campoCheck;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/edit")
	private MobileElement campoItem;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/back_btn")
	private MobileElement botaoSalvar;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/back_btn")
	private MobileElement botaoVoltar;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/color_btn")
	private MobileElement botaoOpcoesCores;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/txt6")
	private MobileElement botaoCorRoxa;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/text")
	private MobileElement botaoAddItem;
	
	@AndroidFindBy(id = "android:id/button1")
	private MobileElement botaoOk;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/text")
	private MobileElement botaoItem;
	
	@AndroidFindBy(accessibility = "More")
	private MobileElement botaoOpcoes;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/text")
	private MobileElement botaoReminder;
	
	public void informarCampoTitulo(String titulo) {
		campoTitulo.sendKeys(titulo);
	}
	
	public void informarCampoCheck(String check) {
		campoCheck.sendKeys(check);
	}
	
	public void informarCampoItem(String item) {
		campoItem.sendKeys(item);
	}
	
	public void acionarBotaoSalvar() {
		botaoSalvar.click();
	}
	
	public void acionarBotaoVoltar() {
		botaoVoltar.click();
	}
	
	public void acionarBotaoOpcoesCores() {
		botaoOpcoesCores.click();
	}
	
	public void acionarBotaoCorRoxa() {
		botaoCorRoxa.click();
	}
	
	public void acionarBotaoAddItem() {
		botaoAddItem.click();
	}
	
	public void acionarBotaoOk() {
		botaoOk.click();
	}
	
	public void acionarBotaoItem() {
		botaoItem.click();
	}
	
	public void acionarBotaoReminder() {
		botaoReminder.click();
	}
	
	public void acionarBotaoOpcoes() {
		botaoOpcoes.click();
	}
	
}
