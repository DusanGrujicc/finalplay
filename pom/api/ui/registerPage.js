export class RegisterPage {
    constructor (page){
        this.page = page 
        this.heading = page.locator('h1');
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.emailInput = page.locator('#email');
        this.submitButton = page.locator('button');
    }

    async register(username,email,password){
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
      }
}