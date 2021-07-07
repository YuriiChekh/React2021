import axios from 'axios'

let axiosInstance = axios.create({
 baseURL:'https://jsonplaceholder.typicode.com'
}
)
const getUsers = () => axiosInstance('/users');
// const getUser = (id) => axiosInstance('/users/' + id);
const getPosts = () =>axiosInstance('/posts')
// const getUserPost = (id) =>axiosInstance('/users/' + id + '/posts')
const getCommets = () => axiosInstance('/comments')
//const getCommentPost = (id) => axiosInstance('posts'+ id + '/comments' )
export {getUsers,getPosts,getCommets};