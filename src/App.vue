<template>
  <div class="wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link :to="{name: 'About'}">About</router-link> 
      <router-link :to="{name: 'Portfolio'}">Portfolio</router-link> 
      <router-link :to="{name: 'Contact'}">Contact</router-link>      
      <a href="http://github.com" target="_blank" > <img src= "./assets/git.png" width="20" height="20" hspace=15 align="right"> </a>
      <a href="http://linkedin.com" target="_blank"> <img src= "./assets/linkedin2.png" width="20" height="20" hspace=15 align="right"> </a>
      <a href="http://facebook.com" target="_blank"> <img src= "./assets/facebook2.png" width="20" height="20" hspace=15 align="right"> </a>
    </div>
    <router-view/>
  
    <footer class="site-footer">
    <p class="powered-by" style="text-align: center;">
      © 2021 Sooah Kim. All Rights Reserved.
    </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* margin: 40px; */
  color: #2c3e50;
}

#nav {
  padding: 10px;
  padding-top: 70px;
  font-size: 25px;
  background-image: url('./assets/gradient2.jpeg');
  background-size: cover;
  height: 60px;
  position: sticky;
  top: 0;
  
}

#nav a {
  margin-left: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
.wrapper{

  display: flex;
  min-height:100%;
  flex-direction: column;
}
#nav a.router-link-exact-active {
  color: #6686dd;
}
.site-footer{
  bottom:0;
  background: rgb(210, 219, 251);
  position: fixed;
  width: 100%;


}
</style>
