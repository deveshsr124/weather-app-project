// src/components/CityImage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

function CityImage({ city }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: city,
              client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
              per_page: 1,
            },
          }
        );
        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.regular);
        } else {
          setImageUrl("");
        }
      } catch (error) {
        console.error("Error fetching city image:", error);
      }
    };

    if (city) {
      fetchImage();
    }
  }, [city]);

  return <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />;
}

export default CityImage;
