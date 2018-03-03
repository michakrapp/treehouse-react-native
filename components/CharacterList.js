import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Character from './Character';

class CharacterList extends Component{

  constructor(props){
    super(props);

    this.getCharacters = this.getCharacters.bind(this);
  }
  render(){

    return(
      <View style={styles.container}>
        <ScrollView>
          {this.getCharacters()}
        </ScrollView>
      </View>
    )
  }

  getCharacters(){

    let { characters} = this.props;

    return Object.keys(characters).map((id, i) => {
      return(<Character key={i} characterThumbnail={characters[id].thumbnail} />);
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

CharacterList.propTypes = {
  characters: PropTypes.object.isRequired,
}

export default CharacterList;
