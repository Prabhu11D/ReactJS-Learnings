import React, { Component } from 'react';
import { job } from '../redux/data/Jobs';
import { connect } from 'react-redux';
import '../styles/JobList.css';
import { rootState } from '../redux/store';
import { showJob } from '../redux/actions/jobListActions';

interface JobCardProps {
  details: job;
  setShowJob: (id: number) => void;
  applied: boolean;
}

const JobCard = (props: JobCardProps) => (
  <div
    className="card p-2 mb-3"
    onClick={() => props.setShowJob(props.details.id)}
  >
    {props.applied ? <p className="applied">Applied</p> : ''}
    <h2 className='card-text h4'>{props.details.title}</h2>
    <p className='card-text  h6'>{props.details.company}</p>
  </div>
);

class JobList extends Component<Props> {
  render() {
    const { joblist, show, title, setShowJob, appliedJob } = this.props;

    if (!show) {
      return joblist.map((job) => {
        let applied = appliedJob.includes(job.id);
        return (
          <JobCard
            key={job.id}
            details={job}
            setShowJob={setShowJob}
            applied={applied}
          />
        );
      });
    } else {
      const list = joblist
        .filter((job) => job.title.toLowerCase().includes(title.toLowerCase()))
        .map((job) => {
          let applied = appliedJob.includes(job.id);
          return (
            <JobCard
              key={job.id}
              details={job}
              setShowJob={setShowJob}
              applied={applied}
            />
          );
        });

      if (!list.length) {
        return (
          <div className="sorry">
            Sorry, there is not job for your designation
          </div>
        );
      }
      return list;
    }
  }
}

interface stateProps {
  joblist: any[];
  show: boolean;
  title: string;
  appliedJob: number[];
}
interface dispatchProps {
  setShowJob: (id: number) => void;
}

type Props = stateProps & dispatchProps;

const mapState = (state: rootState) => ({
  joblist: state.joblist,
  title: state.jobportal.title,
  show: state.jobportal.showFilteredJob,
  appliedJob: state.jobdetail.appliedJobId,
});

const mapDispatch = (dispatch: any) => {
  return {
    setShowJob: (id: number) => dispatch(showJob(id)),
  };
};

export default connect(mapState, mapDispatch)(JobList);
