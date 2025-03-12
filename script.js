// try{
//     // console.log('work')
//     // console.log('some')
//     throw 'somthing is not right'
// }
// catch(err){
//     console.log('error:',err);
// }finally{
//     console.log('finally');
// }
// try{
//     const  json ='{"name" : " Udhaya","Age": 28 , "isAlive": "yes"}'
//     const user = JSON.parse(json)
//     console.log('Showing the UI:' , user.name)
//     if(user.isAlive === undefined){
//         throw new Error('IsAlive is not available')
//     }
// }catch(err){
//     console.log('error');
// }finally{
//     console.log('Everything finished! good bye!');
// }
///promise
// let myPromise = new Promise((res , rej)=>{
//     let success = false
//     if(success){
//         res('The operation was successful!')
//     }
//     else{
//         rej('The operation failed.')
//     }
// })
// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch(err =>{
//     console.log(err);

// })
// const userHasAllInfo = new Promise((res, rej)=>{
//     rej('I got the user info')
// })
// userHasAllInfo.then((user)=>{
//     console.log(user)
//     return new Promise ((res, rej)=>{
//         res("I Don't have the posts")
//     }).then((msg)=>{
//         console.log(msg);
//     })
// }
// ).catch((err)=>{
//     console.log(err)
// })
// const p1 = new Promise((res, rej)=>{
//     setTimeout( res ,1000, 'okay I got the value')
// }) 
// const p2 = Promise.reject('promise2')
// const p3 = 123
// Promise.all([p1, p2 ,p3]).then((res)=>{
//     console.log('responses', res)
// }).catch((err)=>{
//     console.error('erroe:', err);
// })
const promise1 = new Promise((res, rej)=>{
    setTimeout(()=>res('one'), 50)
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(()=> res('two'),100)
})
const promise3 = new Promise((res,rej)=>{
    setTimeout(()=> rej('two'),10)
})
const promise4 = Promise.reject(0)
// Promise.race([promise2,promise1,promise3])
// .then((res)=>{
//  console.log('response:',res);
// }).catch((err)=>{
//     console.log('erro',err);
// })
Promise.any([promise2,promise1,promise3 , promise4])
.then((res)=>{
 console.log('response:',res);
}).catch((err)=>{
    console.log('erro',err);
})
