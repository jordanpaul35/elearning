
import React, {Component, Fragment,  useState, useEffect} from "react";
// import React, { useLayoutEffect, useState } from "react";

import './../css/App.css';
import $ from "jquery";
import gsap from "gsap";
import logo from './../images/Amplified_LOGO.png';
import TextPage from './../js/TextPage';
import TitlePage from './../js/TitlePage';
import ClickReveal from './../js/ClickReveal';
import ClickReveal2 from './../js/ClickReveal2';
import ConversationMultiChoice from './../js/ConversationMultiChoice';
import PDF from './../js/PDF';
import Storyline from './../js/Storyline';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

let mainJsonData;
let counter = 0;
let totalInteractions = 0;
let  progressSection;

let lightBlue = "#57bdd9";
let darkBlue = "#263847";
let pink = "#e80149";





class App extends React.Component {


  constructor (props){
    super(props)
    this.state = {

      slideType:"",
      slideContent:"",
      totalInteractions:""

    }

  
  }




  componentWillMount(){


    let jsonFile = $(".reactHolder").attr("data-mainJson");


      $.getJSON("./json/" + jsonFile + ".json", function success(data){

      mainJsonData = data;
      this.setState({slideType: mainJsonData.slides[counter].type});

      this.setState({totalInteractions: mainJsonData.slides.length});


      this.pickASlide();




    }.bind(this));
   

  }

componentDidUpdate(){

 

  this.updateProgressBar();


}


updateProgressBar (){

   gsap.to(".progressMeterFill", {width:  ((counter +  1) / this.state.totalInteractions * 100 )  + "%" , duration: 1, ease: "power4.out"});


}



mouseOver(e){


  gsap.to(e.target, {color:"#FFFFFF", borderColor: "#FFFFFF", backgroundColor: lightBlue, duration: .3});
 


}

mouseOut(e){


  gsap.to(e.target, {color:lightBlue, borderColor: lightBlue, backgroundColor: "#FFFFFF", duration: .3});

}

onClick(e){


if(e.target.className == "nextBtn"){
  counter++;
  $(".prevBtn").removeClass("disabled");

  if(counter == (this.state.totalInteractions - 1)){
    $(".nextBtn").addClass("disabled");
  }


}else{


  if(counter == 1){
    $(".prevBtn").addClass("disabled");
  }

  if(counter >=1){
  counter--;
  $(".nextBtn").removeClass("disabled");
  }
}




this.updateProgressBar();



this.pickASlide();



}


//determine which interaction to use and pass in the content
pickASlide(){


  $(".mainContentHolder").removeClass("centerThis");


  if(mainJsonData.slides[counter].type == "Title"){
  
    $(".mainContentHolder").addClass("centerThis");
    this.setState({slideContent: <TitlePage title = {mainJsonData.slides[counter].title }  subtitle = {mainJsonData.slides[counter].subtitle } />});
   

  
  } else if(mainJsonData.slides[counter].type == "Text"){
  
    this.setState({slideContent: <TextPage title = {mainJsonData.slides[counter].title }  text = {mainJsonData.slides[counter].text }  image = {mainJsonData.slides[counter].image}  imageSide = {mainJsonData.slides[counter].imageSide}/>});
  
  
  }else if(mainJsonData.slides[counter].type == "ClickReveal"){
  
    this.setState({slideContent: <ClickReveal title = {mainJsonData.slides[counter].title }  topText = {mainJsonData.slides[counter].topText }  bottomText = {mainJsonData.slides[counter].bottomText }  image1 = {mainJsonData.slides[counter].btn1Image} image2 = {mainJsonData.slides[counter].btn2Image}  image3 = {mainJsonData.slides[counter].btn3Image} btn1Text = {mainJsonData.slides[counter].btn1Text }  btn2Text = {mainJsonData.slides[counter].btn2Text }  btn3Text = {mainJsonData.slides[counter].btn3Text }/>});
  
  
  
  }else if(mainJsonData.slides[counter].type == "ClickReveal2"){
  
    this.setState({slideContent: <ClickReveal2 title = {mainJsonData.slides[counter].title }  text = {mainJsonData.slides[counter].text } btn1Text = {mainJsonData.slides[counter].btn1Text }  btn2Text = {mainJsonData.slides[counter].btn2Text }  btn3Text = {mainJsonData.slides[counter].btn3Text } btn1RevealTitle = {mainJsonData.slides[counter].btn1RevealTitle }   btn2RevealTitle = {mainJsonData.slides[counter].btn2RevealTitle }    btn3RevealTitle = {mainJsonData.slides[counter].btn3RevealTitle }   btn1RevealText = {mainJsonData.slides[counter].btn1RevealText }   btn2RevealText = {mainJsonData.slides[counter].btn2RevealText }  btn3RevealText = {mainJsonData.slides[counter].btn3RevealText }   />});
  
  
  }else if(mainJsonData.slides[counter].type == "PDF"){
  
    this.setState({slideContent: <PDF title = {mainJsonData.slides[counter].title }  text = {mainJsonData.slides[counter].text } image = {mainJsonData.slides[counter].image }   pdf = {mainJsonData.slides[counter].pdf } />});
  
  
  }else if(mainJsonData.slides[counter].type == "Storyline"){
  
    this.setState({slideContent: <Storyline title = {mainJsonData.slides[counter].title }  text = {mainJsonData.slides[counter].text } folder = {mainJsonData.slides[counter].folder }   />});

  
  }else if(mainJsonData.slides[counter].type == "ConversationMultiChoice"){
  
    this.setState({slideContent: <ConversationMultiChoice title = {mainJsonData.slides[counter].title }  text = {mainJsonData.slides[counter].text } image = {mainJsonData.slides[counter].image }  textBubble = {mainJsonData.slides[counter].textBubble  }    button1 = {mainJsonData.slides[counter].button1  }  button2 = {mainJsonData.slides[counter].button2  } button3 = {mainJsonData.slides[counter].button3  }  question = {mainJsonData.slides[counter].question }/>});

  
  }




}



  render() {



      return(
        

          <Fragment>
         
          <div className="container" >

            <div className="row" >

                  <div className="headerBg"> 
                  
                    <div className="headerBgImage"></div>
                  
                    <div class="headerStripe"></div>
                  
                  </div> 
                  <div className="logoContainer">
                        
                        <img className="logo" src={logo}/>
   
                  

                   </div>
                  


           </div>



              <div className="mainContentHolder">{this.state.slideContent}</div>

    

            
            <div className="centerThis">
              <div className="footer">
              
                <div className="prevBtn disabled" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}><FontAwesomeIcon icon={faChevronLeft} className="disabledArrow"/></div>

                <div className="nextBtn" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}><FontAwesomeIcon icon={faChevronRight} className="disabledArrow"/></div>

                <div className="progressMeter" onResize={this.resizeFunction}>
                  <div className="progressMeterFill"></div>
                </div>


                </div>

            </div>
          </div>

          </Fragment>

      )

    

  }

}

export default App;
