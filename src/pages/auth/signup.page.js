import React from "react";
import CustomInput from "../../components/Input/Input.component";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <section class="section">
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-5 is-4-desktop">
            <form>
              <CustomInput type="text" placeholder="Enter username" />
              <CustomInput type="email" placeholder="Enter email" />
              <CustomInput type="password" placeholder="Enter password" />
              <div class="field">
                <button class="button is-primary is-fullwidth">Sign up!</button>
              </div>
              <Link to="/signin">or sign in with Facebook</Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
