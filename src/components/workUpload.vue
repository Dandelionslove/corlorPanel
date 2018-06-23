<template>
  <div id="workUpload">
    <div class="step_hints">
    <p class="first_step">
      第一步-->上传原图
    </p>
      <img class="img" src="../assets/1.png" alt="img" />
      <img class="img" src="../assets/2.jpeg" alt="img" />
      <img class="img" src="../assets/3.jpeg" alt="img" />
    </div>
    <div class="words">
      <p>编辑一共分为<span class="strong">三个步骤</span></p>
      <p>第一步：上传原图</p>
      <p>第二步：作品编辑</p>
      <p>第三步：终极感言</p>
      <p>编辑并上传成功的作品可以在<span class="strong">步步随潮</span>板块看见哟 】-【</p>
      <p>欢迎来到第一步：上传要编辑的图片</p>
    </div>
    <form id='upload_form' role='form' action="http://localhost/colorPanel/uploadFile/upload_file.php" method="post" enctype="multipart/form-data" name="upload_form">
      <label for="imgfile">选择图片文件:</label>
      <input name="file" type="file" id="imgfile"/>
      <br />
      <p class="imgView">
        图片预览区
      </p>
      <img id="imgShow" alt="暂无图片" src="../assets/withoutImg.png"/>
      <br />
      <!--<label for="imgname">标题：</label>-->
      <!--<input name="img_name" type="text" id="imgname" />-->
      <!--<p>作品描述</p>-->
      <!--<textarea cols="100" rows="10" name="textarea" id="imgDescription" ></textarea><br />-->
      <input type="submit" value="上传原图" name="submit" id="fileSubmitBtn"/>
    </form>
  </div>
</template>

<script>
    export default {
        name: "workUploadModel"
    }

    var fileDomain='http://localhost/colorPanel/uploadFile/upload/';

    $('#workUpload').ready(function(){
      $('#upload_form').change(function(){
        onFileChange();
        document.forms[0].target='upload_form';
      });
    });
    //图片预览
    function onFileChange() {
      var imgfile=document.getElementById('imgfile');
      var fileData=imgfile.files[0];
      var fileName=fileData["name"];
      if(window.FileReader)
      {
        var reader=new FileReader();
        reader.readAsDataURL(fileData);
        reader.addEventListener('loadend',function(ev)
        {
          var imgurl=ev.target.result;
          // console.log(imgurl);
          var imgShow=document.getElementById('imgShow');
          imgShow.setAttribute('src',imgurl);
          imgShow.setAttribute('width','300px');
          imgShow.setAttribute('height','300px');
        })
      }
      console.log(imgfile.files[0]+"\nfile name:"+fileName);
  }

</script>

<style scoped>

  .step_hints
  {
    width:300px;
    height:100%;
    float:left;
    font-size:15pt;
    color:#754f44;
  }

  .first_step
  {
    color:#d499b9;
    font-size:20pt;
  }
  .imgView
  {
    color:#d1b6e1;
    font-size:10pt;
  }
  #imgShow
  {
    width:300px;
    height:300px;
  }
  img.img
  {
    width:200px;
    height:200px;
  }
  span.strong
  {
    font-weight:bold;
    color:red;
  }
</style>
