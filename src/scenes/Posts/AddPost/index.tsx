import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import * as yup from 'yup';

import type {CreatePost} from '../../../api';
import {addPost} from '../../../api';
import {queryClient} from '../../../providers';
import {Post} from '../../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddPost'>;

type FormData = {
  title: string;
  description: string;
};

const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
  })
  .required();

export default function AddPost({navigation, route}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const mutation = useMutation({
    mutationFn: (post: CreatePost) => {
      return addPost(post);
    },
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(
      {
        ...data,
      },
      {onSuccess: () => navigation.navigate('Posts')},
    );
  };

  return (
    <View>
      <Controller
        control={control}
        name="title"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            value={value}
            placeholder="Title"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.title && (
        <Text style={styles.errorText}>{errors.title.message}</Text>
      )}

      <Controller
        control={control}
        name="description"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            value={value}
            placeholder="Description"
            style={styles.input}
            multiline
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.description && (
        <Text style={styles.errorText}>{errors.description.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  errorText: {
    color: 'red',
  },
});
