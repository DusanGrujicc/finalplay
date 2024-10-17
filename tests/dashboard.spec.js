import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/api/ui/loginPage";
import { Dashboard } from "../pom/api/ui/dashboard";
import { ENDPOINTS } from "../fixtures/http";
import { HEADING } from "../fixtures/pageText";
import { EXISTING_USER } from "../fixtures/userData";


let loginPage, dashboard;

test.describe('add to carts tests',()=>{
    test.beforeEach('Login and instantiate class', async({page})=>{
        loginPage = new LoginPage(page)
        dashboard = new Dashboard(page)
        await page.goto(ENDPOINTS.LOGIN)
        await expect(page.locator('h1')).toHaveText(HEADING.LOGIN);
        await loginPage.login(
            EXISTING_USER['email'],
            EXISTING_USER['password']
          );
    })
   
    test('Add products to cart', async ({ page }) => {
        await dashboard.navigateToPage(4);
        await dashboard.addProductToCart();
        await expect(page.locator(dashboard.cartButton).first()).toHaveText('1');
        await dashboard.navigateToPage(1);
        await dashboard.addProductToCart();
        await dashboard.addProductToCart();
        await expect(page.locator(dashboard.cartButton).first()).toHaveText('3');
        
      });
})