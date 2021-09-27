// 注册按钮事件
function affirm() {
    // 获取昵称
    let name = document.getElementById("username").value;
    console.log(name);

    // 获取密码
    let pas = document.getElementById("pwd").value;
    console.log(pas);

    // 获取手机号
    let tel = document.getElementById("tel-num").value;
    console.log(tel);

    //获取验证码
    let verify = document.getElementById("verify").value;
    console.log(verify);


    if (localStorage.length === 0) { // 判断本地是否有数据  没有的话判断手机号和密码
        if(verify!=='1111'){
            alert("验证码错误")
        } else if(document.getElementById("checkbox").checked===false){
            alert("请先阅读并同意相关服务条款及隐私政策");
       }
       else {
            // 动态向本地添加数据
            let dataLength = localStorage.length // 获取现在已有数据的长度
            // 这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
            console.log(dataLength);
            // 创建一个对象用于存储用户输入的数据
            let data = {}
            data.name = name; // 向对象添加昵称
            data.tel = tel // 向对象添加手机号
            data.pas = pas // 添加密码
            data.id = dataLength // 添加用户唯一凭证ID
            let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
            console.log(info);
            // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
            localStorage.setItem("key" + dataLength, info);
            // 获取本地存储所有数据 查看是否存到本地
            console.log(localStorage.valueOf());
            // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
            setTimeout(function() {
                window.location.href = "Homepage.html"
            }, 2000)
            alert("注册成功,点击后跳转到首页")
        }
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            // 获取所有的key钥匙
            let key = localStorage.key(i)
            console.log(key);
            // 通过key拿到对应的数据进行判断
            let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
            let keyinfo = JSON.parse(keydata) // 将字符串转化为对象的形式
            console.log(keyinfo);
            // 判断用户输入的信息是否存在
            if (keyinfo.name === name) { // 判断本地存储的数据中是否有相同的昵称
                alert("昵称已存在")
                break;
            }else if (keyinfo.tel === tel) { // 判断本地存储的数据中是否有相同的手机号
                alert("手机号已注册")
                break;
            }else if(verify!=='1111'){
                alert("验证码错误");
                break;
            } else if(document.getElementById("checkbox").checked===false){
                alert("请先阅读并同意相关服务条款及隐私政策");
                break;
            }
            else {
                // 动态向本地添加数据
                let dataLength = localStorage.length // 获取现在已有数据的长度  这个长度用于拼接到本地存储的每个key值中  达到一个动态存储的效果  每条本地存储数据需要一个钥匙   也就是获取这条数据的名称  就是key
                console.log(dataLength);
                // 创建一个对象用于存储用户输入的数据
                let data = {}
                data.name = name; // 向对象添加昵称
                data.tel = tel // 向对象添加手机号
                data.pas = pas // 添加密码
                data.id = dataLength // 添加用户唯一凭证ID
                let info = JSON.stringify(data) // 将对象转化为字符串   因为本地存储只能存储字符串
                console.log(info);
                // 向本地存储数据   第一个参数就是key钥匙  第二个是我们要存储的数据
                localStorage.setItem("key" + dataLength, info);
                // 获取本地存储所有数据 查看是否存到本地
                console.log(localStorage.valueOf());
                // 当存储成功时  启动定时器   两秒钟后跳转到登录页面
                setTimeout(function() {
                    window.location.href = "Homepage.html"
                }, 2000)
                alert("注册成功,点击跳转到首页")
                break;
            }
        }
    }
};

//用户名格式校验
function user_check(){
    var user=document.getElementById("username");
    if(user.value){
        user.setCustomValidity("");//现将有输入时的提示设置为空
    }else if(user.validity.valueMissing){
        user.setCustomValidity("用户名不能为空");
    };
    if(user.validity.patternMismatch){
        user.setCustomValidity("用户名只能是英文或数字，长度6到12位");
    }
}

//密码格式校验
function pwd_check(){
    var user=document.getElementById("pwd");
    if(user.value){
        user.setCustomValidity("");//现将有输入时的提示设置为空
    }else if(user.validity.valueMissing){
        user.setCustomValidity("密码不能为空");
    };
    if(user.validity.patternMismatch){
        user.setCustomValidity("密码至少包含 数字和英文，长度6-20");
    }
}

//手机号码格式校验
function tel_check(){
    var user=document.getElementById("tel-num");
    if(user.value){
        user.setCustomValidity("");//现将有输入时的提示设置为空
    }else if(user.validity.valueMissing){
        user.setCustomValidity("手机号不能为空");
    };
    if(user.validity.patternMismatch){
        user.setCustomValidity("请输入正确的手机格式");
    }
}