import React, { Component } from 'react';
import '../styles/JobDetail.css';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { job } from '../redux/data/Jobs';
import { rootState } from '../redux/store';
import { showJob } from '../redux/actions/jobListActions';
import { applyJob } from '../redux/actions/jobDetailAction';
import ApplyJob from '../components/ApplyJob';

class JobDetail extends Component<Props> {
  divContainerRef = React.createRef<HTMLDivElement>();
  divDetailRef = React.createRef<HTMLDivElement>();

  handleSetShowJob = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.divContainerRef.current === e.target) {
      this.props.setShowJob(null);
      this.props.setApply(false);
    }
  };

  render() {
    const { joblist, showJob, appliedJob, apply, setApply } = this.props;
    if (!showJob) return null;
    const JobDetail = joblist.filter((job) => job.id === showJob)[0];
    let alreadyApplied = appliedJob.includes(JobDetail.id);
    return ReactDOM.createPortal(
      <div
        className={'portal-container'}
        ref={this.divContainerRef}
        onClick={(e) => this.handleSetShowJob(e)}
      >
        <div className="job-details" ref={this.divDetailRef}>
          <div>
            <div className="title">{JobDetail.title}</div>
            <div className="company">{JobDetail.company}</div>
          </div>
          <div className="description">{JobDetail.description}</div>
          <div className="experience">{`Experience Required : ${JobDetail.experience} years`}</div>
          <div className="skills">
            <p>Skills</p>
            {JobDetail.skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>

          {alreadyApplied ? (
            <span className="applied">Applied</span>
          ) : (
            <button
              className="apply"
              onClick={() => setApply(true)}
            >
              Apply
            </button>
          )}
          {apply ? <ApplyJob /> : null}
        </div>
      </div>,
      document.getElementById('portal') as HTMLElement
    );
  }
}

interface stateProps {
  showJob: number | null;
  joblist: job[];
  appliedJob: number[];
  apply: boolean;
}

interface dispatchProps {
  setShowJob: (id: number | null) => void;
  setApply: (yes: boolean) => void;
}

type Props = stateProps & dispatchProps;

const mapState = (state: rootState) => {
  return {
    showJob: state.jobportal.showJob,
    joblist: state.joblist,
    appliedJob: state.jobdetail.appliedJobId,
    apply: state.jobdetail.apply,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    setShowJob: (id: number | null) => dispatch(showJob(id)),
    setApply: (yes: boolean) => dispatch(applyJob(yes)),
  };
};

export default connect(mapState, mapDispatch)(JobDetail);
