import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
     style={styles.Search}
      placeholder="Pesquise no mercado livre"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  Search:{
    left:15,
    width:270,
    height:40,
    borderRadius:15,
    top:20
    
    
  },

});

export default MyComponent;
