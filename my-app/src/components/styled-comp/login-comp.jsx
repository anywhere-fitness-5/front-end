import styled from 'styled-components'

const Div = styled.div`
    display:flex;
    flex-direction: column;
    height:500px;
    width: 500px;
    margin: 2% auto;
    padding: 1%;
    border: 3px solid orange;
    *{
        margin: 1% auto;
    }
    header{
        background-color: orange;
        display:flex;
        justify-content:center;
        width:100%;
    }
    .input-form{
        width:50%;
        display:flex;
        flex-direction:column;
        justify-items:space-between;
    }
    img{
        border: 1px solid orange;
        width:98%;
    }
    button{
        width:125px;
        background-color: lightgray;
        border-radius: 15px;
    }
`

export default Div