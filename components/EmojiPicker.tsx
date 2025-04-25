import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren, ReactNode } from "react";
import { Modal, Pressable, View, Text, StyleSheet } from "react-native";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

type Props2 = {
    isVisible: boolean;
    onClose: () => void;
    children?: ReactNode
}

export default function EmojiPicker({ isVisible, onClose, children }: Props2) {


    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name="close" color="#fff" size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
  });