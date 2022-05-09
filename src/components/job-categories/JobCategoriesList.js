import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import { BASE_URL } from '../../components/configurations/config';

const profile_img = "https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg";
export default class JobCategoriesList extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/job-categories/`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
  }

  render() {
     return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{this.state.categories.map((category, index) =>
				<ListItem type="agent" key={index} name={category.id} image={{ uri: profile_img }}/>
			)}
		</ScrollView>;
  }
}