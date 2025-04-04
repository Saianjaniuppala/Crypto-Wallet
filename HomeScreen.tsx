import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import WalletCard from '../components/WalletCard';
import NFTGrid from '../components/NFTGrid';
import { toast } from 'sonner-native';

export default function HomeScreen() {
  const [balance, setBalance] = useState('2.45');
  const [activeTab, setActiveTab] = useState('wallet');

  const handleSend = () => {
    toast.message('Coming soon!', {
      description: 'Send feature will be available in the next update'
    });
  };

  const handleReceive = () => {
    toast.message('Coming soon!', {
      description: 'Receive feature will be available in the next update'
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1c2e', '#0f111d']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Crypto Wallet</Text>
          <Pressable style={styles.profileButton}>
            <MaterialCommunityIcons name="account-circle" size={32} color="#fff" />
          </Pressable>
        </View>

        <View style={styles.tabs}>
          <Pressable 
            style={[styles.tab, activeTab === 'wallet' && styles.activeTab]}
            onPress={() => setActiveTab('wallet')}
          >
            <Text style={[styles.tabText, activeTab === 'wallet' && styles.activeTabText]}>Wallet</Text>
          </Pressable>
          <Pressable 
            style={[styles.tab, activeTab === 'nfts' && styles.activeTab]}
            onPress={() => setActiveTab('nfts')}
          >
            <Text style={[styles.tabText, activeTab === 'nfts' && styles.activeTabText]}>NFTs</Text>
          </Pressable>
        </View>

        <ScrollView style={styles.content}>
          {activeTab === 'wallet' ? (
            <>
              <WalletCard balance={balance} />
              <View style={styles.actions}>
                <Pressable style={styles.actionButton} onPress={handleSend}>
                  <MaterialCommunityIcons name="arrow-up-circle" size={24} color="#fff" />
                  <Text style={styles.actionText}>Send</Text>
                </Pressable>
                <Pressable style={styles.actionButton} onPress={handleReceive}>
                  <MaterialCommunityIcons name="arrow-down-circle" size={24} color="#fff" />
                  <Text style={styles.actionText}>Receive</Text>
                </Pressable>
              </View>
            </>
          ) : (
            <NFTGrid />
          )}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileButton: {
    padding: 4,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7878ff',
  },
  tabText: {
    color: '#888',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 12,
    width: 120,
  },
  actionText: {
    color: '#fff',
    marginTop: 8,
  },
});