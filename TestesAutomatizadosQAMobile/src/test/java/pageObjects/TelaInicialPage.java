package pageObjects;

import static utils.Utils.driver;

import java.util.List;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaInicialPage {

	public TelaInicialPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(accessibility = "Add")
	private MobileElement botaoAddNote;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text = 'Text']")
	private MobileElement botaoText;
	
	@AndroidFindBy(id = "com.android.packageinstaller:id/permission_allow_button")
	private MobileElement botaoAllow;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip")
	private MobileElement botaoSkip;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text = 'Checklist']")
	private MobileElement botaoCheckList;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text = 'Nota']")
	private MobileElement notaCriada;
	
	@AndroidFindBy(accessibility = "Delete")
	private MobileElement botaoDelete;
	
	@AndroidFindBy(id = "android:id/button1")
	private MobileElement botaoOk;
	
	@AndroidFindBy(accessibility = "More")
	private MobileElement botaoMenu;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/main_btn1")
	private MobileElement botaoFiltrarCores;
	
	@AndroidFindBy(xpath = "//android.widget.GridView//android.widget.LinearLayout")
	private List<MobileElement> cores;
	
	public void acionarBotaoAddNote() {
		botaoAddNote.click();
	}
	
	public void acionarBotaoText() {
		botaoText.click();
	}
	
	public void acionarBotaoAllow() {
		botaoAllow.click();
	}
	
	public void acionarBotaoSkip() {
		botaoSkip.click();
	}
	
	public void acionarBotaoCheckList() {
		botaoCheckList.click();
	}
	
	public void acionarBotaoFiltrarCores() {
		botaoFiltrarCores.click();
	}
	
	public void acionarBotaoDelete() {
		botaoDelete.click();
	}
	
	public void acionarBotaoOk() {
		botaoOk.click();
	}
	
	public void acionarBotaoMenu() {
		botaoMenu.click();
	}
	
	public void acionarBotaoCorRoxa() {
		cores.get(6).click();
	}
	
	public void segurarNotaCriada() {
		Actions acao = new Actions(driver);
		acao.clickAndHold(notaCriada).perform();
	}
	
}
