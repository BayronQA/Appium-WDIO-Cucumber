import { Given, When, Then,  } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import AlertPage from '../pageobjects/alert.page.js';


Given("que estoy en la pantalla de inicio", async () => {

  //await browser.debug();
});

When("hago clic en el botón de Iniciar sesión", async () =>{
    await LoginPage.loginButton.click();
})

When("ingreso mi nombre de usuario {string} e ingreso mi contraseña {string}", async (user:string, pass: string) =>{
    await LoginPage.setUser(user)
    await LoginPage.setPass(pass)
})

When("hago clic en el botón Iniciar sesión", async () =>{
    await LoginPage.clickButton();
})

Then("debo ver el mensaje que me diga que estoy logeado", async () =>{
    await expect(AlertPage.messageAlert).toHaveText(expect.stringContaining(
        'You are logged in!'));
})