import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading, View, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>Welcome to Amplify!</Heading>
        
        <View className="auth-section">
          <Heading level={2}>Authentication Demo</Heading>
          <Text>Hello {user.username}</Text>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
      </header>
    </div>
  );
}

export default withAuthenticator (App);
