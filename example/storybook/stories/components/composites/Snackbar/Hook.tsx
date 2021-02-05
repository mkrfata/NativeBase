import React from 'react';
import {
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  useSnackbar,
  VStack,
} from 'native-base';
export default function () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status="success">
      <AlertIcon />
      <AlertDescription>Welldone, we are proud of you.</AlertDescription>
    </Alert>
  );
  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setSnackbar(template, {
            accessibilityAnnouncement: 'Well done, we are proud of you.',
          })
        }
      >
        Get Default Snackbar
      </Button>
      <Button
        onPress={() =>
          setSnackbar(template, {
            placement: 'top',
            accessibilityAnnouncement: 'Well done, we are proud of you.',
          })
        }
      >
        Get Snackbar With Overlay
      </Button>
    </VStack>
  );
}
