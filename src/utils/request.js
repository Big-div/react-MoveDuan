//封装axios，定义拦截器
import axios from 'axios'

const request = axios.create({
  baseURL:'/',
  headers:{},
  timeout:10000
});

//请求拦截器
request.interceptors.request.use(
  (config)=>{
    if(token){
      config.headers['authorization']=`Bearer${token}`
      config.headers['token']=token
    }
    //config是请求的所有信息
    return config
  }
)
//响应拦截器
request.interceptors.response.use(
  (response)=>{
    if(response.data.data===20000){
      //功能成功
      return response.data.data
    }else{
      //功能失败
      return Promise.reject()
    }
  },
  //响应失败 非200 提供最准确的错误信息
  (error)=>{

    if(error.message){
      //服务器返回了响应，但是响应是失败的
      if(error.message.status===401){

      }
    }else{
      //服务器没有返回响应
      //请求超时（timeout）还是网络错误（network err）
    }
  }
)
export default request;