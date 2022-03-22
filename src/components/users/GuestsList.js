import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { observer } from "mobx-react";
import GuestItem from "./GuestItem";
import authStore from "../../stores/authStore";
// import { Avatar } from "native-base";

const GuestList = () => {
  const guestList = authStore.users.map((user) => (
    <GuestItem key={user._id} user={user} />
  ));

  return <ScrollView>{guestList}</ScrollView>;
};

export default observer(GuestList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
