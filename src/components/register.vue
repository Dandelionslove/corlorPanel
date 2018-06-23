<template>
    <div class="login">
        <form action="http://localhost/colorPanelConnDB/register.php">
            <input type="text" name="username" v-model="userName"><br />
            <input type="text" name="email" v-mode="email"><br />
            <input type="text" name="password" v-model="password"><br />
            <a href="javascript:;" @click="addUser">提交</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                userName:'',
                password:'',
                email:''
            }
        },
        methods:
            {
                addUser(){
                    var name = this.userName;
                    var email = this.email;
                    var password = this.password;
                    this.$http.post('../../server/api/user/addUser',{
                        username:name,
                        email:email,
                        password:password
                    },{}).then((response) =>{
                        console.log(response);
                    })
                }
            }
    }
</script>

<style scoped>

</style>