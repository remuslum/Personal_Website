<template>
    <div>
        <div class="title">
            My Projects
        </div>
        <div class="box" id="project1"> 
            <div class="content">
                <h1 class="heading"> Data Management and Visualization </h1>
                <p class="subheading"> MySQL database for Car rental Company and Visualization for Alpha Airlines </p>
                <span class="details"> I implemented a MySQL database for a car rental company in a team of 5 and used a relationship entity diagram to design the schema
                    <br> 
                My team and I also did a visualization for Alpha Airlines where we analyzed the areas of improvement for the Airlines to boost its revenue
                and see what actions it can take to rise above its competitor, Beta Airlines. 
                </span>
                <br>
                <br>
                <a class="link" id="link1" href="https://drive.google.com/file/d/1UcnH8hxCPgYZR5B2Wk254CgfUUAmIvJ-/view?usp=sharing"> View our Data Management Report here!</a> <br>
                <a class="link" id="link1" href="https://drive.google.com/file/d/1Fe8w4rLmGdE88XWX-qv4p4ym_zcsuSfX/view?usp=sharing"> View our Visualization and Analysis here! </a>
            </div>
            <div class="image">
                <v-img height=300px width=650px src="../assets/pie_chart.png"></v-img>
            </div>
        </div>  
        <div class="box" id="project2"> 
            <div class="image">
                <v-img class="logo" src="../assets/feed_me_logo.png"></v-img>
            </div>
            <div class="content">
                <h1 class="heading"> Feed Me Now </h1>
                <p class="subheading"> A web application that allows animal lovers to make remote donations to their local zoo. </p>
                <span class="details"> The application allows users to make a donation by paying for the animals' meals. The user is free to choose 
                    which animal he/she wishes to feed and they have 2 options, to feed a meal or a feast. 
                    <br> 
                    The app also includes a dashboard showing the current situation of zoos around the world, 
                    a contributions board to see your past contributions and a leaderboard to see your rank among other doners.
                    <br>
                    The project was done using the SCRUM methodology and as SCRUM master, I facilitated group meetings between members of the development 
                    and assisted in communication between the product owner and development team. 
                </span>
                <br>
                <a class="link" id="link2" href="https://bt3103-feed-me-now.web.app/"> View Our Application Here!</a>
            </div>
        </div>
        <div class="box" id="project1"> 
            <div class="content">
                <h1 class="heading"> Machine Learning for predictions</h1>
                <p class="subheading"> Prediction Models for Banks to assess whether a customer will default a credit card payment next month </p>
                <span class="details"> Collaborated in a team of 5 and used 3 machine learning models, 
                    <p class="details" id="models"> Naive Bayes, Neural Network and Logistice Regression </p>
                    to predict whether a customer will default a credit card payment next month based on the past data.
                    <br> 
                This helps the bank to better assess their customers and avoid customers that could potentially become a liability.
                <br> 
                We also assessed the effectiveness of the 3 models and how they compare with one another.  
                </span>
                <br>
                <br>
                <a class="link" id="link1" href="https://docs.google.com/document/d/13XYNIUBgho2dfupskgVRsedBXfDBzCbPkbMz2FdL8mM/edit?usp=sharing"> View our Prediction results and Analysis here!</a> 
            </div>
            <div class="image" id="image3">
                <v-img height=300px width=650px src="../assets/machine_learning.png"></v-img>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .title{
        color: #fff ; 
        font-size: 90px ;
        text-align: right; 
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-style: italic;
        height: 200px ; 
        background-color: #000 ;
        background-size: cover;
    }
    .box {
        height : 470px ; 
        width : 100% ; 
        display: flex ;
    }
    .box .image {
        height : 300px ; 
        width : 300px ; 
        margin-top: 70px ; 
    }
    .box .image .logo {
        height : 300px ; 
        width : 300px ; 
    }
    .box .content {
        padding-left : 70px ; 
    }
    .box .content .heading {
        font-size : 90px ; 
        width: 70%;
    }
    .box .content .subheading {
        font-size: 50px ;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
        font-style: italic;
    }
    .box .content .details {
        font-size : 35px ; 
        
    }
    .box .content .link {
        text-decoration: none;
        font-size : 55px ; 
    }
    #project1 {
        background-color: #000;
        color: #fff;
        background-size: cover;
    }
    #project2{
        background-color: #C0C0C0 ; 
    }
    #link1 {
        color: #fff ; 
    }
    #link2 {
        color: #000 ; 
    }
    #image3 {
        margin-top: 100px; 
        margin-left: 100px ; 
    }
    #models{
        font-style: italic;
    }

</style>
