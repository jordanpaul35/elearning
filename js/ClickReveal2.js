import React, {Component, Fragment} from "react";
import './../css/ClickReveal2.css';
import $ from "jquery";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


let jsonData;
let lightBlue = "#57bdd9";
let darkBlue = "#263847";
let pink = "#e80149";
let clickedBtns = [0,0,0];


class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      text: this.props.text,
      btn1Text: this.props.btn1Text,
      btn2Text: this.props.btn2Text,
      btn3Text: this.props.btn3Text,
      btn1RevealTitle: this.props.btn1RevealTitle,
      btn2RevealTitle: this.props.btn2RevealTitle,
      btn3RevealTitle: this.props.btn3RevealTitle,
      btn1RevealText: this.props.btn1RevealText,
      btn2RevealText: this.props.btn2RevealText,
      btn3RevealText: this.props.btn3RevealText,
      updatedBtnTitle: "",
      updatedBtnText: ""

    }
  }



  componentDidUpdate(prevProps){


    if (prevProps.title !== this.props.title) {


      this.setState({title: this.props.title});
      this.setState({subtitle: this.props.text});
      this.setState({image: this.props.image});


      this.animateContent();



    }

  

}





  componentDidMount(){

    this.animateContent();
    

  }


  animateContent(){

    clickedBtns = [0,0,0];
    $(".nextBtn").addClass("disabled");

    gsap.killTweensOf("#revealBtn1");
    gsap.killTweensOf("#revealBtn2");
    gsap.killTweensOf("#revealBtn3");
    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText");


    gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
    gsap.fromTo(".pageText",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
    gsap.fromTo("#revealBtn1",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});
    gsap.fromTo("#revealBtn2",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.6});
    gsap.fromTo("#revealBtn3",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.8});


  }




  mouseOver(e){
  
    gsap.to(e.target, { backgroundColor: lightBlue,   duration: .3});
  
  }
  
  mouseOut(e){
    gsap.to(e.target, { backgroundColor: pink,   duration: .3});
  
  
  }
  

  onClick(e){

    var whichButton = e.target.id[e.target.id.length -1];

  


    if(whichButton == "1"){
      this.setState({updatedBtnTitle: this.state.btn1RevealTitle});
      this.setState({updatedBtnText: this.state.btn1RevealText});

      clickedBtns[0] = 1;

    }else if(whichButton == "2"){
      this.setState({updatedBtnTitle: this.state.btn2RevealTitle});
      this.setState({updatedBtnText: this.state.btn2RevealText});

      clickedBtns[1] = 1;

    }else if(whichButton == "3"){
      this.setState({updatedBtnTitle: this.state.btn3RevealTitle});
      this.setState({updatedBtnText: this.state.btn3RevealText});

      clickedBtns[2] = 1;

    }


    
    gsap.killTweensOf(".fb");
    gsap.killTweensOf(".fbBox");

    $(e.target).find(".revealCheck").css("visibility", "visible");
    gsap.to($(e.target).find(".revealCheck"), { opacity: "1",  duration: .5});


    $(".fb").css("visibility", "visible");
    gsap.fromTo($(".fb"), {opacity:0},  {opacity: "1", duration:1.5, delay:.5, ease: "power4.out"});
    gsap.fromTo($(".fbBox"), {x:"-100%" },  {x: "0", duration:1.5, delay:.5, ease: "power4.out"});


    let howManyClicked = 0;

    for(var i=0; i<= clickedBtns.length; i++){

      if(clickedBtns[i] == 1){

        howManyClicked++;

      }


      


    }

    if(howManyClicked == 3){

      $(".nextBtn").removeClass("disabled");

    }

    

  }



  closeOver(e){
  
    gsap.to(e.target, { backgroundColor: "#FFFFFF", color: darkBlue, borderColor: darkBlue,  duration: .3});
  
  }

  closeOut(e){
  
    gsap.to(e.target, { backgroundColor: darkBlue, color: "#FFFFFF", borderColor: "#FFFFFF",  duration: .3});
  
  }


  closefb(e){
  
    $(".fb").css("visibility", "hidden");
    $(".fb").css("opacity", "0");
  }




  render() {
    return (

      <Fragment>
         


      <div className="fb">


          <div className="fbBox"><h4>{this.state.updatedBtnTitle}</h4><p  dangerouslySetInnerHTML={ { __html: this.state.updatedBtnText } }></p>
         
          
            <div className="blueBtn" id="fbClose" onMouseOver={this.closeOver} onMouseOut={this.closeOut} onClick={this.closefb.bind(this)}>Close</div>
          
          </div>

      </div>


          <div className="row "> 

             <div className="col-lg-6 centerThis" >

                  <div >
                    {/* <div className="pageTitle">{this.state.title}</div> */}
                    <div className="pageTitle" dangerouslySetInnerHTML={ { __html: this.state.title } }></div>

                    {/* <div className="pageText">{this.state.text}</div> */}

                    <div className="pageText" dangerouslySetInnerHTML={ { __html: this.state.text } }></div>

                  </div>

                    </div>

                    <div className="col-lg-6 centerThis">

                      <div className="btnHolder addTopMargin">

                        <div className="revealBtn" id="revealBtn1" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>{this.state.btn1Text}<FontAwesomeIcon icon={faCheck} className="revealCheck"/></div>

                        <div className="revealBtn" id="revealBtn2" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>{this.state.btn2Text}<FontAwesomeIcon icon={faCheck} className="revealCheck"/></div>

                        <div className="revealBtn" id="revealBtn3" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>{this.state.btn3Text}<FontAwesomeIcon icon={faCheck} className="revealCheck"/></div>

                      </div>


          
                    </div>

            

          </div>



    </Fragment>



    )
  
  }

}

export default TextPage;
