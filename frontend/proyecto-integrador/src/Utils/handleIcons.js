import * as FA from "react-icons/fa"
import * as TB from "react-icons/tb"
import * as BS from "react-icons/bs"
import * as FI from "react-icons/fi"
import * as AI from "react-icons/ai"
import * as MD from "react-icons/md"
import * as GI from "react-icons/gi"
import * as IO from "react-icons/io"
import * as BI from "react-icons/bi"
import styled from "styled-components";

const ICONS = {...FA, ...TB, ...BS, ...FI, ...AI, ...MD, ...GI, ...IO, ...BI};

export default function handleIcons(features, iconSize, hasDescription) {
    return features.map((feature, index) => {
        let Icon = ICONS[feature.react_icon]
        if(!Icon){
            Icon = ICONS.FaRegQuestionCircle
        }
        return (
            <FeatureIcon key={index}>
                {Icon ? <Icon size={iconSize}/> : ""}
                {hasDescription ? <p>{feature.name}</p> : ""}
            </FeatureIcon >
        )
    })
};

const FeatureIcon = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    color: var(--contrast--color);
    padding: 0 2px;
    p {
        color: var(--contrast--dark) !important;
        margin-left: 5px;
        font-size: 18px;
        font-weight: bold;
        padding-left: 10px;
    }`;