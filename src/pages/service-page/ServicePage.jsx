import React, { useEffect } from 'react';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { setServices } from '../../store/store';
import { getToken } from '../../services/token';
import { API_link, AppRoute } from '../../../const';
import App from '../../components/app/App';


const ServicePage = () => {
  const dispatch = useDispatch()
  const services = useSelector((state) => state.services)
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = getToken();

    if (!userToken) {
      navigate("/login");
      return;
    }

    fetch(API_link, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => dispatch(setServices(data)))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  console.log(services)
  return (
    <Grid gap="xl" cols={3}>
      
      {services.map((service) => (
 
      <GridItem>
 
        <Card verticalSpace="xs" horizontalSpace="xs" key={service.id} style={
          {
            display: "flex",
            alignItems:"center",
            gap:"2rem"
            }
          }>
 
          <img src={service.image} width={"200px"} style={{borderRadius:"15px"}}/>
 
          <div>
 
          <Text weight="bold">{service.name}</Text>
 
          <Text>{service.description}</Text>
 
          <Link to={`${AppRoute.service}/${service.id}`}>

            <Text as="span" view="link" style={{color: '#6a4c99'}} >Read More</Text>
          
          </Link></div>
        
        </Card>
      </GridItem>
      )
    )
  }
  
    </Grid>
  
  );
};

export default ServicePage;
