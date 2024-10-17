import { API_ENDPOINTS } from "../../fixtures/http";
import { BaseAPI } from "./baseApi";

export class CustomerInfo extends BaseAPI {
    constructor (page ,token='') {
        super (page, token)
        this.endpoint = API_ENDPOINTS["CUSTOMERS_ENDPOINT"];

    }
    async getShippingInfo(id , payload) {
        const response = await this.page.request.get(
            `${endpoint}/${id}/shipping-info`,
            {
              headers: this.getHeaders(),
              data: payload,
            
            }
          );
          const responseJson = await response.json();
          return responseJson;
        }
        
    async updateShipping(id, payload) {
        const response = await this.page.request.put(
          `${API_ENDPOINTS['CUSTOMERS_ENDPOINT']}/${id}/shipping-info`,
          {
            headers: this.getHeaders(),
            data: payload,
          }
        );
        const responseJson = await response.json();
        return responseJson;
      }
    }