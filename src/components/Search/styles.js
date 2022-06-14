import styled from "@emotion/styled";

const SearchElement = styled.div`
    margin-bottom: 3rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    h5 {
        margin-bottom: .5rem;
        line-height: 1;
    }
    .search-field {
        display: grid;
        height: 2.5rem;
        gap: .5rem;
        grid-template-columns: 1fr 100px;
        width: 100%;
        grid-column: 1/span 2;
        min-width: clamp(300px, 400px, 100%);
        max-width: 100%;
        input {
            appearance: none;
            outline: none;
            border-radius: 900px;
            border: 1px solid transparent;
            box-shadow: none;
            padding: .25rem 1rem;
            background: white;
            transition: 0.25s ease;
            &:hover,
            &:focus {
                border-color: black;
            }
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
