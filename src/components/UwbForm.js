import Webcam from "react-webcam";
import './UwbForm.css';
const UwbForm =({tagId, setTagId, width, height, tagInfo, uwbData, pointColor, lati, longi})=>{

// let swap = 0; 색 랜덤위한 함수
// let res;
// let selColor =(uwb)=>{
//   let numId = Number(uwb.id);
//   let ranColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//   if(swap == numId)
//   {
//     return res;
//   }else{
//     res = ranColor;
//     swap = numId;
//   }
//   return res;
// }
  return(
      <div className='UwbForm'>
        <div className='UwbForm1'>
            <Webcam audio={false} width={width} height={height} />
        </div>
        <div className='UwbForm2'>
            <div className='UwbForm_ground'>
              <img src='./ground.png' alt='imageFile' />

              {uwbData&&uwbData.map((dataArr,indexArr)=>{
                    return dataArr.map((data, index)=>{
                        return <div key={index} className='UwbForm_point' onClick={()=>{ setTagId(data.id)}}
                              style={{position:'absolute',  backgroundColor:`${pointColor(data.id)}`, top:`${lati(dataArr[index])}%`, left:`${longi(dataArr[index])}%` }} />
                })
             })}
            </div>
        </div>
        <div className='UwbForm3'>
            {tagId!=0?<li>아이디: {tagInfo(tagId).id}</li>:<div>안된다</div>}
            {tagId!=0?<li>movacc: {tagInfo(tagId).movacc}</li>:<div>안된다</div>}
            {tagId!=0?<li>vel: {tagInfo(tagId).vel}</li>:<div>안된다</div>}
            {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<div>안된다</div>}
            {tagId!=0?<li>accel: {tagInfo(tagId).accel}</li>:<div>안된다</div>}

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
