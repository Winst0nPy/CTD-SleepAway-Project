import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";
import * as Styled from "./Top.style"

export default function Top({categoryTitle, productName}) {
    return (
        <Styled.Top>
            <Styled.TopLeft>
                <Styled.CategoryName>{categoryTitle.toUpperCase()}</Styled.CategoryName>
                <Styled.Name>{productName}</Styled.Name>
            </Styled.TopLeft>
            <Link className="back" to="/">
                {" "}
                <FiChevronLeft size={44} />{" "}
            </Link>
        </Styled.Top>
    )
}

