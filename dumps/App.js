import Profile from './Profile/Profile';
import AkaImage from './images/aka.jpeg';
import JohnImage from './images/john.jpeg';
import YusufImage from './images/yusuf.jpeg';

function App() {
  return (
    <div>
      <Profile name="Aka Abdulfatai" image={AkaImage} />
      <Profile name="John Doe" image={JohnImage} />
      <Profile name="Yusuf Raymond" image={YusufImage} />
    </div>
  )
}

export default App;
