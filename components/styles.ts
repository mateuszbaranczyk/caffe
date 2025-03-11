import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  textIntro: {
    color: "white",
  },
  text: {
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    color: "white",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    marginLeft: 8,
  },
  radioContainer: {

  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: '#ffd33d'
  },
  buttonLabel: {
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
});
