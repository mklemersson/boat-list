import { gql } from "apollo-boost";
import ApiClient from './ApiClient';

class BoatApiService {
    static async getActiveBoats() {
        const FETCH_ACTIVE_BOATS_QUERY = gql`
            query {
                getBoats(input: { active: true }) {
                    id,
                    name,
                    year,
                    price,
                    cabins,
                    country,
                    locality,
                    length,
                    guests,
                    imageUrl,
                    reviews {
                      total
                    }
                }
            }
        `;

        const boatsResponse = await ApiClient.query({ query: FETCH_ACTIVE_BOATS_QUERY });

        return boatsResponse.data.getBoats;
    }
}

export default BoatApiService;
