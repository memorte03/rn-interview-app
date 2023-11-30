import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  subtitle: string;
  paragraph: string;
  ctaButtonText: string;
  ctaButtonOnclick: () => void;
};
export default function TextSection({
  title,
  subtitle,
  paragraph,
  ctaButtonText,
  ctaButtonOnclick,
}: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.paragraph}>{paragraph}</Text>

      <Pressable onPress={ctaButtonOnclick}>
        <Text style={styles.ctaButton}>{ctaButtonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 32,
  },
  header: {
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  section: {
    paddingVertical: 64,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
    color: '#219EF9',
  },
  paragraph: {
    fontSize: 16,
    color: '#2D2F32',
    lineHeight: 24,
    marginBottom: 48,
  },
  ctaButton: {
    borderWidth: 2,
    borderColor: '#219EF9',
    paddingVertical: 16,
    paddingHorizontal: 24,
    textAlign: 'center',
    color: '#219EF9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
