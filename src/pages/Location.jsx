import React, { useState, useEffect } from 'react';
import LocationList from '../components/Location/LocationList';
import TemperatureToggle from '../components/Location/TemperatureToggle';
import { Box, Container, Typography } from '@mui/material';
import LocationSearch from '../components/Location/LocationSearch';
import { getLocationData } from '../api_helpers/microservices/weather';
import { Wrapper } from '../components/Location/style';
import { v4 as uuidv4 } from 'uuid';
import { useTemperatureContext } from '../context_api/TemperatureContext';


function Location() {

  const { temperatureUnit, toggleTemperatureUnit } = useTemperatureContext();

  const [locations, setLocations] = useState([]);

  const getCurrentCountry = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        // Get the user's current coordinates
        const { latitude, longitude } = position.coords;
        const { location } = await getLocationData(`${latitude}, ${longitude}`, temperatureUnit);

        // Create a location object
        const newLocation = {
          ...location,
          id: uuidv4(),
          name: `${location.name}, ${location.country}`,
          favorite: false
        };

        setLocations([newLocation]);
        localStorage.setItem('locations', JSON.stringify(newLocation));
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem('locations'));

    if (savedLocations) {
      setLocations(savedLocations);
    } else {
      // If no locations are found in local storage, set default locations
      if ("geolocation" in navigator) {
        getCurrentCountry();
      } else {
        console.log("Geolocation is not available in this browser.");
      }
    }
  }, []);

  return (
    <Wrapper>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">Weather App</Typography>
          {/* Temperature unit toggle */}
          <TemperatureToggle unit={temperatureUnit} toggleUnit={toggleTemperatureUnit} />
        </Box>
        <LocationSearch locations={locations} setLocations={setLocations} />
        {/* Location list component */}
        <LocationList locations={locations} setLocations={setLocations} unit={temperatureUnit} />
      </Container>
    </Wrapper>
  );
}

export default Location;
