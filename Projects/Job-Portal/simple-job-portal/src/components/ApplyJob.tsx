import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showJob } from '../redux/actions/jobListActions';
import { applyJob } from '../redux/actions/jobDetailAction';
import '../styles/ApplyJob.css';
import { addUser, applyJobID } from '../redux/actions/applyJob';
import { rootState } from '../redux/store';
import { user } from '../redux/actions/applyJob';

class ApplyJob extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      aboutme: '',
      errorFirstname: '',
      errorLastname: '',
      errorEmail: '',
      errorAboutMe: '',
      submitTick: false,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        email: this.props.user.email,
        aboutme: this.props.user.aboutme,
      });
    }
  }

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  validateInput = () => {
    const { firstname, lastname, aboutme, email } = this.state;
    const stringValidate = (
      name: string,
      lableName: string,
      minChar: number,
      maxChar: number
    ) => {
      const alphabet = /^[a-zA-Z\s]*$/;
      let message = 'correct';
      if (name.length > maxChar)
        message = `${lableName} must be less than ${maxChar} characters`;
      else if (name.length === 0) message = `${lableName} Required`;
      else if (name.length < minChar)
        message = `${lableName} must be greater than ${minChar} characters`;
      else if (!name.match(alphabet))
        message = `${lableName} must be alphabets`;

      return message;
    };

    let firstNameError = stringValidate(firstname, 'FirstName', 8, 16);
    if (firstNameError !== 'correct') {
      this.setState({
        errorFirstname: firstNameError,
      });
      return false;
    }

    let lastNameError = stringValidate(lastname, 'LastName', 8, 16);
    if (lastNameError !== 'correct') {
      this.setState({
        errorLastname: lastNameError,
      });
      return false;
    }

    if (!email) {
      this.setState({
        errorEmail: 'Email Required',
      });
      return false;
    }

    let emailRegEx =
      /^([a-z0-9]+)(?!.*\.\.)([a-z0-9\.]+)([a-z0-9])@?([a-z0-9-]+).([a-z]+).?([a-z]+)$/;
    if (!email.match(emailRegEx)) {
      this.setState({
        errorEmail: 'Invalid Email Id',
      });
      return false;
    }

    let aboutMeError = stringValidate(aboutme, 'About me', 20, 200);
    if (aboutMeError !== 'correct') {
      this.setState({
        errorAboutMe: aboutMeError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      errorFirstname: '',
      errorLastname: '',
      errorEmail: '',
      errorAboutMe: '',
    });
    if (this.validateInput()) {
      this.setState({
        submitTick: true,
      });
      let userInfo = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        aboutme: this.state.aboutme,
      };
      this.props.addUser(userInfo);
      let id = this.props.showJob;
      if (typeof id === 'number') {
        this.props.applyJobID(id);
      }
      setTimeout(() => {
        this.props.setShowJob();
        this.props.setApply(false);
      }, 1000);
    }
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      aboutme,
      submitTick,
      errorFirstname,
      errorLastname,
      errorAboutMe,
      errorEmail,
    } = this.state;
    console.log(this.props);

    return (
      <div className="applyJob">
        {submitTick ? <h1 className="applied-notify">Applied</h1> : null}
        <form className="submit-job" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            {errorFirstname ? <span>{errorFirstname}</span> : null}
            <input
              placeholder="Enter First Name"
              name="firstname"
              type="text"
              value={firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            {errorLastname ? <span>{errorLastname}</span> : null}
            <input
              placeholder="Enter Last Name"
              name="lastname"
              type="text"
              value={lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            {errorEmail ? <span>{errorEmail}</span> : null}
            <input
              placeholder="Enter Email Address"
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>About Me</label>
            {errorAboutMe ? <span>{errorAboutMe}</span> : null}
            <textarea
              name="aboutme"
              placeholder="describe about yourself here"
              value={aboutme}
              onChange={this.handleChange}
            />
          </div>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

interface IProps {
  showJob: number | null;
  user: user;
  setShowJob: () => void;
  setApply: (yes: boolean) => void;
  applyJobID: (id: number) => void;
  addUser: (user: user) => void;
}

interface IState {
  firstname: string;
  lastname: string;
  email: string;
  aboutme: string;
  submitTick: boolean;
  errorFirstname: string;
  errorLastname: string;
  errorEmail: string;
  errorAboutMe: string;
}

const mapState = (state: rootState) => {
  return {
    showJob: state.jobportal.showJob,
    user: state.jobdetail.user,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    setShowJob: () => dispatch(showJob(null)),
    setApply: (yes: boolean) => dispatch(applyJob(yes)),
    applyJobID: (id: number) => dispatch(applyJobID(id)),
    addUser: (user: user) => dispatch(addUser(user)),
  };
};

export default connect(mapState, mapDispatch)(ApplyJob);
