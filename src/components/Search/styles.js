import styled from "@emotion/styled";

const SearchElement = styled.div`
    margin-bottom: 1rem;

    h5 {
        margin-bottom: .5rem;
        line-height: 1;
    }
    .search-field {
        display: grid;
        height: 2.5rem;
        gap: .5rem;
        grid-template-columns: 1fr 100px;
        input {
            appearance: none;
            outline: none;
            border-radius: 900px;
            border: 1px solid black;
            box-shadow: none;
            padding: .25rem 1rem;
            background: white;
        }        
        button {
            appearance: none;
            border: 0;
            background: black;
            color: white;
            font-weight: bold;
            border-radius: 900px;
            transition: 0.25s ease;
            &:hover,
            &:focus {
                background: #57d9a7;
                color: black;
                cursor: pointer;
                outline: none;
            }
        }
    }
`;

export { SearchElement };
