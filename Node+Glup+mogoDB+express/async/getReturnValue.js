function getMsg(callback) {
    setTimeout(function () {
        callback({
            msg: 'hello'
        })
    }, 2000);
}
getMsg(function (data) {
    console.log(data);
    
  })