<template>
  <div class="portfolio">
    <h1 style="margin-left:20px;">My projects </h1>
    <p style="font-size: 20px; margin-left:20px;"> These are the projects that I have done until now. </p>
    <div v-for="proj in projects" :key="proj.id" class="project_list">
      <h3> {{proj.title}} </h3>
      <a :href="proj.link" target="_blank"> <img :src="proj.image" style="width:120px; height:150px;" > </a>
      <p> {{proj.description}} </p>
    </div>
  </div><div style="clear:both;"></div> 
  <br><br><br><br>
</template>

<script>
export default {
  data(){
    return{
      projects: [
        {title: 'project1', id:1, image:require("../assets/prj1.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project2', id:2, image:require("../assets/prj2.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project3', id:3, image:require("../assets/prj3.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project4', id:4, image:require("../assets/prj1.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project5', id:5, image:require("../assets/prj2.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project6', id:6, image:require("../assets/prj3.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project7', id:7, image:require("../assets/prj1.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project8', id:8, image:require("../assets/prj2.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
        {title: 'project9', id:9, image:require("../assets/prj3.png"), link: "http://github.com", description: "blabalbablaadcnskjcn"},
      ]
    }
  }
}
</script>

<style>
.portfolio {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
}
.project_list {
  display: block;
  border: 5px solid #ebebeb;
  padding: 40px;
  float: left;
  width: 20%;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
}
</style>