import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    background-color: #742fc2;
    padding: 20px 8px 8px 8px;
    justify-content: flex-start;
`;

export const TitleList = styled.Text`
    color: #f5f5f5;
    font-size: 22px;
    text-align: center;
    padding: 25px 15px 5px 15px;
`;

export const List = styled.View`
    width: 100%;
`;

export const RowData = styled.View`
    width: 100%;
    background-color: #f5f5f5;
    margin: 8px 0;
    padding: 12px;
    border-radius: 6px;   
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoData = styled.Text`
    display: flex;
    flex-direction: row;
    color: #111;
`;

export const ValueData = styled.Text`
    font-size: 16px;
`;

export const BtnView = styled.Text`
    justify-content: flex-end;
`;


