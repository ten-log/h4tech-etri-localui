import Webcam from "react-webcam";
import './UwbForm.css';
const UwbForm =({GoogleMaps, tagId, setTagId, width, height, tagInfo, uwbData, pointColor, lati, longi})=>{

  return(
      <div className='UwbForm'>
        <div className='UwbForm1'>
               <GoogleMaps />
        </div>
        <div className='UwbForm2'>
            <div className='UwbForm_ground'>
              <img src='./ground.png' alt='imageFile' />

              {uwbData&&uwbData.map((dataArr,indexArr)=>{
                    return dataArr.map((data, index)=>{
                        return <div key={index} className='UwbForm_point' onClick={()=>{ setTagId(data.id)}}
                              style={{position:'absolute',  backgroundColor:`${pointColor(data.id)}`, top:`${lati(dataArr[index])}%`, left:`${longi(dataArr[index])}%` }} />
                          });
                        })}
            </div>
        </div>
        <div className='UwbForm3'>
                <Webcam audio={false} width={width} height={height} />
            {tagId!=0?<li>아이디: {tagInfo(tagId).id}</li>:<li>안되나</li>}
            {tagId!=0?<li>movacc: {tagInfo(tagId).movacc}</li>:<li>안되나</li>}
            {tagId!=0?<li>vel: {tagInfo(tagId).vel}</li>:<li>안되나</li>}
            {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<li>안되나</li>}
            {tagId!=0?<li>accel: {tagInfo(tagId).accel}</li>:<li>안되나</li>}

        </div>
      </div>
  );
}
export default UwbForm;

/*

<div className='UwbForm_point'
   style={{width:'0.5vw', height:'1vh', backgroundColor:'red'}} />


<div className='UwbForm_point'
   style={{position:'relative', left:'50%', top:'75%', width:'0.5vw', height:'1vh', backgroundColor:'red'}} />

*/
