import React, { useEffect, useState } from 'react';
import { ApiCall } from '../services/DataService';
import NewAdvice from '../interfaces/interface';
import {Button, Card} from 'react-bootstrap'

const MainPageComponent: React.FC = () => {
  const [advice, setAdvice] = useState<NewAdvice>();
  const [newQuote, setNewQuote] = useState(true);

  const handleNewAdvice = () => {
    setNewQuote(!newQuote);
  }

  useEffect(() => {
    const adviceData = async () => {
      const fetchedData = await ApiCall();
      setAdvice(fetchedData);
    };

    adviceData();

  }, [newQuote]);

  return (
    <div className='bgColor font'>
      {/* <h1>{advice?.advice}</h1> */}
      <Card className="text-center darkgray card-width" style={{borderRadius: '20px'}}>
      <Card.Body className='lightcyan body-padding'>
        <Card.Title  className='adviceNum neongreen'>ADVICE #{advice?.id}</Card.Title>
        <Card.Text style={{ fontSize: '28px' }}>
          {advice?.advice}
        </Card.Text>
        <span className='d-none d-lg-block' style={{paddingBottom: '25px'}}><svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></span>
        <span className='d-bloack d-md-none'>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </span>
        <Button onClick={handleNewAdvice} variant="primary" className='randomBtn'><span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></span></Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MainPageComponent;
