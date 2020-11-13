import {useEffect, useState} from 'react';
import UwbForm from '../components/UwbForm';
import {useDispatch, useSelector} from 'react-redux';
import {locationData} from '../modules/uwb';
import GoogleMaps from '../lib/googleAPI/GoogleMaps';

const Uwb =()=>{

const width='50%';          //카메라 비율 조정
const height='30%';         //카메라 비율 조정
const dispatch= useDispatch(); //dispatch 추가
const [tagId, setTagId] =useState(0);  //가속도등의 추가 정보를 가져올때 필요한 id값 체크 용도

// uwbData 2차원 배열로 구분된 uwb데이터
// uwbGet 1차원 배열로 구분된 uwb의 현재 데이터
const {uwbData, uwbGet } = useSelector(state=>({
  uwbData:state.uwb.uwbData,
  uwbGet:state.uwb.uwbGet,
}));

useEffect(()=>{  //주기적으로 uwb데이터 요청
  const interval = setInterval(() => {
    // / dispatch(locationData());
  }, 1000);

  return () => clearInterval(interval); //컴포넌트 이탈시 반복 제거
}, [dispatch]);

const lati =(uwb)=>{ // 위도를 이미지위에 표시하기위한 식
  let rmPrime = 1000000;
  let lat = ((uwb.lat- 36.379090)*rmPrime).toFixed(0);
  let percent= lat/1715;  //1715는 위도의 최고 최저 기준점의 차이
  let res = percent * 100;
  let swap = 100 - res.toFixed(1); //그림이 top부터 찍히지만 구현은 바텀부터 올라가야되서
  return swap;
}

const longi =(uwb)=>{ // 경도를 이미지위에 표시하기위한 식
  let rmPrime = 1000000;
  let lon = ((uwb.lon- 127.364443)*rmPrime).toFixed(0);
  let percent= lon/1192;  //1192 경도의 최고 최저 기준점의 차이값
  let res = percent * 100;
  return res.toFixed(1);
}

const pointColor =(uwbId)=>{ //id값당 색 지정해줘서 표시
  let colorArr =['#FF0000', '#FFE400', '#000000', '#1FDA11', '#00D8FF', '#0900FF', '#6600FF', '#FF00DD', '#FF5E00', '#FFFFFF'];
  //색 21
  let res = colorArr[uwbId-1];
  return res;
}


const tagInfo=(tagId)=>{ // 클릭한 id 태그의 추가데이터 표출용
  let uwbLatestNum = uwbData[tagId].length-1;
  let uwbLatestArr = uwbData[tagId][uwbLatestNum];
  console.log(uwbLatestArr);
  return uwbLatestArr;
}
const testConsole=()=>{ // 콘솔 테스트
   //console.log(uwbData);
   //console.log(uwbGet);
}


  return(
    <>
      {uwbData&&testConsole() }
      <UwbForm GoogleMaps={GoogleMaps} tagInfo={tagInfo} tagId={tagId} setTagId={setTagId} pointColor={pointColor} lati={lati} longi={longi}
                      width={width} height={height} uwbData={uwbData} />
    </>
  );
}
export default Uwb;
