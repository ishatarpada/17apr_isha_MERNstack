import './index.css';

export default function FormContent() {

  return (
    <div className="right-box">
      <div className="header-text">
        <h2>Hello, user</h2>
        <p>We are happy to have you back.</p>
      </div>
      <form action="register_process.php" method="post">
        <input type="text" className="form-control" placeholder="Username" name="username" required/>
          <input type="email" className="form-control" placeholder="Email" name="email" required />
          <input type="tel" className="form-control" placeholder="Phone No" name="phone" required />
          <input type="password" className="form-control" placeholder="Password" name="password" required />
          <input type="password" className="form-control" placeholder="Confirm Password" name="confirm_password" required />
          <button type="submit" className="btn" name="register">Sign Up</button>
      </form>
      <p className="form-footer">Or Sign In with</p>
      <div className="social-btns">
        <button className="social-btn"><i className="bi bi-facebook text-primary"></i></button>
        <button className="social-btn"><i className="bi bi-apple"></i></button>
        <button className="social-btn"><i className="bi bi-google bi-google"></i></button>
      </div>
      <div className="form-footer">
        <small>Already have an account? <a href="#">Login</a></small>
      </div>
    </div>
  );
}
