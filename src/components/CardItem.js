import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Card ,Title, Paragraph} from 'react-native-paper';

function CardItem(props) {
  const styles = StyleSheet.create({
    default: {
      backgroundColor: 'white',
      marginTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: '500'
    },
    para: {
      marginTop: 10,
      fontSize: 20
    }
  });
  return (
     <Card style={styles.default} onPress={() => props.navigation.navigate('Story', {id: props.id, title: props.title, content:props.content})}>
          <Card.Cover  source={require('../assets/images/sharestory.png')} >
          </Card.Cover>
          <Card.Content>
            <Title style={styles.title}>{props.title}</Title>
            {/* <Paragraph style={styles.para}>{props.title}</Paragraph> */}
          </Card.Content>
    </Card>
  );
}


export default CardItem;