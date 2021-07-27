import React, { useState, useEffect } from "react";
import "../../style/vqa/ChartStyle.css";
import ProgressBar from "./ProgressBar";

function Chart(props) {
  return (
    // <div className="Chart">
    //     {
    //         props.data.map(
    //             (val, index) => {
    //                 let answer = val.split(":")[2]
    //                             .split(" ")
    //                             .slice(0, val.split(":")[2]
    //                             .split(" ").length -1)
    //                             .join(" ")
    //                             .replace("\'","")
    //                 let probability = val.split(" ")[val.split(" ").length - 1].split("\'")[0]
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
    //   {/* <ProgressBar bgcolor={"#6a1b9a"} completed={completed}  />
      
    //   <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    //   <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    //   <ProgressBar bgcolor={"#6a1b9a"} completed={completed} /> */}
    // </div>
    <div className="Chart">
        {
            props.data.map(
                (val, index) => {
                    let answer = Object.keys(val)[0]
                    let probability = val[answer]
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
                                            completed={probability * 100}          
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            )
        }
      {/* <ProgressBar bgcolor={"#6a1b9a"} completed={completed}  />
      
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} /> */}
    </div>
  );
}

export default Chart;
