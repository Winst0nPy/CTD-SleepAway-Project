import React from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";


const Maps = ({ latitude, longitude, street, number, city, province }) => {

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  
  const onLoad = marker => {
    console.log('marker: ', marker);
  }
  
  return (
    <Mapping>
      <Title>¿Dónde vas a estar?</Title>
      <p>{street} {number}, {city}-{province}</p>
      <Line/>
      <MapsContainer>
        <LoadScript googleMapsApiKey="AIzaSyCSW-kfKV3MPXB0Q2FhvvW530XXL99cyJQ">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}>
            <Marker onLoad={onLoad} position={center} />
          </GoogleMap>
        </LoadScript>
      </MapsContainer>
    </Mapping>
  );
};

const Mapping = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding-bottom: 20px;
  p{
    margin: 0;
    font-size: 15px;
    color: var(--contrast--black);
    align-self: flex-start;
    padding: 0 30px;
    font-weight: 500;
  }
`;
const MapsContainer = styled.div`
  height:70vh;
  width: 90%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  text-align: left;
  align-self: flex-start;
  margin: 25px;
  color: var(--contrast--dark);
  font-size: 25px;
`;

const Line = styled.hr`
  width: 99%;
  color: var(--contrast--dark);
`;

export default Maps;
