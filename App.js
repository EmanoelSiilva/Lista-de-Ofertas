import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import PromotionList from './components/PromotionList';



export default function App() {
  return (
    <>
      <StatusBar/>
      <SafeAreaView>
        <Header/>
        <PromotionList/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
