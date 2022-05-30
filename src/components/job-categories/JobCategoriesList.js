import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import { API_URL, BASE_URL } from '../../components/configurations/config';

export default class JobCategoriesList extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`${API_URL}/job-categories/`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
  }

  render() {
     return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.state.categories.map((category, index) =>
            <ListItem type="agent" key={index} name={category.title} image={{ uri: `${BASE_URL}${category.image}` }}/>
			)}
		</ScrollView>;
  }
}