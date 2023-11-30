import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation, useQuery} from '@tanstack/react-query';

import {deletePost, fetchPosts} from '../../api';
import type {Post} from '../../types';

import {queryClient} from '~/providers';

// const fetchPosts = async (): Promise<Post[] => {
//   const res = await fetch('http://localhost/')
// }

type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>;

type PostListItemProps = {
  onViewDetails: () => void;
  onDelete: () => void;
} & Post;

const PostListItem = ({
  title,
  description,
  createdAt,
  id,
  onViewDetails,
  onDelete,
}: PostListItemProps) => {
  return (
    <Pressable onPress={onViewDetails}>
      <Text>{title}</Text>
      <Text>{createdAt}</Text>
      <Text>{description}</Text>
      <Pressable onPress={onDelete}>
        <Text>Delete me</Text>
      </Pressable>
    </Pressable>
  );
};

export default function Posts({navigation}: Props) {
  const {data, isLoading, error} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return deletePost(id);
    },
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const handleDeletePost = (id: number) => {
    mutation.mutate(id);
  };

  const handleNavigateToDetails = (id: number) => {
    navigation.navigate('PostDetails', {id});
  };

  const handleNavigateToAddPost = () => {
    navigation.navigate('AddPost');
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <Pressable style={styles.addPostButton} onPress={handleNavigateToAddPost}>
        <Text style={styles.addPostButtonText}>Add new post</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={data => (
          <PostListItem
            key={data.index}
            id={data.item.id}
            title={data.item.title}
            description={data.item.description}
            createdAt={data.item.createdAt}
            onDelete={() => handleDeletePost(data.item.id)}
            onViewDetails={() => {
              handleNavigateToDetails(data.item.id);
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addPostButton: {
    borderWidth: 2,
    borderColor: '#219EF9',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  addPostButtonText: {
    textAlign: 'center',
    color: '#219EF9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
