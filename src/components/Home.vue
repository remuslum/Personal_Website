<template>
    <div>
        <v-app>
          <span id="caption" class="font-italic"> Welcome, my name is 
             <h1 id="heading"> Remus Lum,  </h1>
            a Business Analytics student in NUS.  
            <br>
            <br>
            I am proficient in :  
            </span>
          <div class="container">
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>95<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text"> R </h2>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>95<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text"> Python </h2>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text"> Tableau </h2>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>85<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text"> HTML,CSS,JS </h2>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text"> Java </h2>
              </div>
            </div>    
          </div>
          <div>
            <v-btn id="button1" rounded color="#0028B6" @click="proceed()"> 
              <p id="buttontext">View My Projects </p>
              <v-spacer></v-spacer>
              <v-icon> mdi-chevron-right</v-icon>
              </v-btn>
          </div>
          <div class="image">
            <v-img class="logo" src="../assets/website_logo.png" height=250px width=250px></v-img>
          </div>
          <v-footer class="footer" app color="#7000B5"> 
            <p> Get connected with me on Social Networks! </p>  
            <v-spacer></v-spacer>
            <v-btn icon href="https://github.com/remuslum">
              <v-img src="../assets/GitHub-Mark-Light-64px.png"> 
              </v-img>
            </v-btn>
            <v-btn class="linkedinbutton" icon href="https://www.linkedin.com/in/remuslum/">
              <v-img height=30px width=30px src="../assets/linkedin-4-xxl.png">
              </v-img>
            </v-btn>
            <v-btn class="emailbutton" icon href="mailto: remuslum@u.nus.edu">
              <v-icon large color="#fff"> email </v-icon>
            </v-btn>
          </v-footer>
            
        </v-app>
    </div>
</template>

<script>
export default {
    methods : {
      proceed : function(){
        this.$router.push({path: '/education'})
      }
    }
}
</script>

<style scoped>
  #app {
    background: #000 ;
    background-size : cover ; 
  }
  svg {
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 1000;
  }
  svg circle {
    width: 100%;
    height: 100%;
    fill: none; 
    stroke: #191919;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }
  svg circle:nth-child(2){
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
  }
  .card:nth-child(1) svg circle:nth-child(2){
    stroke-dashoffset: calc(440 - (440 * 95)/100);
    stroke: #6700A7 ; 
  }
  .card:nth-child(2) svg circle:nth-child(2){
    stroke-dashoffset: calc(440 - (440 * 95)/100);
    stroke: #005B1A ; 
  }
  .card:nth-child(3) svg circle:nth-child(2){
    stroke-dashoffset: calc(440 - (440 * 90)/100);
    stroke: #006C84 ; 
  }
  .card:nth-child(4) svg circle:nth-child(2){
    stroke-dashoffset: calc(440 - (440 * 85)/100);
    stroke: #C10000 ; 
  }
  .card:nth-child(5) svg circle:nth-child(2){
    stroke-dashoffset: calc(440 - (440 * 70)/100);
    stroke: #2400FF ; 
  }
  .container{
    margin-top : 100px ; 
    position: relative ;
    width: 900px ; 
    display: flex ; 
    justify-content: center;
  }
  .container .card{
    position: relative;
    width: 300px;
    background: linear-gradient(0deg, #1b1b1b, #222, #1b1b1b);
    display: flex ; 
    justify-content: center;
    align-items: center;
    height: 300px;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    transition: 0.5s; 
    margin-left: 10px; 
  }
  .container .card:hover{
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,.5);
  } 
  .container .card:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .03);
    pointer-events: none ; 
    z-index: 1;
  }
  .percent {
    position: relative ; 
    width: 150px ; 
    height: 150px ; 
    border-radius: 50% ; 
    box-shadow: inset 0 0 50px #000;
    z-index: 1000;
  }
  .percent .number{
    position: absolute ; 
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; 
  }
  .percent .number h2 {
    color: #777;
    font-weight: 700;
    font-size: 40px;
    transition: 0.5s;
  }
  .percent .number h2 span {
    font-size: 24px;
    color: #777;
  }
  .card:hover .percent .number h2 {
    color: #fff ; 
    font-size: 60px ; 
  }
  .card:hover .percent .number h2 span{
    color: #fff ;
  }
  .text{
    position: relative ; 
    color: #777 ; 
    font-weight: 700 ;
    font-size: 18px ; 
    letter-spacing: 1px ; 
    text-transform: uppercase ;
    transition: 0.5s;
  }
  .card:hover .text{
    color: #fff ;  
  }
  .footer {
    height: 100px ; 
  }
  .footer p {
    margin-top: 15px ;
    font-size: 40px;
    color: #fff;
    font-style: italic;
  }
  .linkedinbutton {
    margin-left: 50px;
  }
  .emailbutton {
    margin-left: 35px;
  }

  #heading { 
    font-size : 100px ; 
    font-family : Arial, Helvetica, sans-serif;
  }
  #caption {
    color: #fff ; 
    margin-top : 50px ; 
    margin-left : 200px ; 
    font-size : 50px ; 
    font-family: 'Times New Roman', Times, serif;
  }

  #button1 {
    margin-left : 41% ; 
    margin-top : 70px ;
    width: 500px ; 
    height: 70px ; 
    color: #fff ; 
  }
  #buttontext{
    margin-left: 100px ; 
    margin-top: 15px ; 
    text-align: center;
    font-size: 25px ;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic ;
  }
  .image .logo {
    margin-left : 45% ; 
  }


</style>