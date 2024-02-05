import styled from 'styled-components';

export const WidgetGrid = styled.section`
    display: flex;
    gap: 0.5rem;
`;

export const WidgetItem = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 1.5rem;
    min-height: 200px;
    height: auto;

    h3 {
        padding: 0;
        margin: 0;
    }
`;