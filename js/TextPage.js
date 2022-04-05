import React, {Component, Fragment} from "react";
import './../css/TextPage.css';
import $ from "jquery";
import gsap from "gsap";


let jsonData;




class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      text: this.props.text,
      image: this.props.image,
      imageSide: this.props.imageSide

    }
  }



  componentDidUpdate(prevProps){


    if (prevProps.title !== this.props.title) {


      if(this.props.imageSide == "left")  {

        $('.textImageHolder').addClass("reverse");
  
      }else {
  
        $('.textImageHolder').removeClass("reverse");
  
      }



      this.setState({title: this.props.title});
      this.setState({text: this.props.text});
      this.setState({image: this.props.image});

      this.animateContent();




    }

  

}





  componentDidMount(){


   


    if(this.props.imageSide == "left")  {

      $('.textImageHolder').addClass("reverse");

    }else {

      $('.textImageHolder').removeClass("reverse");

    }

    this.animateContent();

      


  }



    animateContent(){

        
    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText");
    gsap.killTweensOf(".textImage");

    if(this.props.image == ""){

      $(".textImageHolder").hide();
      $(".textHolder").show();

    }else {

      $(".textImageHolder").show();
      $(".textHolder").hide();

     
      

    }

   


    if(this.props.imageSide=="right"){

      gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
      gsap.fromTo(".pageText",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
      gsap.fromTo(".textImage",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});

    }else {

      gsap.fromTo(".pageTitle",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
      gsap.fromTo(".pageText",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
      gsap.fromTo(".textImage",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});


    }


    
    



  }



  render() {
    return (

      <Fragment>
         

          <div className="row textImageHolder"> 

             <div className="col-lg-7 horizontalCenter" >

                  <div >



                    <div className="pageTitle" dangerouslySetInnerHTML={ { __html: this.state.title } }></div>
                    <div className="pageText" dangerouslySetInnerHTML={ { __html: this.state.text } }></div>

                  </div>

                    </div>

                    <div className="col-lg-5 centerThis">

                        <img className="textImage" src={"images/" + this.state.image}></img>


          
                    </div>

            

          </div>



          <div className="row textHolder"> 

             <div className="col-lg-12 horizontalCenter" >

                  <div >

                    <div className="pageTitle" dangerouslySetInnerHTML={ { __html: this.state.title } }></div>
                    <div className="pageText" dangerouslySetInnerHTML={ { __html: this.state.text } }></div>

                  </div>

                    </div>

            

            

          </div>



    </Fragment>



    )
  
  }

}

export default TextPage;
