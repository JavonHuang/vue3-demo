import axios, { AxiosInstance,CreateAxiosDefaults,AxiosResponse,InternalAxiosRequestConfig } from 'axios'
interface IuseInterceptors{
  request?:(e:InternalAxiosRequestConfig<any>)=>InternalAxiosRequestConfig<any>,
  requestError?:(error:unknown)=>Promise<any>,
  response?:(e:AxiosResponse<any, any>)=>AxiosResponse<any, any>,
  responseError?:(error:unknown)=>Promise<any>,
}
class BaseRequest{
  static _instance: BaseRequest;
  protected service: AxiosInstance=axios;
  constructor(params:CreateAxiosDefaults&IuseInterceptors){
    if(new.target !== BaseRequest){
        return
    }
    if(!BaseRequest._instance){
        BaseRequest._instance = this
    }
    this.service = axios.create(params);
    if(params.request!=null){
      this.service.interceptors.request.use(params.request)
    }
    if(params.requestError!=null){
      this.service.interceptors.request.use(null,params.requestError)
    }
    if(params.response!=null){
      this.service.interceptors.response.use(params.response)
    }
    if(params.responseError!=null){
      this.service.interceptors.response.use(null,params.responseError)
    }
    return BaseRequest._instance
  }

  public post=(url: string, data: any = {}, config: object = {})=>{
    return this.service!.post(url,data,config)
  }

  public get=(url: string, data: any = {}, config: object = {})=>{
    return this.service!.get(url, {
      ...config,
      params:data
    })
  }
}

export default BaseRequest;