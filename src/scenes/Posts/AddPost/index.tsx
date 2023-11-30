import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'AddPost'>

export default function AddPost ({navigation, route}: Props) {
  return (
    <View>
      <Text>
        Ran out of time
      </Text>
    </View>
  )
}