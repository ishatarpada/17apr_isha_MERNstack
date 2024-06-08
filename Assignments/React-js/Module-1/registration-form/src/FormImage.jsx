import './index.css';
import logo from '../src/assets/Image.svg';

export default function FormImage() {
  return (
    <div className="left-box">
      <img src={logo} alt="Sign-up illustration" />
      <p>Be Verified</p>
      <small>Join experienced Designers on this platform.</small>
    </div>
  );
}
