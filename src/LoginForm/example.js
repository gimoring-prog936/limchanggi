import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://everyparking.co.kr/web/api/test', { email , password })
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token); // jwtToken 저장
        navigate('/home'); // 관리자 메인 페이지로 이동
      })
      .catch(error => {
        console.log(error.response.data);
        window.location.href = '/'; // 로그인 실패 시 다시 로그인 페이지로 이동
      });
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header className='font-face' as='h2' style={{color : '#42a5f5'}} textAlign='center'>
          <Image src='/logo.png' /> 에브리파킹
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button style = {{backgroundColor : '#42a5f5', color : 'white'}} fluid size='large' type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
        <a href='#' style={{fontWeight: 'bold', fontFamily: ''}}>회원가입</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
