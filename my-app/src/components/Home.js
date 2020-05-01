import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'

const url = 'https://api.nasa.gov/planetary/apod'
const api_key = '5NL35nUXsW9hb8Aehzb3F0zSZl84RckM1vLfZgbu'

function Home(props) {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        axios.get(`${url}?api_key=${api_key}`)
            .then(res => {
                setImageUrl(res.data.url)
            })
            .catch(err => {
                console.log(err)
                debugger
            })
    },
        []);

    const Container = styled.div`
        .heading{
            text-align: center;
            h2{
                background-color: orange;
            }
        }
        .space{
            border-radius: 50%;
            margin:0 auto;
            background-color: black;
            background-image: url(${imageUrl});
            width:350px;
            height:350px;
        }
  `
    return (
        <Container>
            <div className="heading">
                <h2>Exercise enywhere... Well just about anywhere.</h2>
            </div>
            <div className="space"></div>
        </Container>
    )
}

export default Home;