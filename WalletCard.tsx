import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface WalletCardProps {
  balance: string;
}

export default function WalletCard({ balance }: WalletCardProps) {
  return (
    <Pressable>
      <LinearGradient
        colors={['#7878ff', '#5454ff']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Total Balance</Text>
          <MaterialCommunityIcons name="ethereum" size={24} color="#fff" />
        </View>
        <Text style={styles.balance}>{balance} ETH</Text>
        <Text style={styles.fiatBalance}>≈ $4,523.67 USD</Text>
        
        <View style={styles.cardFooter}>
          <Text style={styles.address}>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#7878ff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 16,
  },
  balance: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  },
  fiatBalance: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 16,
    marginTop: 4,
  },
  cardFooter: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 12,
    borderRadius: 10,
  },
  address: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
});