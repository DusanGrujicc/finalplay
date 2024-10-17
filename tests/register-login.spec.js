import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pom/api/ui/registerPage";
import { LoginPage } from "../pom/api/ui/loginPage";
import { HEADING} from "../fixtures/pageText";
import { generateUserCredentials } from "../fixtures/userData";
import { ENDPOINTS } from "../fixtures/http";


let  loginEmail , loginPassword
test.describe.configure({ mode: "serial" });
test.describe("register and login user", ()=>{
    
    test.beforeEach('Visit Home Page and instantiate class', async ({ page }) => {
        await page.goto(ENDPOINTS.REGISTER);
        await expect(page).toHaveURL(/.*register/);
    });

    test("Register a new user", async ({page})=>{
        const { username, email, password } = generateUserCredentials(6);
        loginEmail = email
        loginPassword = password
        const registerPage = new RegisterPage(page);

        await page.goto(ENDPOINTS.REGISTER);
        await expect(page.locator('h1')).toBeVisible();

        registerPage.register(username,email,password);

        await page.waitForURL(ENDPOINTS.DASHBOARD)
        await expect(page.getByText(HEADING.DASHBOARD)).toBeVisible();
    })
    test("log in with registered user", async ({ page }) => {
        await page.goto(ENDPOINTS.LOGIN);
        await expect(page.locator("h1")).toBeVisible();
        await expect(page.locator("h1")).toHaveText(HEADING.LOGIN);
    
        const loginPage = new LoginPage(page);
    
        loginPage.login(loginEmail, loginPassword);
    
        await page.waitForURL(ENDPOINTS.DASHBOARD);
        await expect(page.getByText(HEADING.DASHBOARD)).toBeVisible();
      });
      
    test("update shipping info ", async({page})=>{
        
    })
})