import React, {Component} from 'react';
import axios from 'axios';
import { View } from 'react-native';
import ListJobs from './ListJobs';
import { API_URL } from '../configurations/config';


export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/jobs/`)
      .then(res => {
        const jobs = res.data;
        this.setState({ jobs });
      })
  }

  render() {
    const {navigation} = this.props;
     return <View styles={{ marginBottom: 100 }}>
				{this.state.jobs.map((job, index) =>
          <ListJobs type="agent" key={index} name={job.service_name} location={job.location} charge={job.charge}
            onPress={() => navigation.navigate('JobDetails')}
            />
			)}
			</View>
  }
}