import Webcam from "react-webcam";
import './UwbForm.css';


// import {Button} from 'antd';
const UwbForm =({GoogleMaps, tagId, setTagId, width, height, tagInfo, uwbData, pointColor, lati, longi})=>{
  return(
      <div className='UwbForm'>
        <div className='UwbForm1'>
          <GoogleMaps setTagId={setTagId} uwbData={uwbData} pointColor={pointColor}/>
        </div>
        <div className='UwbForm2'>
            <div className='UwbForm2_Top'>
              <Webcam audio={false} width={width} height={height} />
            <table className="PName">
                <thead>
                  <td>소속</td>
                  <td>h4tech</td>
                </thead>
                <tbody>
                  <th>이름</th>
                  <td>최열</td>
                </tbody>
            </table>
            </div>
            <div className='UwbForm2_Bottom'>
            <table className="PInfo">
              {/*클릭했을때 태그 아이디와 정보를 넘겨줘서 테이블에 그려줍니다. */}
                    <thead>
                      <tr>
                        <th scope="cols">해당태그의 병사지표</th>
                        <th scope="cols">이전기록과 비교</th>
                      </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>movacc: {tagInfo(tagId).movacc}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>vel: {tagInfo(tagId).vel}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {tagId!=0?<li>avgvel: {tagInfo(tagId).avgvel}</li>:<li>안되나</li>}
                      </th>
                      <td>내용이 들어갑니다.</td>
                    </tr>
                  </tbody>
            </table>
          </div>
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
