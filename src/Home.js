import React from 'react';
import image from './img/background.jpg';
import articleimg from './img/articleimg.png';

export default class Home extends React.Component{
    
    render(){
        return(
            <div className="app" style={{position:'relative', overflowX:'hidden'}}>
                <div style={{borderBottom:"5px solid #C54B3C", marginBottom:25}}>
                <img src={image} alt="background" width="100%"/>
                <div className="info-box" style={{width:400, height: 200, position:'absolute',top:120, left:260}}>
                    <h2 style={{color:'white',fontSize:28, fontWeight:700}}>Enticing statement goes here.</h2>
                    <p style={{color:'#EAECEE',fontSize:15}}>It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour</p>
                </div>
                </div>
             <div className="container">
             <div className="row" style={{textAlign:'center'}}>
               <div className="col-xs-4 col-sm-4 col-md-4">
                <i className="material-icons" style={{fontSize:60,color:'#C54B3C'}}>assessment</i>
                 <h2>Section Title</h2>
                 <h5>Heading of this section</h5>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s</p>
   
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <i className="material-icons" style={{fontSize:60,color:'#C54B3C'}}>account_box</i>
                 <h2>Section Title</h2>
                 <h5>Heading of this section</h5>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. </p>
               </div>
               <div className="col-xs-4 col-sm-4 col-md-4">
               <i className="material-icons" style={{fontSize:60,color:'#C54B3C'}}>assignment</i>
                 <h2>Section Title</h2>
                 <h5>Heading of this section</h5>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour</p>
               </div>
             </div>
             </div>
             <div>
                <div className="section-box" style={{width:"100%",height:150,backgroundColor:"#C54B3C"}}>
                    <h2 style={{textAlign:'center', color:'white', fontSize: 30,paddingTop:60}}>It's the next generation of location based networking</h2>
                </div>
                <div className="article-box" style={{backgroundColor:"#393B47",color:"#86868E",paddingTop:15}}>
                    <h1 style={{textAlign:'center'}}>See how it works</h1>
                    <div className="row">
                        <div className = "col-sm-4 col-xs-4 col-md-4 col-lg-4 col-sm-offset-2 col-md-offset-2 col-offset-lg-2">
                            <i className="material-icons" style={{fontSize:30,color:'#C54B3C',display:'inline-block'}}>dehaze</i><h5 style={{display:'inline-block', fontSize:20}}>Heading goes here</h5>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humourIt is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour</p> 
                        </div>
                        <div className = "col-sm-4 col-xs-4 col-md-4 col-lg-4">
                            <img src={articleimg} width="80%" alt ="mobile phone"/>
                        </div>
                    </div>
                </div>
            </div> 
         </div>
        );
    }
}