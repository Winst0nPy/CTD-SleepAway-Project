import * as Styled from "./PersonalData.style"
import DataContainer from "./DataContainer";

export default function PersonalData({user}){
    return (
        <Styled.Data>
            <div className="divform">
                <DataContainer
                    id="name"
                    value={user.name}
                    textContent={"Nombre"}
                    />
                <DataContainer
                    id="lastName"
                    value={user.lastName}
                    textContent={"Apellido"}
                />
            </div>
            <div className="divform">
                <DataContainer
                    type="email"
                    id="email"
                    value={user.email}
                    textContent="Correo Electrónico"
                />
                <DataContainer
                    id="city"
                    value={user.city}
                    textContent={"Ciudad"}
                />
            </div>
        </Styled.Data>
    )
}