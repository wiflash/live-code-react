import createStore from "unistore";
import axios from "axios";


const initialState = {
    apiKey: "",
    email: "",
    username: "",
    password: "",
    fullname: "",
    loginKah: false,
    listNews: [],
    sideListNews: [],
    keyword: "",
    loadingKah: true,
    sideLoadingKah: true
};

export const store = createStore(initialState);


const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

export const actions = store => ({
    handleSetGlobal: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    },

    getNews: (state, kategori) => {
        axios.get(baseUrl + `top-headlines?country=id&category=${kategori}&q=${store.getState().keyword}&apiKey=` + apiKey)
            .then((response) => {
                store.setState({
                    listNews: response.data.articles,
                    loadingKah: false
                })
            })
            .catch((error) => {
                store.setState({loadingKah: true})
            });
    },

    getSideNews: () => {
        store.setState({sideLoadingKah: true});
        axios.get(baseUrl + `top-headlines?country=id&category=general&apiKey=` + apiKey + "&page=1&pageSize=5")
            .then((response) => {
                store.setState({
                    sideListNews: response.data.articles,
                    sideLoadingKah: false
                })
            })
            .catch((error) => {
                store.setState({sideLoadingKah: true})
            });
    }
});