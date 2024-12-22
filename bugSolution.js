import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// Error boundary component to catch errors and display a fallback UI
function ErrorBoundary(props) {
  const [hasError, setHasError] = React.useState(false);
  
  function handleError() {
    setHasError(true);
  }

  if (hasError) {
    return <View style={styles.errorContainer}>Error Loading Image</View>;
  }

  return props.children;
}

function MyComponent() {
  const imageUrl = 'https://example.com/image-that-does-not-exist.jpg'; // 404 URL
  return (
    <ErrorBoundary>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          onError={handleError}          
        />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  }
});

export default MyComponent;