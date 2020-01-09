import createStore from "unistore";
import axios from "axios";


const initialState = {
    username: "",
    password: "",
    email: "",
    avatar: "",
    loginKah: false,
    listMovies: [],
    loadingKah: true
};

export const store = createStore(initialState);


const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

export const actions = store => ({
    handleSetGlobal: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    },

    getMovies: (state) => {
        axios.get(baseUrl)
            .then((response) => {
                store.setState({
                    listMovies: response.data.movies,
                    loadingKah: false
                })
            })
            .catch((error) => {
                store.setState({loadingKah: true})
            });
    },

    setUserData: (state, user_data) => {
        store.setState({
            username: user_data.username,
            email: user_data.email,
            avatar: user_data.avatar,
            loginKah: true
        })
    }
});