import { test, expect } from "@playwright/test";
import { EXISTING_USER, UPDATE_SHIPPING } from "../fixtures/userData";
import { CustomerInfo } from "../pom/api/customerInfo";
import { LoginApi } from "../pom/api/loginApi";
import { API_MESSAGES } from "../fixtures/pageText";

let loginAPI, customerInfo, userId, authToken;

test.describe("update shipping info", async()=>{
    test.describe('Change shipping info with API', () => {
        test.beforeEach('Login with api and store token', async ({ page }) => {
          loginAPI = new LoginApi(page);
          const loginResp = await loginAPI.loginWithApi(EXISTING_USER);
          userId = await loginResp.user.id;
          authToken = await loginResp.auth.token;
          customerInfo = new CustomerInfo(page, authToken);
          })
    })
    test('User shipping info should be updated successfully', async () => {
        const response = await customerInfo.updateShipping(userId,UPDATE_SHIPPING );
        expect(response.status).toBe(API_MESSAGES['STATUS_SUCCESS']);
        expect(response.message).toBe(API_MESSAGES['SHIPPING_INFO_SUCCESS']);
      });
})