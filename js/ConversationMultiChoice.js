import React, {Component, Fragment} from "react";
import './../css/ConversationMultiChoice.css';
import $ from "jquery";
import gsap from "gsap";


let jsonData;
let darkBlue = "#263847";



class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      title: this.props.title,
      text: this.props.text,
      image: this.props.image,
      textBubble: this.props.textBubble,
      button1: this.props.button1,
      button2: this.props.button2,
      button3: this.props.button3,
      question: this.props.question

    }
  }



  componentDidUpdate(prevProps){


    if (prevProps.title !== this.props.title) {



      this.setState({title: this.props.title});
      this.setState({text: this.props.text});
      this.setState({image: this.props.image});

      this.animateContent();




    }

  

}





  componentDidMount(){


   

    this.animateContent();

      


  }



  animateContent(){

        
    gsap.killTweensOf(".pageTitle");
    gsap.killTweensOf(".pageText");
    gsap.killTweensOf(".textImage");



      gsap.fromTo(".pageTitle",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out"});
      gsap.fromTo(".pageText",  {opacity: 0, x: "-100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.2});
      gsap.fromTo(".textImage",  {opacity: 0, x: "100"}, {opacity: 1, x:"0" , duration: 1, ease: "power4.out", delay:.4});



    
  

  }


  btnOver(e){
  
    gsap.to(e.target, { backgroundColor: "#FFFFFF", color: darkBlue, borderColor: darkBlue,  duration: .3});
  
  }

  btnOut(e){
  
    gsap.to(e.target, { backgroundColor: darkBlue, color: "#FFFFFF", borderColor: "#FFFFFF",  duration: .3});
  
  }





  render() {
    return (

      <Fragment>
         

          {/* <div className="row"> 

             <div className="col-lg-12 horizontalCenter" >

                  <div >

                    <div className="pageTitle" dangerouslySetInnerHTML={ { __html: this.state.title } }></div>
                    <div className="pageText" dangerouslySetInnerHTML={ { __html: this.state.text } }></div>

                  </div>

             </div>

           

          </div> */}




          <div className="row"> 

             <div className="col-lg-3 characterHolder " >

                <img className="character" src={"images/" + this.state.image}></img>
                {/* <div className="speechBubble" >asdfasfsd</div> */}

              </div>

              <div className="col-lg-9 speechBubbleHolder " >

                {/* <img className="character" src={"images/" + this.state.image}></img> */}
                <div className="speechBubbleLeft" >{this.state.textBubble}</div>
                <div className="speechBubbleUp" >{this.state.textBubble}</div>

              </div>


           </div>
              {/* <div className="questionBlueBar">

                <div className="row  optionHolder ">

                  <div className="col-md-4 blueBtn" onMouseOver={this.btnOver} >{this.state.button1}</div>
                  <div className="col-md-4 blueBtn" >{this.state.button2}</div>
                  <div className="col-md-4 blueBtn" >{this.state.button3}</div>

                </div>


              </div> */}

          {/* <div className="optionsAndBlueBarContainer"> */}
              
          <div className="questionTitle">{this.state.question}</div>

                <div className="optionHolder row ">

                

                  <div className="col-md-4 centerThis">

                    <div className="blueBtn" onMouseOver={this.btnOver}  onMouseOut={this.btnOut}>{this.state.button1}</div>
                  
                  </div>
                  <div className="col-md-4 centerThis">
                    
                    <div className="blueBtn" onMouseOver={this.btnOver}  onMouseOut={this.btnOut}>{this.state.button2}</div>
                  
                  </div>
                  <div className="col-md-4 centerThis">
                    
                    <div className="blueBtn" onMouseOver={this.btnOver}  onMouseOut={this.btnOut}>{this.state.button3}</div>
                  
                  </div>

                </div>


                {/* <div className="optionBlueBar"></div> */}


          {/* </div> */}

          



          {/* <div className="row textHolder"> 

             <div className="col-lg-12 horizontalCenter" >

                  <div >

                    <div className="pageTitle" dangerouslySetInnerHTML={ { __html: this.state.title } }></div>
                    <div className="pageText" dangerouslySetInnerHTML={ { __html: this.state.text } }></div>

                  </div>

                    </div>

            

            

          </div> */}



    </Fragment>



    )
  
  }

}

export default TextPage;
