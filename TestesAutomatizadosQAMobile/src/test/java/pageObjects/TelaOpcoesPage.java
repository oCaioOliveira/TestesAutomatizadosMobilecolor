package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaOpcoesPage {

	public TelaOpcoesPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/quick_setting_15min")
	private MobileElement botaoRemind;
	
	@AndroidFindBy(id = "com.socialnmobile.dictapps.notepad.color.note:id/button1")
	private MobileElement botaoDone;
	
	public void acionarBotaoRemind() {
		botaoRemind.click();
	}
	
	public void acionarBotaoDone() {
		botaoDone.click();
	}
	
}
