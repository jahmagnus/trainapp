import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const iconStyles = {
        textAlign: "center",
        fontSize: "large",
      };
    
      const rowStyleOne = {
        height: "56rem",
        paddingTop: "1rem",
        paddingLeft: "0.5rem",
      };
    
      const rowStyleTwo = {
        height: "65rem",
        paddingTop: "1rem",
      };
    
      //navbar divs containg the icons and heading
      const divStyle = {
        height: "9rem",
        width: "8rem",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: '25%',
        paddingBottom: '25%',
        color: "black"
      };
    
      const columnOneStyle = {
        borderRight: ".08rem solid black",
        height: "65rem",
      };
    
      //styling for column 2 row 1
      const rowStyleUsername = {
        height: "5rem",
        paddingTop: "1.5rem",
      };
    
      //homepage user details div styles
      const rowStyleUserDetails = {
        height: "56rem",
        border: ".08rem solid black",
        paddingLeft: '0.5rem'
      };
    
      const gridStyle = {
        height: "61rem",
      };
        
    
        const appStyle ={
            backgroundColor: "none",
            height: '56rem'
        }

        return(
        <div className="ui grid" style={appStyle}>
        <div className="ui two column grid" style={gridStyle}>
      <div className="six wide column" style={columnOneStyle}>
        <div className="seven column row" style={rowStyleOne}>
          <div className="row" style={iconStyles}>
            <Link to='/'><div style={divStyle}>
              <i className="big home icon"></i>
              <br />
              Home
            </div>
            </Link>
          </div>

          <div className="row" style={iconStyles}>
            <Link to='/departures'> 
            <div style={divStyle}>
              <i className="big clock icon"></i>
              <br />
              Departures
            </div>
            </Link>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className=" big train icon"></i>
              <br />
              Arrivals
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big sun icon"></i>
              <br />
              Weather
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big clipboard icon"></i>
              <br />
              Incident form
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className="big first aid icon"></i>
              <br />
              Accident form
            </div>
          </div>

          <div className="row" style={iconStyles}>
            <div style={divStyle}>
              <i className=" big money bill alternate icon"></i>
              <br />
              Payslips
            </div>
          </div>
        </div>
      </div>

      <div className="ten wide column" style={rowStyleTwo}>
        <div className="two column row" style={rowStyleTwo}>
          <div className="row" style={rowStyleUsername}>
            Hello, Generic User
          </div>

          <div className="row" style={rowStyleUserDetails}>
            User details
          </div>
        </div>
      </div>
    </div>
            
        </div>
        
    )
}


export default Home
