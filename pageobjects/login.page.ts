import { $ } from '@wdio/globals'



class LoginPage {
   
    
    public get loginButton(){
        return $('~Login');

    }    
    public get inputUsername () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    async setUser(username: string){
        await this.inputUsername.setValue(username);
    }

    async setPass (pass: string){
        await this.inputPassword.setValue(pass);
    }

    async clickButton(){
        await this.btnSubmit.click();
    }

}

export default new LoginPage(); 
