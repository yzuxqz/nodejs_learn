//异步函数默认的返回值是promise对象

//await
//只能出现在异步函数中,如果错误会停止运行，不允许下面的函数执行
//
async function fn() {

    throw '发生了错误';
    return 123;

}

fn().then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

async function p1() {
    return 'p1';
}
async function p2() {
    return 'p2';
}
async function p3() {
    return 'p3';
}

async function run() {
    let r1 = await p1()
    let r2 = await p2()
    let r3 = await p3()
    console.log(r1);
    console.log(r2);
    console.log(r3);
    
    
    
}