import React, {Component, Fragment} from "react";
import './../css/Storyline.css';
import $ from "jquery";
import gsap from "gsap";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";


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
      folder: this.props.folder
      

    }
  }



  componentDidUpdate(prevProps){


    if (prevProps.title !== this.props.title) {




      this.setState({title: this.props.title});
      this.setState({subtitle: this.props.text});


      this.animateContent();



    }

  

}





  componentDidMount(){


    this.animateContent();

     

      
  }


  animateContent(){

    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText");
    gsap.killTweensOf(".titleIcon");



    gsap.fromTo(".titleIcon",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
    gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
    gsap.fromTo(".pageText",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});



  }



  render() {
    return (

      <Fragment>
         





          <div className="row"> 

             <div className="col-md-12 centerThis" >

                  <div >

                      <img className="titleIcon" src={"images/arrow.png"}></img>
                      
                      <div className="pageTitle textHasIcon">{this.state.title}</div>

                      <div className="pageText textHasIcon">{this.state.text}</div>

                  </div>

              </div>

            

          </div>



          <div className="row storylineHolder"> 


                {/* <iframe  height="500" src="./../storyline/interaction1/story.html"></iframe> */}
                <iframe  height="500" src="./storyline/interaction1/story.html"></iframe>



          </div>



    </Fragment>



    )
  
  }

}

export default TextPage;
