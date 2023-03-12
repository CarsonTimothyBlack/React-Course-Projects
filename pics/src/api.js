import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID you0_KtKkolpPOkOc7eWw4Ycqbaf7TXpzC7HVBqZmSM'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;