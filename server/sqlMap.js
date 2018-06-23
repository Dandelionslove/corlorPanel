//sql语句映射文件，供API调用


var sqlMap=
    {
        //用户
        usr:{
            //注册用
            add: 'insert into user(name, email, password) values (?, ?, ?)',
            //登录用
            search:' select name,password from user where name = ? and password = ?'
        },
        upload:
            {
                upload: 'insert into '
            }
    };

module.exports=sqlMap;
