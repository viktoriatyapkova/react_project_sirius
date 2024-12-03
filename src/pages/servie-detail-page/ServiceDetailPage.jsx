import { Button } from '@consta/uikit/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { getToken } from '../../services/token';
import { API_get_link } from '../../../const';

const ServiceDetailPage = () => {
  const [service, setService] = useState(null);
  const { id } = useParams();
  const [serviceId, setServiceId] = useState(id);
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = getToken();

    if (!userToken) {
      navigate('/login');
      return;
    }
  
    let isNeedUpdate = true;

    fetch(`${API_get_link}${serviceId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((service) => isNeedUpdate && setService(service));

    return () => {
      isNeedUpdate = false;
    };
  }, [serviceId]);

  const handleNextService = () => {
    setServiceId((prevId) => {
      const nextId = parseInt(prevId, 10) + 1;
      return nextId.toString();
    });
  };

  return (
    <div style={
      {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }
    }>
      
      <Text style={{ fontSize: '1.5rem' }}>
        {service?.name}
      </Text>
      
      <img src={service?.image} width={'500px'} style={{borderRadius:'15px'}}/>
      
      <Text>
        {service?.description}
      </Text>
      
      <Button 
        onClick={handleNextService} 
        label='Next service' 
        style={{
          backgroundColor: '#a084ca', 
          color: 'white',
          border: '2px solid transparent',
          borderRadius: '8px',
        }} 
      />
    
    </div>
  );
};

export default ServiceDetailPage;
