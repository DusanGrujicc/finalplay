import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pom/api/ui/registerPage";
import { LoginPage } from "../pom/api/ui/loginPage";
import { URLS , HEADING} from "../fixtures/pages";
import { generateUserCredentials } from "../fixtures/userData";


let  loginEmail , loginPassword
test.describe.configure({ mode: "serial" });
test.describe("register a user", ()=>{
    
    test.beforeEach('Visit Home Page and instantiate class', async ({ page }) => {
        await page.goto(`${URLS.REGISTER}`);
        await expect(page).toHaveURL(/.*register/);
    });

    test("Register a new user", async ({page})=>{
        const { username, email, password } = generateUserCredentials(6);
        loginEmail = email
        loginPassword = password
        const registerPage = new RegisterPage(page);

        await page.goto(URLS.REGISTER);
        await expect(page.locator('h1')).toBeVisible();

        registerPage.register(username,email,password);

        await page.waitForURL(URLS.DASHBOARD)
        await expect(page.getByText(HEADING.DASHBOARD)).toBeVisible();
    })
    test("log in with registered user", async ({ page }) => {
        await page.goto(URLS.LOGIN);
        await expect(page.locator("h1")).toBeVisible();
        await expect(page.locator("h1")).toHaveText(HEADING.LOGIN);
    
        const loginPage = new LoginPage(page);
    
        loginPage.login(loginEmail, loginPassword);
    
        await page.waitForURL(URLS.DASHBOARD);
        await expect(page.getByText(HEADING.DASHBOARD)).toBeVisible();
      });
})