import React, {Component, Fragment} from "react";
import './../css/PDF.css';
import $ from "jquery";
import gsap from "gsap";


let jsonData;
let lightBlue = "#57bdd9";
let darkBlue = "#263847";
let pink = "#e80149";



class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      text: this.props.text,
      image: this.props.image,
      pdf: this.props.pdf
      

    }
  }



  componentDidUpdate(prevProps){

    if (prevProps.title !== this.props.title) {


      this.setState({title: this.props.title});
      this.setState({subtitle: this.props.text});
      this.setState({image: this.props.image});
      this.setState({pdf: this.props.pdf});

      this.animateContent();

    }

  

}





  componentDidMount(){


    this.animateContent();



  }



  animateContent (){

    gsap.killTweensOf(".pdfImage");
    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText");
    gsap.killTweensOf(".titleIcon");
    gsap.killTweensOf(".blueBtn");
  

    gsap.fromTo(".titleIcon",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
    gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
    gsap.fromTo(".pageText",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});
    gsap.fromTo(".pdfImage",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.6});
    gsap.fromTo(".blueBtn",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.8});



  }


  onMouseOver(e){
  
    gsap.to(e.target, { backgroundColor: "#FFFFFF", color: darkBlue, borderColor: darkBlue,  duration: .3});
  
  }

  onMouseOut(e){
  
    gsap.to(e.target, { backgroundColor: darkBlue, color: "#FFFFFF", borderColor: "#FFFFFF",  duration: .3});
  
  }


  onClick(e){
  
    window.open("pdf/" + this.state.pdf);
  }





  render() {
    return (

      <Fragment>
         

          <div className="row textImageHolder"> 

             <div className="col-md-6 centerThis" >

                  <div >
                  <img className="titleIcon" src={"images/note.png"}></img>
                    <div className="pageTitle textHasIcon">{this.state.title}</div>

                    <div className="pageText textHasIcon">{this.state.text}</div>
                    <center>
                    <div className="blueBtn" id="downloadActivity" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onClick.bind(this)}>Download Activity</div>
                    </center>
                  </div>

                    </div>

                    <div className="col-md-6 centerThis">

                        <img className="pdfImage" src={"images/" + this.state.image}></img>


          
                    </div>

            

          </div>



    </Fragment>



    )
  
  }

}

export default TextPage;
