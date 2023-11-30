import { useMutation, useQuery } from "@tanstack/react-query";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { Post } from "../../types";
import { deletePostById, fetchPosts } from "../../api";
import { queryClient } from "~/providers";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// const fetchPosts = async (): Promise<Post[] => {
//   const res = await fetch('http://localhost/')
// }

type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>

interface PostListItemProps extends Post {
  onViewDetails: () => void; 
  onDelete: () => void;
};

const PostListItem = ({title, description, createdAt, id, onViewDetails, onDelete}: PostListItemProps) => {
  return(
    <Pressable onPress={onViewDetails}>
      <Text>
        {title}
      </Text>
      <Text>
        {createdAt}
      </Text>
      <Text>
        {description}
      </Text>
      <Pressable onPress={onDelete}><Text>Delete me</Text></Pressable>
    </Pressable>
  )
}

export default function Posts ({ navigation }: Props) {
  const { data, isLoading, error } = useQuery({queryKey: ['posts'], queryFn: fetchPosts});
  const deletePost = useMutation({mutationFn: (id: number) => {
    return deletePostById(id)
  }, onSuccess: () => queryClient.invalidateQueries()})

  const handleDeletePost = (id: number) => {
    deletePost.mutate(id);

  } 

  const handleNavigateToDetails = (id: number) => {
    navigation.navigate("PostDetails", { params: { id: id }});
  }

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={(data) => <PostListItem key={data.index} onDelete={() => handleDeletePost(data.item.id)} onViewDetails={() => {handleNavigateToDetails(data.item.id)}}id={data.item.id} title={data.item.title} description={data.item.description} createdAt={data.item.createdAt}/>} 
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}