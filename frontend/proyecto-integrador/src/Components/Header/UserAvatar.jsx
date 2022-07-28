import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {handleRequestGet} from "../../Utils/handleRequest";
import {API_PATHS} from "../../config";

const UserAvatar = () => {
  const [user, setUser] = useState(null);
  const admin = localStorage.getItem("admin");
  useEffect (() => {
      handleRequestGet(API_PATHS.USER_ME, true)
          .then(response => setUser(response.data))
          .catch(error => console.log(error));

  } , []);
  const avatar = (user?.name?.slice(0,1).toUpperCase() + user?.lastName?.slice(0,1).toUpperCase()).toString();
  return (
    <Container>
      {admin ? (
        <AdminPanel> 
            <Link to={"/add-product"} className="admn">
              <Admin>Administrar</Admin> 
            </Link>
        </AdminPanel>
      ) : null}
      <Link to={"/mis-reservas"} className="admn">
          <Admin>Mis Reservas</Admin> 
      </Link>
      <VerticalLine/>
      <Avatar>{avatar}</Avatar>
      <Hi>
        <Title>Hola, </Title>
        <Name>{user?.name?.replace(user?.name?.slice(0,1),user?.name?.slice(0,1).toUpperCase())} {user?.lastName?.replace(user?.lastName?.slice(0,1),user?.lastName?.slice(0,1).toUpperCase())}</Name>
      </Hi>
      <Link className="btn-cierre" to="/" onClick={(e) => localStorage.clear()}>
        <Button>x</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  .admn{
    text-decoration: none;
  }
  @media only screen and (min-width: 768px) {
    height: 75px;
  }
`;
const AdminPanel = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const Admin = styled.button`
  background-color: transparent;
  border: none;
  color: var(--contrast--dark);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 150px;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;  
const VerticalLine = styled.div`
  width: 1px;
  height: 50px;
  background-color: var(--contrast--color);
  margin: 0 10px;
`;
const Avatar = styled.p`
  color: var(--contrast--light);
  padding: 0.5rem;
  font-size: 20px;
  line-height: 25px;
  font-weight: 800;
  background-color: var(--contrast--dark);
  border-radius: 100%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    background-color: var(--contrast--color);
    padding: 0.5rem;
    margin:10px;
  }
`;

const Hi = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media only screen and (min-width: 768px) {
    width:150px;
    align-items: flex-start;
    height:75%;
  }
   
`;
const Title = styled.p`
  margin: 10px 10px 0 0;
  font-size: 18px;
  font-weight: 800;
  @media only screen and (min-width: 768px) {
    margin: 5px ;
  }
`;

const Name = styled.p`
  margin: 10px 10px 10px 10px;
  font-size: 18px;
  font-weight: 800;
  color: var(--contrast--light);
  @media only screen and (min-width: 768px) {
    color: var(--contrast--color);
    margin: 0 5px;
  }
`;

const Button = styled.button`
display: none;
@media only screen and (min-width: 768px) {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  color: var(--contrast--black);
  font-size: 16px;
  border: none;
  background: transparent;
  font-weight: bold;
}
`;

export default UserAvatar;
