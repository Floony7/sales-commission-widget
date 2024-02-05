import styled from 'styled-components';

export const WidgetGrid = styled.section`
    display: flex;
    gap: 0.5rem;
`;

export const WidgetItem = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 1.5rem;
    height: auto;
`;

export const WidgetGrid2 = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr)
    gap: 0.5rem;
`;
