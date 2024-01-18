export default class APIServices{
    static LoginFun(body){
        return fetch('http://127.0.0.1:8000/login/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())

        
    }


    static RegisterFun(body){
        return fetch('http://127.0.0.1:8000/register/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
}