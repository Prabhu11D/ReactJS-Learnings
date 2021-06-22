import React, { ChangeEvent, Component } from 'react';
import JobList from './JobList';
import { rootState } from '../redux/store';
import { connect } from 'react-redux';
import {
  setJobTitle,
  showFilteredJob,
} from '../redux/actions/jobPortalActions';

interface IProps {
  title: string;
  showFilteredJob: boolean;
  setJobTitle: Function;
  setShowFilteredJob: Function;
}
interface IState {
  title: string;
}

class JobPortal extends Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value }, () => {
      if (this.state.title === '') {
        this.props.setShowFilteredJob(false);
      }
    });
  };

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.setJobTitle(this.state.title);
    this.props.setShowFilteredJob(true);
  };

  render() {
    return (
      <div>
        <div className="header">
          <form className="job-search" onSubmit={this.handleSubmit}>
            <input
              id="title"
              placeholder="Job Title"
              onChange={this.handleChange}
            />
            <button type="submit">Find Jobs</button>
          </form>
        </div>
        <div className="job-list">
          <JobList />
        </div>
      </div>
    );
  }
}

const mapState = (state: rootState) => {
  return {
    title: state.jobportal.title,
    showFilteredJob: state.jobportal.showFilteredJob,
    
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    setJobTitle: (title: string) => dispatch(setJobTitle(title)),
    setShowFilteredJob: (show: boolean) => dispatch(showFilteredJob(show)),
  };
};

export default connect(mapState, mapDispatch)(JobPortal);
