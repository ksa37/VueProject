<template>
  <div class="contact">
    <h1 style="margin-left:20px; "> Contacts </h1>
    <div style="align:center;">
      <div class="phone_box">
        <h2>Phone number</h2>
        <a href="tel:010-1111-1111">010-1111-1111</a><br><br>
        <a href="tel:010-1234-5678">010-1234-5678</a>
      </div>
      <div class="email_box">
        <h2>Email</h2>
        <a href="mailto: sa.kim@capbox.kr" target="blank_">sa.kim@capbox.kr</a><br><br>
        <a href="mailto: sooahk23@gmail.com" target="blank_">sooahk23@gmail.com</a>
        
      </div>
      <div class="location_box">
        <h2>Location</h2>
        <!-- <div id="daumRoughmapContainer1625190440375" class="root_daum_roughmap root_daum_roughmap_landing"></div> -->
        <a href="http://kko.to/w7zWZvp4p" target="blank_">서울 강남구 역삼로 165 해성빌딩 5층</a><br><br>
        <a href="http://kko.to/w7zWZvp4p" target="blank_">서울 강남구 역삼로 165 해성빌딩 5층</a>
        
      </div>
    </div><div style="clear:both;"></div>
    <br><br><br><br>
    <h1 style="margin-left:20px; ">Contact Me. </h1>
    <p style="margin-left:20px; font-size:25px;">Hello. If you are interested please contact me by sending below form.</p>
    <div class="image contact">
      <img src="../assets/contact.png" style="float:left; width:500px;">
    </div>
    <div class="form-wrapper">
      <span>
        <form>
          <span>
            <label>
              <input type="text" placeholder="Your Name *">
            </label>
          </span>
          <span>
            <label>
              <input type="text" rules="required|email" placeholder="Your email *">
            </label>
          </span>
          <span>
            <label>
              <input type="text" placeholder="Write a Subject">
            </label>
          </span>
          <span>
            <label>
              <input type="text" placeholder="Your Message">
            </label>
          </span>
          <button type="submit" value="submit" class="rn-button-style--2 btn_solid"> Submit </button>
        </form>
      </span>
    </div><div style="clear:both;"></div>
    <br><br><br>
  </div>
</template>






<style scoped>
.contact{
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;

}
a:link{
  color: #6686dd;
  text-decoration: none;
}
a:visited{
  color: #c56d6d;
}
.phone_box{
  display: block;
  border: 5px solid #ebebeb;
  padding: 40px;
  float: left;
  width: 20%;
  border-radius: 20px;
  text-align: center;
  margin: 10px;
  /* box-sizing: border-box; */
}
.email_box{
  display: block;
  border: 5px solid #ebebeb;
  padding: 40px;
  float: left;
  margin-left: 50px;
  margin: 10px;
  width: 20%;
  border-radius: 20px;
  text-align: center;
}
.location_box{
  display: block;
  border: 5px solid #ebebeb;
  padding: 40px;
  float: left;
  margin-left: 50px;
  margin: 10px;
  width: 20%;
  border-radius: 20px;
  text-align: center;
}
.contact_from{
  position: bottom;
}
.form-wrapper{
  float: left;
  margin-top: 60px;
  padding-left: 60px;
  /* border: 2px solid #ebebeb; */
}
.form-wrapper input{
  display: block;
  width: 300px;
  padding: 0 20px;
  border: 2px solid rgba(0,0,0,.1);
  border-radius: 5px;
  transition: all .3s ease;
  height: 50px;
  line-height: 46px;
  margin-bottom: 20px;
  outline: none;
  color: #1f1f25;
  font-size: 15px;
  letter-spacing: .1px;
}

.form-wrapper button {
  color: #c6c9d8;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #b1b4c1;
  padding: 10px 30px;
  border-radius: 6px;
  display: inline-block;
  font-weight: 500;
  transition: .3s;
  background: #ffffff;
  
}

.form-wrapper button:hover {
  background:#6686dd;
  
}
</style>


