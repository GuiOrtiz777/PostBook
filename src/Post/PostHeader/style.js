import styled from 'styled-components';

export const Box = styled.div`
    height: auto;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
`;

export const Column = styled.div`
    padding: 13px 10px;
    flex-direction: space-between;
`;

export const Tumbnail = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-size: cover;
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #666;
    padding-bottom: 5px;
`;

export const DatePost = styled.p`
    font-size: 16px;
    font-weight: normal;
    color: #ccc;
`;