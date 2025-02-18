//Async


// // async function asAw(){
// //     console.log("Hello")
// // }
// // console.log(asAw())

// async function asAw() {
//     var a=15
//     setTimeout(function(){
//         console.log("hello")
//     },5000)
//     console.log(a)
// }
// asAw()
// // console.log(asAw())
// // console.log(await asAw())

// // console.log(asAw().then((res)=>{
// //     console.log(res)
// // }).catch((res)=>{
// //     console.log("res")
// // }))



// Instagram console Demo for post ,like ,comment , share

likeCode= async ()=>{
    return new Promise((likePost) => {
        setTimeout(()=>{
            likePost("Liked Post Successfully")
        },5000)
    })
}
commentCode =async () =>{
    return new Promise((commetPost) => {
        setTimeout(()=>{
            commetPost("Commented on the post successfully")
        },5000)
    })
}
shareCode =async () =>{
    return new Promise((sharePost) => {
        setTimeout(()=>{
            sharePost("Shared the post successfully")
        },5000)
    })
}
async function postCode(){
    var post =new Promise((createPost) => {
        setTimeout(()=>{
            createPost("Post Created Sucessfully")
        },5000)
    })
    const[pos,like,comment,share]=await Promise.all()
    console.log(await post())
    console.log(await likeCode())
    console.log(await comment())
    console.log(await share())
}
postCode()