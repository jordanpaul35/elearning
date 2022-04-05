import React, {Component, Fragment} from "react";
import './../css/Feedback.css';
import $ from "jquery";


let jsonData;


class TextPage extends Component {

  constructor (props){
    super(props)
    this.state = {

      text:"",
      feedbackPosition:""

    }
  }

  componentWillMount(){

   

  }

  componentDidUpdate(){

    if(this.props.feedbackPosition == "right"){

      $(".fbHolder").addClass("fbRight");

    }else if(this.props.feedbackPosition == "left"){

      $(".fbHolder").addClass("fbLeft");

    }else {

      $(".fbHolder").addClass("fbCenter");

    }

  }


  
  onClick(e){




    $(".fbContainer").hide();

  }

  

  render() {
    return (

      <Fragment>
        
        <div className="fbHolder">

          <div className="feedbackBox">
         
 
            <div className="headerBar">Feedback<span onClick={this.onClick.bind(this)}>X</span></div> 
            <div className="content">{this.props.text}</div> 

            {/* <div className="headerBar">Feedback</div> 
            <div className="content">{this.props.text}<div className="tryAgain" onClick={this.onClick.bind(this)}>Try Again</div> </div>  */}
            


            </div>


            </div>




    </Fragment>



    )
  
  }

}

export default TextPage;
