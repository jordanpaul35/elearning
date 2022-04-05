import React, {Component, Fragment} from "react";
import './../css/TitlePage.css';
import $, { css } from "jquery";
import gsap from "gsap";


class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      subtitle: this.props.subtitle

    }
  }

  componentDidUpdate(prevProps){



      if (prevProps.title !== this.props.title) {



        this.setState({title: this.props.title});
        this.setState({subtitle: this.props.subtitle});

        this.animateContent();


      }

    

  }


  componentDidMount(){

      
    this.animateContent();



  }


  animateContent(){


    
    gsap.killTweensOf(".mainTitle");
    gsap.killTweensOf(".pinkBar");

    gsap.fromTo(".mainTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
    gsap.fromTo(".pinkBar",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});

  }

  

  render() {
    return (

      <Fragment>
         


          <div className="row"> 

              <div className="col-md-12 " >

                  
                      <div className="mainTitle">{this.state.title}</div>
                      <div className="pinkBar">{this.state.subtitle}</div>
           

              </div>

            
          </div>


    </Fragment>



    )
  
  }

}

export default TextPage;
