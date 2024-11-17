import BaseRequest from "./baseRequest"
const baseRequest=new BaseRequest({})

const post = (url: string, data: any = {}, config: object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseRequest.post(url, data, config).then(res => { 
      if (res.data.code == 200) {
        resolve(res.data)
      } else { 
        reject()
      }
    }).catch(err => { 
      console.log(err)
    });
  })
}

const get = (url: string, data: any = {}, config: object = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseRequest.get(url,data,config).then(res => { 
      if (res.data.code == 200) {
        resolve(res.data)
      } else { 
        reject()
      }
    });
  })
}

const request=(config: {url: string,data:any , type:'post'|'get'}): Promise<any> =>{
  switch(config.type){
    case 'get':
      return get(config.url,config.data??{});
    case 'post':
      return post(config.url,config.data??{});
    default:
      return post(config.url,config.data??{});
  }
}

export  {request};