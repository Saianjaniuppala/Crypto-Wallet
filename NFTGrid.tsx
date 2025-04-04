import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MOCK_NFTS = [
  {
    id: '1',
    name: 'Crypto Punk #1234',
    price: '0.5 ETH',
    image: 'https://via.placeholder.com/150' // Replace with a working image URL
  },
  {
    id: '2',
    name: 'Bored Ape #5678',
    price: '12.5 ETH',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    name: 'Doodle #9012',
    price: '0.8 ETH',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: '4',
    name: 'Art Block #3456',
    price: '1.2 ETH',
    image: 'https://via.placeholder.com/150'
  }
];

export default function NFTGrid() {
  const renderItem = ({ item }) => (
    <Pressable style={styles.nftCard}>
      <Image source={{ uri: item.image }} style={styles.nftImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.nftInfo}
      >
        <Text style={styles.nftName}>{item.name}</Text>
        <Text style={styles.nftPrice}>{item.price}</Text>
      </LinearGradient>
    </Pressable>
  );

  return (
    <FlatList
      data={MOCK_NFTS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 10,
  },
  nftCard: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#2a2d3f',
  },
  nftImage: {
    width: '100%',
    aspectRatio: 1,
  },
  nftInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  nftName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nftPrice: {
    color: '#7878ff',
    fontSize: 12,
    marginTop: 4,
  },
});
