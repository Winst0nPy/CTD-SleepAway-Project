import * as Styled from "./Location.styled"

export default function Location({setForm, form}){
    return (
        <div className="flexible">
            <div>
                <Styled.Label>
                    Calle
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, location: {...form.location, street: e.target.value}})
                    } required/>
                </Styled.Label>
                <Styled.Label>
                    Numero
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, location: {...form.location, number: e.target.value}})
                    } required/>
                </Styled.Label>
                <Styled.Label>
                    Ciudad
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, location: {...form.location, city: e.target.value}})
                    } required/>
                </Styled.Label>
                <Styled.Label>
                    Provincia
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, location: {...form.location, province: e.target.value}})
                    } required/>
                </Styled.Label>
            </div>
            <div>
                <Styled.Label>
                    Pais
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, location: {...form.location, country: e.target.value}})
                    } required/>
                </Styled.Label>
                <Styled.Label>
                    Latitud
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, latitude: e.target.value})
                    } required/>
                </Styled.Label>
                <Styled.Label>
                    Longitud
                    <Styled.Input type="text" onChange={
                        (e) => setForm({...form, longitude: e.target.value})
                    } required/>
                </Styled.Label>
            </div>
        </div>
    )
}