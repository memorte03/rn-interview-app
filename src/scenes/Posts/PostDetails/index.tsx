import { useQuery } from "@tanstack/react-query";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchPost } from "../../../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetails'>

export default function PostDetails({ navigation, route }:Props) {
  const { data, isLoading, error } = useQuery({queryKey: ['post'], queryFn: () => fetchPost(route.params.params.id)});

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title} >
          {data?.title}
        </Text>
        <Text style={styles.date} >
          {data?.createdAt}
        </Text>
        <Text>
          {data?.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  date: {
    fontSize: 16,
    color: '#5E5E5E'
  }
})