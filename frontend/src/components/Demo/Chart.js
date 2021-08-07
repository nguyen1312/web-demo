import React, { useState, useEffect } from "react";
import "../../style/vqa/ChartStyle.css";
import ProgressBar from "./ProgressBar";

function Chart(props) {
  let answers = props.data
  return (
    <div className="Chart">
        {
            answers.map(
                (val, index) => {
                    let answer = val.split(":")[1]
                    answer = answer.slice(2, answer.length - 2)
                    if (answer == "lĩnh vực") {
                        answer = "cánh đồng lúa"
                    }
                    let p = val.split(":")[0]
                    p = p.slice(2, p.length)
                    console.log(p)
                   
        
                    return (
                        <div className="row">
                            <div className="column">
                                <h3 className="answer">
                                    {answer.toUpperCase()}
                                </h3>
                            </div>
                            <div className="column">
                                <div className="probability">
                                    <ProgressBar bgcolor={"#6a1b9a"} 
                                            completed={p * 100}          
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            )
        }
    </div>
    
    // <div className="Chart">
    //     {
    //         props.data.map(
    //             (val, index) => {
    //                 let answer = Object.keys(val)[0]
    //                 let probability = val[answer]
    //                 return (
    //                     <div className="row">
    //                         <div className="column">
    //                             <h3 className="answer">
    //                                 {answer.toUpperCase()}
    //                             </h3>
    //                         </div>
    //                         <div className="column">
    //                             <div className="probability">
    //                                 <ProgressBar bgcolor={"#6a1b9a"} 
    //                                         completed={probability * 100}          
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>
    //                 )
    //             }
    //         )
    //     }
  );
}

export default Chart;
