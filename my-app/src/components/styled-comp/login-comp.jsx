import styled from 'styled-components'

const Div = styled.div`
    display:flex;
    flex-direction: column;
    height:445px;
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
    img{
        border: 1px solid orange;
        width:98%;
    }
    .login-fields{
        display:flex;
        .errors{
            width:20%;
            color: crimson;
            border: 1px solid orange;
            padding: 1%;
            background-color: lightgray;
        }
        .login-input-form{
            width:35%;
            display:flex;
            flex-wrap: wrap;
            justify-items:space-between;
            // margin-right:28%;
        }
    }
    
    button{
        width:125px;
        background-color: lightgray;
        border-radius: 15px;
    }
`
export default Div