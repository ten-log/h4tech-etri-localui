
import React from 'react';
import {Map, GoogleApiWrapper, Marker, Polyline} from 'google-maps-react';

class GoogleMaps extends React.Component {

  render(){

    const {uwbData, pointColor, setTagId} = this.props;
    return (
      <>
      <Map
        style={{width: '70%', height: '90%', position: 'relative'}}
        mapType="satellite"
        type="SATELLITE"
        google={this.props.google}

        zoom={19}
        initialCenter={{
        lat: 36.379900,
        lng: 127.364943
        }}
        >
          {uwbData&&uwbData.map((dataArr, indexArr)=>{
              if(dataArr.length != 0){
                console.log(indexArr);
                  return  <Polyline key={indexArr} onClick={()=>{setTagId(indexArr)}} path={dataArr}
                    strokeColor={`${pointColor(indexArr)}`} strokeOpacity={0.8} strokeWeight={2} />
              }
            }) }

        </Map>
      </>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: 'AIzaSyCurZsi9lTUr1Q1CkIVjRFfA3GCq51WIpg'
 })(GoogleMaps);
