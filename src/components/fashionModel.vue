<template>
<div id="fashionModel">
  <div id="slider" class="scroll-container">
    <li><img src="../assets/li1.png" alt="t1" /></li>
    <li><img src="../assets/li2.png" alt="t2" /></li>
    <li><img src="../assets/li3.png" alt="t3" /></li>
  </div>
  <input type="text" placeholder="每个人的生命都像一块画板，自我调色，上色，滋润，最后趋于饱满，像极了久违的稻草，只在无人的荒野里假装自己是天地唯一的神" name="search_input" id="search_input" disabled="disabled"/>
  <button type="button" id="searchBtn"></button>
  <div class="imgs">

  </div>
</div>
</template>

<script>
    export default {
        name: "fashionModel",
        data(){
            return {
                imageList:{
                },
                scrollLength:10
            }
        },
        methods:{
            handleReachBottom(){
                return new Promise(resolve =>{
                    setTimeout(() =>{
                        const last=this.imageList[this.imageList.length-1];
                        for (let i=1;i<this.scrollLength;i++)
                        {

                        }
                        resolve();
                    },2000)
                })
            }
        }
    }

    var count=1;
    $('#fashionModel').ready(function(){
      function scroll_news() {
        var firstNode = $('#slider li');
        firstNode.eq(0).fadeOut('slow', function () {
          if (count == 3) {
            count = 1;
          } else {
            count++;
          }
          $(this).clone().appendTo($(this).parent()).show();
          $(this).remove();
        })
      };
      setInterval(scroll_news,3000);
      //从数据库获取图片name
      $.ajax({
        url:"http://localhost/colorPanel/ajax/imgsList.php",
        type:'POST',
        dataType:'text',
        success:function (data) {
          // console.log(typeof (data));
          data=data.replace("[","");
          data=data.replace("]","");
          // console.log(data);
          var imgsList=data.split(",");
          var fileDomain="http://localhost/colorPanel/dealed_img_upload/upload/";
          for (var i=imgsList.length-1;i>=0;i--)
          {
            var div=document.createElement('div');
            div.style.display="inline-block";
            div.style.width="300px";
            div.style.height="300px";
            div.style.margin="5px";
            div.style.padding="0px";
            div.style.overflow="hidden";
            var subdiv=document.createElement('div');
            subdiv.style.width="200px";
            subdiv.style.height="30px";
            subdiv.style.position="relative";
            subdiv.style.textAlign="center";
            subdiv.style.bottom="250px";
            subdiv.style.backgroundColor="rgba(1.0,1.0,1.0,0.3)";
            subdiv.style.color="white";
            subdiv.style.fontSize="10pt";
            subdiv.style.left="40px";
            subdiv.style.visibility="hidden";
            imgsList[i]=imgsList[i].replace("\"","");
            imgsList[i]=imgsList[i].replace("\"","");
            var fileUrl = fileDomain + imgsList[i];
            // console.log(fileUrl);
            // $('div.imgs').append('<img class="imgItem" width="300" height="300" src="'+fileUrl+'" />');
            var imgItem=new Image();
            imgItem.addEventListener('load',function(ev){
              var preItem=this;
              this.addEventListener('mouseover',function()
              {
                //鼠标悬浮显示描述信息
                this.style.cursor="pointer";
                var src=preItem.src;
                src=src.split('/');
                var name=src[src.length-1];
                $.get("http://localhost/colorPanel/ajax/imgInfo.php",{imgname:name},function(data,status,xhr){
                  if(status=="success")
                  {
                    preItem.nextElementSibling.innerHTML=data;
                    preItem.nextElementSibling.style.visibility="visible";
                  }
                },"text");
              },false);
              this.addEventListener("mouseout",function()
              {
                this.nextElementSibling.innerHTML="";
                preItem.nextElementSibling.style.visibility="hidden";
              })
            },false);
            imgItem.src=fileUrl;
            imgItem.width=300;
            imgItem.height=300;
            // imgItem.style.margin="5px";
            imgItem.style.position="relative";
            imgItem.style.top="0px";
            imgItem.style.left="0px";
            imgItem.style.width="300px";
            imgItem.style.height="300px";
            // imgItem.element.classList.add('imgItem');
            // imgItem.classList.add('imgItem');
            div.appendChild(imgItem);
            div.appendChild(subdiv);
            $('div.imgs').append(div);
          }
        }
        }
      )

    });


</script>

<style scoped>
  #search_input
  {
    width:900px;
    height:42px;
    padding-left: 10px;
    border:2px solid #7ba7ab;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    outline:none;
    background:#d9e0d1;
    color:#9e9c9c;
    margin-top:10px;
    margin-bottom:20px;
  }
  #searchBtn
  {
    position:relative;
    top:0px;
    right:50px;
    width:42px;
    height:42px;
    border:none;
    background:#7ba7ab;
    -webkit-border-radius: 0 5px 5px 0;
    -moz-border-radius: 0 5px 5px 0;
    border-radius: 0 5px 5px 0;
    cursor:pointer;
  }
  #searchBtn:before
  {
    content:'\f002';
    font-family:FontAwesome;
    font-size: 16px;
    color:#f9f0da;
  }

  .scroll-container
  {
    width:100%;
    height:300px;
    overflow:hidden;
  }
  #slider
  {
    width:930px;
    height:200px;
  }
  li
  {
    list-style-type: none;
  }
  li img
  {
    width:930px;
    height:200px;
  }

  .imgs
  {
    overflow:hidden;
  }


</style>
