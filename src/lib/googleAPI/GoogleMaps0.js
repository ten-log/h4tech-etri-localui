
import React from 'react';
import {Map, GoogleApiWrapper, Marker, Polyline} from 'google-maps-react';

class GoogleMaps extends React.Component {

  render(){

    const triangleCoords = [
    {lat: 36.379900, lng: 127.365443},
    {lat: 36.379700, lng: 127.365143},
    {lat: 36.379400, lng: 127.364943},
    {lat: 36.379100, lng: 127.364543} ];

    return (
      <>
      <Map
        style={{width: '60%', height: '90%', position: 'relative'}}
        mapType="satellite"
        type="SATELLITE"
        google={this.props.google}

        zoom={20}
        initialCenter={{
        lat: 36.379900,
        lng: 127.364943
        }}
        >
          {this.props.uwbData&&this.props.uwbData.map((dataArr, indexArr)=>{
              if(dataArr.length != 0){
                  return console.log(dataArr);
              }
            }) }
          <Polyline onClick={()=>{console.log('asdf')}} path={triangleCoords} strokeColor="#0000FF"
        strokeOpacity={0.8} strokeWeight={2} />
        </Map>
      </>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: 'AIzaSyCurZsi9lTUr1Q1CkIVjRFfA3GCq51WIpg'
 })(GoogleMaps);
