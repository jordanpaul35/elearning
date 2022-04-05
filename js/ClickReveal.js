import React, {Component, Fragment} from "react";
import './../css/ClickReveal.css';
import $ from "jquery";
import gsap from "gsap";


let jsonData;
let clickedBtns = [0,0,0];



class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      topText: this.props.topText,
      bottomText: this.props.bottomText,
      image1: this.props.image1,
      image2: this.props.image2,
      image3: this.props.image3,
      btn1Text: this.props.btn1Text,
      btn2Text: this.props.btn2Text,
      btn3Text: this.props.btn3Text

    }
  }



  componentDidUpdate(prevProps){


    if (prevProps.title !== this.props.title) {


      this.setState({title: this.props.title});
      this.setState({subtitle: this.props.text});
      this.setState({image1: this.props.image1});
      this.setState({image2: this.props.image1});
      this.setState({image3: this.props.image1});


      this.animateContent();


    }

  

}





  componentDidMount(){
    
    this.animateContent();


  }


  animateContent(){

    clickedBtns = [0,0,0];
    $(".nextBtn").addClass("disabled");


    gsap.killTweensOf(".clickImage");
    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText1");
    gsap.killTweensOf(".pageText2");
    gsap.killTweensOf(".clickImage1");
    gsap.killTweensOf(".clickImage2");
    gsap.killTweensOf(".clickImage3");



    // $("#clickImage1").css("background-image", "url(./../images/" + this.state.image1 + ")");
    // $("#clickImage2").css("background-image", "url(./../images/" + this.state.image2 + ")");
    // $("#clickImage3").css("background-image", "url(./../images/" + this.state.image3 + ")");

    $("#clickImage1").css("background-image", "url(./images/" + this.state.image1 + ")");
    $("#clickImage2").css("background-image", "url(./images/" + this.state.image2 + ")");
    $("#clickImage3").css("background-image", "url(./images/" + this.state.image3 + ")");


    gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
    gsap.fromTo("#pageText1",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
    gsap.fromTo("#clickImage1",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});  
    gsap.fromTo("#clickImage2",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.6});  
    gsap.fromTo("#clickImage3",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.8});  
    gsap.fromTo("#pageText2",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:1});  


  




  }





  mouseOver(e){
  
    gsap.to(e.target, { borderRadius: "25px",   duration: .3});
  
  }
  
  mouseOut(e){
    gsap.to(e.target, { borderRadius: "0px",  duration: .3});
  
  
  }
  

  onClick(e){


    $(e.target).find(".revealBox").css("visibility", "visible");
    $(e.target).css("pointer-events", "none");
    gsap.to($(e.target).find(".revealBox"), { opacity: "1",  duration: .5});
    gsap.to($(e.target), { borderRadius: "0px",  duration: .3});


    var whichButton = e.target.id[e.target.id.length -1];

  


    if(whichButton == "1"){


      clickedBtns[0] = 1;

    }else if(whichButton == "2"){


      clickedBtns[1] = 1;

    }else if(whichButton == "3"){


      clickedBtns[2] = 1;

    }


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




  render() {
    return (

      <Fragment>
         





          <div className="row"> 

              <div className="col-md-12 centerThis" >

                    <div >
                      <div className="pageTitle">{this.state.title}</div>

                      {/* <div className="pageText" id="pageText1">{this.state.topText}</div> */}

                      <div className="pageText" id="pageText1" dangerouslySetInnerHTML={ { __html: this.state.topText } }></div>

                    </div>

              </div>

            </div>


            <div className="row addTopMargin"> 

              <div className="col-lg-4 centerThis">

                  <div className="clickImage" id="clickImage1" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>
                    
                    {/* <div className="revealBox" id="reveal1">{this.state.btn1Text}</div> */}

                    <div className="revealBox" id="reveal1" dangerouslySetInnerHTML={ { __html: this.state.btn1Text } }></div>
                    
                  </div>

                </div>

                <div className="col-lg-4 centerThis">

                  <div className="clickImage" id="clickImage2" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>
                    
                    {/* <div className="revealBox" id="reveal2">{this.state.btn2Text}</div> */}

                    <div className="revealBox" id="reveal2" dangerouslySetInnerHTML={ { __html: this.state.btn2Text } }></div>
                    
                  </div>

                </div>

                <div className="col-lg-4 centerThis">

                    <div className="clickImage" id="clickImage3" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick.bind(this)}>
                      
                      {/* <div className="revealBox" id="reveal3">{this.state.btn3Text}</div> */}

                      <div className="revealBox" id="reveal3" dangerouslySetInnerHTML={ { __html: this.state.btn3Text } }></div>
                      
                    </div>

                </div>

              </div>
          
             

              <div className="row"> 

                  <div className="col-md-12 centerThis" >

                      <div className="pageText" id="pageText2">{this.state.bottomText}</div>


                  </div>

              </div>

         



    </Fragment>



    )
  
  }

}

export default TextPage;
