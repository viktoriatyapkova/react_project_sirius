import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import React, { useEffect } from 'react';
import { Grid } from '@consta/uikit/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { setNews } from '../../store/store';


const MainPage = () => {
  const dispatch = useDispatch()
  const mainNews = useSelector((state) => state.mainNews)

  useEffect(() => {
    fetch('https://673423afa042ab85d1190055.mockapi.io/api/v1/main', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => dispatch(setNews(data)))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <Grid cols={1} gap='x1' style={
      {gap: '1rem', color: '#6a4c99'}
      
      }>
        {
          mainNews.map((publication) => (
        
        <Card
            key={publication.id}
            verticalSpace='s'
            horizontalSpace='s'
            shadow
        >
        
            <Text weight='bold' size='l' style={{ marginBottom: '1rem', color: '#6a4c99' }}>
              {publication.name}
        
            </Text>
          
            <Text size='l' style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: '#7c5db1'
            }}>
            
              {publication.description}
            
            </Text>
            
            <Text style={
                {
                  width: '100%',
                  display:'flex',
                  justifyContent:'left', 
                  marginTop:'1.5rem',
                  color: '#6a4c99'
                  }
                }>
                  {publication.createdAt}
        
              </Text>
        
        </Card>
        )
      )
    }
    
    </Grid>
  
  );
};

export default MainPage;
