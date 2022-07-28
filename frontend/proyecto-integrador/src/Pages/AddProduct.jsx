import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import AddFeature from "../Components/AddProduct/AddFeature";
import AddImage from "../Components/AddProduct/AddImage";
import {handleRequestGet, handleRequestPost} from "../Utils/handleRequest";
import { API_PATHS, PRODUCT_JSON } from "../config";
import Location from "../Components/AddProduct/Location/Location";
import Category from "../Components/AddProduct/Category/Category";


export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [featureComponents, setFeatureComponents] = useState([AddFeature]);
  const [imageComponents, setImageComponents] = useState([AddImage]);
  const [form, setForm] = useState(PRODUCT_JSON);
  const [features, setFeatures] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const addFeatureComponent = () => {
    setFeatureComponents([...featureComponents, AddFeature]);
  };

  const addImage = () => {
    setImageComponents([...imageComponents, AddImage]);
  };

  const handleAddProductResponse = (response, navigate) => {
    response.status === 200
        ? navigate("/successful")
        : console.log(response)
  }

  useEffect(() => {
    handleRequestGet(API_PATHS.CATEGORY)
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleRequestPost(API_PATHS.PRODUCT, {...form, "features": features, "images": images}, true)
        .then(response => handleAddProductResponse(response, navigate))
        .catch(error => console.log(error));
  }

  if(!categories){
    return <div/>
  }

  return (
      <AddContainer>
        <AddHeader>
          <Title>Administración</Title>
          <Link to={"/"} className="back">
            {""}
            <FaChevronLeft/>
            {""}
          </Link>
        </AddHeader>
        <Subtitle>Crear Propiedad</Subtitle>
        <AddForm onSubmit={handleSubmit}>
          <section>
            <div className="flexible">
              <div>
                <Label>
                  Nombre de la Propiedad
                  <Input type="text" onChange={
                    (e) => setForm({...form, name: e.target.value})
                  } required/>
                </Label>
              </div>
              <Category setForm={setForm}
                        form={form}
                        categories={categories} />
            </div>
            <div>
              <Label>
                Descripcion (1000 caracteres)
                <TextArea
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    id={"description"}
                    name={"description"}
                 required/>
              </Label>
            </div>
          </section>
          <section>
            <SectionName>Dirección</SectionName>
            <Location setForm={setForm}
                      form={form}/>
          </section>
          <section>
            <SectionName>Caracteristicas</SectionName>
            {featureComponents.map((feature, i) =>
                    <AddFeature
                        key={i}
                        index={i}
                        handleClick={addFeatureComponent}
                        setFeatures={setFeatures}
                        setFeatureComponents={setFeatureComponents}
                        featureComponents={featureComponents}
                        features={features}
                    />
            )}
          </section>
          <section>
            <SectionName>Politicas del Alojamiento</SectionName>
            <div className="flexible">
              <div>
                <SectionTitle>Normas de la Casa</SectionTitle>
                <div className="policyTop">
                  <Label>
                    Check-in
                    <Input type="text" placeholder="ej: 13 a 14hrs" onChange={
                      (e) => setForm({...form, policy: {...form.policy, check_in: e.target.value}})
                    } required/>
                  </Label>
                  <Label>
                    Check-out
                    <Input type="text" required placeholder="ej: 10 a 10:30hrs" onChange={
                      (e) => setForm({...form, policy: {...form.policy, check_out: e.target.value}})
                    }/>
                  </Label>
                  <LabelCheckbox>
                    ¿El alojamiento permite todas las edades?
                    <Checkbox type="checkbox" onChange={
                      (e) => setForm({...form, policy: {...form.policy, accepts_all_ages: e.target.checked}})
                    }/>
                  </LabelCheckbox>
                  <Label>
                    ¿A partir de que edad los niños abonan?
                    <Input type="number" required onChange={
                      (e) => setForm({...form, policy: {...form.policy, child_policy: e.target.value}})
                    }/>
                  </Label>
                  <LabelCheckbox>
                    ¿El alojamiento provee cunas o camas extra?
                    <Checkbox type="checkbox" onChange={
                      (e) => setForm({...form, policy: {...form.policy, extra_bed: e.target.checked}})
                    }/>
                  </LabelCheckbox>
                  <LabelCheckbox>
                    ¿El alojamiento permite fumar?
                    <Checkbox type="checkbox" onChange={
                      (e) => setForm({...form, policy: {...form.policy, smoke_policy: e.target.checked}})
                    }/>
                  </LabelCheckbox>
                  <LabelCheckbox>
                    ¿El alojamiento permite ruidos en horarios de descanso
                    nocturno?
                    <Checkbox type="checkbox" onChange={
                      (e) => setForm({...form, policy: {...form.policy, noise_policy: e.target.checked}})
                    }/>
                  </LabelCheckbox>
                </div>
              </div>
              <div className="bottomData">
                <div>
                  <SectionTitle>Politicas de Seguridad del Lugar</SectionTitle>
                  <Label>
                    {" "}
                    Descripción (500 caracteres)
                    <TextArea required onChange={
                      (e) => setForm({...form, policy: {...form.policy, security_and_health: e.target.value}})
                    }/>
                  </Label>
                </div>
                <div>
                  <SectionTitle>
                    Politicas de Cancelación de Reservas
                  </SectionTitle>
                  <Label>
                    Descripción (255 caracteres)
                    <TextArea required onChange={
                      (e) => setForm({...form, policy: {...form.policy, cancellation_policy: e.target.value}})
                    }/>
                  </Label>
                </div>
              </div>
            </div>
          </section>
          <section>
            <SectionName>Imágenes</SectionName>
            {imageComponents.map((img, i) =>
                    <AddImage
                        key={i}
                        index={i}
                        images={images}
                        setImages={setImages}
                        imageComponents={imageComponents}
                        setImageComponents={setImageComponents}
                        handleClick={addImage}
                    />
            )}
            <Button type="submit">Guardar</Button>
          </section>
        </AddForm>
      </AddContainer>
    );
  };


  const AddContainer = styled.div`
    background-color: var(--contrast--background-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;
  const AddHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: var(--contrast--dark);
    color: var(--contrast--light);

    .back {
      color: var(--contrast--light);
      padding-right: 15px;
      font-size: 20px;
    }
  `;
  const Title = styled.h1`
    font-size: 25px;
    margin-left: 15px;
  `;
  const AddForm = styled.form`
    width: 85vw;

    section {
      background-color: var(--contrast--light);
      margin-bottom: 30px;
      padding: 20px 0;
    }

    @media only screen and (min-width: 768px) {
      section {
        .flexible {
          display: flex;
          justify-content: space-between;

          .policyTop {
            width: 100%;
          }

          div {
            width: 49%;
          }

          .bottomData {
            div {
              width: 100%;
              height: 45%;
            }
          }
        }
      }
    }
  `;
  const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: var(--contrast--dark);
    font-size: 18px;
    margin: 20px;
  `;
  const Input = styled.input`
    width: calc(100% - 10px);
    height: 40px;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    background-color: var(--contrast--light);
    color: var(--contrast--dark);
    font-size: 18px;
    border-radius: 5px;
  `;
  const LabelCheckbox = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 25px;
    color: var(--contrast--dark);
    font-size: 18px;
    padding-right: 15px;
  `;
  const Checkbox = styled.input`
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: var(--contrast--light);
      display: block;
      border-radius: 3px;
      border: 1px solid var(--contrast--background-dark);
    }

    &:checked:before {
      content: "";
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      top: 0;
      left: 0;
      background-color: var(--contrast--color);
      border-radius: 3px;
    }

    &:checked:after {
      display: block;
      content: "";
      width: 5px;
      height: 10px;
      border: solid var(--contrast--light);
      border-width: 0 2px 2px 0;
      position: absolute;
      top: 0;
      left: 5px;
      transform: rotate(45deg);
    }
  `;
  const Subtitle = styled.h2`
    font-size: 25px;
    width: calc(100% - 15px);
    padding-left: 15px;
    color: var(--contrast--dark);
  `;
  const SectionName = styled.h3`
    font-size: 20px;
    color: var(--contrast--dark);
    margin: 20px;
  `;
  const SectionTitle = styled.h4`
    font-size: 18px;
    color: var(--contrast--dark);
    margin: 5px 20px;
  `;

  const TextArea = styled.textarea`
    width: calc(100% - 10px);
    background-color: var(--contrast--light);
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    height: 100px;
  `;
  const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background-color: var(--contrast--color);
  color: var(--contrast--light);
  margin: 20px;
  font-size: 18px;
  :hover {
    filter: brightness(0.85);
  }
`;
